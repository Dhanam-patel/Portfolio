import { NextResponse } from "next/server"

export async function GET() {
  const token = process.env.PINTEREST_ACCESS_TOKEN

  if (!token) {
    return NextResponse.json({ error: "Pinterest token not found" }, { status: 500 })
  }

  try {
    // 1. Fetch all boards for the user
    const boardsResponse = await fetch("https://api.pinterest.com/v5/boards", {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      next: { revalidate: 0 }
    })

    if (!boardsResponse.ok) {
      const errorData = await boardsResponse.json()
      console.error("Pinterest Boards API Error:", errorData)
      return NextResponse.json({ error: "Failed to fetch boards", details: errorData }, { status: boardsResponse.status })
    }

    const boardsData = await boardsResponse.json()
    const foundBoards = boardsData.items || []

    if (foundBoards.length === 0) {
      return NextResponse.json({
        error: "No boards found for this user account.",
        debug: "items array is empty"
      }, { status: 404 })
    }

    // 2. Fetch pins from ALL boards for discovery
    const allPinsPromises = foundBoards.map(async (board: any) => {
      try {
        const pResponse = await fetch(`https://api.pinterest.com/v5/boards/${board.id}/pins`, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          next: { revalidate: 0 }
        })
        if (!pResponse.ok) return []
        const pData = await pResponse.json()
        return pData.items || []
      } catch (err) {
        return []
      }
    })

    const pinsResults = await Promise.all(allPinsPromises)
    const allPins = pinsResults.flat()

    if (allPins.length === 0) {
      return NextResponse.json({
        error: "Found boards, but no pins were found in any of them.",
        availableBoards: foundBoards.map((b: any) => b.name)
      }, { status: 200 })
    }

    // 3. Map Pinterest pins to our gallery structure
    const pins = allPins.map((pin: any) => {
      const mediaImages = pin.media?.images || {}
      const imageUrl =
        mediaImages["1200x"]?.url ||
        mediaImages["600x"]?.url ||
        mediaImages["400x300"]?.url ||
        mediaImages["150x150"]?.url ||
        ""

      return {
        id: pin.id,
        title: pin.title || pin.alt_text || pin.description?.slice(0, 40) || "Untitled Capture",
        category: "Photography",
        image: imageUrl,
        link: pin.link || `https://www.pinterest.com/pin/${pin.id}/`,
        dominantColor: pin.dominant_color || "#71717a",
        size: Math.random() > 0.5 ? "aspect-[4/5]" : "aspect-square",
      }
    })

    return NextResponse.json({
      pins,
      debug: {
        totalBoards: foundBoards.length,
        totalPins: allPins.length
      }
    })
  } catch (error: any) {
    console.error("Pinterest API Exception:", error)
    return NextResponse.json({ error: "Internal server error", message: error.message }, { status: 500 })
  }
}

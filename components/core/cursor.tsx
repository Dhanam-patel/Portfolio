"use client"

import { useEffect, useState } from "react"
import { motion, useSpring } from "framer-motion"

export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false)
  const [isHovering, setIsHovering] = useState(false)

  const cursorX = useSpring(0, { stiffness: 500, damping: 28 })
  const cursorY = useSpring(0, { stiffness: 500, damping: 28 })
  const scaleSpring = useSpring(1, { stiffness: 300, damping: 20 })

  useEffect(() => {
    // Check if device supports hover (not touch)
    const hasHover = window.matchMedia("(hover: hover)").matches
    if (!hasHover) return

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
      setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    const handleHoverStart = () => {
      setIsHovering(true)
      scaleSpring.set(2.5)
    }
    const handleHoverEnd = () => {
      setIsHovering(false)
      scaleSpring.set(1)
    }

    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseleave", handleMouseLeave)

    // Add hover listeners to interactive elements
    const interactiveElements = document.querySelectorAll(
      "a, button, [role='button'], input, textarea"
    )
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleHoverStart)
      el.addEventListener("mouseleave", handleHoverEnd)
    })

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseleave", handleMouseLeave)
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleHoverStart)
        el.removeEventListener("mouseleave", handleHoverEnd)
      })
    }
  }, [cursorX, cursorY, scaleSpring])

  return (
    <>
      {/* Main cursor - Using white + mix-blend-difference so it's black on white and white on black */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 rounded-full bg-white pointer-events-none z-[10000] mix-blend-difference hidden md:block"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isVisible ? 1 : 0,
          scale: scaleSpring,
        }}
      />
      {/* Cursor ring - Use accent color for brand recognition */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 rounded-full border border-accent/40 pointer-events-none z-[9999] hidden md:block"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isVisible ? 1 : 0,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      />
    </>
  )
}

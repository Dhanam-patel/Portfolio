"use client"

import { useEffect, useState, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function ThemeTransition() {
  const [isAnimating, setIsAnimating] = useState(false)
  const [targetTheme, setTargetTheme] = useState<string>("dark")

  useEffect(() => {
    const handleThemeChange = (e: Event) => {
      const detail = (e as CustomEvent).detail
      setTargetTheme(detail.theme)
      setIsAnimating(true)
      
      // Auto-end the transition after the circle expands
      setTimeout(() => {
        setIsAnimating(false)
      }, 700)
    }

    window.addEventListener("theme-change", handleThemeChange)
    return () => window.removeEventListener("theme-change", handleThemeChange)
  }, [])

  return (
    <AnimatePresence
      onExitComplete={() => setIsAnimating(false)}
    >
      {isAnimating && (
        <motion.div
          key={targetTheme}
          initial={{ clipPath: "circle(0% at 50% 50%)", opacity: 1 }}
          animate={{ clipPath: "circle(150% at 50% 50%)", opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            clipPath: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
            opacity: { duration: 0.2, delay: 0.05 },
          }}
          className="fixed inset-0 z-[9998] pointer-events-none"
          style={{
            backgroundColor: targetTheme === "dark" ? "#141414" : "#ffffff",
          }}
        />
      )}
    </AnimatePresence>
  )
}

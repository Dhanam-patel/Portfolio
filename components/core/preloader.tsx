"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"

const GREETINGS = [
  { text: "Hello", hold: 300 },
  { text: "こんにちは", hold: 100 },
  { text: "¡Hola!", hold: 100 },
  { text: "Bonjour", hold: 100 },
  { text: "안녕하세요", hold: 100 },
  { text: "Hallo", hold: 100 },
  { text: "Ciao", hold: 100 },
  { text: "नमस्ते", hold: 100 }, // Hindi at index 06
  { text: "કેમ છો?", hold: 300 },
]

const EASE = [0.4, 0, 0.2, 1]

export function Preloader({ onComplete }: { onComplete: () => void }) {
  const [index, setIndex] = useState(0)
  const [isExiting, setIsExiting] = useState(false)

  useEffect(() => {
    if (index < GREETINGS.length) {
      const timer = setTimeout(() => {
        if (index === GREETINGS.length - 1) {
          setIsExiting(true)
          setTimeout(onComplete, 400) // Match exit animation duration
        } else {
          setIndex(index + 1)
        }
      }, GREETINGS[index].hold + 600) // 300ms in + hold + 300ms out

      return () => clearTimeout(timer)
    }
  }, [index, onComplete])

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={isExiting ? { scale: 20, opacity: 0 } : { scale: 1, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeIn" }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background pointer-events-none overflow-hidden"
    >
      {/* Central Anchor: Geometric Concentric Circles */}
      <div className="relative flex items-center justify-center">
        {/* Static Outer Circle - Upsized to fit all text */}
        <div className="absolute w-[240px] h-[240px] rounded-full border border-foreground/30 antialiased" />

        {/* Breathing Inner Circle */}
        <motion.div
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute w-[200px] h-[200px] rounded-full border border-foreground antialiased"
        />

        {/* Typographic Loop */}
        <div className="relative z-10 text-center">
          <AnimatePresence mode="wait">
            {!isExiting && (
              <motion.h2
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{
                  duration: 0.3,
                  ease: EASE,
                }}
                className="text-2xl md:text-3xl font-bold font-sans tracking-tight text-foreground px-4"
              >
                {GREETINGS[index].text}
              </motion.h2>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Motion Blur SVG Filter (minimal sample rate emulation) */}
      <svg className="hidden">
        <filter id="precise-blur">
          <feGaussianBlur in="SourceGraphic" stdDeviation="0.2" />
        </filter>
      </svg>
    </motion.div>
  )
}

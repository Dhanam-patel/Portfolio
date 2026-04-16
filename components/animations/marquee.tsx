"use client"

import { motion } from "framer-motion"

interface MarqueeProps {
  text: string
  className?: string
  speed?: number
  outline?: boolean
}

export function Marquee({ text, className = "", speed = 10, outline = false }: MarqueeProps) {
  const outlineStyles = outline ? {
    WebkitTextStroke: "1px currentColor",
    color: "transparent"
  } : {}

  return (
    <div className={`overflow-hidden whitespace-nowrap flex select-none ${className}`}>
      <motion.div
        animate={{ x: [0, "-50%"] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
          },
        }}
        className="flex"
      >
        <span className="inline-block px-4" style={outlineStyles}>{text}</span>
        <span className="inline-block px-4" style={outlineStyles}>{text}</span>
        <span className="inline-block px-4" style={outlineStyles}>{text}</span>
        <span className="inline-block px-4" style={outlineStyles}>{text}</span>
      </motion.div>
    </div>
  )
}

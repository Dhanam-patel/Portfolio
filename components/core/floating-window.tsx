"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

interface FloatingWindowProps {
  children: ReactNode
  className?: string
  delay?: number
}

export function FloatingWindow({ children, className = "", delay = 0 }: FloatingWindowProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.6, 
        delay,
        ease: [0.25, 0.1, 0.25, 1]
      }}
      className={`relative bg-card/50 backdrop-blur-xl border border-border/50 rounded-2xl overflow-hidden shadow-2xl shadow-black/5 dark:shadow-black/20 ${className}`}
    >
      {/* Window Header */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-border/30">
        <div className="w-3 h-3 rounded-full bg-destructive/60" />
        <div className="w-3 h-3 rounded-full bg-accent/60" />
        <div className="w-3 h-3 rounded-full bg-green-500/60" />
      </div>
      
      {/* Window Content */}
      <div className="p-6">
        {children}
      </div>
      
      {/* Subtle Glow Effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/5 via-transparent to-transparent pointer-events-none" />
    </motion.div>
  )
}

interface FloatingCardProps {
  children: ReactNode
  className?: string
  delay?: number
  hover?: boolean
}

export function FloatingCard({ children, className = "", delay = 0, hover = true }: FloatingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.6, 
        delay,
        ease: [0.25, 0.1, 0.25, 1]
      }}
      whileHover={hover ? { y: -5, transition: { duration: 0.3 } } : undefined}
      className={`relative bg-card/30 backdrop-blur-lg border border-border/30 rounded-xl overflow-hidden ${className}`}
    >
      {children}
      
      {/* Hover Glow */}
      <div className="absolute inset-0 rounded-xl opacity-0 hover:opacity-100 bg-gradient-to-br from-accent/5 via-transparent to-transparent transition-opacity duration-500 pointer-events-none" />
    </motion.div>
  )
}

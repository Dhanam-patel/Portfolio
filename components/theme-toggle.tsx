"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { motion, AnimatePresence } from "framer-motion"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center">
        <div className="w-5 h-5" />
      </div>
    )
  }

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark"
    
    // Disable global transitions for the hard-cut reveal
    document.documentElement.classList.add("no-transitions")
    
    // Dispatch event for the overlay
    window.dispatchEvent(new CustomEvent("theme-change", { detail: { theme: next } }))
    
    // Switch theme behind the coverage
    setTimeout(() => {
      setTheme(next)
    }, 350)

    // Re-enable transitions after the reveal animation finishes (0.6s + buffer)
    setTimeout(() => {
      document.documentElement.classList.remove("no-transitions")
    }, 700)
  }

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-foreground/5 overflow-hidden"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      <AnimatePresence mode="wait">
        {theme === "dark" ? (
          <motion.div
            key="moon"
            initial={{ y: 20, opacity: 0, rotate: 45 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: -20, opacity: 0, rotate: -45 }}
            transition={{ duration: 0.3, ease: "anticipate" }}
          >
            <Moon className="h-5 w-5 text-accent" />
          </motion.div>
        ) : (
          <motion.div
            key="sun"
            initial={{ y: 20, opacity: 0, rotate: -45 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: -20, opacity: 0, rotate: 45 }}
            transition={{ duration: 0.3, ease: "anticipate" }}
          >
            <Sun className="h-5 w-5 text-accent" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  )
}

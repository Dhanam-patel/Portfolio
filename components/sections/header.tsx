"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { useSmoothScroll } from "@/hooks/use-scroll-animation"
import { ThemeToggle } from "@/components/theme-toggle"

import { ChevronDown, Menu, X } from "lucide-react"
import Link from "next/link"

import { usePathname, useRouter } from "next/navigation"

export function Header({ isLoaded = true }: { isLoaded?: boolean }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isHobbiesOpen, setIsHobbiesOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()
  const scrollTo = useSmoothScroll()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { label: "About", id: "about" },
    { label: "Experience", id: "experience" },
    { label: "Projects", id: "work" },
    { label: "Contact", id: "contact" },
  ]

  const hobbies = [
    { label: "Video Editing", href: "/hobbies/video-editing" },
    { label: "Photography", href: "/hobbies/photography" },
  ]

  const handleNavClick = (e: React.MouseEvent, id: string) => {
    if (pathname === '/') {
      e.preventDefault()
      scrollTo(id)
    }
  }

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={isLoaded ? { y: 0, opacity: 1 } : { y: -100, opacity: 0 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-6 flex items-center justify-between">
        <Link
          href="/"
          onClick={(e) => {
            if (pathname === '/') {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: "smooth" })
            }
          }}
          className="text-foreground font-medium text-lg tracking-tight hover:text-accent transition-colors duration-300"
        >
          Dhanam Patel
        </Link>

        <div className="flex items-center gap-8">
          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.li
                key={item.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index + 0.3 }}
              >
                <Link
                  href={`/#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className="relative text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-foreground transition-all duration-300 group-hover:w-full" />
                </Link>
              </motion.li>
            ))}

            {/* Hobbies Dropdown */}
            <motion.li
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * navItems.length + 0.3 }}
              className="relative"
              onMouseEnter={() => setIsHobbiesOpen(true)}
              onMouseLeave={() => setIsHobbiesOpen(false)}
            >
              <button
                className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 group py-2"
              >
                Hobbies
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${isHobbiesOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {isHobbiesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute top-full left-0 mt-2 w-48 bg-card border border-border shadow-xl rounded-xl overflow-hidden backdrop-blur-xl"
                  >
                    <div className="py-2">
                      {hobbies.map((hobby) => (
                        <Link
                          key={hobby.label}
                          href={hobby.href}
                          className="block px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-foreground/5 transition-all duration-300 font-medium"
                        >
                          {hobby.label}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.li>
          </ul>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="flex items-center gap-4"
          >
            <ThemeToggle />
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </motion.div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-[80px] p-6 md:hidden z-40"
          >
            <div className="bg-card border border-border shadow-2xl rounded-2xl p-6 backdrop-blur-xl space-y-8">
              <ul className="space-y-6">
                {navItems.map((item) => (
                  <motion.li key={item.id}>
                    <Link
                      href={`/#${item.id}`}
                      onClick={(e) => {
                        handleNavClick(e, item.id)
                        setIsMobileMenuOpen(false)
                      }}
                      className="text-2xl font-medium text-foreground"
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              <div className="pt-8 border-t border-border">
                <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">Hobbies</h4>
                <div className="grid grid-cols-2 gap-4">
                  {hobbies.map((hobby) => (
                    <Link
                      key={hobby.label}
                      href={hobby.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-sm font-medium text-muted-foreground hover:text-foreground"
                    >
                      {hobby.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

"use client"

import { motion } from "framer-motion"
import { Linkedin, Github, Mail, Twitter, FileText } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Hero({ isLoaded = true }: { isLoaded?: boolean }) {
  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/dhanam-patel-9bb991298/", label: "LinkedIn", color: "text-[#0077B5] hover:bg-[#0077B5]/10" },
    { icon: Github, href: "https://github.com/Dhanam-patel", label: "GitHub", color: "text-foreground hover:bg-foreground/10" },
    { icon: Twitter, href: "https://x.com/Athanox_", label: "X", color: "text-foreground hover:bg-foreground/10" },
    { icon: Mail, href: "mailto:dhanampatel2005@gmail.com", label: "Email", color: "text-[#EA4335] hover:bg-[#EA4335]/10" },
    { icon: FileText, href: "/dhanam_resume_v2.pdf", label: "Resume", color: "text-[#EC4899] hover:bg-[#EC4899]/10" },
  ]

  // Animation variants for synchronized reveal
  const fadeInUp = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
    }
  }

  return (
    <section className="min-h-screen flex flex-col justify-center relative px-6 md:px-12 lg:px-20 pt-24">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16 lg:gap-24">
          {/* Profile Picture */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={isLoaded ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-muted to-muted/30 rounded-2xl -rotate-3" />
              <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-border/50 shadow-xl">
                <Image
                  src="/images/profile.png"
                  alt="Dhanam Patel"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>

          {/* Text Content */}
          <div className="flex-1 text-center md:text-left">
            {/* Greeting */}
            <motion.p
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
              variants={fadeInUp}
              className="text-muted-foreground text-base md:text-lg mb-4"
            >
              {"I'm Dhanam Patel, and I enjoy"}
            </motion.p>

            {/* Main headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold leading-[1.1] tracking-tight mb-4"
            >
              Building <span className="italic">intelligent</span>
              <br />
              <span className="text-accent italic">AI systems</span>
            </motion.h1>

            {/* Role - Spring Physics Landing */}
            <motion.p
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={isLoaded ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0 }}
              transition={{
                type: "spring",
                stiffness: 140,
                damping: 16,
                delay: 0.4
              }}
              className="text-xl md:text-2xl font-bold text-foreground mb-8 tracking-tight"
            >
              AI & ML Engineer
            </motion.p>

            {/* Social Links - Synced Fade & Scale */}
            <motion.div
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
              variants={{
                visible: {
                  transition: { staggerChildren: 0.1, delayChildren: 0.5 }
                }
              }}
              className="flex items-center justify-center md:justify-start gap-4"
            >
              {socialLinks.map((link, index) => (
                <motion.div
                  key={link.label}
                  variants={fadeInUp}
                >
                  <Link
                    href={link.href}
                    target={link.href.startsWith("http") || link.href.endsWith(".pdf") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") || link.href.endsWith(".pdf") ? "noopener noreferrer" : undefined}
                    className={`p-3 rounded-xl border border-border/50 ${link.color} transition-all duration-300 flex items-center justify-center hover:scale-110 hover:shadow-lg hover:border-accent/50 group cursor-none`}
                    aria-label={link.label}
                  >
                    <link.icon className="w-5 h-5" />
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isLoaded ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-px h-16 bg-gradient-to-b from-transparent via-muted-foreground to-transparent"
        />
      </motion.div>
    </section>
  )
}

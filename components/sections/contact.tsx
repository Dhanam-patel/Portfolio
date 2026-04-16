"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, Mail } from "lucide-react"
import Link from "next/link"
import { FadeIn } from "../animations/fade-in"
import { FloatingWindow } from "@/components/core/floating-window"

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/Dhanam-patel",
    icon: () => (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "X",
    href: "https://x.com/Athanox_",
    icon: () => (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/dhanam-patel-9bb991298/",
    icon: () => (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
]

export function Contact() {
  return (
    <section id="contact" className="py-24 lg:py-32 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="space-y-4 mb-16">
            <span className="text-sm text-muted-foreground tracking-wider uppercase">
              Contact
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium tracking-tight max-w-3xl">
              Let&apos;s build something{" "}
              <span className="italic text-accent">amazing</span> together
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Email CTA */}
          <FadeIn delay={0.2}>
            <FloatingWindow className="h-full">
              <div className="space-y-6">
                <motion.a
                  href="mailto:dhanampatel2005@gmail.com"
                  className="group inline-flex items-center gap-3 text-xl md:text-2xl font-medium hover:text-accent transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  <Mail className="w-6 h-6" />
                  <span className="relative">
                    Get in touch
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full" />
                  </span>
                  <ArrowUpRight className="w-5 h-5 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
                </motion.a>

                <p className="text-muted-foreground text-base leading-relaxed">
                  Currently exploring retrieval optimization, PyTorch-based model fine-tuning,
                  LLM evaluation, and scalable AI deployment on GCP — turning experiments into
                  real-world systems.
                </p>
              </div>
            </FloatingWindow>
          </FadeIn>

          {/* Social Links */}
          <FadeIn delay={0.3}>
            <div className="space-y-6">
              <h3 className="text-sm text-muted-foreground tracking-wider uppercase">
                Connect
              </h3>
              <div className="space-y-3">
                {socialLinks.map((link, index) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                  >
                    <Link
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between py-4 px-4 bg-card/30 backdrop-blur-sm border border-border/30 rounded-xl hover:border-accent/50 hover:bg-card/50 transition-all duration-300"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                          <link.icon />
                        </span>
                        <span className="text-lg">{link.label}</span>
                      </div>
                      <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

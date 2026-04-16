"use client"

import { motion } from "framer-motion"
import { Header } from "@/components/sections/header"
import { Maximize2, ExternalLink } from "lucide-react"
import { ThemeTransition } from "@/components/core/theme-transition"
import { CustomCursor } from "@/components/core/cursor"
import { GridBackground } from "@/components/core/grid-background"

const photos = [
  { id: 1, title: "Urban Rhythms", category: "Street", size: "aspect-[4/5]" },
  { id: 2, title: "Golden Hour", category: "Landscape", size: "aspect-square" },
  { id: 3, title: "Portrait of Silence", category: "Abstract", size: "aspect-[2/3]" },
  { id: 4, title: "Neon Nights", category: "Street", size: "aspect-square" },
  { id: 5, title: "Verdant Dreams", category: "Nature", size: "aspect-[4/5]" },
  { id: 6, title: "Architectural Symmetry", category: "Architecture", size: "aspect-[3/4]" },
]

export default function Photography() {
  return (
    <main className="min-h-screen">
      <GridBackground />
      <ThemeTransition />
      <CustomCursor />
      <Header />

      <section className="pt-40 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto pb-24">
        {/* Hero Section of the page */}
        <div className="max-w-3xl mb-24">

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-8xl font-bold font-serif mb-8 italic"
          >
            Photo <span className="text-accent underline underline-offset-[12px] decoration-accent/20 not-italic">graphy</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-muted-foreground leading-relaxed font-medium"
          >
            Capturing the world through a lens of curiosity. My work explores the intersection of light, shadow, and human emotion, focusing on moments that often go unnoticed.
          </motion.p>
        </div>

        {/* Masonry-style Gallery */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="relative group rounded-3xl overflow-hidden cursor-none border border-border/50 bg-muted/5"
            >
              <div className={`${photo.size} w-full transition-all duration-700 group-hover:scale-105 bg-muted/20 flex items-center justify-center`}>
                <span className="text-muted-foreground/40 font-medium italic tracking-tighter">Photo {photo.id}</span>
              </div>

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 p-8 flex flex-col justify-end">
                <div className="flex items-end justify-between">
                  <div>
                    <span className="text-[10px] font-bold text-accent uppercase tracking-[0.3em] mb-2 block">{photo.category}</span>
                    <h3 className="text-xl font-bold text-foreground font-serif tracking-tight">{photo.title}</h3>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-foreground text-background flex items-center justify-center scale-75 group-hover:scale-100 transition-transform duration-500">
                    <Maximize2 className="w-5 h-5" />
                  </div>
                </div>
              </div>

              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="w-8 h-8 rounded-full bg-background/50 backdrop-blur-md border border-white/10 flex items-center justify-center">
                  <ExternalLink className="w-4 h-4 text-foreground/70" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-32 pt-12 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-8"
        >
          <div className="flex flex-col gap-2">
            <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.4em]">Equipment</span>
            <p className="text-sm font-medium text-foreground/70">Sony A7IV • 35mm f/1.4 GM • 85mm f/1.8 </p>
          </div>
          <p className="text-xs text-muted-foreground font-medium uppercase tracking-widest italic">Est. 2021 — Portfolio of light and moments</p>
        </motion.div>
      </section>
    </main>
  )
}

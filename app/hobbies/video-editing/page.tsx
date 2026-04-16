"use client"

import { motion } from "framer-motion"
import { Header } from "@/components/sections/header"
import { Play, ExternalLink } from "lucide-react"
import { ThemeTransition } from "@/components/core/theme-transition"
import { CustomCursor } from "@/components/core/cursor"
import { GridBackground } from "@/components/core/grid-background"

export default function VideoEditing() {
  const projects = [
    { title: "Commercial Brand Reel", duration: "0:45", category: "Color Grading" },
    { title: "Urban Exploration", duration: "1:20", category: "Motion Graphics" },
    { title: "Tech Product Showcase", duration: "0:30", category: "3D Rendering" },
  ]

  return (
    <main className="min-h-screen">
      <GridBackground />
      <ThemeTransition />
      <CustomCursor />
      <Header />
      
      <section className="pt-40 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          
          <h1 className="text-5xl md:text-7xl font-bold font-serif mb-8 italic leading-tight">
            Video <span className="text-accent underline decoration-accent/30 not-italic">Editing</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed mb-16">
            Exploring the art of storytelling through cinematic sequences, advanced color grading, and dynamic motion graphics. I specialize in rhythmic editing that flows with sound design.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 + (index * 0.1) }}
                className="group relative aspect-video bg-muted/10 rounded-3xl overflow-hidden border border-border/50 cursor-none"
              >
                <div className="w-full h-full flex items-center justify-center bg-muted/20 transition-all duration-700 group-hover:scale-105">
                  <div className="w-16 h-16 rounded-full bg-accent/20 backdrop-blur-md flex items-center justify-center border border-accent/30 group-hover:bg-accent group-hover:scale-110 transition-all duration-500">
                    <Play className="w-6 h-6 text-accent group-hover:text-accent-foreground fill-current ml-1" />
                  </div>
                </div>
                
                {/* Meta details */}
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-background via-background/40 to-transparent">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-bold text-accent uppercase tracking-[0.3em] mb-1 block">{project.category}</span>
                      <h3 className="text-xl font-bold text-foreground font-serif">{project.title}</h3>
                    </div>
                    <span className="text-xs font-mono text-muted-foreground opacity-60">{project.duration}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </main>
  )
}

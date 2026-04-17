"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Briefcase, Github } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

const projects = [
  {
    title: "Dear AI",
    year: "2024",
    description: "An AI-powered personal assistant with natural language understanding and context-aware responses.",
    category: "AI/ML Development",
    tech: "Python, FastAPI, LangChain, Gemini AI, PostgreSQL",
    live: "https://dear-ai-yh2c.onrender.com/",
    github: "https://github.com/Dhanam-patel/Dear-AI",
    image: "/Projects/dear_ai.jpg",
    bgColor: "bg-card/40",
  },
  {
    title: "InsureX AI",
    year: "2024",
    description: "AI-driven insurance premium prediction platform utilizing machine learning for accurate cost estimation.",
    category: "Machine Learning",
    tech: "React, Tailwind, Python, Scikit-learn, Joblib",
    live: "https://insurex-ai.vercel.app/",
    github: "https://github.com/Dhanam-patel/InsureX_AI---Insurance-Premium-Prediction",
    image: "/Projects/InsureX AI.jpg",
    bgColor: "bg-card/40",
  },
  {
    title: "Eco Track",
    year: "2024",
    description: "Machine learning model for greenhouse gas emission predictions using environmental data.",
    category: "Machine Learning",
    tech: "Python, Scikit-learn, Joblib, Pandas",
    live: "https://ghg-prediction.streamlit.app/",
    github: "https://github.com/Dhanam-patel/GHG-Prediction-Edunet-Green-Skill-Internship-",
    image: "/Projects/GHG.jpg",
    bgColor: "bg-card/40",
  },
  {
    title: "AFK Tribe",
    year: "2024",
    description: "A community platform for gamers with real-time features and social interactions.",
    category: "Full-Stack Development",
    tech: "React, Tailwind",
    live: "https://afk-tribe-e-commerce.vercel.app/",
    github: "https://github.com/Dhanam-patel/AFK-Tribe-E-Commerce-",
    image: "/Projects/AFK_Tribe.jpg",
    bgColor: "bg-card/40",
  },
  {
    title: "ArcadiaX",
    year: "2023",
    description: "Gaming platform with modern UI/UX, featuring game discovery and community features.",
    category: "UI/UX Design & Dev",
    tech: "HTML, CSS, JavaScript",
    live: "https://dhanam-patel.github.io/ArcadiaX---minigames/",
    github: "https://github.com/Dhanam-patel/ArcadiaX---minigames",
    image: "/Projects/ArcadiaX.jpg",
    bgColor: "bg-card/40",
  },
]



function ProjectCard({
  project,
  index
}: {
  project: typeof projects[0]
  index: number
}) {
  const isEven = index % 2 === 0

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-16 items-start pb-24 lg:pb-32`}
    >
      {/* Project Details */}
      <div className="flex-1 space-y-6 w-full">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-bold tracking-widest text-accent uppercase">{project.category}</span>
            <span className="h-px w-8 bg-border" />
            <span className="text-xs text-muted-foreground">{project.year}</span>
          </div>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif mb-4">
            {project.title}
          </h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {project.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-x-4 gap-y-3">
          {project.tech.split(', ').map((t) => (
            <span key={t} className="px-3 py-1 text-xs bg-secondary/50 border border-border rounded-full">
              {t}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-6">
          <Link
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-bold tracking-tight hover:text-accent transition-colors group"
          >
            <Github className="w-4 h-4" />
            Source Code
          </Link>

          <Link
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-bold tracking-tight hover:text-accent transition-colors group"
          >
            View Live Project
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </div>

      {/* Project Card Visual */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className={`w-full lg:w-[480px] aspect-[4/3] ${project.bgColor} backdrop-blur-md border border-border rounded-2xl p-6 shadow-xl shadow-black/10 dark:shadow-[8px_8px_24px_rgba(255,255,255,0.06)] flex flex-col justify-between overflow-hidden relative`}
      >
        <div className="relative z-20">
          <h4 className="text-2xl md:text-3xl font-bold text-foreground mb-2 drop-shadow-sm">
            {project.title}
          </h4>
          <p className="text-muted-foreground text-sm font-medium">
            {project.category}
          </p>
        </div>

        {/* Project Image */}
        <div className="mt-6 flex-1 relative bg-muted rounded-xl border border-border/50 shadow-inner overflow-hidden flex items-center justify-center">
          <div className="w-full h-full relative">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover opacity-90"
            />
          </div>
        </div>

        {/* Decorative elements / Overlays */}
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-card/20 to-transparent pointer-events-none z-10" />
      </motion.div>
    </motion.div>
  )
}

export function Projects() {
  return (
    <section id="work" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Section Header */}
        <div className="mb-20 lg:mb-32">
          <FadeIn>
            <span className="text-xs font-bold tracking-[0.3em] text-muted-foreground uppercase mb-4 block">Portfolio</span>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold font-serif tracking-tighter">
              Featured <br />
              <span className="text-accent">Projects</span>
            </h2>
          </FadeIn>
        </div>

        {/* Project List */}
        <div className="space-y-0">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

// Add FadeIn helper if not imported
function FadeIn({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Briefcase } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const experiences = [
  {
    company: "IBM",
    role: "AI & Cloud Computing Intern",
    period: "2025",
    fullPeriod: "Jul 2025 - Aug 2025",
    isCurrent: true,
    tech: ["IBM Cloud", "Python", "AutoAI"],
    points: [
      "Completed this internship on IBM Cloud through Edunet Foundation via the AICTE Internship Portal (Government of India).",
      "Gained hands-on experience with IBM Cloud services and AI tools.",
      "Worked on AI chatbot development and AutoAI projects for real-world problem solving.",
      "Performed data analytics and visualization to derive actionable insights.",
    ],
  },
  {
    company: "Shell",
    role: "AI / ML Intern",
    period: "2025",
    fullPeriod: "Jul 2025 - Aug 2025",
    isCurrent: false,
    tech: ["FastAPI", "PyTorch", "GCP"],
    points: [
      "Completed this internship at Shell through Edunet Foundation via the AICTE Internship Portal (Government of India).",
      "Developed end-to-end machine learning pipelines for structured datasets.",
      "Built production-ready FastAPI services for real-time model inference.",
      "Performed exploratory data analysis and feature engineering to improve model performance.",
    ],
  },
]

function ExperienceRow({
  exp,
  index
}: {
  exp: typeof experiences[0]
  index: number
}) {
  const [isHovered, setIsHovered] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.25, 0.1, 0.25, 1]
      }}
      className="border-b border-border/50"
    >
      <div
        onClick={() => setIsExpanded(!isExpanded)}
        className="group block relative cursor-none py-8 transition-all duration-300"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseMove={handleMouseMove}
      >
        <div className="flex items-start justify-between group-hover:px-4 transition-all duration-300">
          {/* Left side - Role and Company */}
          <div className="flex flex-col gap-1">
            <h3 className="text-2xl md:text-3xl font-semibold text-foreground group-hover:text-accent transition-colors duration-300 font-serif">
              {exp.role}
            </h3>
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-widest">{exp.company}</span>
          </div>

          {/* Right side - Period and Tech */}
          <div className="text-right hidden md:block">
            <p className="text-accent font-bold tracking-tighter text-xl">{exp.period}</p>
            <p className="text-xs text-muted-foreground mt-1 uppercase tracking-widest">{exp.tech.join(" • ")}</p>
          </div>
        </div>

        {/* Hover Tooltip - Click Hint */}
        <AnimatePresence>
          {isHovered && !isExpanded && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.15 }}
              className="fixed z-50 pointer-events-none"
              style={{
                left: mousePosition.x + 24,
                top: mousePosition.y - 12,
                position: 'absolute',
              }}
            >
              <div className="bg-accent text-accent-foreground text-xs px-4 py-2 rounded-full shadow-lg whitespace-nowrap font-bold uppercase tracking-widest">
                Click to Expand Details
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Custom cursor indicator on hover */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute pointer-events-none"
              style={{
                left: mousePosition.x - 6,
                top: mousePosition.y - 6,
              }}
            >
              <div className={`w-3 h-3 rounded-full bg-accent transition-transform duration-300 ${isExpanded ? 'rotate-45 scale-75' : ''}`} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Expanded Content Area */}
        <motion.div
          initial={false}
          animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }}
          className="overflow-hidden"
        >
          <div className="pt-8 px-4 pb-4">
            <p className="text-lg text-foreground/80 mb-6 font-medium leading-relaxed max-w-4xl">
              {exp.points[0]}
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
              {exp.points.slice(1).map((point, i) => (
                <li key={i} className="flex gap-4 text-sm text-muted-foreground leading-relaxed group/item">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
            <div className="mt-8 pt-6 border-t border-border/30 text-[10px] font-bold text-muted-foreground uppercase tracking-[0.3em]">
              {exp.fullPeriod} • Verification Required via AICTE Portal
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export function Experience() {
  return (
    <section id="experience" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Section Header */}
        <div className="flex items-start justify-between mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-bold text-muted-foreground uppercase tracking-[0.3em] mb-2 block">Career Journey</span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground font-serif">
              Work <span className="text-accent underline decoration-accent/30 underline-offset-8">Experience</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-12 h-12 rounded-full border border-border flex items-center justify-center"
          >
            <Briefcase className="w-5 h-5 text-accent" />
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="h-px bg-border origin-left mb-4"
        />

        {/* Experience List */}
        <div className="space-y-0">
          {experiences.map((exp, index) => (
            <ExperienceRow key={exp.company + exp.role} exp={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

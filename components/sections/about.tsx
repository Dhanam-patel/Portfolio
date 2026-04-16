"use client"

import { motion } from "framer-motion"
import { FadeIn, StaggerContainer, StaggerItem } from "../animations/fade-in"

const skills = {
  languages: ["Python", "C", "C++", "Node.js", "SQL"],
  databases: ["PostgreSQL", "Pinecone", "MongoDB"],
  frameworks: ["PyTorch", "HuggingFace", "React", "Tailwind", "LangChain", "FastAPI"],
  tools: ["Docker", "GCP", "VertexAI", "Git"],
}

export function About() {
  return (
    <section id="about" className="py-24 lg:py-48 px-6 md:px-12 lg:px-20 relative">
      <div className="max-w-7xl mx-auto">
        {/* Small Tag */}
        <FadeIn>
          <span className="text-xs font-bold tracking-[0.3em] text-muted-foreground uppercase mb-8 block">
            About
          </span>
        </FadeIn>

        {/* Main Heading */}
        <div className="mb-20 lg:mb-32">
          <FadeIn>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold font-serif leading-[1.1] tracking-tight max-w-5xl">
              I&apos;m a developer passionate about crafting <span className="italic">elegant</span> digital experiences
            </h2>
          </FadeIn>
        </div>

        {/* Two Columns Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
          {/* Left Column: Description */}
          <div className="space-y-8">
            <FadeIn delay={0.2}>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                I&apos;m a Full Stack Developer with a passion for building beautiful,
                functional, and user-centered digital experiences. I believe that
                understanding the technical foundations leads to more thoughtful designs.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                While design is my primary focus, I regularly work with code,
                believing that understanding the technical foundations leads to more
                thoughtful designs. My approach combines aesthetic sensibility with
                practical problem-solving.
              </p>
            </FadeIn>
          </div>

          {/* Right Column: Skills */}
          <div className="space-y-12">
            {Object.entries(skills).map(([category, items], catIndex) => (
              <div key={category} className="space-y-4">
                <FadeIn delay={0.4 + catIndex * 0.1}>
                  <h3 className="text-xs font-bold tracking-[0.2em] text-muted-foreground uppercase">
                    {category}
                  </h3>
                </FadeIn>

                <StaggerContainer staggerChildren={0.05} delayChildren={0.5 + catIndex * 0.1}>
                  <div className="flex flex-wrap gap-x-8 gap-y-5">
                    {items.map((item) => (
                      <StaggerItem key={item}>
                        <motion.span
                          whileHover={{ scale: 1.05, y: -2 }}
                          className="px-5 py-2 text-sm font-medium border border-border/50 rounded-full bg-secondary/30 hover:bg-foreground hover:text-background hover:border-foreground transition-all duration-300 cursor-default"
                        >
                          {item}
                        </motion.span>
                      </StaggerItem>
                    ))}
                  </div>
                </StaggerContainer>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

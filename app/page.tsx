"use client"

import { Header } from "@/components/sections/header"
import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { Experience } from "@/components/sections/experience"
import { Projects } from "@/components/sections/projects"
import { Contact } from "@/components/sections/contact"
import { Footer } from "@/components/sections/footer"
import { ScrollProgress } from "@/components/core/scroll-progress"
import { CustomCursor } from "@/components/core/cursor"
import { GridBackground } from "@/components/core/grid-background"
import { useState } from "react"
import { AnimatePresence } from "framer-motion"
import { ThemeTransition } from "@/components/core/theme-transition"
import { Preloader } from "@/components/core/preloader"

let hasPlayedPreloader = false;

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(hasPlayedPreloader)

  const handleLoadingComplete = () => {
    hasPlayedPreloader = true
    setIsLoaded(true)
  }

  return (
    <>
      <AnimatePresence mode="wait">
        {!isLoaded && (
          <Preloader onComplete={handleLoadingComplete} />
        )}
      </AnimatePresence>

      <div className={!isLoaded ? "invisible h-0 overflow-hidden" : ""}>
        <GridBackground />
        <ThemeTransition />
        <CustomCursor />
        <ScrollProgress />
        <Header isLoaded={isLoaded} />
        <main>
          <Hero isLoaded={isLoaded} />
          <About />
          <Experience />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}

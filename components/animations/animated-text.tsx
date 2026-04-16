"use client"

import { motion } from "framer-motion"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

interface AnimatedTextProps {
  children: string
  className?: string
  delay?: number
  staggerChildren?: number
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span"
}

export function AnimatedText({
  children,
  className = "",
  delay = 0,
  staggerChildren = 0.03,
  as: Component = "p",
}: AnimatedTextProps) {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.1 })

  const words = children.split(" ")

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren,
        delayChildren: delay,
      },
    },
  }

  const child = {
    hidden: {
      opacity: 0,
      y: 20,
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
      },
    },
  }

  const MotionComponent = motion.create(Component)

  return (
    <MotionComponent
      ref={ref}
      className={className}
      variants={container}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      style={{ display: "flex", flexWrap: "wrap", gap: "0.25em" }}
    >
      {words.map((word, index) => (
        <motion.span key={index} variants={child} className="inline-block">
          {word}
        </motion.span>
      ))}
    </MotionComponent>
  )
}

interface AnimatedCharactersProps {
  children: string
  className?: string
  delay?: number
  staggerChildren?: number
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span"
}

export function AnimatedCharacters({
  children,
  className = "",
  delay = 0,
  staggerChildren = 0.02,
  as: Component = "p",
}: AnimatedCharactersProps) {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.1 })

  const characters = children.split("")

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren,
        delayChildren: delay,
      },
    },
  }

  const child = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 150,
      },
    },
  }

  const MotionComponent = motion.create(Component)

  return (
    <MotionComponent
      ref={ref}
      className={className}
      variants={container}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {characters.map((char, index) => (
        <motion.span
          key={index}
          variants={child}
          className="inline-block"
          style={{ whiteSpace: char === " " ? "pre" : "normal" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </MotionComponent>
  )
}

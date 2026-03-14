'use client'

import { motion, useScroll, useTransform } from 'framer-motion'

const NAV_CENTER_TOP = 48
const SCROLL_END = 480
const HERO_TITLE_TOP = 380 // ~38vh na typické výšce viewportu

export default function HeroNavTitle() {
  const { scrollY } = useScroll()
  const top = useTransform(scrollY, [0, SCROLL_END], [HERO_TITLE_TOP, NAV_CENTER_TOP])
  const scale = useTransform(scrollY, [0, SCROLL_END], [1, 0.28])
  const opacity = useTransform(scrollY, [0, 80], [1, 1])

  return (
    <motion.a
      href="#"
      className="fixed left-1/2 z-[50] origin-center pointer-events-auto"
      style={{
        top,
        x: '-50%',
        scale,
        opacity,
        fontFamily: "'Gloria Hallelujah', cursive",
      }}
    >
      <span className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-[#0E7D23] tracking-tight whitespace-nowrap">
        Cha Cha Matcha
      </span>
    </motion.a>
  )
}

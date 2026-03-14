'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function KineticHero() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  const { scrollY } = useScroll()
  const parallaxOpacity = useTransform(scrollY, [0, 400], [1, 0])

  return (
    <motion.section
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#FFFEDF]"
      style={{ opacity: parallaxOpacity }}
    >
      <div className="relative z-10 w-[300px] h-[300px] sm:w-[420px] sm:h-[420px] md:w-[520px] md:h-[520px]">
        <Image
          src="/drawing.png?v=3"
          alt="Matcha Vary whisk drawing"
          fill
          priority
          className="object-contain"
        />
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ 
          opacity: { delay: 1.5, duration: 0.5 },
          y: { delay: 1.5, duration: 1.5, repeat: Infinity, ease: 'easeInOut' }
        }}
      >
        <div className="w-6 h-10 border-2 border-[#0E7D23] rounded-full flex justify-center">
          <motion.div
            className="w-1.5 h-3 bg-[#0E7D23] rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </motion.section>
  )
}

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
      className="relative min-h-screen min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden bg-[#FFFEDF] safe-top safe-inset-x"
      style={{ opacity: parallaxOpacity }}
    >
      <div className="relative z-10 w-[280px] h-[280px] min-[400px]:w-[320px] min-[400px]:h-[320px] sm:w-[420px] sm:h-[420px] md:w-[520px] md:h-[520px] max-w-[90vw] max-h-[55vh]">
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
        className="absolute bottom-8 left-1/2 -translate-x-1/2 safe-bottom"
        style={{ paddingBottom: 'max(2rem, env(safe-area-inset-bottom))' }}
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

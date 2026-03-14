'use client'

import { motion } from 'framer-motion'
import { MapPin, ChevronRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen min-h-[100dvh] flex items-center justify-center overflow-hidden bg-[#FFFEDF] safe-top safe-inset-x">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div className="absolute -top-20 -right-20 w-96 h-96 bg-matcha-500/20 blob" animate={{ scale: [1, 1.1, 1], rotate: [0, 10, 0] }} transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }} />
        <motion.div className="absolute top-1/3 -left-32 w-72 h-72 bg-matcha-500/20 blob-2" animate={{ scale: [1, 1.15, 1], rotate: [0, -15, 0] }} transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }} />
        <motion.div className="absolute bottom-20 right-1/4 w-64 h-64 bg-matcha-400/20 blob" animate={{ scale: [1, 1.2, 1], rotate: [0, 20, 0] }} transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }} />
      </div>

      <div className="container-wide section-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-8 items-center min-h-[80vh] min-h-[80dvh] pt-16 sm:pt-20">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center lg:text-left">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }} className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-gray-100 rounded-full mb-4 sm:mb-6">
              <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
              <span className="text-xs sm:text-sm font-medium text-gray-600">Momentálně bez aktivního POP-UPU</span>
            </motion.div>

            <motion.h1 className="text-3xl min-[400px]:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-tight mb-4 sm:mb-6 px-1" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }}>
              <span className="text-matcha-900">Prémiová </span>
              <span className="inline-block text-[#A3E6B5]" style={{ fontFamily: "'American Uncial', serif" }}>matcha</span>
              <span className="text-matcha-900">,</span><br />
              <span className="text-matcha-900">která přijede za tebou</span>
            </motion.h1>

            <motion.p className="text-base sm:text-lg md:text-xl text-matcha-600 max-w-xl mx-auto lg:mx-0 mt-4 sm:mt-6 mb-6 sm:mb-8 px-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
              Přinášíme prémiovou ceremoniální matchu na místa po celé republice.
              <span className="font-semibold text-matcha-700"> Chyťte nás, pokud to zvládnete.</span>
            </motion.p>

            <motion.div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
              <motion.a href="#popups" className="btn-primary text-base sm:text-lg min-h-[48px] inline-flex items-center justify-center touch-manipulation" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <MapPin size={20} />Najít další POP-UP
              </motion.a>
              <motion.a href="#menu" className="btn-secondary text-base sm:text-lg min-h-[48px] inline-flex items-center justify-center touch-manipulation" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                Zobrazit menu<ChevronRight size={20} />
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div className="relative flex items-center justify-center" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4, duration: 0.8 }}>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-80 h-80 bg-matcha-500/25 rounded-full blur-3xl" />
            </div>
            <motion.div className="relative z-10" animate={{ y: [0, -20, 0], rotate: [0, 2, -2, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}>
              <img src="/cup.png" alt="Matcha Cup" className="w-64 sm:w-80 lg:w-96 h-auto drop-shadow-2xl" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2 safe-bottom" style={{ paddingBottom: 'env(safe-area-inset-bottom)' }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
        <motion.div className="w-6 h-10 border-2 border-matcha-700 rounded-full flex justify-center" animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <motion.div className="w-1.5 h-3 bg-matcha-700 rounded-full mt-2" animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 1.5, repeat: Infinity }} />
        </motion.div>
      </motion.div>
    </section>
  )
}

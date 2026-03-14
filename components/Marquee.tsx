'use client'

import { motion } from 'framer-motion'

const marqueeItems = [
  'CEREMONIÁLNÍ MATCHA',
  '@MATCHAVARY',
  'PŘIPRAVENA NA OBJEDNÁVKU',
  'POP-UPs',
]

export default function Marquee() {
  return (
    <div className="bg-[#0E7D23] py-4 overflow-hidden">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      >
        {[...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, index) => (
          <span key={index} className="mx-8 text-lg font-bold text-[#FFFEDF] flex items-center gap-4">
            {item}
            <span className="w-2 h-2 bg-[#FFFEDF] rounded-full" />
          </span>
        ))}
      </motion.div>
    </div>
  )
}

'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

interface NavItem {
  label: string
  href: string
}

interface GooeyNavProps {
  items: NavItem[]
}

const GooeyNav = ({ items }: GooeyNavProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <nav className="flex items-center gap-2">
      {items.map((item, index) => (
        <div
          key={index}
          className="relative"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === index && (
              <motion.div
                layoutId="nav-hover-pill"
                className="absolute inset-0 bg-[#0E7D23] rounded-full z-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
          </AnimatePresence>
          <Link 
            href={item.href || "#"} 
            className={`relative z-10 block px-5 py-2 font-medium text-sm tracking-widest transition-colors duration-200 ${
              hoveredIndex === index ? 'text-[#FFFEDF]' : 'text-[#0E7D23]'
            }`}
          >
            {item.label}
          </Link>
        </div>
      ))}
    </nav>
  )
}

export default GooeyNav

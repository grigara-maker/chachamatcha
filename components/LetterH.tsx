'use client'

import { useRef, useState } from 'react'
import { motion } from 'framer-motion'

interface LetterProps {
  className?: string
  color?: string
  delay?: number
}

export default function LetterH({ className = '', color = '#FF8FAB', delay = 0 }: LetterProps) {
  const [isClicked, setIsClicked] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  return (
    <motion.div
      ref={ref}
      className={`relative cursor-pointer select-none ${className}`}
      initial={{ opacity: 0, y: 100, scale: 0.5 }}
      animate={{ 
        opacity: 1, 
        y: 0, 
        scale: 1,
      }}
      transition={{ 
        delay, 
        duration: 0.6, 
        type: 'spring', 
        stiffness: 150,
        damping: 12 
      }}
      whileHover={{ 
        scale: 1.15,
        y: -10,
        transition: { 
          type: 'spring', 
          stiffness: 400, 
          damping: 10 
        }
      }}
      whileTap={{ scale: 0.85, y: 5 }}
      onClick={() => setIsClicked(!isClicked)}
    >
      <motion.svg
        viewBox="0 0 100 140"
        className="w-full h-full"
        animate={{
          y: [0, -6, 0],
          rotate: [0, 1, -1, 0],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: delay * 0.5,
        }}
      >
        {/* 3D depth - back face */}
        <g transform="translate(5, 5)" opacity="0.3">
          <rect x="10" y="10" width="25" height="120" rx="4" fill={color} />
          <rect x="65" y="10" width="25" height="120" rx="4" fill={color} />
          <rect x="10" y="55" width="80" height="25" rx="4" fill={color} />
        </g>
        
        {/* Main H shape - blocky 3D style */}
        <motion.g
          animate={isClicked ? { 
            scale: [1, 1.1, 1],
          } : {}}
          transition={{ duration: 0.4 }}
        >
          {/* Left pillar */}
          <rect x="10" y="10" width="25" height="120" rx="4" fill={color} />
          {/* Right pillar */}
          <rect x="65" y="10" width="25" height="120" rx="4" fill={color} />
          {/* Cross bar */}
          <rect x="10" y="55" width="80" height="25" rx="4" fill={color} />
          
          {/* Highlights */}
          <rect x="15" y="15" width="8" height="50" rx="2" fill="white" opacity="0.4" />
          <rect x="70" y="15" width="8" height="50" rx="2" fill="white" opacity="0.4" />
          
          {/* Block details */}
          <rect x="15" y="90" width="15" height="15" rx="2" fill="white" opacity="0.2" />
          <rect x="70" y="90" width="15" height="15" rx="2" fill="white" opacity="0.2" />
        </motion.g>
        
        {/* Decorative pixels */}
        <motion.g
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <rect x="40" y="40" width="6" height="6" fill="white" opacity="0.5" />
          <rect x="50" y="85" width="6" height="6" fill="white" opacity="0.5" />
        </motion.g>
      </motion.svg>
    </motion.div>
  )
}

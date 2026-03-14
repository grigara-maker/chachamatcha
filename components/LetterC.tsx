'use client'

import { useRef, useState } from 'react'
import { motion } from 'framer-motion'

interface LetterProps {
  className?: string
  color?: string
  delay?: number
}

export default function LetterC({ className = '', color = '#9B7EDE', delay = 0 }: LetterProps) {
  const [isClicked, setIsClicked] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  return (
    <motion.div
      ref={ref}
      className={`relative cursor-pointer select-none ${className}`}
      initial={{ opacity: 0, y: 100, rotateX: -90 }}
      animate={{ 
        opacity: 1, 
        y: 0, 
        rotateX: 0,
      }}
      transition={{ 
        delay, 
        duration: 0.8, 
        type: 'spring', 
        stiffness: 100,
        damping: 12 
      }}
      whileHover={{ 
        scale: 1.15,
        rotate: [0, -5, 5, 0],
        transition: { 
          scale: { type: 'spring', stiffness: 400, damping: 10 },
          rotate: { duration: 0.5, ease: 'easeInOut' }
        }
      }}
      whileTap={{ scale: 0.9 }}
      onClick={() => setIsClicked(!isClicked)}
      style={{ transformStyle: 'preserve-3d' }}
    >
      <motion.svg
        viewBox="0 0 120 140"
        className="w-full h-full"
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: delay * 0.5,
        }}
      >
        {/* 3D Shadow layer */}
        <path
          d="M90 25 C55 10, 20 35, 20 70 C20 105, 55 130, 90 115"
          fill="none"
          stroke={color}
          strokeWidth="28"
          strokeLinecap="round"
          opacity="0.3"
          transform="translate(4, 4)"
        />
        {/* Main curved C shape */}
        <motion.path
          d="M90 25 C55 10, 20 35, 20 70 C20 105, 55 130, 90 115"
          fill="none"
          stroke={color}
          strokeWidth="28"
          strokeLinecap="round"
          animate={isClicked ? { 
            pathLength: [1, 0.5, 1],
            strokeWidth: [28, 35, 28]
          } : {}}
          transition={{ duration: 0.6 }}
        />
        {/* Highlight */}
        <path
          d="M85 35 C60 25, 35 45, 35 70"
          fill="none"
          stroke="white"
          strokeWidth="6"
          strokeLinecap="round"
          opacity="0.5"
        />
        {/* Inner wave decoration */}
        <motion.path
          d="M70 50 Q60 55, 70 65 Q80 75, 70 85"
          fill="none"
          stroke="white"
          strokeWidth="4"
          strokeLinecap="round"
          opacity="0.6"
          animate={{
            d: [
              "M70 50 Q60 55, 70 65 Q80 75, 70 85",
              "M70 50 Q80 55, 70 65 Q60 75, 70 85",
              "M70 50 Q60 55, 70 65 Q80 75, 70 85",
            ]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </motion.svg>
    </motion.div>
  )
}

'use client'

import { useRef, useState } from 'react'
import { motion } from 'framer-motion'

interface LetterProps {
  className?: string
  color?: string
  delay?: number
}

export default function LetterA({ className = '', color = '#FF6B6B', delay = 0 }: LetterProps) {
  const [isClicked, setIsClicked] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  return (
    <motion.div
      ref={ref}
      className={`relative cursor-pointer select-none ${className}`}
      initial={{ opacity: 0, scale: 0, rotate: -180 }}
      animate={{ 
        opacity: 1, 
        scale: 1,
        rotate: 0,
      }}
      transition={{ 
        delay, 
        duration: 0.7, 
        type: 'spring', 
        stiffness: 120,
        damping: 10 
      }}
      whileHover={{ 
        scale: 1.2,
        rotate: 5,
        transition: { 
          type: 'spring', 
          stiffness: 300, 
          damping: 10 
        }
      }}
      whileTap={{ scale: 0.9, rotate: -5 }}
      onClick={() => setIsClicked(!isClicked)}
    >
      <motion.svg
        viewBox="0 0 110 140"
        className="w-full h-full"
        animate={{
          y: [0, -10, 0],
          rotate: [0, 2, -2, 0],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: delay * 0.5,
        }}
      >
        {/* 3D Shadow */}
        <g transform="translate(4, 4)" opacity="0.25">
          <polygon points="55,10 95,130 75,130 65,100 45,100 35,130 15,130" fill={color} />
        </g>
        
        {/* Main A shape - geometric triangular style */}
        <motion.polygon
          points="55,10 95,130 75,130 65,100 45,100 35,130 15,130"
          fill={color}
          animate={isClicked ? { 
            points: [
              "55,10 95,130 75,130 65,100 45,100 35,130 15,130",
              "55,5 100,130 75,130 65,95 45,95 35,130 10,130",
              "55,10 95,130 75,130 65,100 45,100 35,130 15,130",
            ]
          } : {}}
          transition={{ duration: 0.5 }}
        />
        
        {/* Inner triangle cutout */}
        <polygon points="55,45 70,85 40,85" fill="white" opacity="0.15" />
        
        {/* Cross bar */}
        <rect x="35" y="85" width="40" height="15" rx="2" fill={color} />
        
        {/* Highlights */}
        <motion.path
          d="M55 20 L30 110"
          stroke="white"
          strokeWidth="5"
          strokeLinecap="round"
          opacity="0.35"
        />
        
        {/* Geometric decoration */}
        <motion.circle
          cx="55"
          cy="60"
          r="8"
          fill="white"
          opacity="0.4"
          animate={{
            r: [8, 10, 8],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        
        {/* Small triangles decoration */}
        <polygon points="25,120 30,130 20,130" fill="white" opacity="0.3" />
        <polygon points="85,120 90,130 80,130" fill="white" opacity="0.3" />
      </motion.svg>
    </motion.div>
  )
}

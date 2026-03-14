'use client'

import { motion } from 'framer-motion'

interface MatchaBlobProps {
  className?: string
  size?: number
  color?: string
  delay?: number
  duration?: number
}

export default function MatchaBlob({ 
  className = '', 
  size = 100, 
  color = '#0E7D23',
  delay = 0,
  duration = 4 
}: MatchaBlobProps) {
  return (
    <motion.div
      className={`absolute pointer-events-none ${className}`}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 0.6, scale: 1 }}
      transition={{ delay, duration: 0.8, ease: 'easeOut' }}
    >
      <motion.svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        animate={{
          y: [0, -15, 0],
          x: [0, 5, -5, 0],
          rotate: [0, 10, -10, 0],
        }}
        transition={{
          duration,
          repeat: Infinity,
          ease: 'easeInOut',
          delay,
        }}
      >
        <motion.path
          d="M50 10 
             C70 10, 90 25, 90 50 
             C90 75, 70 90, 50 90 
             C30 90, 10 75, 10 50 
             C10 25, 30 10, 50 10"
          fill={color}
          animate={{
            d: [
              "M50 10 C70 10, 90 25, 90 50 C90 75, 70 90, 50 90 C30 90, 10 75, 10 50 C10 25, 30 10, 50 10",
              "M50 15 C75 15, 85 30, 85 50 C85 70, 75 85, 50 85 C25 85, 15 70, 15 50 C15 30, 25 15, 50 15",
              "M50 12 C68 8, 92 28, 88 52 C84 76, 68 92, 48 88 C28 84, 8 68, 12 48 C16 28, 32 12, 50 12",
              "M50 10 C70 10, 90 25, 90 50 C90 75, 70 90, 50 90 C30 90, 10 75, 10 50 C10 25, 30 10, 50 10",
            ]
          }}
          transition={{
            duration: duration * 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        {/* Highlight */}
        <circle cx="35" cy="35" r="12" fill="white" opacity="0.3" />
        <circle cx="40" cy="40" r="6" fill="white" opacity="0.4" />
      </motion.svg>
    </motion.div>
  )
}

'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

interface SplashScreenProps {
  onEnter: () => void
}

const text = "Cha Cha Matcha"

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.04,
      delayChildren: 0.3,
    },
  },
}

const letterVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.8,
    scaleX: 0.8,
    scaleY: 0.8,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    scaleX: 1,
    scaleY: 1,
    transition: {
      type: 'spring',
      stiffness: 500,
      damping: 12,
    },
  },
}

const whiskButtonVariants = {
  hidden: {
    y: 30,
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      delay: 1.4,
      type: 'spring',
      stiffness: 300,
      damping: 15,
    },
  },
  hover: {
    scale: 1.15,
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 17,
    },
  },
  tap: {
    scale: 0.9,
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 17,
    },
  },
}

// Transition from green splash to cream website
const splatColors = [
  '#064E14',
  '#0A5A19',
  '#FFFEDF',
]

// Matcha Whisk (Chasen) SVG - Outline style
const MatchaWhisk = ({ size = 48 }: { size?: number }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 512 512" 
    fill="none"
  >
    <g stroke="#FFFEDF" strokeWidth="18" strokeLinecap="round" strokeLinejoin="round">
      <rect x="176" y="54" width="160" height="132" rx="36"/>
      <rect x="156" y="170" width="200" height="54" rx="20"/>
      <path d="M192 224 H320 V270 C320 282 312 290 300 290 H212 C200 290 192 282 192 270 V224 Z"/>
      <path d="M210 290 C190 328 162 375 146 412 C138 431 150 452 172 458 C216 470 296 470 340 458 C362 452 374 431 366 412 C350 375 322 328 302 290 H210 Z"/>
      <path d="M178 438 L212 312"/>
      <path d="M220 450 L240 336"/>
      <path d="M256 456 L256 352"/>
      <path d="M292 450 L272 336"/>
      <path d="M334 438 L300 312"/>
      <path d="M256 304 C254 324 254 340 256 356"/>
      <path d="M268 312 C282 322 292 336 294 348"/>
    </g>
  </svg>
)

export default function SplashScreen({ onEnter }: SplashScreenProps) {
  const [isExiting, setIsExiting] = useState(false)
  const [isFadingOut, setIsFadingOut] = useState(false)
  const [isWhisking, setIsWhisking] = useState(false)

  const handleWhiskClick = () => {
    if (isWhisking || isExiting) return
    setIsWhisking(true)
    setTimeout(() => {
      setIsExiting(true)
    }, 800)
  }

  const handleAnimationComplete = (index: number) => {
    if (index === splatColors.length - 1) {
      setIsFadingOut(true)
      setTimeout(() => {
        onEnter()
      }, 600)
    }
  }

  const characters = text.split('')

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center cursor-pointer"
      style={{ backgroundColor: '#0E7D23' }}
      initial={{ opacity: 1 }}
      animate={{ opacity: isFadingOut ? 0 : 1 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      onClick={handleWhiskClick}
    >
      <div className="absolute inset-0 bg-[#0E7D23]" />

      <motion.div 
        className="relative z-10 flex flex-col items-center w-full px-4"
        animate={{ opacity: isExiting ? 0 : 1, scale: isExiting ? 0.95 : 1 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      >
        {/* Mobil: dva řádky, každý vlastní blok = spolehlivé centrování */}
        <div className="flex flex-col items-center w-full sm:hidden">
          <motion.h1
            className="text-5xl tracking-tight text-[#FFFEDF] w-full text-center"
            style={{ fontFamily: "'Gloria Hallelujah', cursive" }}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {characters.slice(0, 7).map((char, i) => (
              <motion.span
                key={i}
                variants={letterVariants}
                className="inline-block cursor-pointer"
                style={{ marginRight: char === ' ' ? '0.4em' : '0.02em' }}
                whileHover={{ scaleX: [1, 1.2, 0.85, 1.05, 1], scaleY: [1, 0.8, 1.15, 0.95, 1] }}
                transition={{ duration: 0.35, ease: 'easeInOut' }}
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </motion.h1>
          <motion.h1
            className="text-5xl tracking-tight text-[#FFFEDF] w-full text-center"
            style={{ fontFamily: "'Gloria Hallelujah', cursive" }}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {characters.slice(8, 14).map((char, i) => (
              <motion.span
                key={i + 8}
                variants={letterVariants}
                className="inline-block cursor-pointer"
                style={{ marginRight: '0.02em' }}
                whileHover={{ scaleX: [1, 1.2, 0.85, 1.05, 1], scaleY: [1, 0.8, 1.15, 0.95, 1] }}
                transition={{ duration: 0.35, ease: 'easeInOut' }}
              >
                {char}
              </motion.span>
            ))}
          </motion.h1>
        </div>
        {/* Desktop: jeden řádek */}
        <div className="hidden sm:block">
          <motion.h1
            className="text-7xl md:text-8xl lg:text-9xl tracking-tight text-center text-[#FFFEDF]"
            style={{ fontFamily: "'Gloria Hallelujah', cursive" }}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {characters.map((char, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                className="inline-block cursor-pointer"
                style={{ marginRight: char === ' ' ? '0.4em' : '0.02em' }}
                whileHover={{ scaleX: [1, 1.2, 0.85, 1.05, 1], scaleY: [1, 0.8, 1.15, 0.95, 1] }}
                transition={{ duration: 0.35, ease: 'easeInOut' }}
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </motion.h1>
        </div>
      </motion.div>

      <motion.div 
        className="absolute bottom-16 left-0 right-0 flex justify-center z-50"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, type: 'spring', stiffness: 300, damping: 15 }}
      >
        <motion.button
          initial={{ scale: 1 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: isExiting || isWhisking ? 1 : 1.15 }}
          whileTap={{ scale: isExiting || isWhisking ? 1 : 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          onClick={handleWhiskClick}
          disabled={isExiting || isWhisking}
          className="cursor-pointer disabled:cursor-not-allowed"
        >
          <motion.div
            animate={isWhisking ? { 
              rotate: [-15, 15, -15, 15, -15, 15, -15, 15],
              x: [-3, 3, -3, 3, -3, 3, -3, 3]
            } : { rotate: 0, x: 0 }}
            transition={isWhisking ? { 
              duration: 0.6,
              ease: 'easeInOut'
            } : { duration: 0.3 }}
          >
            <MatchaWhisk size={80} />
          </motion.div>
        </motion.button>
      </motion.div>

      <div className="fixed inset-0 pointer-events-none overflow-hidden z-[110] flex items-center justify-center">
        {splatColors.map((color, index) => (
          <motion.div
            key={index}
            className="absolute rounded-full"
            style={{ backgroundColor: color, width: 100, height: 100 }}
            initial={{ scale: 0 }}
            animate={isExiting ? { scale: 80 } : { scale: 0 }}
            transition={{
              duration: 1.0,
              delay: isExiting ? index * 0.2 : 0,
              ease: [0.76, 0, 0.24, 1],
            }}
            onAnimationComplete={() => {
              if (isExiting) {
                handleAnimationComplete(index)
              }
            }}
          />
        ))}
      </div>
    </motion.div>
  )
}

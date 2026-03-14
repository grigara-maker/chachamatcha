'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { ReactNode } from 'react'

type BubbleMenuItem = {
  label: string
  href: string
  ariaLabel?: string
  rotation?: number
  hoverStyles?: {
    bgColor?: string
    textColor?: string
  }
}

type BubbleMenuProps = {
  logo: ReactNode
  items: BubbleMenuItem[]
  menuAriaLabel?: string
  menuBg?: string
  menuContentColor?: string
  useFixedPosition?: boolean
  animationEase?: string
  animationDuration?: number
  staggerDelay?: number
}

export default function BubbleMenu({
  logo,
  items,
  menuAriaLabel = 'Toggle menu',
  menuBg = '#FFFEDF',
  menuContentColor = '#0E7D23',
  useFixedPosition = false,
  animationDuration = 0.5,
  staggerDelay = 0.12,
}: BubbleMenuProps) {
  const [isOpen, setIsOpen] = useState(false)
  const wrapperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (!wrapperRef.current?.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleOutsideClick)
    return () => document.removeEventListener('mousedown', handleOutsideClick)
  }, [])

  return (
    <div className="relative" ref={wrapperRef}>
      <button
        type="button"
        aria-label={menuAriaLabel}
        className="focus:outline-none"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {logo}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.95 }}
            transition={{ duration: animationDuration, ease: 'easeOut' }}
            className={`${useFixedPosition ? 'fixed' : 'absolute'} right-0 top-full mt-3 z-50`}
          >
            <div className="flex flex-col items-end gap-3">
              {items.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  aria-label={item.ariaLabel ?? item.label}
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 12 }}
                  transition={{ delay: index * staggerDelay, duration: animationDuration * 0.8 }}
                  className="px-4 py-2 rounded-full text-sm font-semibold border transition-colors"
                  style={{
                    backgroundColor: item.hoverStyles?.bgColor ?? menuBg,
                    color: item.hoverStyles?.textColor ?? menuContentColor,
                    borderColor: menuContentColor,
                    transform: `rotate(${item.rotation ?? 0}deg)`,
                  }}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

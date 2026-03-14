'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'POP-UPs', targetId: 'popups' },
  { label: 'MATCHA', targetId: 'matcha-heading' },
  { label: 'MENU', targetId: 'menu' },
  { label: 'KONTAKT', targetId: 'kontakt-heading' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTarget = (targetId: string) => {
    const target = document.getElementById(targetId)
    if (!target) return

    const headerHeight = window.innerWidth >= 640 ? 120 : 104
    const rect = target.getBoundingClientRect()
    const absoluteTop = window.scrollY + rect.top
    const centeredTop = absoluteTop - window.innerHeight / 2 + rect.height / 2
    const safeTop = absoluteTop - headerHeight - 8
    const sectionAnchorOffset = targetId === 'popups' || targetId === 'menu' ? 72 : 0
    const nextTop = Math.max(
      targetId === 'popups' || targetId === 'menu'
        ? safeTop + sectionAnchorOffset
        : Math.min(centeredTop, safeTop),
      0,
    )

    window.history.replaceState(null, '', `#${targetId}`)
    window.scrollTo({ top: nextTop, behavior: 'smooth' })
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? 'bg-[#FFFEDF]/80 backdrop-blur-xl shadow-lg' : 'bg-transparent'
        }`}
      >
        <nav className="w-full px-6 sm:px-10 py-4">
          <div className="hidden md:grid grid-cols-3 items-center h-20 sm:h-24 w-full">
            <div />

            <div className="flex justify-center">
              <a href="#" className="text-3xl sm:text-4xl font-bold text-[#0E7D23] leading-none tracking-tight" style={{ fontFamily: "'Gloria Hallelujah', cursive" }}>
                CHA CHA
              </a>
            </div>

            <div
              className="flex justify-end items-center gap-1"
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {navLinks.map((item, index) => (
                <button
                  type="button"
                  key={item.label}
                  onClick={() => scrollToTarget(item.targetId)}
                  onMouseEnter={() => setHoveredIndex(index)}
                  className="relative px-5 py-2 block"
                >
                  {hoveredIndex === index && (
                    <motion.div
                      layoutId="nav-hover-bubble"
                      className="absolute inset-0 bg-[#0E7D23] rounded-full -z-10 shadow-md shadow-[#0E7D23]/10"
                      transition={{ type: 'spring', stiffness: 160, damping: 20, mass: 0.8 }}
                    />
                  )}

                  <span
                    className={`relative z-10 font-medium transition-colors duration-300 block ${
                      hoveredIndex === index ? 'text-[#FFFEDF]' : 'text-[#0E7D23]'
                    }`}
                  >
                    {item.label}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="md:hidden flex items-center justify-between h-20">
            <a href="#" className="text-3xl font-bold text-[#0E7D23] leading-none tracking-tight" style={{ fontFamily: "'Gloria Hallelujah', cursive" }}>
              CHA CHA
            </a>
            <motion.button className="p-2 text-[#0E7D23]" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} whileTap={{ scale: 0.9 }}>
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </motion.button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[#FFFEDF] pt-28 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link, index) => (
                <motion.button
                  type="button"
                  key={link.label}
                  className="text-2xl font-semibold text-[#0E7D23] hover:text-[#064E14]"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => scrollToTarget(link.targetId)}
                >
                  {link.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

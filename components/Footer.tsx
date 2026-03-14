'use client'

import { motion } from 'framer-motion'
import { Instagram, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer id="kontakt" className="scroll-mt-28 sm:scroll-mt-32 bg-[#FFFEDF] text-[#0E7D23] py-12 sm:py-14 md:py-16 safe-inset-x safe-bottom">
      <div className="container-wide section-padding">
        <div className="grid gap-8 sm:gap-10 md:gap-12 mb-10 sm:mb-12 md:grid-cols-[minmax(0,1fr)_320px] md:items-start">
          <div>
            <img 
              src="/Logo.png" 
              alt="Cha Cha Matcha" 
              className="w-40 sm:w-48 md:w-56 lg:w-64 h-auto object-contain -mt-2 sm:-mt-4 mb-4 sm:mb-6"
            />
          </div>

          <div>
            <h4 id="kontakt-heading" className="text-base sm:text-lg font-bold mb-4 sm:mb-6 text-[#0E7D23]">Kontakt</h4>
            <a 
              href="mailto:info@chachamatcha.cz" 
              className="flex items-center gap-2 text-[#0E7D23] hover:text-[#0E7D23]/70 transition-colors duration-300 mb-4 min-h-[44px] touch-manipulation"
            >
              <Mail size={18} />
              <span className="break-all">info@chachamatcha.cz</span>
            </a>
            <p className="text-[#0E7D23] mb-3">Sledujte nás na sociálních sítích</p>
            <div className="flex gap-4">
              <motion.a
                href="https://www.instagram.com/matchavary/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 min-w-[44px] min-h-[44px] bg-[#0E7D23] text-[#FFFEDF] rounded-full flex items-center justify-center hover:bg-[#0E7D23]/80 active:scale-95 transition-colors duration-300 touch-manipulation"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Instagram size={20} />
              </motion.a>
              <motion.a
                href="https://www.tiktok.com/@matchavary"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 min-w-[44px] min-h-[44px] bg-[#0E7D23] text-[#FFFEDF] rounded-full flex items-center justify-center hover:bg-[#0E7D23]/80 active:scale-95 transition-colors duration-300 touch-manipulation"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
                </svg>
              </motion.a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#0E7D23]/20 pt-8 text-center">
          <p className="text-[#0E7D23]/90 text-sm">
            © 2026 Cha Cha Matcha.
          </p>
        </div>
      </div>
    </footer>
  )
}

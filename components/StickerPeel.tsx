'use client'

import { motion } from 'framer-motion'

type StickerPeelProps = {
  imageSrc: string
  width?: number
  rotate?: number
  className?: string
}

export default function StickerPeel({
  imageSrc,
  width = 120,
  rotate = 15,
  className = '',
}: StickerPeelProps) {
  return (
    <motion.div
      drag
      dragElastic={0.25}
      dragMomentum={false}
      whileTap={{ scale: 0.96, rotate: rotate - 3 }}
      whileHover={{ scale: 1.04 }}
      className={className}
      style={{ width, rotate }}
    >
      <div className="relative w-full aspect-square">
        <img
          src={imageSrc}
          alt="Sticker peel element"
          className="sticker-image absolute inset-0 w-full h-full"
          style={{ backgroundColor: '#FFFEDF', borderRadius: '50%', padding: '12px', objectFit: 'contain' }}
        />
        <img
          src={imageSrc}
          alt=""
          aria-hidden="true"
          className="flap-image absolute inset-0 w-full h-full opacity-30"
          style={{ backgroundColor: '#FFFEDF', borderRadius: '50%', padding: '12px', objectFit: 'contain' }}
        />
      </div>
    </motion.div>
  )
}

'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Send } from 'lucide-react'

export default function Newsletter() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="py-24 bg-[#FFFEDF] relative overflow-hidden">

      <div className="container-wide section-padding relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-block px-4 py-2 bg-[#0E7D23] text-[#FFFEDF] rounded-full text-sm font-semibold mb-6">
            Buďte první, kdo se dozví
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-[#0E7D23]">
            Nenechte si ujit další akci
          </h2>
          <p className="text-lg sm:text-xl text-[#0E7D23]/90 mb-10 max-w-2xl mx-auto">
            Zadejte váš e-mail a my vám dáme vědět kde budeme příště!
          </p>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="vas@email.cz"
              className="flex-1 px-6 py-4 bg-[#0E7D23]/10 rounded-full text-[#0E7D23] placeholder:text-[#0E7D23]/60 focus:outline-none focus:ring-2 focus:ring-[#0E7D23] border border-[#0E7D23]/20"
            />
            <motion.button
              type="submit"
              className="px-8 py-4 bg-[#0E7D23] text-[#FFFEDF] rounded-full font-bold hover:scale-105 transition-transform flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Send size={20} />
              Odebírat
            </motion.button>
          </motion.form>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-[#0E7D23]/70 text-sm mt-6"
          >
            Žádný spam. Jen matcha.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

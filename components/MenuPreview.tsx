'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Schoolbell } from 'next/font/google'

const schoolbell = Schoolbell({
  weight: '400',
  subsets: ['latin'],
})

const items = [
  {
    id: 1,
    title: 'Matcha Latte',
    desc: 'Naše poctivá klasika, jemně vyšlehaná z kvalitní matchy a doplněná mlékem podle tvé chuti. Krémová, hebká a připravená tak, aby vynikla čistá chuť čaje.',
    price: '90 Kč',
    badge: null,
    image: '/latte.jpeg',
    video: '/latte.MOV',
  },
  {
    id: 3,
    title: 'Cinnamon roll',
    desc: 'Voňavý speciál inspirovaný čerstvě upečeným skořicovým šnekem. Hřejivá skořice, jemná sladkost a matcha v dokonale útulném spojení.',
    price: '120 Kč',
    badge: null,
    image: '/cinnamon.jpeg',
    video: '/cinnamon.mov',
  },
  {
    id: 4,
    title: 'Dragon fruit matcha',
    desc: 'Signature drink s ovocným pyré z dračího ovoce, který spojuje svěží exotickou chuť s jemností matchy. Výrazný, hravý a ručně laděný do posledního detailu.',
    price: '120 Kč',
    badge: null,
    image: null,
    video: '/dragon.mov',
  },
  {
    id: 2,
    title: 'Apple Pie',
    desc: 'Matcha latte s domácí jablečnou směsí pečenou na másle, inspirované chutí čerstvého apple pie. Známá, útulná a krásně máslová vůně v každém doušku.',
    price: '120 Kč',
    badge: null,
    image: '/apple.jpeg',
    video: '/apple.mov',
  },
  {
    id: 5,
    title: 'Gingerbread latte',
    desc: 'Sezonní latte s kořeněnou chutí perníčku, které působí jako domácí sváteční dobrota ve skleničce. Jemné, voňavé a příjemně nostalgické.',
    price: '120 Kč',
    badge: null,
    image: '/pernicek.jpeg',
    video: '/ginger.mov',
  },
]

const getVideoType = (path: string) =>
  path.toLowerCase().endsWith('.mov') ? 'video/quicktime' : 'video/mp4'

export default function MenuPreview() {
  const [activeItemId, setActiveItemId] = useState(items[0].id)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const activeItem = items.find((item) => item.id === activeItemId) ?? items[0]

  const menuData = {
    classics: [
      { name: 'USUCHA', price: '90' },
      { name: 'KOICHA', price: '90' },
      { name: 'LATTE', price: '90' },
    ],
    specials: [
      { name: 'SKOŘICOVÝ ŠNEK', price: '120' },
      { name: 'PUMPKIN SPICE', price: '120' },
      { name: 'PERNÍČEK', price: '120' },
      { name: 'APPLE PIE MATCHA', price: '120' },
      { name: 'VANILKOVÝ ROHLÍČEK', price: '110' },
      { name: 'BANANA CREAM', price: '120' },
      { name: 'LOTUS MATCHA', price: '120' },
      { name: 'BÍLÁ ČOKOLÁDA', price: '120' },
      { name: 'JASMÍNOVÁ MATCHA', price: '120' },
      { name: 'BROWN SUGAR', price: '120' },
      { name: 'JAHODOVÁ MATCHA', price: '120' },
      { name: 'COCONUT CLOUD', price: '120' },
      { name: 'MANGO MATCHA', price: '120' },
      { name: 'YUZU TONIC', price: '120' },
    ],
    milks: ['PLNOTUČNÉ', 'SOJOVÉ', 'OVESNÉ'],
    napoje: [
      { name: 'CHAI LATTE', ml: '250', price: '90' },
      { name: 'YUZU ČAJ', ml: '250', price: '75' },
      { name: 'MARACUJA YUZU ČAJ', ml: '250', price: '75' },
      { name: 'HORKÁ ČOKOLÁDA', ml: '250', price: '85' },
      { name: 'JASMÍNOVÝ ČAJ S MEDEM', ml: '250', price: '85' },
    ],
    zakusky: [
      { name: 'BROWNIES', grams: '75', price: '50' },
      { name: 'ČOKOLÁDOVÉ COOKIES', grams: '75', price: '50' },
      { name: 'MATCHA COOKIES', grams: '75', price: '50' },
      { name: 'KNEDLÍČKY', grams: '-', price: '40' },
    ],
  }

  return (
    <section id="menu" className="scroll-mt-28 sm:scroll-mt-32 w-full bg-[#FFFEDF] py-10 sm:py-12 px-4 sm:px-6 safe-inset-x">
      <div className="max-w-6xl mx-auto text-center mb-8 sm:mb-10">
        <h2 id="menu-heading" className={`${schoolbell.className} text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#0E7D23] mb-2 sm:mb-3 leading-tight px-2`}>
          A jakou matchu připravujeme my?
        </h2>
        <p className="mx-auto max-w-2xl text-[#0E7D23]/80 text-sm sm:text-base md:text-lg px-2">
          Proklikni si naše signature drinky!
        </p>
      </div>

      <div className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-4 sm:gap-6 lg:grid-cols-[minmax(0,480px)_minmax(280px,360px)] lg:justify-center">
        <div className="relative overflow-hidden rounded-[2rem] border border-[#0E7D23]/10 bg-[#0E7D23] shadow-[0_24px_60px_-20px_rgba(14,125,35,0.28)]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeItem.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.28, ease: 'easeOut' }}
              className="relative flex flex-col"
            >
              <div className="flex items-center justify-center bg-[#0E7D23] px-3 pb-2 pt-3 sm:px-4 sm:pt-4 md:px-5 md:pb-1 md:pt-5">
                <video
                  key={activeItem.video}
                  className="block h-auto max-h-[200px] sm:max-h-[240px] w-auto max-w-full rounded-[1.25rem] sm:rounded-[1.5rem] object-contain md:max-h-[320px]"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  poster={activeItem.image ?? undefined}
                  controlsList="nodownload nofullscreen noremoteplayback"
                  disablePictureInPicture
                >
                  <source src={activeItem.video} type={getVideoType(activeItem.video)} />
                  Váš prohlížeč nepodporuje přehrávání videa.
                </video>
              </div>

              <div className="bg-[#0E7D23] px-4 pb-4 pt-5 sm:px-5 sm:pb-5 sm:pt-6 md:px-6 md:pb-6 md:pt-8 text-[#FFFEDF]">
                {activeItem.badge ? (
                  <div className="mb-2 flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-[#FFD700] px-3 py-1 text-xs font-bold text-[#0E7D23]">
                      {activeItem.badge}
                    </span>
                  </div>
                ) : null}
                <h3 className={`${schoolbell.className} text-2xl sm:text-3xl leading-tight md:text-4xl`}>{activeItem.title}</h3>
                <p className="mt-1.5 max-w-xl text-xs sm:text-sm text-[#FFFEDF]/85 md:text-base leading-snug">{activeItem.desc}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex flex-col gap-3">
          {items.map((item) => {
            const isActive = item.id === activeItem.id

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveItemId(item.id)}
                aria-pressed={isActive}
                className={`rounded-[1.5rem] sm:rounded-[1.75rem] border p-4 sm:p-5 text-left transition-all duration-300 min-h-[56px] flex items-center touch-manipulation ${
                  isActive
                    ? 'border-[#0E7D23] bg-[#0E7D23] text-[#FFFEDF] shadow-[0_18px_40px_-20px_rgba(14,125,35,0.45)]'
                    : 'border-[#0E7D23]/10 bg-white/40 text-[#0E7D23] hover:-translate-y-0.5 hover:border-[#0E7D23]/25 hover:shadow-[0_16px_30px_-24px_rgba(14,125,35,0.45)] active:bg-[#0E7D23]/5'
                }`}
              >
                <h3 className={`${schoolbell.className} text-xl sm:text-2xl md:text-[2.1rem] leading-tight`}>
                  {item.title}
                </h3>
              </button>
            )
          })}
        </div>
      </div>

      <div className="text-center mt-8 sm:mt-10">
        <button
          onClick={() => setIsMenuOpen(true)}
          className="min-h-[44px] px-6 py-2.5 rounded-full border-2 border-[#0E7D23] text-[#0E7D23] font-bold hover:bg-[#0E7D23] hover:text-[#FFFEDF] active:scale-[0.98] transition-colors touch-manipulation"
        >
          Celé menu
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen ? (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 md:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMenuOpen(false)}
          >
            <motion.div
              className="w-full max-w-4xl max-h-[85dvh] sm:max-h-[90vh] overflow-y-auto overflow-x-hidden bg-[#FFFEDF] text-[#0E7D23] rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 lg:p-12 relative shadow-2xl safe-inset-x"
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 280, damping: 24 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsMenuOpen(false)}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 min-w-[44px] min-h-[44px] rounded-full bg-[#0E7D23] text-[#FFFEDF] font-bold text-xl touch-manipulation"
                aria-label="Zavřít menu"
              >
                ×
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                <div>
                  <h3 className={`${schoolbell.className} text-3xl sm:text-4xl md:text-5xl mb-3 sm:mb-4`}>MATCHA</h3>
                  <h4 className={`${schoolbell.className} text-xl sm:text-2xl md:text-3xl mb-2`}>CLASSICS</h4>
                  {menuData.classics.map((item) => (
                    <div key={item.name} className="flex justify-between items-center border-b border-[#0E7D23]/20 py-2">
                      <span>{item.name}</span>
                      <span className="font-semibold">{item.price}</span>
                    </div>
                  ))}

                  <h4 className={`${schoolbell.className} text-xl sm:text-2xl md:text-3xl mt-6 sm:mt-8 mb-2`}>SPECIALS</h4>
                  {menuData.specials.map((item) => (
                    <div key={item.name} className="flex justify-between items-center border-b border-[#0E7D23]/20 py-2">
                      <span>{item.name}</span>
                      <span className="font-semibold">{item.price}</span>
                    </div>
                  ))}

                  <h4 className={`${schoolbell.className} text-xl sm:text-2xl md:text-3xl mt-6 sm:mt-8 mb-2`}>DRUHY MLÉKA</h4>
                  <div className="border-b border-[#0E7D23]/20 py-2">
                    {menuData.milks.join(' • ')}
                  </div>
                </div>

                <div>
                  <h3 className={`${schoolbell.className} text-3xl sm:text-4xl md:text-5xl mb-3 sm:mb-4`}>NON-MATCHA</h3>
                  <h4 className={`${schoolbell.className} text-xl sm:text-2xl md:text-3xl mb-2`}>NÁPOJE</h4>
                  {menuData.napoje.map((item) => (
                    <div key={item.name} className="flex justify-between items-center border-b border-[#0E7D23]/20 py-2">
                      <span>{item.name}</span>
                      <span className="font-semibold">{item.price}</span>
                    </div>
                  ))}

                  <h4 className={`${schoolbell.className} text-xl sm:text-2xl md:text-3xl mt-6 sm:mt-8 mb-2`}>ZÁKUSKY</h4>
                  {menuData.zakusky.map((item) => (
                    <div key={item.name} className="flex justify-between items-center border-b border-[#0E7D23]/20 py-2">
                      <span>{item.name}</span>
                      <span className="font-semibold">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  )
}

'use client'

import { Schoolbell } from 'next/font/google'

const schoolbell = Schoolbell({
  weight: '400',
  subsets: ['latin'],
})

export default function WhatIsMatcha() {
  return (
    <section id="co-je-matcha" className="scroll-mt-28 sm:scroll-mt-32 w-full bg-[#FFFEDF] py-14 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 lg:px-24 safe-inset-x">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-14 md:gap-16 items-start">
        <div className="flex flex-col justify-center space-y-6 sm:space-y-8">
          <h2 id="matcha-heading" className={`${schoolbell.className} text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#0E7D23] leading-tight`}>
            Co je to{' '}
            <span style={{ fontFamily: "'Gloria Hallelujah', cursive" }}>matcha</span>?
          </h2>

          <ul className="space-y-3 sm:space-y-4 text-[#0E7D23] text-base sm:text-lg font-medium">
            <li className="flex items-start">
              <span className="mr-3 mt-1 text-xl">•</span>
              <span><strong>Matcha</strong> je jemně mletý prášek ze speciálně pěstovaných japonských zelených čajových lístků.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 mt-1 text-xl">•</span>
              <span>Obsahuje kofein a díky aminokyselinám uvolňuje energii postupně, takže po matche není žádný náhlý kofeinový kolaps.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 mt-1 text-xl">•</span>
              <span>Také je to nutričně bohatý čaj, díky stínění před sklizní má vysoký obsah antioxidantů a chlorofylu. Jeden šálek vydá až za 10 šálků běžného zeleného čaje.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 mt-1 text-xl">•</span>
              <span>Chuť těchto unikátních lístků je velmi výrazná. Skvělá je nejen k pití, ale i do zákusků.</span>
            </li>
          </ul>

          <div className="relative w-full min-h-[240px] sm:min-h-[280px] md:min-h-[320px] overflow-hidden rounded-2xl sm:rounded-3xl border border-[#0E7D23]/20 bg-[#0E7D23]/5">
            <video
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster="/matcha.png?v=2"
              controlsList="nodownload nofullscreen noremoteplayback"
              disablePictureInPicture
              onPause={(e) => {
                void e.currentTarget.play()
              }}
            >
              <source src="/whisking.mov" type="video/quicktime" />
              Váš prohlížeč nepodporuje přehrávání videa.
            </video>
          </div>
        </div>

        <div className="flex flex-col space-y-6 sm:space-y-8">
          <div className="relative w-full min-h-[260px] sm:min-h-[340px] md:min-h-[420px] rounded-2xl sm:rounded-3xl overflow-hidden bg-[#0E7D23]/5 border border-[#0E7D23]/20">
            <video
              className="w-full h-full min-h-[240px] sm:min-h-[320px] object-cover rounded-2xl sm:rounded-3xl"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster="/matcha.png?v=2"
              controlsList="nodownload nofullscreen noremoteplayback"
              disablePictureInPicture
              onPause={(e) => {
                void e.currentTarget.play()
              }}
            >
              <source src="/whisking.mov" type="video/quicktime" />
              Váš prohlížeč nepodporuje přehrávání videa.
            </video>
          </div>

          <div className="mt-8 sm:mt-12 text-left">
            <h3 className={`${schoolbell.className} text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#0E7D23] mb-6 sm:mb-8`}>
              Jak to funguje?
            </h3>

            <ul className={`${schoolbell.className} space-y-3 sm:space-y-4 text-[#0E7D23] text-lg sm:text-xl md:text-2xl`}>
              <li className="flex items-start sm:items-center gap-3 sm:gap-4">
                <span className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#0E7D23] text-[#FFFEDF] text-lg sm:text-xl font-bold shrink-0 mt-0.5 sm:mt-0">1</span>
                <span>Přes sítko nasypte 2-3 lžičky matchy.</span>
              </li>
              <li className="flex items-start sm:items-center gap-3 sm:gap-4">
                <span className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#0E7D23] text-[#FFFEDF] text-lg sm:text-xl font-bold shrink-0 mt-0.5 sm:mt-0">2</span>
                <span>Nalijte 30-50 g horké vody.</span>
              </li>
              <li className="flex items-start sm:items-center gap-3 sm:gap-4">
                <span className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#0E7D23] text-[#FFFEDF] text-lg sm:text-xl font-bold shrink-0 mt-0.5 sm:mt-0">3</span>
                <span>Vyšlehejte metličkou, tzv. chasenem.</span>
              </li>
              <li className="flex items-start sm:items-center gap-3 sm:gap-4">
                <span className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#0E7D23] text-[#FFFEDF] text-lg sm:text-xl font-bold shrink-0 mt-0.5 sm:mt-0">4</span>
                <span>Podle chuti doslaďte a vychutnávejte.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

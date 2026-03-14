'use client'

import { Schoolbell } from 'next/font/google'

const schoolbell = Schoolbell({
  weight: '400',
  subsets: ['latin'],
})

export default function WhatIsMatcha() {
  return (
    <section id="co-je-matcha" className="scroll-mt-32 w-full bg-[#FFFEDF] py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        <div className="flex flex-col justify-center space-y-8">
          <h2 id="matcha-heading" className={`${schoolbell.className} text-6xl md:text-7xl text-[#0E7D23]`}>
            Co je to{' '}
            <span style={{ fontFamily: "'Gloria Hallelujah', cursive" }}>matcha</span>?
          </h2>

          <ul className="space-y-4 text-[#0E7D23] text-lg font-medium">
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

          {/* Co je to matcha: na mobilu fotka, od md výš video */}
          <div className="relative w-full min-h-[320px] overflow-hidden rounded-3xl border border-[#0E7D23]/20 bg-[#0E7D23]/5 block md:hidden">
            <img
              src="/matcha.png"
              alt="Matcha"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative w-full min-h-[320px] overflow-hidden rounded-3xl border border-[#0E7D23]/20 bg-[#0E7D23]/5 hidden md:block">
            <video
              className="w-full h-full object-cover rounded-3xl"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              poster="/matcha.png?v=2"
              controlsList="nodownload nofullscreen noremoteplayback"
              disablePictureInPicture
              onPause={(e) => {
                void e.currentTarget.play()
              }}
            >
              <source src="/whisking.MOV" type="video/quicktime" />
              Váš prohlížeč nepodporuje přehrávání videa.
            </video>
          </div>
        </div>

        <div className="flex flex-col space-y-8">
          {/* Jak to funguje: na mobilu video, od md výš fotka */}
          <div className="relative w-full aspect-video min-h-[280px] overflow-hidden rounded-3xl border border-[#0E7D23]/20 bg-[#0E7D23]/5 block md:hidden">
            <video
              className="w-full h-full object-cover rounded-3xl"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              poster="/matcha.png?v=2"
              controlsList="nodownload nofullscreen noremoteplayback"
              disablePictureInPicture
              onPause={(e) => {
                void e.currentTarget.play()
              }}
            >
              <source src="/whisking.MOV" type="video/quicktime" />
              Váš prohlížeč nepodporuje přehrávání videa.
            </video>
          </div>
          <div className="relative w-full aspect-video min-h-[280px] rounded-3xl overflow-hidden bg-[#0E7D23]/5 border border-[#0E7D23]/20 hidden md:block">
            <img
              src="/matcha.png"
              alt="Matcha"
              className="absolute inset-0 w-full h-full object-cover rounded-3xl"
            />
          </div>

          <div className="mt-12 text-left">
            <h3 className={`${schoolbell.className} text-5xl md:text-6xl text-[#0E7D23] mb-8`}>
              Jak to funguje?
            </h3>

            <ul className={`${schoolbell.className} space-y-4 text-[#0E7D23] text-xl md:text-2xl`}>
              <li className="flex items-center gap-4">
                <span className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#0E7D23] text-[#FFFEDF] text-xl font-bold shrink-0">1</span>
                <span>Přes sítko nasypte 2-3 lžičky matchy.</span>
              </li>
              <li className="flex items-center gap-4">
                <span className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#0E7D23] text-[#FFFEDF] text-xl font-bold shrink-0">2</span>
                <span>Nalijte 30-50 g horké vody.</span>
              </li>
              <li className="flex items-center gap-4">
                <span className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#0E7D23] text-[#FFFEDF] text-xl font-bold shrink-0">3</span>
                <span>Vyšlehejte metličkou, tzv. chasenem.</span>
              </li>
              <li className="flex items-center gap-4">
                <span className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#0E7D23] text-[#FFFEDF] text-xl font-bold shrink-0">4</span>
                <span>Podle chuti doslaďte a vychutnávejte.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

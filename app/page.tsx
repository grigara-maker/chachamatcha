'use client'

import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import SplashScreen from '@/components/SplashScreen'
import Header from '@/components/Header'
import KineticHero from '@/components/KineticHero'
import ClickSpark from '@/components/ClickSpark'
import WhatIsMatcha from '@/components/WhatIsMatcha'
import MenuPreview from '@/components/MenuPreview'
import BuildYourMatcha from '@/components/BuildYourMatcha'
import Popups from '@/components/Popups'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'

export default function Home() {
  const [showSplash, setShowSplash] = useState(true)

  const handleEnter = () => {
    // Ensure splash exit always lands on the top hero, not on a stale hash anchor.
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname)
    }
    window.scrollTo({ top: 0, behavior: 'auto' })
    setShowSplash(false)
  }

  return (
    <>
      <AnimatePresence mode="wait">
        {showSplash && <SplashScreen onEnter={handleEnter} />}
      </AnimatePresence>

      <ClickSpark sparkColor="#0E7D23" sparkSize={18} sparkRadius={26} sparkCount={8} duration={480} easing="ease-out" extraScale={1.1}>
        <main className={`min-h-screen ${showSplash ? 'overflow-hidden h-screen' : ''}`}>
          <Header />
          <KineticHero />
          <WhatIsMatcha />
          <MenuPreview />
          <BuildYourMatcha />
          <Popups />
          <Newsletter />
          <Footer />
        </main>
      </ClickSpark>
    </>
  )
}

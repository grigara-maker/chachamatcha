'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Schoolbell } from 'next/font/google';

const schoolbell = Schoolbell({
  weight: '400',
  subsets: ['latin'],
});

const BuildYourMatcha = () => {
  const [flavor, setFlavor] = useState<string | null>(null);
  const [milk, setMilk] = useState<string | null>(null);
  const [matcha, setMatcha] = useState<string | null>(null);

  // Configuration for layers
  const flavors = [
    { id: 'jahoda', label: 'Jahodové pyré', color: '#ff99a8' },
    { id: 'yuzu', label: 'Yuzu sirup', color: '#ffcc66' },
    { id: 'skorice', label: 'Skořice', color: '#d2b48c' },
  ];

  const milks = [
    { id: 'ovesne', label: 'Ovesné', color: '#f4e4c1' },
    { id: 'plnotucne', label: 'Plnotučné', color: '#ffffff' },
    { id: 'sojove', label: 'Sójové', color: '#fdfbf7' },
  ];

  const matchas = [
    { id: 'ceremonialni', label: 'Ceremoniální', color: '#0E7D23' },
  ];

  const scrollToPopups = () => {
    const target = document.getElementById('popups');
    if (!target) return;

    const headerHeight = window.innerWidth >= 640 ? 120 : 104;
    const rect = target.getBoundingClientRect();
    const absoluteTop = window.scrollY + rect.top;
    const safeTop = absoluteTop - headerHeight - 8;
    const nextTop = Math.max(safeTop + 72, 0);

    window.history.replaceState(null, '', '#popups');
    window.scrollTo({ top: nextTop, behavior: 'smooth' });
  };

  return (
    <section id="namichej" className="w-full bg-[#FFFEDF] py-10 sm:py-14 md:py-16 px-4 sm:px-6 md:px-12 lg:px-24 safe-inset-x">
      <div className="max-w-6xl mx-auto text-center mb-8 sm:mb-10">
        <h2 className={`${schoolbell.className} text-[2.25rem] leading-tight sm:text-4xl md:text-5xl lg:text-6xl text-[#0E7D23] mb-3 sm:mb-4 px-1`}>
          Namíchej si drink
        </h2>
        <p className="text-[#0E7D23] text-base sm:text-lg md:text-xl max-w-3xl mx-auto font-medium px-2">
          Vyber si základ, přidej mléko a zalij to naší matchou.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
        {/* Left Column: The ORGANIC Cup (Scaled Down) */}
        <div className="flex justify-center items-center order-1">
          <div className="relative perspective-[1000px]">
            <div className="relative w-[180px] h-[270px] sm:w-[200px] sm:h-[300px] border-4 border-[#0E7D23] rounded-[12px_12px_78px_78px] overflow-hidden flex flex-col-reverse bg-transparent z-10">
              {/* FLAVOR LAYER */}
              <motion.div
                initial={{ height: '0%' }}
                animate={{ height: flavor ? '20%' : '0%', backgroundColor: flavor ? flavors.find(f => f.id === flavor)?.color : 'transparent' }}
                transition={{ type: 'spring', stiffness: 50, damping: 12 }}
                className="w-full"
              />

              {/* MILK LAYER */}
              <motion.div
                initial={{ height: '0%' }}
                animate={{ height: milk ? '50%' : '0%', backgroundColor: milk ? milks.find(m => m.id === milk)?.color : 'transparent' }}
                transition={{ type: 'spring', stiffness: 50, damping: 12, delay: 0.1 }}
                className="w-full border-b border-black/5"
              />

              {/* MATCHA LAYER */}
              <motion.div
                initial={{ height: '0%' }}
                animate={{ height: matcha ? '30%' : '0%', backgroundColor: matcha ? matchas.find(m => m.id === matcha)?.color : 'transparent' }}
                transition={{ type: 'spring', stiffness: 50, damping: 12, delay: 0.2 }}
                className="w-full border-b border-black/10"
              />
            </div>
          </div>
        </div>

        {/* Right Column: The Controls (Tightened up) */}
        <div className="flex flex-col space-y-6 sm:space-y-7 order-2">
          {/* 1. Flavor Group */}
          <div>
            <h3 className={`${schoolbell.className} text-xl sm:text-2xl text-[#0E7D23] mb-2 sm:mb-3`}>1. Základ</h3>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {flavors.map(f => (
                <button
                  key={f.id}
                  onClick={() => setFlavor(f.id)}
                  className={`min-h-[44px] px-4 sm:px-5 py-2.5 rounded-full border-2 text-sm sm:text-base font-semibold transition-all touch-manipulation ${
                    flavor === f.id
                      ? 'bg-[#0E7D23] text-[#FFFEDF] border-[#0E7D23]'
                      : 'bg-transparent text-[#0E7D23] border-[#0E7D23] hover:bg-[#0E7D23]/10 active:bg-[#0E7D23]/15'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          {/* 2. Milk Group */}
          <div>
            <h3 className={`${schoolbell.className} text-xl sm:text-2xl text-[#0E7D23] mb-2 sm:mb-3`}>2. Mléko</h3>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {milks.map(m => (
                <button
                  key={m.id}
                  onClick={() => setMilk(m.id)}
                  className={`min-h-[44px] px-4 sm:px-5 py-2.5 rounded-full border-2 text-sm sm:text-base font-semibold transition-all touch-manipulation ${
                    milk === m.id
                      ? 'bg-[#0E7D23] text-[#FFFEDF] border-[#0E7D23]'
                      : 'bg-transparent text-[#0E7D23] border-[#0E7D23] hover:bg-[#0E7D23]/10 active:bg-[#0E7D23]/15'
                  }`}
                >
                  {m.label}
                </button>
              ))}
            </div>
          </div>

          {/* 3. Matcha Group */}
          <div>
            <h3 className={`${schoolbell.className} text-xl sm:text-2xl text-[#0E7D23] mb-2 sm:mb-3`}>3. Matcha</h3>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {matchas.map(m => (
                <button
                  key={m.id}
                  onClick={() => setMatcha(m.id)}
                  className={`min-h-[44px] px-4 sm:px-5 py-2.5 rounded-full border-2 text-sm sm:text-base font-semibold transition-all touch-manipulation ${
                    matcha === m.id
                      ? 'bg-[#0E7D23] text-[#FFFEDF] border-[#0E7D23]'
                      : 'bg-transparent text-[#0E7D23] border-[#0E7D23] hover:bg-[#0E7D23]/10 active:bg-[#0E7D23]/15'
                  }`}
                >
                  {m.label}
                </button>
              ))}
            </div>
          </div>

          {/* Reset Button */}
          <div className="pt-1 text-center md:text-left">
            <button
              onClick={() => { setFlavor(null); setMilk(null); setMatcha(null); }}
              className={`${schoolbell.className} min-h-[44px] inline-flex items-center text-base sm:text-lg text-[#0E7D23] underline hover:opacity-70 active:opacity-80 transition-opacity cursor-pointer touch-manipulation py-2`}
            >
              Vypít a začít znovu
            </button>
          </div>
        </div>
      </div>

      {/* Tighter margin for the main action button */}
      <div className="w-full flex justify-center mt-8 sm:mt-10 safe-bottom px-4">
        <button
          onClick={scrollToPopups}
          className={`${schoolbell.className} min-h-[48px] px-8 sm:px-10 py-3.5 sm:py-4 bg-[#0E7D23] text-[#FFFEDF] text-xl sm:text-2xl rounded-full hover:scale-105 active:scale-[0.98] transition-transform touch-manipulation`}
        >
          Objednat drink
        </button>
      </div>
    </section>
  );
};

export default BuildYourMatcha;

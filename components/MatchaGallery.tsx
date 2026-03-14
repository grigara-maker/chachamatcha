'use client';

import { useState } from 'react';
import { motion, AnimatePresence, type PanInfo } from 'framer-motion';

const MatchaGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const items = [
    { id: 1, title: 'Dragon fruit matcha', desc: 'Signature matcha latte s ovocným pyré z dračího ovoce.', price: '120 Kč', badge: 'NOVINKA', videoSrc: '/videos/dragon.mp4' },
    { id: 2, title: 'Apple Pie', desc: 'Matcha latte s domácí jablečnou směsí pečenou na másle.', price: '120 Kč', badge: null, videoSrc: '/videos/apple.mp4' },
    { id: 3, title: 'Gingerbread latte', desc: 'Matcha latte s příchutí perníčku.', price: '50 Kč', badge: null, videoSrc: '/videos/pernicek.mp4' },
    { id: 4, title: 'Matcha Latte', desc: 'Naše klasika s plnotučným, sójovým nebo ovesným mlékem.', price: '90 Kč', badge: 'OBLÍBENÉ', videoSrc: '/videos/latte.mp4' },
    { id: 5, title: 'Cinnamon roll', desc: 'Náš matcha speciál s příchutí skořicového šneka.', price: '120 Kč', badge: 'SPECIÁL', videoSrc: '/videos/snek.mp4' },
  ];

  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % items.length);
  const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);

  const handleDragEnd = (_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const swipeThreshold = 50;
    if (info.offset.x > swipeThreshold) {
      handlePrev();
    } else if (info.offset.x < -swipeThreshold) {
      handleNext();
    }
  };

  const getCardStyles = (index: number) => {
    let distance = index - currentIndex;
    const len = items.length;

    if (distance > len / 2) distance -= len;
    if (distance < -len / 2) distance += len;

    if (distance === 0) {
      return { x: 0, rotateY: 0, scale: 1, zIndex: 30, opacity: 1 };
    } else if (distance === -1) {
      return { x: -160, rotateY: 20, scale: 0.85, zIndex: 20, opacity: 0.9 };
    } else if (distance === 1) {
      return { x: 160, rotateY: -20, scale: 0.85, zIndex: 20, opacity: 0.9 };
    } else {
      return { x: distance > 0 ? 300 : -300, rotateY: distance > 0 ? -30 : 30, scale: 0.6, zIndex: 0, opacity: 0 };
    }
  };

  return (
    <section className="w-full bg-[#0E7D23] py-24 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-5xl md:text-6xl schoolbell-regular text-[#FFFEDF] mb-4">
          A jakou matchu nabízíme my?
        </h2>
      </div>

      <div className="relative max-w-5xl mx-auto h-[520px] flex items-center justify-center perspective-[1200px]">
        <button
          onClick={handlePrev}
          className="absolute left-0 md:left-8 z-40 p-3 text-[#FFFEDF] hover:scale-110 transition-transform bg-[#0E7D23]/50 border border-[#FFFEDF]/20 rounded-full cursor-pointer"
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
        </button>

        <motion.div
          className="relative w-full h-full preserve-3d"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.05}
          onDragEnd={handleDragEnd}
        >
          <AnimatePresence initial={false}>
            {items.map((item, index) => {
              const styles = getCardStyles(index);

              return (
                <motion.div
                  key={item.id}
                  initial={false}
                  animate={{
                    x: styles.x,
                    rotateY: styles.rotateY,
                    scale: styles.scale,
                    opacity: styles.opacity,
                    zIndex: styles.zIndex,
                  }}
                  transition={{ type: 'spring', stiffness: 350, damping: 30, mass: 0.8 }}
                  onClick={() => setCurrentIndex(index)}
                  className="absolute left-0 right-0 top-0 bottom-0 mx-auto my-auto w-[320px] h-[480px] bg-[#FFFEDF] rounded-3xl p-5 shadow-2xl cursor-pointer flex flex-col pointer-events-auto"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {item.badge && (
                    <div className="absolute -top-3 -right-3 bg-[#FFD700] text-[#0E7D23] text-xs font-bold px-4 py-1.5 rounded-full z-10 shadow-md">
                      {item.badge}
                    </div>
                  )}

                  <div className="relative w-full h-[220px] rounded-2xl mb-5 overflow-hidden shrink-0 bg-[#0E7D23]/20 flex items-center justify-center pointer-events-none">
                    <video
                      src={item.videoSrc}
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="metadata"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex flex-col flex-grow pointer-events-none">
                    <h3 className="text-2xl font-bold text-[#0E7D23] mb-2">{item.title}</h3>
                    <p className="text-[#0E7D23]/80 text-sm mb-4 line-clamp-3">
                      {item.desc}
                    </p>
                    <p className="text-3xl font-bold text-[#0E7D23] mt-auto">{item.price}</p>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        <button
          onClick={handleNext}
          className="absolute right-0 md:right-8 z-40 p-3 text-[#FFFEDF] hover:scale-110 transition-transform bg-[#0E7D23]/50 border border-[#FFFEDF]/20 rounded-full cursor-pointer"
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
        </button>
      </div>

      <div className="text-center mt-8">
        <button className="px-10 py-3 rounded-full border-2 border-[#FFFEDF] text-[#FFFEDF] font-bold hover:bg-[#FFFEDF] hover:text-[#0E7D23] transition-colors">
          Celé menu
        </button>
      </div>
    </section>
  );
};

export default MatchaGallery;

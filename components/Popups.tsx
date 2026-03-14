'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Schoolbell } from 'next/font/google';

const schoolbell = Schoolbell({
  weight: '400',
  subsets: ['latin'],
});

export default function Popups() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const events = [
    {
      id: 1,
      badge: 'NADCHÁZEJÍCÍ POP-UP',
      badgeColor: 'bg-[#FFD700] text-[#0E7D23]',
      title: 'Velikonoční trhy Karlovy Vary',
      location: 'Smetanovy sady, Karlovy Vary',
      date: '2. – 5. dubna 2026',
      time: '11:00 – 17:00',
      href: 'https://kvcity.cz/akce/velikonocni-trhy-karlovy-vary-2026',
    },
    {
      id: 2,
      badge: 'AKCE JIŽ PROBĚHLA',
      badgeColor: 'bg-[#0E7D23]/10 text-[#0E7D23]',
      title: 'Vánoční trhy Karlovy Vary',
      location: 'Mlýnská Kolonáda, Karlovy Vary',
      date: '29. listopadu – 23. prosince 2025',
      time: '12:00 – 20:00',
      href: null,
    },
    {
      id: 3,
      badge: 'AKCE JIŽ PROBĚHLA',
      badgeColor: 'bg-[#0E7D23]/10 text-[#0E7D23]',
      title: 'Oslava památky UNESCO Karlovy Vary',
      location: 'Smetanovy Sady, Karlovy Vary',
      date: '27. – 29. září 2025',
      time: '9:00 – 17:00',
      href: null,
    }
  ];

  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % events.length);
  const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + events.length) % events.length);

  return (
    <section id="popups" className="scroll-mt-28 sm:scroll-mt-32 relative w-full min-h-[80vh] bg-[#FFFEDF] pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 md:pb-24 overflow-hidden flex flex-col items-center safe-inset-x">
      <h2 id="popups-heading" className={`${schoolbell.className} text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-[#0E7D23] mb-10 sm:mb-14 md:mb-16 text-center px-4`}>
        POP-UPs
      </h2>

      <div className="w-full max-w-6xl px-4">
        <div className="mx-auto flex max-w-[430px] flex-col items-center gap-6 md:hidden">
          <div className="relative h-[520px] w-full">
            <AnimatePresence initial={false} mode="popLayout">
              {events.map((event, index) => {
                const offset = (index - currentIndex + events.length) % events.length;

                if (offset > 2) return null;

                const isFront = offset === 0;
                const isUpcoming = event.badge.includes('NADCHÁZEJÍCÍ');

                return (
                  <motion.article
                    key={event.id}
                    layout
                    initial={{ opacity: 0, y: 50, scale: 0.92 }}
                    animate={{
                      opacity: 1,
                      y: offset * 34,
                      scale: 1 - offset * 0.08,
                      zIndex: 30 - offset,
                    }}
                    exit={{ opacity: 0, y: -40, scale: 0.9 }}
                    transition={{ type: 'spring', stiffness: 280, damping: 28 }}
                    className={`absolute left-0 right-0 top-0 mx-auto flex min-h-[340px] sm:min-h-[380px] w-full flex-col rounded-2xl sm:rounded-3xl border bg-[#FFFEDF] p-5 sm:p-6 md:p-8 ${
                      isFront ? 'pointer-events-auto' : 'pointer-events-none'
                    } ${
                      isUpcoming && isFront
                        ? 'border-[#FFD700]/80 ring-2 ring-[#FFD700]/60'
                        : 'border-[#0E7D23]/10'
                    }`}
                    style={{
                      boxShadow: isUpcoming && isFront
                        ? '0 30px 70px -20px rgba(255, 215, 0, 0.35), 0 20px 40px -10px rgba(14, 125, 35, 0.18)'
                        : '0 20px 40px -10px rgba(14, 125, 35, 0.15)',
                    }}
                  >
                    {isUpcoming && isFront ? (
                      <div className="mb-4 inline-flex w-fit items-center rounded-full bg-[#FFD700] px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.2em] text-[#0E7D23]">
                        Hlavní nadcházející akce
                      </div>
                    ) : null}

                    <div className="mb-4 sm:mb-6">
                      <span className={`mb-3 sm:mb-4 inline-block rounded-full px-3 sm:px-4 py-1 sm:py-1.5 text-xs font-bold ${event.badgeColor}`}>
                        {event.badge}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold leading-tight text-[#0E7D23]">
                        {event.title}
                      </h3>
                    </div>

                    <div className="mb-6 sm:mb-8 flex-grow space-y-3 sm:space-y-4 text-sm text-[#0E7D23]/80">
                      <p className="flex items-center gap-3">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                        {event.location}
                      </p>
                      <p className="flex items-center gap-3">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                        {event.date}
                      </p>
                      <p className="flex items-center gap-3">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                        {event.time}
                      </p>
                    </div>

                    {event.href ? (
                      <a
                        href={event.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex w-full items-center justify-center gap-2 rounded-full py-3 min-h-[44px] font-bold transition-colors touch-manipulation ${
                          isUpcoming && isFront
                            ? 'bg-[#FFD700] text-[#0E7D23] hover:bg-[#FFD700]/90'
                            : 'bg-[#0E7D23] text-[#FFFEDF] hover:bg-[#0E7D23]/90'
                        }`}
                      >
                        Detaily
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                      </a>
                    ) : (
                      <button
                        type="button"
                        disabled
                        className="flex w-full cursor-default items-center justify-center gap-2 rounded-full bg-[#0E7D23] py-3 font-bold text-[#FFFEDF] opacity-80"
                      >
                        Detaily
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                      </button>
                    )}
                  </motion.article>
                );
              })}
            </AnimatePresence>
          </div>

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Předchozí akce"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-[#0E7D23]/15 bg-white/60 text-[#0E7D23] transition hover:scale-105 hover:border-[#0E7D23]/30"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
            </button>

            <div className="flex items-center gap-2">
              {events.map((event, index) => (
                <button
                  key={event.id}
                  type="button"
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Zobrazit akci ${event.title}`}
                  className={`h-2.5 rounded-full transition-all ${
                    index === currentIndex ? 'w-10 bg-[#0E7D23]' : 'w-2.5 bg-[#0E7D23]/25 hover:bg-[#0E7D23]/40'
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={handleNext}
              aria-label="Další akce"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-[#0E7D23]/15 bg-white/60 text-[#0E7D23] transition hover:scale-105 hover:border-[#0E7D23]/30"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </button>
          </div>
        </div>

        <div className="mx-auto hidden max-w-[526px] grid-cols-[48px_minmax(0,430px)_48px] items-center justify-center gap-6 md:grid">
          <div aria-hidden="true" className="h-full w-12" />

          <div className="relative h-[520px] w-full">
            <AnimatePresence initial={false} mode="popLayout">
              {events.map((event, index) => {
                const offset = (index - currentIndex + events.length) % events.length;

                if (offset > 2) return null;

                const isFront = offset === 0;
                const isUpcoming = event.badge.includes('NADCHÁZEJÍCÍ');

                return (
                  <motion.article
                    key={event.id}
                    layout
                    initial={{ opacity: 0, y: 50, scale: 0.92 }}
                    animate={{
                      opacity: 1,
                      y: offset * 34,
                      scale: 1 - offset * 0.08,
                      zIndex: 30 - offset,
                    }}
                    exit={{ opacity: 0, y: -40, scale: 0.9 }}
                    transition={{ type: 'spring', stiffness: 280, damping: 28 }}
                    className={`absolute left-0 right-0 top-0 mx-auto flex min-h-[340px] sm:min-h-[380px] w-full flex-col rounded-2xl sm:rounded-3xl border bg-[#FFFEDF] p-5 sm:p-6 md:p-8 ${
                      isFront ? 'pointer-events-auto' : 'pointer-events-none'
                    } ${
                      isUpcoming && isFront
                        ? 'border-[#FFD700]/80 ring-2 ring-[#FFD700]/60'
                        : 'border-[#0E7D23]/10'
                    }`}
                    style={{
                      boxShadow: isUpcoming && isFront
                        ? '0 30px 70px -20px rgba(255, 215, 0, 0.35), 0 20px 40px -10px rgba(14, 125, 35, 0.18)'
                        : '0 20px 40px -10px rgba(14, 125, 35, 0.15)',
                    }}
                  >
                    {isUpcoming && isFront ? (
                      <div className="mb-4 inline-flex w-fit items-center rounded-full bg-[#FFD700] px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.2em] text-[#0E7D23]">
                        Hlavní nadcházející akce
                      </div>
                    ) : null}

                    <div className="mb-4 sm:mb-6">
                      <span className={`mb-3 sm:mb-4 inline-block rounded-full px-3 sm:px-4 py-1 sm:py-1.5 text-xs font-bold ${event.badgeColor}`}>
                        {event.badge}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold leading-tight text-[#0E7D23]">
                        {event.title}
                      </h3>
                    </div>

                    <div className="mb-6 sm:mb-8 flex-grow space-y-3 sm:space-y-4 text-sm text-[#0E7D23]/80">
                      <p className="flex items-center gap-3">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                        {event.location}
                      </p>
                      <p className="flex items-center gap-3">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                        {event.date}
                      </p>
                      <p className="flex items-center gap-3">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                        {event.time}
                      </p>
                    </div>

                    {event.href ? (
                      <a
                        href={event.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex w-full items-center justify-center gap-2 rounded-full py-3 min-h-[44px] font-bold transition-colors touch-manipulation ${
                          isUpcoming && isFront
                            ? 'bg-[#FFD700] text-[#0E7D23] hover:bg-[#FFD700]/90'
                            : 'bg-[#0E7D23] text-[#FFFEDF] hover:bg-[#0E7D23]/90'
                        }`}
                      >
                        Detaily
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                      </a>
                    ) : (
                      <button
                        type="button"
                        disabled
                        className="flex w-full cursor-default items-center justify-center gap-2 rounded-full bg-[#0E7D23] py-3 font-bold text-[#FFFEDF] opacity-80"
                      >
                        Detaily
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                      </button>
                    )}
                  </motion.article>
                );
              })}
            </AnimatePresence>
          </div>

          <div className="flex flex-col items-center gap-4">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Předchozí akce"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-[#0E7D23]/15 bg-white/60 text-[#0E7D23] transition hover:scale-105 hover:border-[#0E7D23]/30"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
            </button>

            {events.map((event, index) => (
              <button
                key={event.id}
                type="button"
                onClick={() => setCurrentIndex(index)}
                aria-label={`Zobrazit akci ${event.title}`}
                className={`h-2.5 rounded-full transition-all ${
                  index === currentIndex ? 'w-10 bg-[#0E7D23]' : 'w-2.5 bg-[#0E7D23]/25 hover:bg-[#0E7D23]/40'
                }`}
              />
            ))}

            <button
              type="button"
              onClick={handleNext}
              aria-label="Další akce"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-[#0E7D23]/15 bg-white/60 text-[#0E7D23] transition hover:scale-105 hover:border-[#0E7D23]/30"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

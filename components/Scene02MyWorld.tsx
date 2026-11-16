'use client';

import React, {useEffect, useRef, useState} from 'react';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {motion, AnimatePresence} from 'motion/react';
import {MapPin, Compass} from 'lucide-react';
import {HERO_MEDIA, WORLD_CHAPTERS} from '@/lib/realityFlowData';
import EditorialImage from './EditorialImage';

gsap.registerPlugin(ScrollTrigger);

export default function Scene02MyWorld() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const portraitWrapRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const activeChapter = WORLD_CHAPTERS[activeIndex];

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      if (portraitWrapRef.current) {
        gsap.fromTo(
          portraitWrapRef.current,
          {clipPath: 'inset(10% 0% 10% 0%)', scale: 1.04},
          {
            clipPath: 'inset(0% 0% 0% 0%)',
            scale: 1,
            duration: 1.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: portraitWrapRef.current,
              start: 'top 80%',
              once: true,
            },
          },
        );
      }
    }, section);

    return () => ctx.revert();
  }, []);

  const handleCardTilt = (e: React.MouseEvent<HTMLDivElement>) => {
    if (window.innerWidth < 1024) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    gsap.to(e.currentTarget, {
      rotateY: x * 6,
      rotateX: -y * 6,
      transformPerspective: 900,
      duration: 0.4,
      ease: 'power2.out',
    });
  };

  const handleCardReset = (e: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(e.currentTarget, {
      rotateY: 0,
      rotateX: 0,
      duration: 0.6,
      ease: 'power3.out',
    });
  };

  return (
    <section
      id="cena-02"
      ref={sectionRef}
      className="relative w-full bg-[#F3EFE8] text-[#141416] overflow-hidden"
    >
      {/* Editorial Marquee Section Divider */}
      <div className="border-b border-[#141416]/12 py-3.5 overflow-hidden bg-[#ECE6DC]">
        <div className="flex whitespace-nowrap animate-marquee text-xs tracking-[0.22em] uppercase text-[#141416]/65">
          <span className="mx-6">
            luz tropical · arquitetura brasileira · costa atlântica · cotidiano curado · grão 35mm · presença estética
          </span>
          <span className="mx-6" aria-hidden="true">
            luz tropical · arquitetura brasileira · costa atlântica · cotidiano curado · grão 35mm · presença estética
          </span>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-5 md:px-10 py-20 md:py-28">
        {/* Scene Kicker */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-[#141416]/12">
          <div className="flex items-center gap-3 text-xs tracking-[0.16em] uppercase text-[#6D5A43]">
            <span className="font-mono tabular-nums">Cena 02</span>
            <span aria-hidden="true">/</span>
            <span>My World — Universo Visual</span>
          </div>
          <span className="font-mono text-xs tabular-nums text-[#141416]/60">
            Caderno Editorial · Brasil
          </span>
        </div>

        {/* Asymmetric Split Composition */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          {/* Left Column: Masked Editorial Portrait with Subtle 3D Tilt */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div
              ref={portraitWrapRef}
              onMouseMove={handleCardTilt}
              onMouseLeave={handleCardReset}
              className="relative w-full aspect-[3/4] overflow-hidden bg-[#DED7CA] will-change-transform"
            >
              <EditorialImage
                src={HERO_MEDIA.portrait}
                alt={HERO_MEDIA.portraitAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141416]/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-[#F3EFE8]">
                <span className="font-display italic text-lg">Lívia Martins</span>
                <span className="font-mono tabular-nums text-[11px] opacity-85">
                  São Paulo · Luz Natural
                </span>
              </div>
            </div>

            <p className="mt-6 text-xs leading-relaxed text-[#141416]/68 max-w-sm">
              Entre cobogós banhados por sol da tarde, viagens pela Costa Verde e arquitetura modernista brasileira, cada frame nasce de uma observação genuína de tempo e lugar.
            </p>
          </div>

          {/* Right Column: Manifesto + Interactive 3-Lens World Explorer */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <h2 className="font-display text-[clamp(2.25rem,4.4vw,3.9rem)] leading-[1.02] tracking-tight text-[#141416] [text-wrap:balance]">
                Um olhar editorial sobre{' '}
                <span className="italic font-normal text-[#7A5934]">
                  lugares que respiram
                </span>{' '}
                e rotinas com intenção.
              </h2>

              {/* Interactive Lens Selector Tabs */}
              <div
                role="tablist"
                aria-label="Lentes do Universo de Lívia Martins"
                className="mt-10 flex flex-wrap gap-2 border-b border-[#141416]/12 pb-4"
              >
                {WORLD_CHAPTERS.map((chapter, idx) => {
                  const selected = idx === activeIndex;
                  return (
                    <button
                      key={chapter.id}
                      role="tab"
                      type="button"
                      aria-selected={selected}
                      onClick={() => setActiveIndex(idx)}
                      className={`px-4 py-2.5 text-xs tracking-[0.1em] uppercase transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                        selected
                          ? 'bg-[#141416] text-[#F3EFE8]'
                          : 'bg-transparent text-[#141416]/68 hover:text-[#141416] border border-[#141416]/15'
                      }`}
                    >
                      <span className="font-mono tabular-nums mr-2 text-[#D4A359]">
                        {chapter.index}
                      </span>
                      {chapter.title.split('&')[0].trim()}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Active Chapter Interactive Editorial Stage */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeChapter.id}
                initial={{opacity: 0, y: 12}}
                animate={{opacity: 1, y: 0}}
                exit={{opacity: 0, y: -8}}
                transition={{duration: 0.35, ease: [0.16, 1, 0.3, 1]}}
                className="mt-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-center"
              >
                <div className="md:col-span-7 relative aspect-[4/3] overflow-hidden bg-[#DED7CA]">
                  <EditorialImage
                    src={activeChapter.image}
                    alt={activeChapter.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>

                <div className="md:col-span-5 flex flex-col justify-between space-y-5">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs text-[#6D5A43]">
                      <MapPin className="w-3.5 h-3.5 shrink-0" strokeWidth={1.6} />
                      <span>{activeChapter.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-mono tabular-nums text-[#141416]/55">
                      <Compass className="w-3.5 h-3.5 shrink-0" strokeWidth={1.6} />
                      <span>{activeChapter.coordinates}</span>
                    </div>
                  </div>

                  <h3 className="font-display text-2xl md:text-3xl leading-tight text-[#141416]">
                    {activeChapter.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-[#141416]/78">
                    {activeChapter.essay}
                  </p>

                  {/* Unboxed Sensory Notes with Typographic Separators (Zero-Pill Rule) */}
                  <div className="pt-4 border-t border-[#141416]/12 text-xs text-[#141416]/68 flex flex-wrap items-center gap-x-2.5 gap-y-1">
                    {activeChapter.sensoryNotes.map((note, idx) => (
                      <React.Fragment key={note}>
                        <span>{note}</span>
                        {idx < activeChapter.sensoryNotes.length - 1 && (
                          <span aria-hidden="true" className="text-[#141416]/30">
                            ·
                          </span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

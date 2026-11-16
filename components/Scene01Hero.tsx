'use client';

import React, {useEffect, useRef} from 'react';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {ArrowDown, Instagram, MapPin, Play} from 'lucide-react';
import {CREATOR_PROFILE, HERO_MEDIA} from '@/lib/realityFlowData';
import EditorialImage from './EditorialImage';

gsap.registerPlugin(ScrollTrigger);

interface Scene01HeroProps {
  onNavigate: (id: string) => void;
}

export default function Scene01Hero({onNavigate}: Scene01HeroProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const backdropRef = useRef<HTMLDivElement | null>(null);
  const lightWashRef = useRef<HTMLDivElement | null>(null);
  const headlineRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Staggered editorial entrance
      gsap.from('.hero-stagger', {
        y: 26,
        opacity: 0,
        duration: 0.9,
        stagger: 0.1,
        ease: 'power3.out',
        clearProps: 'transform,opacity',
      });

      // Scroll-linked layered depth parallax on backdrop photography
      if (backdropRef.current) {
        gsap.to(backdropRef.current, {
          yPercent: 14,
          scale: 1.08,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        });
      }

      if (headlineRef.current) {
        gsap.to(headlineRef.current, {
          yPercent: -8,
          opacity: 0.35,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        });
      }
    }, section);

    // Subtle cursor-driven atmospheric light & camera pan parallax on desktop
    const handlePointerMove = (e: PointerEvent) => {
      if (window.innerWidth < 1024) return;
      const nx = e.clientX / window.innerWidth - 0.5;
      const ny = e.clientY / window.innerHeight - 0.5;

      if (backdropRef.current) {
        gsap.to(backdropRef.current, {
          xPercent: -nx * 1.4,
          duration: 1.2,
          ease: 'power2.out',
          overwrite: 'auto',
        });
      }

      if (lightWashRef.current) {
        gsap.to(lightWashRef.current, {
          x: nx * 90,
          y: ny * 50,
          duration: 1.4,
          ease: 'power2.out',
          overwrite: 'auto',
        });
      }
    };

    window.addEventListener('pointermove', handlePointerMove, {passive: true});

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      ctx.revert();
    };
  }, []);

  return (
    <section
      id="cena-01"
      ref={sectionRef}
      className="relative md:min-h-[100svh] w-full overflow-hidden bg-[#0A0A0B] text-[#F3EFE8] md:flex md:flex-col md:justify-end pt-14 md:pt-24 pb-10 md:pb-12"
    >
      {/* Mobile-Only Hero Photography: Natural 16:9 above text with smooth bottom fade (no 100svh stretch/zoom) */}
      <div className="relative block md:hidden w-full aspect-[16/9] overflow-hidden bg-[#0A0A0B]">
        <EditorialImage
          src={HERO_MEDIA.backdrop}
          alt={HERO_MEDIA.backdropAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
          fallbackTitle="Lívia Martins — Reality Flow"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B] via-[#0A0A0B]/30 to-transparent"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-[#0A0A0B]/55 to-transparent"
        />
      </div>

      {/* Desktop Layer 0: Full-bleed Brazilian Modernist & Coastal Photography with Parallax */}
      <div
        ref={backdropRef}
        className="hidden md:block absolute -inset-x-4 inset-y-0 z-0 will-change-transform"
        aria-hidden="true"
      >
        <EditorialImage
          src={HERO_MEDIA.backdrop}
          alt={HERO_MEDIA.backdropAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-90"
          fallbackTitle="Lívia Martins — Reality Flow"
        />
        {/* Measured contrast scrim concentrated on the left & bottom editorial zones */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0B]/92 via-[#0A0A0B]/48 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B] via-[#0A0A0B]/28 to-[#0A0A0B]/35" />
      </div>

      {/* Desktop Layer 1: Subtle Sun-Dappled Cursor Atmosphere */}
      <div
        ref={lightWashRef}
        aria-hidden="true"
        className="hidden md:block pointer-events-none absolute right-[12%] top-[18%] z-10 h-[360px] w-[360px] rounded-full opacity-25 blur-3xl bg-[#D4A359]/30 will-change-transform"
      />

      {/* Desktop Layer 2: Right-Top Subtle Location Anchor */}
      <div className="hidden md:flex absolute right-10 top-24 z-20 items-center gap-2 text-[11px] font-mono tabular-nums tracking-[0.14em] uppercase text-[#F3EFE8]/80 bg-[#0A0A0B]/55 px-3.5 py-2 border border-[#F3EFE8]/15">
        <MapPin className="w-3.5 h-3.5 text-[#D4A359]" strokeWidth={1.6} />
        <span>Rio de Janeiro · 22°57′S 43°12′W</span>
      </div>

      {/* Layer 3: Foreground Kinetic Editorial Composition */}
      <div
        ref={headlineRef}
        className="relative z-20 -mt-5 md:mt-0 max-w-[1440px] w-full mx-auto px-5 md:px-10 will-change-transform"
      >
        <div className="max-w-2xl lg:max-w-3xl">
          {/* Unboxed Editorial Kicker (Zero-Pill Rule) */}
          <div className="hero-stagger flex flex-wrap items-center gap-x-3 gap-y-1 text-xs tracking-[0.16em] uppercase text-[#D4A359] mb-5">
            <span>Cena 01</span>
            <span aria-hidden="true">·</span>
            <span>{CREATOR_PROFILE.tagline}</span>
            <span aria-hidden="true">·</span>
            <span className="text-[#F3EFE8]/72">Projeto 01 Prumo Creators</span>
          </div>

          {/* Monumental Integrated Creator Lockup & Headline */}
          <h1 className="hero-stagger font-display text-[clamp(2.85rem,7.2vw,6.25rem)] leading-[0.94] tracking-tight text-[#F3EFE8] [text-wrap:balance]">
            Lívia Martins
            <span className="block italic font-normal text-[#E5D7C3] mt-1 md:mt-2 text-[clamp(2.1rem,5.2vw,4.6rem)]">
              A arte de habitar o instante.
            </span>
          </h1>

          <p className="hero-stagger mt-6 max-w-xl text-sm md:text-base leading-relaxed text-[#F3EFE8]/86">
            {CREATOR_PROFILE.statement}
          </p>

          {/* Social Proof & Actions Strip */}
          <div className="hero-stagger mt-8 flex flex-wrap items-center gap-4 md:gap-6">
            <button
              type="button"
              onClick={() => onNavigate('cena-02')}
              className="inline-flex items-center gap-3 px-6 py-3.5 text-xs font-medium tracking-[0.14em] uppercase bg-[#D4A359] text-[#0A0A0B] hover:bg-[#F3EFE8] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              <span>Explorar Universo</span>
              <ArrowDown className="w-4 h-4" strokeWidth={1.75} />
            </button>

            <div className="flex flex-wrap items-center gap-5 text-xs text-[#F3EFE8]/85">
              <button
                type="button"
                onClick={() => onNavigate('cena-03')}
                className="inline-flex items-center gap-2 py-2 hover:text-[#D4A359] transition-colors cursor-pointer"
              >
                <Instagram className="w-4 h-4 text-[#D4A359]" strokeWidth={1.6} />
                <span className="font-mono tabular-nums">
                  {CREATOR_PROFILE.instagramHandle} · {CREATOR_PROFILE.instagramFollowers} seg.
                </span>
              </button>

              <span className="hidden sm:inline text-[#F3EFE8]/25" aria-hidden="true">
                /
              </span>

              <button
                type="button"
                onClick={() => onNavigate('cena-03')}
                className="inline-flex items-center gap-2 py-2 hover:text-[#D4A359] transition-colors cursor-pointer"
              >
                <Play className="w-3.5 h-3.5 text-[#D4A359]" strokeWidth={1.75} />
                <span className="font-mono tabular-nums">
                  {CREATOR_PROFILE.tiktokHandle} · {CREATOR_PROFILE.tiktokFollowers} seg.
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Editorial Continuity Bar */}
        <div className="hero-stagger mt-10 md:mt-14 pt-5 border-t border-[#F3EFE8]/14 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-[#F3EFE8]/65">
          <span>Rio de Janeiro · São Paulo · Bahia — Dados e métricas demonstrativos</span>
          <button
            type="button"
            onClick={() => onNavigate('cena-02')}
            className="inline-flex items-center gap-2 text-[#F3EFE8]/90 hover:text-[#D4A359] transition-colors self-start sm:self-auto cursor-pointer"
          >
            <span className="tracking-[0.14em] uppercase">Role para continuar</span>
            <ArrowDown className="w-3.5 h-3.5" strokeWidth={1.6} />
          </button>
        </div>
      </div>
    </section>
  );
}

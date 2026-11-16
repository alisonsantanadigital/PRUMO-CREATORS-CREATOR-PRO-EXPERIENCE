'use client';

import React, {useEffect, useRef, useState} from 'react';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {ArrowUpRight, X} from 'lucide-react';
import {CAMPAIGN_EXPERIENCES, type CampaignExperience} from '@/lib/realityFlowData';
import EditorialImage from './EditorialImage';

gsap.registerPlugin(ScrollTrigger);

export default function Scene04Experiences() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [selectedCampaign, setSelectedCampaign] = useState<CampaignExperience | null>(null);

  const [campTravel, campLifestyle, campFashion, campSanctuary] = CAMPAIGN_EXPERIENCES;

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.campaign-reveal').forEach((el) => {
        gsap.from(el, {
          y: 36,
          opacity: 0,
          duration: 0.9,
          ease: 'power3.out',
          clearProps: 'transform,opacity',
          scrollTrigger: {
            trigger: el,
            start: 'top 84%',
            once: true,
          },
        });
      });
    }, section);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (!selectedCampaign) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedCampaign(null);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [selectedCampaign]);

  return (
    <section
      id="cena-04"
      ref={sectionRef}
      className="relative w-full bg-[#121214] text-[#F3EFE8] py-20 md:py-28 border-t border-[#F3EFE8]/10"
    >
      <div className="max-w-[1440px] mx-auto px-5 md:px-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-[#F3EFE8]/12">
          <div>
            <div className="flex items-center gap-3 text-xs tracking-[0.16em] uppercase text-[#D4A359] mb-4">
              <span className="font-mono tabular-nums">Cena 04</span>
              <span aria-hidden="true">/</span>
              <span>Selected Experiences</span>
            </div>
            <h2 className="font-display text-[clamp(2.25rem,4.5vw,4.1rem)] leading-[1.02] tracking-tight text-[#F3EFE8] [text-wrap:balance]">
              Quatro narrativas{' '}
              <span className="italic font-normal text-[#C8B69E]">conceituais</span>
            </h2>
          </div>

          <p className="max-w-md text-xs md:text-sm leading-relaxed text-[#F3EFE8]/68">
            Campanhas fictícias concebidas para demonstrar direção criativa, ritmo visual e versatilidade editorial em diferentes territórios de marca.
          </p>
        </div>

        {/* CAMPAIGN 01 — Panoramic Split Composition */}
        <article className="campaign-reveal mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border-b border-[#F3EFE8]/12 pb-16">
          <div className="lg:col-span-8 flex justify-center lg:justify-start">
            <button
              type="button"
              onClick={() => setSelectedCampaign(campTravel)}
              className="group relative w-full max-w-[290px] md:max-w-[700px] aspect-[16/9] overflow-hidden bg-[#1A1A1E] text-left cursor-pointer"
            >
              <EditorialImage
                src={campTravel.image}
                alt={campTravel.imageAlt}
                fill
                sizes="(max-width: 768px) 290px, 700px"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B]/70 via-transparent to-transparent" />
              <span className="absolute bottom-4 left-4 font-mono text-[11px] md:text-xs tabular-nums text-[#F3EFE8]/90">
                {campTravel.index} · {campTravel.aspectLabel}
              </span>
            </button>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-between py-2">
            <div>
              <div className="flex items-center gap-2 text-xs text-[#D4A359] tracking-[0.12em] uppercase">
                <span>{campTravel.category}</span>
                <span aria-hidden="true">·</span>
                <span className="text-[#F3EFE8]/55">{campTravel.season}</span>
              </div>
              <h3 className="mt-4 font-display text-3xl md:text-4xl leading-tight text-[#F3EFE8]">
                {campTravel.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-[#F3EFE8]/75">
                {campTravel.subtitle}
              </p>
              <p className="mt-4 text-xs leading-relaxed text-[#F3EFE8]/58">
                {campTravel.visualDirection}
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-[#F3EFE8]/12 flex items-center justify-between">
              <span className="text-xs text-[#F3EFE8]/60">{campTravel.location}</span>
              <button
                type="button"
                onClick={() => setSelectedCampaign(campTravel)}
                className="inline-flex items-center gap-2 text-xs tracking-[0.12em] uppercase text-[#D4A359] hover:text-[#F3EFE8] transition-colors cursor-pointer"
              >
                <span>Abrir Dossiê</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </article>

        {/* CAMPAIGNS 02 & 03 — Asymmetric Editorial Diptych */}
        <div className="campaign-reveal mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 border-b border-[#F3EFE8]/12 pb-16">
          {/* 02: Lifestyle & Daily Moments */}
          <article className="lg:col-span-7 flex flex-col justify-between">
            <div className="flex justify-center lg:justify-start">
              <button
                type="button"
                onClick={() => setSelectedCampaign(campLifestyle)}
                className="group relative w-full max-w-[290px] md:max-w-[580px] aspect-[16/9] overflow-hidden bg-[#1A1A1E] text-left cursor-pointer"
              >
                <EditorialImage
                  src={campLifestyle.image}
                  alt={campLifestyle.imageAlt}
                  fill
                  sizes="(max-width: 768px) 290px, 580px"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B]/65 via-transparent to-transparent" />
                <span className="absolute bottom-4 left-4 font-mono text-[11px] md:text-xs tabular-nums text-[#F3EFE8]/90">
                  {campLifestyle.index} · {campLifestyle.aspectLabel}
                </span>
              </button>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div className="max-w-lg">
                <div className="flex items-center gap-2 text-xs text-[#D4A359] tracking-[0.12em] uppercase">
                  <span>{campLifestyle.category}</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-[#F3EFE8]/55">{campLifestyle.location}</span>
                </div>
                <h3 className="mt-2 font-display text-3xl text-[#F3EFE8]">
                  {campLifestyle.title}
                </h3>
                <p className="mt-2 text-sm text-[#F3EFE8]/72">{campLifestyle.subtitle}</p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedCampaign(campLifestyle)}
                className="inline-flex items-center gap-2 text-xs tracking-[0.12em] uppercase text-[#D4A359] hover:text-[#F3EFE8] transition-colors shrink-0 cursor-pointer"
              >
                <span>Abrir Dossiê</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </article>

          {/* 03: Fashion & Personal Style */}
          <article className="lg:col-span-5 flex flex-col justify-between lg:pt-8">
            <div className="flex justify-center lg:justify-start">
              <button
                type="button"
                onClick={() => setSelectedCampaign(campFashion)}
                className="group relative w-full max-w-[250px] md:max-w-[380px] aspect-[3/4] overflow-hidden bg-[#1A1A1E] text-left cursor-pointer"
              >
                <EditorialImage
                  src={campFashion.image}
                  alt={campFashion.imageAlt}
                  fill
                  sizes="(max-width: 768px) 250px, 380px"
                  className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B]/70 via-transparent to-transparent" />
                <span className="absolute bottom-4 left-4 font-mono text-[11px] md:text-xs tabular-nums text-[#F3EFE8]/90">
                  {campFashion.index} · {campFashion.aspectLabel}
                </span>
              </button>
            </div>

            <div className="mt-6 flex items-end justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 text-xs text-[#D4A359] tracking-[0.12em] uppercase">
                  <span>{campFashion.category}</span>
                </div>
                <h3 className="mt-2 font-display text-3xl text-[#F3EFE8]">
                  {campFashion.title}
                </h3>
                <p className="mt-2 text-sm text-[#F3EFE8]/72">{campFashion.subtitle}</p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedCampaign(campFashion)}
                className="inline-flex items-center gap-1.5 text-xs tracking-[0.12em] uppercase text-[#D4A359] hover:text-[#F3EFE8] transition-colors shrink-0 cursor-pointer"
              >
                <span>Ver</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </article>
        </div>

        {/* CAMPAIGN 04 — Twilight Architectural Sanctuary (Balanced Split with True 16:9 Ratio) */}
        <article className="campaign-reveal mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 flex justify-center lg:justify-start">
            <button
              type="button"
              onClick={() => setSelectedCampaign(campSanctuary)}
              className="group relative w-full max-w-[290px] md:max-w-[740px] aspect-[16/9] overflow-hidden bg-[#1A1A1E] text-left cursor-pointer block"
            >
              <EditorialImage
                src={campSanctuary.image}
                alt={campSanctuary.imageAlt}
                fill
                sizes="(max-width: 768px) 290px, 740px"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B]/70 via-transparent to-transparent" />
              <span className="absolute bottom-4 left-4 font-mono text-[11px] md:text-xs tabular-nums text-[#F3EFE8]/90">
                {campSanctuary.index} · {campSanctuary.aspectLabel}
              </span>
            </button>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center gap-2 text-xs text-[#D4A359] tracking-[0.12em] uppercase">
                <span className="font-mono tabular-nums">{campSanctuary.index}</span>
                <span aria-hidden="true">·</span>
                <span>{campSanctuary.category}</span>
              </div>
              <h3 className="mt-3 font-display text-3xl md:text-4xl text-[#F3EFE8]">
                {campSanctuary.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#F3EFE8]/75">
                {campSanctuary.subtitle}
              </p>
              <p className="mt-3 text-xs leading-relaxed text-[#F3EFE8]/58">
                {campSanctuary.location} · {campSanctuary.season}
              </p>
            </div>

            <div>
              <button
                type="button"
                onClick={() => setSelectedCampaign(campSanctuary)}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#F3EFE8] text-[#0A0A0B] hover:bg-[#D4A359] transition-colors text-xs tracking-[0.12em] uppercase font-medium cursor-pointer"
              >
                <span>Explorar Campanha</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </article>
      </div>

      {/* Fullscreen Editorial Case Dossier Modal */}
      {selectedCampaign && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Dossiê da campanha ${selectedCampaign.title}`}
          className="fixed inset-0 z-50 bg-[#0A0A0B]/95 flex items-center justify-center p-4 md:p-8 overflow-y-auto"
          onClick={() => setSelectedCampaign(null)}
        >
          <div
            className="relative w-full max-w-5xl bg-[#141416] border border-[#F3EFE8]/15 overflow-hidden my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedCampaign(null)}
              aria-label="Fechar dossiê"
              className="absolute top-4 right-4 z-10 w-11 h-11 bg-[#0A0A0B]/85 text-[#F3EFE8] hover:text-[#D4A359] flex items-center justify-center border border-[#F3EFE8]/15 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
              <div className="lg:col-span-7 p-4 md:p-6 bg-[#0A0A0B] flex items-center justify-center">
                <div
                  className={`relative w-full overflow-hidden ${
                    selectedCampaign.id === 'fashion-style'
                      ? 'max-w-[260px] md:max-w-[380px] aspect-[3/4]'
                      : 'max-w-[290px] md:max-w-[600px] aspect-[16/9]'
                  }`}
                >
                  <EditorialImage
                    src={selectedCampaign.image}
                    alt={selectedCampaign.imageAlt}
                    fill
                    sizes="(max-width: 768px) 290px, 600px"
                    className="object-cover object-top"
                  />
                </div>
              </div>

              <div className="lg:col-span-5 p-6 md:p-8 flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-xs text-[#D4A359] tracking-[0.12em] uppercase">
                    <span className="font-mono tabular-nums">{selectedCampaign.index}</span>
                    <span aria-hidden="true">/</span>
                    <span>{selectedCampaign.category}</span>
                  </div>
                  <h3 className="mt-3 font-display text-3xl md:text-4xl text-[#F3EFE8]">
                    {selectedCampaign.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#F3EFE8]/80">
                    {selectedCampaign.conceptBrief}
                  </p>

                  <div className="mt-6 pt-5 border-t border-[#F3EFE8]/10">
                    <h4 className="text-xs tracking-[0.14em] uppercase text-[#C8B69E] mb-3">
                      Direção Visual
                    </h4>
                    <p className="text-xs leading-relaxed text-[#F3EFE8]/70">
                      {selectedCampaign.visualDirection}
                    </p>
                  </div>

                  <div className="mt-6 pt-5 border-t border-[#F3EFE8]/10">
                    <h4 className="text-xs tracking-[0.14em] uppercase text-[#C8B69E] mb-3">
                      Entregáveis Conceituais
                    </h4>
                    <ul className="space-y-1.5 text-xs text-[#F3EFE8]/80">
                      {selectedCampaign.deliverables.map((item) => (
                        <li key={item}>· {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-5 border-t border-[#F3EFE8]/12 grid grid-cols-3 gap-3">
                  {selectedCampaign.demoMetrics.map((m) => (
                    <div key={m.label}>
                      <div className="font-mono text-lg tabular-nums text-[#D4A359]">
                        {m.value}
                      </div>
                      <div className="text-[11px] leading-snug text-[#F3EFE8]/55 mt-0.5">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

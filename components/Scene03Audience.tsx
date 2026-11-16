'use client';

import React, {useEffect, useRef, useState} from 'react';
import {motion} from 'motion/react';
import {AUDIENCE_PLATFORMS, type AudiencePlatformData} from '@/lib/realityFlowData';

function AnimatedNumber({
  target,
  format = 'integer',
}: {
  target: number;
  format?: 'integer' | 'compact';
}) {
  const [displayValue, setDisplayValue] = useState(target);
  const prevRef = useRef(target);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const startVal = prevRef.current;
    const endVal = target;
    const duration = prefersReducedMotion ? 0 : 650;
    const startTime = performance.now();
    let rafId = 0;

    const step = (now: number) => {
      const progress = duration === 0 ? 1 : Math.min(1, (now - startTime) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(startVal + (endVal - startVal) * eased);
      setDisplayValue(current);
      if (progress < 1) {
        rafId = requestAnimationFrame(step);
      } else {
        prevRef.current = endVal;
      }
    };

    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [target]);

  if (format === 'compact' && displayValue >= 1000) {
    return <>{Math.round(displayValue / 1000).toLocaleString('pt-BR')} mil</>;
  }
  return <>{displayValue.toLocaleString('pt-BR')}</>;
}

export default function Scene03Audience() {
  const [selectedId, setSelectedId] = useState<AudiencePlatformData['id']>('consolidated');
  const active =
    AUDIENCE_PLATFORMS.find((p) => p.id === selectedId) || AUDIENCE_PLATFORMS[0];

  const womenStroke = (active.genderSplit.women / 100) * 282.7;

  return (
    <section
      id="cena-03"
      className="relative w-full bg-[#0A0A0B] text-[#F3EFE8] py-20 md:py-28 border-t border-[#F3EFE8]/10"
    >
      <div className="max-w-[1440px] mx-auto px-5 md:px-10">
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-[#F3EFE8]/12">
          <div>
            <div className="flex items-center gap-3 text-xs tracking-[0.16em] uppercase text-[#D4A359] mb-4">
              <span className="font-mono tabular-nums">Cena 03</span>
              <span aria-hidden="true">/</span>
              <span>Audience Intelligence</span>
            </div>
            <h2 className="font-display text-[clamp(2.2rem,4.5vw,4rem)] leading-[1.02] tracking-tight text-[#F3EFE8] [text-wrap:balance]">
              Alcance curado &amp;{' '}
              <span className="italic font-normal text-[#C8B69E]">
                comunidade qualificada
              </span>
            </h2>
          </div>

          <div className="flex flex-col sm:items-end gap-3">
            {/* Interactive Platform Filter Tabs */}
            <div
              role="tablist"
              aria-label="Selecionar plataforma de audiência"
              className="inline-flex flex-wrap items-center gap-1 p-1 bg-[#141416] border border-[#F3EFE8]/12"
            >
              {AUDIENCE_PLATFORMS.map((platform) => {
                const isActive = platform.id === active.id;
                return (
                  <button
                    key={platform.id}
                    role="tab"
                    type="button"
                    aria-selected={isActive}
                    onClick={() => setSelectedId(platform.id)}
                    className={`px-3.5 py-2 text-xs tracking-[0.08em] uppercase transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                      isActive
                        ? 'bg-[#D4A359] text-[#0A0A0B] font-medium'
                        : 'text-[#F3EFE8]/70 hover:text-[#F3EFE8]'
                    }`}
                  >
                    {platform.label}
                  </button>
                );
              })}
            </div>
            <p className="text-xs text-[#F3EFE8]/55">
              Dados ilustrativos demonstrativos · {active.handle}
            </p>
          </div>
        </div>

        {/* Primary Numeric Metrics Strip (Tabular Numerals) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-b border-[#F3EFE8]/12">
          <div className="py-8 sm:pr-6 lg:border-r border-b sm:border-b-0 border-[#F3EFE8]/12">
            <p className="text-xs tracking-[0.12em] uppercase text-[#F3EFE8]/55">
              Base de Seguidores
            </p>
            <p className="mt-3 font-mono text-4xl md:text-5xl font-medium tabular-nums text-[#F3EFE8]">
              <AnimatedNumber target={active.followers} />
            </p>
            <p className="mt-2 text-xs text-[#C8B69E]">{active.followersSuffix}</p>
          </div>

          <div className="py-8 sm:px-6 lg:border-r border-b sm:border-b-0 border-[#F3EFE8]/12">
            <p className="text-xs tracking-[0.12em] uppercase text-[#F3EFE8]/55">
              Alcance Mensal Médio
            </p>
            <p className="mt-3 font-mono text-4xl md:text-5xl font-medium tabular-nums text-[#D4A359]">
              <AnimatedNumber target={active.monthlyReach} format="compact" />
            </p>
            <p className="mt-2 text-xs text-[#F3EFE8]/65">{active.reachSuffix}</p>
          </div>

          <div className="py-8 sm:pr-6 lg:px-6 lg:border-r border-b sm:border-b-0 border-[#F3EFE8]/12">
            <p className="text-xs tracking-[0.12em] uppercase text-[#F3EFE8]/55">
              Taxa de Engajamento
            </p>
            <p className="mt-3 font-mono text-4xl md:text-5xl font-medium tabular-nums text-[#F3EFE8]">
              {active.engagementRate}
            </p>
            <p className="mt-2 text-xs text-[#F3EFE8]/65">Média por publicação (demo)</p>
          </div>

          <div className="py-8 sm:pl-6">
            <p className="text-xs tracking-[0.12em] uppercase text-[#F3EFE8]/55">
              Salvamentos + Envios
            </p>
            <p className="mt-3 font-mono text-4xl md:text-5xl font-medium tabular-nums text-[#F3EFE8]">
              <AnimatedNumber target={active.avgSavesShares} />
            </p>
            <p className="mt-2 text-xs text-[#F3EFE8]/65">Média por campanha (demo)</p>
          </div>
        </div>

        {/* Visual Intelligence Breakdown: Demographics, Geography & Affinities */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Age & Gender Visualization */}
          <div className="lg:col-span-5 bg-[#121215] border border-[#F3EFE8]/10 p-6 md:p-8 flex flex-col justify-between">
            <div className="flex items-center justify-between pb-4 border-b border-[#F3EFE8]/10">
              <h3 className="font-display text-2xl text-[#F3EFE8]">Perfil Demográfico</h3>
              <span className="font-mono text-xs tabular-nums text-[#D4A359]">Demo</span>
            </div>

            <div className="my-8 flex flex-col sm:flex-row items-center gap-8">
              {/* Custom SVG Ring Chart for Gender Split */}
              <div className="relative w-32 h-32 shrink-0 flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90" aria-hidden="true">
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="rgba(243,239,232,0.12)"
                    strokeWidth="6"
                  />
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="#D4A359"
                    strokeWidth="6"
                    strokeDasharray="282.7"
                    initial={false}
                    animate={{strokeDashoffset: 282.7 - womenStroke}}
                    transition={{duration: 0.65, ease: [0.16, 1, 0.3, 1]}}
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                  <span className="font-mono text-xl font-medium tabular-nums text-[#F3EFE8]">
                    {active.genderSplit.women}%
                  </span>
                  <span className="text-[11px] uppercase tracking-wider text-[#F3EFE8]/60">
                    Feminino
                  </span>
                </div>
              </div>

              <div className="flex-1 w-full space-y-3.5">
                {active.ageDistribution.map((item) => (
                  <div key={item.label} className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs font-mono tabular-nums">
                      <span className="text-[#F3EFE8]/80">{item.label} anos</span>
                      <span className="text-[#D4A359]">{item.percent}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-[#F3EFE8]/10 overflow-hidden">
                      <motion.div
                        className="h-full bg-[#D4A359]"
                        initial={false}
                        animate={{width: `${item.percent}%`}}
                        transition={{duration: 0.6, ease: [0.16, 1, 0.3, 1]}}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-[#F3EFE8]/10 flex items-center justify-between text-xs text-[#F3EFE8]/60 font-mono tabular-nums">
              <span>{active.genderSplit.women}% Feminino</span>
              <span>{active.genderSplit.men}% Masculino</span>
            </div>
          </div>

          {/* Geography & Editorial Affinities */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#121215] border border-[#F3EFE8]/10 p-6 md:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-[#F3EFE8]/10">
                  <h3 className="font-display text-2xl text-[#F3EFE8]">Principais Praças</h3>
                  <span className="font-mono text-xs tabular-nums text-[#F3EFE8]/50">Geo</span>
                </div>
                <div className="mt-6 space-y-5">
                  {active.topLocations.map((loc, idx) => (
                    <div key={loc.city} className="space-y-2">
                      <div className="flex items-baseline justify-between">
                        <span className="text-sm text-[#F3EFE8]/88">
                          <span className="font-mono text-xs text-[#D4A359] mr-2 tabular-nums">
                            0{idx + 1}
                          </span>
                          {loc.city}
                        </span>
                        <span className="font-mono text-sm tabular-nums text-[#C8B69E]">
                          {loc.share}%
                        </span>
                      </div>
                      <div className="h-[2px] w-full bg-[#F3EFE8]/10 overflow-hidden">
                        <motion.div
                          className="h-full bg-[#F3EFE8]/80"
                          initial={false}
                          animate={{width: `${loc.share * 2}%`}}
                          transition={{duration: 0.55, ease: [0.16, 1, 0.3, 1]}}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <p className="mt-8 text-xs text-[#F3EFE8]/50">
                Público concentrado em grandes centros urbanos e viajantes frequentes.
              </p>
            </div>

            <div className="bg-[#121215] border border-[#F3EFE8]/10 p-6 md:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-[#F3EFE8]/10">
                  <h3 className="font-display text-2xl text-[#F3EFE8]">Afinidades de Interesse</h3>
                  <span className="font-mono text-xs tabular-nums text-[#F3EFE8]/50">Index</span>
                </div>
                <div className="mt-6 space-y-6">
                  {active.affinities.map((aff) => (
                    <div key={aff.topic} className="space-y-2">
                      <div className="flex items-baseline justify-between gap-3">
                        <span className="text-sm text-[#F3EFE8]/88">{aff.topic}</span>
                        <span className="font-mono text-sm tabular-nums text-[#D4A359] shrink-0">
                          {aff.score}%
                        </span>
                      </div>
                      <div className="h-1.5 w-full bg-[#F3EFE8]/10 overflow-hidden">
                        <motion.div
                          className="h-full bg-[#C8B69E]"
                          initial={false}
                          animate={{width: `${aff.score}%`}}
                          transition={{duration: 0.6, ease: [0.16, 1, 0.3, 1]}}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <p className="mt-8 text-xs text-[#F3EFE8]/50">
                Indicadores demonstrativos de afinidade editorial por categoria.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

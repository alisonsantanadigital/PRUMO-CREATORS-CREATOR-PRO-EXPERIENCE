'use client';

import React from 'react';
import {Check, ArrowRight, Plus} from 'lucide-react';
import {COLLABORATION_FORMATS} from '@/lib/realityFlowData';

interface Scene05CollaborationsProps {
  selectedFormats: string[];
  onToggleFormat: (name: string) => void;
  onProceedToConnect: () => void;
}

export default function Scene05Collaborations({
  selectedFormats,
  onToggleFormat,
  onProceedToConnect,
}: Scene05CollaborationsProps) {
  return (
    <section
      id="cena-05"
      className="relative w-full bg-[#F3EFE8] text-[#141416] py-20 md:py-28 border-t border-[#141416]/12"
    >
      <div className="max-w-[1440px] mx-auto px-5 md:px-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-10 border-b border-[#141416]/15">
          <div>
            <div className="flex items-center gap-3 text-xs tracking-[0.16em] uppercase text-[#7A5934] mb-4">
              <span className="font-mono tabular-nums">Cena 05</span>
              <span aria-hidden="true">/</span>
              <span>Brand Collaborations</span>
            </div>
            <h2 className="font-display text-[clamp(2.2rem,4.5vw,4rem)] leading-[1.02] tracking-tight text-[#141416] [text-wrap:balance]">
              Formatos de{' '}
              <span className="italic font-normal text-[#7A5934]">parceria comercial</span>
            </h2>
          </div>

          <p className="max-w-md text-xs md:text-sm leading-relaxed text-[#141416]/72">
            Selecione um ou mais formatos para montar um escopo inicial e enviar diretamente na próxima cena.
          </p>
        </div>

        {/* 6 Editorial Commercial Formats Rows / Grid */}
        <div className="mt-4 divide-y divide-[#141416]/14 border-b border-[#141416]/14">
          {COLLABORATION_FORMATS.map((item) => {
            const isSelected = selectedFormats.includes(item.name);
            return (
              <div
                key={item.id}
                className={`py-7 md:py-8 px-3 md:px-5 transition-colors grid grid-cols-1 lg:grid-cols-12 gap-6 items-start lg:items-center ${
                  isSelected ? 'bg-[#E7DFD2]' : 'hover:bg-[#ECE6DC]'
                }`}
              >
                <div className="lg:col-span-4 flex items-baseline gap-4">
                  <span className="font-mono text-xs tabular-nums text-[#7A5934]">
                    {item.index}
                  </span>
                  <div>
                    <h3 className="font-display text-2xl md:text-3xl text-[#141416]">
                      {item.name}
                    </h3>
                    <p className="mt-1 text-xs tracking-[0.1em] uppercase text-[#141416]/55">
                      {item.channel} · {item.timeline}
                    </p>
                  </div>
                </div>

                <div className="lg:col-span-5 space-y-2">
                  <p className="text-sm leading-relaxed text-[#141416]/80">{item.summary}</p>
                  <p className="text-xs text-[#141416]/60">
                    <span className="font-medium text-[#141416]">Entregável base:</span>{' '}
                    {item.deliverables}
                  </p>
                </div>

                <div className="lg:col-span-3 flex lg:justify-end">
                  <button
                    type="button"
                    onClick={() => onToggleFormat(item.name)}
                    aria-pressed={isSelected}
                    className={`inline-flex items-center gap-2.5 px-5 py-2.5 text-xs tracking-[0.12em] uppercase transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                      isSelected
                        ? 'bg-[#141416] text-[#F3EFE8]'
                        : 'border border-[#141416]/30 text-[#141416] hover:bg-[#141416] hover:text-[#F3EFE8]'
                    }`}
                  >
                    {isSelected ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#D4A359]" strokeWidth={2} />
                        <span>Selecionado</span>
                      </>
                    ) : (
                      <>
                        <Plus className="w-3.5 h-3.5" strokeWidth={1.75} />
                        <span>Incluir no Escopo</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Commercial Action Strip */}
        <div className="mt-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#141416] text-[#F3EFE8] p-6 md:p-8">
          <div>
            <p className="text-xs tracking-[0.14em] uppercase text-[#D4A359]">
              Escopo da Proposta
            </p>
            <p className="mt-1.5 text-sm md:text-base text-[#F3EFE8]/85">
              {selectedFormats.length === 0
                ? 'Nenhum formato selecionado — você pode avançar e definir o formato sob medida.'
                : `${selectedFormats.length} ${
                    selectedFormats.length === 1 ? 'formato selecionado' : 'formatos selecionados'
                  }: ${selectedFormats.join(' · ')}`}
            </p>
          </div>

          <button
            type="button"
            onClick={onProceedToConnect}
            className="inline-flex items-center justify-center gap-3 px-6 py-3.5 bg-[#D4A359] text-[#0A0A0B] hover:bg-[#F3EFE8] transition-colors text-xs font-medium tracking-[0.12em] uppercase whitespace-nowrap shrink-0 cursor-pointer"
          >
            <span>Solicitar Proposta</span>
            <ArrowRight className="w-4 h-4" strokeWidth={1.75} />
          </button>
        </div>
      </div>
    </section>
  );
}

'use client';

import React, {useState} from 'react';
import {Check, Copy, Instagram, Mail, MessageCircle, Play, Send} from 'lucide-react';
import {CREATOR_PROFILE, HERO_MEDIA} from '@/lib/realityFlowData';
import EditorialImage from './EditorialImage';

interface Scene06ConnectProps {
  selectedFormats: string[];
  onClearFormats: () => void;
}

export default function Scene06Connect({
  selectedFormats,
  onClearFormats,
}: Scene06ConnectProps) {
  const [copiedField, setCopiedField] = useState<'email' | 'whatsapp' | null>(null);
  const [brandName, setBrandName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [objective, setObjective] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

  const handleCopy = async (type: 'email' | 'whatsapp', value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedField(type);
      setTimeout(() => setCopiedField(null), 2200);
    } catch {
      setCopiedField(type);
      setTimeout(() => setCopiedField(null), 2200);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!brandName.trim() || !contactEmail.trim()) {
      setFormError('Informe o nome da marca ou agência e um e-mail para retorno.');
      return;
    }
    setFormError('');
    setSubmitted(true);
  };

  return (
    <section
      id="cena-06"
      className="relative w-full bg-[#0A0A0B] text-[#F3EFE8] pt-20 md:pt-28 pb-10 border-t border-[#F3EFE8]/10 overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-5 md:px-10">
        {/* Top Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-[#F3EFE8]/12">
          {/* Left Column: Monumental Closing Call & Direct Channels */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-10">
            <div>
              <div className="flex items-center gap-3 text-xs tracking-[0.16em] uppercase text-[#D4A359] mb-4">
                <span className="font-mono tabular-nums">Cena 06</span>
                <span aria-hidden="true">/</span>
                <span>Let&apos;s Connect</span>
              </div>

              <h2 className="font-display text-[clamp(2.5rem,5.2vw,4.75rem)] leading-[0.96] tracking-tight text-[#F3EFE8] [text-wrap:balance]">
                Vamos criar a próxima{' '}
                <span className="italic font-normal text-[#C8B69E]">
                  história da sua marca.
                </span>
              </h2>

              <p className="mt-6 max-w-lg text-sm md:text-base leading-relaxed text-[#F3EFE8]/72">
                Disponível para campanhas nacionais e internacionais de lifestyle, hospitalidade, moda autoral, beleza limpa e experiências culturais.
              </p>
            </div>

            {/* Direct Demonstrative Contact Channels */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 py-4 border-y border-[#F3EFE8]/12">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#D4A359] shrink-0" strokeWidth={1.6} />
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.12em] text-[#F3EFE8]/50">
                      E-mail Comercial (Demonstrativo)
                    </p>
                    <p className="font-mono text-sm text-[#F3EFE8]">{CREATOR_PROFILE.demoEmail}</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy('email', CREATOR_PROFILE.demoEmail)}
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs tracking-[0.1em] uppercase border border-[#F3EFE8]/20 hover:border-[#D4A359] hover:text-[#D4A359] transition-colors self-start sm:self-auto cursor-pointer"
                >
                  {copiedField === 'email' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#D4A359]" />
                      <span>Copiado</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copiar E-mail</span>
                    </>
                  )}
                </button>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#F3EFE8]/12">
                <div className="flex items-center gap-3">
                  <MessageCircle className="w-4 h-4 text-[#D4A359] shrink-0" strokeWidth={1.6} />
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.12em] text-[#F3EFE8]/50">
                      WhatsApp Comercial (Demonstrativo)
                    </p>
                    <p className="font-mono text-sm tabular-nums text-[#F3EFE8]">
                      {CREATOR_PROFILE.demoWhatsapp}
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy('whatsapp', CREATOR_PROFILE.demoWhatsapp)}
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs tracking-[0.1em] uppercase border border-[#F3EFE8]/20 hover:border-[#D4A359] hover:text-[#D4A359] transition-colors self-start sm:self-auto cursor-pointer"
                >
                  {copiedField === 'whatsapp' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#D4A359]" />
                      <span>Copiado</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copiar Número</span>
                    </>
                  )}
                </button>
              </div>

              {/* Social Links */}
              <div className="pt-2 flex flex-wrap items-center gap-6 text-xs">
                <a
                  href="#cena-03"
                  className="inline-flex items-center gap-2 text-[#F3EFE8]/80 hover:text-[#D4A359] transition-colors"
                >
                  <Instagram className="w-4 h-4 text-[#D4A359]" strokeWidth={1.6} />
                  <span className="font-mono tabular-nums">
                    {CREATOR_PROFILE.instagramHandle} · 85 mil (demo)
                  </span>
                </a>
                <a
                  href="#cena-03"
                  className="inline-flex items-center gap-2 text-[#F3EFE8]/80 hover:text-[#D4A359] transition-colors"
                >
                  <Play className="w-3.5 h-3.5 text-[#D4A359]" strokeWidth={1.75} />
                  <span className="font-mono tabular-nums">
                    {CREATOR_PROFILE.tiktokHandle} · 42 mil (demo)
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Commercial Proposal Brief Composer + Editorial Detail */}
          <div className="lg:col-span-6">
            <div className="bg-[#121215] border border-[#F3EFE8]/12 p-6 md:p-8">
              <div className="flex items-center justify-between pb-5 border-b border-[#F3EFE8]/10">
                <div>
                  <h3 className="font-display text-2xl md:text-3xl text-[#F3EFE8]">
                    Iniciar Conversa Comercial
                  </h3>
                  <p className="mt-1 text-xs text-[#F3EFE8]/55">
                    Simulador demonstrativo de briefing · Sem envio externo real
                  </p>
                </div>
                <div className="hidden sm:block relative w-14 aspect-[3/4] overflow-hidden border border-[#F3EFE8]/15 shrink-0">
                  <EditorialImage
                    src={HERO_MEDIA.portrait}
                    alt={HERO_MEDIA.portraitAlt}
                    fill
                    sizes="60px"
                    className="object-cover object-top"
                  />
                </div>
              </div>

              {submitted ? (
                <div className="py-10 space-y-5">
                  <div className="inline-flex items-center gap-2 text-xs tracking-[0.14em] uppercase text-[#D4A359]">
                    <Check className="w-4 h-4" />
                    <span>Briefing Demonstrativo Registrado</span>
                  </div>
                  <h4 className="font-display text-3xl text-[#F3EFE8]">
                    Obrigada, {brandName}.
                  </h4>
                  <p className="text-sm leading-relaxed text-[#F3EFE8]/75">
                    Em uma implantação real, este briefing para{' '}
                    <span className="text-[#F3EFE8]">{contactEmail}</span>
                    {selectedFormats.length > 0
                      ? ` contemplando ${selectedFormats.join(', ')}`
                      : ''}{' '}
                    seria encaminhado diretamente ao atendimento comercial de Lívia Martins.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setBrandName('');
                      setContactEmail('');
                      setObjective('');
                      onClearFormats();
                    }}
                    className="px-5 py-2.5 border border-[#F3EFE8]/25 text-xs tracking-[0.12em] uppercase hover:border-[#D4A359] hover:text-[#D4A359] transition-colors cursor-pointer"
                  >
                    Montar Novo Briefing
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-5" noValidate>
                  {selectedFormats.length > 0 && (
                    <div className="p-3.5 bg-[#0A0A0B] border border-[#D4A359]/35 flex flex-wrap items-center justify-between gap-2 text-xs">
                      <span className="text-[#F3EFE8]/80">
                        <strong className="text-[#D4A359] font-medium">Formatos:</strong>{' '}
                        {selectedFormats.join(' · ')}
                      </span>
                      <button
                        type="button"
                        onClick={onClearFormats}
                        className="text-[#F3EFE8]/55 hover:text-[#F3EFE8] underline cursor-pointer"
                      >
                        Limpar
                      </button>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <label className="block space-y-2">
                      <span className="text-xs tracking-[0.1em] uppercase text-[#F3EFE8]/68">
                        Marca ou Agência
                      </span>
                      <input
                        type="text"
                        value={brandName}
                        onChange={(e) => setBrandName(e.target.value)}
                        placeholder="Ex: Casa Atlântica"
                        className="w-full px-3.5 py-2.5 bg-[#0A0A0B] border border-[#F3EFE8]/15 text-sm text-[#F3EFE8] placeholder:text-[#F3EFE8]/35 focus:border-[#D4A359] focus:outline-none"
                      />
                    </label>

                    <label className="block space-y-2">
                      <span className="text-xs tracking-[0.1em] uppercase text-[#F3EFE8]/68">
                        E-mail de Contato
                      </span>
                      <input
                        type="email"
                        value={contactEmail}
                        onChange={(e) => setContactEmail(e.target.value)}
                        placeholder="nome@empresa.com"
                        className="w-full px-3.5 py-2.5 bg-[#0A0A0B] border border-[#F3EFE8]/15 text-sm text-[#F3EFE8] placeholder:text-[#F3EFE8]/35 focus:border-[#D4A359] focus:outline-none"
                      />
                    </label>
                  </div>

                  <label className="block space-y-2">
                    <span className="text-xs tracking-[0.1em] uppercase text-[#F3EFE8]/68">
                      Objetivo &amp; Período da Campanha
                    </span>
                    <textarea
                      rows={3}
                      value={objective}
                      onChange={(e) => setObjective(e.target.value)}
                      placeholder="Conte brevemente sobre o destino, coleção ou experiência que deseja co-criar..."
                      className="w-full px-3.5 py-2.5 bg-[#0A0A0B] border border-[#F3EFE8]/15 text-sm text-[#F3EFE8] placeholder:text-[#F3EFE8]/35 focus:border-[#D4A359] focus:outline-none resize-none"
                    />
                  </label>

                  {formError && (
                    <p role="alert" className="text-xs text-[#E5987E]">
                      {formError}
                    </p>
                  )}

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-3 px-6 py-3.5 bg-[#F3EFE8] text-[#0A0A0B] hover:bg-[#D4A359] transition-colors text-xs font-medium tracking-[0.14em] uppercase cursor-pointer"
                  >
                    <span>Visualizar Envio de Proposta</span>
                    <Send className="w-3.5 h-3.5" strokeWidth={1.75} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Quiet Editorial Footer */}
        <footer className="pt-8 flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs text-[#F3EFE8]/52">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <span className="font-display text-base text-[#F3EFE8]">Reality Flow</span>
            <span aria-hidden="true">·</span>
            <span>Lívia Martins</span>
            <span aria-hidden="true">·</span>
            <span>Prumo Creators — Projeto 01</span>
          </div>
          <p className="max-w-xl leading-relaxed">{CREATOR_PROFILE.demoNote}</p>
        </footer>
      </div>
    </section>
  );
}

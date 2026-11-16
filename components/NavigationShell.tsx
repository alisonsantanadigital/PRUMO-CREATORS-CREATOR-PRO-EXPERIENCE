'use client';

import React, {useState} from 'react';
import {Menu, X, ArrowUpRight} from 'lucide-react';
import {SCENE_NAV} from '@/lib/realityFlowData';

interface NavigationShellProps {
  activeSceneId: string;
  scrollProgress: number;
  onNavigate: (id: string) => void;
}

export default function NavigationShell({
  activeSceneId,
  scrollProgress,
  onNavigate,
}: NavigationShellProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = SCENE_NAV.slice(0, 5);

  const handleLinkClick = (id: string) => {
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <>
      {/* Fixed 3-Zone Top Bar Contract (No backdrop-blur over WebGL; crisp translucent obsidian) */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-[#0A0A0B]/88 border-b border-[#F3EFE8]/10">
        {/* Scroll Progress Hairline */}
        <div className="w-full h-[2px] bg-[#F3EFE8]/8">
          <div
            className="h-full bg-[#D4A359] transition-transform duration-150 origin-left"
            style={{transform: `scaleX(${Math.min(1, Math.max(0.02, scrollProgress))})`}}
          />
        </div>

        <div className="max-w-[1440px] mx-auto px-5 md:px-10 h-14 md:h-16 flex items-center justify-between gap-8">
          {/* Zone 1: Single-line Brand Wordmark */}
          <button
            type="button"
            onClick={() => handleLinkClick('cena-01')}
            className="font-display text-xl md:text-2xl tracking-tight text-[#F3EFE8] hover:text-[#D4A359] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Reality Flow
          </button>

          {/* Zone 2: 5 concise single-line text nav links */}
          <nav
            aria-label="Navegação de Cenas"
            className="hidden lg:flex items-center gap-7 text-xs tracking-[0.14em] uppercase"
          >
            {navLinks.map((item) => {
              const isActive = activeSceneId === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleLinkClick(item.id)}
                  className={`relative py-1 whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                    isActive ? 'text-[#D4A359]' : 'text-[#F3EFE8]/72 hover:text-[#F3EFE8]'
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute left-0 right-0 -bottom-0.5 h-[1px] bg-[#D4A359] transition-transform duration-200 origin-left ${
                      isActive ? 'scale-x-100' : 'scale-x-0'
                    }`}
                  />
                </button>
              );
            })}
          </nav>

          {/* Zone 3: 1 Primary Action + Mobile Drawer Toggle */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => handleLinkClick('cena-06')}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-medium tracking-[0.1em] uppercase bg-[#F3EFE8] text-[#0A0A0B] hover:bg-[#D4A359] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              <span>Conectar</span>
              <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.75} />
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
              className="lg:hidden inline-flex items-center justify-center w-11 h-11 text-[#F3EFE8] hover:text-[#D4A359] transition-colors cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Fullscreen Editorial Index Drawer */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Índice de Cenas"
          className="fixed inset-0 z-50 bg-[#0A0A0B] text-[#F3EFE8] flex flex-col justify-between p-6 pt-20 lg:hidden"
        >
          <button
            type="button"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Fechar menu"
            className="absolute top-4 right-5 w-11 h-11 flex items-center justify-center text-[#F3EFE8] hover:text-[#D4A359]"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="space-y-4 mt-4">
            {SCENE_NAV.map((scene) => {
              const isActive = activeSceneId === scene.id;
              return (
                <button
                  key={scene.id}
                  type="button"
                  onClick={() => handleLinkClick(scene.id)}
                  className="w-full flex items-baseline justify-between py-3 border-b border-[#F3EFE8]/12 text-left cursor-pointer"
                >
                  <span className="flex items-baseline gap-4">
                    <span className="font-mono text-xs tabular-nums text-[#D4A359]">
                      {scene.number}
                    </span>
                    <span
                      className={`font-display text-3xl ${
                        isActive ? 'text-[#D4A359] italic' : 'text-[#F3EFE8]'
                      }`}
                    >
                      {scene.label}
                    </span>
                  </span>
                  <span className="text-xs text-[#F3EFE8]/50">{scene.title}</span>
                </button>
              );
            })}
          </div>

          <div className="pt-6 border-t border-[#F3EFE8]/12 flex items-center justify-between text-xs text-[#F3EFE8]/60">
            <span>Lívia Martins · Lifestyle</span>
            <span>Projeto 01 · Prumo Creators</span>
          </div>
        </div>
      )}

      {/* Desktop Right-Edge Minimal Chapter Rail */}
      <aside
        aria-label="Indicador de capítulo"
        className="hidden xl:flex fixed right-6 top-1/2 -translate-y-1/2 z-30 flex-col items-end gap-3"
      >
        {SCENE_NAV.map((scene) => {
          const isActive = activeSceneId === scene.id;
          return (
            <button
              key={scene.id}
              type="button"
              onClick={() => handleLinkClick(scene.id)}
              aria-label={`Ir para Cena ${scene.number}: ${scene.label}`}
              className="group flex items-center gap-3 py-1 cursor-pointer"
            >
              <span
                className={`font-mono text-[11px] tabular-nums transition-opacity duration-200 ${
                  isActive
                    ? 'opacity-100 text-[#D4A359]'
                    : 'opacity-0 group-hover:opacity-80 text-[#F3EFE8]'
                }`}
              >
                {scene.number} · {scene.label}
              </span>
              <span
                className={`block h-[1px] transition-all duration-200 ${
                  isActive
                    ? 'w-7 bg-[#D4A359]'
                    : 'w-3 bg-[#F3EFE8]/35 group-hover:w-5 group-hover:bg-[#F3EFE8]/80'
                }`}
              />
            </button>
          );
        })}
      </aside>
    </>
  );
}

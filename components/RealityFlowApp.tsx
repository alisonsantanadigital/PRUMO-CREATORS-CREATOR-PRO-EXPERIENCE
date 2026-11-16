'use client';

import React, {useCallback, useEffect, useState} from 'react';
import {SCENE_NAV} from '@/lib/realityFlowData';
import NavigationShell from './NavigationShell';
import Scene01Hero from './Scene01Hero';
import Scene02MyWorld from './Scene02MyWorld';
import Scene03Audience from './Scene03Audience';
import Scene04Experiences from './Scene04Experiences';
import Scene05Collaborations from './Scene05Collaborations';
import Scene06Connect from './Scene06Connect';

export default function RealityFlowApp() {
  const [activeSceneId, setActiveSceneId] = useState<string>('cena-01');
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [selectedFormats, setSelectedFormats] = useState<string[]>([]);

  const handleNavigate = useCallback((id: string) => {
    const target = document.getElementById(id);
    if (!target) return;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    target.scrollIntoView({
      behavior: prefersReduced ? 'auto' : 'smooth',
      block: 'start',
    });
  }, []);

  const handleToggleFormat = useCallback((formatName: string) => {
    setSelectedFormats((prev) =>
      prev.includes(formatName)
        ? prev.filter((item) => item !== formatName)
        : [...prev, formatName],
    );
  }, []);

  const handleClearFormats = useCallback(() => {
    setSelectedFormats([]);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? window.scrollY / docHeight : 0;
      setScrollProgress(progress);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, {passive: true});

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSceneId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-35% 0px -45% 0px',
        threshold: 0.01,
      },
    );

    SCENE_NAV.forEach((scene) => {
      const el = document.getElementById(scene.id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen w-full bg-[#0A0A0B] text-[#F3EFE8]">
      <NavigationShell
        activeSceneId={activeSceneId}
        scrollProgress={scrollProgress}
        onNavigate={handleNavigate}
      />

      <main>
        <Scene01Hero onNavigate={handleNavigate} />
        <Scene02MyWorld />
        <Scene03Audience />
        <Scene04Experiences />
        <Scene05Collaborations
          selectedFormats={selectedFormats}
          onToggleFormat={handleToggleFormat}
          onProceedToConnect={() => handleNavigate('cena-06')}
        />
        <Scene06Connect
          selectedFormats={selectedFormats}
          onClearFormats={handleClearFormats}
        />
      </main>
    </div>
  );
}

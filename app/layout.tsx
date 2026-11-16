import type {Metadata} from 'next';
import {Cormorant_Garamond, Plus_Jakarta_Sans, JetBrains_Mono} from 'next/font/google';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-sans',
  display: 'swap',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Reality Flow — Lívia Martins | Lifestyle, Experiências & Viagens',
  description:
    'Experiência digital editorial e interativa de lifestyle, viagens e parcerias criativas por Lívia Martins — Projeto 01 Prumo Creators.',
  openGraph: {
    title: 'Reality Flow — Lívia Martins | Lifestyle, Experiências & Viagens',
    description:
      'Experiência digital editorial e interativa de lifestyle, viagens e parcerias criativas por Lívia Martins — Projeto 01 Prumo Creators.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Reality Flow — Lívia Martins',
    description:
      'Experiência digital editorial e interativa de lifestyle, viagens e parcerias criativas por Lívia Martins.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html
      lang="pt-BR"
      className={`${cormorant.variable} ${jakarta.variable} ${jetbrains.variable} scroll-smooth`}
    >
      <body
        suppressHydrationWarning
        className="bg-[#0A0A0B] text-[#F3EFE8] font-sans antialiased selection:bg-[#D4A359] selection:text-[#0A0A0B] overflow-x-hidden"
      >
        {children}
      </body>
    </html>
  );
}

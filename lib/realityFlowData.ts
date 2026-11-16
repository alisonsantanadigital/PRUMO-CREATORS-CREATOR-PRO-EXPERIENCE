import type {StaticImageData} from 'next/image';

import heroCoastImg from '@/src/assets/images/hero_livia_brasil_1794769025848.jpg';
import studioPortraitImg from '@/src/assets/images/livia_brasil_portrait_1794769027560.jpg';
import travelCostaVerdeImg from '@/src/assets/images/exp_brasil_travel_1794769028046.jpg';
import lifestyleMorningImg from '@/src/assets/images/exp_brasil_lifestyle_1794769027505.jpg';
import fashionSilhouetteImg from '@/src/assets/images/exp_brasil_fashion_1794769029108.jpg';
import sanctuaryBahiaImg from '@/src/assets/images/exp_brasil_destinations_1794769029069.jpg';

export interface SceneNavItem {
  id: string;
  number: string;
  label: string;
  title: string;
}

export interface WorldChapter {
  id: string;
  index: string;
  title: string;
  coordinates: string;
  location: string;
  essay: string;
  sensoryNotes: string[];
  image: StaticImageData;
  imageAlt: string;
}

export interface AudiencePlatformData {
  id: 'consolidated' | 'instagram' | 'tiktok';
  label: string;
  handle: string;
  followers: number;
  followersSuffix: string;
  monthlyReach: number;
  reachSuffix: string;
  engagementRate: string;
  avgSavesShares: number;
  ageDistribution: {label: string; percent: number}[];
  genderSplit: {women: number; men: number};
  topLocations: {city: string; share: number}[];
  affinities: {topic: string; score: number}[];
}

export interface CampaignExperience {
  id: string;
  index: string;
  category: string;
  title: string;
  subtitle: string;
  location: string;
  season: string;
  aspectLabel: string;
  image: StaticImageData;
  imageAlt: string;
  conceptBrief: string;
  visualDirection: string;
  deliverables: string[];
  demoMetrics: {label: string; value: string}[];
}

export interface CollaborationFormat {
  id: string;
  index: string;
  name: string;
  channel: string;
  summary: string;
  idealFor: string;
  deliverables: string;
  timeline: string;
}

export const CREATOR_PROFILE = {
  name: 'Lívia Martins',
  experienceTitle: 'Reality Flow',
  tagline: 'Lifestyle, Experiências e Viagens',
  statement:
    'Criadora de narrativas visuais sobre rotina solar, destinos brasileiros autorais, arquitetura tropical modernista e o prazer de descobrir lugares com alma.',
  instagramHandle: '@liviamartins.flow',
  instagramFollowers: '85.000',
  tiktokHandle: '@liviamartins',
  tiktokFollowers: '42.000',
  demoEmail: 'contato@liviamartins.demo',
  demoWhatsapp: '+55 (11) 99999-0000',
  demoNote:
    'Todos os números, métricas de audiência, campanhas conceituais e canais de contato nesta experiência são demonstrativos.',
};

export const HERO_MEDIA = {
  backdrop: heroCoastImg,
  backdropAlt:
    'Lívia Martins em terraço modernista de concreto e madeira com vista para o Pão de Açúcar e a Baía de Guanabara no Rio de Janeiro',
  portrait: studioPortraitImg,
  portraitAlt:
    'Retrato editorial de Lívia Martins junto a muro de cobogós cerâmicos e vegetação tropical em São Paulo',
};

export const SCENE_NAV: SceneNavItem[] = [
  {id: 'cena-01', number: '01', label: 'Identidade', title: 'Intro / Identity'},
  {id: 'cena-02', number: '02', label: 'Universo', title: 'My World'},
  {id: 'cena-03', number: '03', label: 'Audiência', title: 'Audience Intelligence'},
  {id: 'cena-04', number: '04', label: 'Campanhas', title: 'Selected Experiences'},
  {id: 'cena-05', number: '05', label: 'Formatos', title: 'Brand Collaborations'},
  {id: 'cena-06', number: '06', label: 'Contato', title: "Let's Connect"},
];

export const WORLD_CHAPTERS: WorldChapter[] = [
  {
    id: 'solar-ritual',
    index: '01',
    title: 'Rotina Solar & Objetos Afetivos',
    coordinates: '23°33′S · 46°38′W',
    location: 'Jardins, São Paulo',
    essay:
      'Entre mesa de jacarandá, café coado em cerâmica artesanal, frutas tropicais e a luz da manhã atravessando folhas de palmeira, transformo rituais brasileiros cotidianos em cenas de desejo.',
    sensoryNotes: ['Jacarandá & pedra', 'Café especial', 'Luz tropical', 'Cerâmica manual'],
    image: lifestyleMorningImg,
    imageAlt:
      'Mesa brasileira em madeira jacarandá com café em cerâmica artesanal, mamão, maracujá e sombras de palmeira',
  },
  {
    id: 'coastal-escape',
    index: '02',
    title: 'Costa Verde & Mata Atlântica',
    coordinates: '23°13′S · 44°42′W',
    location: 'Paraty — Ilhabela, RJ/SP',
    essay:
      'Viajar pelo Brasil é editar o ritmo do olhar. Cada percurso privilegia pousadas integradas à mata, estradas sinuosas entre morros e mar turquesa e encontros genuínos com a paisagem.',
    sensoryNotes: ['Serra do Mar', 'Brisa atlântica', 'Fim de tarde', 'Estrada cênica'],
    image: travelCostaVerdeImg,
    imageAlt:
      'Estrada cênica da Costa Verde cercada por Mata Atlântica diante do mar turquesa ao pôr do sol',
  },
  {
    id: 'form-silhouette',
    index: '03',
    title: 'Concreto Curvo & Movimento',
    coordinates: '23°35′S · 46°39′W',
    location: 'Pavilhões Modernistas, SP',
    essay:
      'O vestir acompanha o desenho da arquitetura brasileira: linho natural, tons de areia, couro macio e silhuetas fluidas que dialogam com rampas de concreto e sol de fim de tarde.',
    sensoryNotes: ['Linho natural', 'Arquitetura modernista', 'Luz dourada', 'Movimento livre'],
    image: fashionSilhouetteImg,
    imageAlt:
      'Editorial de moda brasileiro em movimento sob rampas e colunatas curvas de concreto modernista',
  },
];

export const AUDIENCE_PLATFORMS: AudiencePlatformData[] = [
  {
    id: 'consolidated',
    label: 'Visão Consolidada',
    handle: 'Instagram + TikTok (Demonstrativo)',
    followers: 127000,
    followersSuffix: 'seguidores totais',
    monthlyReach: 640000,
    reachSuffix: 'alcance mensal médio',
    engagementRate: '5,8%',
    avgSavesShares: 3840,
    ageDistribution: [
      {label: '18–24', percent: 24},
      {label: '25–34', percent: 48},
      {label: '35–44', percent: 20},
      {label: '45+', percent: 8},
    ],
    genderSplit: {women: 74, men: 26},
    topLocations: [
      {city: 'São Paulo', share: 38},
      {city: 'Rio de Janeiro', share: 23},
      {city: 'Belo Horizonte & Sul', share: 21},
      {city: 'Nordeste & Exterior', share: 18},
    ],
    affinities: [
      {topic: 'Viagens & Hospitalidade Brasileira', score: 86},
      {topic: 'Moda Autoral & Design Nacional', score: 78},
      {topic: 'Gastronomia, Café & Bem-estar', score: 71},
    ],
  },
  {
    id: 'instagram',
    label: 'Instagram',
    handle: '@liviamartins.flow',
    followers: 85000,
    followersSuffix: 'seguidores (demonstrativo)',
    monthlyReach: 410000,
    reachSuffix: 'contas alcançadas / mês',
    engagementRate: '4,9%',
    avgSavesShares: 2410,
    ageDistribution: [
      {label: '18–24', percent: 18},
      {label: '25–34', percent: 52},
      {label: '35–44', percent: 22},
      {label: '45+', percent: 8},
    ],
    genderSplit: {women: 78, men: 22},
    topLocations: [
      {city: 'São Paulo', share: 41},
      {city: 'Rio de Janeiro', share: 24},
      {city: 'Belo Horizonte & Sul', share: 19},
      {city: 'Nordeste & Exterior', share: 16},
    ],
    affinities: [
      {topic: 'Roteiros & Hotéis Boutique no Brasil', score: 89},
      {topic: 'Estilo Pessoal & Beleza Limpa', score: 82},
      {topic: 'Arquitetura & Casa Brasileira', score: 75},
    ],
  },
  {
    id: 'tiktok',
    label: 'TikTok',
    handle: '@liviamartins',
    followers: 42000,
    followersSuffix: 'seguidores (demonstrativo)',
    monthlyReach: 230000,
    reachSuffix: 'visualizações médias / mês',
    engagementRate: '7,4%',
    avgSavesShares: 1430,
    ageDistribution: [
      {label: '18–24', percent: 36},
      {label: '25–34', percent: 43},
      {label: '35–44', percent: 16},
      {label: '45+', percent: 5},
    ],
    genderSplit: {women: 69, men: 31},
    topLocations: [
      {city: 'São Paulo', share: 34},
      {city: 'Rio de Janeiro', share: 21},
      {city: 'Belo Horizonte & Sul', share: 24},
      {city: 'Nordeste & Exterior', share: 21},
    ],
    affinities: [
      {topic: 'Diários de Bordo & Mini-Vlogs', score: 84},
      {topic: 'Achados de Design & Rotina', score: 77},
      {topic: 'Looks em Movimento', score: 73},
    ],
  },
];

export const CAMPAIGN_EXPERIENCES: CampaignExperience[] = [
  {
    id: 'travel-experiences',
    index: '01',
    category: 'Travel & Experiences',
    title: 'Travessia Costa Verde',
    subtitle: 'Diário de estrada entre Mata Atlântica, mirantes costeiros e mar de Paraty a Ilhabela.',
    location: 'Paraty & Costa Verde, RJ · Conceitual',
    season: 'Verão Atlântico',
    aspectLabel: 'Filme 16:9 & Reels 9:16',
    image: travelCostaVerdeImg,
    imageAlt: 'Estrada sinuosa pela Mata Atlântica diante de enseadas e morros verdes no Brasil',
    conceptBrief:
      'Campanha conceitual demonstrativa desenhada para marcas de turismo nacional, mobilidade ou experiências ao ar livre que buscam storytelling sensorial brasileiro.',
    visualDirection:
      'Captação em luz de final de tarde, áudio ambiente de floresta e mar atlântico, cortes respirados e fotografia 35mm complementar.',
    deliverables: [
      '1 Reels cinematográfico de 45s',
      'Sequência de 6 Stories narrativos',
      'Caderno com 12 fotos editoriais',
    ],
    demoMetrics: [
      {label: 'Visualizações estimadas (demo)', value: '148.000'},
      {label: 'Salvamentos (demo)', value: '4.120'},
      {label: 'Taxa de retenção (demo)', value: '64%'},
    ],
  },
  {
    id: 'lifestyle-daily',
    index: '02',
    category: 'Lifestyle & Daily Moments',
    title: 'Caderno da Manhã Brasileira',
    subtitle: 'Café coado, cerâmica nacional, frutas tropicais e leitura sob sombras de palmeira.',
    location: 'Jardins, São Paulo · Conceitual',
    season: 'Coleção Permanente',
    aspectLabel: 'Série Still 4:3 & POV',
    image: lifestyleMorningImg,
    imageAlt: 'Café brasileiro em cerâmica sobre mesa de jacarandá com mamão, maracujá e livro de arquitetura',
    conceptBrief:
      'Série conceitual demonstrativa voltada para marcas de design brasileiro, cafés especiais, mesa posta, fragrâncias de casa e bem-estar.',
    visualDirection:
      'Planos fechados com foco em madeira natural, cerâmica artesanal, sombras botânicas projetadas e narração intimista.',
    deliverables: [
      '1 Vídeo POV em TikTok e Reels',
      'Carrossel editorial de 7 quadros',
      '4 Stories com link de descoberta',
    ],
    demoMetrics: [
      {label: 'Alcance estimado (demo)', value: '92.400'},
      {label: 'Compartilhamentos (demo)', value: '2.680'},
      {label: 'Cliques no link (demo)', value: '1.890'},
    ],
  },
  {
    id: 'fashion-style',
    index: '03',
    category: 'Fashion & Personal Style',
    title: 'Curvas de Concreto',
    subtitle: 'Alfaiataria em linho natural em diálogo com rampas e arcos modernistas.',
    location: 'Pavilhão Modernista, SP · Conceitual',
    season: 'Meia-Estação',
    aspectLabel: 'Lookbook Vertical 3:4',
    image: fashionSilhouetteImg,
    imageAlt: 'Mulher brasileira caminhando sob rampas e arcos de concreto modernista ao sol da tarde',
    conceptBrief:
      'Campanha conceitual demonstrativa para marcas brasileiras de moda autoral, bolsas em couro e vestuário que valorizam forma, tecido e movimento.',
    visualDirection:
      'Câmera acompanhando o passo em velocidade orgânica, contraste entre a imponência do concreto curvo brasileiro e a leveza do linho.',
    deliverables: [
      '2 Reels de transição de styling',
      'Editorial vertical de 8 retratos',
      'Uso de imagem em canais digitais (30 dias)',
    ],
    demoMetrics: [
      {label: 'Impressões estimadas (demo)', value: '116.000'},
      {label: 'Engajamento médio (demo)', value: '6,1%'},
      {label: 'Salvamentos de look (demo)', value: '3.450'},
    ],
  },
  {
    id: 'premium-destinations',
    index: '04',
    category: 'Premium Places & Destinations',
    title: 'Refúgio Atlântico na Bahia',
    subtitle: 'Hospitalidade silenciosa entre taipa contemporânea, deck de madeira e mar aberto.',
    location: 'Sul da Bahia · Conceitual',
    season: 'Temporada Privada',
    aspectLabel: 'Panorâmica 16:9 & Diário',
    image: sanctuaryBahiaImg,
    imageAlt: 'Pavilhão de arquitetura tropical contemporânea na Bahia iluminado ao crepúsculo com piscina infinita',
    conceptBrief:
      'Projeto conceitual demonstrativo para hotéis boutique, pousadas de arquitetura autoral e destinos de imersão no litoral brasileiro.',
    visualDirection:
      'Transição cromática entre hora dourada e crepúsculo azul sobre a Mata Atlântica, destacando iluminação quente e espelho d’água.',
    deliverables: [
      'Mini-documentário de 60s (Reels / TikTok)',
      'Guia curado em Stories + Destaque fixo',
      'Banco de 15 imagens em alta resolução',
    ],
    demoMetrics: [
      {label: 'Visualizações totais (demo)', value: '184.000'},
      {label: 'Cliques em reserva (demo)', value: '2.940'},
      {label: 'Tempo médio de tela (demo)', value: '38s'},
    ],
  },
];

export const COLLABORATION_FORMATS: CollaborationFormat[] = [
  {
    id: 'stories',
    index: '01',
    name: 'Instagram Stories',
    channel: 'Narrativa Direta',
    summary:
      'Sequências orgânicas de 3 a 5 quadros integradas à rotina real, com demonstração natural, contexto de uso e direcionamento direto.',
    idealFor: 'Lançamentos ágeis, cupons rastreáveis e cobertura de rotina.',
    deliverables: '3–5 frames em 1080×1920 + link de acompanhamento',
    timeline: '5 dias úteis',
  },
  {
    id: 'reels',
    index: '02',
    name: 'Reels Cinematográfico',
    channel: 'Descoberta & Alcance',
    summary:
      'Produção vertical com direção de arte autoral, color grading quente, captação de áudio ambiente e roteiro focado em retenção.',
    idealFor: 'Construção de desejo de marca, destinos, moda e design.',
    deliverables: '1 vídeo 30–60s em 4K + versão limpa para tráfego pago',
    timeline: '10 dias úteis',
  },
  {
    id: 'tiktok',
    index: '03',
    name: 'TikTok Editorial',
    channel: 'Comunidade & Descoberta',
    summary:
      'Storytelling em primeira pessoa com ritmo nativo da plataforma, minidiários de viagem, curadoria de lugares e bastidores transparentes.',
    idealFor: 'Rejuvenescimento de marca e conversas orgânicas em comentários.',
    deliverables: '1 a 2 vídeos verticais nativos + interação em comentários',
    timeline: '7 dias úteis',
  },
  {
    id: 'content-production',
    index: '04',
    name: 'Produção de Conteúdo',
    channel: 'Licenciamento & Acervo',
    summary:
      'Direção criativa, fotografia e vídeos pensados exclusivamente para os canais proprietários da marca, site, e-commerce ou mídia paga.',
    idealFor: 'Marcas que precisam de olhar editorial sem obrigatoriedade de postagem.',
    deliverables: 'Pacote de 12–20 fotos + 3 clipes verticais licenciados',
    timeline: '12 dias úteis',
  },
  {
    id: 'events',
    index: '05',
    name: 'Presença em Eventos',
    channel: 'Experiência Presencial',
    summary:
      'Participação curada em aberturas, jantares, lançamentos de coleção e press trips, com cobertura estética em tempo real.',
    idealFor: 'Hospitalidade, galerias, lançamentos sazonais e ativações VIP.',
    deliverables: 'Presença de até 4h + combo de Stories e Reels pós-evento',
    timeline: 'Sob agenda',
  },
  {
    id: 'custom-campaigns',
    index: '06',
    name: 'Campanhas Personalizadas',
    channel: 'Projetos 360°',
    summary:
      'Co-criação de séries editoriais, viagens temáticas ou embaixadorias trimestrais unindo múltiplos canais e narrativa contínua.',
    idealFor: 'Posicionamento estratégico e campanhas sazonais de alto impacto.',
    deliverables: 'Escopo sob medida multi-canal + direitos estendidos',
    timeline: 'Projeto dedicado',
  },
];

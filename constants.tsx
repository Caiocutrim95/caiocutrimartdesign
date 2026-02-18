
import React from 'react';
import { PackageItem, NicheItem } from './types';
import { 
  Scale, 
  Stethoscope, 
  Briefcase, 
  PencilRuler, 
  Calculator, 
  Building2, 
  Utensils, 
  Dumbbell, 
  UserCircle 
} from 'lucide-react';

export const SOCIAL_LINKS = {
  whatsapp: 'https://wa.me/98984629959',
  instagram: 'https://www.instagram.com/caioiakal/',
  googleMaps: 'https://www.google.com/maps/place/Caio+Cutrim+Design/data=!4m2!3m1!1s0x0:0x95d1b46155484bbd?sa=X&ved=1t:2428&ictx=111'
};

export const PACKAGES: PackageItem[] = [
  {
    id: 'prof-1',
    title: 'Sites e Apps para Profissionais Formados',
    entryPrice: 599,
    monthlyPrice: 199,
    features: [
      'Site profissional responsivo e ultra-rápido',
      'Design exclusivo focado em conversão',
      'Certificado SSL de Segurança Incluso',
      'E-mails Profissionais personalizados',
      'SEO Avançado para aparecer no Google',
      'Suporte VIP via WhatsApp',
      'DOMÍNIO GRÁTIS por um ano'
    ],
    ctaText: 'Quero esse pacote',
    waMessage: 'Olá Caio, tenho interesse no pacote de site para profissionais.',
    type: 'professional'
  },
  {
    id: 'ai-1',
    title: 'Agente de IA Inteligente',
    entryPrice: 1499,
    monthlyPrice: 299,
    features: [
      'Criação de agente com tom de voz humano',
      'Automação completa de vendas no WhatsApp',
      'Treunamento com seus próprios documentos',
      'Integração direta com CRM e Agendas',
      'Suporte Prioritário 24/7',
      'DOMÍNIO GRÁTIS por um ano'
    ],
    ctaText: 'Quero meu Agente de IA',
    waMessage: 'Olá Caio, quero contratar o Agente de IA.',
    type: 'ai'
  },
  {
    id: 'graph-1',
    title: 'Artes Gráficas Premium',
    entryPrice: 0,
    features: [
      'Logotipos e Identidade Visual Completa',
      'Social Media Design de Alto Nível',
      'Mockups 3D para seus produtos',
      'Material Impresso e Digital',
      'Consultoria de Branding Inclusa'
    ],
    ctaText: 'Solicitar Orçamento',
    waMessage: 'Olá Caio, quero orçamento para artes gráficas.',
    type: 'graphics'
  }
];

export const NICHES: NicheItem[] = [
  {
    id: 'adv',
    name: 'Advogados',
    description: 'Presença digital sóbria e autoritária para captar novos clientes jurídicos de alto ticket.',
    benefits: [
      'Triagem automática de leads',
      'Páginas de áreas de atuação',
      'SEO Local para Google Maps',
      'DOMÍNIO GRÁTIS por um ano'
    ],
    icon: 'Scale'
  },
  {
    id: 'dent',
    name: 'Dentistas',
    description: 'Layouts limpos que transmitem confiança e facilitam o agendamento de consultas recorrentes.',
    benefits: [
      'Agendamento online 24h',
      'Galeria de Casos de Sucesso',
      'Automação de Lembretes',
      'DOMÍNIO GRÁTIS por um ano'
    ],
    icon: 'Stethoscope'
  },
  {
    id: 'med',
    name: 'Médicos',
    description: 'Sites com foco em humanização, ética médica e acessibilidade total para seus pacientes.',
    benefits: [
      'Integração com prontuários',
      'Telemedicina simplificada',
      'Blog de orientações de saúde',
      'DOMÍNIO GRÁTIS por um ano'
    ],
    icon: 'Stethoscope'
  },
  {
    id: 'psi',
    name: 'Psicólogos',
    description: 'Design acolhedor e minimalista para criar conexão imediata com quem busca bem-estar.',
    benefits: [
      'Botão de contato facilitado',
      'Artigos sobre saúde mental',
      'Formulário de pré-consulta',
      'DOMÍNIO GRÁTIS por um ano'
    ],
    icon: 'UserCircle'
  },
  {
    id: 'arq',
    name: 'Arquitetos',
    description: 'Portfólios visuais imersivos para destacar o luxo e a criatividade de seus projetos.',
    benefits: [
      'Portfólio interativo 4K',
      'Briefing automático de obra',
      'Integração com Pinterest/Insta',
      'DOMÍNIO GRÁTIS por um ano'
    ],
    icon: 'PencilRuler'
  },
  {
    id: 'cont',
    name: 'Contadores',
    description: 'Transmita segurança, transparência e organização extrema com um portal profissional.',
    benefits: [
      'Área de clientes segura',
      'Calculadoras financeiras',
      'Notícias contábeis automáticas',
      'DOMÍNIO GRÁTIS por um ano'
    ],
    icon: 'Calculator'
  },
  {
    id: 'rest',
    name: 'Restaurantes',
    description: 'Cardápios digitais interativos e visual apetitoso para dominar o delivery da sua região.',
    benefits: [
      'Cardápio QR Code dinâmico',
      'Sistema de Reservas Direto',
      'Integração com WhatsApp Food',
      'DOMÍNIO GRÁTIS por um ano'
    ],
    icon: 'Utensils'
  },
  {
    id: 'acad',
    name: 'Academias',
    description: 'Energia e dinamismo para converter visitantes em alunos matriculados e apaixonados.',
    benefits: [
      'Grade de aulas interativa',
      'Páginas de planos de treino',
      'Venda de matrículas online',
      'DOMÍNIO GRÁTIS por um ano'
    ],
    icon: 'Dumbbell'
  }
];

export const renderIcon = (name: string) => {
  switch (name) {
    case 'Scale': return <Scale className="w-8 h-8 text-blue-500" />;
    case 'Stethoscope': return <Stethoscope className="w-8 h-8 text-purple-500" />;
    case 'PencilRuler': return <PencilRuler className="w-8 h-8 text-orange-500" />;
    case 'Calculator': return <Calculator className="w-8 h-8 text-blue-400" />;
    case 'Utensils': return <Utensils className="w-8 h-8 text-orange-400" />;
    case 'Dumbbell': return <Dumbbell className="w-8 h-8 text-purple-400" />;
    case 'UserCircle': return <UserCircle className="w-8 h-8 text-fuchsia-500" />;
    default: return <Briefcase className="w-8 h-8 text-gray-400" />;
  }
};

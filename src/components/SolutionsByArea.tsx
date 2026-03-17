import React from 'react';
import { TrendingUp, Headphones, Settings, DollarSign, Target, Users, BarChart } from 'lucide-react';
import { motion } from 'framer-motion';
import { Section, SectionHeader } from '../design-system';

const solutions = [
  {
    icon: TrendingUp,
    title: 'Comercial & Vendas',
    accentColor: '#90FF9F',
    items: [
      'Agente qualificador de leads',
      'Dashboard de vendas em tempo real',
      'Automação de propostas',
      'Análise preditiva de fechamento',
    ],
  },
  {
    icon: Headphones,
    title: 'Atendimento & Suporte',
    accentColor: '#4FACFE',
    items: [
      'Chatbot multicanal inteligente',
      'Central de conhecimento automatizada',
      'Tickets com priorização por IA',
      'Satisfação do cliente em tempo real',
    ],
  },
  {
    icon: Settings,
    title: 'Operações',
    accentColor: '#5B9CFF',
    items: [
      'Automação de workflows',
      'Gestão inteligente de estoque',
      'Otimização de processos',
      'Monitoramento de performance',
    ],
  },
  {
    icon: DollarSign,
    title: 'Financeiro',
    accentColor: '#90FF9F',
    items: [
      'Análise preditiva de fluxo de caixa',
      'Automação de cobrança',
      'Dashboards financeiros',
      'Alertas de risco automáticos',
    ],
  },
  {
    icon: Target,
    title: 'Marketing',
    accentColor: '#4FACFE',
    items: [
      'Criação de conteúdo com IA',
      'Segmentação inteligente',
      'Automação de campanhas',
      'Análise de ROI em tempo real',
    ],
  },
  {
    icon: Users,
    title: 'Recursos Humanos',
    accentColor: '#5B9CFF',
    items: [
      'Triagem de currículos automatizada',
      'Chatbot para dúvidas de funcionários',
      'Análise de performance da equipe',
      'Onboarding automatizado',
    ],
  },
  {
    icon: BarChart,
    title: 'Análise de Dados',
    accentColor: '#90FF9F',
    items: [
      'Unificação de fontes de dados',
      'Dashboards executivos',
      'Insights automatizados',
      'Previsões baseadas em IA',
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: 'easeOut' } },
};

const SolutionsByArea = () => {
  const handleAreaCTA = (area: string) => {
    const message = encodeURIComponent(`Olá! Tenho interesse nas soluções para ${area}.`);
    window.open(`https://wa.me/5511999999999?text=${message}`, '_blank');
  };

  return (
    <Section id="solucoes" variant="light">
      <SectionHeader title="Soluções específicas para cada área da sua empresa" />

      <motion.div
        className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
      >
        {solutions.map((solution, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-shadow duration-300"
            variants={cardVariants}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
          >
            <div className="text-center mb-4">
              <div
                className="inline-flex items-center justify-center w-12 h-12 rounded-full mb-4"
                style={{ backgroundColor: `${solution.accentColor}20` }}
              >
                <solution.icon className="w-6 h-6" style={{ color: solution.accentColor }} />
              </div>

              <h3 className="text-lg font-bold font-heading text-brand-navy-corp mb-4">
                {solution.title}
              </h3>
            </div>

            <ul className="space-y-3 mb-6">
              {solution.items.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-brand-gray font-body">
                  <div
                    className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                    style={{ backgroundColor: solution.accentColor }}
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={() => handleAreaCTA(solution.title)}
              className="w-full text-center py-2 px-4 border-2 rounded-xl font-medium font-body transition-all duration-200 hover:shadow-md hover:scale-105"
              style={{ borderColor: solution.accentColor, color: solution.accentColor }}
            >
              Ver soluções
            </button>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};

export default SolutionsByArea;

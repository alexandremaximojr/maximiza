import React from 'react';
import { Brain, Zap, BarChart3, CheckCircle } from 'lucide-react';
import { Section, SectionHeader, Badge } from '../design-system';

const solutions = [
  {
    icon: Brain,
    title: 'Agente IA Personalizado',
    description: 'IA conversacional treinada especificamente para seu negócio, integrada a todos os canais',
    features: [
      'Atendimento 24/7 inteligente',
      'Qualificação automática de leads',
      'Respostas baseadas em sua base de conhecimento',
    ],
    accentColor: '#4FACFE',
  },
  {
    icon: Zap,
    title: 'Automação de Processos',
    description: 'Fluxos inteligentes que conectam sistemas e eliminam tarefas manuais',
    features: ['Integrações entre ferramentas', 'Workflows customizados', 'Notificações inteligentes'],
    accentColor: '#90FF9F',
  },
  {
    icon: BarChart3,
    title: 'Dashboard Estratégico',
    description: 'Análises em tempo real que transformam dados em decisões',
    features: ['Métricas de negócio centralizadas', 'Alertas baseados em IA', 'Insights acionáveis'],
    accentColor: '#5B9CFF',
  },
];

const SolutionSection = () => (
  <Section variant="dark">
    <SectionHeader
      badge={<Badge variant="cyan">Nossa Metodologia Proprietária</Badge>}
      title={
        <>
          A única consultoria que entrega a{' '}
          <span className="text-gradient">Tríade de Valor completa</span>
        </>
      }
    />

    <div className="space-y-8">
      {solutions.map((solution, index) => (
        <div
          key={index}
          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 lg:p-12 hover:bg-white/10 transition-all duration-300 animate-fade-in-up"
          style={{ animationDelay: `${index * 0.2}s` }}
        >
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4">
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="flex items-center justify-center w-12 h-12 rounded-full"
                  style={{ backgroundColor: `${solution.accentColor}20` }}
                >
                  <solution.icon className="w-6 h-6" style={{ color: solution.accentColor }} />
                </div>
                <h3 className="text-2xl font-bold font-heading text-white">{solution.title}</h3>
              </div>
              <p className="text-white/80 font-body text-lg leading-relaxed">{solution.description}</p>
            </div>

            <div className="lg:col-span-8">
              <div className="grid gap-4">
                {solution.features.map((feature, fi) => (
                  <div key={fi} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 flex-shrink-0" style={{ color: solution.accentColor }} />
                    <span className="text-white/90 font-body">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </Section>
);

export default SolutionSection;

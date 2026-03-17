import React from 'react';
import { RefreshCw, Target, Brain, Zap } from 'lucide-react';
import { SectionHeader, Badge } from '../design-system';

const differentials = [
  {
    icon: RefreshCw,
    title: 'Visão Holística (Nexialista)',
    description: 'Analisamos sua empresa como um sistema integrado, não departamentos isolados',
    accentColor: '#4FACFE',
  },
  {
    icon: Target,
    title: 'Implementação Pragmática',
    description: 'Resultados mensuráveis desde a primeira semana, não apenas promessas',
    accentColor: '#90FF9F',
  },
  {
    icon: Brain,
    title: 'Transferência de Conhecimento',
    description: 'Sua equipe se torna autônoma, não dependente da nossa consultoria',
    accentColor: '#5B9CFF',
  },
  {
    icon: Zap,
    title: 'Tríade de Valor',
    description: 'Cada projeto entrega IA + Automação + Dados integrados',
    accentColor: '#4FACFE',
  },
];

const MethodologySection = () => (
  <section className="bg-white py-20 lg:py-24">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader
        badge={<Badge variant="primary">Metodologia Proprietária</Badge>}
        title="O que nos torna únicos no mercado"
      />

      <div className="grid md:grid-cols-2 gap-8">
        {differentials.map((d, index) => (
          <div
            key={index}
            className="bg-brand-off-white rounded-2xl p-8 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="flex items-start gap-6">
              <div
                className="flex items-center justify-center w-12 h-12 rounded-full flex-shrink-0"
                style={{ backgroundColor: `${d.accentColor}20` }}
              >
                <d.icon className="w-6 h-6" style={{ color: d.accentColor }} />
              </div>

              <div>
                <h3 className="text-xl font-bold font-heading text-brand-navy-corp mb-3">
                  {d.title}
                </h3>
                <p className="text-brand-gray font-body leading-relaxed">{d.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default MethodologySection;

import React from 'react';
import { Section, SectionHeader } from '../design-system';

const metrics = [
  { number: '300%', description: 'Aumento médio de eficiência operacional', colorClass: 'text-brand-green' },
  { number: '40h', description: 'Horas economizadas por semana em média', colorClass: 'text-brand-cyan' },
  { number: '15 dias', description: 'Tempo médio para ver primeiros resultados', colorClass: 'text-brand-primary' },
];

const testimonials = [
  {
    company: 'TechSolutions',
    title: 'Consultoria de TI aumenta produtividade em 250%',
    quote: 'A maximiza.AI transformou nossa operação. O agente IA atende 80% dos chamados automaticamente.',
    author: 'João Silva, CEO da TechSolutions',
    logo: 'TS',
  },
  {
    company: 'ComercialMax',
    title: 'Empresa de vendas dobra conversão de leads',
    quote: 'Em 30 dias implementamos IA em todo processo comercial. ROI foi de 400% no primeiro ano.',
    author: 'Maria Santos, Diretora Comercial',
    logo: 'CM',
  },
];

const ResultsSection = () => (
  <Section variant="dark">
    <SectionHeader title="Resultados que nossos clientes alcançaram" />

    {/* Metrics */}
    <div className="grid md:grid-cols-3 gap-8 mb-16">
      {metrics.map((metric, index) => (
        <div
          key={index}
          className="text-center animate-fade-in-up"
          style={{ animationDelay: `${index * 0.2}s` }}
        >
          <div className={`text-5xl lg:text-6xl font-bold font-heading mb-4 ${metric.colorClass}`}>
            {metric.number}
          </div>
          <p className="text-white/80 font-body text-lg">{metric.description}</p>
        </div>
      ))}
    </div>

    {/* Testimonials */}
    <div className="grid lg:grid-cols-2 gap-8">
      {testimonials.map((t, index) => (
        <div
          key={index}
          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 animate-fade-in-up"
          style={{ animationDelay: `${index * 0.3}s` }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-gradient-brand rounded-lg flex items-center justify-center text-white font-bold font-heading">
              {t.logo}
            </div>
            <h3 className="text-lg font-bold font-heading text-white">{t.company}</h3>
          </div>

          <h4 className="text-xl font-semibold font-heading text-brand-green mb-4">{t.title}</h4>

          <blockquote className="text-white/90 font-body text-lg italic mb-6 leading-relaxed">
            "{t.quote}"
          </blockquote>

          <div className="text-brand-cyan font-medium font-body">— {t.author}</div>
        </div>
      ))}
    </div>
  </Section>
);

export default ResultsSection;

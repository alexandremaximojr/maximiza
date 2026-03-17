import React from 'react';
import { CheckCircle, Users, FileText, BarChart3, Video } from 'lucide-react';
import { Button } from '../design-system';

const included = [
  { icon: FileText, text: 'Análise diagnóstica completa (60-90 min)' },
  { icon: BarChart3, text: 'Identificação de oportunidades de IA' },
  { icon: CheckCircle, text: 'MVP básico desenvolvido e implementado' },
  { icon: CheckCircle, text: 'Teste funcional por 15 dias' },
  { icon: FileText, text: 'Relatório detalhado de resultados' },
];

const counterparts = [
  { icon: FileText, text: 'Feedback detalhado sobre a experiência' },
  { icon: Users, text: '2 indicações qualificadas do seu network' },
  { icon: BarChart3, text: 'Autorização para documentar métricas (dados anonimizados)' },
  { icon: Video, text: 'Participação em depoimento (opcional)' },
];

const UrgencySection = () => {
  const handleSpecialCTA = () => {
    const message = encodeURIComponent('Olá! Quero garantir minha vaga - Diagnóstico + MVP Grátis');
    window.open(`https://wa.me/5511999999999?text=${message}`, '_blank');
  };

  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-brand-primary/5 to-brand-cyan/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-brand-green text-brand-navy-corp px-6 py-3 rounded-full text-base font-semibold font-body mb-6 shadow-glow-green">
            🚀 Oferta Exclusiva — Primeiros 10 Clientes 2025
          </div>

          <h3 className="text-3xl lg:text-4xl font-bold font-heading text-brand-navy-corp mb-8">
            Diagnóstico Completo + Protótipo Funcional{' '}
            <span className="text-brand-green">GRATUITO</span>
          </h3>

          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-2xl p-6 shadow-card animate-fade-in-up">
              <h4 className="text-xl font-bold font-heading text-brand-navy-corp mb-6 flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-brand-green" />
                O que você recebe
              </h4>
              <div className="space-y-4">
                {included.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <item.icon className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-brand-gray font-body">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="bg-white rounded-2xl p-6 shadow-card animate-fade-in-up"
              style={{ animationDelay: '0.2s' }}
            >
              <h4 className="text-xl font-bold font-heading text-brand-navy-corp mb-6 flex items-center gap-2">
                <Users className="w-6 h-6 text-brand-primary" />
                Nossa contrapartida
              </h4>
              <div className="space-y-4">
                {counterparts.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <item.icon className="w-5 h-5 text-brand-primary mt-0.5 flex-shrink-0" />
                    <span className="text-brand-gray font-body">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white/80 rounded-2xl p-6 mb-6">
            <p className="text-xl font-bold font-heading text-brand-navy-corp mb-2">
              Valor desta oferta:{' '}
              <span className="text-brand-green">R$ 8.500</span>
            </p>
            <p className="text-brand-gray font-body">(consultoria + desenvolvimento)</p>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-2xl p-4 mb-8">
            <p className="text-red-600 font-semibold font-body">
              ⏰ Apenas 10 vagas disponíveis | Restam:{' '}
              <span className="text-red-700 font-bold">7 empresas</span>
            </p>
          </div>

          <Button variant="cta" size="lg" onClick={handleSpecialCTA}>
            Garantir Minha Vaga — Diagnóstico + MVP Grátis
          </Button>
        </div>
      </div>
    </section>
  );
};

export default UrgencySection;

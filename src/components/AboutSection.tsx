import React from 'react';
import { CheckCircle } from 'lucide-react';
import { Section, SectionHeader } from '../design-system';

const credentials = [
  'Especialista em IA e Automação',
  '10+ anos em transformação digital',
  'Metodologia proprietária validada',
  'Foco em resultados mensuráveis',
];

const AboutSection = () => (
  <Section id="sobre" variant="light">
    <SectionHeader title="Quem está por trás da maximiza.AI" />

    <div className="grid lg:grid-cols-5 gap-12 items-center">
      {/* Avatar */}
      <div className="lg:col-span-2 animate-fade-in-up">
        <div className="relative">
          <div className="aspect-square bg-gradient-brand rounded-2xl flex items-center justify-center">
            <div className="w-48 h-48 bg-white/20 rounded-full flex items-center justify-center">
              <span className="text-white text-6xl font-bold font-heading">M</span>
            </div>
          </div>

          <div className="absolute -bottom-4 -right-4 bg-brand-green text-brand-navy-corp px-4 py-2 rounded-full text-sm font-bold shadow-glow-green">
            Especialista USP
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="lg:col-span-3 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
        <div className="space-y-6 text-lg text-brand-gray font-body leading-relaxed">
          <p>
            A <strong className="text-brand-navy-corp">maximiza.AI</strong> nasceu da visão de
            democratizar o acesso à inteligência artificial para pequenas e médias empresas.
          </p>
          <p>
            Combinamos expertise técnica em IA com visão estratégica de negócios, criando uma
            metodologia única que integra tecnologia à realidade operacional das empresas.
          </p>
          <p>
            Nossa missão é posicionar a IA não apenas como ferramenta tecnológica, mas como{' '}
            <strong className="text-brand-primary">alavanca estratégica</strong> para liberdade
            operacional e crescimento sustentável.
          </p>
        </div>

        <div className="mt-8 space-y-4">
          {credentials.map((credential, index) => (
            <div key={index} className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0" />
              <span className="text-brand-navy-corp font-medium font-body">{credential}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </Section>
);

export default AboutSection;

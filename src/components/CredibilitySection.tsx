import React from 'react';
import { CheckCircle, Shield } from 'lucide-react';
import { Section, Badge } from '../design-system';

const certifications = [
  'Especialização em IA Aplicada aos Negócios',
  'Certificação em Automação de Processos',
  'Metodologia proprietária validada',
  '+ de 50 implementações de IA realizadas',
];

const guarantees = [
  'Diagnóstico gratuito sem compromisso',
  'Proposta com ROI projetado documentado',
  'Suporte intensivo nos primeiros 3 meses',
  'Devolução de 50% se não atingir resultados',
];

const CredibilitySection = () => (
  <Section variant="light" className="py-16">
    <div className="grid lg:grid-cols-2 gap-12">
      {/* Credibility */}
      <div className="animate-fade-in-up">
        <div className="mb-6">
          <Badge variant="primary">Especialista Formado USP</Badge>
        </div>

        <p className="text-lg text-brand-gray font-body mb-6 leading-relaxed">
          Metodologia criada por especialista formado na Universidade de São Paulo, combinando
          rigor acadêmico com mais de 10 anos de experiência prática no mercado.
        </p>

        <div className="space-y-3">
          {certifications.map((cert, index) => (
            <div key={index} className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-brand-primary flex-shrink-0" />
              <span className="text-brand-navy-corp font-medium font-body">{cert}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Guarantee */}
      <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
        <div className="mb-6">
          <Badge variant="success">
            <Shield className="w-4 h-4" />
            Garantia de Satisfação
          </Badge>
        </div>

        <h3 className="text-2xl font-bold font-heading text-brand-navy-corp mb-4">
          Investimento sem risco
        </h3>

        <p className="text-lg text-brand-gray font-body mb-6 leading-relaxed">
          Se em 90 dias você não estiver vendo os resultados prometidos no diagnóstico, devolvemos
          50% do valor investido. Simples assim.
        </p>

        <div className="space-y-3">
          {guarantees.map((guarantee, index) => (
            <div key={index} className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0" />
              <span className="text-brand-navy-corp font-medium font-body">{guarantee}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </Section>
);

export default CredibilitySection;

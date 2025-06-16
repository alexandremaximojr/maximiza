import React from 'react';
import { CheckCircle, Shield } from 'lucide-react';

const CredibilitySection = () => {
  const certifications = [
    "Especialização em IA Aplicada aos Negócios",
    "Certificação em Automação de Processos",
    "Metodologia proprietária validada",
    "+ de 50 implementações de IA realizadas"
  ];

  const guarantees = [
    "Diagnóstico gratuito sem compromisso",
    "Proposta com ROI projetado documentado",
    "Suporte intensivo nos primeiros 3 meses",
    "Devolução de 50% se não atingir resultados"
  ];

  return (
    <section className="bg-[#F8FAFC] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Credibility Column */}
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center bg-[#5B9CFF]/10 text-[#5B9CFF] px-4 py-2 rounded-full text-sm font-medium mb-6">
              Especialista Formado USP
            </div>
            
            <p className="text-lg text-[#64748B] mb-6 leading-relaxed">
              Metodologia criada por especialista formado na Universidade de São Paulo, combinando rigor acadêmico com mais de 10 anos de experiência prática no mercado.
            </p>
            
            <div className="space-y-3">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#5B9CFF] flex-shrink-0" />
                  <span className="text-[#0E2A56] font-medium">{cert}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Guarantee Column */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="inline-flex items-center bg-[#90FF9F]/10 text-[#0E2A56] px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Shield className="w-4 h-4 mr-2" />
              Garantia de Satisfação
            </div>
            
            <h3 className="text-2xl font-bold text-[#0E2A56] mb-4">
              Investimento sem risco
            </h3>
            
            <p className="text-lg text-[#64748B] mb-6 leading-relaxed">
              Se em 90 dias você não estiver vendo os resultados prometidos no diagnóstico, devolvemos 50% do valor investido. Simples assim.
            </p>
            
            <div className="space-y-3">
              {guarantees.map((guarantee, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#90FF9F] flex-shrink-0" />
                  <span className="text-[#0E2A56] font-medium">{guarantee}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CredibilitySection;
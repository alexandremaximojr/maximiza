import React from 'react';
import { RefreshCw, Target, Brain, Zap } from 'lucide-react';

const MethodologySection = () => {
  const differentials = [
    {
      icon: RefreshCw,
      title: "Visão Holística (Nexialista)",
      description: "Analisamos sua empresa como um sistema integrado, não departamentos isolados",
      color: "#4FACFE"
    },
    {
      icon: Target,
      title: "Implementação Pragmática",
      description: "Resultados mensuráveis desde a primeira semana, não apenas promessas",
      color: "#90FF9F"
    },
    {
      icon: Brain,
      title: "Transferência de Conhecimento",
      description: "Sua equipe se torna autônoma, não dependente da nossa consultoria",
      color: "#5B9CFF"
    },
    {
      icon: Zap,
      title: "Tríade de Valor",
      description: "Cada projeto entrega IA + Automação + Dados integrados",
      color: "#4FACFE"
    }
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {/* Badge */}
          <div className="inline-flex items-center bg-[#5B9CFF]/10 text-[#5B9CFF] px-4 py-2 rounded-full text-sm font-medium mb-6">
            Metodologia Proprietária
          </div>

          <h2 className="text-3xl lg:text-4xl font-bold text-[#0E2A56] mb-6">
            O que nos torna únicos no mercado
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {differentials.map((differential, index) => (
            <div 
              key={index}
              className="bg-[#F8FAFC] rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-start space-x-6">
                <div 
                  className="flex items-center justify-center w-12 h-12 rounded-full flex-shrink-0"
                  style={{ backgroundColor: `${differential.color}20` }}
                >
                  <differential.icon 
                    className="w-6 h-6" 
                    style={{ color: differential.color }}
                  />
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-[#0E2A56] mb-3">
                    {differential.title}
                  </h3>
                  
                  <p className="text-[#64748B] leading-relaxed">
                    {differential.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;
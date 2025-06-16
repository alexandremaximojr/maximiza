import React from 'react';
import { Search, FileText, Cog, TrendingUp } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: Search,
      title: "Diagnóstico Estratégico",
      description: "Análise completa dos seus processos e identificação de oportunidades de IA",
      time: "1 reunião - 60 min"
    },
    {
      number: "02",
      icon: FileText,
      title: "Proposta Personalizada",
      description: "Apresentação das soluções específicas e cronograma de implementação",
      time: "1 reunião - 45 min"
    },
    {
      number: "03",
      icon: Cog,
      title: "Implementação Iterativa",
      description: "Desenvolvimento e deploy das soluções com acompanhamento semanal",
      time: "2-4 semanas"
    },
    {
      number: "04",
      icon: TrendingUp,
      title: "Otimização Contínua",
      description: "Monitoramento de resultados e melhorias baseadas em dados reais",
      time: "Ongoing"
    }
  ];

  return (
    <section id="como-funciona" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0E2A56] mb-6">
            Como transformamos sua empresa em 4 passos simples
          </h2>
        </div>

        <div className="relative">
          {/* Timeline Line - Hidden on mobile */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-[#5B9CFF] to-[#4FACFE]"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="relative animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Step Number Circle */}
                <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-[#5B9CFF] text-white rounded-full font-bold text-lg mx-auto mb-6">
                  {step.number}
                </div>

                {/* Card */}
                <div className="bg-[#F8FAFC] rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-[#5B9CFF]/10 rounded-full mb-4">
                    <step.icon className="w-6 h-6 text-[#5B9CFF]" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-[#0E2A56] mb-3">
                    {step.title}
                  </h3>
                  
                  <p className="text-[#64748B] mb-4 leading-relaxed">
                    {step.description}
                  </p>
                  
                  <div className="inline-block bg-[#90FF9F]/20 text-[#0E2A56] px-3 py-1 rounded-full text-sm font-medium">
                    {step.time}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
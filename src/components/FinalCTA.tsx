import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

const FinalCTA = () => {
  const handleFinalCTA = () => {
    const message = encodeURIComponent("Olá! Quero transformar minha empresa com IA estratégica.");
    window.open(`https://wa.me/5511999999999?text=${message}`, '_blank');
  };

  const guarantees = [
    "Reunião de 60 minutos sem compromisso",
    "Análise personalizada da sua empresa",
    "Roadmap de implementação gratuito"
  ];

  return (
    <section className="gradient-primary py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 animate-fade-in-up">
          Pronto para transformar sua empresa com IA estratégica?
        </h2>
        
        <p className="text-xl text-white/90 mb-10 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Agende um diagnóstico gratuito e descubra como nossa tríade de valor pode acelerar seu crescimento
        </p>
        
        <button
          onClick={handleFinalCTA}
          className="bg-white text-[#5B9CFF] px-10 py-5 rounded-lg text-xl font-bold hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-fade-in-up inline-flex items-center space-x-3 mb-8"
          style={{ animationDelay: '0.4s' }}
        >
          <span>Agendar Diagnóstico Gratuito</span>
          <ArrowRight className="w-6 h-6" />
        </button>
        
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-8 text-white/80 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          {guarantees.map((guarantee, index) => (
            <div key={index} className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-[#90FF9F] flex-shrink-0" />
              <span>{guarantee}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
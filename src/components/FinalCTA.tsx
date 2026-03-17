import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

const guarantees = [
  'Reunião de 60 minutos sem compromisso',
  'Análise personalizada da sua empresa',
  'Roadmap de implementação gratuito',
];

const FinalCTA = () => {
  const handleFinalCTA = () => {
    const message = encodeURIComponent('Olá! Quero transformar minha empresa com IA estratégica.');
    window.open(`https://wa.me/5511999999999?text=${message}`, '_blank');
  };

  return (
    <section className="bg-gradient-brand py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl lg:text-5xl font-bold font-heading text-white mb-6 animate-fade-in-up">
          Pronto para transformar sua empresa com IA estratégica?
        </h2>

        <p
          className="text-xl text-white/90 font-body mb-10 leading-relaxed animate-fade-in-up"
          style={{ animationDelay: '0.2s' }}
        >
          Agende um diagnóstico gratuito e descubra como nossa tríade de valor pode acelerar seu
          crescimento
        </p>

        <button
          onClick={handleFinalCTA}
          className="bg-white text-brand-primary px-10 py-5 rounded-xl text-xl font-bold font-heading hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-fade-in-up inline-flex items-center gap-3 mb-8"
          style={{ animationDelay: '0.4s' }}
        >
          Agendar Diagnóstico Gratuito
          <ArrowRight className="w-6 h-6" />
        </button>

        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/80 font-body animate-fade-in-up"
          style={{ animationDelay: '0.6s' }}
        >
          {guarantees.map((guarantee, index) => (
            <div key={index} className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0" />
              <span>{guarantee}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;

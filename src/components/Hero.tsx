import React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';

const Hero = () => {
  const handleCTA = () => {
    const message = encodeURIComponent("Olá! Gostaria de agendar um diagnóstico gratuito.");
    window.open(`https://wa.me/5511999999999?text=${message}`, '_blank');
  };

  return (
    <section id="home" className="min-h-screen bg-[#0F1848] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #5B9CFF 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 lg:pt-32 pb-16">
        <div className="grid lg:grid-cols-5 gap-12 items-center min-h-[80vh]">
          {/* Left Column - Copy */}
          <div className="lg:col-span-3 text-center lg:text-left animate-fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center bg-[#5B9CFF]/10 text-[#5B9CFF] px-4 py-2 rounded-full text-sm font-medium mb-6">
              🚀 A IA que libera potencial humano
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Democratizamos IA como{' '}
              <span className="text-gradient">alavanca estratégica</span>{' '}
              para seu negócio
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              Transforme sua empresa com nossa tríade única: <strong>Agente IA + Automação + Produto de Dados</strong>. 
              Metodologia proprietária que gera resultados desde a primeira semana.
            </p>

            {/* CTA Button */}
            <button
              onClick={handleCTA}
              className="gradient-success text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105 animate-pulse-gentle inline-flex items-center space-x-2 mb-8"
            >
              <span>Agendar Diagnóstico Gratuito</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            {/* Social Proof */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-2 sm:space-y-0 sm:space-x-8 text-sm text-white/60">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-[#90FF9F]" />
                <span>Implementado em 15+ empresas</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-[#90FF9F]" />
                <span>ROI médio de 300% em 6 meses</span>
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="lg:col-span-2 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              {/* Dashboard Mockup */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-2xl">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-[#5B9CFF]/20 rounded-lg p-4">
                    <div className="text-white text-sm font-medium mb-2">Agente IA Ativo</div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-[#90FF9F] rounded-full animate-pulse"></div>
                      <span className="text-white/80 text-xs">Processando 47 leads...</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-[#4FACFE]/20 rounded-lg p-3">
                      <div className="text-[#4FACFE] text-2xl font-bold">+300%</div>
                      <div className="text-white/60 text-xs">Eficiência</div>
                    </div>
                    <div className="bg-[#90FF9F]/20 rounded-lg p-3">
                      <div className="text-[#90FF9F] text-2xl font-bold">40h</div>
                      <div className="text-white/60 text-xs">Economizadas</div>
                    </div>
                  </div>
                  
                  <div className="bg-white/5 rounded-lg p-3">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white text-xs">Automações Ativas</span>
                      <span className="text-[#90FF9F] text-xs">12/12</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <div className="bg-[#90FF9F] h-2 rounded-full w-full"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-[#90FF9F]/20 backdrop-blur-sm rounded-full p-3 animate-bounce">
                <div className="w-6 h-6 bg-[#90FF9F] rounded-full"></div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-[#4FACFE]/20 backdrop-blur-sm rounded-full p-3 animate-bounce" style={{ animationDelay: '0.5s' }}>
                <div className="w-6 h-6 bg-[#4FACFE] rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
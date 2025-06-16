import React from 'react';
import { CheckCircle } from 'lucide-react';

const AboutSection = () => {
  const credentials = [
    "Especialista em IA e Automação",
    "10+ anos em transformação digital",
    "Metodologia proprietária validada",
    "Foco em resultados mensuráveis"
  ];

  return (
    <section id="sobre" className="bg-[#F8FAFC] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0E2A56] mb-6">
            Quem está por trás da maximiza.AI
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Left Column - Image */}
          <div className="lg:col-span-2 animate-fade-in-up">
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-[#5B9CFF] to-[#4FACFE] rounded-2xl flex items-center justify-center">
                <div className="w-48 h-48 bg-white/20 rounded-full flex items-center justify-center">
                  <div className="text-white text-6xl font-bold">M</div>
                </div>
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-4 -right-4 bg-[#90FF9F] text-[#0E2A56] px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                Especialista USP
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="lg:col-span-3 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="space-y-6 text-lg text-[#64748B] leading-relaxed">
              <p>
                A <strong className="text-[#0E2A56]">maximiza.AI</strong> nasceu da visão de democratizar o acesso à inteligência artificial para pequenas e médias empresas.
              </p>
              
              <p>
                Combinamos expertise técnica em IA com visão estratégica de negócios, criando uma metodologia única que integra tecnologia à realidade operacional das empresas.
              </p>
              
              <p>
                Nossa missão é posicionar a IA não apenas como ferramenta tecnológica, mas como <strong className="text-[#5B9CFF]">alavanca estratégica</strong> para liberdade operacional e crescimento sustentável.
              </p>
            </div>

            {/* Credentials */}
            <div className="mt-8 space-y-4">
              {credentials.map((credential, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#90FF9F] flex-shrink-0" />
                  <span className="text-[#0E2A56] font-medium">{credential}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
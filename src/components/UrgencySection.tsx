import React from 'react';
import { CheckCircle, Users, FileText, BarChart3, Video } from 'lucide-react';

const UrgencySection = () => {
  const handleSpecialCTA = () => {
    const message = encodeURIComponent("Olá! Quero garantir minha vaga - Diagnóstico + MVP Grátis");
    window.open(`https://wa.me/5511999999999?text=${message}`, '_blank');
  };

  const included = [
    { icon: FileText, text: "Análise diagnóstica completa (60-90 min)" },
    { icon: BarChart3, text: "Identificação de oportunidades de IA" },
    { icon: CheckCircle, text: "MVP básico desenvolvido e implementado" },
    { icon: CheckCircle, text: "Teste funcional por 15 dias" },
    { icon: FileText, text: "Relatório detalhado de resultados" }
  ];

  const counterparts = [
    { icon: FileText, text: "Feedback detalhado sobre a experiência" },
    { icon: Users, text: "2 indicações qualificadas do seu network" },
    { icon: BarChart3, text: "Autorização para documentar métricas (dados anonimizados)" },
    { icon: Video, text: "Participação em depoimento (opcional)" }
  ];

  return (
    <section className="py-16" style={{
      background: 'linear-gradient(135deg, rgba(91, 156, 255, 0.05), rgba(79, 172, 254, 0.05))'
    }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          {/* Special Badge */}
          <div className="inline-flex items-center bg-[#90FF9F] text-white px-6 py-3 rounded-full text-base font-semibold mb-6">
            🚀 Oferta Exclusiva - Primeiros 10 Clientes 2025
          </div>

          <h3 className="text-3xl lg:text-4xl font-bold text-[#0E2A56] mb-8">
            Diagnóstico Completo + Protótipo Funcional{' '}
            <span className="text-[#90FF9F]">GRATUITO</span>
          </h3>

          {/* What's Included Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {/* What you receive */}
            <div className="bg-white rounded-xl p-6 shadow-lg animate-fade-in-up">
              <h4 className="text-xl font-bold text-[#0E2A56] mb-6 flex items-center">
                <CheckCircle className="w-6 h-6 text-[#90FF9F] mr-2" />
                O que você recebe
              </h4>
              <div className="space-y-4">
                {included.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <item.icon className="w-5 h-5 text-[#90FF9F] mt-0.5 flex-shrink-0" />
                    <span className="text-[#64748B]">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Our counterpart */}
            <div className="bg-white rounded-xl p-6 shadow-lg animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <h4 className="text-xl font-bold text-[#0E2A56] mb-6 flex items-center">
                <Users className="w-6 h-6 text-[#5B9CFF] mr-2" />
                Nossa contrapartida
              </h4>
              <div className="space-y-4">
                {counterparts.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <item.icon className="w-5 h-5 text-[#5B9CFF] mt-0.5 flex-shrink-0" />
                    <span className="text-[#64748B]">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Value Statement */}
          <div className="bg-white/80 rounded-xl p-6 mb-6">
            <p className="text-xl font-bold text-[#0E2A56] mb-2">
              Valor desta oferta: <span className="text-[#90FF9F]">R$ 8.500</span>
            </p>
            <p className="text-[#64748B]">(consultoria + desenvolvimento)</p>
          </div>

          {/* Urgency Banner */}
          <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-8">
            <p className="text-red-600 font-semibold">
              ⏰ Apenas 10 vagas disponíveis | Restam: <span className="text-red-700 font-bold">7 empresas</span>
            </p>
          </div>

          {/* Special CTA */}
          <button
            onClick={handleSpecialCTA}
            className="gradient-success text-white px-8 py-4 rounded-lg text-xl font-bold hover:shadow-xl transition-all duration-300 animate-pulse-gentle inline-flex items-center space-x-2"
          >
            <span>Garantir Minha Vaga - Diagnóstico + MVP Grátis</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default UrgencySection;
import React from 'react';
import { TrendingUp, Headphones, Settings, DollarSign, Target, Users, BarChart } from 'lucide-react';

const SolutionsByArea = () => {
  const handleAreaCTA = (area: string) => {
    const message = encodeURIComponent(`Olá! Tenho interesse nas soluções para ${area}.`);
    window.open(`https://wa.me/5511999999999?text=${message}`, '_blank');
  };

  const solutions = [
    {
      icon: TrendingUp,
      title: "Comercial & Vendas",
      color: "#90FF9F",
      solutions: [
        "Agente qualificador de leads",
        "Dashboard de vendas em tempo real",
        "Automação de propostas",
        "Análise preditiva de fechamento"
      ]
    },
    {
      icon: Headphones,
      title: "Atendimento & Suporte",
      color: "#4FACFE",
      solutions: [
        "Chatbot multicanal inteligente",
        "Central de conhecimento automatizada",
        "Tickets com priorização por IA",
        "Satisfação do cliente em tempo real"
      ]
    },
    {
      icon: Settings,
      title: "Operações",
      color: "#5B9CFF",
      solutions: [
        "Automação de workflows",
        "Gestão inteligente de estoque",
        "Otimização de processos",
        "Monitoramento de performance"
      ]
    },
    {
      icon: DollarSign,
      title: "Financeiro",
      color: "#90FF9F",
      solutions: [
        "Análise preditiva de fluxo de caixa",
        "Automação de cobrança",
        "Dashboards financeiros",
        "Alertas de risco automáticos"
      ]
    },
    {
      icon: Target,
      title: "Marketing",
      color: "#4FACFE",
      solutions: [
        "Criação de conteúdo com IA",
        "Segmentação inteligente",
        "Automação de campanhas",
        "Análise de ROI em tempo real"
      ]
    },
    {
      icon: Users,
      title: "Recursos Humanos",
      color: "#5B9CFF",
      solutions: [
        "Triagem de currículos automatizada",
        "Chatbot para dúvidas de funcionários",
        "Análise de performance da equipe",
        "Onboarding automatizado"
      ]
    },
    {
      icon: BarChart,
      title: "Análise de Dados",
      color: "#90FF9F",
      solutions: [
        "Unificação de fontes de dados",
        "Dashboards executivos",
        "Insights automatizados",
        "Previsões baseadas em IA"
      ]
    }
  ];

  return (
    <section id="solucoes" className="bg-[#F8FAFC] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0E2A56] mb-6">
            Soluções específicas para cada área da sua empresa
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {solutions.map((solution, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-center mb-4">
                <div 
                  className="inline-flex items-center justify-center w-12 h-12 rounded-full mb-4"
                  style={{ backgroundColor: `${solution.color}20` }}
                >
                  <solution.icon 
                    className="w-6 h-6" 
                    style={{ color: solution.color }}
                  />
                </div>
                
                <h3 className="text-lg font-bold text-[#0E2A56] mb-4">
                  {solution.title}
                </h3>
              </div>

              <ul className="space-y-3 mb-6">
                {solution.solutions.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start space-x-2 text-sm text-[#64748B]">
                    <div 
                      className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                      style={{ backgroundColor: solution.color }}
                    ></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handleAreaCTA(solution.title)}
                className="w-full text-center py-2 px-4 border-2 rounded-lg font-medium transition-all duration-200 hover:shadow-lg"
                style={{ 
                  borderColor: solution.color,
                  color: solution.color
                }}
              >
                Ver soluções {solution.title.toLowerCase()}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsByArea;
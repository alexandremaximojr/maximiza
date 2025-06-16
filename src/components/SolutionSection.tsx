import React from 'react';
import { Brain, Zap, BarChart3, CheckCircle } from 'lucide-react';

const SolutionSection = () => {
  const solutions = [
    {
      icon: Brain,
      title: "Agente IA Personalizado",
      description: "IA conversacional treinada especificamente para seu negócio, integrada a todos os canais",
      features: [
        "Atendimento 24/7 inteligente",
        "Qualificação automática de leads",
        "Respostas baseadas em sua base de conhecimento"
      ],
      color: "#4FACFE"
    },
    {
      icon: Zap,
      title: "Automação de Processos",
      description: "Fluxos inteligentes que conectam sistemas e eliminam tarefas manuais",
      features: [
        "Integrações entre ferramentas",
        "Workflows customizados", 
        "Notificações inteligentes"
      ],
      color: "#90FF9F"
    },
    {
      icon: BarChart3,
      title: "Dashboard Estratégico",
      description: "Análises em tempo real que transformam dados em decisões",
      features: [
        "Métricas de negócio centralizadas",
        "Alertas baseados em IA",
        "Insights acionáveis"
      ],
      color: "#5B9CFF"
    }
  ];

  return (
    <section className="bg-[#0F1848] py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {/* Badge */}
          <div className="inline-flex items-center bg-[#4FACFE]/20 text-[#4FACFE] px-4 py-2 rounded-full text-sm font-medium mb-6">
            Nossa Metodologia Proprietária
          </div>

          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
            A única consultoria que entrega a{' '}
            <span className="text-gradient">Tríade de Valor completa</span>
          </h2>
        </div>

        <div className="space-y-8">
          {solutions.map((solution, index) => (
            <div 
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 lg:p-12 hover:bg-white/10 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="grid lg:grid-cols-12 gap-8 items-center">
                {/* Icon and Title */}
                <div className="lg:col-span-4">
                  <div className="flex items-center space-x-4 mb-6">
                    <div 
                      className="flex items-center justify-center w-12 h-12 rounded-full"
                      style={{ backgroundColor: `${solution.color}20` }}
                    >
                      <solution.icon 
                        className="w-6 h-6" 
                        style={{ color: solution.color }}
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-white">
                      {solution.title}
                    </h3>
                  </div>
                  
                  <p className="text-white/80 text-lg leading-relaxed">
                    {solution.description}
                  </p>
                </div>

                {/* Features */}
                <div className="lg:col-span-8">
                  <div className="grid sm:grid-cols-1 gap-4">
                    {solution.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle 
                          className="w-5 h-5 flex-shrink-0" 
                          style={{ color: solution.color }}
                        />
                        <span className="text-white/90">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
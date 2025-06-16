import React from 'react';
import { Clock, BarChart3, RefreshCw } from 'lucide-react';

const ProblemSection = () => {
  const problems = [
    {
      icon: Clock,
      title: "Tempo Perdido",
      description: "Horas gastas em tarefas repetitivas que poderiam ser automatizadas",
      color: "text-red-500"
    },
    {
      icon: BarChart3,
      title: "Dados Dispersos",
      description: "Informações espalhadas em planilhas sem gerar insights estratégicos",
      color: "text-red-500"
    },
    {
      icon: RefreshCw,
      title: "Processos Desconectados",
      description: "Departamentos trabalhando isoladamente, perdendo oportunidades de otimização",
      color: "text-red-500"
    }
  ];

  return (
    <section className="bg-[#F8FAFC] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0E2A56] mb-6">
            Você já se sentiu sobrecarregado com processos manuais que consomem tempo estratégico?
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-50 rounded-full mb-6">
                  <problem.icon className={`w-8 h-8 ${problem.color}`} />
                </div>
                
                <h3 className="text-xl font-bold text-[#0E2A56] mb-4">
                  {problem.title}
                </h3>
                
                <p className="text-[#64748B] leading-relaxed">
                  {problem.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
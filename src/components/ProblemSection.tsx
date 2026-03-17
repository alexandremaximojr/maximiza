import React from 'react';
import { Clock, BarChart3, RefreshCw } from 'lucide-react';
import { Section, SectionHeader } from '../design-system';

const problems = [
  {
    icon: Clock,
    title: 'Tempo Perdido',
    description: 'Horas gastas em tarefas repetitivas que poderiam ser automatizadas',
  },
  {
    icon: BarChart3,
    title: 'Dados Dispersos',
    description: 'Informações espalhadas em planilhas sem gerar insights estratégicos',
  },
  {
    icon: RefreshCw,
    title: 'Processos Desconectados',
    description: 'Departamentos trabalhando isoladamente, perdendo oportunidades de otimização',
  },
];

const ProblemSection = () => (
  <Section variant="light">
    <SectionHeader
      title="Você já se sentiu sobrecarregado com processos manuais que consomem tempo estratégico?"
    />

    <div className="grid md:grid-cols-3 gap-8">
      {problems.map((problem, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 animate-fade-in-up text-center"
          style={{ animationDelay: `${index * 0.2}s` }}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-red-50 rounded-full mb-6">
            <problem.icon className="w-8 h-8 text-red-500" />
          </div>
          <h3 className="text-xl font-bold font-heading text-brand-navy-corp mb-4">
            {problem.title}
          </h3>
          <p className="text-brand-gray font-body leading-relaxed">{problem.description}</p>
        </div>
      ))}
    </div>
  </Section>
);

export default ProblemSection;

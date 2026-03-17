import React from 'react';
import { Search, FileText, Cog, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../design-system';

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Diagnóstico Estratégico',
    description: 'Análise completa dos seus processos e identificação de oportunidades de IA',
    time: '1 reunião - 60 min',
  },
  {
    number: '02',
    icon: FileText,
    title: 'Proposta Personalizada',
    description: 'Apresentação das soluções específicas e cronograma de implementação',
    time: '1 reunião - 45 min',
  },
  {
    number: '03',
    icon: Cog,
    title: 'Implementação Iterativa',
    description: 'Desenvolvimento e deploy das soluções com acompanhamento semanal',
    time: '2-4 semanas',
  },
  {
    number: '04',
    icon: TrendingUp,
    title: 'Otimização Contínua',
    description: 'Monitoramento de resultados e melhorias baseadas em dados reais',
    time: 'Ongoing',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const HowItWorks = () => (
  <section id="como-funciona" className="bg-white py-20 lg:py-24">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader title="Como transformamos sua empresa em 4 passos simples" />

      <div className="relative">
        {/* Timeline connector */}
        <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-brand" />

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {steps.map((step, index) => (
            <motion.div key={index} className="relative" variants={itemVariants}>
              <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-brand-primary text-white rounded-full font-bold font-heading text-lg mx-auto mb-6">
                {step.number}
              </div>

              <div className="bg-brand-off-white rounded-2xl p-6 text-center hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-brand-primary/10 rounded-full mb-4">
                  <step.icon className="w-6 h-6 text-brand-primary" />
                </div>

                <h3 className="text-xl font-bold font-heading text-brand-navy-corp mb-3">
                  {step.title}
                </h3>

                <p className="text-brand-gray font-body mb-4 leading-relaxed">{step.description}</p>

                <span className="inline-block bg-brand-green/20 text-brand-navy-corp px-3 py-1 rounded-full text-sm font-medium font-body">
                  {step.time}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

export default HowItWorks;

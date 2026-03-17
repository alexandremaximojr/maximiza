import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeader } from '../design-system';

const faqs = [
  {
    question: 'Quanto tempo leva para ver os primeiros resultados?',
    answer:
      'Nossos clientes começam a ver melhorias operacionais na primeira semana de implementação. Resultados financeiros mensuráveis aparecem entre 15-30 dias, dependendo da complexidade dos processos automatizados.',
  },
  {
    question: 'Preciso ter conhecimento técnico para usar as soluções?',
    answer:
      'Não. Nossas soluções são projetadas para serem intuitivas. Fornecemos treinamento completo para sua equipe e suporte contínuo. A interface é pensada para gestores e operadores, não para técnicos.',
  },
  {
    question: 'Como funciona a integração com nossos sistemas atuais?',
    answer:
      'Realizamos uma análise completa dos seus sistemas existentes e criamos integrações seguras via APIs. Na maioria dos casos, não é necessário trocar ferramentas que já funcionam bem.',
  },
  {
    question: 'Qual o investimento necessário para começar?',
    answer:
      'O investimento varia conforme o escopo e complexidade. Durante o diagnóstico gratuito, apresentamos uma proposta personalizada com ROI projetado. Temos soluções a partir de diferentes níveis de investimento.',
  },
  {
    question: 'Vocês oferecem suporte após a implementação?',
    answer:
      'Sim. Incluímos 3 meses de suporte intensivo para garantir que tudo funcione perfeitamente. Depois disso, oferecemos planos de manutenção e evolução contínua das soluções.',
  },
  {
    question: 'E se os resultados não atenderem nossas expectativas?',
    answer:
      'Oferecemos garantia de satisfação: se em 90 dias você não estiver vendo os resultados prometidos, devolvemos 50% do valor investido. Temos confiança total em nossa metodologia.',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Perguntas Frequentes" />

        <motion.div
          className="space-y-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-brand-off-white rounded-2xl border border-gray-100 overflow-hidden"
              variants={itemVariants}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                aria-expanded={openIndex === index}
              >
                <h3 className="text-lg font-semibold font-heading text-brand-navy-corp pr-4">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="w-5 h-5 text-brand-primary" />
                </motion.div>
              </button>

              {/* Altura real — sem max-height estimado */}
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    key="answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1, transition: { duration: 0.3, ease: 'easeOut' } }}
                    exit={{ height: 0, opacity: 0, transition: { duration: 0.22, ease: 'easeIn' } }}
                    style={{ overflow: 'hidden' }}
                  >
                    <div className="px-6 pb-6">
                      <p className="text-brand-gray font-body leading-relaxed">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;

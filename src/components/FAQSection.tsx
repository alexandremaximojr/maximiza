import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
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

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Perguntas Frequentes" />

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-brand-off-white rounded-2xl border border-gray-100 overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold font-heading text-brand-navy-corp pr-4">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-brand-primary flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-brand-primary flex-shrink-0" />
                )}
              </button>

              <div className={`faq-answer ${openIndex === index ? 'open' : ''} px-6 pb-6`}>
                <p className="text-brand-gray font-body leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

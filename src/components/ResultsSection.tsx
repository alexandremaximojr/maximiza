import React, { useRef } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { Section, SectionHeader } from '../design-system';

const metrics = [
  { raw: 300, suffix: '%', description: 'Aumento médio de eficiência operacional', colorClass: 'text-brand-green' },
  { raw: 40,  suffix: 'h', description: 'Horas economizadas por semana em média',  colorClass: 'text-brand-cyan'  },
  { raw: 15,  suffix: 'd', description: 'Dias para ver primeiros resultados',        colorClass: 'text-brand-primary' },
];

const testimonials = [
  {
    company: 'TechSolutions',
    title: 'Consultoria de TI aumenta produtividade em 250%',
    quote: 'A maximiza.AI transformou nossa operação. O agente IA atende 80% dos chamados automaticamente.',
    author: 'João Silva, CEO da TechSolutions',
    logo: 'TS',
  },
  {
    company: 'ComercialMax',
    title: 'Empresa de vendas dobra conversão de leads',
    quote: 'Em 30 dias implementamos IA em todo processo comercial. ROI foi de 400% no primeiro ano.',
    author: 'Maria Santos, Diretora Comercial',
    logo: 'CM',
  },
];

// Componente de contador animado: sobe de 0 até `to` quando entra no viewport
function AnimatedCounter({
  to,
  suffix,
  colorClass,
}: {
  to: number;
  suffix: string;
  colorClass: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (v) => Math.round(v));
  const inView = useInView(ref, { once: true, margin: '-60px' });

  React.useEffect(() => {
    if (!inView) return;
    const controls = animate(motionValue, to, { duration: 1.8, ease: 'easeOut' });
    return controls.stop;
  }, [inView, motionValue, to]);

  return (
    <span ref={ref} className={`text-5xl lg:text-6xl font-bold font-heading ${colorClass}`}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const ResultsSection = () => (
  <Section variant="dark">
    <SectionHeader title="Resultados que nossos clientes alcançaram" />

    {/* Metrics com counters animados */}
    <motion.div
      className="grid md:grid-cols-3 gap-8 mb-16"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
    >
      {metrics.map((metric, index) => (
        <motion.div key={index} className="text-center" variants={itemVariants}>
          <div className="mb-4">
            <AnimatedCounter to={metric.raw} suffix={metric.suffix} colorClass={metric.colorClass} />
          </div>
          <p className="text-white/80 font-body text-lg">{metric.description}</p>
        </motion.div>
      ))}
    </motion.div>

    {/* Testimonials */}
    <motion.div
      className="grid lg:grid-cols-2 gap-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
    >
      {testimonials.map((t, index) => (
        <motion.div
          key={index}
          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors duration-300"
          variants={itemVariants}
          whileHover={{ scale: 1.015, transition: { duration: 0.2 } }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-gradient-brand rounded-lg flex items-center justify-center text-white font-bold font-heading">
              {t.logo}
            </div>
            <h3 className="text-lg font-bold font-heading text-white">{t.company}</h3>
          </div>

          <h4 className="text-xl font-semibold font-heading text-brand-green mb-4">{t.title}</h4>

          <blockquote className="text-white/90 font-body text-lg italic mb-6 leading-relaxed">
            "{t.quote}"
          </blockquote>

          <div className="text-brand-cyan font-medium font-body">— {t.author}</div>
        </motion.div>
      ))}
    </motion.div>
  </Section>
);

export default ResultsSection;

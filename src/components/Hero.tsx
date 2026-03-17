import React, { useEffect, useRef } from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { Badge, Button } from '../design-system';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrada escalonada dos elementos do Hero via GSAP timeline
      gsap.timeline({ defaults: { ease: 'power3.out' } })
        .from('.hero-badge',    { opacity: 0, y: 20, duration: 0.5 })
        .from('.hero-headline', { opacity: 0, y: 28, duration: 0.55 }, '-=0.2')
        .from('.hero-sub',      { opacity: 0, y: 20, duration: 0.5  }, '-=0.2')
        .from('.hero-cta',      { opacity: 0, y: 16, duration: 0.45 }, '-=0.15')
        .from('.hero-proof',    { opacity: 0, y: 12, duration: 0.4  }, '-=0.1')
        .from('.hero-mockup',   { opacity: 0, x: 32, duration: 0.55 }, '-=0.4');
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleCTA = () => {
    const message = encodeURIComponent('Olá! Gostaria de agendar um diagnóstico gratuito.');
    window.open(`https://wa.me/5511999999999?text=${message}`, '_blank');
  };

  return (
    <section id="home" className="min-h-screen bg-brand-navy relative overflow-hidden">
      {/* Dot pattern background */}
      <div className="absolute inset-0 opacity-10 bg-dot-pattern [background-size:50px_50px]" />

      <div ref={containerRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 lg:pt-32 pb-16">
        <div className="grid lg:grid-cols-5 gap-12 items-center min-h-[80vh]">
          {/* Left – copy */}
          <div className="lg:col-span-3 text-center lg:text-left">
            <div className="mb-6 hero-badge">
              <Badge variant="primary">🚀 A IA que libera potencial humano</Badge>
            </div>

            <h1 className="hero-headline text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-white mb-6 leading-tight">
              Democratizamos IA como{' '}
              <span className="text-gradient">alavanca estratégica</span>{' '}
              para seu negócio
            </h1>

            <p className="hero-sub text-xl text-white/80 font-body mb-8 leading-relaxed">
              Transforme sua empresa com nossa tríade única:{' '}
              <strong>Agente IA + Automação + Produto de Dados</strong>.
              Metodologia proprietária que gera resultados desde a primeira semana.
            </p>

            <div className="hero-cta">
              <Button variant="cta" size="lg" onClick={handleCTA} className="mb-8">
                Agendar Diagnóstico Gratuito
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>

            <div className="hero-proof flex flex-col sm:flex-row items-center sm:items-start gap-6 text-sm text-white/60 font-body">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-brand-green" />
                <span>Implementado em 15+ empresas</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-brand-green" />
                <span>ROI médio de 300% em 6 meses</span>
              </div>
            </div>
          </div>

          {/* Right – dashboard mockup */}
          <div className="hero-mockup lg:col-span-2">
            <div className="relative">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-2xl">
                {/* Window chrome */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full" />
                  <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                  <div className="w-3 h-3 bg-green-500 rounded-full" />
                </div>

                <div className="space-y-4">
                  <div className="bg-brand-primary/20 rounded-lg p-4">
                    <div className="text-white text-sm font-medium mb-2">Agente IA Ativo</div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-brand-green rounded-full animate-pulse" />
                      <span className="text-white/80 text-xs">Processando 47 leads...</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-brand-cyan/20 rounded-lg p-3">
                      <div className="text-brand-cyan text-2xl font-bold font-heading">+300%</div>
                      <div className="text-white/60 text-xs">Eficiência</div>
                    </div>
                    <div className="bg-brand-green/20 rounded-lg p-3">
                      <div className="text-brand-green text-2xl font-bold font-heading">40h</div>
                      <div className="text-white/60 text-xs">Economizadas</div>
                    </div>
                  </div>

                  <div className="bg-white/5 rounded-lg p-3">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white text-xs">Automações Ativas</span>
                      <span className="text-brand-green text-xs">12/12</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <div className="bg-brand-green h-2 rounded-full w-full" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating orbs — animate-float usa o token definido em tailwind.config */}
              <div className="absolute -top-4 -right-4 bg-brand-green/20 backdrop-blur-sm rounded-full p-3 animate-float">
                <div className="w-6 h-6 bg-brand-green rounded-full" />
              </div>
              <div
                className="absolute -bottom-4 -left-4 bg-brand-cyan/20 backdrop-blur-sm rounded-full p-3 animate-float"
                style={{ animationDelay: '0.5s' }}
              >
                <div className="w-6 h-6 bg-brand-cyan rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

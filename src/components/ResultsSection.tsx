import React from 'react';

const ResultsSection = () => {
  const metrics = [
    {
      number: "300%",
      description: "Aumento médio de eficiência operacional",
      color: "#90FF9F"
    },
    {
      number: "40h",
      description: "Horas economizadas por semana em média",
      color: "#4FACFE"
    },
    {
      number: "15 dias",
      description: "Tempo médio para ver primeiros resultados",
      color: "#5B9CFF"
    }
  ];

  const testimonials = [
    {
      company: "TechSolutions",
      title: "Consultoria de TI aumenta produtividade em 250%",
      quote: "A maximiza.AI transformou nossa operação. O agente IA atende 80% dos chamados automaticamente.",
      author: "João Silva, CEO da TechSolutions",
      logo: "TS"
    },
    {
      company: "ComercialMax",
      title: "Empresa de vendas dobra conversão de leads",
      quote: "Em 30 dias implementamos IA em todo processo comercial. ROI foi de 400% no primeiro ano.",
      author: "Maria Santos, Diretora Comercial",
      logo: "CM"
    }
  ];

  return (
    <section className="bg-[#0F1848] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-12">
            Resultados que nossos clientes alcançaram
          </h2>

          {/* Metrics Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {metrics.map((metric, index) => (
              <div 
                key={index}
                className="text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div 
                  className="text-5xl lg:text-6xl font-bold mb-4"
                  style={{ color: metric.color }}
                >
                  {metric.number}
                </div>
                <p className="text-white/80 text-lg">
                  {metric.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Success Cases */}
        <div className="grid lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-[#5B9CFF] to-[#4FACFE] rounded-lg flex items-center justify-center text-white font-bold">
                  {testimonial.logo}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">
                    {testimonial.company}
                  </h3>
                </div>
              </div>
              
              <h4 className="text-xl font-semibold text-[#90FF9F] mb-4">
                {testimonial.title}
              </h4>
              
              <blockquote className="text-white/90 text-lg italic mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="text-[#4FACFE] font-medium">
                — {testimonial.author}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
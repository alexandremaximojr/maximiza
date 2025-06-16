import React from 'react';
import { Brain, Mail, Phone, Linkedin } from 'lucide-react';

const Footer = () => {
  const solutionsLinks = [
    "Comercial & Vendas",
    "Atendimento & Suporte",
    "Operações",
    "Financeiro",
    "Marketing",
    "RH",
    "Análise de Dados"
  ];

  const companyLinks = [
    "Sobre Nós",
    "Como Funciona",
    "Cases de Sucesso",
    "Blog",
    "Contato"
  ];

  return (
    <footer id="contato" className="bg-[#0F1848] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Brain className="h-8 w-8 text-[#5B9CFF]" />
              <span className="text-2xl font-bold text-[#5B9CFF]">maximiza.AI</span>
            </div>
            <p className="text-white/70 leading-relaxed">
              Democratizando IA como alavanca estratégica para o crescimento empresarial
            </p>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Soluções</h3>
            <ul className="space-y-2">
              {solutionsLinks.map((link, index) => (
                <li key={index}>
                  <a href="#solucoes" className="text-white/70 hover:text-[#5B9CFF] transition-colors duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Empresa</h3>
            <ul className="space-y-2">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-white/70 hover:text-[#5B9CFF] transition-colors duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#5B9CFF]" />
                <a href="mailto:contato@maximiza.ai" className="text-white/70 hover:text-[#5B9CFF] transition-colors duration-200">
                  contato@maximiza.ai
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#5B9CFF]" />
                <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-[#5B9CFF] transition-colors duration-200">
                  +55 11 99999-9999
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Linkedin className="w-5 h-5 text-[#5B9CFF]" />
                <a href="#" className="text-white/70 hover:text-[#5B9CFF] transition-colors duration-200">
                  /company/maximiza-ai
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-white/60">
            © 2024 maximiza.AI. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
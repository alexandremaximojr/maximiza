import React from 'react';
import { Brain, Mail, Phone, Linkedin } from 'lucide-react';

const solutionsLinks = [
  'Comercial & Vendas',
  'Atendimento & Suporte',
  'Operações',
  'Financeiro',
  'Marketing',
  'RH',
  'Análise de Dados',
];

const companyLinks = ['Sobre Nós', 'Como Funciona', 'Cases de Sucesso', 'Blog', 'Contato'];

const Footer = () => (
  <footer id="contato" className="bg-brand-navy text-white py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        {/* Brand */}
        <div className="lg:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <Brain className="h-8 w-8 text-brand-primary" />
            <span className="text-2xl font-bold font-heading text-brand-primary">maximiza.AI</span>
          </div>
          <p className="text-white/70 font-body leading-relaxed">
            Democratizando IA como alavanca estratégica para o crescimento empresarial
          </p>
        </div>

        {/* Solutions */}
        <div>
          <h3 className="text-lg font-semibold font-heading mb-4">Soluções</h3>
          <ul className="space-y-2">
            {solutionsLinks.map((link, index) => (
              <li key={index}>
                <a
                  href="#solucoes"
                  className="text-white/70 hover:text-brand-primary transition-colors duration-200 font-body"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-lg font-semibold font-heading mb-4">Empresa</h3>
          <ul className="space-y-2">
            {companyLinks.map((link, index) => (
              <li key={index}>
                <a
                  href="#"
                  className="text-white/70 hover:text-brand-primary transition-colors duration-200 font-body"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold font-heading mb-4">Contato</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-brand-primary" />
              <a
                href="mailto:contato@maximiza.ai"
                className="text-white/70 hover:text-brand-primary transition-colors duration-200 font-body"
              >
                contato@maximiza.ai
              </a>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-brand-primary" />
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-brand-primary transition-colors duration-200 font-body"
              >
                +55 11 99999-9999
              </a>
            </div>

            <div className="flex items-center gap-3">
              <Linkedin className="w-5 h-5 text-brand-primary" />
              <a
                href="#"
                className="text-white/70 hover:text-brand-primary transition-colors duration-200 font-body"
              >
                /company/maximiza-ai
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 pt-8 text-center">
        <p className="text-white/60 font-body">
          © 2024 maximiza.AI. Todos os direitos reservados.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;

import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Brain } from 'lucide-react';
import { Button } from '../design-system';

const menuItems = [
  { label: 'Home', href: '#home' },
  { label: 'Soluções', href: '#solucoes' },
  { label: 'Como Funciona', href: '#como-funciona' },
  { label: 'Sobre Nós', href: '#sobre' },
  { label: 'Contato', href: '#contato' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);

  // IntersectionObserver é mais eficiente que scroll listener — dispara apenas na mudança de estado
  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsScrolled(!entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  // Fechar menu mobile com Escape (WCAG 2.1)
  useEffect(() => {
    if (!isMenuOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMenuOpen(false);
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen]);

  const handleCTA = () => {
    const message = encodeURIComponent('Olá! Gostaria de agendar um diagnóstico gratuito.');
    window.open(`https://wa.me/5511999999999?text=${message}`, '_blank');
  };

  return (
    <>
      {/* Sentinel invisível — o IntersectionObserver detecta quando sai do viewport */}
      <div ref={sentinelRef} className="absolute top-0 left-0 h-1 w-full pointer-events-none" aria-hidden="true" />
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-brand-navy/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Brain className="h-8 w-8 text-brand-primary" />
            <span className="text-xl lg:text-2xl font-bold text-brand-primary font-heading">
              maximiza.AI
            </span>
          </div>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-white hover:text-brand-primary transition-colors duration-200 font-medium font-body"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <Button variant="primary" size="md" onClick={handleCTA} className="hidden lg:inline-flex">
            Diagnóstico Gratuito
          </Button>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white hover:text-brand-primary transition-colors duration-200"
            aria-label="Abrir menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden mobile-menu ${isMenuOpen ? 'open' : ''} fixed inset-y-0 right-0 w-64 bg-brand-navy shadow-xl`}
      >
        <div className="flex flex-col h-full pt-20 px-6">
          <nav className="flex-1 space-y-1">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block text-white hover:text-brand-primary transition-colors duration-200 font-medium font-body py-3 border-b border-white/10"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <Button
            variant="primary"
            size="md"
            className="mb-8 w-full"
            onClick={() => { handleCTA(); setIsMenuOpen(false); }}
          >
            Diagnóstico Gratuito
          </Button>
        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-[-1]"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </header>
    </>
  );
};

export default Header;

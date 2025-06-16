import React, { useState, useEffect } from 'react';
import { Menu, X, Brain } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCTA = () => {
    const message = encodeURIComponent("Olá! Gostaria de agendar um diagnóstico gratuito.");
    window.open(`https://wa.me/5511999999999?text=${message}`, '_blank');
  };

  const menuItems = [
    { label: 'Home', href: '#home' },
    { label: 'Soluções', href: '#solucoes' },
    { label: 'Como Funciona', href: '#como-funciona' },
    { label: 'Sobre Nós', href: '#sobre' },
    { label: 'Contato', href: '#contato' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#0F1848]/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Brain className="h-8 w-8 text-[#5B9CFF]" />
            <span className="text-xl lg:text-2xl font-bold text-[#5B9CFF] font-[var(--font-primary)]">
              maximiza.AI
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-white hover:text-[#5B9CFF] transition-colors duration-200 font-medium"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Button Desktop */}
          <button
            onClick={handleCTA}
            className="hidden lg:block gradient-primary text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 hover:scale-105"
          >
            Diagnóstico Gratuito
          </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white hover:text-[#5B9CFF] transition-colors duration-200"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`lg:hidden mobile-menu ${isMenuOpen ? 'open' : ''} fixed inset-y-0 right-0 w-64 bg-[#0F1848] shadow-xl`}>
        <div className="flex flex-col h-full pt-20 px-6">
          <nav className="flex-1 space-y-4">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block text-white hover:text-[#5B9CFF] transition-colors duration-200 font-medium py-3 border-b border-gray-700"
              >
                {item.label}
              </a>
            ))}
          </nav>
          
          <button
            onClick={() => {
              handleCTA();
              setIsMenuOpen(false);
            }}
            className="gradient-primary text-white px-6 py-3 rounded-lg font-semibold mb-8 hover:shadow-lg transition-all duration-200"
          >
            Diagnóstico Gratuito
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {isMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-[-1]"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </header>
  );
};

export default Header;
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo Simulation */}
        <div className="flex items-center gap-2 font-bold text-2xl tracking-widest text-brand-navy font-sans">
            <div className="relative w-10 h-10 flex items-center justify-center">
                {/* Abstract Node/C representation */}
                <svg viewBox="0 0 100 100" className="w-full h-full text-brand-navy fill-current">
                    <path d="M50 10 A40 40 0 1 0 50 90 A40 40 0 0 0 50 10 M75 30 A5 5 0 1 1 75 40 A5 5 0 0 1 75 30" fill="none" stroke="currentColor" strokeWidth="2" />
                    <circle cx="30" cy="50" r="4" />
                    <circle cx="50" cy="20" r="4" />
                    <circle cx="50" cy="80" r="4" />
                    <circle cx="70" cy="35" r="4" />
                    <circle cx="70" cy="65" r="4" />
                    <path d="M30 50 L50 20 L70 35 M30 50 L50 80 L70 65" stroke="currentColor" strokeWidth="1" />
                </svg>
            </div>
            COORDIN<span className="text-brand-yellowDark">.ART</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 text-sm font-semibold tracking-wide text-gray-700">
          <a href="#about" className="hover:text-brand-blue transition-colors">ABOUT</a>
          <a href="#services" className="hover:text-brand-blue transition-colors">SERVICES</a>
          <a href="#projects" className="hover:text-brand-blue transition-colors">PROJECTS</a>
          <a href="#founder" className="hover:text-brand-blue transition-colors">FOUNDER</a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-brand-navy"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-xl p-6 md:hidden flex flex-col space-y-4">
            <a href="#about" className="text-lg font-medium text-gray-800" onClick={() => setMobileMenuOpen(false)}>About</a>
            <a href="#services" className="text-lg font-medium text-gray-800" onClick={() => setMobileMenuOpen(false)}>Services</a>
            <a href="#projects" className="text-lg font-medium text-gray-800" onClick={() => setMobileMenuOpen(false)}>Projects</a>
            <a href="#founder" className="text-lg font-medium text-gray-800" onClick={() => setMobileMenuOpen(false)}>Founder</a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
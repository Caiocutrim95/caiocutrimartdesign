
import React, { useState, useEffect } from 'react';
import { ViewState } from '../types';
import { SOCIAL_LINKS } from '../constants';
import Logo from './Logo';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  setView: (v: ViewState) => void;
  currentView: ViewState;
}

const Header: React.FC<HeaderProps> = ({ setView, currentView }) => {
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out`}
    >
      <div className={`w-full flex items-center justify-between px-[5%] transition-all duration-500 border-b border-white/10 glass 
        ${isScrolled ? 'py-3 bg-slate-950/90 backdrop-blur-3xl shadow-[0_20px_50px_rgba(0,0,0,0.4)]' : 'py-6 bg-white/5 backdrop-blur-2xl'}`}
      >
        <div 
          onClick={() => { setView('home'); setMobileMenuOpen(false); }}
          className="cursor-pointer transition-transform duration-300 hover:scale-105"
        >
          <Logo />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-12 font-bold text-[11px] tracking-[0.2em] uppercase">
          <button 
            onClick={() => setView('home')}
            className={`relative py-2 transition-all hover:text-orange-400 group ${currentView === 'home' ? 'text-orange-500' : 'text-slate-300'}`}
          >
            Início
            <span className={`absolute bottom-0 left-0 h-[2px] bg-orange-500 transition-all duration-300 ease-out ${currentView === 'home' ? 'w-full' : 'w-0 group-hover:w-full'}`} />
          </button>
          
          <button 
            onClick={() => setView('niches')}
            className={`relative py-2 transition-all hover:text-orange-400 group ${currentView === 'niches' ? 'text-orange-500' : 'text-slate-300'}`}
          >
            Ver Nichos
            <span className={`absolute bottom-0 left-0 h-[2px] bg-orange-500 transition-all duration-300 ease-out ${currentView === 'niches' ? 'w-full' : 'w-0 group-hover:w-full'}`} />
          </button>

          <a 
            href={SOCIAL_LINKS.googleMaps} 
            target="_blank" 
            className="text-slate-300 hover:text-orange-400 transition-all py-2 relative group"
          >
            Localização
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover:w-full" />
          </a>
          
          <a 
            href={SOCIAL_LINKS.instagram} 
            target="_blank" 
            className="text-slate-300 hover:text-orange-400 transition-all py-2 relative group"
          >
            Instagram
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover:w-full" />
          </a>
        </nav>

        <div className="flex items-center gap-6">
          <a 
            href={SOCIAL_LINKS.whatsapp}
            target="_blank"
            className="hidden sm:block bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-xl font-black text-[10px] tracking-[0.2em] uppercase transition-all shadow-[0_10px_20px_rgba(249,115,22,0.2)] active:scale-95"
          >
            Solicitar Projeto
          </a>
          
          {/* Mobile Toggle */}
          <button 
            className="lg:hidden text-white p-2 glass rounded-full"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-0 z-[-1] bg-slate-950/98 backdrop-blur-2xl flex flex-col items-center justify-center gap-8 transition-all duration-500 ${mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}>
          <button onClick={() => { setView('home'); setMobileMenuOpen(false); }} className="text-2xl font-black tracking-widest text-white uppercase">Início</button>
          <button onClick={() => { setView('niches'); setMobileMenuOpen(false); }} className="text-2xl font-black tracking-widest text-white uppercase">Ver Nichos</button>
          <a href={SOCIAL_LINKS.googleMaps} target="_blank" className="text-2xl font-black tracking-widest text-white uppercase">Localização</a>
          <a href={SOCIAL_LINKS.instagram} target="_blank" className="text-2xl font-black tracking-widest text-white uppercase">Instagram</a>
          <a href={SOCIAL_LINKS.whatsapp} target="_blank" className="mt-8 bg-orange-500 px-10 py-5 rounded-2xl font-black text-white">FALAR AGORA</a>
      </div>
    </header>
  );
};

export default Header;

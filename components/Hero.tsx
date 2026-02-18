
import React, { useState, useEffect } from 'react';
import Button from './Button';
import { SOCIAL_LINKS } from '../constants';

const SLIDE_DATA = [
  {
    // Nicho: Restaurantes e Delivery
    url: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop",
    thumb: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=600&auto=format&fit=crop",
    label: "Apps de Comida & Delivery",
    desc: "Sistemas de Pedidos Online"
  },
  {
    // Nicho: Advogados
    url: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1200&auto=format&fit=crop",
    thumb: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=600&auto=format&fit=crop",
    label: "Sites para Advogados",
    desc: "Autoridade e Captação Jurídica"
  },
  {
    // Nicho: Imobiliárias
    url: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200&auto=format&fit=crop",
    thumb: "https://images.unsplash.com/photo-1448630360428-65456885c650?q=80&w=600&auto=format&fit=crop",
    label: "Imobiliárias de Luxo",
    desc: "Portfólios de Imóveis 4K"
  },
  {
    // Nicho: Clínicas e Médicos
    url: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200&auto=format&fit=crop",
    thumb: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=600&auto=format&fit=crop",
    label: "Clínicas & Médicos",
    desc: "Agendamento e Telemedicina"
  }
];

interface HeroProps {
  onSeeNiches: () => void;
}

const Hero: React.FC<HeroProps> = ({ onSeeNiches }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDE_DATA.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative pt-44 pb-32 px-6 overflow-hidden">
      <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">
        
        {/* LADO ESQUERDO: TEXTO */}
        <div className="relative z-10 text-center lg:text-left">
          <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-[10px] font-black tracking-[0.4em] uppercase mb-10 animate-pulse">
            <span className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_#3b82f6]"></span>
            especialista On
          </div>
          
          <h1 className="text-5xl md:text-7xl xl:text-8xl font-black leading-[1.05] mb-8 tracking-tighter">
            Sites, Apps e <br/>
            <span className="text-gradient">Agentes de IA</span> <br/>
            que Dominam.
          </h1>
          
          <p className="text-slate-400 text-lg md:text-xl mb-12 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
            Projetos futuristas para diversos nichos com IA integrada e design de alta performance para converter visitantes em clientes fiéis.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
            <a href={SOCIAL_LINKS.whatsapp} target="_blank">
              <Button className="px-12 h-16 w-full sm:w-auto">Solicitar Projeto</Button>
            </a>
            <Button variant="outline" onClick={onSeeNiches} className="px-12 h-16 w-full sm:w-auto">Ver Planos</Button>
          </div>
        </div>

        {/* LADO DIREITO: VISUAL E SLIDER */}
        <div className="relative group perspective-1000">
          
          {/* IMAGEM PRINCIPAL (Sincronizada) */}
          <div className="relative z-0 p-3 glass rounded-[3.5rem] shadow-2xl overflow-hidden group-hover:shadow-blue-500/10 transition-all duration-700">
            <div 
              className="flex w-full aspect-video transition-transform duration-1000 ease-in-out rounded-[2.8rem] overflow-hidden bg-slate-900"
            >
              {SLIDE_DATA.map((slide, idx) => (
                <div 
                  key={idx} 
                  className="w-full h-full flex-shrink-0 relative transition-opacity duration-700"
                  style={{ 
                    transform: `translateX(-${currentSlide * 100}%)`,
                  }}
                >
                  <img 
                    src={slide.url} 
                    alt={slide.label} 
                    className="w-full h-full object-cover brightness-[0.8] scale-105"
                    onError={(e) => {
                       (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent" />
                  
                  <div className={`absolute bottom-10 left-10 transition-all duration-1000 ${currentSlide === idx ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                    <span className="block text-[10px] text-blue-400 font-black tracking-[0.3em] uppercase mb-2">Demonstração Ativa</span>
                    <h3 className="text-3xl font-black text-white uppercase italic">{slide.label}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CARD DO SLIDER FLUTUANTE */}
          <div className="absolute -top-12 -left-8 md:-left-12 z-20 glass p-5 rounded-[2.5rem] shadow-[0_25px_60px_rgba(0,0,0,0.5)] border border-blue-500/20 w-72 md:w-96 transform hover:scale-105 transition-all duration-500 group-hover:rotate-1">
            
            <div className="relative h-48 md:h-60 w-full mb-6 overflow-hidden rounded-[1.8rem] bg-slate-950 ring-2 ring-blue-500/30 shadow-[inset_0_0_20px_rgba(0,0,0,0.8)]">
              <div 
                className="flex h-full w-full transition-transform duration-1000 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {SLIDE_DATA.map((slide, index) => (
                  <div key={index} className="w-full h-full flex-shrink-0 relative">
                    <img
                      src={slide.thumb}
                      alt={slide.label}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                         (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=600';
                      }}
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-blue-600/90 text-[8px] font-black uppercase px-3 py-1 rounded-full tracking-widest text-white shadow-lg backdrop-blur-sm">
                        CASE 0{index + 1}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="absolute bottom-0 left-0 w-full h-1.5 bg-white/10 overflow-hidden">
                <div 
                  key={currentSlide}
                  className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 progress-bar-animation" 
                />
              </div>
            </div>

            <div className="px-2 pb-2">
              <div className="flex items-center justify-between mb-4">
                 <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center font-black text-sm text-white shadow-lg shadow-blue-500/20">
                      CC
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-black tracking-widest text-white uppercase leading-none">
                        {SLIDE_DATA[currentSlide].label}
                      </span>
                      <span className="text-[10px] font-bold text-slate-500 uppercase mt-1">
                        {SLIDE_DATA[currentSlide].desc}
                      </span>
                    </div>
                 </div>
                 
                 <div className="flex gap-1.5">
                   {SLIDE_DATA.map((_, i) => (
                     <div 
                        key={i} 
                        className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${i === currentSlide ? 'bg-orange-500 w-4 shadow-[0_0_8px_#f97316]' : 'bg-slate-700'}`}
                      />
                   ))}
                 </div>
              </div>
            </div>
          </div>
          
          <div className="absolute -top-10 -right-10 w-96 h-96 bg-blue-600/20 blur-[120px] rounded-full animate-pulse -z-10" />
          <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-purple-600/10 blur-[100px] rounded-full animate-float -z-10" style={{ animationDelay: '-2s' }} />
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes progress {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        .progress-bar-animation {
          animation: progress 5s linear infinite;
        }
        .perspective-1000 {
          perspective: 1000px;
        }
      `}} />
    </section>
  );
};

export default Hero;

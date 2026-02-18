
import React from 'react';
import { Check } from 'lucide-react';
import SectionTitle from './SectionTitle';
import { PACKAGES, SOCIAL_LINKS } from '../constants';
import Button from './Button';

const Packages: React.FC = () => {
  return (
    <section id="packages" className="py-32 px-6">
      <div className="max-w-[1400px] mx-auto">
        <SectionTitle 
          title="Nossos Planos" 
          subtitle="Investimento inteligente para quem não aceita ser apenas mais um no mercado."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {PACKAGES.map((pkg) => (
            <div 
              key={pkg.id} 
              className={`glass rounded-[2.5rem] p-10 flex flex-col relative overflow-hidden transition-all duration-700 hover:-translate-y-3 hover:shadow-[0_40px_80px_rgba(0,0,0,0.4)] border border-white/5 group ${pkg.type === 'ai' ? 'ring-2 ring-orange-500/20 scale-105 z-10 bg-white/[0.05]' : ''}`}
            >
              {pkg.type === 'ai' && (
                <div className="absolute top-6 right-6 bg-orange-500 text-white text-[9px] font-black px-4 py-1.5 rounded-full uppercase tracking-[0.2em] shadow-lg shadow-orange-500/20">
                  Top Escolha
                </div>
              )}

              <h3 className="text-3xl font-black mb-10 pr-10 tracking-tight leading-tight group-hover:text-orange-400 transition-colors">{pkg.title}</h3>
              
              <div className="mb-10 p-6 rounded-2xl bg-white/5 border border-white/5">
                {pkg.entryPrice > 0 ? (
                  <>
                    <p className="text-slate-500 line-through text-xs font-bold mb-1 uppercase tracking-widest">
                      De R$ {pkg.type === 'ai' ? '5.000' : '2.500'} por:
                    </p>
                    <div className="flex flex-col">
                      <span className="text-slate-400 text-sm font-medium mb-1">Entrada: R$ {pkg.entryPrice}</span>
                      <div className="mt-1 flex items-baseline gap-2">
                        <span className="text-5xl font-black text-white tracking-tighter">R$ {pkg.monthlyPrice}</span>
                        <span className="text-sm font-bold text-slate-500 uppercase tracking-widest">/mês</span>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="py-2">
                    <span className="text-2xl font-black text-gradient uppercase tracking-tight">Sob Consulta</span>
                  </div>
                )}
              </div>

              <ul className="space-y-5 mb-12 flex-grow">
                {pkg.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-4 text-slate-400 group-hover:text-slate-300 transition-colors">
                    <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-orange-500/10 flex items-center justify-center border border-orange-500/20">
                        <Check className="w-3 h-3 text-orange-500" />
                    </div>
                    <span className={`text-sm font-medium leading-relaxed ${feat.includes('DOMÍNIO GRÁTIS') ? 'text-emerald-400 font-bold' : ''}`}>
                      {feat}
                    </span>
                  </li>
                ))}
              </ul>

              <a 
                href={`${SOCIAL_LINKS.whatsapp}?text=${encodeURIComponent(pkg.waMessage)}`} 
                target="_blank"
                className="w-full mt-auto"
              >
                <Button 
                  variant={pkg.type === 'ai' ? 'primary' : 'outline'}
                  className="w-full h-16"
                >
                  {pkg.ctaText}
                </Button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;


import React from 'react';
import SectionTitle from './SectionTitle';
import { NICHES, renderIcon, SOCIAL_LINKS } from '../constants';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Button from './Button';

const NichesView: React.FC = () => {
  return (
    <section className="py-44 px-6 min-h-screen">
      <div className="max-w-[1400px] mx-auto">
        <SectionTitle 
          title="Mercados Estratégicos" 
          subtitle="Especialização absoluta para nichos que exigem autoridade e performance."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {NICHES.map((niche) => (
            <div key={niche.id} className="glass rounded-[2rem] p-8 hover:bg-white/[0.08] transition-all duration-500 group flex flex-col border border-white/5 hover:border-orange-500/30 hover:-translate-y-2">
              <div className="mb-8 p-5 glass-dark w-fit rounded-2xl group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(249,115,22,0.1)] transition-all duration-500">
                {renderIcon(niche.icon)}
              </div>
              
              <h3 className="text-2xl font-black mb-4 tracking-tight">{niche.name}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow group-hover:text-slate-300">{niche.description}</p>
              
              <div className="space-y-3 mb-8">
                {niche.benefits.map((benefit, bIdx) => (
                  <div key={bIdx} className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-wider text-slate-500 group-hover:text-slate-400 transition-colors">
                    <CheckCircle2 size={14} className="text-orange-500 flex-shrink-0" />
                    <span className={benefit.includes('DOMÍNIO GRÁTIS') ? 'text-emerald-400 font-black' : ''}>
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-8 border-t border-white/5 mb-8">
                 <div className="flex justify-between items-end">
                    <div className="space-y-1">
                      <span className="block text-[9px] text-slate-600 uppercase font-black tracking-widest">Entrada</span>
                      <span className="text-lg font-black text-white">R$ 599</span>
                    </div>
                    <div className="text-right space-y-1">
                       <span className="block text-[9px] text-slate-600 uppercase font-black tracking-widest">Plano Mensal</span>
                       <span className="text-3xl font-black text-orange-500 leading-none">R$ 199</span>
                    </div>
                 </div>
              </div>

              <a 
                href={`${SOCIAL_LINKS.whatsapp}?text=${encodeURIComponent(`Olá Caio, sou ${niche.name} e quero finalizar meu projeto com as condições exclusivas.`)}`} 
                target="_blank"
                className="block w-full"
              >
                <Button variant="outline" className="w-full text-[10px] tracking-[0.2em] py-4">
                  PROSSEGUIR <ArrowRight size={14} />
                </Button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NichesView;

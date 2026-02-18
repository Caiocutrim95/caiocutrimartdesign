
import React from 'react';
import { Instagram, MapPin, MessageSquare } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950/50 pt-24 pb-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-16 mb-20">
        <div className="col-span-1 md:col-span-1">
          <div className="mb-8">
            <Logo />
          </div>
          <p className="text-slate-400 text-sm leading-relaxed mb-8 border-l-2 border-orange-500 pl-4">
            Especialista em criar ativos digitais de alta performance. De sites a inteligência artificial, construímos o futuro do seu negócio hoje.
          </p>
          <div className="flex gap-6">
            <a href={SOCIAL_LINKS.instagram} className="text-slate-400 hover:text-orange-500 transition-colors"><Instagram size={22} /></a>
            <a href={SOCIAL_LINKS.whatsapp} className="text-slate-400 hover:text-orange-500 transition-colors"><MessageSquare size={22} /></a>
            <a href={SOCIAL_LINKS.googleMaps} className="text-slate-400 hover:text-orange-500 transition-colors"><MapPin size={22} /></a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-black mb-8 uppercase tracking-widest text-xs">O que fazemos</h4>
          <ul className="space-y-4 text-slate-400 text-sm">
            <li className="hover:text-white cursor-pointer transition-colors">Criação de Sites</li>
            <li className="hover:text-white cursor-pointer transition-colors">Aplicativos</li>
            <li className="hover:text-white cursor-pointer transition-colors">Landing Pages</li>
            <li className="hover:text-white cursor-pointer transition-colors">Agentes de IA</li>
            <li className="hover:text-white cursor-pointer transition-colors">E-commerce</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-black mb-8 uppercase tracking-widest text-xs">Navegação</h4>
          <ul className="space-y-4 text-slate-400 text-sm">
            <li className="hover:text-white cursor-pointer transition-colors">Início</li>
            <li className="hover:text-white cursor-pointer transition-colors">Ver Nichos</li>
            <li className="hover:text-white cursor-pointer transition-colors">Planos</li>
            <li className="hover:text-white cursor-pointer transition-colors">Contato</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-black mb-8 uppercase tracking-widest text-xs">Contato Direto</h4>
          <ul className="space-y-5 text-slate-400 text-sm">
            <li className="flex items-center gap-4 group cursor-pointer">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-orange-500 transition-all">
                <MessageSquare size={18} />
              </div>
              <span className="group-hover:text-white transition-colors">(98) 98462-9959</span>
            </li>
            <li className="flex items-center gap-4 group cursor-pointer">
               <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-orange-500 transition-all">
                <Instagram size={18} />
              </div>
              <span className="group-hover:text-white transition-colors">@caioiakal</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-[10px] font-bold uppercase tracking-widest">
        <p>&copy; {new Date().getFullYear()} Caio Cutrim. Todos os direitos reservados.</p>
        <div className="flex gap-8">
           <span className="hover:text-white cursor-pointer transition-colors">Privacidade</span>
           <span className="hover:text-white cursor-pointer transition-colors">Termos de Uso</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

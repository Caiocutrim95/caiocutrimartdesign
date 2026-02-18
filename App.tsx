
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Packages from './components/Packages';
import NichesView from './components/NichesView';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import { ViewState } from './types';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>('home');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [view]);

  return (
    <div className="relative min-h-screen bg-[#020617] overflow-hidden">
      {/* Background Decorative Shapes */}
      <div className="absolute top-[20%] right-[-5%] w-[40rem] h-[40rem] bg-blue-600/10 blur-[150px] rounded-full -z-0 pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-5%] w-[50rem] h-[50rem] bg-purple-600/5 blur-[180px] rounded-full -z-0 pointer-events-none" />

      <Header setView={setView} currentView={view} />
      
      <main className="relative z-10">
        {view === 'home' ? (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <Hero onSeeNiches={() => setView('niches')} />
            
            {/* Infinite Horizontal Badge Section */}
            <div className="py-12 bg-white/5 border-y border-white/5">
              <div className="max-w-[1400px] mx-auto px-6 flex flex-wrap justify-between gap-10 opacity-40 hover:opacity-100 transition-opacity duration-1000">
                <span className="text-xl md:text-2xl font-black italic tracking-tighter uppercase">Design Premium</span>
                <span className="text-xl md:text-2xl font-black italic tracking-tighter uppercase">Alta Conversão</span>
                <span className="text-xl md:text-2xl font-black italic tracking-tighter uppercase">Tecnologia de Ponta</span>
                <span className="text-xl md:text-2xl font-black italic tracking-tighter uppercase">Suporte VIP</span>
              </div>
            </div>

            <Packages />
            
            {/* Ultra Modern CTA Section */}
            <section className="py-32 px-6">
              <div className="max-w-[1200px] mx-auto relative group">
                 <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-[120px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -z-10" />
                 
                 <div className="glass rounded-[3rem] p-16 md:p-24 relative overflow-hidden text-center">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/5 via-transparent to-purple-600/5 -z-10" />
                    
                    <div className="inline-block px-6 py-2 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-500 text-[10px] font-black tracking-[0.4em] uppercase mb-10">
                        Disponibilidade Limitada
                    </div>
                    
                    <h2 className="text-4xl md:text-6xl font-black mb-10 max-w-4xl mx-auto leading-tight tracking-tight">
                       Sua jornada para o <br/>
                       <span className="text-gradient">Próximo Nível</span> <br/>
                       Começa com um Clique.
                    </h2>
                    <p className="text-slate-400 text-lg md:text-xl mb-14 max-w-2xl mx-auto font-medium leading-relaxed">
                       Não entregamos apenas código. Entregamos autoridade, escala e um ecossistema pronto para vender 24/7.
                    </p>
                    <a href="https://wa.me/98984629959?text=Olá Caio, quero elevar meu posicionamento digital hoje!" target="_blank">
                       <button className="bg-white text-slate-950 px-16 py-6 rounded-2xl font-black text-xl tracking-tighter transition-all hover:bg-orange-500 hover:text-white shadow-[0_20px_50px_rgba(255,255,255,0.1)] active:scale-95">
                           SOLICITAR PROJETO
                       </button>
                    </a>
                 </div>
              </div>
            </section>
          </div>
        ) : (
          <div className="animate-in fade-in slide-in-from-right-4 duration-700">
            <NichesView />
          </div>
        )}
      </main>

      <Footer />
      <FloatingActions />
    </div>
  );
};

export default App;

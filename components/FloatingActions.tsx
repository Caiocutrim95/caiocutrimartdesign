
import React from 'react';
import { Instagram, MessageCircle } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const FloatingActions: React.FC = () => {
  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4">
      <a 
        href={SOCIAL_LINKS.instagram} 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-14 h-14 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white shadow-xl hover:scale-110 transition-transform"
      >
        <Instagram size={28} />
      </a>
      <a 
        href={SOCIAL_LINKS.whatsapp} 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white shadow-2xl hover:scale-110 transition-transform animate-bounce hover:animate-none"
      >
        <MessageCircle size={36} fill="white" className="text-green-500" />
      </a>
    </div>
  );
};

export default FloatingActions;

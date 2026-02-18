
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'neon';
}

const Button: React.FC<ButtonProps> = ({ children, onClick, className = '', variant = 'primary' }) => {
  const baseStyles = "px-8 py-4 rounded-2xl font-black transition-all duration-300 transform hover:scale-[1.03] active:scale-95 flex items-center justify-center gap-2 tracking-tight uppercase text-sm";
  
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 shadow-[0_10px_30px_rgba(59,130,246,0.3)]",
    secondary: "bg-white text-slate-950 hover:bg-slate-100",
    outline: "border-2 border-white/10 text-white hover:bg-white/5 backdrop-blur-md",
    neon: "bg-emerald-500 text-slate-950 hover:bg-emerald-400 shadow-[0_10px_30px_rgba(16,185,129,0.3)]"
  };

  return (
    <button 
      onClick={onClick} 
      className={`${baseStyles} ${variants[variant as keyof typeof variants]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;

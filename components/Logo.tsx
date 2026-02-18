
import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`flex items-center gap-4 group cursor-pointer ${className}`}>
      <div className="relative w-12 h-16 transition-transform duration-500 group-hover:scale-110">
        {/* Layered isometric squares animation */}
        {[0, 1, 2, 3, 4].map((i) => (
          <svg
            key={i}
            viewBox="0 0 100 100"
            className="absolute left-0 w-full transition-all duration-500 ease-out"
            style={{
              top: `${i * 6}px`,
              zIndex: 5 - i,
              opacity: 1 - i * 0.15,
            }}
          >
            <path
              d="M50 20 L80 35 L50 50 L20 35 Z"
              fill={i === 0 ? "white" : "transparent"}
              stroke={i === 0 ? "none" : (i % 2 === 0 ? "#3b82f6" : "#7c3aed")}
              strokeWidth="2"
              className="group-hover:stroke-orange-500 transition-colors duration-300"
            />
          </svg>
        ))}
      </div>
      
      <div className="flex flex-col justify-center">
        <div className="flex items-baseline gap-1">
          <span className="text-2xl font-black tracking-tighter text-white leading-none">CAIO</span>
          <span className="text-2xl font-black tracking-tighter text-blue-500 leading-none">CUTRIM</span>
        </div>
        <div className="h-1 w-0 group-hover:w-full bg-orange-500 transition-all duration-500 mt-1"></div>
        <span className="text-[8px] font-black tracking-[0.4em] text-slate-500 uppercase mt-1">
          Especialista Tech
        </span>
      </div>
    </div>
  );
};

export default Logo;

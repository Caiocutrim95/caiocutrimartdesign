
import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-20 px-4">
      <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">
        {title}
      </h2>
      <div className="w-24 h-2 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-8"></div>
      {subtitle && (
        <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;

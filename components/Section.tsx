import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ id, title, icon, children, className = "" }) => {
  return (
    <section id={id} className={`scroll-mt-24 ${className}`}>
      <div className="flex items-center gap-3 mb-8">
        {icon && <div className="text-primary-400">{icon}</div>}
        <h2 className="text-2xl font-bold text-white tracking-tight">
          {title}
        </h2>
        <div className="h-px bg-white/10 flex-1 ml-4"></div>
      </div>
      {children}
    </section>
  );
};

export default Section;
import React from 'react';

interface StatCardProps {
  value: string;
  label: string;
  subLabel?: string;
  icon: React.ReactNode;
}

const StatCard: React.FC<StatCardProps> = ({ value, label, subLabel, icon }) => {
  return (
    <div className="bg-slate-900/50 border border-white/5 rounded-xl p-6 flex flex-col items-center text-center hover:border-primary-500/30 hover:bg-slate-800/50 transition-all duration-300 group">
      <div className="mb-3 p-3 rounded-lg bg-slate-950 border border-white/5 text-primary-400 group-hover:text-primary-300 group-hover:scale-110 transition-all">
        {icon}
      </div>
      <div className="text-4xl font-bold text-white mb-1 tracking-tight">
        {value}
      </div>
      <div className="text-sm font-medium text-slate-300 mb-1">
        {label}
      </div>
      {subLabel && (
        <div className="text-xs text-slate-500 font-mono">
          {subLabel}
        </div>
      )}
    </div>
  );
};

export default StatCard;
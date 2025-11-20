import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts';
import { KeywordData, SentimentData } from '../types';

interface KeywordChartProps {
  data: KeywordData[];
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-slate-800 border border-slate-700 p-3 rounded shadow-xl">
        <p className="text-white font-medium">{label}</p>
        <p className="text-primary-400 text-sm">频率: {payload[0].value}次</p>
      </div>
    );
  }
  return null;
};

export const KeywordBarChart: React.FC<KeywordChartProps> = ({ data }) => {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} layout="vertical" margin={{ top: 5, right: 30, left: 40, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#334155" horizontal={false} />
          <XAxis type="number" stroke="#94a3b8" fontSize={12} />
          <YAxis 
            type="category" 
            dataKey="name" 
            stroke="#f8fafc" 
            fontSize={12} 
            width={100}
            tick={{ fill: '#e2e8f0' }}
          />
          <Tooltip content={<CustomTooltip />} cursor={{fill: 'rgba(255,255,255,0.05)'}} />
          <Bar dataKey="count" radius={[0, 4, 4, 0]}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

interface SentimentPieChartProps {
  data: SentimentData[];
}

export const SentimentPieChart: React.FC<SentimentPieChartProps> = ({ data }) => {
  return (
    <div className="h-[300px] w-full relative">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={100}
            paddingAngle={5}
            dataKey="value"
            stroke="none"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip 
            contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', color: '#fff' }} 
            itemStyle={{ color: '#fff' }}
          />
        </PieChart>
      </ResponsiveContainer>
      
      {/* Legend */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-4 flex-wrap text-xs">
        {data.map((item, idx) => (
          <div key={idx} className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
            <span className="text-slate-300">{item.name} <span className="font-bold">{item.value}%</span></span>
          </div>
        ))}
      </div>
    </div>
  );
};
import React from 'react';
import { StatItem } from '../types';

const stats: StatItem[] = [
  { id: '1', value: '20', label: 'Years Experience' },
  { id: '2', value: '891K', label: 'm² Managed Area' },
  { id: '3', value: '15+', label: 'Large Scale Projects' },
  { id: '4', value: '8', label: 'Awards & Certificates' },
];

const Stats: React.FC = () => {
  return (
    <section className="py-20 bg-brand-navy text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center divide-x divide-white/10">
          {stats.map((stat) => (
            <div key={stat.id} className="p-4">
              <div className="text-4xl md:text-5xl font-bold text-brand-yellow mb-2">{stat.value}</div>
              <div className="text-sm md:text-base font-medium text-gray-300 tracking-wider uppercase">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
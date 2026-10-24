import React from 'react';
import { IMPACT_STATS } from '../data/portfolioData';

export const ImpactSection: React.FC = () => {
  return (
    <section id="impact" className="py-16 bg-[#171923] border-y border-[#383C56]/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-[#383C56]/50">
          {IMPACT_STATS.map((stat, idx) => (
            <div
              key={stat.id}
              className={`flex flex-col items-center sm:items-start text-center sm:text-left ${
                idx > 0 ? 'pt-6 sm:pt-0 sm:pl-8' : ''
              }`}
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-[#FF5F64] tracking-tight tabular-nums">
                {stat.value}
              </div>
              <h3 className="mt-2 text-base sm:text-lg font-semibold text-[#F5F5F7] font-heading">
                {stat.label}
              </h3>
              <p className="mt-1 text-xs text-[#B9BBC9] leading-relaxed max-w-xs">
                {stat.subtext}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import {
  Workflow,
  Cpu,
  Network,
  BarChart3,
  GraduationCap,
  CheckCircle2,
  LucideIcon
} from 'lucide-react';
import { EXPERTISE_CARDS } from '../data/portfolioData';

const iconMap: Record<string, LucideIcon> = {
  Workflow,
  Cpu,
  Network,
  BarChart3,
  GraduationCap,
  CheckCircle2,
};

export const ExpertiseSection: React.FC = () => {
  return (
    <section id="expertise" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#202234] relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF5F64] font-mono">
            WHAT I BRING
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-[#F5F5F7] tracking-tight">
            Expertise & Capabilities
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#B9BBC9] leading-relaxed">
            Combining technical understanding with structured program execution and industry collaboration.
          </p>
        </div>

        {/* 6 Outlined Cards Grid (3 per row on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {EXPERTISE_CARDS.map((card) => {
            const Icon = iconMap[card.iconName] || Workflow;
            return (
              <div
                key={card.id}
                className="group relative p-7 rounded-2xl bg-[#24273B] border border-[#704950]/50 hover:border-[#FF5F64] transition-all duration-300 transform hover:-translate-y-1.5 hover:shadow-[0_8px_30px_rgba(255,95,100,0.15)] flex flex-col justify-between"
              >
                {/* Top Row: Icon and Editorial Index Number */}
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#171923] border border-[#383C56] group-hover:border-[#FF5F64]/60 flex items-center justify-center transition-colors">
                      <Icon className="w-6 h-6 text-[#FF5F64] group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <span className="text-sm font-mono font-bold text-[#B9BBC9]/50 group-hover:text-[#FF5F64] transition-colors">
                      {card.number}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold font-heading text-[#F5F5F7] group-hover:text-[#FF8585] transition-colors mb-3">
                    {card.title}
                  </h3>
                  <p className="text-sm text-[#B9BBC9] leading-relaxed">
                    {card.description}
                  </p>
                </div>

                {/* Sub-skill bullet points */}
                <div className="mt-6 pt-5 border-t border-[#383C56]/60">
                  <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-[#B9BBC9]">
                    {card.skills.map((skill, sIdx) => (
                      <React.Fragment key={skill}>
                        <span className="group-hover:text-[#F5F5F7] transition-colors font-medium">
                          {skill}
                        </span>
                        {sIdx < card.skills.length - 1 && (
                          <span className="text-[#704950]" aria-hidden="true">·</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

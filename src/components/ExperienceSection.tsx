import React from 'react';
import { Calendar, MapPin, CheckCircle, Award } from 'lucide-react';
import { EXPERIENCE_DATA } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#171923] relative">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF5F64] font-mono">
            MY JOURNEY
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-[#F5F5F7] tracking-tight">
            Professional Experience
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#B9BBC9]">
            Structured execution and stakeholder leadership across industry-aligned technology initiatives.
          </p>
        </div>

        {/* Timeline Structure */}
        <div className="relative pl-6 sm:pl-10 border-l-2 border-[#FF5F64]/40 space-y-12">
          {EXPERIENCE_DATA.map((exp) => (
            <div key={exp.id} className="relative group">
              {/* Timeline Node on Left */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-[#FF5F64] border-4 border-[#171923] shadow-[0_0_12px_rgba(255,95,100,0.8)]" />

              {/* Main Experience Card */}
              <div className="p-6 sm:p-8 rounded-2xl bg-[#24273B] border border-[#704950]/50 hover:border-[#FF5F64] transition-all duration-300 shadow-xl">
                {/* Header Information */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-[#383C56]/60">
                  <div>
                    <h3 className="text-2xl font-bold font-heading text-[#F5F5F7] group-hover:text-[#FF8585] transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-base font-semibold text-[#FF5F64] mt-0.5">
                      {exp.organization}
                    </p>
                  </div>

                  <div className="flex flex-wrap sm:flex-col items-start sm:items-end gap-2 text-xs font-mono text-[#B9BBC9]">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#171923] border border-[#383C56]">
                      <Calendar className="w-3.5 h-3.5 text-[#FF5F64]" />
                      <span className="font-semibold text-[#F5F5F7]">{exp.period}</span>
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-[11px] text-[#B9BBC9]/80">
                      <MapPin className="w-3 h-3 text-[#FF5F64]" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Role Description */}
                <p className="mt-5 text-sm sm:text-base text-[#B9BBC9] leading-relaxed">
                  {exp.description}
                </p>

                {/* Key Achievements Bulleted List */}
                <div className="mt-6">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#F5F5F7] font-semibold mb-3 flex items-center gap-2">
                    <Award className="w-3.5 h-3.5 text-[#FF5F64]" />
                    <span>Key Responsibilities & Deliverables</span>
                  </h4>
                  <ul className="space-y-3">
                    {exp.achievements.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#B9BBC9]">
                        <CheckCircle className="w-4 h-4 text-[#FF5F64] shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Core Competencies Tested */}
                <div className="mt-8 pt-5 border-t border-[#383C56]/60">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#B9BBC9] block mb-2.5">
                    Core Competencies Demonstrated:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {exp.competencies.map((comp) => (
                      <span
                        key={comp}
                        className="px-2.5 py-1 rounded-md text-xs font-medium text-[#F5F5F7] bg-[#171923] border border-[#383C56]"
                      >
                        {comp}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

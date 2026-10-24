import React from 'react';
import { GraduationCap, Award, BookOpen, Calendar } from 'lucide-react';
import { EDUCATION_DATA } from '../data/portfolioData';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#171923] relative">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF5F64] font-mono">
            ACADEMIC BACKGROUND
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-[#F5F5F7] tracking-tight">
            Education
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#B9BBC9]">
            Formal qualifications in signal processing, VLSI design, and telecommunications.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-[#FF5F64]/40 space-y-10">
          {EDUCATION_DATA.map((item) => (
            <div key={item.id} className="relative group">
              {/* Timeline Indicator */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#FF5F64] border-4 border-[#171923] shadow-[0_0_10px_rgba(255,95,100,0.7)]" />

              {/* Education Card */}
              <div className="p-6 sm:p-7 rounded-2xl bg-[#24273B] border border-[#704950]/50 hover:border-[#FF5F64] transition-all duration-300 shadow-lg">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 pb-4 border-b border-[#383C56]/60">
                  <div>
                    <h3 className="text-xl font-bold font-heading text-[#F5F5F7] group-hover:text-[#FF8585] transition-colors">
                      {item.degree}
                    </h3>
                    <p className="text-sm font-semibold text-[#FF5F64] mt-0.5">
                      {item.institution}
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono px-2.5 py-1 rounded bg-[#171923] border border-[#383C56] text-[#B9BBC9]">
                      <Calendar className="w-3.5 h-3.5 text-[#FF5F64]" />
                      <span>{item.period}</span>
                    </span>
                    <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-[#FF5F64]/15 border border-[#FF5F64]/40 text-[#FF8585]">
                      {item.grade}
                    </span>
                  </div>
                </div>

                {item.highlights && item.highlights.length > 0 && (
                  <ul className="mt-4 space-y-1.5 text-xs sm:text-sm text-[#B9BBC9]">
                    {item.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2">
                        <span className="text-[#FF5F64] mt-0.5">•</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

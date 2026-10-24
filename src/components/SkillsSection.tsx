import React from 'react';
import { Terminal, Cpu, Award } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

const categoryIcons = [Terminal, Cpu, Award];

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#171923] relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF5F64] font-mono">
            MY TOOLKIT
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-[#F5F5F7] tracking-tight">
            Technical Skills
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#B9BBC9]">
            Directly mapped to verified proficiencies in software, hardware modeling, and program operations.
          </p>
        </div>

        {/* 3 Skill Category Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {SKILL_CATEGORIES.map((cat, idx) => {
            const Icon = categoryIcons[idx] || Terminal;
            return (
              <div
                key={cat.title}
                className="p-6 sm:p-7 rounded-2xl bg-[#24273B] border border-[#704950]/50 hover:border-[#FF5F64]/70 transition-all duration-300 shadow-xl flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-4 pb-4 border-b border-[#383C56]/60">
                    <div className="w-10 h-10 rounded-xl bg-[#171923] border border-[#383C56] flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[#FF5F64]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold font-heading text-[#F5F5F7]">
                        {cat.title}
                      </h3>
                      {cat.description && (
                        <p className="text-[11px] text-[#B9BBC9] mt-0.5">
                          {cat.description}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-3 mt-4">
                    {cat.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="p-3 rounded-xl bg-[#171923]/80 border border-[#383C56]/80 flex flex-col gap-1 transition-colors hover:border-[#FF5F64]/40"
                      >
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-sm font-semibold text-[#F5F5F7]">
                            {skill.name}
                          </span>
                          {skill.proficiency && (
                            <span
                              className={`text-[11px] font-mono px-2 py-0.5 rounded ${
                                skill.proficiency === 'Good'
                                  ? 'bg-[#FF5F64]/20 text-[#FF8585] border border-[#FF5F64]/40'
                                  : skill.proficiency === 'Medium' || skill.proficiency === 'Intermediate'
                                  ? 'bg-[#383C56]/80 text-[#F5F5F7] border border-[#383C56]'
                                  : 'bg-[#171923] text-[#B9BBC9] border border-[#383C56]'
                              }`}
                            >
                              {skill.proficiency}
                            </span>
                          )}
                        </div>
                        {skill.note && (
                          <span className="text-[11px] text-[#B9BBC9]/80 leading-normal">
                            {skill.note}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-3 text-[11px] font-mono text-[#B9BBC9]/60 text-right">
                  Verified via CV records
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

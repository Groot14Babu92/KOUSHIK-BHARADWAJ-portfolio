import React from 'react';
import { Download, MapPin, Briefcase, GraduationCap, Globe, Cpu } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#202234] relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Authentic Portrait with Architectural Frame & Coral Edge Accent */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md group">
              {/* Outer decorative coral hairline frame */}
              <div className="absolute -inset-2.5 rounded-2xl border border-[#FF5F64]/30 -rotate-1 group-hover:rotate-0 transition-transform duration-300 pointer-events-none" />
              
              {/* Main image container */}
              <div className="relative rounded-2xl overflow-hidden bg-[#24273B] border border-[#383C56] shadow-2xl">
                <img
                  src={PERSONAL_INFO.profilePhotoPath}
                  alt="Koushik Bharadwaj - Project Engineer"
                  className="w-full h-[460px] sm:h-[520px] object-cover object-[center_18%] filter saturate-[0.95] contrast-[1.02] group-hover:scale-[1.02] transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />

                {/* Subtle dark gradient scrim at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#171923] via-transparent to-transparent opacity-80" />

                {/* Left vertical coral accent line */}
                <div className="absolute top-0 bottom-0 left-0 w-1.5 bg-[#FF5F64]" />

                {/* Floating caption chip on photo */}
                <div className="absolute bottom-4 left-5 right-5 p-3 rounded-xl bg-[#171923]/90 backdrop-blur-md border border-[#383C56] flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold text-[#F5F5F7] font-heading">
                      Koushik Bharadwaj
                    </p>
                    <p className="text-[11px] text-[#B9BBC9]">
                      Project Engineer · E&ICT Academy, IIT Guwahati
                    </p>
                  </div>
                  <div className="w-2 h-2 rounded-full bg-[#FF5F64] shadow-[0_0_8px_#FF5F64]" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Biography & Structured Metadata Panel */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF5F64] font-mono">
                DISCOVER
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-[#F5F5F7] tracking-tight">
                About Me
              </h2>
            </div>

            {/* Biography Copy */}
            <div className="space-y-4 text-sm sm:text-base text-[#B9BBC9] leading-relaxed">
              <p>
                I am <span className="text-[#F5F5F7] font-medium">Koushik Bharadwaj</span>, an Electronics Engineer with an M.Tech in Signal Processing and VLSI Design. I currently work as a <span className="text-[#F5F5F7] font-medium">Project Engineer at E&ICT Academy, IIT Guwahati</span>, where I contribute to the planning, coordination, and execution of industry-aligned technical training programs.
              </p>
              <p>
                My professional experience includes program management, stakeholder coordination, curriculum development, performance monitoring, quality governance, and collaboration with industry partners. I have also contributed to semiconductor-focused curriculum development and technical initiatives designed to strengthen industry-oriented learning.
              </p>
              <p>
                I am interested in the intersection of engineering, emerging technologies, program leadership, and operational excellence.
              </p>
            </div>

            {/* Bordered Information Panel */}
            <div className="mt-6 p-5 sm:p-6 rounded-2xl bg-[#24273B] border border-[#704950]/50 shadow-md">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <Briefcase className="w-4 h-4 text-[#FF5F64] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#B9BBC9] block text-[11px] uppercase tracking-wider font-mono">Current Role</span>
                    <span className="text-[#F5F5F7] font-semibold">{PERSONAL_INFO.role}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-4 h-4 text-[#FF5F64] shrink-0 mt-0.5 flex items-center justify-center font-bold text-xs">🏛️</div>
                  <div>
                    <span className="text-[#B9BBC9] block text-[11px] uppercase tracking-wider font-mono">Organization</span>
                    <span className="text-[#F5F5F7] font-semibold">{PERSONAL_INFO.organization}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <GraduationCap className="w-4 h-4 text-[#FF5F64] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#B9BBC9] block text-[11px] uppercase tracking-wider font-mono">Education</span>
                    <span className="text-[#F5F5F7] font-semibold">{PERSONAL_INFO.educationSummary}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Cpu className="w-4 h-4 text-[#FF5F64] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#B9BBC9] block text-[11px] uppercase tracking-wider font-mono">Engineering Background</span>
                    <span className="text-[#F5F5F7] font-semibold">{PERSONAL_INFO.engineeringBackground}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#FF5F64] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#B9BBC9] block text-[11px] uppercase tracking-wider font-mono">Location</span>
                    <span className="text-[#F5F5F7] font-semibold">{PERSONAL_INFO.location}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Globe className="w-4 h-4 text-[#FF5F64] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#B9BBC9] block text-[11px] uppercase tracking-wider font-mono">Languages</span>
                    <span className="text-[#F5F5F7] font-semibold">{PERSONAL_INFO.languages.join(', ')}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA & Motto */}
            <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-4">
              <a
                href={PERSONAL_INFO.cvPdfPath}
                download="Koushik_Bharadwaj_CV.pdf"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#FF5F64] hover:bg-[#FF8585] rounded-xl transition-all duration-200 shadow-md hover:shadow-lg w-full sm:w-auto"
              >
                <Download className="w-4 h-4" />
                <span>Download My CV</span>
              </a>

              <p className="text-xs sm:text-sm text-[#B9BBC9] italic">
                "{PERSONAL_INFO.motto}"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

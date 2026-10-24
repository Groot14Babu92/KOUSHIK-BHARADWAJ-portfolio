import React, { useState } from 'react';
import { Microscope, FileText, ExternalLink, Sparkles, X, Check } from 'lucide-react';
import { RESEARCH_DATA } from '../data/portfolioData';

export const ResearchSection: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [copiedCitation, setCopiedCitation] = useState(false);

  const citationText = `Bharadwaj, K. "GaN-Based Gate Injection Transistors: Current Collapse Reduction and Breakdown Voltage Improvement." Presented at the 32nd Conference on VLSI Design (VLSID 2019) & 18th International Conference on Embedded Systems (ICES 2019).`;

  const copyCitation = () => {
    navigator.clipboard.writeText(citationText);
    setCopiedCitation(true);
    setTimeout(() => setCopiedCitation(false), 2500);
  };

  return (
    <section id="research" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#202234] relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF5F64] font-mono">
            RESEARCH & INNOVATION
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-[#F5F5F7] tracking-tight">
            Research & Publications
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#B9BBC9] leading-relaxed">
            My research interests include semiconductor devices, VLSI technology, and improving device performance through modeling and design-oriented analysis.
          </p>
        </div>

        {/* Featured Research Card with Semiconductor Wafer Backdrop */}
        <div className="relative rounded-3xl overflow-hidden border border-[#704950] bg-[#24273B] shadow-2xl">
          {/* Subtle Wafer Background Image */}
          <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
            <img
              src="/src/assets/images/semiconductor_circuit_wafer_1792816788878.jpg"
              alt="Silicon Wafer Circuitry"
              className="w-full h-full object-cover object-center filter saturate-150"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#24273B] via-[#24273B]/95 to-[#24273B]/80" />
          </div>

          <div className="relative z-10 p-7 sm:p-10 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Research Content */}
              <div className="lg:col-span-8 space-y-5">
                <div className="flex items-center gap-2 text-xs font-mono text-[#FF5F64]">
                  <Microscope className="w-4 h-4" />
                  <span className="uppercase tracking-wider font-semibold">Semiconductor Physics & TCAD</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold font-heading text-[#F5F5F7] leading-snug">
                  {RESEARCH_DATA.title}: {RESEARCH_DATA.topic}
                </h3>

                <p className="text-sm sm:text-base text-[#B9BBC9] leading-relaxed">
                  {RESEARCH_DATA.description}
                </p>

                {/* Conference Presentations */}
                <div className="pt-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#F5F5F7] font-semibold block mb-3">
                    Peer-Reviewed Conference Presentations:
                  </span>
                  <div className="space-y-2">
                    {RESEARCH_DATA.conferences.map((conf, cIdx) => (
                      <div
                        key={cIdx}
                        className="flex items-start gap-3 p-3 rounded-xl bg-[#171923]/90 border border-[#383C56]"
                      >
                        <span className="w-2 h-2 rounded-full bg-[#FF5F64] mt-1.5 shrink-0" />
                        <div className="flex-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs sm:text-sm">
                          <span className="font-semibold text-[#F5F5F7]">{conf.name}</span>
                          <span className="font-mono text-[#FF5F64] font-medium shrink-0">{conf.year}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Research Capabilities */}
                <div className="pt-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#B9BBC9] block mb-2">
                    Research Capabilities:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {RESEARCH_DATA.capabilities.map((cap) => (
                      <span
                        key={cap}
                        className="px-2.5 py-1 rounded-md text-xs font-medium text-[#F5F5F7] bg-[#171923] border border-[#383C56]"
                      >
                        {cap}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Action Card & Overview */}
              <div className="lg:col-span-4 flex flex-col gap-4 p-6 rounded-2xl bg-[#171923]/95 border border-[#383C56] shadow-lg">
                <div className="flex items-center gap-3 pb-4 border-b border-[#383C56]">
                  <FileText className="w-5 h-5 text-[#FF5F64]" />
                  <span className="text-sm font-semibold font-heading text-[#F5F5F7]">Conference Paper</span>
                </div>

                <div className="space-y-3 text-xs text-[#B9BBC9]">
                  <p>
                    Presented at the 32nd VLSI Design Conference & 18th International Conference on Embedded Systems (2019).
                  </p>
                  <p className="p-2.5 rounded-lg bg-[#24273B] border border-[#383C56] text-[11px] leading-relaxed">
                    Detailed analysis of GaN heterostructures, 2DEG carrier modulation, and field-plate optimization.
                  </p>
                </div>

                <button
                  onClick={() => setModalOpen(true)}
                  className="mt-2 w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-bold uppercase tracking-wider text-white bg-[#FF5F64] hover:bg-[#FF8585] rounded-xl transition-all duration-200 shadow-md"
                >
                  <FileText className="w-4 h-4" />
                  <span>View Research Paper</span>
                </button>

                <p className="text-[11px] text-center text-[#B9BBC9]/70">
                  Click to view abstract, TCAD setup & citation details
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Research Paper Abstract & Citation Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-[#24273B] border border-[#FF5F64]/40 rounded-2xl p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh]">
            {/* Close Button */}
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-lg text-[#B9BBC9] hover:text-[#F5F5F7] hover:bg-[#171923] transition-colors"
              aria-label="Close paper modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="pr-8">
              <span className="text-xs font-mono uppercase tracking-wider text-[#FF5F64] font-semibold">
                Conference Presentation · 2019
              </span>
              <h3 className="mt-1 text-xl sm:text-2xl font-bold font-heading text-[#F5F5F7]">
                {RESEARCH_DATA.title}: {RESEARCH_DATA.topic}
              </h3>
              <p className="mt-1 text-xs text-[#B9BBC9]">
                Presented at 32nd Conference on VLSI Design & 18th International Conference on Embedded Systems
              </p>
            </div>

            {/* Abstract */}
            <div className="mt-6 space-y-4">
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#F5F5F7] font-semibold mb-2">
                  Abstract Overview
                </h4>
                <p className="text-xs sm:text-sm text-[#B9BBC9] leading-relaxed bg-[#171923] p-4 rounded-xl border border-[#383C56]">
                  {RESEARCH_DATA.abstract}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#F5F5F7] font-semibold mb-2">
                  TCAD Device Simulation Methodology
                </h4>
                <p className="text-xs sm:text-sm text-[#B9BBC9] leading-relaxed bg-[#171923] p-4 rounded-xl border border-[#383C56]">
                  {RESEARCH_DATA.tcadDetails}
                </p>
              </div>

              {/* Citation Copy Block */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#F5F5F7] font-semibold">
                    Conference Citation
                  </h4>
                  <button
                    onClick={copyCitation}
                    className="inline-flex items-center gap-1.5 text-xs text-[#FF5F64] hover:text-[#FF8585] transition-colors font-mono"
                  >
                    {copiedCitation ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <span>Copy Citation</span>
                      </>
                    )}
                  </button>
                </div>
                <div className="p-3.5 rounded-xl bg-[#171923] border border-[#383C56] font-mono text-xs text-[#B9BBC9] leading-relaxed">
                  {citationText}
                </div>
              </div>

              {/* Note on official URL placeholder */}
              <div className="p-3.5 rounded-xl bg-[#202234] border border-[#704950]/50 text-xs text-[#B9BBC9]">
                <p className="text-[#F5F5F7] font-medium mb-1">
                  Note on Full Text / Preprint Access:
                </p>
                <p>
                  Official digital library link is linked here once the canonical DOI / repository URL is indexed. For preprints or technical inquiries, feel free to reach out directly via email.
                </p>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="mt-6 pt-4 border-t border-[#383C56] flex flex-col sm:flex-row gap-3">
              <a
                href="mailto:koushikbharadwaj92@gmail.com?subject=Inquiry%20regarding%20GaN-GIT%20Research%20Paper"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#FF5F64] hover:bg-[#FF8585] rounded-xl transition-colors"
              >
                <span>Request Paper Details via Email</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <button
                onClick={() => setModalOpen(false)}
                className="px-5 py-2.5 text-xs font-semibold text-[#B9BBC9] hover:text-[#F5F5F7] bg-[#171923] rounded-xl border border-[#383C56] transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

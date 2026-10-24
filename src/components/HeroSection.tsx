import React from 'react';
import { Download, ChevronDown, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const HeroSection: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Mountain Image with Dark Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src={PERSONAL_INFO.heroBgPath}
          alt="Atmospheric Mountain Backdrop"
          className="w-full h-full object-cover object-center scale-105 motion-safe:animate-pulse-slow"
          referrerPolicy="no-referrer"
        />
        {/* Layered cinematic dark gradient overlays */}
        <div className="absolute inset-0 bg-[#171923]/75 backdrop-blur-[1px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#171923]/60 via-[#202234]/80 to-[#202234]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,95,100,0.08)_0%,transparent_70%)]" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* Profile Photograph in Circular Frame with Coral Accent */}
        <div className="relative mb-6 group">
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#FF5F64] via-[#FF8585] to-[#704950] opacity-75 blur-sm group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full p-1 bg-[#171923] border-2 border-[#FF5F64] shadow-2xl overflow-hidden ring-4 ring-[#202234]/80">
            <img
              src={PERSONAL_INFO.profilePhotoPath}
              alt="Koushik Bharadwaj Portrait"
              className="w-full h-full object-cover object-[center_12%] rounded-full transition-transform duration-500 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Institutional Affiliation Badge */}
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[#171923]/95 border border-[#FF5F64]/40 shadow-lg flex items-center gap-1.5 whitespace-nowrap">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF5F64]" />
            <span className="text-[11px] font-medium text-[#F5F5F7] tracking-wider uppercase font-mono">
              E&ICT Academy · IITG
            </span>
          </div>
        </div>

        {/* Large Bold Coral-Red Name Heading */}
        <h1 className="mt-4 text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-heading tracking-tight text-[#FF5F64] drop-shadow-md">
          {PERSONAL_INFO.name.toUpperCase()}
        </h1>

        {/* Professional Tagline */}
        <p className="mt-4 text-base sm:text-xl md:text-2xl font-semibold text-[#F5F5F7] tracking-wide">
          {PERSONAL_INFO.tagline}
        </p>

        {/* Short Mission / Value Proposition Description */}
        <p className="mt-3 text-sm sm:text-base md:text-lg text-[#B9BBC9] max-w-2xl leading-relaxed">
          {PERSONAL_INFO.shortDescription}
        </p>

        {/* Call to Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <button
            onClick={() => scrollTo('experience')}
            className="w-full sm:w-auto px-7 py-3 text-sm font-semibold text-white bg-[#FF5F64] hover:bg-[#FF8585] rounded-xl transition-all duration-200 shadow-[0_4px_20px_rgba(255,95,100,0.35)] hover:shadow-[0_6px_25px_rgba(255,95,100,0.5)] transform hover:-translate-y-0.5"
          >
            Explore My Work
          </button>

          <a
            href={PERSONAL_INFO.cvPdfPath}
            download="Koushik_Bharadwaj_CV.pdf"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-[#F5F5F7] bg-[#24273B]/90 hover:bg-[#2e324c] border border-[#704950] hover:border-[#FF5F64] rounded-xl transition-all duration-200 shadow-sm transform hover:-translate-y-0.5"
          >
            <Download className="w-4 h-4 text-[#FF5F64]" />
            <span>Download My CV</span>
          </a>
        </div>
      </div>

      {/* Understated Scroll Indicator at Bottom-Left */}
      <div className="absolute bottom-8 left-6 sm:left-12 z-10 flex items-center gap-3 text-xs tracking-widest text-[#B9BBC9] uppercase font-mono">
        <button
          onClick={() => scrollTo('about')}
          className="flex items-center gap-2 group hover:text-[#FF5F64] transition-colors focus:outline-none"
          aria-label="Scroll to About section"
        >
          <div className="w-8 h-[1px] bg-[#383C56] group-hover:bg-[#FF5F64] transition-colors" />
          <span>Scroll Down</span>
          <ChevronDown className="w-3.5 h-3.5 text-[#FF5F64] motion-safe:animate-bounce" />
        </button>
      </div>

      {/* Bottom subtle edge blend */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#202234] to-transparent pointer-events-none" />
    </section>
  );
};

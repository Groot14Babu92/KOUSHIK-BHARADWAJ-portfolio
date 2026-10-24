import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Download, FileText, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  activeSection: string;
}

const PRIMARY_NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Experience', href: '#experience' },
  { label: 'Research', href: '#research' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#171923]/95 backdrop-blur-md border-b border-[#383C56]/80 shadow-2xl py-3.5'
          : 'bg-[#171923]/75 backdrop-blur-md border-b border-[#383C56]/40 shadow-md py-4.5'
      }`}
      aria-label="Main Navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6 md:gap-8">
          {/* Brand Wordmark (Zone 1) */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="text-xl sm:text-2xl font-bold font-heading tracking-tight text-[#F5F5F7] whitespace-nowrap shrink-0 group flex items-center select-none"
            title="Koushik Bharadwaj Portfolio"
          >
            <span className="tracking-tight">Koushik</span>
            <span className="text-[#FF5F64] text-2xl sm:text-3xl font-extrabold leading-none inline-block transition-transform duration-300 group-hover:scale-125 group-hover:translate-x-0.5">
              .
            </span>
          </a>

          {/* Desktop Navigation Links (Zone 2) */}
          <div className="hidden md:flex items-center gap-5 lg:gap-8 text-xs lg:text-sm font-medium text-[#B9BBC9]">
            {PRIMARY_NAV_LINKS.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`whitespace-nowrap shrink-0 transition-colors py-1 relative ${
                    isActive
                      ? 'text-[#F5F5F7] font-semibold'
                      : 'hover:text-[#F5F5F7]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#FF5F64] rounded-full shadow-[0_0_8px_#FF5F64]" />
                  )}
                </a>
              );
            })}
          </div>

          {/* Primary Action Buttons (Zone 3) */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href={PERSONAL_INFO.cvPdfPath}
              download="Koushik_Bharadwaj_CV.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-[#F5F5F7] bg-[#24273B] hover:bg-[#383C56] border border-[#383C56] hover:border-[#FF5F64] rounded-xl transition-all duration-200 shadow-sm"
              title="Download Koushik's official CV PDF"
            >
              <Download className="w-3.5 h-3.5 text-[#FF5F64]" />
              <span className="whitespace-nowrap">CV</span>
            </a>

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#FF5F64] hover:text-white border-2 border-[#FF5F64] hover:bg-[#FF5F64] rounded-xl transition-all duration-200 shadow-[0_2px_10px_rgba(255,95,100,0.2)] hover:shadow-[0_4px_15px_rgba(255,95,100,0.4)] whitespace-nowrap shrink-0"
            >
              <span>Let's Connect</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Navigation Trigger & Compact CTA */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="px-2.5 py-1.5 text-xs font-bold text-[#FF5F64] border border-[#FF5F64] rounded-lg"
            >
              Connect
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#F5F5F7] hover:text-[#FF5F64] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5F64] rounded-lg bg-[#24273B] border border-[#383C56]"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#FF5F64]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#171923]/98 border-b border-[#383C56] px-4 pt-3 pb-6 space-y-3 backdrop-blur-2xl shadow-2xl animate-in slide-in-from-top-2 duration-200">
          <div className="grid grid-cols-2 gap-2 pt-2 pb-4 border-b border-[#383C56]/60">
            {PRIMARY_NAV_LINKS.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-3 py-2 text-sm rounded-xl transition-colors ${
                    isActive
                      ? 'bg-[#FF5F64]/15 text-[#FF5F64] font-semibold border border-[#FF5F64]/30'
                      : 'text-[#B9BBC9] hover:text-[#F5F5F7] hover:bg-[#24273B]'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          <div className="flex flex-col gap-2 pt-1">
            <a
              href={PERSONAL_INFO.cvPdfPath}
              download="Koushik_Bharadwaj_CV.pdf"
              className="flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-[#F5F5F7] bg-[#24273B] hover:bg-[#383C56] border border-[#383C56] rounded-xl transition-colors"
            >
              <Download className="w-4 h-4 text-[#FF5F64]" />
              <span>Download Official CV (PDF)</span>
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#FF5F64] hover:bg-[#FF8585] rounded-xl transition-colors shadow-md"
            >
              <span>Let's Connect</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

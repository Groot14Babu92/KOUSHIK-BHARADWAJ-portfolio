import React from 'react';
import { ArrowUp, Mail, Download, MapPin, Phone, ShieldCheck, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO, NAV_ITEMS } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-[#171923] border-t-2 border-[#383C56] pt-16 pb-12 px-4 sm:px-6 lg:px-8 text-[#B9BBC9] text-xs relative z-20"
      aria-label="Site Footer"
    >
      <div className="max-w-7xl mx-auto">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#383C56]/60">
          {/* Column 1: Identity & Professional Role */}
          <div className="md:col-span-5 space-y-4">
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="text-2xl sm:text-3xl font-bold font-heading text-[#F5F5F7] tracking-tight inline-flex items-center group"
            >
              <span>Koushik</span>
              <span className="text-[#FF5F64] text-3xl font-extrabold group-hover:scale-125 transition-transform inline-block">
                .
              </span>
            </a>

            <div>
              <p className="text-sm font-semibold text-[#F5F5F7]">
                {PERSONAL_INFO.name}
              </p>
              <p className="text-xs font-medium text-[#FF5F64] mt-0.5">
                {PERSONAL_INFO.role} · {PERSONAL_INFO.organization}
              </p>
            </div>

            <p className="text-xs text-[#B9BBC9] max-w-sm leading-relaxed">
              Electronics Engineer with an M.Tech in Signal Processing & VLSI Design. Specializing in technical program management, semiconductor curriculum development, and quality governance.
            </p>

            <div className="pt-1">
              <span className="inline-block px-3 py-1 rounded-full bg-[#24273B] border border-[#704950]/60 text-[#FF8585] text-[11px] font-mono font-medium">
                {PERSONAL_INFO.footerClosing}
              </span>
            </div>
          </div>

          {/* Column 2: Navigation Directory */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-[#F5F5F7] font-bold block">
              Navigation
            </span>
            <ul className="space-y-1.5">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="hover:text-[#FF5F64] transition-colors py-0.5 inline-block"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Direct Contact & Resources */}
          <div className="md:col-span-4 space-y-4 flex flex-col justify-between">
            <div className="space-y-2.5">
              <span className="text-xs font-mono uppercase tracking-wider text-[#F5F5F7] font-bold block">
                Direct Contact
              </span>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-2.5 text-xs text-[#F5F5F7] hover:text-[#FF5F64] transition-colors font-mono break-all"
              >
                <Mail className="w-4 h-4 text-[#FF5F64] shrink-0" />
                <span>{PERSONAL_INFO.email}</span>
              </a>

              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="flex items-center gap-2.5 text-xs text-[#F5F5F7] hover:text-[#FF5F64] transition-colors font-mono"
              >
                <Phone className="w-4 h-4 text-[#FF5F64] shrink-0" />
                <span>{PERSONAL_INFO.phone}</span>
              </a>

              <div className="flex items-center gap-2.5 text-xs text-[#B9BBC9]">
                <MapPin className="w-4 h-4 text-[#FF5F64] shrink-0" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
            </div>

            {/* Action Buttons: CV Download & Back to Top */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={PERSONAL_INFO.cvPdfPath}
                download="Koushik_Bharadwaj_CV.pdf"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#24273B] hover:bg-[#383C56] border border-[#383C56] hover:border-[#FF5F64] text-xs font-medium text-[#F5F5F7] transition-all shadow-sm"
              >
                <Download className="w-3.5 h-3.5 text-[#FF5F64]" />
                <span>Download CV</span>
              </a>

              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#24273B] hover:bg-[#FF5F64] hover:text-white border border-[#383C56] text-xs font-medium text-[#B9BBC9] transition-all group shadow-sm"
                aria-label="Scroll back to top of the page"
              >
                <span>Back to Top</span>
                <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Institutional Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#B9BBC9]/75 text-center sm:text-left">
          <p>
            © {currentYear} <span className="text-[#F5F5F7] font-semibold">Koushik Bharadwaj</span>. All rights reserved.
          </p>
          <div className="flex items-center gap-2 max-w-md text-[11px] text-[#B9BBC9]/70">
            <ShieldCheck className="w-3.5 h-3.5 text-[#FF5F64] shrink-0 hidden sm:inline" />
            <p>
              Personal professional portfolio website. Not an official website of or endorsed by IIT Guwahati.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

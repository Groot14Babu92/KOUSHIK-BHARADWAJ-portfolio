import React from 'react';

interface SideNavIndicatorProps {
  activeSection: string;
}

const SECTIONS = [
  { id: 'home', label: 'Home', number: '01' },
  { id: 'about', label: 'About', number: '02' },
  { id: 'impact', label: 'Impact', number: '03' },
  { id: 'expertise', label: 'Expertise', number: '04' },
  { id: 'experience', label: 'Experience', number: '05' },
  { id: 'research', label: 'Research', number: '06' },
  { id: 'skills', label: 'Skills', number: '07' },
  { id: 'projects', label: 'Projects', number: '08' },
  { id: 'education', label: 'Education', number: '09' },
  { id: 'contact', label: 'Contact', number: '10' },
];

export const SideNavIndicator: React.FC<SideNavIndicatorProps> = ({ activeSection }) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <aside
      className="hidden xl:flex fixed right-6 top-1/2 -translate-y-1/2 z-40 flex-col items-end gap-3 pointer-events-auto"
      aria-label="Section quick navigator"
    >
      <div className="flex flex-col items-center gap-2.5 py-3 px-2 rounded-full bg-[#171923]/70 backdrop-blur-md border border-[#383C56]/60 shadow-xl">
        {SECTIONS.map((sec) => {
          const isActive = activeSection === sec.id;
          return (
            <button
              key={sec.id}
              onClick={() => scrollTo(sec.id)}
              className="group relative flex items-center justify-center p-1 focus:outline-none"
              aria-label={`Jump to ${sec.label} section`}
            >
              <div
                className={`transition-all duration-300 rounded-full ${
                  isActive
                    ? 'w-2.5 h-6 bg-[#FF5F64] shadow-[0_0_10px_rgba(255,95,100,0.6)]'
                    : 'w-2 h-2 bg-[#B9BBC9]/40 group-hover:bg-[#FF8585] group-hover:scale-125'
                }`}
              />

              {/* Tooltip on hover */}
              <div className="absolute right-7 px-2.5 py-1 rounded bg-[#24273B] border border-[#383C56] text-xs text-[#F5F5F7] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md font-mono flex items-center gap-1.5">
                <span className="text-[#FF5F64] font-semibold">{sec.number}</span>
                <span>{sec.label}</span>
              </div>
            </button>
          );
        })}
      </div>
    </aside>
  );
};

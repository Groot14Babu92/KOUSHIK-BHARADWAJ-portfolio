import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { SideNavIndicator } from './components/SideNavIndicator';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ImpactSection } from './components/ImpactSection';
import { ExpertiseSection } from './components/ExpertiseSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ResearchSection } from './components/ResearchSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { EducationSection } from './components/EducationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    const sectionIds = [
      'home',
      'about',
      'impact',
      'expertise',
      'experience',
      'research',
      'skills',
      'projects',
      'education',
      'contact'
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#202234] text-[#F5F5F7] relative selection:bg-[#FF5F64] selection:text-white">
      {/* Sticky Navigation */}
      <Navbar activeSection={activeSection} />

      {/* Floating Right-Side Section Navigator (Reference Feature) */}
      <SideNavIndicator activeSection={activeSection} />

      {/* Main Content Sections */}
      <main>
        <HeroSection />
        <AboutSection />
        <ImpactSection />
        <ExpertiseSection />
        <ExperienceSection />
        <ResearchSection />
        <SkillsSection />
        <ProjectsSection />
        <EducationSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

import React, { useState } from 'react';
import {
  Cpu,
  Layers,
  BarChart3,
  Microscope,
  ArrowRight,
  X,
  CheckCircle,
  LucideIcon
} from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { ProjectItem } from '../types';

const iconMap: Record<string, LucideIcon> = {
  Cpu,
  Layers,
  BarChart3,
  Microscope,
};

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const categories = ['all', 'Program Management', 'Curriculum & Industry Alignment', 'Data Analysis & Operations', 'Research & Innovation'];

  const filteredProjects = activeFilter === 'all'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#202234] relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF5F64] font-mono">
              SELECTED WORK
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-[#F5F5F7] tracking-tight">
              Projects & Initiatives
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#B9BBC9] max-w-xl">
              Professional initiatives in semiconductor education, technical program operations, and performance management.
            </p>
          </div>

          {/* Filter tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#171923] rounded-xl border border-[#383C56]">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                  activeFilter === cat
                    ? 'bg-[#FF5F64] text-white shadow-sm'
                    : 'text-[#B9BBC9] hover:text-[#F5F5F7]'
                }`}
              >
                {cat === 'all' ? 'All Initiatives' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => {
            const Icon = iconMap[project.iconName] || Cpu;
            return (
              <div
                key={project.id}
                className="group relative p-7 sm:p-8 rounded-2xl bg-[#24273B] border border-[#704950]/50 hover:border-[#FF5F64] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(255,95,100,0.12)] flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar with Icon and Category Tag */}
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#171923] border border-[#383C56] group-hover:border-[#FF5F64]/50 flex items-center justify-center transition-colors">
                      <Icon className="w-6 h-6 text-[#FF5F64]" />
                    </div>
                    <span className="text-xs font-mono text-[#B9BBC9] bg-[#171923] px-3 py-1 rounded-full border border-[#383C56]">
                      {project.category}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#F5F5F7] group-hover:text-[#FF8585] transition-colors mb-3">
                    {project.title}
                  </h3>
                  <p className="text-sm text-[#B9BBC9] leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Focus Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.focus.map((item) => (
                      <span
                        key={item}
                        className="px-2.5 py-0.5 rounded text-[11px] font-medium text-[#B9BBC9] bg-[#171923] border border-[#383C56]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Action */}
                <div className="pt-4 border-t border-[#383C56]/60 flex items-center justify-between">
                  <span className="text-xs text-[#B9BBC9] font-mono">
                    E&ICT Academy Initiatives
                  </span>
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#FF5F64] hover:text-[#FF8585] transition-colors group-hover:translate-x-0.5"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-[#24273B] border border-[#FF5F64]/40 rounded-2xl p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh]">
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 p-2 rounded-lg text-[#B9BBC9] hover:text-[#F5F5F7] hover:bg-[#171923] transition-colors"
              aria-label="Close project modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="pr-8">
              <span className="text-xs font-mono uppercase tracking-wider text-[#FF5F64] font-semibold">
                {selectedProject.category}
              </span>
              <h3 className="mt-1 text-2xl font-bold font-heading text-[#F5F5F7]">
                {selectedProject.title}
              </h3>
            </div>

            {/* Modal Body */}
            <div className="mt-6 space-y-6 text-sm text-[#B9BBC9]">
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#F5F5F7] font-semibold mb-2">
                  Initiative Overview
                </h4>
                <p className="leading-relaxed bg-[#171923] p-4 rounded-xl border border-[#383C56]">
                  {selectedProject.longDescription}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#F5F5F7] font-semibold mb-2">
                  Key Outcomes & Deliverables
                </h4>
                <div className="space-y-2 bg-[#171923] p-4 rounded-xl border border-[#383C56]">
                  {selectedProject.outcomes.map((outcome, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                      <CheckCircle className="w-4 h-4 text-[#FF5F64] shrink-0 mt-0.5" />
                      <span>{outcome}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#F5F5F7] font-semibold mb-2">
                  Tools & Methodologies Applied
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tools.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-md text-xs font-medium text-[#F5F5F7] bg-[#171923] border border-[#383C56]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="mt-8 pt-4 border-t border-[#383C56] flex justify-end">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-5 py-2.5 text-xs font-semibold text-[#F5F5F7] bg-[#171923] hover:bg-[#383C56] rounded-xl border border-[#383C56] transition-colors"
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

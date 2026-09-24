import React, { useState } from 'react';
import {
  ExternalLink,
  ArrowUpRight,
  X,
  Sparkles,
  Eye,
  Layers,
  CheckCircle2
} from 'lucide-react';
import { PORTFOLIO_DATA, ProjectItem } from '../data/portfolioData';

export const Portfolio: React.FC = () => {
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filterTabs = [
    { key: 'all', label: 'All 6 Projects' },
    { key: 'business', label: 'Luxury Business' },
    { key: 'realestate', label: 'Real Estate' },
    { key: 'creative', label: 'Creative Studio' },
    { key: 'ecommerce', label: 'E-Commerce' },
    { key: 'service', label: 'Professional Service' },
    { key: 'landing', label: 'Landing Pages' }
  ];

  const filteredProjects = PORTFOLIO_DATA.projects.filter((p) => {
    if (activeFilter === 'all') return true;
    return p.categoryKey === activeFilter;
  });

  const handleInquireProject = () => {
    setActiveModalProject(null);
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="portfolio"
      className="py-24 md:py-32 bg-white relative overflow-hidden"
    >
      {/* Ambient gradient blur accents */}
      <div
        className="absolute top-1/4 right-0 w-[32rem] h-[32rem] rounded-full bg-gradient-to-bl from-pink-200/20 via-purple-200/20 to-transparent blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 left-0 w-80 h-80 rounded-full bg-gradient-to-tr from-blue-200/20 to-transparent blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-100/80 border border-purple-200 text-xs font-bold uppercase tracking-wider text-[#6C63FF] mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Commercial Showcase</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-slate-900 font-extrabold tracking-tight text-balance">
              {PORTFOLIO_DATA.profile.portfolioHeading}
            </h2>
          </div>

          <p className="text-base text-slate-600 max-w-md font-normal text-pretty">
            {PORTFOLIO_DATA.profile.portfolioSubheading}
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 bg-slate-50/90 backdrop-blur-md rounded-2xl border border-purple-200/80 max-w-3xl mb-12 shadow-xs">
          {filterTabs.map((tab) => (
            <button
              key={tab.key}
              type="button"
              onClick={() => setActiveFilter(tab.key)}
              className={`px-4 py-2 text-xs font-bold rounded-xl transition-all duration-200 cursor-pointer whitespace-nowrap ${
                activeFilter === tab.key
                  ? 'bg-gradient-to-r from-[#4F46E5] to-[#8B5CF6] text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-950 hover:bg-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* 6 Unique Project Cards with Realistic Browser Devices & Editorial Stack */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group rounded-3xl overflow-hidden bg-white border border-purple-200/80 shadow-md hover:shadow-2xl hover:border-[#8B5CF6] transition-all duration-300 flex flex-col justify-between"
            >
              {/* Realistic Browser Device Card Mockup Container */}
              <div
                className="relative aspect-16/10 overflow-hidden bg-slate-950 cursor-pointer"
                onClick={() => setActiveModalProject(project)}
              >
                {/* Browser Top Navigation Bar */}
                <div className="absolute top-0 left-0 right-0 z-20 px-3.5 py-2 bg-slate-950/80 backdrop-blur-md border-b border-white/10 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-rose-500/80" />
                  <span className="w-2 h-2 rounded-full bg-amber-500/80" />
                  <span className="w-2 h-2 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-[10px] text-slate-400 font-mono truncate">
                    https://{project.title.toLowerCase().replace(/[^a-z0-9]/g, '')}.com
                  </span>
                </div>

                {/* Unique Project Screenshot (Image Zoom on Hover) */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top pt-6 group-hover:scale-108 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />

                {/* Vibrant Gradient Overlay on Hover */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-[#121024]/85 via-[#4F46E5]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  aria-hidden="true"
                />

                {/* Quick View Pill Badge */}
                <div className="absolute bottom-4 right-4 z-20 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-white text-slate-900 shadow-lg">
                    <Eye className="w-3.5 h-3.5 text-[#8B5CF6]" />
                    <span>View Project</span>
                  </span>
                </div>
              </div>

              {/* Card Content Details */}
              <div className="p-7 flex flex-col justify-between grow">
                <div>
                  <div className="text-xs font-extrabold uppercase tracking-wider text-[#8B5CF6] mb-2">
                    {project.category}
                  </div>

                  <h3
                    onClick={() => setActiveModalProject(project)}
                    className="font-display text-xl font-bold text-slate-900 mb-2.5 group-hover:text-[#4F46E5] transition-colors cursor-pointer leading-snug"
                  >
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-5">
                    {project.shortDesc}
                  </p>
                </div>

                {/* Bottom Row: Technologies & View Project Button */}
                <div className="pt-4 border-t border-purple-50 flex items-center justify-between">
                  <div className="text-[11px] text-slate-500 font-medium truncate max-w-[140px]">
                    {project.tools.slice(0, 2).join(' · ')}
                  </div>

                  <button
                    type="button"
                    onClick={() => setActiveModalProject(project)}
                    className="btn-gradient-secondary inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider cursor-pointer group/btn"
                  >
                    <span>View Project</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#8B5CF6] group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Project Lightbox & Details Modal */}
      {activeModalProject && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-slate-950/75 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setActiveModalProject(null)}
        >
          <div
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl border border-purple-200 p-6 sm:p-8 lg:p-10"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveModalProject(null)}
              className="absolute top-5 right-5 sm:top-6 sm:right-6 p-2 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900 transition-colors cursor-pointer"
              aria-label="Close project modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-4">
              <span className="text-xs font-extrabold uppercase tracking-wider bg-gradient-to-r from-[#4F46E5] to-[#EC4899] bg-clip-text text-transparent">
                {activeModalProject.category}
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                {activeModalProject.title}
              </h3>
            </div>

            <div className="relative aspect-16/9 rounded-2xl overflow-hidden bg-slate-950 border border-purple-100 mb-6">
              <img
                src={activeModalProject.image}
                alt={activeModalProject.title}
                className="w-full h-full object-cover object-top"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-6">
              <div className="md:col-span-7">
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 mb-2">
                  Project Deep Dive
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                  {activeModalProject.fullDesc}
                </p>
              </div>

              <div className="md:col-span-5 space-y-4">
                <div className="p-4 rounded-2xl bg-purple-50/70 border border-purple-200">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-3">
                    Performance Metrics
                  </h4>
                  <div className="grid grid-cols-2 gap-3 text-center">
                    {activeModalProject.metrics.map((m, idx) => (
                      <div key={idx} className="p-2 rounded-xl bg-white shadow-xs">
                        <div className="text-[10px] text-slate-400 font-bold uppercase">{m.label}</div>
                        <div className="text-sm font-black text-slate-900">{m.value}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">
                    Technologies &amp; Tools
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {activeModalProject.tools.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 text-xs font-medium rounded-md bg-white text-slate-700 border border-slate-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-purple-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-slate-500">
                Need a website of similar caliber and performance for your business?
              </span>
              <button
                type="button"
                onClick={handleInquireProject}
                className="btn-gradient-primary w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider cursor-pointer"
              >
                <span>Request Similar Project</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

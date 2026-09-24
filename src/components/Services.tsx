import React from 'react';
import {
  LayoutGrid,
  Code,
  Sliders,
  Smartphone,
  Palette,
  ShieldCheck,
  ArrowRight,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { PORTFOLIO_DATA, ServiceItem } from '../data/portfolioData';

export const Services: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    LayoutGrid: <LayoutGrid className="w-7 h-7" />,
    Code: <Code className="w-7 h-7" />,
    Sliders: <Sliders className="w-7 h-7" />,
    Smartphone: <Smartphone className="w-7 h-7" />,
    Palette: <Palette className="w-7 h-7" />,
    ShieldCheck: <ShieldCheck className="w-7 h-7" />
  };

  const handleInquireService = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="services"
      className="py-24 md:py-32 bg-white relative overflow-hidden"
    >
      {/* Ambient gradient lighting */}
      <div
        className="absolute top-20 right-10 w-96 h-96 rounded-full bg-gradient-to-br from-blue-200/20 via-purple-200/20 to-transparent blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-gradient-to-tr from-pink-200/20 via-purple-200/20 to-transparent blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-100/80 border border-purple-200 text-xs font-bold uppercase tracking-wider text-[#6C63FF] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Specialized Capabilities</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-slate-900 font-extrabold tracking-tight mb-4 text-balance">
            {PORTFOLIO_DATA.profile.servicesHeading}
          </h2>

          <p className="text-base text-slate-600 leading-relaxed font-normal text-pretty">
            {PORTFOLIO_DATA.profile.servicesSubheading}
          </p>
        </div>

        {/* 6 Core Services with 2026 Micro-Interactions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PORTFOLIO_DATA.services.map((service: ServiceItem, index: number) => (
            <div
              key={service.id}
              onClick={handleInquireService}
              className="service-card-2026 rounded-3xl p-8 bg-white/90 border border-purple-200/80 shadow-sm flex flex-col justify-between group cursor-pointer"
            >
              <div>
                {/* Header row: Custom 3D Icon & Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-tr ${service.gradient} text-white flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500`}
                  >
                    {iconMap[service.iconName] || <LayoutGrid className="w-7 h-7" />}
                  </div>

                  <span className="text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full bg-purple-50 text-[#8B5CF6] border border-purple-100">
                    {service.badge}
                  </span>
                </div>

                {/* Service Title */}
                <h3 className="font-display text-xl font-bold text-slate-900 mb-3 group-hover:text-[#4F46E5] transition-colors leading-snug">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-6">
                  {service.description}
                </p>

                {/* Deliverables tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {service.deliverables.map((item, dIdx) => (
                    <span
                      key={dIdx}
                      className="px-2.5 py-1 text-[11px] font-semibold rounded-lg bg-slate-50 text-slate-600 border border-slate-200/60"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Action Trigger */}
              <div className="pt-4 border-t border-purple-100 flex items-center justify-between">
                <span className="text-xs font-extrabold uppercase tracking-wider text-slate-400 group-hover:text-[#8B5CF6] transition-colors">
                  Inquire Service
                </span>
                <div className="w-9 h-9 rounded-full bg-purple-50 group-hover:bg-gradient-to-r group-hover:from-[#4F46E5] group-hover:to-[#EC4899] text-slate-600 group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-xs">
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

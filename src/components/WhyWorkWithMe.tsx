import React from 'react';
import {
  Sparkles,
  Smartphone,
  Zap,
  Code,
  Palette,
  Wrench,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { PORTFOLIO_DATA, WhyChooseItem } from '../data/portfolioData';

export const WhyWorkWithMe: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    Code: <Code className="w-6 h-6" />,
    Smartphone: <Smartphone className="w-6 h-6" />,
    Zap: <Zap className="w-6 h-6" />,
    Palette: <Palette className="w-6 h-6" />,
    Wrench: <Wrench className="w-6 h-6" />,
    Sparkles: <Sparkles className="w-6 h-6" />
  };

  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-[#F8F7FF] via-purple-50/20 to-[#F8F7FF] relative overflow-hidden">
      {/* Subtle ambient lighting */}
      <div
        className="absolute top-1/3 left-0 w-80 h-80 rounded-full bg-gradient-to-r from-blue-300/10 to-purple-300/10 blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 right-0 w-96 h-96 rounded-full bg-gradient-to-l from-pink-300/10 to-purple-300/10 blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-100/80 border border-purple-200 text-xs font-bold uppercase tracking-wider text-[#6C63FF] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Value Proposition</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-slate-900 font-extrabold tracking-tight mb-4 text-balance">
            {PORTFOLIO_DATA.profile.whyHeading}
          </h2>

          <p className="text-base text-slate-600 leading-relaxed font-normal text-pretty">
            {PORTFOLIO_DATA.profile.whySubheading}
          </p>
        </div>

        {/* 2-Column Layout: 6 Animated Glass Cards (Left 7 cols), Unique Digital Visual (Right 5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: 6 Cards in 2x3 Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {PORTFOLIO_DATA.whyChooseMe.map((item: WhyChooseItem, idx: number) => (
              <div
                key={idx}
                className="agency-card rounded-3xl p-6 bg-white/95 border border-purple-200/80 shadow-xs hover:shadow-xl hover:border-[#8B5CF6] transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${item.gradient} text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}
                    >
                      {iconMap[item.iconName] || <Sparkles className="w-6 h-6" />}
                    </div>

                    <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                      {item.metric}
                    </span>
                  </div>

                  <h3 className="font-display text-lg font-bold text-slate-900 mb-2 group-hover:text-[#4F46E5] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-purple-100/60 flex items-center gap-1.5 text-[11px] font-bold text-[#8B5CF6]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span>Guaranteed Deliverable</span>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Unique Visual 9 (Developer workstation & digital interface) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer Ambient Glow */}
              <div
                className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-[#3B82F6] via-[#8B5CF6] to-[#EC4899] opacity-25 blur-xl -z-10 animate-glow-pulse"
                aria-hidden="true"
              />

              {/* Framed Graphic Container */}
              <div className="relative rounded-3xl overflow-hidden bg-white p-3 shadow-2xl border border-purple-200/80">
                <div className="relative aspect-4/3 rounded-2xl overflow-hidden bg-slate-950">
                  <img
                    src="/src/assets/images/why_choose_digital_visual_1790166928393.jpg"
                    alt="Digital web engineering wireframes and code visual"
                    className="w-full h-full object-cover object-center transform hover:scale-104 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-[#121024]/80 via-transparent to-transparent pointer-events-none"
                    aria-hidden="true"
                  />

                  {/* Overlay text */}
                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-purple-300">
                      Standard of Excellence
                    </div>
                    <div className="font-display text-base font-extrabold text-white mt-0.5">
                      Engineered for Speed, Beauty & Conversion
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating micro card */}
              <div className="absolute -bottom-5 -left-4 sm:-left-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-purple-200 shadow-xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#10B981] to-[#3B82F6] text-white flex items-center justify-center font-black text-sm shadow-xs">
                  99
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold tracking-wider text-slate-400">
                    Google PageSpeed
                  </div>
                  <div className="text-xs font-bold text-slate-900">Core Web Vitals Pass</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

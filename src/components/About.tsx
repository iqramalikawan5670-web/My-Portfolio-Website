import React from 'react';
import { Sparkles, CheckCircle2, ArrowRight, Code, LayoutGrid, Smartphone, Award } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const About: React.FC = () => {
  const statCards = [
    {
      title: '3+ Years Experience',
      subtitle: 'Commercial Tenure',
      icon: <Award className="w-5 h-5" />,
      gradient: 'from-[#3B82F6] to-[#4F46E5]',
      metric: '03+'
    },
    {
      title: 'WordPress',
      subtitle: 'Themes & Core CMS',
      icon: <LayoutGrid className="w-5 h-5" />,
      gradient: 'from-[#8B5CF6] to-[#6C63FF]',
      metric: '95%'
    },
    {
      title: 'Responsive Design',
      subtitle: 'Multi-Device Polish',
      icon: <Smartphone className="w-5 h-5" />,
      gradient: 'from-[#EC4899] to-[#8B5CF6]',
      metric: '100%'
    },
    {
      title: 'Web Development',
      subtitle: 'HTML5 · CSS3 · JS',
      icon: <Code className="w-5 h-5" />,
      gradient: 'from-[#10B981] to-[#3B82F6]',
      metric: 'Clean'
    }
  ];

  return (
    <section
      id="about"
      className="pt-16 md:pt-20 pb-24 md:pb-32 bg-gradient-to-b from-[#F8F7FF] via-purple-50/25 to-[#F8F7FF] relative overflow-hidden"
    >
      {/* Decorative ambient glowing backdrop shapes */}
      <div
        className="absolute top-1/2 -left-20 w-80 h-80 rounded-full bg-gradient-to-r from-blue-400/10 to-purple-400/10 blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-gradient-to-l from-pink-400/10 to-purple-400/10 blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Unique Image 2 + Floating Browser Window & UI Layers */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Vibrant glowing gradient backdrop */}
              <div
                className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-[#3B82F6] via-[#8B5CF6] to-[#EC4899] opacity-25 blur-lg -z-10 animate-glow-pulse"
                aria-hidden="true"
              />

              {/* Framed Visual with Floating Browser Header */}
              <div className="relative rounded-3xl overflow-hidden bg-white p-3 shadow-2xl border border-purple-200/80">
                {/* Mini Browser Bar */}
                <div className="px-3 py-2 bg-slate-900 rounded-t-xl flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-rose-500" />
                    <span className="w-2 h-2 rounded-full bg-amber-500" />
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  </div>
                  <span className="text-[10px] font-mono text-purple-200/70">
                    iqramalik.dev/profile
                  </span>
                </div>

                <div className="relative aspect-4/3 rounded-b-xl overflow-hidden bg-slate-900">
                  <img
                    src="/src/assets/images/agency_developer_portrait_1790166035165.jpg"
                    alt="Iqra Malik professional WordPress developer portrait"
                    className="w-full h-full object-cover object-top hover:scale-104 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-[#121024]/70 via-transparent to-transparent pointer-events-none"
                    aria-hidden="true"
                  />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs">
                    <div>
                      <div className="font-extrabold text-sm">{PORTFOLIO_DATA.profile.name}</div>
                      <div className="text-purple-200 text-[11px] font-medium">
                        {PORTFOLIO_DATA.profile.title}
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-[10px] font-semibold uppercase tracking-wider">
                      Sargodha, Pakistan
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Glassmorphism Layer: Verified Dev Badge */}
              <div className="absolute -bottom-5 -right-3 sm:-right-5 p-3.5 rounded-2xl bg-white/95 backdrop-blur-md border border-purple-200 shadow-xl flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#10B981] to-[#3B82F6] text-white flex items-center justify-center shadow-xs">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold text-slate-400">Status</div>
                  <div className="text-xs font-extrabold text-slate-900">100% Satisfaction</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Heading, Bio, and 4 Animated Experience/Stat Cards */}
          <div className="lg:col-span-7">
            {/* Section Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-100/70 border border-purple-200 text-xs font-bold uppercase tracking-wider text-[#6C63FF] mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Developer Background</span>
            </div>

            {/* Section Heading */}
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-slate-900 font-extrabold tracking-tight mb-6 text-balance">
              Meet the Dev Behind the Work
            </h2>

            {/* Professional Introduction Card */}
            <div className="p-6 sm:p-7 rounded-2xl agency-card bg-white/90 border border-purple-200/70 shadow-sm mb-8">
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal text-pretty">
                "{PORTFOLIO_DATA.profile.aboutBio}"
              </p>
            </div>

            {/* 4 Animated Experience/Stat Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-8">
              {statCards.map((stat, idx) => (
                <div
                  key={idx}
                  className="agency-card rounded-2xl p-4 bg-white text-center border border-purple-100 shadow-xs hover:border-[#8B5CF6]/50 transition-all flex flex-col justify-between"
                >
                  <div
                    className={`w-9 h-9 rounded-xl bg-gradient-to-tr ${stat.gradient} text-white flex items-center justify-center mx-auto mb-2 shadow-xs`}
                  >
                    {stat.icon}
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-extrabold text-slate-900 leading-tight">
                      {stat.title}
                    </div>
                    <div className="text-[10px] font-semibold text-slate-400 mt-0.5">
                      {stat.subtitle}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Quick Action */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#services"
                className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#4F46E5] hover:text-[#EC4899] transition-colors"
              >
                <span>Explore Technical Capabilities</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

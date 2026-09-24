import React from 'react';
import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  Sparkles,
  Layers,
  CheckCircle2,
  Cpu,
  Smartphone
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { BrandLogo } from './BrandLogo';

export const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const floatingBadges = [
    { label: 'WordPress', color: 'from-[#3B82F6] to-[#4F46E5]', pos: 'top-2 -left-6 sm:-left-8' },
    { label: 'Elementor', color: 'from-[#8B5CF6] to-[#6C63FF]', pos: '-top-6 right-8' },
    { label: 'HTML', color: 'from-[#EC4899] to-[#8B5CF6]', pos: 'top-1/3 -right-6 sm:-right-8' },
    { label: 'CSS', color: 'from-[#3B82F6] to-[#8B5CF6]', pos: 'bottom-20 -left-6 sm:-left-8' },
    { label: 'JavaScript', color: 'from-[#6C63FF] to-[#3B82F6]', pos: '-bottom-5 left-12' },
    { label: 'UI/UX', color: 'from-[#EC4899] to-[#6C63FF]', pos: '-bottom-5 right-10' }
  ];

  return (
    <section
      id="home"
      className="relative pt-36 pb-0 md:pt-44 lg:pt-48 overflow-hidden bg-gradient-to-b from-[#FAF9F6] via-white to-[#F8F7FF]"
    >
      {/* 2026 Ambient Glowing Prisms */}
      <div
        className="absolute top-10 left-10 w-[28rem] h-[28rem] rounded-full bg-gradient-to-br from-[#3B82F6]/15 via-[#8B5CF6]/18 to-transparent blur-3xl pointer-events-none animate-blob -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute top-28 right-8 w-[32rem] h-[32rem] rounded-full bg-gradient-to-bl from-[#EC4899]/14 via-[#6C63FF]/18 to-transparent blur-3xl pointer-events-none animate-blob -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: 2026 Futuristic Editorial Typography & Actions */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Small Glowing Kicker Badge with Official Logo Emblem */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 border border-purple-200/80 w-fit mb-6 shadow-xs backdrop-blur-md">
              <BrandLogo variant="symbol-only" size="xs" className="w-5 h-5 rounded-md shadow-xs" />
              <span className="text-xs font-extrabold tracking-widest uppercase bg-gradient-to-r from-[#4F46E5] via-[#8B5CF6] to-[#EC4899] bg-clip-text text-transparent">
                WordPress & Web Developer
              </span>
            </div>

            {/* Large Futuristic Editorial Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-slate-900 font-extrabold tracking-tight leading-[1.12] mb-6 text-balance">
              <span> Websites that turn ideas into </span>
              <span className="gradient-text-hero">
                memorable digital experiences.
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl mb-10 text-pretty">
              {PORTFOLIO_DATA.profile.heroSupporting}
            </p>

            {/* Dual Glowing CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-12">
              <button
                type="button"
                onClick={() => scrollTo('#contact')}
                className="btn-gradient-primary inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-xs sm:text-sm font-extrabold uppercase tracking-wider cursor-pointer group shadow-lg"
              >
                <span>Let's Work Together</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              <button
                type="button"
                onClick={() => scrollTo('#portfolio')}
                className="btn-gradient-secondary inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-xs sm:text-sm font-extrabold uppercase tracking-wider cursor-pointer group"
              >
                <span>View My Work</span>
                <ArrowDown className="w-4 h-4 text-[#8B5CF6] transition-transform duration-200 group-hover:translate-y-1" />
              </button>
            </div>

            {/* Micro Trust Stats */}
            <div className="pt-6 border-t border-purple-100 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs sm:text-sm text-slate-600 font-medium">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                <span className="font-extrabold text-slate-900">03+ Years</span> Commercial Experience
              </div>
              <span className="text-slate-300" aria-hidden="true">•</span>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#8B5CF6]" />
                <span className="font-extrabold text-slate-900">20+ Projects</span> Completed
              </div>
              <span className="text-slate-300" aria-hidden="true">•</span>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#EC4899]" />
                <span className="font-extrabold text-slate-900">100%</span> Dedication
              </div>
            </div>
          </div>

          {/* Right Column: Unique Image 1 + Floating Skill Badges */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Outer Ambient Glow */}
              <div
                className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-[#4F46E5] via-[#8B5CF6] to-[#EC4899] opacity-25 blur-xl -z-10 animate-glow-pulse"
                aria-hidden="true"
              />

              {/* Framed Image Container */}
              <div className="relative rounded-3xl overflow-hidden bg-white p-3 shadow-2xl border border-purple-200/70">
                <div className="relative aspect-4/3 rounded-2xl overflow-hidden bg-slate-950">
                  <img
                    src="/src/assets/images/hero_female_dev_workspace_1790166885146.jpg"
                    alt="Iqra Malik professional WordPress developer in stylish creative workspace"
                    className="w-full h-full object-cover object-center transform hover:scale-104 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                    loading="eager"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-[#121024]/75 via-transparent to-transparent pointer-events-none"
                    aria-hidden="true"
                  />

                  {/* Floating Glassmorphism Status Bar */}
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-white/90 backdrop-blur-md border border-white/60 flex items-center justify-between text-xs shadow-md">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                      <span className="font-extrabold text-slate-900">Available for Client Projects</span>
                    </div>
                    <span className="text-[11px] font-bold text-[#8B5CF6] uppercase tracking-wider">
                      WordPress · Elementor
                    </span>
                  </div>
                </div>
              </div>

              {/* 6 Subtly Animated Floating Skill Badges */}
              {floatingBadges.map((badge, idx) => (
                <div
                  key={idx}
                  className={`absolute ${badge.pos} px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-purple-200 shadow-lg hidden sm:flex items-center gap-2 z-20 transition-transform duration-300 hover:scale-110 ${
                    idx % 2 === 0 ? 'animate-float-1' : 'animate-float-2'
                  }`}
                  style={{ animationDelay: `${idx * 0.4}s` }}
                >
                  <span
                    className={`w-2 h-2 rounded-full bg-gradient-to-r ${badge.color}`}
                  />
                  <span className="text-xs font-bold text-slate-900">{badge.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 2026 Kinetic Ribbon Track Below Hero */}
      <div className="mt-16 py-3.5 bg-gradient-to-r from-purple-100/50 via-white to-blue-100/50 border-y border-purple-100 overflow-hidden">
        <div className="animate-ticker text-xs font-extrabold tracking-widest uppercase text-slate-600 flex items-center gap-8 whitespace-nowrap">
          <span>WORDPRESS DEVELOPMENT</span>
          <span className="text-[#8B5CF6]">✦</span>
          <span>ELEMENTOR PRO</span>
          <span className="text-[#EC4899]">✦</span>
          <span>CUSTOM THEMES</span>
          <span className="text-[#3B82F6]">✦</span>
          <span>RESPONSIVE WEB DESIGN</span>
          <span className="text-[#8B5CF6]">✦</span>
          <span>SPEED OPTIMIZATION</span>
          <span className="text-[#EC4899]">✦</span>
          <span>CLEAN SEMANTIC CODE</span>
          <span className="text-[#3B82F6]">✦</span>
          <span>UI/UX DESIGN</span>
          <span className="text-[#8B5CF6]">✦</span>
          <span>03+ YEARS EXPERIENCE</span>
          <span className="text-[#EC4899]">✦</span>
          {/* Duplicate loop */}
          <span>WORDPRESS DEVELOPMENT</span>
          <span className="text-[#8B5CF6]">✦</span>
          <span>ELEMENTOR PRO</span>
          <span className="text-[#EC4899]">✦</span>
          <span>CUSTOM THEMES</span>
          <span className="text-[#3B82F6]">✦</span>
          <span>RESPONSIVE WEB DESIGN</span>
          <span className="text-[#8B5CF6]">✦</span>
          <span>SPEED OPTIMIZATION</span>
          <span className="text-[#EC4899]">✦</span>
        </div>
      </div>
    </section>
  );
};

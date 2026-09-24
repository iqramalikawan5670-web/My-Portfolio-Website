import React, { useState } from 'react';
import {
  Code,
  LayoutGrid,
  Paintbrush,
  Smartphone,
  Sparkles,
  Zap,
  Search,
  Palette,
  FileCode2,
  Sliders,
  CheckCircle2,
  Terminal,
  Activity
} from 'lucide-react';
import { PORTFOLIO_DATA, SkillItem } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [hoveredSkill, setHoveredSkill] = useState<SkillItem | null>(PORTFOLIO_DATA.skills[0]);

  const categories = [
    { key: 'all', label: 'All Technologies' },
    { key: 'core', label: 'WordPress Core' },
    { key: 'frontend', label: 'Frontend Stack' },
    { key: 'optimization', label: 'Speed & SEO' },
    { key: 'design', label: 'UI / UX' }
  ];

  const iconMap: Record<string, React.ReactNode> = {
    LayoutGrid: <LayoutGrid className="w-5 h-5" />,
    Sliders: <Sliders className="w-5 h-5" />,
    Code: <Code className="w-5 h-5" />,
    Palette: <Palette className="w-5 h-5" />,
    FileCode2: <FileCode2 className="w-5 h-5" />,
    Smartphone: <Smartphone className="w-5 h-5" />,
    Paintbrush: <Paintbrush className="w-5 h-5" />,
    Figma: <Sparkles className="w-5 h-5" />,
    Search: <Search className="w-5 h-5" />,
    Zap: <Zap className="w-5 h-5" />
  };

  const filteredSkills = PORTFOLIO_DATA.skills.filter((skill) => {
    if (activeCategory === 'all') return true;
    return skill.category === activeCategory;
  });

  return (
    <section
      id="skills"
      className="py-24 md:py-32 bg-gradient-to-b from-[#F8F7FF] via-white to-[#F8F7FF] relative overflow-hidden"
    >
      {/* 2026 Animated Gradient Horizon Line */}
      <div
        className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#3B82F6] via-[#8B5CF6] to-[#EC4899] opacity-80"
        aria-hidden="true"
      />

      {/* Decorative ambient glowing backdrops */}
      <div
        className="absolute top-1/2 left-1/4 w-[32rem] h-[32rem] rounded-full bg-gradient-to-tr from-purple-200/15 via-pink-200/15 to-transparent blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-100/80 border border-purple-200 text-xs font-bold uppercase tracking-wider text-[#6C63FF] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Tech Interface</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-slate-900 font-extrabold tracking-tight mb-4 text-balance">
            {PORTFOLIO_DATA.profile.skillsHeading}
          </h2>

          <p className="text-base text-slate-600 leading-relaxed font-normal text-pretty">
            {PORTFOLIO_DATA.profile.skillsSubheading}
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.key}
              type="button"
              onClick={() => setActiveCategory(cat.key)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                activeCategory === cat.key
                  ? 'bg-gradient-to-r from-[#4F46E5] to-[#EC4899] text-white shadow-md'
                  : 'bg-white border border-purple-200/80 text-slate-600 hover:text-slate-950 hover:bg-purple-50'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* 2-Column Interface: Left Developer Console Inspector, Right Interactive Skill Chips */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive 2026 Developer Terminal Inspector */}
          <div className="lg:col-span-5 rounded-3xl bg-[#121024] text-white p-7 shadow-2xl border border-purple-900/60 sticky top-28">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="ml-2 text-xs font-mono text-purple-300">stack-inspector.tsx</span>
              </div>
              <Terminal className="w-4 h-4 text-purple-400" />
            </div>

            {hoveredSkill ? (
              <div className="space-y-4 animate-in fade-in duration-300">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${hoveredSkill.gradient} flex items-center justify-center text-white shadow-md`}
                  >
                    {iconMap[hoveredSkill.iconName]}
                  </div>
                  <div>
                    <div className="text-lg font-bold font-display text-white">
                      {hoveredSkill.name}
                    </div>
                    <div className="text-xs text-purple-300 font-mono">
                      Category: {hoveredSkill.category.toUpperCase()}
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="flex items-center justify-between text-xs font-mono mb-2">
                    <span className="text-slate-400">Mastery Index:</span>
                    <span className="text-emerald-400 font-bold">{hoveredSkill.level}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-[#3B82F6] via-[#8B5CF6] to-[#EC4899] transition-all duration-700"
                      style={{ width: `${hoveredSkill.level}%` }}
                    />
                  </div>
                </div>

                <div className="space-y-2 text-xs font-mono text-slate-300 pt-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Cross-browser validation: PASS</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Commercial deployment experience: 3+ YRS</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Activity className="w-3.5 h-3.5 text-purple-400" />
                    <span>Production readiness: LEVEL 1</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="py-8 text-center text-xs text-slate-400 font-mono">
                Hover any technology to inspect telemetry.
              </div>
            )}
          </div>

          {/* Right Column: Interactive Digital Skill Chips Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {filteredSkills.map((skill, idx) => (
              <div
                key={idx}
                onMouseEnter={() => setHoveredSkill(skill)}
                className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer flex items-center justify-between ${
                  hoveredSkill?.name === skill.name
                    ? 'bg-white border-[#8B5CF6] shadow-xl scale-102'
                    : 'bg-white/80 border-purple-200/70 hover:border-purple-300'
                }`}
              >
                <div className="flex items-center gap-3.5">
                  <div
                    className={`w-11 h-11 rounded-xl bg-gradient-to-tr ${skill.gradient} text-white flex items-center justify-center shrink-0 shadow-sm`}
                  >
                    {iconMap[skill.iconName] || <Code className="w-5 h-5" />}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900">{skill.name}</div>
                    <div className="text-[11px] font-semibold text-emerald-600 flex items-center gap-1 mt-0.5">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>Ready</span>
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-xs font-mono font-bold text-slate-600">{skill.level}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

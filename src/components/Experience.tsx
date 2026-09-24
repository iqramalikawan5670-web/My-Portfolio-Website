import React from 'react';
import { Briefcase, Calendar, CheckCircle2, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section
      id="experience"
      className="py-24 md:py-32 bg-gradient-to-b from-[#F8F7FF] via-purple-50/20 to-[#F8F7FF] relative overflow-hidden"
    >
      {/* Decorative ambient background blur */}
      <div
        className="absolute top-1/3 right-10 w-96 h-96 rounded-full bg-gradient-to-br from-purple-200/20 to-pink-200/20 blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-100/80 border border-purple-200 text-xs font-bold uppercase tracking-wider text-[#6C63FF] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Career Path</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-slate-900 font-extrabold tracking-tight mb-4 text-balance">
            Work Experience
          </h2>

          <p className="text-base text-slate-600 leading-relaxed font-normal text-pretty">
            Proven track record of high-performance WordPress delivery across agency environments.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Glowing Gradient Timeline Path */}
          <div
            className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-1 -translate-x-1/2 bg-gradient-to-b from-[#3B82F6] via-[#8B5CF6] to-[#EC4899] rounded-full hidden sm:block"
            aria-hidden="true"
          />

          <div className="space-y-12 sm:space-y-16">
            {PORTFOLIO_DATA.experiences.map((exp, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`relative flex flex-col sm:flex-row items-center ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Glowing Center Node Dot */}
                  <div
                    className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-white border-4 border-[#8B5CF6] shadow-[0_0_15px_rgba(139,92,246,0.6)] z-10 hidden sm:block"
                    aria-hidden="true"
                  />

                  {/* Empty Spacer Column for Desktop */}
                  <div className="hidden sm:block w-1/2" />

                  {/* Experience Card */}
                  <div className={`w-full sm:w-1/2 ${isEven ? 'sm:pr-10' : 'sm:pl-10'}`}>
                    <div className="agency-card rounded-3xl p-8 bg-white border border-purple-200/80 shadow-md hover:shadow-xl hover:border-[#8B5CF6] transition-all duration-300">
                      {/* Top Row: Period & Company */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-purple-100/70 text-[#6C63FF]">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{exp.period}</span>
                        </span>

                        <span className="text-xs font-extrabold text-slate-400 uppercase tracking-wider">
                          Commercial Tenure
                        </span>
                      </div>

                      {/* Role & Company Header */}
                      <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-1">
                        {exp.company}
                      </h3>
                      <div className="text-sm font-bold bg-gradient-to-r from-[#4F46E5] to-[#EC4899] bg-clip-text text-transparent mb-5">
                        {exp.role}
                      </div>

                      {/* Responsibilities list */}
                      <div className="space-y-2.5">
                        <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                          Responsibilities:
                        </div>
                        {exp.responsibilities.map((resp, rIdx) => (
                          <div key={rIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                            <span>{resp}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import {
  Search,
  Layers,
  Palette,
  Code,
  CheckCircle2,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { PORTFOLIO_DATA, ProcessStep } from '../data/portfolioData';

export const Process: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const iconMap: Record<string, React.ReactNode> = {
    Search: <Search className="w-5 h-5" />,
    Layers: <Layers className="w-5 h-5" />,
    Palette: <Palette className="w-5 h-5" />,
    Code: <Code className="w-5 h-5" />,
    CheckCircle2: <CheckCircle2 className="w-5 h-5" />,
    Sparkles: <Sparkles className="w-5 h-5" />
  };

  const steps = PORTFOLIO_DATA.processSteps;

  return (
    <section
      id="process"
      className="py-24 md:py-32 bg-white relative overflow-hidden"
    >
      {/* Decorative ambient glowing backdrops */}
      <div
        className="absolute top-1/2 right-10 w-[30rem] h-[30rem] rounded-full bg-gradient-to-br from-blue-200/20 via-purple-200/20 to-transparent blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-gradient-to-tr from-pink-200/20 via-purple-200/20 to-transparent blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-100/80 border border-purple-200 text-xs font-bold uppercase tracking-wider text-[#6C63FF] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Methodology & Roadmap</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-slate-900 font-extrabold tracking-tight mb-4 text-balance">
            My Development Process
          </h2>

          <p className="text-base text-slate-600 leading-relaxed font-normal text-pretty">
            A structured, 6-stage engineering journey ensuring seamless communication, pixel-perfect
            craftsmanship, and on-time deployment.
          </p>
        </div>

        {/* Futuristic Connected Process Navigation Ribbon (Desktop) */}
        <div className="relative mb-16">
          {/* Glowing horizontal connection rail */}
          <div
            className="absolute top-1/2 left-8 right-8 h-1 -translate-y-1/2 bg-gradient-to-r from-[#3B82F6] via-[#8B5CF6] to-[#EC4899] rounded-full hidden lg:block opacity-60"
            aria-hidden="true"
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 relative z-10">
            {steps.map((step, idx) => {
              const isSelected = activeStep === idx;

              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveStep(idx)}
                  className={`p-4 rounded-2xl border text-left transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'bg-white border-[#8B5CF6] shadow-xl scale-104 ring-2 ring-[#8B5CF6]/30'
                      : 'bg-white/80 border-purple-100 hover:border-purple-300 hover:bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`text-xs font-mono font-black ${
                        isSelected
                          ? 'text-[#8B5CF6]'
                          : 'text-slate-400'
                      }`}
                    >
                      {step.step}
                    </span>
                    <div
                      className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs transition-colors ${
                        isSelected
                          ? 'bg-gradient-to-r from-[#4F46E5] to-[#EC4899] text-white shadow-xs'
                          : 'bg-purple-50 text-slate-500'
                      }`}
                    >
                      {iconMap[step.iconName]}
                    </div>
                  </div>

                  <div>
                    <div className="font-display font-bold text-sm text-slate-900 leading-snug">
                      {step.title}
                    </div>
                    <div className="text-[10px] text-slate-500 truncate mt-0.5">
                      {step.subtitle}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Stage Deep Dive Card */}
        <div className="rounded-3xl bg-gradient-to-br from-white via-purple-50/30 to-blue-50/30 border border-purple-200/80 p-8 sm:p-12 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Stage Summary */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-sm font-mono font-black px-3 py-1 rounded-full bg-purple-100 text-[#6C63FF]">
                  STAGE {steps[activeStep].step}
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  {steps[activeStep].subtitle}
                </span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4">
                {steps[activeStep].title} Phase
              </h3>

              <p className="text-base text-slate-600 leading-relaxed font-normal mb-8">
                {steps[activeStep].description}
              </p>

              {/* Deliverable pills */}
              <div className="space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Key Deliverables:
                </div>
                <div className="flex flex-wrap gap-2">
                  {steps[activeStep].details.map((d, dIdx) => (
                    <span
                      key={dIdx}
                      className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white border border-purple-200/80 text-slate-800 shadow-xs flex items-center gap-1.5"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                      <span>{d}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Navigation Trigger */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center p-8 rounded-2xl bg-white/90 border border-purple-100 text-center">
              <div
                className={`w-20 h-20 rounded-3xl bg-gradient-to-tr ${steps[activeStep].gradient} text-white flex items-center justify-center mb-6 shadow-xl`}
              >
                <div className="scale-150">{iconMap[steps[activeStep].iconName]}</div>
              </div>

              <div className="font-display text-lg font-bold text-slate-900 mb-1">
                {steps[activeStep].title} Standards
              </div>
              <p className="text-xs text-slate-500 mb-6 max-w-xs">
                Every milestone is reviewed and approved with client demos before moving to the next
                phase.
              </p>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  disabled={activeStep === 0}
                  onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 bg-slate-100 hover:bg-slate-200 disabled:opacity-40 cursor-pointer"
                >
                  Previous
                </button>
                <button
                  type="button"
                  disabled={activeStep === steps.length - 1}
                  onClick={() => setActiveStep((prev) => Math.min(steps.length - 1, prev + 1))}
                  className="btn-gradient-primary px-5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider disabled:opacity-40 cursor-pointer flex items-center gap-1.5"
                >
                  <span>Next Step</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

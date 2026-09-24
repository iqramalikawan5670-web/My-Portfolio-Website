import React from 'react';
import { ArrowUpRight, MessageCircle, Sparkles, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const CTA: React.FC = () => {
  const scrollToContact = () => {
    const el = document.querySelector('#contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-gradient-to-b from-white via-[#F8F7FF] to-white">
      {/* Ambient gradient backdrops */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] rounded-full bg-gradient-to-tr from-[#3B82F6]/15 via-[#8B5CF6]/15 to-[#EC4899]/15 blur-3xl pointer-events-none -z-10 animate-glow-pulse"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="relative rounded-3xl overflow-hidden bg-white border border-purple-200/80 shadow-2xl p-8 sm:p-14 lg:p-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-100/80 border border-purple-200 text-xs font-bold uppercase tracking-wider text-[#6C63FF]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Direct Collaboration</span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight text-balance">
                Would You Like to Start a Project With Me?
              </h2>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal text-pretty max-w-xl">
                Whether you need a bespoke WordPress website from scratch, an Elementor redesign, or
                speed optimization, let's create a digital experience that drives measurable growth.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <button
                  type="button"
                  onClick={scrollToContact}
                  className="btn-gradient-primary inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-xs sm:text-sm font-extrabold uppercase tracking-wider cursor-pointer group shadow-lg"
                >
                  <span>Start a Project</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>

                <a
                  href={PORTFOLIO_DATA.profile.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gradient-secondary inline-flex items-center gap-2 px-7 py-4 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-800 hover:text-[#4F46E5] transition-all"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-500" />
                  <span>WhatsApp Chat</span>
                </a>
              </div>

              {/* Micro guarantee badge */}
              <div className="pt-4 flex items-center gap-6 text-xs text-slate-500 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>24-Hour Proposal Response</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-500" />
                  <span>Transparent Fixed Pricing</span>
                </div>
              </div>
            </div>

            {/* Right: Unique Visual 11 (Futuristic 3D Composition, Never Reused) */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div
                  className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-[#3B82F6] via-[#8B5CF6] to-[#EC4899] opacity-30 blur-xl -z-10 animate-glow-pulse"
                  aria-hidden="true"
                />

                <div className="relative rounded-3xl overflow-hidden bg-slate-950 p-2 shadow-2xl border border-purple-200">
                  <div className="relative aspect-4/3 rounded-2xl overflow-hidden">
                    <img
                      src="/src/assets/images/cta_futuristic_3d_portal_1790167872501.jpg"
                      alt="Futuristic 3D geometric portals and chrome digital composition"
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-[#121024]/70 via-transparent to-transparent pointer-events-none"
                      aria-hidden="true"
                    />
                  </div>
                </div>

                {/* Floating Glassmorphic Pill */}
                <div className="absolute -bottom-4 left-6 right-6 p-3 rounded-xl bg-white/95 backdrop-blur-md border border-purple-200 text-center text-xs font-bold text-slate-800 shadow-xl">
                  🚀 Currently accepting new client projects for 2026
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

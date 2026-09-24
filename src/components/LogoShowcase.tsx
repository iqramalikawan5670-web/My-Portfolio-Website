import React, { useState } from 'react';
import {
  Sparkles,
  Monitor,
  Tablet,
  Smartphone,
  Maximize2,
  X,
  Code2,
  CheckCircle2,
  Zap,
  Layers,
  ArrowUpRight,
  Globe,
  Sliders,
  Check
} from 'lucide-react';
import { PORTFOLIO_DATA, BrandMockupItem } from '../data/portfolioData';

export const LogoShowcase: React.FC = () => {
  const [activeDevice, setActiveDevice] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [activeModalMockup, setActiveModalMockup] = useState<BrandMockupItem | null>(null);
  const [copiedToken, setCopiedToken] = useState(false);

  const mockups = PORTFOLIO_DATA.brandMockups;
  const featuredItem = mockups[1]; // Web Design System & UI Kit

  const deviceSpecs = {
    desktop: { label: 'Desktop 1920px', width: 'w-full', aspect: 'aspect-16/10', zoom: 'scale-100' },
    tablet: { label: 'Tablet 768px', width: 'max-w-[85%] mx-auto', aspect: 'aspect-4/3', zoom: 'scale-98' },
    mobile: { label: 'Mobile 375px', width: 'max-w-[55%] mx-auto', aspect: 'aspect-9/16', zoom: 'scale-95' }
  };

  const handleCopyTokens = () => {
    navigator.clipboard.writeText(`/* Web Architecture Tokens */
--color-primary: #4F46E5;
--color-violet: #8B5CF6;
--color-accent: #EC4899;
--font-display: "Plus Jakarta Sans", sans-serif;
--border-radius: 1.5rem;
--grid-columns: 12;
--page-speed-target: 99;`);
    setCopiedToken(true);
    setTimeout(() => setCopiedToken(false), 2000);
  };

  return (
    <section
      id="brand-identity"
      className="py-24 md:py-32 bg-gradient-to-b from-[#F8F7FF] via-white to-[#F8F7FF] relative overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div
        className="absolute top-1/4 left-10 w-96 h-96 rounded-full bg-gradient-to-br from-blue-300/15 via-purple-300/15 to-transparent blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-20 right-10 w-[30rem] h-[30rem] rounded-full bg-gradient-to-tl from-pink-300/15 via-purple-300/15 to-transparent blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-100/80 border border-purple-200 text-xs font-bold uppercase tracking-wider text-[#6C63FF] mb-4 shadow-xs">
            <Globe className="w-3.5 h-3.5" />
            <span>Web Architecture &amp; Digital Craft</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-slate-900 font-extrabold tracking-tight mb-4 text-balance">
            My Digital Identity
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal text-pretty">
            An inside look into my web development ecosystem — responsive multi-device architectures,
            component design systems, custom WordPress engineering, and high-performance frontend interfaces.
          </p>
        </div>

        {/* Dynamic Asymmetric Split Layout:
            Left: Interactive Live Web Viewport & Design System Canvas (5 cols)
            Right: Editorial Grid of 6 Web Development & Architecture Mockups (7 cols)
        */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start mb-16">
          {/* LEFT: Featured Web Design System & Viewport Simulator */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
            <div className="rounded-3xl border border-purple-200/80 shadow-xl overflow-hidden bg-white">
              {/* Browser Device Bar with Viewport Controls */}
              <div className="p-4 sm:p-5 bg-slate-900 text-white flex flex-wrap items-center justify-between gap-3 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500" />
                  <span className="w-3 h-3 rounded-full bg-amber-500" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500" />
                  <span className="ml-2 text-xs font-mono text-purple-300">system.iqramalik.dev</span>
                </div>

                {/* Viewport Toggles: Desktop, Tablet, Mobile */}
                <div className="flex items-center gap-1 bg-slate-800/90 p-1 rounded-xl border border-slate-700">
                  <button
                    type="button"
                    onClick={() => setActiveDevice('desktop')}
                    className={`p-1.5 rounded-lg text-xs transition-colors cursor-pointer ${
                      activeDevice === 'desktop'
                        ? 'bg-[#4F46E5] text-white shadow-xs'
                        : 'text-slate-400 hover:text-white'
                    }`}
                    title="Desktop 1920px View"
                    aria-label="Desktop 1920px View"
                  >
                    <Monitor className="w-3.5 h-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveDevice('tablet')}
                    className={`p-1.5 rounded-lg text-xs transition-colors cursor-pointer ${
                      activeDevice === 'tablet'
                        ? 'bg-[#4F46E5] text-white shadow-xs'
                        : 'text-slate-400 hover:text-white'
                    }`}
                    title="Tablet 768px View"
                    aria-label="Tablet 768px View"
                  >
                    <Tablet className="w-3.5 h-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveDevice('mobile')}
                    className={`p-1.5 rounded-lg text-xs transition-colors cursor-pointer ${
                      activeDevice === 'mobile'
                        ? 'bg-[#4F46E5] text-white shadow-xs'
                        : 'text-slate-400 hover:text-white'
                    }`}
                    title="Mobile 375px View"
                    aria-label="Mobile 375px View"
                  >
                    <Smartphone className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Central Web Design System Image Canvas with Dynamic Responsive Sizing */}
              <div className="p-4 sm:p-6 bg-slate-950 flex flex-col items-center justify-center min-h-[340px] overflow-hidden">
                <div
                  className={`transition-all duration-500 overflow-hidden rounded-2xl shadow-2xl border border-slate-800 ${deviceSpecs[activeDevice].width}`}
                >
                  <div className={`relative ${deviceSpecs[activeDevice].aspect} overflow-hidden bg-slate-900 group cursor-pointer`}
                       onClick={() => setActiveModalMockup(featuredItem)}>
                    <img
                      src={featuredItem.image}
                      alt={featuredItem.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                    
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-[10px] font-mono text-purple-300 border border-purple-500/30">
                        {deviceSpecs[activeDevice].label}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                      <div className="text-xs font-bold truncate">Web Design System &amp; Tokens</div>
                      <Maximize2 className="w-3.5 h-3.5 opacity-80" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Web Engineering Telemetry Specs */}
              <div className="p-4 sm:p-5 bg-white border-t border-purple-100">
                <div className="grid grid-cols-2 gap-3 text-xs mb-4">
                  <div className="p-2.5 rounded-xl bg-purple-50/60 border border-purple-100">
                    <div className="text-[10px] uppercase font-bold text-slate-400">Architecture</div>
                    <div className="font-bold text-slate-900 mt-0.5">WordPress &amp; React</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-purple-50/60 border border-purple-100">
                    <div className="text-[10px] uppercase font-bold text-slate-400">Core Web Vitals</div>
                    <div className="font-bold text-emerald-600 mt-0.5 flex items-center gap-1">
                      <Zap className="w-3.5 h-3.5" />
                      <span>99/100 Mobile</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2 text-xs font-mono text-slate-600 mb-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span>Fluid CSS Grid &amp; Container Queries</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span>Tailwind &amp; Accessible Semantic HTML5</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span>Custom Gutenberg Block Architecture</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-purple-100 flex items-center gap-3">
                  <button
                    type="button"
                    onClick={handleCopyTokens}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-purple-50 text-[#4F46E5] hover:bg-purple-100 transition-colors border border-purple-200 cursor-pointer"
                  >
                    {copiedToken ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Tokens Copied!</span>
                      </>
                    ) : (
                      <>
                        <Code2 className="w-3.5 h-3.5" />
                        <span>Copy Web Design Tokens</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Asymmetric Editorial Grid of 6 Web Development Images */}
          <div className="lg:col-span-7 space-y-6">
            {/* Mockup 1: Responsive Web Ecosystem (Desktop, Tablet, Mobile) */}
            <div
              className="group relative rounded-3xl overflow-hidden bg-white border border-purple-200/80 shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer"
              onClick={() => setActiveModalMockup(mockups[0])}
            >
              <div className="relative aspect-16/9 overflow-hidden bg-slate-950">
                <img
                  src={mockups[0].image}
                  alt={mockups[0].title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-[#121024]/85 via-transparent to-transparent pointer-events-none"
                  aria-hidden="true"
                />

                <div className="absolute top-4 left-4 z-20">
                  <span className="px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-extrabold uppercase tracking-wider text-[#4F46E5] shadow-xs">
                    {mockups[0].category}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 z-20 flex items-end justify-between text-white">
                  <div>
                    <h3 className="font-display text-lg sm:text-xl font-bold">{mockups[0].title}</h3>
                    <p className="text-xs text-purple-200 font-medium mt-0.5">{mockups[0].subtitle}</p>
                  </div>
                  <div className="p-2 rounded-full bg-white/20 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>

            {/* Row 2: 2-Card Asymmetric Split (WordPress CMS Architecture + Wireframes) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* WordPress CMS Architecture */}
              <div
                className="group relative rounded-3xl overflow-hidden bg-white border border-purple-200/80 shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer"
                onClick={() => setActiveModalMockup(mockups[2])}
              >
                <div className="relative aspect-4/3 overflow-hidden bg-slate-950">
                  <img
                    src={mockups[2].image}
                    alt={mockups[2].title}
                    className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-700 ease-out"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-[#121024]/85 via-transparent to-transparent pointer-events-none"
                    aria-hidden="true"
                  />
                  <div className="absolute top-3.5 left-3.5 z-20">
                    <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-extrabold uppercase tracking-wider text-[#6C63FF] shadow-xs">
                      {mockups[2].category}
                    </span>
                  </div>
                  <div className="absolute bottom-3.5 left-3.5 right-3.5 z-20 flex items-end justify-between text-white">
                    <div>
                      <h3 className="font-display text-base font-bold">{mockups[2].title}</h3>
                      <p className="text-[11px] text-purple-200 mt-0.5">{mockups[2].subtitle}</p>
                    </div>
                    <div className="p-1.5 rounded-full bg-white/20 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-opacity">
                      <Maximize2 className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Wireframes & Information Architecture */}
              <div
                className="group relative rounded-3xl overflow-hidden bg-white border border-purple-200/80 shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer"
                onClick={() => setActiveModalMockup(mockups[3])}
              >
                <div className="relative aspect-4/3 overflow-hidden bg-slate-950">
                  <img
                    src={mockups[3].image}
                    alt={mockups[3].title}
                    className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-700 ease-out"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-[#121024]/85 via-transparent to-transparent pointer-events-none"
                    aria-hidden="true"
                  />
                  <div className="absolute top-3.5 left-3.5 z-20">
                    <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-extrabold uppercase tracking-wider text-[#EC4899] shadow-xs">
                      {mockups[3].category}
                    </span>
                  </div>
                  <div className="absolute bottom-3.5 left-3.5 right-3.5 z-20 flex items-end justify-between text-white">
                    <div>
                      <h3 className="font-display text-base font-bold">{mockups[3].title}</h3>
                      <p className="text-[11px] text-purple-200 mt-0.5">{mockups[3].subtitle}</p>
                    </div>
                    <div className="p-1.5 rounded-full bg-white/20 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-opacity">
                      <Maximize2 className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Row 3: Performance Analytics (16:9 Hero Card) */}
            <div
              className="group relative rounded-3xl overflow-hidden bg-white border border-purple-200/80 shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer"
              onClick={() => setActiveModalMockup(mockups[4])}
            >
              <div className="relative aspect-16/9 overflow-hidden bg-slate-950">
                <img
                  src={mockups[4].image}
                  alt={mockups[4].title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-[#121024]/85 via-transparent to-transparent pointer-events-none"
                  aria-hidden="true"
                />
                <div className="absolute top-3.5 left-3.5 z-20">
                  <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-extrabold uppercase tracking-wider text-[#10B981] shadow-xs">
                    {mockups[4].category}
                  </span>
                </div>
                <div className="absolute bottom-3.5 left-3.5 right-3.5 z-20 flex items-end justify-between text-white">
                  <div>
                    <h3 className="font-display text-base sm:text-lg font-bold">{mockups[4].title}</h3>
                    <p className="text-[11px] text-purple-200 mt-0.5">{mockups[4].subtitle}</p>
                  </div>
                  <div className="p-1.5 rounded-full bg-white/20 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </div>

            {/* Row 4: 2-Card Split (Website Header Navigation + Retina Viewport) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Website Header Navigation */}
              <div
                className="group relative rounded-3xl overflow-hidden bg-white border border-purple-200/80 shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer"
                onClick={() => setActiveModalMockup(mockups[5])}
              >
                <div className="relative aspect-16/10 overflow-hidden bg-slate-950">
                  <img
                    src={mockups[5].image}
                    alt={mockups[5].title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-[#121024]/85 via-transparent to-transparent pointer-events-none"
                    aria-hidden="true"
                  />
                  <div className="absolute top-3.5 left-3.5 z-20">
                    <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-extrabold uppercase tracking-wider text-[#3B82F6] shadow-xs">
                      {mockups[5].category}
                    </span>
                  </div>
                  <div className="absolute bottom-3.5 left-3.5 right-3.5 z-20 flex items-end justify-between text-white">
                    <div>
                      <h3 className="font-display text-base font-bold">{mockups[5].title}</h3>
                      <p className="text-[11px] text-purple-200 mt-0.5">{mockups[5].subtitle}</p>
                    </div>
                    <div className="p-1.5 rounded-full bg-white/20 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-opacity">
                      <Maximize2 className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Retina Display Web Viewport */}
              <div
                className="group relative rounded-3xl overflow-hidden bg-white border border-purple-200/80 shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer"
                onClick={() => setActiveModalMockup(mockups[6])}
              >
                <div className="relative aspect-16/10 overflow-hidden bg-slate-950">
                  <img
                    src={mockups[6].image}
                    alt={mockups[6].title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-[#121024]/85 via-transparent to-transparent pointer-events-none"
                    aria-hidden="true"
                  />
                  <div className="absolute top-3.5 left-3.5 z-20">
                    <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-extrabold uppercase tracking-wider text-[#8B5CF6] shadow-xs">
                      {mockups[6].category}
                    </span>
                  </div>
                  <div className="absolute bottom-3.5 left-3.5 right-3.5 z-20 flex items-end justify-between text-white">
                    <div>
                      <h3 className="font-display text-base font-bold">{mockups[6].title}</h3>
                      <p className="text-[11px] text-purple-200 mt-0.5">{mockups[6].subtitle}</p>
                    </div>
                    <div className="p-1.5 rounded-full bg-white/20 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-opacity">
                      <Maximize2 className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal for Web Architecture Deep-Dive */}
      {activeModalMockup && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setActiveModalMockup(null)}
        >
          <div
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl border border-purple-200 p-6 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveModalMockup(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900 transition-colors cursor-pointer"
              aria-label="Close web architecture preview"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-4">
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#8B5CF6]">
                {activeModalMockup.category}
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                {activeModalMockup.title}
              </h3>
              <p className="text-sm text-slate-500 font-medium">{activeModalMockup.subtitle}</p>
            </div>

            <div className="relative aspect-16/9 rounded-2xl overflow-hidden bg-slate-950 border border-purple-100 mb-6">
              <img
                src={activeModalMockup.image}
                alt={activeModalMockup.title}
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
              />
            </div>

            <p className="text-sm text-slate-600 leading-relaxed font-normal mb-6">
              {activeModalMockup.description}
            </p>

            <div className="pt-4 border-t border-purple-100 flex items-center justify-between text-xs text-slate-500">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Engineered for Production Web Standards</span>
              </div>
              <button
                type="button"
                onClick={() => setActiveModalMockup(null)}
                className="btn-gradient-secondary px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

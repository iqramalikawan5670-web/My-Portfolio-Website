import React from 'react';
import { ArrowUp, Linkedin, Mail, MessageCircle } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { BrandLogo } from './BrandLogo';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-purple-100 py-16 text-slate-600 text-xs relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-purple-100">
          {/* Official Brand Logo */}
          <div className="text-center md:text-left flex flex-col items-center md:items-start">
            <a href="#home" className="block transition-transform duration-300 hover:scale-105">
              <BrandLogo variant="horizontal" size="md" />
            </a>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-xs font-semibold text-slate-600">
            <a href="#home" className="hover:text-[#4F46E5] transition-colors">
              Home
            </a>
            <a href="#brand-identity" className="hover:text-[#4F46E5] transition-colors">
              Identity
            </a>
            <a href="#about" className="hover:text-[#4F46E5] transition-colors">
              About
            </a>
            <a href="#services" className="hover:text-[#4F46E5] transition-colors">
              Services
            </a>
            <a href="#skills" className="hover:text-[#4F46E5] transition-colors">
              Skills
            </a>
            <a href="#portfolio" className="hover:text-[#4F46E5] transition-colors">
              Portfolio
            </a>
            <a href="#experience" className="hover:text-[#4F46E5] transition-colors">
              Experience
            </a>
            <a href="#process" className="hover:text-[#4F46E5] transition-colors">
              Process
            </a>
            <a href="#contact" className="hover:text-[#4F46E5] transition-colors">
              Contact
            </a>
          </nav>

          {/* Social Icons & Back to top */}
          <div className="flex items-center gap-3">
            <a
              href={PORTFOLIO_DATA.profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-purple-50 border border-purple-200 text-[#0A66C2] hover:bg-[#0A66C2] hover:text-white flex items-center justify-center transition-all shadow-xs"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${PORTFOLIO_DATA.profile.email}`}
              className="w-10 h-10 rounded-full bg-purple-50 border border-purple-200 text-[#4F46E5] hover:bg-[#4F46E5] hover:text-white flex items-center justify-center transition-all shadow-xs"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <a
              href={PORTFOLIO_DATA.profile.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-purple-50 border border-purple-200 text-emerald-600 hover:bg-emerald-600 hover:text-white flex items-center justify-center transition-all shadow-xs"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full btn-gradient-primary text-white flex items-center justify-center transition-all ml-2 cursor-pointer shadow-md"
              aria-label="Back to top"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <div>
            © 2026 Iqra Malik. All Rights Reserved.
          </div>
          <div className="text-slate-400 font-medium">
            Custom Geometric IM Monogram · Cross-Platform Digital Identity
          </div>
        </div>
      </div>
    </footer>
  );
};

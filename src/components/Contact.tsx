import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Send,
  CheckCircle2,
  Copy,
  Check,
  MessageCircle,
  ArrowUpRight,
  Sparkles
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'WordPress Development',
    message: ''
  });

  const [copiedType, setCopiedType] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMsg('Please complete all required fields.');
      return;
    }
    setErrorMsg('');
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <section
      id="contact"
      className="py-24 md:py-32 bg-gradient-to-b from-[#F8F7FF] via-purple-50/25 to-[#FAF9F6] relative overflow-hidden"
    >
      {/* Background glowing blobs */}
      <div
        className="absolute top-10 right-10 w-[30rem] h-[30rem] rounded-full bg-gradient-to-bl from-pink-200/20 to-purple-200/20 blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-gradient-to-tr from-blue-200/20 to-transparent blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-100/80 border border-purple-200 text-xs font-bold uppercase tracking-wider text-[#6C63FF] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Direct Inquiry</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-slate-900 font-extrabold tracking-tight mb-4 text-balance">
            Let's Build Something Great
          </h2>

          <p className="text-base text-slate-600 leading-relaxed font-normal text-pretty">
            {PORTFOLIO_DATA.profile.contactSubheading}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Left Column: Floating Contact Cards + Unique Digital Illustration 10 (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="agency-card rounded-3xl p-8 bg-white/95 border border-purple-200/80 shadow-md">
              <h3 className="font-display text-2xl font-extrabold text-slate-900 mb-2">
                Direct Channels
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mb-8 leading-relaxed font-normal">
                Connect directly via email, phone, WhatsApp or LinkedIn to discuss your project scope.
              </p>

              <div className="space-y-4">
                {/* Email */}
                <div className="flex items-center justify-between p-4 rounded-2xl bg-purple-50/60 border border-purple-100 hover:border-purple-300 transition-all">
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#3B82F6] to-[#4F46E5] text-white flex items-center justify-center shrink-0 shadow-xs">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] uppercase font-bold tracking-wider text-slate-400">
                        Email
                      </div>
                      <a
                        href={`mailto:${PORTFOLIO_DATA.profile.email}`}
                        className="text-xs sm:text-sm font-bold text-slate-900 hover:text-[#4F46E5] transition-colors break-all"
                      >
                        {PORTFOLIO_DATA.profile.email}
                      </a>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => copyToClipboard(PORTFOLIO_DATA.profile.email, 'email')}
                    className="p-2 text-slate-400 hover:text-slate-800 transition-colors shrink-0"
                    title="Copy Email"
                    aria-label="Copy Email address"
                  >
                    {copiedType === 'email' ? (
                      <Check className="w-4 h-4 text-emerald-600" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Location */}
                <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-purple-50/60 border border-purple-100">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#EC4899] to-[#8B5CF6] text-white flex items-center justify-center shrink-0 shadow-xs">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold tracking-wider text-slate-400">
                      Location
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-slate-900">
                      {PORTFOLIO_DATA.profile.location}
                    </div>
                  </div>
                </div>

                {/* LinkedIn */}
                <div className="flex items-center justify-between p-4 rounded-2xl bg-purple-50/60 border border-purple-100 hover:border-purple-300 transition-all">
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[#0A66C2] text-white flex items-center justify-center shrink-0 shadow-xs">
                      <Linkedin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] uppercase font-bold tracking-wider text-slate-400">
                        LinkedIn
                      </div>
                      <a
                        href={PORTFOLIO_DATA.profile.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs sm:text-sm font-bold text-slate-900 hover:text-[#0A66C2] transition-colors inline-flex items-center gap-1"
                      >
                        <span>{PORTFOLIO_DATA.profile.linkedinHandle}</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center justify-between p-4 rounded-2xl bg-purple-50/60 border border-purple-100 hover:border-purple-300 transition-all">
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#8B5CF6] to-[#6C63FF] text-white flex items-center justify-center shrink-0 shadow-xs">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] uppercase font-bold tracking-wider text-slate-400">
                        Phone
                      </div>
                      <a
                        href={`tel:${PORTFOLIO_DATA.profile.phone.replace(/\s+/g, '')}`}
                        className="text-xs sm:text-sm font-bold text-slate-900 hover:text-[#4F46E5] transition-colors"
                      >
                        {PORTFOLIO_DATA.profile.phone}
                      </a>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => copyToClipboard(PORTFOLIO_DATA.profile.phone, 'phone')}
                    className="p-2 text-slate-400 hover:text-slate-800 transition-colors shrink-0"
                    title="Copy Phone"
                    aria-label="Copy Phone number"
                  >
                    {copiedType === 'phone' ? (
                      <Check className="w-4 h-4 text-emerald-600" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Direct WhatsApp Action */}
              <div className="mt-6 pt-5 border-t border-purple-100">
                <a
                  href={PORTFOLIO_DATA.profile.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl text-xs font-bold uppercase tracking-wider bg-emerald-600 hover:bg-emerald-700 text-white transition-all shadow-md hover:shadow-lg"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Start WhatsApp Conversation</span>
                </a>
              </div>
            </div>

            {/* Unique Image 10: Subtle Digital Communication Illustration */}
            <div className="relative rounded-3xl overflow-hidden bg-white/90 border border-purple-200/80 p-3 shadow-md flex items-center gap-4">
              <div className="w-20 h-20 rounded-2xl overflow-hidden shrink-0 bg-slate-950">
                <img
                  src="/src/assets/images/contact_abstract_illustration_1790166949994.jpg"
                  alt="Abstract digital communication illustration"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>
              <div className="pr-3">
                <div className="text-xs font-extrabold text-slate-900">
                  Global Remote Availability
                </div>
                <div className="text-[11px] text-slate-500 leading-snug mt-0.5">
                  Available for WordPress contracts, agency retainers, and new web projects worldwide.
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Modern Contact Form with Glassmorphism (7 cols) */}
          <div className="lg:col-span-7">
            <div className="agency-card rounded-3xl p-8 sm:p-10 bg-white/95 border border-purple-200/80 shadow-md">
              {submitted ? (
                <div className="py-12 text-center animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#10B981] to-[#3B82F6] text-white flex items-center justify-center mx-auto mb-5 shadow-lg">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-display text-2xl font-black text-slate-900 mb-2">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed mb-6 font-normal">
                    Thank you, <span className="font-bold text-slate-900">{formData.name}</span>.
                    I will review your project requirements and respond to{' '}
                    <span className="font-bold text-slate-900">{formData.email}</span> within 24 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        projectType: 'WordPress Development',
                        message: ''
                      });
                    }}
                    className="btn-gradient-secondary inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider"
                  >
                    <span>Send Another Inquiry</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="font-display text-2xl font-extrabold text-slate-900 mb-1">
                      Project Specifications
                    </h3>
                    <p className="text-xs text-slate-500 font-normal">
                      Share your goals and vision to receive a custom proposal and implementation roadmap.
                    </p>
                  </div>

                  {errorMsg && (
                    <div className="p-3 text-xs text-rose-700 bg-rose-50 border border-rose-200 rounded-xl">
                      {errorMsg}
                    </div>
                  )}

                  {/* Name & Email Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Elena Vance"
                        className="w-full px-4 py-3.5 text-sm rounded-2xl bg-purple-50/40 backdrop-blur-md border border-purple-200 text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:border-[#8B5CF6] focus:ring-2 focus:ring-[#8B5CF6]/30 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="elena@company.com"
                        className="w-full px-4 py-3.5 text-sm rounded-2xl bg-purple-50/40 backdrop-blur-md border border-purple-200 text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:border-[#8B5CF6] focus:ring-2 focus:ring-[#8B5CF6]/30 transition-all"
                      />
                    </div>
                  </div>

                  {/* Project Type */}
                  <div>
                    <label
                      htmlFor="projectType"
                      className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2"
                    >
                      Project Type *
                    </label>
                    <select
                      id="projectType"
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-3.5 text-sm rounded-2xl bg-purple-50/40 backdrop-blur-md border border-purple-200 text-slate-900 focus:outline-hidden focus:border-[#8B5CF6] focus:ring-2 focus:ring-[#8B5CF6]/30 transition-all"
                    >
                      <option value="WordPress Development">WordPress Development</option>
                      <option value="Website Development">Website Development</option>
                      <option value="Elementor Design">Elementor Design</option>
                      <option value="Responsive Web Design">Responsive Web Design</option>
                      <option value="UI/UX Design">UI/UX Design</option>
                      <option value="Website Maintenance">Website Maintenance</option>
                      <option value="Performance Optimization">Performance Optimization</option>
                    </select>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your website goals, any specific features you need, and preferred completion timeline..."
                      className="w-full px-4 py-3.5 text-sm rounded-2xl bg-purple-50/40 backdrop-blur-md border border-purple-200 text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:border-[#8B5CF6] focus:ring-2 focus:ring-[#8B5CF6]/30 transition-all resize-y"
                    />
                  </div>

                  {/* Button: SEND MESSAGE */}
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-gradient-primary w-full inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl text-xs sm:text-sm font-extrabold uppercase tracking-wider cursor-pointer disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <span>SENDING INQUIRY...</span>
                      ) : (
                        <>
                          <span>SEND MESSAGE</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

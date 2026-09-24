export interface ProfileData {
  name: string;
  title: string;
  tagline: string;
  experienceYears: string;
  projectCount: string;
  dedication: string;
  location: string;
  email: string;
  phone: string;
  whatsapp: string;
  linkedin: string;
  linkedinHandle: string;
  heroKicker: string;
  heroHeadingPrefix: string;
  heroHeadingHighlight: string;
  heroSupporting: string;
  aboutHeading: string;
  aboutBio: string;
  servicesHeading: string;
  servicesSubheading: string;
  skillsHeading: string;
  skillsSubheading: string;
  portfolioHeading: string;
  portfolioSubheading: string;
  whyHeading: string;
  whySubheading: string;
  contactHeading: string;
  contactSubheading: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  gradient: string;
  badge: string;
  deliverables: string[];
}

export interface SkillItem {
  name: string;
  category: 'core' | 'frontend' | 'optimization' | 'design';
  level: number;
  iconName: string;
  gradient: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  categoryKey: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  tools: string[];
  metrics: { label: string; value: string }[];
  liveUrl?: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  responsibilities: string[];
}

export interface WhyChooseItem {
  title: string;
  description: string;
  iconName: string;
  gradient: string;
  metric: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  details: string[];
  iconName: string;
  gradient: string;
}

export interface BrandMockupItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  image: string;
  description: string;
}

export const PORTFOLIO_DATA = {
  profile: {
    name: 'Iqra Malik',
    title: 'WordPress & Web Developer',
    tagline: 'WordPress & Web Developer · 3 Years of Experience',
    experienceYears: '03+',
    projectCount: '20+',
    dedication: '100%',
    location: 'Sargodha, Pakistan',
    email: 'iqramalikawan5670@gmail.com',
    phone: '+92 300 5879081',
    whatsapp: 'https://wa.me/923005879081',
    linkedin: 'https://www.linkedin.com/in/iqramalik33',
    linkedinHandle: 'linkedin.com/in/iqramalik33',
    heroKicker: 'WordPress & Web Developer',
    heroHeadingPrefix: 'I create modern, responsive & high-performing websites that turn ideas into',
    heroHeadingHighlight: 'memorable digital experiences.',
    heroSupporting:
      'Web Developer with 3 years of commercial experience in WordPress, Elementor, HTML, CSS and JavaScript. Focused on clean code, seamless responsiveness, and high conversion.',
    aboutHeading: 'Meet the Dev Behind the Work',
    aboutBio:
      'Web Developer with 3 years of experience in developing and maintaining responsive websites using WordPress, HTML, CSS, and JavaScript. Skilled in website customization, responsive design, troubleshooting, and performance optimization. Strong understanding of modern web development practices with a focus on clean, user-friendly, and functional websites.',
    servicesHeading: 'What I Can Do For You',
    servicesSubheading:
      'Engineered with modern 2026 aesthetics, lightning-fast Core Web Vitals, and intuitive WordPress admin editing.',
    skillsHeading: 'My Skills & Technologies',
    skillsSubheading:
      'Comprehensive toolkit blending core WordPress CMS mastery, modern frontend styling, and speed optimization.',
    portfolioHeading: 'Selected Work',
    portfolioSubheading:
      'Explore recent commercial web development projects engineered with precision and responsive design.',
    whyHeading: 'Why Choose My Work?',
    whySubheading:
      'Proven expertise combining clean architecture, rapid delivery, and relentless focus on client success.',
    contactHeading: "Let's Build Something Great",
    contactSubheading:
      'Have an upcoming project or need a high-performing WordPress website? Connect directly for a custom proposal.'
  } as ProfileData,

  // 6 Core 2026 Services with unique 3D/icon composition
  services: [
    {
      id: 'service-wp-dev',
      title: 'WordPress Development',
      description:
        'Custom WordPress architectures, bespoke templates, theme engineering, and tailored backend configurations built for scale.',
      iconName: 'LayoutGrid',
      gradient: 'from-[#3B82F6] to-[#4F46E5]',
      badge: 'Core CMS',
      deliverables: ['Custom Themes', 'Database Architecture', 'Secure Setup']
    },
    {
      id: 'service-web-dev',
      title: 'Website Development',
      description:
        'Clean semantic HTML5, modern CSS3, and JavaScript integrations ensuring cross-browser perfection and reliable UX.',
      iconName: 'Code',
      gradient: 'from-[#4F46E5] to-[#8B5CF6]',
      badge: 'Frontend Stack',
      deliverables: ['Clean Code', 'Interactive Components', 'API Integrations']
    },
    {
      id: 'service-elementor',
      title: 'Elementor Design',
      description:
        'Pixel-perfect Elementor Pro site building with responsive breakpoints, global design tokens, and smooth motion.',
      iconName: 'Sliders',
      gradient: 'from-[#8B5CF6] to-[#6C63FF]',
      badge: 'Visual Builder',
      deliverables: ['Custom Templates', 'Dynamic Content', 'Global Styling']
    },
    {
      id: 'service-responsive',
      title: 'Responsive Web Design',
      description:
        'Fluid viewport architectures designed specifically for smartphones, tablets, laptops, and ultra-wide desktop monitors.',
      iconName: 'Smartphone',
      gradient: 'from-[#EC4899] to-[#8B5CF6]',
      badge: 'Multi-Screen',
      deliverables: ['Mobile First', 'Adaptive Layouts', 'Touch Friendly']
    },
    {
      id: 'service-ui-ux',
      title: 'UI/UX Design',
      description:
        'Intuitive interface hierarchies, typography systems, modern glassmorphic aesthetics, and conversion-focused user journeys.',
      iconName: 'Palette',
      gradient: 'from-[#3B82F6] to-[#EC4899]',
      badge: 'Visual Experience',
      deliverables: ['Design Systems', 'Micro-Interactions', 'User Flows']
    },
    {
      id: 'service-maintenance',
      title: 'Website Maintenance',
      description:
        'Proactive WordPress core updates, automated backups, vulnerability patching, speed audits, and bug troubleshooting.',
      iconName: 'ShieldCheck',
      gradient: 'from-[#10B981] to-[#3B82F6]',
      badge: 'Ongoing Support',
      deliverables: ['Weekly Backups', 'Security Scans', 'Speed Audits']
    }
  ] as ServiceItem[],

  // Interactive Digital Skills
  skills: [
    { name: 'WordPress', category: 'core', level: 95, iconName: 'LayoutGrid', gradient: 'from-[#3B82F6] to-[#4F46E5]' },
    { name: 'Elementor', category: 'core', level: 95, iconName: 'Sliders', gradient: 'from-[#8B5CF6] to-[#6C63FF]' },
    { name: 'HTML5', category: 'frontend', level: 96, iconName: 'Code', gradient: 'from-[#EC4899] to-[#8B5CF6]' },
    { name: 'CSS3', category: 'frontend', level: 94, iconName: 'Palette', gradient: 'from-[#3B82F6] to-[#8B5CF6]' },
    { name: 'JavaScript', category: 'frontend', level: 88, iconName: 'FileCode2', gradient: 'from-[#6C63FF] to-[#3B82F6]' },
    { name: 'Responsive Design', category: 'design', level: 98, iconName: 'Smartphone', gradient: 'from-[#8B5CF6] to-[#EC4899]' },
    { name: 'Theme Customization', category: 'core', level: 92, iconName: 'Paintbrush', gradient: 'from-[#4F46E5] to-[#EC4899]' },
    { name: 'UI Design', category: 'design', level: 90, iconName: 'Figma', gradient: 'from-[#EC4899] to-[#8B5CF6]' },
    { name: 'SEO', category: 'optimization', level: 86, iconName: 'Search', gradient: 'from-[#10B981] to-[#3B82F6]' },
    { name: 'Performance Optimization', category: 'optimization', level: 92, iconName: 'Zap', gradient: 'from-[#3B82F6] to-[#6C63FF]' }
  ] as SkillItem[],

  // 7 Web Architecture & Digital Identity Mockups (Section 5)
  brandMockups: [
    {
      id: 'mockup-responsive-ecosystem',
      title: 'Responsive Web Ecosystem',
      subtitle: 'Multi-Device Adaptive Layouts (Desktop, Tablet, Mobile)',
      category: '01 · Multi-Device Architecture',
      image: '/src/assets/images/responsive_web_ecosystem_1790168451700.jpg',
      description: 'Seamless responsive layout engineering showing desktop SaaS interfaces, tablet views, and fluid mobile web navigation optimized for every modern screen breakpoint.'
    },
    {
      id: 'mockup-design-system',
      title: 'Web Design System & UI Kit',
      subtitle: 'Modular Components, Design Tokens & Color Harmony',
      category: '02 · Component Architecture',
      image: '/src/assets/images/web_design_system_ui_1790168439298.jpg',
      description: 'A comprehensive web design system featuring reusable UI components, accessible button states, typography hierarchy, and modular card systems engineered for consistency.'
    },
    {
      id: 'mockup-wordpress-arch',
      title: 'WordPress CMS Architecture',
      subtitle: 'Bespoke Theme Development & Block Editor Customization',
      category: '03 · Core CMS Engineering',
      image: '/src/assets/images/wordpress_web_architecture_1790168464539.jpg',
      description: 'Custom WordPress backend and frontend engineering: lightweight Gutenberg blocks, clean semantic code, tailored custom post types, and intuitive client administration.'
    },
    {
      id: 'mockup-wireframe',
      title: 'UI/UX Wireframes & Flow Architecture',
      subtitle: 'User Journeys, Digital Blueprints & Prototypes',
      category: '04 · Information Architecture',
      image: '/src/assets/images/web_wireframe_prototype_1790168475354.jpg',
      description: 'Wireframing and interactive digital prototyping mapping user flows, conversion funnels, and component layouts before frontend implementation.'
    },
    {
      id: 'mockup-performance',
      title: 'Core Web Vitals & Speed Analytics',
      subtitle: '99/100 Google PageSpeed & Real-Time Telemetry',
      category: '05 · Performance Optimization',
      image: '/src/assets/images/web_performance_analytics_1790168485955.jpg',
      description: 'High-performance web metrics monitoring dashboard showing sub-second LCP (Largest Contentful Paint), zero cumulative layout shifts, and optimized asset delivery.'
    },
    {
      id: 'mockup-header',
      title: 'Interactive Website Navigation & Header',
      subtitle: 'Floating Glassmorphic Menu & Micro-Interactions',
      category: '06 · Frontend Navigation',
      image: '/src/assets/images/brand_mockup_website_header_1790167363300.jpg',
      description: 'Floating glassmorphic web header interface featuring smooth dropdowns, accessible keyboard focus states, and dynamic scroll response.'
    },
    {
      id: 'mockup-laptop',
      title: 'Retina Display Web Viewport',
      subtitle: 'High-Resolution Web Canvas Experience',
      category: '07 · Web Canvas Presentation',
      image: '/src/assets/images/brand_mockup_laptop_display_1790167406645.jpg',
      description: 'Production web interface rendered on a high-DPI display, demonstrating pixel-perfect grid alignment and typography rendering.'
    }
  ] as BrandMockupItem[],

  // 6 Projects with 6 COMPLETELY UNIQUE Mockup Images
  projects: [
    {
      id: 'proj-1',
      title: 'Aura Capital — Luxury Business Website',
      category: 'Luxury Business Website',
      categoryKey: 'business',
      shortDesc:
        'A high-end corporate financial advisory website engineered with WordPress, custom Elementor animations, and multi-tier service architectures.',
      fullDesc:
        'Engineered an ultra-premium corporate advisory portal for Aura Capital. Integrated bespoke post types for executive team profiles, private portal login gateways, dynamic case studies, and a 99/100 Google PageSpeed score.',
      image: '/src/assets/images/proj1_luxury_business_1790166899224.jpg',
      tools: ['WordPress', 'Elementor Pro', 'Advanced Custom Fields', 'Tailwind/CSS', 'PageSpeed 99'],
      metrics: [
        { label: 'PageSpeed', value: '99/100' },
        { label: 'Load Time', value: '0.8s' },
        { label: 'Conversion Lift', value: '+42%' },
        { label: 'Mobile Score', value: '100%' }
      ]
    },
    {
      id: 'proj-2',
      title: 'Vanguard Estates — Modern Real Estate Website',
      category: 'Real Estate Website',
      categoryKey: 'realestate',
      shortDesc:
        'Bespoke architectural property platform featuring interactive floor plans, neighborhood mapping, and high-resolution media galleries.',
      fullDesc:
        'Designed and deployed an architectural real estate showcase for luxury residences. Features dynamic property filtering, interactive inquiry scheduling, virtual tour modals, and responsive layout across all viewports.',
      image: '/src/assets/images/portfolio_realestate_luxury_1790165593104.jpg',
      tools: ['WordPress Core', 'Elementor', 'JavaScript Filters', 'Custom Map UI', 'Schema SEO'],
      metrics: [
        { label: 'Inquiries', value: '+180%' },
        { label: 'Time on Page', value: '4m 12s' },
        { label: 'Bounce Rate', value: '28%' },
        { label: 'Responsiveness', value: 'Fluid' }
      ]
    },
    {
      id: 'proj-3',
      title: 'Hyperion Atelier — Creative Portfolio',
      category: 'Creative Portfolio',
      categoryKey: 'creative',
      shortDesc:
        'Bold modern portfolio website featuring dark luxury aesthetics, glassmorphic bento cards, and interactive showcase drawers.',
      fullDesc:
        'Built for a creative branding and industrial design studio. Includes fluid web canvas animations, kinetic typography, modular case study layouts, and seamless client presentation decks.',
      image: '/src/assets/images/creative_agency_bento_mockup_1790166050486.jpg',
      tools: ['WordPress', 'CSS3 Grid', 'JavaScript Motion', 'Elementor', 'SVG Assets'],
      metrics: [
        { label: 'Visual Impact', value: '10/10' },
        { label: 'Awards', value: 'Site of the Day' },
        { label: 'Client Feedback', value: 'Exceptional' },
        { label: 'Asset Optimization', value: '98%' }
      ]
    },
    {
      id: 'proj-4',
      title: 'Maison Éthérée — E-Commerce Website',
      category: 'E-Commerce Website',
      categoryKey: 'ecommerce',
      shortDesc:
        'Luxury lifestyle commerce boutique with custom side-cart flyout, currency switcher, and high-converting checkout funnel.',
      fullDesc:
        'End-to-end WooCommerce build for a luxury boutique brand. Custom product variations, sticky add-to-bag triggers, dynamic related collections, and frictionless one-page checkout.',
      image: '/src/assets/images/portfolio_lux_ecommerce_1790165562025.jpg',
      tools: ['WordPress', 'WooCommerce', 'Elementor Pro', 'Stripe Gateway', 'Speed Boost'],
      metrics: [
        { label: 'Sales Growth', value: '+215%' },
        { label: 'Cart Abandonment', value: '-34%' },
        { label: 'Checkout Time', value: '45s' },
        { label: 'Repeat Rate', value: '38%' }
      ]
    },
    {
      id: 'proj-5',
      title: 'Nexis Advisory — Professional Service Website',
      category: 'Professional Service Website',
      categoryKey: 'service',
      shortDesc:
        'Fintech consulting & business advisory website with interactive ROI estimation tools, client portals, and appointment calendar.',
      fullDesc:
        'Complete web transformation for an enterprise advisory firm. Integrated interactive ROI calculation tools, custom contact workflows, GDPR compliance engines, and automated CRM lead syncing.',
      image: '/src/assets/images/portfolio_corporate_fintech_1790165577951.jpg',
      tools: ['WordPress', 'JavaScript Calculators', 'Elementor', 'CRM Sync', 'Security Hardening'],
      metrics: [
        { label: 'Lead Volume', value: '+140%' },
        { label: 'Security Score', value: 'A+' },
        { label: 'PageSpeed', value: '98/100' },
        { label: 'Uptime', value: '99.99%' }
      ]
    },
    {
      id: 'proj-6',
      title: 'Orbit Horizon — Modern Landing Page',
      category: 'Modern Landing Page',
      categoryKey: 'landing',
      shortDesc:
        'High-converting product launch landing page engineered with floating UI widgets, interactive pricing tiers, and trust proofs.',
      fullDesc:
        'Created a high-velocity conversion landing page for a SaaS platform. Features interactive toggle pricing tables, live customer metric counters, testimonial carousels, and instant lead capture modals.',
      image: '/src/assets/images/proj6_creative_landing_1790166915946.jpg',
      tools: ['WordPress', 'Elementor Canvas', 'Interactive Toggles', 'HTML5/CSS3', 'Analytics'],
      metrics: [
        { label: 'Sign-Up Rate', value: '14.8%' },
        { label: 'First Contentful Paint', value: '0.6s' },
        { label: 'Conversion Lift', value: '+65%' },
        { label: 'Responsive Test', value: '100% Pass' }
      ]
    }
  ] as ProjectItem[],

  // Career Experience
  experiences: [
    {
      role: 'WordPress Developer',
      company: 'Codex',
      period: 'Nov 2024 – May 2026',
      responsibilities: [
        'Developed and maintained responsive WordPress websites for international agency clients.',
        'Customized WordPress themes, templates, custom post types, and complex page layouts.',
        'Built and managed high-converting pages using Elementor Pro and modern WordPress CMS.',
        'Improved website layouts, typography hierarchies, navigation systems, and cross-device responsiveness.'
      ]
    },
    {
      role: 'WordPress Developer',
      company: 'CodeSignal',
      period: 'Sep 2022 – Jul 2024',
      responsibilities: [
        'Integrated and configured essential WordPress plugins, security firewalls, and performance caches.',
        'Optimized websites for responsive design, Core Web Vitals, speed, and overall user experience.',
        'Collaborated with design and marketing teams to convert Figma specifications into functional WordPress pages.',
        'Ensured consistent design branding, cross-browser compatibility, and seamless mobile usability.'
      ]
    }
  ] as ExperienceItem[],

  // 6 Cards for Why Work With Me (Section 11)
  whyChooseMe: [
    {
      title: 'Clean Development',
      description:
        'Semantic, lightweight markup and modern WordPress coding practices with zero bloat and clean theme architectures.',
      iconName: 'Code',
      gradient: 'from-[#3B82F6] to-[#4F46E5]',
      metric: 'Zero Bloat'
    },
    {
      title: 'Responsive Websites',
      description:
        'Fluid layouts tested across iPhones, iPads, Android devices, laptops, and ultra-wide screens for flawless viewing.',
      iconName: 'Smartphone',
      gradient: 'from-[#8B5CF6] to-[#6C63FF]',
      metric: '100% Mobile Pass'
    },
    {
      title: 'Performance Focused',
      description:
        'Image compression, script deferral, clean caching, and CDN integration targeting 90+ Core Web Vitals scores.',
      iconName: 'Zap',
      gradient: 'from-[#EC4899] to-[#8B5CF6]',
      metric: '0.8s Avg Load'
    },
    {
      title: 'Modern UI',
      description:
        '2026 aesthetic sensibilities: glassmorphism, sophisticated gradients, elegant typography, and micro-interactions.',
      iconName: 'Palette',
      gradient: 'from-[#4F46E5] to-[#EC4899]',
      metric: '2026 Ready'
    },
    {
      title: 'Problem Solving',
      description:
        'Swift diagnosis and permanent fixes for WordPress plugin conflicts, broken themes, layout issues, and database errors.',
      iconName: 'Wrench',
      gradient: 'from-[#10B981] to-[#3B82F6]',
      metric: 'Fast Resolution'
    },
    {
      title: 'Attention to Detail',
      description:
        'Every pixel, button hover, margin, line height, and color contrast ratio is checked to ensure agency-grade perfection.',
      iconName: 'Sparkles',
      gradient: 'from-[#6C63FF] to-[#EC4899]',
      metric: 'Pixel Perfect'
    }
  ] as WhyChooseItem[],

  // 6 Steps for Development Process (Section 12)
  processSteps: [
    {
      step: '01',
      title: 'Discover',
      subtitle: 'Requirements & Architecture',
      description:
        'In-depth review of your business goals, target audience, technical requirements, and competitor landscapes.',
      details: ['Goal Definition', 'Content Strategy', 'Site Map Planning'],
      iconName: 'Search',
      gradient: 'from-[#3B82F6] to-[#4F46E5]'
    },
    {
      step: '02',
      title: 'Plan',
      subtitle: 'Wireframing & Technical Specs',
      description:
        'Structuring information hierarchy, database entities, plugin architecture, and page layouts before coding.',
      details: ['Wireframe Schemas', 'Feature Specifications', 'Timeline Milestones'],
      iconName: 'Layers',
      gradient: 'from-[#4F46E5] to-[#8B5CF6]'
    },
    {
      step: '03',
      title: 'Design',
      subtitle: 'UI/UX & Design Tokens',
      description:
        'Creating modern visual layouts, typography systems, colorways, glassmorphic UI cards, and responsive styling.',
      details: ['Visual Mockups', 'Color & Font Tokens', 'Interactive Elements'],
      iconName: 'Palette',
      gradient: 'from-[#8B5CF6] to-[#6C63FF]'
    },
    {
      step: '04',
      title: 'Develop',
      subtitle: 'WordPress & Code Engineering',
      description:
        'Turning designs into functional WordPress pages with Elementor, semantic HTML5, CSS3, and JavaScript.',
      details: ['Theme Customization', 'Clean Semantic Code', 'CMS Setup'],
      iconName: 'Code',
      gradient: 'from-[#6C63FF] to-[#EC4899]'
    },
    {
      step: '05',
      title: 'Test',
      subtitle: 'Quality Assurance & Speed',
      description:
        'Rigorous testing across multiple devices, mobile browsers, screen sizes, speed benchmarks, and security audits.',
      details: ['Cross-Device QA', 'PageSpeed Benchmark', 'Security Testing'],
      iconName: 'CheckCircle2',
      gradient: 'from-[#EC4899] to-[#8B5CF6]'
    },
    {
      step: '06',
      title: 'Launch',
      subtitle: 'Deployment & Client Handover',
      description:
        'Zero-downtime deployment to live production hosting, DNS configuration, and client walkthrough video training.',
      details: ['Domain & SSL Setup', 'Admin Handover', 'Post-Launch Support'],
      iconName: 'Sparkles',
      gradient: 'from-[#10B981] to-[#3B82F6]'
    }
  ] as ProcessStep[]
};

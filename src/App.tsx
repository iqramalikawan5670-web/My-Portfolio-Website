/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Skills } from './components/Skills';
import { LogoShowcase } from './components/LogoShowcase';
import { Portfolio } from './components/Portfolio';
import { Experience } from './components/Experience';
import { WhyWorkWithMe } from './components/WhyWorkWithMe';
import { Process } from './components/Process';
import { CTA } from './components/CTA';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#17152B] selection:bg-[#EC4899]/20 selection:text-[#4F46E5] font-sans antialiased">
      {/* 2026 Floating Glassmorphic Navbar with Luxury Brand Mark */}
      <Navbar />

      <main>
        {/* 1. Hero Section with Kinetic Ticker & Floating Skill Badges */}
        <Hero />

        {/* 2. About Section: "Meet the Dev Behind the Work" */}
        <About />

        {/* 3. Services Section: 6 Core Services with 2026 Micro-Interactions */}
        <Services />

        {/* 4. Skills Section: Interactive Digital Skills Interface */}
        <Skills />

        {/* 5. Brand Identity / Logo Showcase: "My Digital Identity" + 7 Unique Mockups */}
        <LogoShowcase />

        {/* 6. Portfolio Section: 6 Unique Projects & Realistic Browser Mockups */}
        <Portfolio />

        {/* 7. Experience Section: Modern Interactive Timeline */}
        <Experience />

        {/* 8. Why Work With Me: 6 Animated Glass Cards & Digital Visual */}
        <WhyWorkWithMe />

        {/* 9. Development Process: 6-Stage Interactive Roadmap */}
        <Process />

        {/* 10. CTA Section: "Would You Like to Start a Project With Me?" + 3D Portal Visual */}
        <CTA />

        {/* 11. Contact Section: "Let's Build Something Great" + Direct Channels */}
        <Contact />
      </main>

      {/* Modern Agency Footer */}
      <Footer />
    </div>
  );
}

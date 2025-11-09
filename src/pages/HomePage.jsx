import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import TechStackSection from '../components/TechStackSection';
import ProjectsSection from '../components/ProjectsSection';
import ExperienceSection from '../components/ExperienceSection';
import CertificationsSection from '../components/CertificationsSection';
import CodeShowcaseSection from '../components/CodeShowcaseSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="bg-[#0f0f10] min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <TechStackSection />
      <ProjectsSection />
      <ExperienceSection />
      <CertificationsSection />
      <CodeShowcaseSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default HomePage;
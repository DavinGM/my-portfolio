import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { ArrowRight, Github, Linkedin, Instagram, Facebook, Twitter } from 'lucide-react';
import { portfolioData } from '../mock';
import TargetCursor from './ui/TargetCursor';

const HeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = portfolioData.profile.title;
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        setIsTypingComplete(true);
        clearInterval(typingInterval);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
    <TargetCursor 
        spinDuration={2}
        hideDefaultCursor={true}
        parallaxOn={true}
      />

    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-[#8B5CF6]/10 via-[#0f0f10] to-[#0f0f10]"></div>
      
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#8B5CF6]/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#A855F7]/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <div className="space-y-2">
              <p className="text-[#8B5CF6] text-sm sm:text-base font-medium tracking-wider uppercase">Hallo ,</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
                {portfolioData.profile.name.split(' ')[0]}
                <br />
                <span className="text-[#8B5CF6]">{portfolioData.profile.name.split(' ').slice(1).join(' ')}</span>
              </h1>
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                {portfolioData.profile.nicknames.map((nickname, index) => (
                  <span key={index} className="text-gray-400 text-base sm:text-lg">atau <span className="text-[#C4B5FD]">{nickname}</span></span>
                ))}
              </div>
            </div>

            <div className="min-h-[80px] flex items-center justify-center lg:justify-start">
              <h2 className=" text-xl sm:text-2xl lg:text-3xl text-gray-300 font-medium">
                {displayText}
                {!isTypingComplete && <span className="animate-pulse ml-1 text-[#8B5CF6]">|</span>}
              </h2>
            </div>

            <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0">
              {portfolioData.profile.bio}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button
                onClick={() => scrollToSection('projects')}
                className="cursor-target  bg-[#8B5CF6] hover:bg-[#A855F7] text-white px-8 py-6 text-lg transition-all duration-300 transform hover:scale-105"
              >
                Lihat Proyek
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                onClick={() => scrollToSection('contact')}
                variant="outline"
                className=" cursor-target border-[#8B5CF6] text-[#8B5CF6] hover:bg-[#8B5CF6] hover:text-white px-8 py-6 text-lg transition-all duration-300"
              >
                Hubungi saya
              </Button>
            </div>
          </div>
          <div className="relative hidden lg:flex justify-center items-center">
            <div className="relative w-full max-w-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-[#8B5CF6] to-[#A855F7] rounded-full blur-3xl opacity-20 animate-pulse"></div>
              <img
                src={portfolioData.profile.heroImage}
                alt="Developer workspace"
                className="relative rounded-2xl shadow-2xl w-full h-auto object-cover border-2 border-[#8B5CF6]/30"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[#8B5CF6] rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-[#8B5CF6] rounded-full"></div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default HeroSection;
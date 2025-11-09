import React from 'react';
import { Github, Linkedin, Instagram, Facebook, Twitter, Heart } from 'lucide-react';
import { portfolioData } from '../mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, url: portfolioData.socials.github, name: 'GitHub' },
    { icon: Linkedin, url: portfolioData.socials.linkedin, name: 'LinkedIn' },
    { icon: Instagram, url: portfolioData.socials.instagram, name: 'Instagram' },
    { icon: Facebook, url: portfolioData.socials.facebook, name: 'Facebook' },
    { icon: Twitter, url: portfolioData.socials.twitter, name: 'Twitter' }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#1a1a1a] border-t border-[#2d2d2d]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-white">Kina</span>
              <span className="text-[#8B5CF6]">Dev</span>
            </h3>
            <p className="text-gray-400 mb-4">
              saya Rutin update portofolio ini saat selesai up skils dan Project.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#8B5CF6] transition-colors duration-300"
                    aria-label={social.name}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Link Cepat</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-gray-400 hover:text-[#8B5CF6] transition-colors duration-300"
                >
                  Tentang
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('skills')}
                  className="text-gray-400 hover:text-[#8B5CF6] transition-colors duration-300"
                >
                  Skill dan telent
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('projects')}
                  className="text-gray-400 hover:text-[#8B5CF6] transition-colors duration-300"
                >
                  Project
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('experience')}
                  className="text-gray-400 hover:text-[#8B5CF6] transition-colors duration-300"
                >
                  Pengalaman
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Email: davin.gm.etc@gmail.com</li>
              <li>Location: {portfolioData.profile.location}</li>
              <li className="pt-2">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-[#8B5CF6] hover:text-[#A855F7] transition-colors duration-300 font-medium"
                >
                  Hubungi saya →
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#2d2d2d] pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} {portfolioData.profile.name}. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center gap-1">
              Made with NLFTs .ETc
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
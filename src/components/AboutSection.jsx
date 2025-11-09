import React from 'react';
import { Card } from './ui/card';
import { User, MapPin, Code } from 'lucide-react';
import { portfolioData } from '../mock';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-[#1a1a1a]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              <span className="text-[#8B5CF6]">tentang </span>ku
            </h2>
            <p className="text-gray-400 text-lg">anda mungkin ingin tau lebih lanjut?</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#8B5CF6] to-[#A855F7] rounded-2xl blur-2xl opacity-20"></div>
              <img
                src={portfolioData.profile.avatar}
                alt={portfolioData.profile.name}
                className="relative rounded-2xl shadow-2xl w-full h-auto object-cover border-2 border-[#8B5CF6]/30"
              />
            </div>

            {/* Right - Content */}
            <div className="space-y-6">
              <div>
                <h3 className="text-3xl font-bold text-white mb-4">
                  {portfolioData.profile.name}
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  <i>
                  " {portfolioData.profile.keterangan}"
                  </i>
                </p>
              </div>

              {/* Info Cards */}
              <div className="space-y-4 mt-8">
                <Card className="bg-[#0f0f10] border-[#2d2d2d] p-4 hover:border-[#8B5CF6]/50 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="bg-[#8B5CF6]/10 p-3 rounded-lg">
                      <User className="h-6 w-6 text-[#8B5CF6]" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Dapat di kenal</p>
                      <p className="text-white font-medium">
                        {portfolioData.profile.nicknames.join(', ')}
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="bg-[#0f0f10] border-[#2d2d2d] p-4 hover:border-[#8B5CF6]/50 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="bg-[#8B5CF6]/10 p-3 rounded-lg">
                      <MapPin className="h-6 w-6 text-[#8B5CF6]" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Lokasi</p>
                      <p className="text-white font-medium">
                        {portfolioData.profile.location}
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="bg-[#0f0f10] border-[#2d2d2d] p-4 hover:border-[#8B5CF6]/50 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="bg-[#8B5CF6]/10 p-3 rounded-lg">
                      <Code className="h-6 w-6 text-[#8B5CF6]" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Sepesialis</p>
                      <p className="text-white font-medium">Frontend Developer</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
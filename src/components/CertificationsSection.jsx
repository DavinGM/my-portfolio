import React from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Award } from 'lucide-react';
import { portfolioData } from '../mock';

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-20 bg-[#0f0f10]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Klarifikasi & <span className="text-[#8B5CF6]">penghargaan</span>
            </h2>
            <p className="text-gray-400 text-lg">Not Found 409</p>
          </div>

          {/* Certifications Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioData.certifications.map((cert) => (
              <Card
                key={cert.id}
                className="bg-[#1a1a1a] border-[#2d2d2d] p-6 hover:border-[#8B5CF6] hover:shadow-lg hover:shadow-[#8B5CF6]/10 transition-all duration-300 group cursor-pointer"
              >
                <div className="space-y-4">
                  {/* Icon */}
                  <div className="flex items-center justify-between">
                    <div className="bg-[#8B5CF6]/10 p-3 rounded-lg group-hover:bg-[#8B5CF6]/20 transition-colors">
                      <Award className="h-6 w-6 text-[#8B5CF6]" />
                    </div>
                    <Badge className="bg-[#8B5CF6]/10 text-[#8B5CF6] border-[#8B5CF6]/30">
                      {cert.year}
                    </Badge>
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#8B5CF6] transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-gray-400 text-sm">{cert.issuer}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
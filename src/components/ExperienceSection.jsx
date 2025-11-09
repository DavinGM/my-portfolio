import React from 'react';
import { Card } from './ui/card';
import { Briefcase, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../mock';

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 bg-[#1a1a1a]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Riwayat<span className="text-[#8B5CF6]"> pendidikan</span>
            </h2>
            <p className="text-gray-400 text-lg">jurnal perjalanan</p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-[#8B5CF6]/30 transform md:-translate-x-1/2"></div>

            {/* Experience Items */}
            <div className="space-y-12">
              {portfolioData.experience.map((exp, index) => (
                <div
                  key={exp.id}
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-[#8B5CF6] rounded-full border-4 border-[#1a1a1a] transform md:-translate-x-1/2 flex items-center justify-center z-10">
                    <Briefcase className="h-4 w-4 text-white" />
                  </div>

                  {/* Content */}
                  <div className="md:w-1/2 ml-16 md:ml-0">
                    <Card
                      className={`bg-[#0f0f10] border-[#2d2d2d] p-6 hover:border-[#8B5CF6] transition-all duration-300 ${
                        index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                      }`}
                    >
                      <div className="space-y-3">
                        <div className="flex items-start justify-between">
                          <h3 className="text-xl font-bold text-white">{exp.position}</h3>
                        </div>
                        <p className="text-[#8B5CF6] font-medium">{exp.company}</p>
                        <p className="text-gray-400 text-sm">{exp.period}</p>
                        <p className="text-gray-300 leading-relaxed">{exp.description}</p>
                        
                        {/* Achievements */}
                        <div className="space-y-2 pt-2">
                          <p className="text-white font-medium text-sm">Key Achievements:</p>
                          {exp.achievements.map((achievement, achIndex) => (
                            <div key={achIndex} className="flex items-start gap-2">
                              <CheckCircle2 className="h-4 w-4 text-[#8B5CF6] mt-1 flex-shrink-0" />
                              <p className="text-gray-400 text-sm">{achievement}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </Card>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block md:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
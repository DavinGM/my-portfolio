import React from 'react';
import { Card } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { portfolioData } from '../mock';

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 bg-[#0f0f10]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              <span className="text-[#8B5CF6]">Skill</span> ku
            </h2>
            <p className="text-gray-400 text-lg">Teknologi yang saya gunakan</p>
          </div>

          {/* Skills Tabs */}
          <Tabs defaultValue={portfolioData.skills[0].category} className="w-full">
            <TabsList className=" grid w-full grid-cols-2 lg:grid-cols-4 gap-2 bg-[#1a1a1a] p-2 mb-8">
              {portfolioData.skills.map((skillCategory, index) => (
                <TabsTrigger
                  key={index}
                  value={skillCategory.category}
                  className="cursor-target data-[state=active]:bg-[#8B5CF6] data-[state=active]:text-white text-gray-400 transition-all duration-300"
                >
                  {skillCategory.category.split(' ')[0]}
                </TabsTrigger>
              ))}
            </TabsList>

            {portfolioData.skills.map((skillCategory, catIndex) => (
              <TabsContent key={catIndex} value={skillCategory.category} className="mt-8">
                <Card className="bg-[#1a1a1a] border-[#2d2d2d] p-6 sm:p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">{skillCategory.category}</h3>
                  <div className="space-y-6">
                    {skillCategory.items.map((skill, skillIndex) => (
                      <div key={skillIndex} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-white font-medium text-lg">{skill.name}</span>
                          <span className="text-[#8B5CF6] font-bold">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-[#2d2d2d] rounded-full h-3 overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-[#8B5CF6] to-[#A855F7] rounded-full transition-all duration-1000 ease-out"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
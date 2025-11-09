import React from 'react';
import { Card } from './ui/card';
import { Code2, Database, Server, Wrench } from 'lucide-react';
import { portfolioData } from '../mock';

const TechStackSection = () => {
  const getIconForTech = (name) => {
    const frontend = ['React', 'JavaScript', 'Vs Code', 'Git', 'github'];
    const backend = ['Laravel', 'PHP', 'Node.js', 'MySql', 'MongoDB'];
    const devops = ['Ubuntu', 'Docker', 'Nginx', 'Git'];
    
    if (frontend.includes(name)) return <Code2 className="h-8 w-8" />;
    if (backend.includes(name)) return <Server className="h-8 w-8" />;
    if (devops.includes(name)) return <Wrench className="h-8 w-8" />;
    return <Database className="h-8 w-8" />;
  };

  return (
    <section id="techstack" className="py-20 bg-[#1a1a1a]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              <span className="text-[#8B5CF6]">Tumpukan</span> teknologi
            </h2>
            <p className="text-gray-400 text-lg">Teknologi & alat yang saya gunakan setiap hari</p>
          </div>

          {/* Tech Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
            {portfolioData.techStack.map((tech, index) => (
              <Card
                key={index}
                className="bg-[#0f0f10] border-[#2d2d2d] p-6 hover:border-[#8B5CF6] hover:shadow-lg hover:shadow-[#8B5CF6]/20 transition-all duration-300 group cursor-pointer"
              >
                <div className="flex flex-col items-center justify-center space-y-3">
                  <div className="text-[#8B5CF6] group-hover:text-[#A855F7] transition-colors duration-300 group-hover:scale-110 transform transition-transform">
                    {getIconForTech(tech.name)}
                  </div>
                  <span className="text-white font-medium text-center text-sm">
                    {tech.name}
                  </span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
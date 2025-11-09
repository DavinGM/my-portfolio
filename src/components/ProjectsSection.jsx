import React, { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ExternalLink, Github } from 'lucide-react';
import { portfolioData } from '../mock';

const ProjectsSection = () => {
  const [filter, setFilter] = useState('all');

  const categories = [
    { value: 'all', label: 'All Projects' },
    { value: 'frontend', label: 'Frontend' },
    { value: 'backend', label: 'Backend' },
    { value: 'full-stack', label: 'Full-Stack' },
    { value: 'devops', label: 'DevOps' }
  ];

  const filteredProjects = filter === 'all'
    ? portfolioData.projects
    : portfolioData.projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20 bg-[#0f0f10]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Proyek <span className="text-[#8B5CF6]">Unggulan</span>
            </h2>
            <p className="text-gray-400 text-lg">Beberapa karya saya baru-baru ini</p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category.value}
                onClick={() => setFilter(category.value)}
                className={`transition-all duration-300 ${
                  filter === category.value
                    ? 'bg-[#8B5CF6] hover:bg-[#A855F7] text-white'
                    : 'bg-[#1a1a1a] hover:bg-[#2d2d2d] text-gray-300 border border-[#2d2d2d]'
                }`}
              >
                {category.label}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card
                key={project.id}
                className="bg-[#1a1a1a] border-[#2d2d2d] overflow-hidden hover:border-[#8B5CF6] transition-all duration-300 group"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] to-transparent opacity-60"></div>
                </div>

                {/* Project Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-[#8B5CF6] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="bg-[#8B5CF6]/10 text-[#8B5CF6] border border-[#8B5CF6]/30 hover:bg-[#8B5CF6]/20"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-2">
                    <Button
                      size="sm"
                      className="flex-1 bg-[#8B5CF6] hover:bg-[#A855F7] text-white"
                      onClick={() => alert('Project demo coming soon!')}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 border-[#8B5CF6] text-[#8B5CF6] hover:bg-[#8B5CF6] hover:text-white"
                      onClick={() => alert('GitHub repo coming soon!')}
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
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

export default ProjectsSection;
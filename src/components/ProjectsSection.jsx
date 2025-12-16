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
    { value: 'devops', label: 'DevOps' },
    { value: 'design', label: 'Design' },
    { value: 'mobile', label: 'Mobile' },
    { value: 'desktop', label: 'Desktop' },
    { value: 'web', label: 'Web' },
  ];

  const filteredProjects = filter === 'all'
    ? portfolioData.projects
    : portfolioData.projects.filter(project => project.category === filter);

  const getOneProjectByCategory = (category) =>
  portfolioData.projects.find(
    (project) => project.category === category
  );

const featuredProjects = [
  getOneProjectByCategory('frontend'),
  getOneProjectByCategory('backend'),
  getOneProjectByCategory('devops'),
  getOneProjectByCategory('full-stack'),
  getOneProjectByCategory('design'),
  getOneProjectByCategory('mobile'),
  getOneProjectByCategory('desktop'),
  getOneProjectByCategory('web'),
].filter(Boolean); // jaga-jaga kalau ada yang null


   return (
    <section id="projects" className="py-20 bg-[#0f0f10]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Proyek <span className="text-[#8B5CF6]">Unggulan</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Pilihan proyek terbaik dari tiap kategori
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <Card
                key={project.id}
                className="bg-[#1a1a1a] border-[#2d2d2d] overflow-hidden
                hover:border-[#8B5CF6] transition-all duration-300 group"
              >
                {/* Image */}
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] to-transparent opacity-60" />
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <Badge className="w-fit bg-[#8B5CF6]/20 text-[#8B5CF6] border border-[#8B5CF6]/30">
                    {project.category.toUpperCase()}
                  </Badge>

                  <h3 className="text-xl font-bold text-white group-hover:text-[#8B5CF6] transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 text-sm line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, index) => (
                      <Badge
                        key={index}
                        className="bg-[#8B5CF6]/10 text-[#8B5CF6] border border-[#8B5CF6]/30"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3 pt-2">
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex-1">
                      <Button className="cursor-target  w-full bg-[#8B5CF6] hover:bg-[#A855F7]">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </Button>
                    </a>

                    <Button
                      variant="outline"
                      className="cursor-target flex-1 border-[#8B5CF6] text-[#8B5CF6] hover:bg-[#8B5CF6] hover:text-white"
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
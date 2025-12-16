import React, { useState } from 'react';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';
import { portfolioData } from '../mock';




export default function ProjectPage() {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const projects = portfolioData.projects;
  const totalProjects = portfolioData.projects.length;
  // Mencari tahun paling lama
  const oldestYear = projects.reduce((min, project) => Math.min(min, project.year), Infinity);
  

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'web', label: 'Web' },
    { id: 'desktop', label: 'Desktop' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'design', label: 'Design' },
    { id: 'backend', label: 'Backend' }
  ];

  const filtered = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className="min-h-screen bg-black">
      
      {/* Gradient Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-violet-950/20 via-black to-indigo-950/20"></div>
      
      <div className="relative">
        
        {/* Header */}
        <header className="border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-6 py-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Proyek Unggulan
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl">
              Koleksi project production-grade yang dibangun dengan teknologi modern dan best practices.
            </p>
          </div>
        </header>

        {/* Filter Bar */}
        <div className="sticky top-0 z-20 bg-black/80 backdrop-blur-xl border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex gap-2 overflow-x-auto">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-6 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                    activeFilter === filter.id
                      ? 'bg-violet-600 text-white'
                      : 'text-gray-400 hover:text-white hover:bg-gray-800'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project, idx) => (
              <article
                key={project.id}
                className="group relative bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-violet-500/50 transition-all duration-300"
                style={{
                  animation: 'slideUp 0.5s ease-out forwards',
                  animationDelay: `${idx * 0.1}s`,
                  opacity: 0
                }}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-gray-800">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
                  
                  {/* Year Badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 bg-black/60 backdrop-blur-sm rounded-full text-xs font-medium text-gray-300 border border-gray-700">
                    {project.year}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-violet-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 bg-gray-800 text-gray-300 rounded-lg border border-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2">
                    <a
                      href={project.link}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-violet-600 hover:bg-violet-500 text-white rounded-lg text-sm font-medium transition-colors"
                    >
                      <span>{project.name}</span>
                      <ExternalLink size={14} />
                    </a>
                    <a
                      href="#"
                      className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-lg transition-colors"
                    >
                      <Github size={16} />
                    </a>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br from-${project.color}-600/0 to-${project.color}-600/0 group-hover:from-${project.color}-600/5 group-hover:to-${project.color}-600/5 transition-all duration-500 pointer-events-none`}></div>
              </article>
            ))}
          </div>
        </div>

        {/* Footer Stats */}
        <footer className="border-t border-gray-800 mt-16">
          <div className="max-w-7xl mx-auto px-6 py-12">
            <div className="grid grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-violet-400 mb-1">{totalProjects}+</div>
                <div className="text-sm text-gray-400">Projects</div>
              </div>
              <div>
              ---
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-400 mb-1">{oldestYear}</div>
                <div className="text-sm text-gray-400">Previous work</div>
              </div>
            </div>
          </div>
        </footer>

      </div>

      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
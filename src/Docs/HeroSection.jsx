import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Search, BookOpen, User, Briefcase, Code, Award, ChevronRight, FileText } from 'lucide-react';

const PersonalDocsHero = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const quickLinks = [
    { icon: User, label: 'Biodata', path: '#biodata', color: 'text-blue-400' },
    { icon: Code, label: 'Projects', path: '#projects', color: 'text-purple-400' },
    { icon: Briefcase, label: 'Perusahaan', path: '#company', color: 'text-green-400' },
    { icon: Award, label: 'Pencapaian', path: '#achievements', color: 'text-yellow-400' },
  ];

  const scrollToSection = (path) => {
    const element = document.querySelector(path);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-[#0f0f10] to-black">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#8B5CF6]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Header */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#8B5CF6]/10 border border-[#8B5CF6]/30 rounded-full">
              <FileText className="h-4 w-4 text-[#8B5CF6]" />
              <span className="text-sm text-[#8B5CF6] font-medium">Dokumentasi Saya</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Selamat Datang di
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] to-blue-500">
                Dokumentasi Saya
              </span>
            </h1>
            
            <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto">
              Temukan informasi lengkap tentang biodata, project, pengalaman kerja, dan pencapaian saya dalam satu tempat
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-[#8B5CF6] transition-colors" />
              {/* Search Bar */}
<div className="max-w-2xl mx-auto">
  <div className="relative group">

    {/* INPUT */}
    <input
      type="text"
      placeholder="Cari lewat Ai Bot"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      className="
        w-full pl-12 pr-14 py-4
        bg-gray-800/50 border border-gray-700 rounded-xl
        text-white placeholder-gray-500
        focus:outline-none focus:border-[#8B5CF6]
        focus:ring-2 focus:ring-[#8B5CF6]/20
        transition-all
      "
    />

    <img
      src="https://imgs.search.brave.com/ll_5mkRMUVSi76j08-1lhYFd5yEBAh7u0ERQTXxM4qA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91eHdp/bmcuY29tL3dwLWNv/bnRlbnQvdGhlbWVz/L3V4d2luZy9kb3du/bG9hZC9icmFuZHMt/YW5kLXNvY2lhbC1t/ZWRpYS9naXRodWIt/Y29waWxvdC13aGl0/ZS1pY29uLnN2Zw"
      alt="AI Icon"
      className="
        absolute right-4 top-1/2 -translate-y-1/2 
        w-6 h-6 opacity-80
        group-focus-within:opacity-100
        transition-all
      "
    />

    <Search
      className="
        absolute left-4 top-1/2 -translate-y-1/2 
        h-5 w-5 text-gray-400
        group-focus-within:text-[#8B5CF6]
        transition-colors
      "
    />
  </div>
</div>

            </div>
          </div>

          {/* Quick Links */}
          <div className="pt-8">
            <p className="text-gray-400 text-sm mb-4">Quick Access:</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              onClick={() => scrollToSection('#biodata')}
              className="bg-[#8B5CF6] hover:bg-[#A855F7] text-white px-8 py-6 text-base transition-all duration-300 transform hover:scale-105"
            >
              <BookOpen className="mr-2 h-5 w-5" />
              Mulai Membaca
            </Button>
            <Button
              onClick={() => window.open('#download-cv', '_self')}
              variant="outline"
              className="border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white px-8 py-6 text-base transition-all duration-300"
            >
              Download CV
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-16 fill-current text-[#0f0f10]" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default PersonalDocsHero;
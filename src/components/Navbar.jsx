import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { FileText, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleGetCV = () => {
    alert('CV download will be available soon!');
  };

  const handleDocs = () => {
    alert('Documentation page coming soon!');
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0f0f10]/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl sm:text-2xl font-bold">
              <span className="text-white">Kina</span>
              <span className="text-[#8B5CF6]">Dev</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              onClick={handleDocs}
              variant="ghost"
              className="text-gray-300 hover:text-white hover:bg-[#8B5CF6]/20 transition-all duration-300"
            >
              Docs
            </Button>
            <Button
              onClick={handleGetCV}
              className="bg-[#8B5CF6] hover:bg-[#A855F7] text-white transition-all duration-300"
            >
              <FileText className="mr-2 h-4 w-4" />
              Get CV
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              variant="ghost"
              size="icon"
              className="text-white"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#1a1a1a] border-t border-[#2d2d2d]">
          <div className="px-4 pt-2 pb-3 space-y-2">
            <Button
              onClick={handleDocs}
              variant="ghost"
              className="w-full text-left text-gray-300 hover:text-white hover:bg-[#8B5CF6]/20 justify-start"
            >
              Docs
            </Button>
            <Button
              onClick={handleGetCV}
              className="w-full bg-[#8B5CF6] hover:bg-[#A855F7] text-white"
            >
              <FileText className="mr-2 h-4 w-4" />
              Get CV
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
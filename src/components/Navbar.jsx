import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { FileText, Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';




function DropdownItem({ title, desc, to }) {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(to)}
      className="w-full text-left px-3 py-2 rounded-lg hover:bg-[#8B5CF6]/15 transition"
    >
      <p className="text-sm font-medium text-white">{title}</p>
      <p className="text-xs text-gray-400">{desc}</p>
    </button>
  );
}


const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);  
  const [docsOpen, setDocsOpen] = useState(false);
  const navigate = useNavigate(); // <--- ini penting

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
  navigate('/docs'); // pindah ke halaman Docs
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
              <div
                  className="relative"
                  onMouseEnter={() => setDocsOpen(true)}
                  onMouseLeave={() => setDocsOpen(false)}
                >
                  <Button
                    variant="ghost"
                    className="cursor-target text-gray-300 hover:text-white hover:bg-[#8B5CF6]/20 transition-all duration-300 flex items-center gap-1"
                  >
                    Menu
                    <svg
                      className={`w-4 h-4 transition-transform duration-300 ${
                        docsOpen ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </Button>

                  <div
                    className={`cursor-target  absolute left-0 mt-3 w-56 rounded-xl bg-[#151515]/95 backdrop-blur-xl
                    border border-[#2d2d2d] shadow-2xl transition-all duration-300 ${
                      docsOpen
                        ? 'opacity-100 translate-y-0 visible'
                        : 'opacity-0 -translate-y-2 invisible'
                    }`}
                  >
                    <div className="p-2 space-y-1">
                      <DropdownItem
                        title="Dokumen"
                        desc="Dokumen Lengkap tentang saya"
                        to="/docs"
                      />
                      <DropdownItem
                        title="Proyek"
                        desc="Dokumentasi Proyek berjalan"
                        to="/project"
                      />
                    </div>
                  </div>
                </div>
            <Button
              onClick={handleGetCV}
              className="cursor-target bg-[#8B5CF6] hover:bg-[#A855F7] text-white transition-all duration-300"
            >
              <FileText className="mr-2 h-4 w-4" />
              Dowload Cv
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
          <div
              className="relative"
              onMouseEnter={() => setDocsOpen(true)}
              onMouseLeave={() => setDocsOpen(false)}
            >
              <Button
                variant="ghost"
                className="text-gray-300 hover:text-white hover:bg-[#8B5CF6]/20 transition-all duration-300 flex items-center gap-1"
              >
                Docs
                <svg
                  className={`w-4 h-4 transition-transform duration-300 ${
                    docsOpen ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </Button>

              <div
                className={`absolute left-0 mt-3 w-56 rounded-xl bg-[#151515]/95 backdrop-blur-xl
                border border-[#2d2d2d] shadow-2xl transition-all duration-300 ${
                  docsOpen
                    ? 'opacity-100 translate-y-0 visible'
                    : 'opacity-0 -translate-y-2 invisible'
                }`}
              >
                <div className="p-2 space-y-1">
                  <DropdownItem
                        title="Dokumen"
                        desc="Dokumen Lengkap tentang saya"
                        to="/docs"
                      />
                  <DropdownItem
                        title="Proyek"
                        desc="Dokumentasi Proyek berjalan"
                        to="/project"
                      />
                </div>
              </div>
          </div>
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
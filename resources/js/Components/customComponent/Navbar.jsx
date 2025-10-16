import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg py-2' : 'bg-white/95 backdrop-blur-sm py-2'
    }`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <div className="text-3xl font-bold text-[#006A4E] head">
                <img src="/assets/logo/black.png" alt="" className='w-24' />
              </div>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <a href="/" className="text-gray-700 hover:text-[#006A4E] font-medium transition-colors">
              Home
            </a>
            
            <a href="/about" className="text-gray-700 hover:text-[#006A4E] font-medium transition-colors">
              About
            </a>

            {/* Services Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 text-gray-700 hover:text-[#006A4E] font-medium transition-colors">
                Services
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 py-2">
                <a href="/services/makeup" className="block px-6 py-3 text-gray-700 hover:bg-[#006A4E]/10 hover:text-[#006A4E] transition-colors">
                  Makeup Services
                </a>
                <a href="/services/hair" className="block px-6 py-3 text-gray-700 hover:bg-[#006A4E]/10 hover:text-[#006A4E] transition-colors">
                  Hair Services
                </a>
                <a href="/services/body" className="block px-6 py-3 text-gray-700 hover:bg-[#006A4E]/10 hover:text-[#006A4E] transition-colors">
                  Body Services
                </a>
                <a href="/services/nails" className="block px-6 py-3 text-gray-700 hover:bg-[#006A4E]/10 hover:text-[#006A4E] transition-colors">
                  Nail Services
                </a>
                <a href="/services/bridal" className="block px-6 py-3 text-gray-700 hover:bg-[#006A4E]/10 hover:text-[#006A4E] transition-colors">
                  Bridal Makeup
                </a>
                <a href="/services/party" className="block px-6 py-3 text-gray-700 hover:bg-[#006A4E]/10 hover:text-[#006A4E] transition-colors">
                  Party Makeup
                </a>
              </div>
            </div>

           

            <a href="/academy" className="text-gray-700 hover:text-[#006A4E] font-medium transition-colors">
              Academy
            </a>

          

            {/* Gallery Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 text-gray-700 hover:text-[#006A4E] font-medium transition-colors">
                Gallery
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 py-2">
                <a href="/gallery/photos" className="block px-6 py-3 text-gray-700 hover:bg-[#006A4E]/10 hover:text-[#006A4E] transition-colors">
                  Photo Gallery
                </a>
                <a href="/gallery/videos" className="block px-6 py-3 text-gray-700 hover:bg-[#006A4E]/10 hover:text-[#006A4E] transition-colors">
                  Video Gallery
                </a>
              </div>
            </div>

            <a href="/contact" className="text-gray-700 hover:text-[#006A4E] font-medium transition-colors">
              Contact
            </a>
          </div>

          {/* Phone Number */}
          <div className="hidden lg:flex items-center gap-3">
            <Phone className="w-5 h-5 text-[#006A4E]" />
            <a href="tel:+41435426591" className="text-xl font-bold text-[#006A4E] head">
              +41 43 542 65 91
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4 mt-4">
              <a href="/" className="text-gray-700 hover:text-[#006A4E] font-medium transition-colors">
                Home
              </a>
              <a href="/about" className="text-gray-700 hover:text-[#006A4E] font-medium transition-colors">
                About
              </a>

              {/* Services Mobile Dropdown */}
              <div>
                <button 
                  onClick={() => toggleDropdown('services')}
                  className="flex items-center justify-between w-full text-gray-700 hover:text-[#006A4E] font-medium transition-colors"
                >
                  Services
                  <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === 'services' ? 'rotate-180' : ''}`} />
                </button>
                {openDropdown === 'services' && (
                  <div className="ml-4 mt-2 space-y-2">
                    <a href="/services/makeup" className="block text-gray-600 hover:text-[#006A4E]">Makeup Services</a>
                    <a href="/services/hair" className="block text-gray-600 hover:text-[#006A4E]">Hair Services</a>
                    <a href="/services/body" className="block text-gray-600 hover:text-[#006A4E]">Body Services</a>
                    <a href="/services/nails" className="block text-gray-600 hover:text-[#006A4E]">Nail Services</a>
                    <a href="/services/bridal" className="block text-gray-600 hover:text-[#006A4E]">Bridal Makeup</a>
                    <a href="/services/party" className="block text-gray-600 hover:text-[#006A4E]">Party Makeup</a>
                  </div>
                )}
              </div>

              {/* Makeup Mobile Dropdown */}
              

              <a href="/academy" className="text-gray-700 hover:text-[#006A4E] font-medium transition-colors">
                Academy
              </a>
              
              {/* Gallery Mobile Dropdown */}
              <div>
                <button 
                  onClick={() => toggleDropdown('gallery')}
                  className="flex items-center justify-between w-full text-gray-700 hover:text-[#006A4E] font-medium transition-colors"
                >
                  Gallery
                  <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === 'gallery' ? 'rotate-180' : ''}`} />
                </button>
                {openDropdown === 'gallery' && (
                  <div className="ml-4 mt-2 space-y-2">
                    <a href="/gallery/photos" className="block text-gray-600 hover:text-[#006A4E]">Photo Gallery</a>
                    <a href="/gallery/videos" className="block text-gray-600 hover:text-[#006A4E]">Video Gallery</a>
                  </div>
                )}
              </div>

              <a href="/contact" className="text-gray-700 hover:text-[#006A4E] font-medium transition-colors">
                Contact
              </a>

              <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                <Phone className="w-5 h-5 text-[#006A4E]" />
                <a href="tel:+41435426591" className="text-lg font-bold text-[#006A4E] head">
                  +41 43 542 65 91
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export  {Navbar};
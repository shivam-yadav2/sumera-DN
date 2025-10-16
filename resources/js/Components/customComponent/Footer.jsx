import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* About Section with Newsletter */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 mb-6">
              <div className="text-3xl font-bold text-white head">Salon</div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adip iscing elit, sed do eiusmod temporin 
              cididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.eiusmod tempo.
            </p>
            <div className="flex gap-2 mt-6">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="px-4 py-3 bg-gray-800 border-0 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#D4A574] flex-1 text-sm"
              />
              <button className="px-6 py-3 bg-[#D4A574] hover:bg-[#c09566] text-white font-medium transition-all duration-300 text-sm">
                Subscribe
              </button>
            </div>
          </div>

          {/* Useful Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white head mb-6">Useful links</h3>
            <div className="grid grid-cols-2 gap-x-8 gap-y-3">
              <a href="#" className="text-gray-400 hover:text-[#D4A574] transition-colors text-sm">
                About
              </a>
              <a href="#" className="text-gray-400 hover:text-[#D4A574] transition-colors text-sm">
                Portfolio
              </a>
              <a href="#" className="text-gray-400 hover:text-[#D4A574] transition-colors text-sm">
                Pricing Plan
              </a>
              <a href="#" className="text-gray-400 hover:text-[#D4A574] transition-colors text-sm">
                Contact Us
              </a>
              <a href="#" className="text-gray-400 hover:text-[#D4A574] transition-colors text-sm">
                Career
              </a>
              <a href="#" className="text-gray-400 hover:text-[#D4A574] transition-colors text-sm">
                Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-[#D4A574] transition-colors text-sm">
                Our Team
              </a>
              <a href="#" className="text-gray-400 hover:text-[#D4A574] transition-colors text-sm">
                FAQ's
              </a>
              <a href="#" className="text-gray-400 hover:text-[#D4A574] transition-colors text-sm">
                Services
              </a>
              <a href="#" className="text-gray-400 hover:text-[#D4A574] transition-colors text-sm">
                About
              </a>
            </div>
          </div>

          {/* Contact Us */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white head mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#D4A574] flex-shrink-0 mt-1" />
                <span className="text-gray-400 text-sm">
                  San Francisco City Hall, San Francisco, CA
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#D4A574] flex-shrink-0" />
                <a href="mailto:contact123@gmail.com" className="text-gray-400 hover:text-[#D4A574] transition-colors text-sm">
                  contact123@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#D4A574] flex-shrink-0" />
                <a href="tel:+6543217654" className="text-gray-400 hover:text-[#D4A574] transition-colors text-sm">
                  (654) 321-7654
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              Copyright © 2019 Thewebmax
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-[#D4A574] hover:text-[#c09566] text-sm transition-colors">
                Terms & Condition
              </a>
              <span className="text-gray-600">/</span>
              <a href="#" className="text-[#D4A574] hover:text-[#c09566] text-sm transition-colors">
                Privacy Policy
              </a>
              <span className="text-gray-600">/</span>
              <a href="#" className="text-[#D4A574] hover:text-[#c09566] text-sm transition-colors">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export  {Footer};
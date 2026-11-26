import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  ownerName: string;
  whatsappNumber: string;
}

export const Header: React.FC<HeaderProps> = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo / Brand */}
          <a href="#" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-[#172554] text-white font-bold flex items-center justify-center rounded-md text-lg">
              OK
            </div>
            <div>
              <span className="font-bold text-lg text-[#151923]">Online kozi</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-sm font-medium text-[#151923] hover:text-[#2563EB]">Home</a>
            <a href="#courses" className="text-sm font-medium text-[#667085] hover:text-[#2563EB]">Courses</a>
            <a href="#ai-tools" className="text-sm font-medium text-[#667085] hover:text-[#2563EB]">AI Tools</a>
            <a href="#success-stories" className="text-sm font-medium text-[#667085] hover:text-[#2563EB]">Success Stories</a>
            <a href="#contact" className="text-sm font-medium text-[#667085] hover:text-[#2563EB]">Contact</a>
          </nav>

          {/* Right CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="#courses"
              className="bg-[#172554] hover:bg-[#1e293b] text-white font-medium text-sm px-5 py-2.5 rounded-md transition-colors"
            >
              Jiunge na Mafunzo
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center space-x-2 md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#151923]"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-[#E5E7EB] px-4 pt-2 pb-6 space-y-3">
          <a
            href="#home"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-medium text-[#151923]"
          >
            Home
          </a>
          <a
            href="#courses"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-medium text-[#667085]"
          >
            Courses
          </a>
          <a
            href="#ai-tools"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-medium text-[#667085]"
          >
            AI Tools
          </a>
          <a
            href="#success-stories"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-medium text-[#667085]"
          >
            Success Stories
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-medium text-[#667085]"
          >
            Contact
          </a>
          <div className="pt-2">
            <a
              href="#courses"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center bg-[#172554] text-white font-medium px-4 py-2.5 rounded-md"
            >
              Jiunge na Mafunzo
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

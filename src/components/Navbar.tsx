
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-sm shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between py-4 md:py-6">
          {/* Logo */}
          <div className="flex">
            <a href="#" className="flex items-center">
              <img src="/lovable-uploads/41b33f0f-6809-4b35-8ebb-1615cd54421e.png" alt="MedRCM360 Logo" className="h-12 md:h-16" />
            </a>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            <a href="#services" className="text-rcm-gray-600 hover:text-rcm-blue-500 font-medium transition-colors">
              Services
            </a>
            <a href="#about" className="text-rcm-gray-600 hover:text-rcm-blue-500 font-medium transition-colors">
              About Us
            </a>
            <a href="#testimonials" className="text-rcm-gray-600 hover:text-rcm-blue-500 font-medium transition-colors">
              Success Stories
            </a>
            <a href="#contact" className="text-rcm-gray-600 hover:text-rcm-blue-500 font-medium transition-colors">
              Contact
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <Button className="bg-gradient-to-r from-[#006B5E] to-[#0096D6] hover:from-[#005A4E] hover:to-[#0078AB] text-white px-6 py-2 rounded-md transition-all transform hover:scale-105">
              Free Consultation
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMobileMenu}
              className="text-rcm-gray-500 hover:text-rcm-blue-500 focus:outline-none"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div 
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen 
            ? 'max-h-[300px] opacity-100 animate-slide-in-right' 
            : 'max-h-0 opacity-0 pointer-events-none animate-slide-out-right'
        }`}
      >
        <div className="bg-white shadow-md rounded-b-lg px-4 py-3 space-y-3">
          <a 
            href="#services" 
            className="block text-rcm-gray-600 hover:text-rcm-blue-500 font-medium py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Services
          </a>
          <a 
            href="#about" 
            className="block text-rcm-gray-600 hover:text-rcm-blue-500 font-medium py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            About Us
          </a>
          <a 
            href="#testimonials" 
            className="block text-rcm-gray-600 hover:text-rcm-blue-500 font-medium py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Success Stories
          </a>
          <a 
            href="#contact" 
            className="block text-rcm-gray-600 hover:text-rcm-blue-500 font-medium py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </a>
          <Button className="w-full bg-gradient-to-r from-[#006B5E] to-[#0096D6] hover:from-[#005A4E] hover:to-[#0078AB] text-white py-2 rounded-md">
            Free Consultation
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

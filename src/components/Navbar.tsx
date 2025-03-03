
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
              <span className="text-2xl font-display font-bold text-rcm-blue-600">
                Revenue<span className="text-rcm-teal-500">Flow</span>
              </span>
            </a>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            <a href="#services" className="text-rcm-gray-600 hover:text-rcm-blue-500 font-medium transition-colors">
              Solutions
            </a>
            <a href="#about" className="text-rcm-gray-600 hover:text-rcm-blue-500 font-medium transition-colors">
              About
            </a>
            <a href="#testimonials" className="text-rcm-gray-600 hover:text-rcm-blue-500 font-medium transition-colors">
              Results
            </a>
            <a href="#contact" className="text-rcm-gray-600 hover:text-rcm-blue-500 font-medium transition-colors">
              Contact
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <Button className="bg-gradient-to-r from-rcm-blue-500 to-rcm-teal-500 hover:from-rcm-blue-600 hover:to-rcm-teal-600 text-white px-6 py-2 rounded-md transition-all transform hover:scale-105">
              Request Demo
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
            Solutions
          </a>
          <a 
            href="#about" 
            className="block text-rcm-gray-600 hover:text-rcm-blue-500 font-medium py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </a>
          <a 
            href="#testimonials" 
            className="block text-rcm-gray-600 hover:text-rcm-blue-500 font-medium py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Results
          </a>
          <a 
            href="#contact" 
            className="block text-rcm-gray-600 hover:text-rcm-blue-500 font-medium py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </a>
          <Button className="w-full bg-gradient-to-r from-rcm-blue-500 to-rcm-teal-500 hover:from-rcm-blue-600 hover:to-rcm-teal-600 text-white py-2 rounded-md">
            Request Demo
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

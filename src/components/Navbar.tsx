import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll to section handler
  const scrollToSection = (sectionId: string) => {
    setMobileMenuOpen(false);

    // Check if we're already on the home page
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth'
        });
      }
    } else {
      // Navigate to home page with section hash
      window.location.href = `/#${sectionId}`;
    }
  };
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  return <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-sm shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between py-4 md:py-6">
          {/* Logo */}
          <div className="flex">
            <Link to="/" className="flex items-center transition-transform duration-300 hover:scale-105">
              <img src="/lovable-uploads/41b33f0f-6809-4b35-8ebb-1615cd54421e.png" alt="MedRCM360 Logo" className="h-12 md:h-16" />
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            <button onClick={() => scrollToSection('services')} className="text-rcm-gray-600 hover:text-rcm-blue-500 font-medium transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-rcm-blue-500 hover:after:w-full after:transition-all after:duration-300">
              Services
            </button>
            <button onClick={() => scrollToSection('features')} className="text-rcm-gray-600 hover:text-rcm-blue-500 font-medium transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-rcm-blue-500 hover:after:w-full after:transition-all after:duration-300">
              Technology
            </button>
            <button onClick={() => scrollToSection('about')} className="text-rcm-gray-600 hover:text-rcm-blue-500 font-medium transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-rcm-blue-500 hover:after:w-full after:transition-all after:duration-300">
              About Us
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="text-rcm-gray-600 hover:text-rcm-blue-500 font-medium transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-rcm-blue-500 hover:after:w-full after:transition-all after:duration-300">
              Success Stories
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-rcm-gray-600 hover:text-rcm-blue-500 font-medium transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-rcm-blue-500 hover:after:w-full after:transition-all after:duration-300">
              Contact
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <Button onClick={() => scrollToSection('contact')} className="bg-gradient-to-r from-[#006B5E] to-[#0096D6] hover:from-[#005A4E] hover:to-[#0078AB] text-white px-6 py-2 rounded-md transition-all transform hover:scale-105 hover:shadow-md duration-300">Schedule Live Demo </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMobileMenu} className="text-rcm-gray-500 hover:text-rcm-blue-500 focus:outline-none transition-colors duration-300">
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'max-h-[350px] opacity-100 animate-slide-in-right' : 'max-h-0 opacity-0 pointer-events-none animate-slide-out-right'}`}>
        <div className="bg-white shadow-md rounded-b-lg px-4 py-3 space-y-3">
          <button onClick={() => scrollToSection('services')} className="block w-full text-left text-rcm-gray-600 hover:text-rcm-blue-500 hover:pl-2 font-medium py-2 transition-all duration-300">
            Services
          </button>
          <button onClick={() => scrollToSection('features')} className="block w-full text-left text-rcm-gray-600 hover:text-rcm-blue-500 hover:pl-2 font-medium py-2 transition-all duration-300">
            Technology
          </button>
          <button onClick={() => scrollToSection('about')} className="block w-full text-left text-rcm-gray-600 hover:text-rcm-blue-500 hover:pl-2 font-medium py-2 transition-all duration-300">
            About Us
          </button>
          <button onClick={() => scrollToSection('testimonials')} className="block w-full text-left text-rcm-gray-600 hover:text-rcm-blue-500 hover:pl-2 font-medium py-2 transition-all duration-300">
            Success Stories
          </button>
          <button onClick={() => scrollToSection('contact')} className="block w-full text-left text-rcm-gray-600 hover:text-rcm-blue-500 hover:pl-2 font-medium py-2 transition-all duration-300">
            Contact
          </button>
          <Button onClick={() => scrollToSection('contact')} className="w-full bg-gradient-to-r from-[#006B5E] to-[#0096D6] hover:from-[#005A4E] hover:to-[#0078AB] text-white py-2 rounded-md transition-all duration-300 transform hover:scale-105">
            Free Consultation
          </Button>
        </div>
      </div>
    </header>;
};
export default Navbar;
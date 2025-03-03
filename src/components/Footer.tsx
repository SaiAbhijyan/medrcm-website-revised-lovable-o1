
import { Mail, Phone, MapPin, ChevronRight, Linkedin, Twitter, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-rcm-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-12">
          {/* Logo and intro */}
          <div className="lg:col-span-4">
            <div className="mb-4">
              <span className="text-2xl font-display font-bold">
                Med<span className="text-rcm-teal-400">RCM</span>360
              </span>
            </div>
            <p className="text-rcm-gray-400 mb-6 max-w-md">
              Innovative technology and service solutions for healthcare revenue cycle management that drive financial performance and enhance patient experience.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center group">
                <Mail className="h-5 w-5 text-rcm-teal-400 mr-3 group-hover:text-white transition-colors duration-300" />
                <a href="mailto:info@medrcm360.com" className="text-rcm-gray-300 group-hover:text-white transition-colors duration-300">
                  info@medrcm360.com
                </a>
              </div>
              <div className="flex items-center group">
                <Phone className="h-5 w-5 text-rcm-teal-400 mr-3 group-hover:text-white transition-colors duration-300" />
                <a href="tel:+18005551234" className="text-rcm-gray-300 group-hover:text-white transition-colors duration-300">
                  (800) 555-1234
                </a>
              </div>
              <div className="flex items-start group">
                <MapPin className="h-5 w-5 text-rcm-teal-400 mr-3 mt-0.5 group-hover:text-white transition-colors duration-300" />
                <address className="not-italic text-rcm-gray-300 group-hover:text-white transition-colors duration-300">
                  123 Innovation Way<br />
                  San Francisco, CA 94103
                </address>
              </div>
            </div>
          </div>
          
          {/* Quick links */}
          <div className="lg:col-span-2 md:col-span-1">
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-rcm-gray-400 hover:text-white flex items-center group transition-all duration-300 hover:translate-x-1">
                  <ChevronRight className="h-4 w-4 mr-1 text-rcm-teal-400 group-hover:text-white transition-colors duration-300" />
                  About Us
                </a>
              </li>
              <li>
                <a href="#leadership" className="text-rcm-gray-400 hover:text-white flex items-center group transition-all duration-300 hover:translate-x-1">
                  <ChevronRight className="h-4 w-4 mr-1 text-rcm-teal-400 group-hover:text-white transition-colors duration-300" />
                  Leadership
                </a>
              </li>
              <li>
                <a href="#careers" className="text-rcm-gray-400 hover:text-white flex items-center group transition-all duration-300 hover:translate-x-1">
                  <ChevronRight className="h-4 w-4 mr-1 text-rcm-teal-400 group-hover:text-white transition-colors duration-300" />
                  Careers
                </a>
              </li>
              <li>
                <a href="#news" className="text-rcm-gray-400 hover:text-white flex items-center group transition-all duration-300 hover:translate-x-1">
                  <ChevronRight className="h-4 w-4 mr-1 text-rcm-teal-400 group-hover:text-white transition-colors duration-300" />
                  News
                </a>
              </li>
              <li>
                <a href="#contact" className="text-rcm-gray-400 hover:text-white flex items-center group transition-all duration-300 hover:translate-x-1">
                  <ChevronRight className="h-4 w-4 mr-1 text-rcm-teal-400 group-hover:text-white transition-colors duration-300" />
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          {/* Solutions */}
          <div className="lg:col-span-2 md:col-span-1">
            <h3 className="font-semibold text-lg mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-rcm-gray-400 hover:text-white flex items-center group transition-all duration-300 hover:translate-x-1">
                  <ChevronRight className="h-4 w-4 mr-1 text-rcm-teal-400 group-hover:text-white transition-colors duration-300" />
                  Medical Billing
                </a>
              </li>
              <li>
                <a href="#services" className="text-rcm-gray-400 hover:text-white flex items-center group transition-all duration-300 hover:translate-x-1">
                  <ChevronRight className="h-4 w-4 mr-1 text-rcm-teal-400 group-hover:text-white transition-colors duration-300" />
                  Coding & Documentation
                </a>
              </li>
              <li>
                <a href="#services" className="text-rcm-gray-400 hover:text-white flex items-center group transition-all duration-300 hover:translate-x-1">
                  <ChevronRight className="h-4 w-4 mr-1 text-rcm-teal-400 group-hover:text-white transition-colors duration-300" />
                  Revenue Cycle Analytics
                </a>
              </li>
              <li>
                <a href="#services" className="text-rcm-gray-400 hover:text-white flex items-center group transition-all duration-300 hover:translate-x-1">
                  <ChevronRight className="h-4 w-4 mr-1 text-rcm-teal-400 group-hover:text-white transition-colors duration-300" />
                  Practice Management
                </a>
              </li>
              <li>
                <a href="#services" className="text-rcm-gray-400 hover:text-white flex items-center group transition-all duration-300 hover:translate-x-1">
                  <ChevronRight className="h-4 w-4 mr-1 text-rcm-teal-400 group-hover:text-white transition-colors duration-300" />
                  Compliance Solutions
                </a>
              </li>
            </ul>
          </div>
          
          {/* Technology */}
          <div className="lg:col-span-2 md:col-span-1">
            <h3 className="font-semibold text-lg mb-4">Technology</h3>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-rcm-gray-400 hover:text-white flex items-center group transition-all duration-300 hover:translate-x-1">
                  <ChevronRight className="h-4 w-4 mr-1 text-rcm-teal-400 group-hover:text-white transition-colors duration-300" />
                  ClaimIQ™ Engine
                </a>
              </li>
              <li>
                <a href="#features" className="text-rcm-gray-400 hover:text-white flex items-center group transition-all duration-300 hover:translate-x-1">
                  <ChevronRight className="h-4 w-4 mr-1 text-rcm-teal-400 group-hover:text-white transition-colors duration-300" />
                  RevInsight™ Analytics
                </a>
              </li>
              <li>
                <a href="#features" className="text-rcm-gray-400 hover:text-white flex items-center group transition-all duration-300 hover:translate-x-1">
                  <ChevronRight className="h-4 w-4 mr-1 text-rcm-teal-400 group-hover:text-white transition-colors duration-300" />
                  Security Infrastructure
                </a>
              </li>
              <li>
                <a href="#features" className="text-rcm-gray-400 hover:text-white flex items-center group transition-all duration-300 hover:translate-x-1">
                  <ChevronRight className="h-4 w-4 mr-1 text-rcm-teal-400 group-hover:text-white transition-colors duration-300" />
                  EHR Integrations
                </a>
              </li>
              <li>
                <a href="#features" className="text-rcm-gray-400 hover:text-white flex items-center group transition-all duration-300 hover:translate-x-1">
                  <ChevronRight className="h-4 w-4 mr-1 text-rcm-teal-400 group-hover:text-white transition-colors duration-300" />
                  Implementation Process
                </a>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div className="lg:col-span-2 md:col-span-1">
            <h3 className="font-semibold text-lg mb-4">Stay Updated</h3>
            <p className="text-rcm-gray-400 mb-4">
              Subscribe to our newsletter for the latest updates on healthcare revenue cycle management.
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 bg-rcm-gray-800 border border-rcm-gray-700 rounded-l-md focus:outline-none focus:ring-2 focus:ring-[#0096D6] focus:border-transparent text-white w-full transition-all duration-300"
              />
              <button className="bg-gradient-to-r from-[#006B5E] to-[#0096D6] hover:from-[#005A4E] hover:to-[#0078AB] text-white px-4 py-2 rounded-r-md transition-all duration-300">
                Join
              </button>
            </div>
            
            <div className="mt-6">
              <h4 className="font-medium text-sm mb-3 text-rcm-gray-300">Follow Us</h4>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="w-10 h-10 bg-rcm-gray-800 hover:bg-gradient-to-r from-[#006B5E] to-[#0096D6] rounded-full flex items-center justify-center transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-rcm-gray-800 hover:bg-gradient-to-r from-[#006B5E] to-[#0096D6] rounded-full flex items-center justify-center transition-colors duration-300"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-rcm-gray-800 hover:bg-gradient-to-r from-[#006B5E] to-[#0096D6] rounded-full flex items-center justify-center transition-colors duration-300"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-8 mt-8 border-t border-rcm-gray-800 flex flex-col md:flex-row justify-between items-center">
          <div className="text-rcm-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} MedRCM360. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a href="/privacy" className="text-rcm-gray-500 hover:text-rcm-gray-300 text-sm transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="/terms" className="text-rcm-gray-500 hover:text-rcm-gray-300 text-sm transition-colors duration-300">
              Terms of Service
            </a>
            <a href="/cookies" className="text-rcm-gray-500 hover:text-rcm-gray-300 text-sm transition-colors duration-300">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

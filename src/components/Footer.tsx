
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
                Revenue<span className="text-rcm-teal-400">Flow</span>
              </span>
            </div>
            <p className="text-rcm-gray-400 mb-6 max-w-md">
              Innovative technology and service solutions for healthcare revenue cycle management that drive financial performance and enhance patient experience.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-rcm-teal-400 mr-3" />
                <a href="mailto:info@revenueflow.com" className="text-rcm-gray-300 hover:text-white transition-colors">
                  info@revenueflow.com
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-rcm-teal-400 mr-3" />
                <a href="tel:+18005551234" className="text-rcm-gray-300 hover:text-white transition-colors">
                  (800) 555-1234
                </a>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-rcm-teal-400 mr-3 mt-0.5" />
                <address className="not-italic text-rcm-gray-300">
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
                <a href="#about" className="text-rcm-gray-400 hover:text-white flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" />
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-rcm-gray-400 hover:text-white flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" />
                  Leadership
                </a>
              </li>
              <li>
                <a href="#" className="text-rcm-gray-400 hover:text-white flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" />
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-rcm-gray-400 hover:text-white flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" />
                  News
                </a>
              </li>
              <li>
                <a href="#contact" className="text-rcm-gray-400 hover:text-white flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" />
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
                <a href="#services" className="text-rcm-gray-400 hover:text-white flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" />
                  Claims Management
                </a>
              </li>
              <li>
                <a href="#services" className="text-rcm-gray-400 hover:text-white flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" />
                  Financial Analytics
                </a>
              </li>
              <li>
                <a href="#services" className="text-rcm-gray-400 hover:text-white flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" />
                  Patient Engagement
                </a>
              </li>
              <li>
                <a href="#services" className="text-rcm-gray-400 hover:text-white flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" />
                  Operational Excellence
                </a>
              </li>
              <li>
                <a href="#services" className="text-rcm-gray-400 hover:text-white flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" />
                  Compliance Solutions
                </a>
              </li>
            </ul>
          </div>
          
          {/* Resources */}
          <div className="lg:col-span-2 md:col-span-1">
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-rcm-gray-400 hover:text-white flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" />
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-rcm-gray-400 hover:text-white flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" />
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#" className="text-rcm-gray-400 hover:text-white flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" />
                  White Papers
                </a>
              </li>
              <li>
                <a href="#" className="text-rcm-gray-400 hover:text-white flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" />
                  Webinars
                </a>
              </li>
              <li>
                <a href="#" className="text-rcm-gray-400 hover:text-white flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" />
                  Support Center
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
                className="px-4 py-2 bg-rcm-gray-800 border border-rcm-gray-700 rounded-l-md focus:outline-none focus:ring-2 focus:ring-rcm-blue-500 focus:border-transparent text-white w-full"
              />
              <button className="bg-gradient-to-r from-rcm-blue-500 to-rcm-teal-500 hover:from-rcm-blue-600 hover:to-rcm-teal-600 text-white px-4 py-2 rounded-r-md">
                Join
              </button>
            </div>
            
            <div className="mt-6">
              <h4 className="font-medium text-sm mb-3 text-rcm-gray-300">Follow Us</h4>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="w-10 h-10 bg-rcm-gray-800 hover:bg-rcm-blue-600 rounded-full flex items-center justify-center transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-rcm-gray-800 hover:bg-rcm-blue-600 rounded-full flex items-center justify-center transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-rcm-gray-800 hover:bg-rcm-blue-600 rounded-full flex items-center justify-center transition-colors"
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
            &copy; {new Date().getFullYear()} RevenueFlow. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-rcm-gray-500 hover:text-rcm-gray-300 text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-rcm-gray-500 hover:text-rcm-gray-300 text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-rcm-gray-500 hover:text-rcm-gray-300 text-sm">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

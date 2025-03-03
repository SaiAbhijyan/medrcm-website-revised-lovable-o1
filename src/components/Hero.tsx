
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ChevronRight, BarChart2, ShieldCheck, DollarSign } from "lucide-react";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading effect
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative overflow-hidden pt-20 pb-16 md:pt-32 md:pb-24">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-rcm-blue-50 rounded-bl-[100px] opacity-70"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/3 bg-rcm-teal-50 rounded-tr-[80px] opacity-60"></div>
      </div>
      
      {/* Content container */}
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hero text */}
          <div className={`transition-all duration-700 delay-100 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-block mb-4">
              <span className="bg-rcm-blue-50 text-rcm-blue-600 text-sm font-medium px-3 py-1 rounded-full">
                Healthcare Revenue Cycle Management
              </span>
            </div>
            <h1 className="mb-6">
              <span className="block">Transforming Healthcare</span> 
              <span className="text-gradient">Revenue Management</span>
            </h1>
            <p className="text-rcm-gray-600 text-lg md:text-xl mb-8 max-w-xl">
              Our innovative technology and service solutions help healthcare providers optimize revenue cycles, reduce costs, and improve patient experiences.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Button className="bg-gradient-to-r from-rcm-blue-500 to-rcm-teal-500 hover:from-rcm-blue-600 hover:to-rcm-teal-600 text-white px-6 py-6 rounded-md transition-all transform hover:scale-105 shadow-md">
                Schedule a Consultation
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-rcm-blue-300 text-rcm-blue-600 hover:bg-rcm-blue-50 px-6 py-6 rounded-md">
                Watch Demo
              </Button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
              <div className="flex items-center">
                <div className="bg-rcm-blue-100/60 p-2 rounded-full mr-3">
                  <BarChart2 className="h-5 w-5 text-rcm-blue-600" />
                </div>
                <span className="text-sm font-medium text-rcm-gray-700">99.8% Accuracy</span>
              </div>
              <div className="flex items-center">
                <div className="bg-rcm-teal-100/60 p-2 rounded-full mr-3">
                  <DollarSign className="h-5 w-5 text-rcm-teal-600" />
                </div>
                <span className="text-sm font-medium text-rcm-gray-700">15% Revenue Increase</span>
              </div>
              <div className="flex items-center">
                <div className="bg-rcm-blue-100/60 p-2 rounded-full mr-3">
                  <ShieldCheck className="h-5 w-5 text-rcm-blue-600" />
                </div>
                <span className="text-sm font-medium text-rcm-gray-700">HIPAA Compliant</span>
              </div>
            </div>
          </div>
          
          {/* Hero image */}
          <div className={`relative transition-all duration-700 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="glass-card rounded-2xl overflow-hidden shadow-medium">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                alt="Healthcare professional using RevenueFlow technology" 
                className={`w-full h-auto object-cover transition-all duration-700 ${isLoaded ? 'image-loaded' : 'image-loading'}`}
              />
            </div>
            
            {/* Floating stats card */}
            <div className="absolute -bottom-6 -left-6 glass-card p-4 rounded-lg shadow-medium max-w-[240px] animate-fade-up">
              <div className="flex justify-between items-center mb-2">
                <h4 className="text-rcm-gray-800 text-base font-semibold">Revenue Impact</h4>
                <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">+24%</span>
              </div>
              <div className="bg-rcm-blue-500/10 rounded-md h-2 mb-2">
                <div className="bg-gradient-to-r from-rcm-blue-500 to-rcm-teal-500 h-2 rounded-md w-3/4"></div>
              </div>
              <p className="text-rcm-gray-500 text-sm">Average client performance increase over 12 months</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

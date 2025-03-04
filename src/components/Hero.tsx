
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ChevronRight, BarChart2, ShieldCheck, DollarSign } from "lucide-react";
import { TrendingUp, Shield, Clock } from 'lucide-react';

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
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[#E6F7FF] rounded-bl-[100px] opacity-70"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/3 bg-[#E6F4F1] rounded-tr-[80px] opacity-60"></div>
      </div>
      
      {/* Content container */}
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hero text */}
          <div className={`transition-all duration-700 delay-100 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-block mb-4">
              <span className="bg-[#E6F7FF] text-[#0096D6] text-sm font-medium px-3 py-1 rounded-full">
                Complete Healthcare Revenue Cycle Management
              </span>
            </div>
            <h1 className="mb-6">
              <span className="block">Transforming Healthcare</span> 
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#006B5E] to-[#0096D6]"> Revenue Cycle Management </span>
            </h1>
            <p className="text-rcm-gray-600 text-lg md:text-xl mb-8 max-w-xl">
              Streamline your healthcare revenue cycle with our cutting-edge technology and expert services. Maximize reimbursements, reduce denials, and improve patient financial experiences.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Button className="bg-gradient-to-r from-[#006B5E] to-[#0096D6] hover:from-[#005A4E] hover:to-[#0078AB] text-white px-6 py-6 rounded-md transition-all transform hover:scale-105 shadow-md">
                Schedule Free Consultation
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-[#0096D6] text-[#0096D6] hover:bg-[#E6F7FF] px-6 py-6 rounded-md">
                Learn More About Us
              </Button>
            </div>
            
            
          
          {/* Hero image */}
          <div className={`relative transition-all duration-700 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="glass-card rounded-2xl overflow-hidden shadow-medium">
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef"
                alt="Healthcare professionals working with MedRCM360 technology" 
                className={`w-full h-auto object-cover transition-all duration-700 ${isLoaded ? 'image-loaded' : 'image-loading'}`}
              />
            </div>
          </div>
        </div>
        
        {/* Updated Stats section - matching the provided image */}
        <div className="mt-16 relative z-20">
          <div className="flex flex-wrap justify-center shadow-lg rounded-xl overflow-hidden bg-white">
            <div className="flex-1 min-w-[250px] p-8 border-b md:border-b-0 md:border-r border-gray-100 text-center">
              <div className="flex justify-center mb-2">
                <TrendingUp className="h-12 w-12 text-[#1e6ae1]" />
              </div>
              <div className="text-[#1e6ae1] text-6xl font-bold mb-2">27%</div>
              <div className="text-gray-500 text-lg">Average Revenue Increase</div>
            </div>
            <div className="flex-1 min-w-[250px] p-8 border-b md:border-b-0 md:border-r border-gray-100 text-center">
              <div className="flex justify-center mb-2">
                <Shield className="h-12 w-12 text-[#1e6ae1]" />
              </div>
              <div className="text-[#1e6ae1] text-6xl font-bold mb-2">98%</div>
              <div className="text-gray-500 text-lg">Clean Claim Rate</div>
            </div>
            <div className="flex-1 min-w-[250px] p-8 text-center">
              <div className="flex justify-center mb-2">
                <Clock className="h-12 w-12 text-[#1e6ae1]" />
              </div>
              <div className="text-[#1e6ae1] text-6xl font-bold mb-2">35days</div>
              <div className="text-gray-500 text-lg">Days in A/R Reduction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

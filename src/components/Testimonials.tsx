
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

interface Testimonial {
  quote: string;
  author: string;
  position: string;
  organization: string;
  avatar: string;
  logo: string;
}

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
  const testimonials: Testimonial[] = [
    {
      quote: "RevenueFlow transformed our billing operations. Their AI-powered platform helped us reduce claim denials by 40% and accelerate our payment cycle significantly.",
      author: "Sarah Johnson",
      position: "CFO",
      organization: "Metropolitan Medical Center",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&auto=format&dpr=2",
      logo: "https://placehold.co/200x80/e0f2fe/0ea5e9?text=MMC&font=montserrat"
    },
    {
      quote: "We've tried multiple RCM solutions, but nothing compares to RevenueFlow's integrated approach. Their platform seamlessly connects our clinical and financial data, giving us insights we never had before.",
      author: "Michael Chen",
      position: "CIO",
      organization: "Pacific Health Partners",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&auto=format&dpr=2",
      logo: "https://placehold.co/200x80/dcfce7/16a34a?text=PHP&font=montserrat"
    },
    {
      quote: "The RevenueFlow team feels like an extension of our staff. Their technology is impressive, but it's their expertise and responsive service that truly sets them apart in the market.",
      author: "Jennifer Williams",
      position: "Revenue Cycle Director",
      organization: "Community Health Network",
      avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=150&h=150&auto=format&dpr=2",
      logo: "https://placehold.co/200x80/f0f7ff/0c87f0?text=CHN&font=montserrat"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('testimonials');
      if (element) {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight - 100) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="testimonials" className="bg-gradient-to-b from-rcm-blue-50/70 to-white py-20">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4">
            <span className="bg-rcm-teal-50 text-rcm-teal-600 text-sm font-medium px-3 py-1 rounded-full">
              Client Success
            </span>
          </div>
          <h2 className="mb-6">Trusted by Leading Healthcare Providers</h2>
          <p className="text-rcm-gray-600 text-lg">
            See how healthcare organizations are transforming their revenue cycle operations with our comprehensive technology and service solutions.
          </p>
        </div>
        
        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative max-w-5xl mx-auto bg-white rounded-2xl shadow-medium p-6 md:p-12 border border-rcm-gray-100">
            <div className="absolute top-8 left-8 text-rcm-blue-200">
              <Quote className="w-16 h-16 rotate-180" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              {/* Avatar and company */}
              <div className="order-2 md:order-1 text-center md:text-left">
                <div className="w-24 h-24 rounded-full overflow-hidden mx-auto md:mx-0 mb-4 border-4 border-rcm-blue-100">
                  <img 
                    src={testimonials[currentIndex].avatar} 
                    alt={testimonials[currentIndex].author}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="mb-4">
                  <div className="font-medium text-rcm-gray-900 text-lg">
                    {testimonials[currentIndex].author}
                  </div>
                  <div className="text-rcm-gray-600 text-sm">
                    {testimonials[currentIndex].position}
                  </div>
                  <div className="text-rcm-blue-600 font-medium text-sm">
                    {testimonials[currentIndex].organization}
                  </div>
                </div>
                <div className="h-12 flex items-center justify-center md:justify-start">
                  <img 
                    src={testimonials[currentIndex].logo} 
                    alt={`${testimonials[currentIndex].organization} logo`}
                    className="max-h-8"
                  />
                </div>
              </div>
              
              {/* Testimonial quote */}
              <div className="order-1 md:order-2 md:col-span-2 relative z-10">
                <blockquote className="text-rcm-gray-700 text-lg md:text-xl italic mb-8 relative z-10">
                  "{testimonials[currentIndex].quote}"
                </blockquote>
                
                {/* Navigation controls */}
                <div className="flex justify-center md:justify-start space-x-3">
                  <button 
                    onClick={prevTestimonial}
                    className="w-10 h-10 rounded-full bg-rcm-gray-100 hover:bg-rcm-blue-100 flex items-center justify-center text-rcm-gray-600 hover:text-rcm-blue-600 transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={nextTestimonial}
                    className="w-10 h-10 rounded-full bg-rcm-gray-100 hover:bg-rcm-blue-100 flex items-center justify-center text-rcm-gray-600 hover:text-rcm-blue-600 transition-colors"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
            
            {/* Testimonial pagination indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, idx) => (
                <button 
                  key={idx} 
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all ${
                    idx === currentIndex 
                      ? 'w-8 bg-gradient-to-r from-rcm-blue-500 to-rcm-teal-500' 
                      : 'w-2 bg-rcm-gray-200'
                  }`}
                  aria-label={`View testimonial ${idx + 1}`}
                />
              ))}
            </div>
          </div>
          
          {/* Client logos */}
          <div className="mt-16">
            <div className="text-center mb-8">
              <p className="text-rcm-gray-500 text-sm uppercase font-medium tracking-wider">
                Trusted by healthcare organizations nationwide
              </p>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
              <div className="grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100">
                <img src="https://placehold.co/160x60/f1f5f9/64748b?text=MedTech&font=montserrat" alt="Client Logo" />
              </div>
              <div className="grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100">
                <img src="https://placehold.co/160x60/f1f5f9/64748b?text=HealthGroup&font=montserrat" alt="Client Logo" />
              </div>
              <div className="grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100">
                <img src="https://placehold.co/160x60/f1f5f9/64748b?text=CareNetwork&font=montserrat" alt="Client Logo" />
              </div>
              <div className="grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100">
                <img src="https://placehold.co/160x60/f1f5f9/64748b?text=MedicalPlus&font=montserrat" alt="Client Logo" />
              </div>
              <div className="grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100">
                <img src="https://placehold.co/160x60/f1f5f9/64748b?text=HealthPoint&font=montserrat" alt="Client Logo" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

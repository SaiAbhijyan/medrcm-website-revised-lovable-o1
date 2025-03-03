
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
      quote: "MedRCM360 transformed our practice's financial performance. Their expertise in cardiology billing helped us reduce denials by 42% and increase our collections by over $400,000 in the first year alone.",
      author: "Dr. James Wilson",
      position: "Cardiologist",
      organization: "Heart & Vascular Institute",
      avatar: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&auto=format&dpr=2",
      logo: "https://placehold.co/200x80/e0f2fe/0ea5e9?text=HVI&font=montserrat"
    },
    {
      quote: "Switching to MedRCM360 was the best decision we made. Their team understands the complexities of orthopedic coding and has helped us navigate bundled payments and value-based care models successfully.",
      author: "Dr. Sarah Chen",
      position: "Orthopedic Surgeon",
      organization: "Advanced Orthopedic Associates",
      avatar: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=150&h=150&auto=format&dpr=2",
      logo: "https://placehold.co/200x80/dcfce7/16a34a?text=AOA&font=montserrat"
    },
    {
      quote: "As a multi-specialty practice, we needed an RCM partner who could handle diverse billing requirements. MedRCM360 delivered with their specialty-specific teams and comprehensive reporting that gives us complete visibility.",
      author: "Michael Roberts",
      position: "Practice Administrator",
      organization: "Cornerstone Medical Group",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&auto=format&dpr=2",
      logo: "https://placehold.co/200x80/f0f7ff/0c87f0?text=CMG&font=montserrat"
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
    <section id="testimonials" className="bg-gradient-to-b from-[#F0F9FF]/70 to-white py-20">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4">
            <span className="bg-[#E6F4F1] text-[#006B5E] text-sm font-medium px-3 py-1 rounded-full">
              Client Success Stories
            </span>
          </div>
          <h2 className="mb-6">What Our Clients Say</h2>
          <p className="text-rcm-gray-600 text-lg">
            Discover how healthcare providers like you have transformed their revenue cycles with MedRCM360's comprehensive solutions.
          </p>
        </div>
        
        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative max-w-5xl mx-auto bg-white rounded-2xl shadow-medium p-6 md:p-12 border border-rcm-gray-100">
            <div className="absolute top-8 left-8 text-[#0096D6]/20">
              <Quote className="w-16 h-16 rotate-180" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              {/* Avatar and company */}
              <div className="order-2 md:order-1 text-center md:text-left">
                <div className="w-24 h-24 rounded-full overflow-hidden mx-auto md:mx-0 mb-4 border-4 border-[#E6F7FF]">
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
                  <div className="text-[#0096D6] font-medium text-sm">
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
                    className="w-10 h-10 rounded-full bg-rcm-gray-100 hover:bg-[#E6F7FF] flex items-center justify-center text-rcm-gray-600 hover:text-[#0096D6] transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={nextTestimonial}
                    className="w-10 h-10 rounded-full bg-rcm-gray-100 hover:bg-[#E6F7FF] flex items-center justify-center text-rcm-gray-600 hover:text-[#0096D6] transition-colors"
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
                      ? 'w-8 bg-gradient-to-r from-[#006B5E] to-[#0096D6]' 
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
                Trusted by healthcare providers nationwide
              </p>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
              <div className="grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100">
                <img src="https://placehold.co/160x60/f1f5f9/64748b?text=Valley+Health&font=montserrat" alt="Client Logo" />
              </div>
              <div className="grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100">
                <img src="https://placehold.co/160x60/f1f5f9/64748b?text=Metro+Med&font=montserrat" alt="Client Logo" />
              </div>
              <div className="grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100">
                <img src="https://placehold.co/160x60/f1f5f9/64748b?text=Family+Care&font=montserrat" alt="Client Logo" />
              </div>
              <div className="grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100">
                <img src="https://placehold.co/160x60/f1f5f9/64748b?text=Northside+Clinic&font=montserrat" alt="Client Logo" />
              </div>
              <div className="grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100">
                <img src="https://placehold.co/160x60/f1f5f9/64748b?text=Premier+Medical&font=montserrat" alt="Client Logo" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

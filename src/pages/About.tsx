
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Building, Users, Award, Globe, Heart, CheckCircle } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#006B5E] to-[#0096D6] text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About MedRCM360</h1>
              <p className="text-xl opacity-90">
                Transforming healthcare financial operations with innovative technology and exceptional service.
              </p>
            </div>
          </div>
        </section>
        
        {/* Our Story */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block mb-4">
                  <span className="bg-[#E6F7FF] text-[#0096D6] text-sm font-medium px-3 py-1 rounded-full">
                    Our Story
                  </span>
                </div>
                <h2 className="text-3xl font-bold mb-6">Founded by Healthcare Professionals for Healthcare Professionals</h2>
                <p className="text-rcm-gray-600 mb-6">
                  MedRCM360 was founded in 2010 by a team of healthcare professionals, administrators, and technology experts who recognized the growing complexity of medical billing and revenue cycle management. 
                </p>
                <p className="text-rcm-gray-600 mb-6">
                  What began as a small consultancy has grown into an industry-leading revenue cycle management partner serving healthcare providers across the United States, from independent practices to large hospital systems.
                </p>
                <p className="text-rcm-gray-600">
                  Our deep understanding of healthcare operations, combined with our innovative technology solutions, has positioned us as the trusted partner for healthcare organizations seeking to optimize their financial performance while focusing on what matters most: patient care.
                </p>
              </div>
              <div className="relative">
                <div className="rounded-xl overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070" 
                    alt="MedRCM360 Team" 
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                  <p className="text-lg font-semibold text-rcm-blue-500">12+ Years</p>
                  <p className="text-sm text-rcm-gray-600">Industry Experience</p>
                </div>
                <div className="absolute -top-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                  <p className="text-lg font-semibold text-rcm-blue-500">500+</p>
                  <p className="text-sm text-rcm-gray-600">Healthcare Clients</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Mission & Vision */}
        <section className="py-16 bg-rcm-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#E6F7FF] mb-6">
                  <Heart className="h-8 w-8 text-[#0096D6]" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-rcm-gray-600">
                  To empower healthcare providers with innovative technology and exceptional service that optimizes financial performance, simplifies administrative processes, and enhances the quality of patient care.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#E6F7FF] mb-6">
                  <Globe className="h-8 w-8 text-[#0096D6]" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-rcm-gray-600">
                  To be the premier partner for healthcare revenue cycle management, setting the industry standard for innovation, efficiency, and client satisfaction while contributing to a more accessible and sustainable healthcare system.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Core Values */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-block mb-4">
                <span className="bg-[#E6F7FF] text-[#0096D6] text-sm font-medium px-3 py-1 rounded-full">
                  Our Core Values
                </span>
              </div>
              <h2 className="text-3xl font-bold mb-6">What Guides Us Every Day</h2>
              <p className="text-rcm-gray-600">
                Our core values form the foundation of our company culture and guide our decisions, actions, and interactions with clients, partners, and each other.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-rcm-gray-50 p-6 rounded-xl hover:shadow-md transition-shadow duration-300">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#E6F7FF] mb-4">
                  <CheckCircle className="h-6 w-6 text-[#0096D6]" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Integrity</h3>
                <p className="text-rcm-gray-600">
                  We operate with honesty, transparency, and the highest ethical standards in all our business practices.
                </p>
              </div>
              
              <div className="bg-rcm-gray-50 p-6 rounded-xl hover:shadow-md transition-shadow duration-300">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#E6F7FF] mb-4">
                  <CheckCircle className="h-6 w-6 text-[#0096D6]" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Innovation</h3>
                <p className="text-rcm-gray-600">
                  We continuously seek new and better ways to serve our clients through technology, processes, and service delivery.
                </p>
              </div>
              
              <div className="bg-rcm-gray-50 p-6 rounded-xl hover:shadow-md transition-shadow duration-300">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#E6F7FF] mb-4">
                  <CheckCircle className="h-6 w-6 text-[#0096D6]" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Excellence</h3>
                <p className="text-rcm-gray-600">
                  We strive for exceptional quality and outcomes in everything we do, never settling for "good enough."
                </p>
              </div>
              
              <div className="bg-rcm-gray-50 p-6 rounded-xl hover:shadow-md transition-shadow duration-300">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#E6F7FF] mb-4">
                  <CheckCircle className="h-6 w-6 text-[#0096D6]" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Collaboration</h3>
                <p className="text-rcm-gray-600">
                  We work as true partners with our clients, building relationships based on mutual respect, trust, and shared goals.
                </p>
              </div>
              
              <div className="bg-rcm-gray-50 p-6 rounded-xl hover:shadow-md transition-shadow duration-300">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#E6F7FF] mb-4">
                  <CheckCircle className="h-6 w-6 text-[#0096D6]" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Accountability</h3>
                <p className="text-rcm-gray-600">
                  We take ownership of our responsibilities and stand behind our commitments with measurable results.
                </p>
              </div>
              
              <div className="bg-rcm-gray-50 p-6 rounded-xl hover:shadow-md transition-shadow duration-300">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#E6F7FF] mb-4">
                  <CheckCircle className="h-6 w-6 text-[#0096D6]" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Empathy</h3>
                <p className="text-rcm-gray-600">
                  We understand the challenges healthcare providers face and design our solutions with their needs and those of their patients in mind.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="bg-gradient-to-r from-[#006B5E] to-[#0096D6] py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Revenue Cycle?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join the hundreds of healthcare providers who have improved their financial performance with MedRCM360.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="/contact" className="bg-white text-[#006B5E] hover:bg-opacity-90 px-8 py-3 rounded-md font-medium transition-all duration-300 text-center">
                Contact Us
              </a>
              <a href="/case-studies" className="bg-transparent border-2 border-white hover:bg-white hover:text-[#006B5E] px-8 py-3 rounded-md font-medium transition-all duration-300 text-center">
                View Case Studies
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;

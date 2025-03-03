
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Linkedin, Twitter } from 'lucide-react';

const Leadership = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#006B5E] to-[#0096D6] text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Leadership Team</h1>
              <p className="text-xl opacity-90">
                Meet the experienced professionals guiding MedRCM360's vision and strategy.
              </p>
            </div>
          </div>
        </section>
        
        {/* Executive Team */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-block mb-4">
                <span className="bg-[#E6F7FF] text-[#0096D6] text-sm font-medium px-3 py-1 rounded-full">
                  Executive Leadership
                </span>
              </div>
              <h2 className="text-3xl font-bold mb-6">Meet Our Executive Team</h2>
              <p className="text-rcm-gray-600">
                Our leadership team brings decades of combined experience in healthcare technology, revenue cycle management, and business strategy.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* CEO */}
              <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1287" 
                    alt="Sarah Johnson, CEO" 
                    className="w-full h-64 object-cover object-center"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <div className="flex justify-end space-x-2">
                      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-white/20 p-2 rounded-full backdrop-blur-sm hover:bg-white/40 transition-colors duration-300">
                        <Linkedin className="h-4 w-4 text-white" />
                      </a>
                      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-white/20 p-2 rounded-full backdrop-blur-sm hover:bg-white/40 transition-colors duration-300">
                        <Twitter className="h-4 w-4 text-white" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">Sarah Johnson</h3>
                  <p className="text-rcm-teal-600 font-medium mb-4">Chief Executive Officer</p>
                  <p className="text-rcm-gray-600 mb-4">
                    Sarah brings over 20 years of healthcare executive experience, previously serving as COO at a leading healthcare IT company. She holds an MBA from Harvard Business School.
                  </p>
                  <p className="text-rcm-gray-500 text-sm italic">
                    "Our mission is to transform healthcare financial operations so providers can focus on what truly matters—patient care."
                  </p>
                </div>
              </div>
              
              {/* CTO */}
              <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1350" 
                    alt="David Chen, CTO" 
                    className="w-full h-64 object-cover object-center"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <div className="flex justify-end space-x-2">
                      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-white/20 p-2 rounded-full backdrop-blur-sm hover:bg-white/40 transition-colors duration-300">
                        <Linkedin className="h-4 w-4 text-white" />
                      </a>
                      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-white/20 p-2 rounded-full backdrop-blur-sm hover:bg-white/40 transition-colors duration-300">
                        <Twitter className="h-4 w-4 text-white" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">David Chen</h3>
                  <p className="text-rcm-teal-600 font-medium mb-4">Chief Technology Officer</p>
                  <p className="text-rcm-gray-600 mb-4">
                    David leads our technology vision with 15+ years in healthcare IT and AI. Previously, he led development at a major EHR company and holds a Ph.D. in Computer Science from MIT.
                  </p>
                  <p className="text-rcm-gray-500 text-sm italic">
                    "We're leveraging AI and machine learning to solve the most complex challenges in healthcare revenue cycle management."
                  </p>
                </div>
              </div>
              
              {/* COO */}
              <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1288" 
                    alt="Michelle Rodriguez, COO" 
                    className="w-full h-64 object-cover object-center"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <div className="flex justify-end space-x-2">
                      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-white/20 p-2 rounded-full backdrop-blur-sm hover:bg-white/40 transition-colors duration-300">
                        <Linkedin className="h-4 w-4 text-white" />
                      </a>
                      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-white/20 p-2 rounded-full backdrop-blur-sm hover:bg-white/40 transition-colors duration-300">
                        <Twitter className="h-4 w-4 text-white" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">Michelle Rodriguez</h3>
                  <p className="text-rcm-teal-600 font-medium mb-4">Chief Operating Officer</p>
                  <p className="text-rcm-gray-600 mb-4">
                    Michelle oversees our operations with 18 years in healthcare administration. Her expertise in operational efficiency has been crucial to our growth and client satisfaction.
                  </p>
                  <p className="text-rcm-gray-500 text-sm italic">
                    "Exceptional service delivery is at the heart of everything we do—we succeed when our clients succeed."
                  </p>
                </div>
              </div>
              
              {/* CMO */}
              <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1287" 
                    alt="Robert Wilson, CMO" 
                    className="w-full h-64 object-cover object-center"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <div className="flex justify-end space-x-2">
                      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-white/20 p-2 rounded-full backdrop-blur-sm hover:bg-white/40 transition-colors duration-300">
                        <Linkedin className="h-4 w-4 text-white" />
                      </a>
                      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-white/20 p-2 rounded-full backdrop-blur-sm hover:bg-white/40 transition-colors duration-300">
                        <Twitter className="h-4 w-4 text-white" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">Robert Wilson</h3>
                  <p className="text-rcm-teal-600 font-medium mb-4">Chief Medical Officer</p>
                  <p className="text-rcm-gray-600 mb-4">
                    Dr. Wilson bridges the gap between clinical and financial operations with 25 years as a practicing physician and healthcare administrator. MD from Johns Hopkins.
                  </p>
                  <p className="text-rcm-gray-500 text-sm italic">
                    "We design our solutions with a deep understanding of clinical workflows and the realities of modern medical practice."
                  </p>
                </div>
              </div>
              
              {/* CFO */}
              <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1287" 
                    alt="James Thompson, CFO" 
                    className="w-full h-64 object-cover object-center"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <div className="flex justify-end space-x-2">
                      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-white/20 p-2 rounded-full backdrop-blur-sm hover:bg-white/40 transition-colors duration-300">
                        <Linkedin className="h-4 w-4 text-white" />
                      </a>
                      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-white/20 p-2 rounded-full backdrop-blur-sm hover:bg-white/40 transition-colors duration-300">
                        <Twitter className="h-4 w-4 text-white" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">James Thompson</h3>
                  <p className="text-rcm-teal-600 font-medium mb-4">Chief Financial Officer</p>
                  <p className="text-rcm-gray-600 mb-4">
                    James brings 20+ years of financial leadership experience in healthcare and technology. His strategic financial planning has been instrumental in our sustainable growth.
                  </p>
                  <p className="text-rcm-gray-500 text-sm italic">
                    "Financial health is critical not just for our clients, but for our own ability to innovate and deliver exceptional value."
                  </p>
                </div>
              </div>
              
              {/* CISO */}
              <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1573497019236-61938d45340c?q=80&w=1287" 
                    alt="Lisa Patel, CISO" 
                    className="w-full h-64 object-cover object-center"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <div className="flex justify-end space-x-2">
                      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-white/20 p-2 rounded-full backdrop-blur-sm hover:bg-white/40 transition-colors duration-300">
                        <Linkedin className="h-4 w-4 text-white" />
                      </a>
                      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-white/20 p-2 rounded-full backdrop-blur-sm hover:bg-white/40 transition-colors duration-300">
                        <Twitter className="h-4 w-4 text-white" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">Lisa Patel</h3>
                  <p className="text-rcm-teal-600 font-medium mb-4">Chief Information Security Officer</p>
                  <p className="text-rcm-gray-600 mb-4">
                    Lisa leads our security strategy with 15+ years in healthcare cybersecurity. Her expertise ensures our platform meets the highest standards of data protection and compliance.
                  </p>
                  <p className="text-rcm-gray-500 text-sm italic">
                    "In healthcare IT, security isn't just a feature—it's the foundation of trust and the prerequisite for everything we do."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Board of Advisors Section */}
        <section className="py-16 bg-rcm-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-block mb-4">
                <span className="bg-[#E6F7FF] text-[#0096D6] text-sm font-medium px-3 py-1 rounded-full">
                  Strategic Guidance
                </span>
              </div>
              <h2 className="text-3xl font-bold mb-6">Board of Advisors</h2>
              <p className="text-rcm-gray-600">
                Our advisory board provides strategic guidance and industry insights, helping us navigate the complex healthcare landscape.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Advisor 1 */}
              <div className="flex flex-col sm:flex-row md:flex-col items-center md:items-start text-center md:text-left space-y-4 sm:space-y-0 md:space-y-4 sm:space-x-4 md:space-x-0">
                <img 
                  src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=1476" 
                  alt="Dr. Michael Brown" 
                  className="w-24 h-24 rounded-full object-cover object-center"
                />
                <div>
                  <h3 className="text-lg font-bold">Dr. Michael Brown</h3>
                  <p className="text-rcm-teal-600 text-sm mb-2">Former Hospital CEO, Healthcare Policy Expert</p>
                  <p className="text-rcm-gray-600 text-sm">
                    Dr. Brown brings 30+ years of experience in hospital administration and healthcare policy to our advisory board.
                  </p>
                </div>
              </div>
              
              {/* Advisor 2 */}
              <div className="flex flex-col sm:flex-row md:flex-col items-center md:items-start text-center md:text-left space-y-4 sm:space-y-0 md:space-y-4 sm:space-x-4 md:space-x-0">
                <img 
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1361" 
                  alt="Dr. Emily Zhang" 
                  className="w-24 h-24 rounded-full object-cover object-center"
                />
                <div>
                  <h3 className="text-lg font-bold">Dr. Emily Zhang</h3>
                  <p className="text-rcm-teal-600 text-sm mb-2">AI Research Scientist, Former Health Tech CTO</p>
                  <p className="text-rcm-gray-600 text-sm">
                    Dr. Zhang specializes in AI applications in healthcare and advises on our technology roadmap and innovation strategy.
                  </p>
                </div>
              </div>
              
              {/* Advisor 3 */}
              <div className="flex flex-col sm:flex-row md:flex-col items-center md:items-start text-center md:text-left space-y-4 sm:space-y-0 md:space-y-4 sm:space-x-4 md:space-x-0">
                <img 
                  src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=1470" 
                  alt="Karen Williams" 
                  className="w-24 h-24 rounded-full object-cover object-center"
                />
                <div>
                  <h3 className="text-lg font-bold">Karen Williams</h3>
                  <p className="text-rcm-teal-600 text-sm mb-2">Healthcare Finance Expert, Former Insurance Executive</p>
                  <p className="text-rcm-gray-600 text-sm">
                    Karen provides valuable insights on payer relations, reimbursement trends, and strategic financial planning.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="bg-gradient-to-r from-[#006B5E] to-[#0096D6] py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Team</h2>
            <p className="text-xl mb-8 opacity-90">
              We're always looking for talented individuals who are passionate about transforming healthcare through technology and service excellence.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="/careers" className="bg-white text-[#006B5E] hover:bg-opacity-90 px-8 py-3 rounded-md font-medium transition-all duration-300 text-center">
                View Open Positions
              </a>
              <a href="/about" className="bg-transparent border-2 border-white hover:bg-white hover:text-[#006B5E] px-8 py-3 rounded-md font-medium transition-all duration-300 text-center">
                Learn About Our Culture
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Leadership;

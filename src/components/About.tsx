
import { useState, useEffect } from 'react';
import { ChevronRight, BarChart, Zap, LineChart, ShieldCheck } from "lucide-react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('about');
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

  const tabs = [
    {
      icon: <BarChart className="w-5 h-5" />,
      title: "Our Approach",
      content: (
        <div className="space-y-4">
          <h3 className="text-2xl font-display font-semibold mb-4">Data-Driven Innovation</h3>
          <p className="text-rcm-gray-600">
            We combine deep healthcare expertise with cutting-edge technology to transform revenue cycle operations. Our approach is built on four key principles:
          </p>
          <ul className="space-y-3 mt-6">
            <li className="flex">
              <div className="bg-rcm-blue-100 rounded-full p-1 mr-3 shrink-0">
                <ChevronRight className="h-4 w-4 text-rcm-blue-600" />
              </div>
              <div>
                <span className="font-medium text-rcm-gray-800">Intelligent Automation</span>
                <p className="text-rcm-gray-600 text-sm mt-1">
                  We automate repetitive tasks while adding AI-powered intelligence to complex decisions.
                </p>
              </div>
            </li>
            <li className="flex">
              <div className="bg-rcm-teal-100 rounded-full p-1 mr-3 shrink-0">
                <ChevronRight className="h-4 w-4 text-rcm-teal-600" />
              </div>
              <div>
                <span className="font-medium text-rcm-gray-800">Predictive Analytics</span>
                <p className="text-rcm-gray-600 text-sm mt-1">
                  Our models predict denial risks, revenue opportunities, and operational bottlenecks.
                </p>
              </div>
            </li>
            <li className="flex">
              <div className="bg-rcm-blue-100 rounded-full p-1 mr-3 shrink-0">
                <ChevronRight className="h-4 w-4 text-rcm-blue-600" />
              </div>
              <div>
                <span className="font-medium text-rcm-gray-800">Human-Centered Design</span>
                <p className="text-rcm-gray-600 text-sm mt-1">
                  We design intuitive experiences for both staff and patients to increase adoption.
                </p>
              </div>
            </li>
            <li className="flex">
              <div className="bg-rcm-teal-100 rounded-full p-1 mr-3 shrink-0">
                <ChevronRight className="h-4 w-4 text-rcm-teal-600" />
              </div>
              <div>
                <span className="font-medium text-rcm-gray-800">Continuous Improvement</span>
                <p className="text-rcm-gray-600 text-sm mt-1">
                  Our platform learns and evolves with your organization to drive ongoing optimization.
                </p>
              </div>
            </li>
          </ul>
        </div>
      )
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Our Mission",
      content: (
        <div className="space-y-4">
          <h3 className="text-2xl font-display font-semibold mb-4">Empowering Healthcare Finance</h3>
          <p className="text-rcm-gray-600">
            Our mission is to transform healthcare financial operations through technology that reduces administrative burden, increases revenue, and improves the patient financial experience.
          </p>
          <div className="mt-6 bg-gradient-to-r from-rcm-blue-50 to-rcm-teal-50 p-5 rounded-lg border border-rcm-blue-100">
            <p className="text-rcm-gray-700 italic">
              "We believe that by solving the financial challenges in healthcare, we enable providers to focus on what matters most—delivering exceptional patient care."
            </p>
            <p className="text-rcm-gray-600 text-sm mt-3 font-medium">
              — Our Founding Team
            </p>
          </div>
          <p className="text-rcm-gray-600 mt-4">
            Every feature we develop, every service we offer, and every client interaction is guided by this core purpose.
          </p>
        </div>
      )
    },
    {
      icon: <LineChart className="w-5 h-5" />,
      title: "Our Impact",
      content: (
        <div className="space-y-4">
          <h3 className="text-2xl font-display font-semibold mb-4">Measurable Results</h3>
          <p className="text-rcm-gray-600">
            Our solutions deliver tangible, measurable improvements across key revenue cycle metrics for healthcare organizations of all sizes.
          </p>
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="bg-white p-4 rounded-lg shadow-soft">
              <div className="text-3xl font-bold text-rcm-blue-600 mb-1">15%</div>
              <div className="text-sm text-rcm-gray-600">Average revenue increase</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-soft">
              <div className="text-3xl font-bold text-rcm-teal-600 mb-1">35%</div>
              <div className="text-sm text-rcm-gray-600">Reduction in denials</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-soft">
              <div className="text-3xl font-bold text-rcm-blue-600 mb-1">42%</div>
              <div className="text-sm text-rcm-gray-600">Faster payment cycles</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-soft">
              <div className="text-3xl font-bold text-rcm-teal-600 mb-1">99.8%</div>
              <div className="text-sm text-rcm-gray-600">Clean claim submission rate</div>
            </div>
          </div>
        </div>
      )
    },
    {
      icon: <ShieldCheck className="w-5 h-5" />,
      title: "Our Values",
      content: (
        <div className="space-y-4">
          <h3 className="text-2xl font-display font-semibold mb-4">Guided by Principles</h3>
          <p className="text-rcm-gray-600">
            Our company culture and product development are guided by core values that put clients and patients first.
          </p>
          <div className="mt-6 space-y-6">
            <div className="flex">
              <div className="bg-gradient-to-r from-rcm-blue-500 to-rcm-teal-500 text-white rounded-full h-10 w-10 flex items-center justify-center mr-4 shrink-0">
                1
              </div>
              <div>
                <h4 className="text-lg font-medium text-rcm-gray-800 mb-1">Integrity</h4>
                <p className="text-rcm-gray-600">
                  We operate with transparency and ethical standards that exceed industry requirements.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="bg-gradient-to-r from-rcm-blue-500 to-rcm-teal-500 text-white rounded-full h-10 w-10 flex items-center justify-center mr-4 shrink-0">
                2
              </div>
              <div>
                <h4 className="text-lg font-medium text-rcm-gray-800 mb-1">Innovation</h4>
                <p className="text-rcm-gray-600">
                  We constantly push boundaries to develop solutions that address evolving challenges.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="bg-gradient-to-r from-rcm-blue-500 to-rcm-teal-500 text-white rounded-full h-10 w-10 flex items-center justify-center mr-4 shrink-0">
                3
              </div>
              <div>
                <h4 className="text-lg font-medium text-rcm-gray-800 mb-1">Excellence</h4>
                <p className="text-rcm-gray-600">
                  We are committed to delivering exceptional quality in everything we do.
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Image column */}
          <div className={`lg:col-span-5 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <div className="relative">
              <div className="absolute -top-5 -left-5 w-32 h-32 bg-rcm-blue-100 rounded-full opacity-50"></div>
              <div className="absolute -bottom-5 -right-5 w-40 h-40 bg-rcm-teal-100 rounded-full opacity-60"></div>
              
              <div className="relative rounded-xl overflow-hidden shadow-medium border border-rcm-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                  alt="Healthcare professionals collaborating"
                  className="w-full h-auto object-cover"
                />
              </div>
              
              {/* Floating stat card */}
              <div className="absolute -bottom-8 -right-8 glass-card p-4 rounded-lg shadow-medium max-w-[180px]">
                <div className="flex items-center">
                  <div className="bg-rcm-blue-500 rounded-full w-8 h-8 flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18 20V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 20V4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M6 20V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-rcm-gray-500">Annual Growth</div>
                    <div className="text-rcm-gray-900 font-bold text-xl">128%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Content column */}
          <div className={`lg:col-span-7 transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <div className="inline-block mb-4">
              <span className="bg-rcm-blue-50 text-rcm-blue-600 text-sm font-medium px-3 py-1 rounded-full">
                About Us
              </span>
            </div>
            <h2 className="mb-6">Transforming Revenue Cycle Management</h2>
            <p className="text-rcm-gray-600 text-lg mb-8">
              With over a decade of healthcare technology experience, our team combines deep industry knowledge with cutting-edge innovation to solve the most complex revenue cycle challenges.
            </p>
            
            {/* Tabs */}
            <div className="mt-8">
              <div className="flex space-x-4 overflow-x-auto pb-2 mb-6">
                {tabs.map((tab, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTab(idx)}
                    className={`flex items-center px-4 py-2 rounded-full transition-all whitespace-nowrap ${
                      activeTab === idx
                        ? 'bg-gradient-to-r from-rcm-blue-500 to-rcm-teal-500 text-white shadow-sm'
                        : 'bg-rcm-gray-100 text-rcm-gray-700 hover:bg-rcm-gray-200'
                    }`}
                  >
                    <span className="mr-2">{tab.icon}</span>
                    {tab.title}
                  </button>
                ))}
              </div>
              
              <div className="bg-rcm-gray-50 p-6 rounded-xl border border-rcm-gray-100">
                {tabs[activeTab].content}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

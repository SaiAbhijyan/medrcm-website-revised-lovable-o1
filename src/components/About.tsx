
import { useState, useEffect } from 'react';
import { ChevronRight, BarChart, History, LineChart, ShieldCheck } from "lucide-react";

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
          <h3 className="text-2xl font-display font-semibold mb-4">Advanced Revenue Cycle Management</h3>
          <p className="text-rcm-gray-600">
            At MedRCM, we take a comprehensive approach to revenue cycle management that addresses every aspect of your practice's financial health. Our methodology is built on four core principles:
          </p>
          <ul className="space-y-3 mt-6">
            <li className="flex">
              <div className="bg-[#E6F7FF] rounded-full p-1 mr-3 shrink-0">
                <ChevronRight className="h-4 w-4 text-[#0096D6]" />
              </div>
              <div>
                <span className="font-medium text-rcm-gray-800">Proactive Management</span>
                <p className="text-rcm-gray-600 text-sm mt-1">
                  We identify and address issues before they impact your revenue stream, rather than just reacting to problems.
                </p>
              </div>
            </li>
            <li className="flex">
              <div className="bg-[#E6F4F1] rounded-full p-1 mr-3 shrink-0">
                <ChevronRight className="h-4 w-4 text-[#006B5E]" />
              </div>
              <div>
                <span className="font-medium text-rcm-gray-800">Specialty-Specific Expertise</span>
                <p className="text-rcm-gray-600 text-sm mt-1">
                  Our team includes specialists in various medical disciplines who understand the unique billing requirements of your specialty.
                </p>
              </div>
            </li>
            <li className="flex">
              <div className="bg-[#E6F7FF] rounded-full p-1 mr-3 shrink-0">
                <ChevronRight className="h-4 w-4 text-[#0096D6]" />
              </div>
              <div>
                <span className="font-medium text-rcm-gray-800">Technology-Enabled Services</span>
                <p className="text-rcm-gray-600 text-sm mt-1">
                  We leverage advanced software and analytics while maintaining the human expertise needed for complex cases.
                </p>
              </div>
            </li>
            <li className="flex">
              <div className="bg-[#E6F4F1] rounded-full p-1 mr-3 shrink-0">
                <ChevronRight className="h-4 w-4 text-[#006B5E]" />
              </div>
              <div>
                <span className="font-medium text-rcm-gray-800">Transparent Partnership</span>
                <p className="text-rcm-gray-600 text-sm mt-1">
                  We provide clear reporting and open communication so you always know how your revenue cycle is performing.
                </p>
              </div>
            </li>
          </ul>
        </div>
      )
    },
    {
      icon: <History className="w-5 h-5" />,
      title: "Our Story",
      content: (
        <div className="space-y-4">
          <h3 className="text-2xl font-display font-semibold mb-4">Building Excellence Since 2018</h3>
          <p className="text-rcm-gray-600">
            MedRCM was founded by healthcare finance professionals who saw the challenges medical practices faced with increasingly complex billing requirements and shrinking reimbursements.
          </p>
          <div className="mt-6 space-y-4">
            <div className="flex">
              <div className="bg-gradient-to-r from-[#006B5E] to-[#0096D6] text-white rounded-full h-10 w-10 flex items-center justify-center mr-4 shrink-0">
                <span className="text-sm font-medium">*</span>
              </div>
              <div>
                <h4 className="text-lg font-medium text-rcm-gray-800 mb-1">Founded in Princeton, NJ</h4>
                <p className="text-rcm-gray-600 text-sm">
                  MedRCM was established to provide specialized billing services to physician practices.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="bg-gradient-to-r from-[#006B5E] to-[#0096D6] text-white rounded-full h-10 w-10 flex items-center justify-center mr-4 shrink-0">
                <span className="text-sm font-medium">*</span>
              </div>
              <div>
                <h4 className="text-lg font-medium text-rcm-gray-800 mb-1">Expanded Service Offerings</h4>
                <p className="text-rcm-gray-600 text-sm">
                  Added coding, credentialing, and practice management services to provide comprehensive solutions.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="bg-gradient-to-r from-[#006B5E] to-[#0096D6] text-white rounded-full h-10 w-10 flex items-center justify-center mr-4 shrink-0">
                <span className="text-sm font-medium">*</span>
              </div>
              <div>
                <h4 className="text-lg font-medium text-rcm-gray-800 mb-1">Technology Integration</h4>
                <p className="text-rcm-gray-600 text-sm">
                  Developed proprietary analytics platform to enhance revenue cycle performance and reporting.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="bg-gradient-to-r from-[#006B5E] to-[#0096D6] text-white rounded-full h-10 w-10 flex items-center justify-center mr-4 shrink-0">
                <span className="text-sm font-medium">*</span>
              </div>
              <div>
                <h4 className="text-lg font-medium text-rcm-gray-800 mb-1">National Expansion</h4>
                <p className="text-rcm-gray-600 text-sm">
                  Now serving over 500 providers across United States with specialized RCM solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      icon: <LineChart className="w-5 h-5" />,
      title: "Our Impact",
      content: (
        <div className="space-y-4">
          <h3 className="text-2xl font-display font-semibold mb-4">Transforming Practice Finances</h3>
          <p className="text-rcm-gray-600">
            Our solutions deliver measurable improvements to medical practices of all sizes and specialties, with a focus on sustainable financial growth.
          </p>
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="bg-white p-4 rounded-lg shadow-soft">
              <div className="text-3xl font-bold text-[#0096D6] mb-1">98%</div>
              <div className="text-sm text-rcm-gray-600">First-pass claim acceptance</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-soft">
              <div className="text-3xl font-bold text-[#006B5E] mb-1">35%</div>
              <div className="text-sm text-rcm-gray-600">Average reduction in A/R days</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-soft">
              <div className="text-3xl font-bold text-[#0096D6] mb-1">20-25%</div>
              <div className="text-sm text-rcm-gray-600">Typical revenue increase</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-soft">
              <div className="text-3xl font-bold text-[#006B5E] mb-1">$3.2M+</div>
              <div className="text-sm text-rcm-gray-600">Average recovered revenue per client</div>
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
          <h3 className="text-2xl font-display font-semibold mb-4">Principles That Guide Us</h3>
          <p className="text-rcm-gray-600">
            At MedRCM, our values shape everything we do - from how we interact with clients to how we develop our services.
          </p>
          <div className="mt-6 space-y-6">
            <div className="flex">
              <div className="bg-gradient-to-r from-[#006B5E] to-[#0096D6] text-white rounded-full h-10 w-10 flex items-center justify-center mr-4 shrink-0">
                1
              </div>
              <div>
                <h4 className="text-lg font-medium text-rcm-gray-800 mb-1">Integrity</h4>
                <p className="text-rcm-gray-600">
                  We maintain the highest ethical standards and transparency in everything we do, ensuring trust with providers and patients alike.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="bg-gradient-to-r from-[#006B5E] to-[#0096D6] text-white rounded-full h-10 w-10 flex items-center justify-center mr-4 shrink-0">
                2
              </div>
              <div>
                <h4 className="text-lg font-medium text-rcm-gray-800 mb-1">Expertise</h4>
                <p className="text-rcm-gray-600">
                  We continuously develop our knowledge and skills to remain at the forefront of healthcare finance and technology.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="bg-gradient-to-r from-[#006B5E] to-[#0096D6] text-white rounded-full h-10 w-10 flex items-center justify-center mr-4 shrink-0">
                3
              </div>
              <div>
                <h4 className="text-lg font-medium text-rcm-gray-800 mb-1">Partnership</h4>
                <p className="text-rcm-gray-600">
                  We view ourselves as an extension of your team, aligning our success with your practice's financial health.
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
              <div className="absolute -top-5 -left-5 w-32 h-32 bg-[#E6F7FF] rounded-full opacity-50"></div>
              <div className="absolute -bottom-5 -right-5 w-40 h-40 bg-[#E6F4F1] rounded-full opacity-60"></div>
              
              <div className="relative rounded-xl overflow-hidden shadow-medium border border-rcm-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0" 
                  alt="MedRCM360 team meeting about healthcare revenue cycle strategy"
                  className="w-full h-auto object-cover"
                />
              </div>
              
              {/* Floating stat card */}
              <div className="absolute -bottom-8 -right-8 glass-card p-4 rounded-lg shadow-medium max-w-[180px]">
                <div className="flex items-center">
                  <div className="bg-[#0096D6] rounded-full w-8 h-8 flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18 20V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 20V4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M6 20V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-rcm-gray-500">Client Growth</div>
                    <div className="text-rcm-gray-900 font-bold text-xl">98%</div>
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
              <span className="bg-[#E6F7FF] text-[#0096D6] text-sm font-medium px-3 py-1 rounded-full">
                About Us
              </span>
            </div>
            <h2 className="mb-6">Your Trusted Medical Billing Partner</h2>
            <p className="text-rcm-gray-600 text-lg mb-8">
              With over 15 years of experience, MedRCM has helped hundreds of healthcare providers across the country optimize their revenue cycles, reduce administrative burden, and increase profitability.
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
                        ? 'bg-gradient-to-r from-[#006B5E] to-[#0096D6] text-white shadow-sm'
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

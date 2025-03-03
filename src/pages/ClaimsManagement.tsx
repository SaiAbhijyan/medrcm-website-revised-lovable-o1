
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CheckCircle, AlertCircle, FileText, PieChart, ArrowRight, Clock, DollarSign, Layers } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ClaimsManagement = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#006B5E] to-[#0096D6] text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block mb-4">
                  <span className="bg-white/20 text-white text-sm font-medium px-3 py-1 rounded-full backdrop-blur-sm">
                    MedRCM360 Solutions
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Intelligent Claims Management</h1>
                <p className="text-xl opacity-90 mb-8">
                  Reduce denials, accelerate payments, and optimize your revenue cycle with our AI-powered claims management solution.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-white text-[#006B5E] hover:bg-white/90 px-8 py-6">
                    Request a Demo
                  </Button>
                  <Button className="bg-transparent border-2 border-white hover:bg-white/10 px-8 py-6">
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="hidden lg:block">
                <img 
                  src="https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1470" 
                  alt="Claims Management Dashboard" 
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Key Benefits */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-block mb-4">
                <span className="bg-[#E6F7FF] text-[#0096D6] text-sm font-medium px-3 py-1 rounded-full">
                  Key Benefits
                </span>
              </div>
              <h2 className="text-3xl font-bold mb-6">Transform Your Claims Processing</h2>
              <p className="text-rcm-gray-600">
                Our intelligent claims management solution leverages advanced technology and industry expertise to optimize every step of the claims lifecycle.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-rcm-gray-50 p-8 rounded-xl hover:shadow-md transition-all duration-300 transform hover:translate-y-[-5px]">
                <div className="w-14 h-14 bg-[#E6F7FF] rounded-full flex items-center justify-center mb-6">
                  <AlertCircle className="h-7 w-7 text-[#0096D6]" />
                </div>
                <h3 className="text-xl font-bold mb-3">Reduce Denials by up to 45%</h3>
                <p className="text-rcm-gray-600 mb-4">
                  Our ClaimIQ™ engine identifies and corrects potential issues before submission, drastically reducing denial rates.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="ml-2 text-rcm-gray-600">Pre-submission claim scrubbing</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="ml-2 text-rcm-gray-600">600+ validation rules</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="ml-2 text-rcm-gray-600">Payer-specific formatting</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-rcm-gray-50 p-8 rounded-xl hover:shadow-md transition-all duration-300 transform hover:translate-y-[-5px]">
                <div className="w-14 h-14 bg-[#E6F7FF] rounded-full flex items-center justify-center mb-6">
                  <Clock className="h-7 w-7 text-[#0096D6]" />
                </div>
                <h3 className="text-xl font-bold mb-3">Accelerate Reimbursement</h3>
                <p className="text-rcm-gray-600 mb-4">
                  Speed up your revenue cycle with faster claims processing and enhanced follow-up workflows.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="ml-2 text-rcm-gray-600">Reduce days in A/R by 30%+</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="ml-2 text-rcm-gray-600">Automated claim status tracking</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="ml-2 text-rcm-gray-600">Prioritized follow-up queues</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-rcm-gray-50 p-8 rounded-xl hover:shadow-md transition-all duration-300 transform hover:translate-y-[-5px]">
                <div className="w-14 h-14 bg-[#E6F7FF] rounded-full flex items-center justify-center mb-6">
                  <DollarSign className="h-7 w-7 text-[#0096D6]" />
                </div>
                <h3 className="text-xl font-bold mb-3">Maximize Revenue</h3>
                <p className="text-rcm-gray-600 mb-4">
                  Ensure you're capturing all earned revenue with comprehensive charge capture and audit capabilities.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="ml-2 text-rcm-gray-600">Identify underpayments</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="ml-2 text-rcm-gray-600">Contract compliance monitoring</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="ml-2 text-rcm-gray-600">Revenue leakage prevention</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* How It Works */}
        <section className="py-16 bg-rcm-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-block mb-4">
                <span className="bg-[#E6F7FF] text-[#0096D6] text-sm font-medium px-3 py-1 rounded-full">
                  Process
                </span>
              </div>
              <h2 className="text-3xl font-bold mb-6">How Our Claims Management Works</h2>
              <p className="text-rcm-gray-600">
                Our end-to-end solution optimizes the entire claims lifecycle from submission to payment posting.
              </p>
            </div>
            
            <div className="relative">
              {/* Process steps */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-sm relative z-10">
                  <div className="w-10 h-10 bg-[#0096D6] text-white rounded-full flex items-center justify-center font-bold mb-4">
                    1
                  </div>
                  <h3 className="text-lg font-bold mb-3">Claim Preparation</h3>
                  <p className="text-rcm-gray-600">
                    Claims are automatically formatted according to payer requirements and scrubbed for errors using our ClaimIQ™ engine.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm relative z-10">
                  <div className="w-10 h-10 bg-[#0096D6] text-white rounded-full flex items-center justify-center font-bold mb-4">
                    2
                  </div>
                  <h3 className="text-lg font-bold mb-3">Submission & Tracking</h3>
                  <p className="text-rcm-gray-600">
                    Claims are electronically submitted to payers and tracked in real-time through our secure clearinghouse connections.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm relative z-10">
                  <div className="w-10 h-10 bg-[#0096D6] text-white rounded-full flex items-center justify-center font-bold mb-4">
                    3
                  </div>
                  <h3 className="text-lg font-bold mb-3">Follow-Up & Appeals</h3>
                  <p className="text-rcm-gray-600">
                    Our system prioritizes follow-up based on value and age, with automated workflows for denied claims and appeals.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm relative z-10">
                  <div className="w-10 h-10 bg-[#0096D6] text-white rounded-full flex items-center justify-center font-bold mb-4">
                    4
                  </div>
                  <h3 className="text-lg font-bold mb-3">Payment Reconciliation</h3>
                  <p className="text-rcm-gray-600">
                    Payments are automatically reconciled with claims, with discrepancy detection and automated posting to your system.
                  </p>
                </div>
              </div>
              
              {/* Connection line */}
              <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-[#0096D6] transform -translate-y-1/2 z-0"></div>
            </div>
          </div>
        </section>
        
        {/* Featured Case Study */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="bg-gradient-to-r from-[#006B5E]/10 to-[#0096D6]/10 rounded-2xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="p-8 lg:p-12">
                  <div className="inline-block mb-4">
                    <span className="bg-white text-[#0096D6] text-sm font-medium px-3 py-1 rounded-full shadow-sm">
                      Case Study
                    </span>
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold mb-6">How Coastal Medical Group Reduced Denials by 42%</h2>
                  <p className="text-rcm-gray-700 mb-6">
                    Coastal Medical Group, a multi-specialty practice with 15 physicians, was struggling with a high denial rate and extended A/R days. After implementing MedRCM360's Claims Management solution:
                  </p>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                      <div className="ml-3">
                        <p className="font-bold">42% reduction in claim denials</p>
                        <p className="text-rcm-gray-600">From 12% to 7% denial rate within 90 days</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                      <div className="ml-3">
                        <p className="font-bold">31% decrease in A/R days</p>
                        <p className="text-rcm-gray-600">From 45 days to 31 days on average</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                      <div className="ml-3">
                        <p className="font-bold">$420,000 additional revenue captured</p>
                        <p className="text-rcm-gray-600">Through improved clean claim rates and denial management</p>
                      </div>
                    </li>
                  </ul>
                  <a href="/case-studies" className="inline-flex items-center text-[#0096D6] font-medium hover:underline">
                    Read the full case study
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
                <div className="hidden lg:block relative">
                  <img 
                    src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1480" 
                    alt="Coastal Medical Group Success" 
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="bg-gradient-to-r from-[#006B5E] to-[#0096D6] py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Claims Management?</h2>
            <p className="text-xl mb-8 opacity-90">
              Schedule a personalized demo to see how MedRCM360 can help you reduce denials, accelerate payments, and maximize revenue.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="/#contact" className="bg-white text-[#006B5E] hover:bg-opacity-90 px-8 py-3 rounded-md font-medium transition-all duration-300 text-center">
                Request a Demo
              </a>
              <a href="/case-studies" className="bg-transparent border-2 border-white hover:bg-white hover:text-[#006B5E] px-8 py-3 rounded-md font-medium transition-all duration-300 text-center">
                View Success Stories
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ClaimsManagement;

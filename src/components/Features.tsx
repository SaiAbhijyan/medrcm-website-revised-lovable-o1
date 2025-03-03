
import React from 'react';
import { CheckCircle, Database, Lock, Zap, Globe, Headphones } from 'lucide-react';

const Features = () => {
  return (
    <section id="features" className="py-20 bg-gradient-to-b from-[#F0F9FF]/40 to-white">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4">
            <span className="bg-[#E6F7FF] text-[#0096D6] text-sm font-medium px-3 py-1 rounded-full">
              Technology
            </span>
          </div>
          <h2 className="mb-6">Innovative RCM Technology Platform</h2>
          <p className="text-rcm-gray-600 text-lg">
            Our proprietary MedRCM360 platform combines AI-powered automation with expert human oversight to deliver exceptional results for healthcare providers.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
            <div className="relative">
              <div className="absolute flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-r from-[#006B5E] to-[#0096D6] text-white shadow-md">
                <Database className="h-6 w-6" aria-hidden="true" />
              </div>
              <div className="ml-16">
                <h3 className="text-xl font-semibold text-rcm-gray-800">ClaimIQ™ Processing Engine</h3>
                <p className="mt-2 text-rcm-gray-600">
                  Our proprietary ClaimIQ™ engine uses machine learning to identify and correct claim errors before submission, reducing denials by up to 42%.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="flex-shrink-0 h-5 w-5 text-[#006B5E]" />
                    <span className="ml-2 text-sm text-rcm-gray-600">Smart claim scrubbing with 600+ validation rules</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="flex-shrink-0 h-5 w-5 text-[#006B5E]" />
                    <span className="ml-2 text-sm text-rcm-gray-600">Real-time eligibility verification</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="flex-shrink-0 h-5 w-5 text-[#006B5E]" />
                    <span className="ml-2 text-sm text-rcm-gray-600">Predictive denial management</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative">
              <div className="absolute flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-r from-[#006B5E] to-[#0096D6] text-white shadow-md">
                <Lock className="h-6 w-6" aria-hidden="true" />
              </div>
              <div className="ml-16">
                <h3 className="text-xl font-semibold text-rcm-gray-800">Enterprise-Grade Security</h3>
                <p className="mt-2 text-rcm-gray-600">
                  HIPAA-compliant infrastructure with end-to-end encryption and SOC 2 Type II certification to protect sensitive patient data.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="flex-shrink-0 h-5 w-5 text-[#006B5E]" />
                    <span className="ml-2 text-sm text-rcm-gray-600">AES-256 encryption at rest and in transit</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="flex-shrink-0 h-5 w-5 text-[#006B5E]" />
                    <span className="ml-2 text-sm text-rcm-gray-600">Role-based access controls with MFA</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="flex-shrink-0 h-5 w-5 text-[#006B5E]" />
                    <span className="ml-2 text-sm text-rcm-gray-600">24/7 security monitoring and threat detection</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative">
              <div className="absolute flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-r from-[#006B5E] to-[#0096D6] text-white shadow-md">
                <Zap className="h-6 w-6" aria-hidden="true" />
              </div>
              <div className="ml-16">
                <h3 className="text-xl font-semibold text-rcm-gray-800">RevInsight™ Analytics</h3>
                <p className="mt-2 text-rcm-gray-600">
                  Our RevInsight™ analytics platform provides comprehensive dashboards and reporting tools with actionable insights to improve financial performance.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="flex-shrink-0 h-5 w-5 text-[#006B5E]" />
                    <span className="ml-2 text-sm text-rcm-gray-600">Customizable KPI tracking and benchmarking</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="flex-shrink-0 h-5 w-5 text-[#006B5E]" />
                    <span className="ml-2 text-sm text-rcm-gray-600">Predictive analytics and revenue forecasting</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="flex-shrink-0 h-5 w-5 text-[#006B5E]" />
                    <span className="ml-2 text-sm text-rcm-gray-600">Automated performance reporting with alerts</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative">
              <div className="absolute flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-r from-[#006B5E] to-[#0096D6] text-white shadow-md">
                <Globe className="h-6 w-6" aria-hidden="true" />
              </div>
              <div className="ml-16">
                <h3 className="text-xl font-semibold text-rcm-gray-800">Universal Integration</h3>
                <p className="mt-2 text-rcm-gray-600">
                  Our platform integrates with all major EHR/EMR systems and practice management software for a unified workflow and seamless data exchange.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="flex-shrink-0 h-5 w-5 text-[#006B5E]" />
                    <span className="ml-2 text-sm text-rcm-gray-600">Certified integrations with Epic, Cerner, Allscripts, and more</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="flex-shrink-0 h-5 w-5 text-[#006B5E]" />
                    <span className="ml-2 text-sm text-rcm-gray-600">Bi-directional HL7 and FHIR data exchange</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="flex-shrink-0 h-5 w-5 text-[#006B5E]" />
                    <span className="ml-2 text-sm text-rcm-gray-600">Rapid implementation with minimal IT resources</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

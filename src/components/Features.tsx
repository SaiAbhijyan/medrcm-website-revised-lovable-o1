
import React from 'react';
import { CheckCircle, Database, Lock, Zap, Globe, Headphones } from 'lucide-react';

const Features = () => {
  return (
    <section id="features" className="py-20 bg-gradient-to-b from-[#F0F9FF]/40 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <div className="inline-block mb-4">
            <span className="bg-[#E6F4F1] text-[#006B5E] text-sm font-medium px-3 py-1 rounded-full">
              Technology
            </span>
          </div>
          <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Innovative RCM Technology Platform
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Our proprietary MedRCM360 platform combines AI-powered automation with expert human oversight to deliver exceptional results for healthcare providers.
          </p>
        </div>

        <div className="mt-16">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            <div className="relative transition-transform duration-300 hover:scale-105 p-4 hover:bg-white/80 hover:shadow-soft rounded-xl">
              <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-[#006B5E] to-[#0096D6] text-white">
                <Database className="h-6 w-6" aria-hidden="true" />
              </div>
              <div className="ml-16">
                <h3 className="text-lg leading-6 font-medium text-gray-900">ClaimIQ™ Processing Engine</h3>
                <p className="mt-2 text-base text-gray-500">
                  Our proprietary ClaimIQ™ engine uses machine learning to identify and correct claim errors before submission, reducing denials by up to 42%.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="flex-shrink-0 h-5 w-5 text-[#006B5E]" />
                    <span className="ml-2 text-sm text-gray-500">Smart claim scrubbing with 600+ validation rules</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="flex-shrink-0 h-5 w-5 text-[#006B5E]" />
                    <span className="ml-2 text-sm text-gray-500">Real-time eligibility verification</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="flex-shrink-0 h-5 w-5 text-[#006B5E]" />
                    <span className="ml-2 text-sm text-gray-500">Predictive denial management</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative transition-transform duration-300 hover:scale-105 p-4 hover:bg-white/80 hover:shadow-soft rounded-xl">
              <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-[#006B5E] to-[#0096D6] text-white">
                <Lock className="h-6 w-6" aria-hidden="true" />
              </div>
              <div className="ml-16">
                <h3 className="text-lg leading-6 font-medium text-gray-900">Enterprise-Grade Security</h3>
                <p className="mt-2 text-base text-gray-500">
                  HIPAA-compliant infrastructure with end-to-end encryption and SOC 2 Type II certification to protect sensitive patient data.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="flex-shrink-0 h-5 w-5 text-[#006B5E]" />
                    <span className="ml-2 text-sm text-gray-500">AES-256 encryption at rest and in transit</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="flex-shrink-0 h-5 w-5 text-[#006B5E]" />
                    <span className="ml-2 text-sm text-gray-500">Role-based access controls with MFA</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="flex-shrink-0 h-5 w-5 text-[#006B5E]" />
                    <span className="ml-2 text-sm text-gray-500">24/7 security monitoring and threat detection</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative transition-transform duration-300 hover:scale-105 p-4 hover:bg-white/80 hover:shadow-soft rounded-xl">
              <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-[#006B5E] to-[#0096D6] text-white">
                <Zap className="h-6 w-6" aria-hidden="true" />
              </div>
              <div className="ml-16">
                <h3 className="text-lg leading-6 font-medium text-gray-900">RevInsight™ Analytics</h3>
                <p className="mt-2 text-base text-gray-500">
                  Our RevInsight™ analytics platform provides comprehensive dashboards and reporting tools with actionable insights to improve financial performance.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="flex-shrink-0 h-5 w-5 text-[#006B5E]" />
                    <span className="ml-2 text-sm text-gray-500">Customizable KPI tracking and benchmarking</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="flex-shrink-0 h-5 w-5 text-[#006B5E]" />
                    <span className="ml-2 text-sm text-gray-500">Predictive analytics and revenue forecasting</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="flex-shrink-0 h-5 w-5 text-[#006B5E]" />
                    <span className="ml-2 text-sm text-gray-500">Automated performance reporting with alerts</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative transition-transform duration-300 hover:scale-105 p-4 hover:bg-white/80 hover:shadow-soft rounded-xl">
              <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-[#006B5E] to-[#0096D6] text-white">
                <Globe className="h-6 w-6" aria-hidden="true" />
              </div>
              <div className="ml-16">
                <h3 className="text-lg leading-6 font-medium text-gray-900">Universal Integration</h3>
                <p className="mt-2 text-base text-gray-500">
                  Our platform integrates with all major EHR/EMR systems and practice management software for a unified workflow and seamless data exchange.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="flex-shrink-0 h-5 w-5 text-[#006B5E]" />
                    <span className="ml-2 text-sm text-gray-500">Certified integrations with Epic, Cerner, Allscripts, and more</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="flex-shrink-0 h-5 w-5 text-[#006B5E]" />
                    <span className="ml-2 text-sm text-gray-500">Bi-directional HL7 and FHIR data exchange</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="flex-shrink-0 h-5 w-5 text-[#006B5E]" />
                    <span className="ml-2 text-sm text-gray-500">Rapid implementation with minimal IT resources</span>
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

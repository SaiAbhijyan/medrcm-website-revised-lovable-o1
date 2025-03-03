
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { CheckCircle, FileText, DollarSign, Users, Activity, Shield } from "lucide-react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  isActive: boolean;
  onClick: () => void;
}

const ServiceCard = ({ icon, title, description, features, isActive, onClick }: ServiceCardProps) => {
  return (
    <div 
      className={`rounded-xl p-6 transition-all duration-300 cursor-pointer border ${
        isActive 
          ? 'bg-white shadow-medium scale-105 border-rcm-blue-200' 
          : 'bg-white/60 hover:bg-white hover:shadow-soft border-transparent'
      }`}
      onClick={onClick}
    >
      <div className={`w-12 h-12 mb-4 flex items-center justify-center rounded-full ${
        isActive ? 'bg-gradient-to-r from-rcm-blue-500 to-rcm-teal-500' : 'bg-rcm-blue-100'
      }`}>
        <div className={isActive ? 'text-white' : 'text-rcm-blue-600'}>
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-rcm-gray-600 mb-4">{description}</p>
      <ul className="space-y-2 mb-5">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start">
            <CheckCircle className="h-5 w-5 text-rcm-teal-500 mr-2 shrink-0 mt-0.5" />
            <span className="text-rcm-gray-700 text-sm">{feature}</span>
          </li>
        ))}
      </ul>
      
      <Button 
        variant={isActive ? "default" : "outline"} 
        className={`w-full justify-center mt-2 ${
          isActive 
            ? 'bg-gradient-to-r from-rcm-blue-500 to-rcm-teal-500 hover:from-rcm-blue-600 hover:to-rcm-teal-600 text-white' 
            : 'border-rcm-blue-200 text-rcm-blue-600'
        }`}
      >
        Learn More
      </Button>
    </div>
  );
};

const Services = () => {
  const [activeService, setActiveService] = useState(0);
  
  const services = [
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Claims Management",
      description: "Streamline your claims processing with AI-powered accuracy and efficiency.",
      features: [
        "Automated claim scrubbing",
        "Real-time eligibility verification",
        "Denial management workflow",
        "98% clean claim rate"
      ]
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: "Financial Analytics",
      description: "Gain actionable insights from comprehensive revenue cycle data analytics.",
      features: [
        "Custom KPI dashboards",
        "Predictive revenue modeling",
        "Reimbursement optimization",
        "Variance analysis"
      ]
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Patient Engagement",
      description: "Enhance patient experience with integrated financial and clinical communication.",
      features: [
        "Digital patient statements",
        "Payment plan automation",
        "Satisfaction analytics",
        "Multi-channel communication"
      ]
    },
    {
      icon: <Activity className="h-6 w-6" />,
      title: "Operational Excellence",
      description: "Optimize workflows and staff productivity with intelligent automation.",
      features: [
        "Workflow automation",
        "Staff performance metrics",
        "Process optimization",
        "Compliance monitoring"
      ]
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Compliance Solutions",
      description: "Stay compliant with ever-changing healthcare regulations and requirements.",
      features: [
        "HIPAA compliance tools",
        "Audit trail documentation",
        "Regulatory updates",
        "Risk assessment"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-rcm-blue-50/40">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4">
            <span className="bg-rcm-teal-50 text-rcm-teal-600 text-sm font-medium px-3 py-1 rounded-full">
              Our Solutions
            </span>
          </div>
          <h2 className="mb-6">Comprehensive Revenue Cycle Solutions</h2>
          <p className="text-rcm-gray-600 text-lg">
            Our integrated platform and services help healthcare providers optimize every aspect of the revenue cycle, from patient registration to final payment.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <ServiceCard
              key={idx}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
              isActive={idx === activeService}
              onClick={() => setActiveService(idx)}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Button className="bg-white border border-rcm-blue-200 text-rcm-blue-600 hover:bg-rcm-blue-50 px-8 py-6 rounded-md shadow-sm">
            View All Solutions
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;

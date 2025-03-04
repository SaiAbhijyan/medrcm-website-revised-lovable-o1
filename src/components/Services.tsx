
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { CheckCircle, FileText, DollarSign, Users, Activity, Shield, ClipboardList, Briefcase } from "lucide-react";

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
          ? 'bg-white shadow-medium scale-105 border-[#0096D6]/30' 
          : 'bg-white/60 hover:bg-white hover:shadow-soft border-transparent hover:border-[#0096D6]/20 hover:scale-102'
      }`}
      onClick={onClick}
    >
      <div className={`w-12 h-12 mb-4 flex items-center justify-center rounded-full transition-colors duration-300 ${
        isActive ? 'bg-gradient-to-r from-[#006B5E] to-[#0096D6]' : 'bg-[#E6F7FF]'
      }`}>
        <div className={`transition-colors duration-300 ${isActive ? 'text-white' : 'text-[#0096D6]'}`}>
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-rcm-gray-600 mb-4">{description}</p>
      <ul className="space-y-2 mb-5">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start">
            <CheckCircle className="h-5 w-5 text-[#006B5E] mr-2 shrink-0 mt-0.5" />
            <span className="text-rcm-gray-700 text-sm">{feature}</span>
          </li>
        ))}
      </ul>
      
      <Button 
        variant={isActive ? "default" : "outline"} 
        className={`w-full justify-center mt-2 transition-all duration-300 ${
          isActive 
            ? 'bg-gradient-to-r from-[#006B5E] to-[#0096D6] hover:from-[#005A4E] hover:to-[#0078AB] text-white transform hover:scale-105' 
            : 'border-[#0096D6]/30 text-[#0096D6] hover:bg-[#E6F7FF] hover:border-[#0096D6]'
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
      title: "Medical Billing",
      description: "Comprehensive medical billing services to maximize collections and minimize rejections.",
      features: [
        "Charge entry and claim submission",
        "Payment posting and reconciliation",
        "Denial management and appeals",
        "Patient statement processing"
      ]
    },
    {
      icon: <ClipboardList className="h-6 w-6" />,
      title: "Coding & Documentation",
      description: "Expert coding services to ensure accuracy and compliance with latest regulations.",
      features: [
        "ICD-10 and CPT coding",
        "Documentation improvement",
        "Coding audits and education",
        "Compliance monitoring"
      ]
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: "Revenue Cycle Analytics",
      description: "Data-driven insights to identify opportunities and optimize financial performance.",
      features: [
        "Key performance dashboards",
        "Financial reporting and analysis",
        "Forecasting and trend identification",
        "Payer contract optimization"
      ]
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Practice Management",
      description: "Streamline front office operations to enhance patient experience and capture revenue.",
      features: [
        "Appointment scheduling",
        "Insurance eligibility verification",
        "Prior authorization management",
        "Patient payment collections"
      ]
    },
    {
      icon: <Briefcase className="h-6 w-6" />,
      title: "Credentialing Services",
      description: "Simplify provider enrollment and maintain proper credentials with all payers.",
      features: [
        "Provider enrollment with payers",
        "CAQH profile management",
        "Re-credentialing services",
        "Privileging assistance"
      ]
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Compliance Solutions",
      description: "Stay compliant with healthcare regulations and avoid costly penalties.",
      features: [
        "HIPAA compliance programs",
        "OIG compliance guidance",
        "Risk assessments and audits",
        "Staff education and training"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-[#F0F9FF]/40">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4">
            <span className="bg-[#E6F4F1] text-[#006B5E] text-sm font-medium px-3 py-1 rounded-full">
              Our Services
            </span>
          </div>
          <h2 className="mb-6">Comprehensive Revenue Cycle Solutions</h2>
          <p className="text-rcm-gray-600 text-lg">
            MedRCM provides end-to-end revenue cycle management services tailored to your specialty, helping you increase collections, reduce overhead, and focus on patient care.
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
          <Button className="bg-white border border-[#0096D6]/30 text-[#0096D6] hover:bg-[#E6F7FF] hover:border-[#0096D6] px-8 py-6 rounded-md shadow-sm transition-all duration-300 transform hover:scale-105 hover:shadow-md">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;

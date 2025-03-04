import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Calendar, ArrowRight } from "lucide-react";
import { toast } from "sonner";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    practice: '',
    message: '',
    specialty: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulating form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Thank you for contacting MedRCM! One of our specialists will be in touch shortly.");
      setFormData({
        name: '',
        email: '',
        practice: '',
        message: '',
        specialty: ''
      });
    }, 1500);
  };
  return <section id="contact" className="py-20 bg-white relative overflow-hidden">
      {/* Background design elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-[#E6F7FF] rounded-br-[100px] opacity-70"></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-[#E6F4F1] rounded-tl-[100px] opacity-70"></div>
      </div>
      
      <div className="section-container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4">
            <span className="bg-[#E6F7FF] text-[#0096D6] text-sm font-medium px-3 py-1 rounded-full">
              Get In Touch
            </span>
          </div>
          <h2 className="mb-6">Ready to Transform Your Revenue Cycle?</h2>
          <p className="text-rcm-gray-600 text-lg">
            Contact MedRCM today to discover how our specialized medical billing and revenue cycle management services can help your practice thrive.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact info column */}
          <div className="lg:col-span-5">
            <div className="bg-gradient-to-br from-[#006B5E] to-[#0096D6] text-white rounded-xl p-8 shadow-medium h-full">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <p className="text-white/80 mb-8">
                Have questions about our services? Our team of revenue cycle experts is ready to help you optimize your practice's financial performance.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-white/20 p-3 rounded-full mr-4">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white/70 text-sm">Reach Us At</p>
                    <a href="mailto:info@medrcm360.com" className="text-white hover:underline">support@medrcm360.com</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-white/20 p-3 rounded-full mr-4">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white/70 text-sm">Call Us</p>
                    <a href="tel:+18005551234" className="text-white hover:underline">
                      (732) 335-6510
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-white/20 p-3 rounded-full mr-4">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white/70 text-sm">Our Headquarters</p>
                    <address className="not-italic text-white">
                      3 Independence Way, Suite 108<br />
                      Princeton, NJ 08540
                    </address>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 pt-8 border-t border-white/20">
                <h4 className="font-medium text-lg mb-4">Schedule a Free Consultation</h4>
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-white/80" />
                  <a href="#" className="text-white flex items-center hover:underline">
                    Book a 30-minute assessment 
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact form column */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-xl shadow-medium p-8 border border-rcm-gray-100">
              <h3 className="text-2xl font-semibold mb-6">Tell Us About Your Practice</h3>
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-rcm-gray-700 mb-2">
                      Full Name
                    </label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-3 rounded-md border border-rcm-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0096D6] focus:border-transparent" placeholder="Dr. John Smith" required />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-rcm-gray-700 mb-2">
                      Email Address
                    </label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 rounded-md border border-rcm-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0096D6] focus:border-transparent" placeholder="john@example.com" required />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="practice" className="block text-sm font-medium text-rcm-gray-700 mb-2">
                      Practice/Organization
                    </label>
                    <input type="text" id="practice" name="practice" value={formData.practice} onChange={handleChange} className="w-full px-4 py-3 rounded-md border border-rcm-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0096D6] focus:border-transparent" placeholder="Your Medical Practice" />
                  </div>
                  
                  <div>
                    <label htmlFor="specialty" className="block text-sm font-medium text-rcm-gray-700 mb-2">
                      Medical Specialty
                    </label>
                    <select id="specialty" name="specialty" value={formData.specialty} onChange={handleChange} className="w-full px-4 py-3 rounded-md border border-rcm-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0096D6] focus:border-transparent">
                      <option value="" disabled>Select specialty</option>
                      <option value="cardiology">Cardiology</option>
                      <option value="dermatology">Dermatology</option>
                      <option value="familyPractice">Family Practice</option>
                      <option value="internalMedicine">Internal Medicine</option>
                      <option value="neurology">Neurology</option>
                      <option value="obgyn">Obstetrics & Gynecology</option>
                      <option value="orthopedics">Orthopedics</option>
                      <option value="pediatrics">Pediatrics</option>
                      <option value="psychiatry">Psychiatry</option>
                      <option value="radiology">Radiology</option>
                      <option value="surgery">Surgery</option>
                      <option value="urology">Urology</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-rcm-gray-700 mb-2">
                    How Can We Help You?
                  </label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={5} className="w-full px-4 py-3 rounded-md border border-rcm-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0096D6] focus:border-transparent" placeholder="Tell us about your current revenue cycle challenges and what you're looking to improve..." required></textarea>
                </div>
                
                <div className="flex items-center mb-6">
                  <input type="checkbox" id="consent" className="h-4 w-4 text-[#0096D6] border-rcm-gray-300 rounded focus:ring-[#0096D6]" required />
                  <label htmlFor="consent" className="ml-2 block text-sm text-rcm-gray-600">
                    I agree to receive communications from MedRCM. You can unsubscribe at any time.
                  </label>
                </div>
                
                <Button type="submit" disabled={isSubmitting} className="w-full bg-gradient-to-r from-[#006B5E] to-[#0096D6] hover:from-[#005A4E] hover:to-[#0078AB] text-white py-3 rounded-md transition-all">
                  {isSubmitting ? 'Sending...' : 'Request Free Consultation'}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;

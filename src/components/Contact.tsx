
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Calendar, ArrowRight } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    orgSize: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulating form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Your message has been sent! We'll be in touch shortly.");
      setFormData({
        name: '',
        email: '',
        company: '',
        message: '',
        orgSize: ''
      });
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-white relative overflow-hidden">
      {/* Background design elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-rcm-blue-50 rounded-br-[100px] opacity-70"></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-rcm-teal-50 rounded-tl-[100px] opacity-70"></div>
      </div>
      
      <div className="section-container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4">
            <span className="bg-rcm-blue-50 text-rcm-blue-600 text-sm font-medium px-3 py-1 rounded-full">
              Get In Touch
            </span>
          </div>
          <h2 className="mb-6">Ready to Transform Your Revenue Cycle?</h2>
          <p className="text-rcm-gray-600 text-lg">
            Contact us to learn how our solutions can help optimize your healthcare organization's financial performance.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact info column */}
          <div className="lg:col-span-5">
            <div className="bg-gradient-to-br from-rcm-blue-500 to-rcm-teal-600 text-white rounded-xl p-8 shadow-medium h-full">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <p className="text-white/80 mb-8">
                We're here to help you optimize your revenue cycle. Reach out and our team will get back to you promptly.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-white/20 p-3 rounded-full mr-4">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white/70 text-sm">Email Us</p>
                    <a href="mailto:info@revenueflow.com" className="text-white hover:underline">
                      info@revenueflow.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-white/20 p-3 rounded-full mr-4">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white/70 text-sm">Call Us</p>
                    <a href="tel:+18005551234" className="text-white hover:underline">
                      (800) 555-1234
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
                      123 Innovation Way<br />
                      San Francisco, CA 94103
                    </address>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 pt-8 border-t border-white/20">
                <h4 className="font-medium text-lg mb-4">Schedule a Demo</h4>
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-white/80" />
                  <a 
                    href="#"
                    className="text-white flex items-center hover:underline"
                  >
                    Book a 30-minute demo 
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact form column */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-xl shadow-medium p-8 border border-rcm-gray-100">
              <h3 className="text-2xl font-semibold mb-6">Send Us a Message</h3>
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-rcm-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md border border-rcm-gray-300 focus:outline-none focus:ring-2 focus:ring-rcm-blue-500 focus:border-transparent"
                      placeholder="John Smith"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-rcm-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md border border-rcm-gray-300 focus:outline-none focus:ring-2 focus:ring-rcm-blue-500 focus:border-transparent"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-rcm-gray-700 mb-2">
                      Company/Organization
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md border border-rcm-gray-300 focus:outline-none focus:ring-2 focus:ring-rcm-blue-500 focus:border-transparent"
                      placeholder="Your Healthcare Organization"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="orgSize" className="block text-sm font-medium text-rcm-gray-700 mb-2">
                      Organization Size
                    </label>
                    <select
                      id="orgSize"
                      name="orgSize"
                      value={formData.orgSize}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md border border-rcm-gray-300 focus:outline-none focus:ring-2 focus:ring-rcm-blue-500 focus:border-transparent"
                    >
                      <option value="" disabled>Select size</option>
                      <option value="1-10">1-10 providers</option>
                      <option value="11-50">11-50 providers</option>
                      <option value="51-200">51-200 providers</option>
                      <option value="201+">201+ providers</option>
                    </select>
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-rcm-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 rounded-md border border-rcm-gray-300 focus:outline-none focus:ring-2 focus:ring-rcm-blue-500 focus:border-transparent"
                    placeholder="Tell us about your revenue cycle management needs..."
                    required
                  ></textarea>
                </div>
                
                <div className="flex items-center mb-6">
                  <input
                    type="checkbox"
                    id="consent"
                    className="h-4 w-4 text-rcm-blue-600 border-rcm-gray-300 rounded focus:ring-rcm-blue-500"
                    required
                  />
                  <label htmlFor="consent" className="ml-2 block text-sm text-rcm-gray-600">
                    I agree to receive communications from RevenueFlow. You can unsubscribe at any time.
                  </label>
                </div>
                
                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-rcm-blue-500 to-rcm-teal-500 hover:from-rcm-blue-600 hover:to-rcm-teal-600 text-white py-3 rounded-md transition-all"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

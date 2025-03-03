
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface PageTemplateProps {
  title: string;
  subtitle: string;
  comingSoon?: boolean;
}

const PageTemplate = ({ title, subtitle, comingSoon = true }: PageTemplateProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#006B5E] to-[#0096D6] text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>
              <p className="text-xl opacity-90">
                {subtitle}
              </p>
            </div>
          </div>
        </section>
        
        {/* Content Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            {comingSoon ? (
              <div className="py-12">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#E6F7FF] mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#0096D6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold mb-4">Coming Soon</h2>
                <p className="text-rcm-gray-600 mb-8 max-w-lg mx-auto">
                  We're working hard to bring you detailed information about this topic. Please check back soon or contact us for more details.
                </p>
                <a href="/#contact" className="bg-gradient-to-r from-[#006B5E] to-[#0096D6] hover:from-[#005A4E] hover:to-[#0078AB] text-white px-6 py-3 rounded-md inline-block transition-all duration-300">
                  Contact Us for Details
                </a>
              </div>
            ) : (
              <div className="py-12">
                <p className="text-rcm-gray-600">
                  Content for this page will be customized based on specific requirements.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PageTemplate;

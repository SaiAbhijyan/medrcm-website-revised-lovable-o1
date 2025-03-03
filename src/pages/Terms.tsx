
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
          <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>
          
          <div className="space-y-6 text-rcm-gray-700">
            <section>
              <h2 className="text-xl font-semibold mb-3">Agreement to Terms</h2>
              <p>
                These Terms of Service constitute a legally binding agreement made between you and MedRCM360, concerning your access to and use of our website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto.
              </p>
              <p className="mt-3">
                You agree that by accessing the Site, you have read, understood, and agree to be bound by all of these Terms of Service. If you do not agree with all of these Terms of Service, then you are expressly prohibited from using the Site and you must discontinue use immediately.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3">Intellectual Property Rights</h2>
              <p>
                Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site and the trademarks, service marks, and logos contained therein are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and various other intellectual property rights.
              </p>
              <p className="mt-3">
                Provided that you are eligible to use the Site, you are granted a limited license to access and use the Site and to download or print a copy of any portion of the Content to which you have properly gained access solely for your personal, non-commercial use. We reserve all rights not expressly granted to you in and to the Site, the Content and the Marks.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3">User Representations</h2>
              <p>
                By using the Site, you represent and warrant that:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>All registration information you submit will be true, accurate, current, and complete.</li>
                <li>You will maintain the accuracy of such information and promptly update such registration information as necessary.</li>
                <li>You have the legal capacity and you agree to comply with these Terms of Service.</li>
                <li>You are not a minor in the jurisdiction in which you reside.</li>
                <li>You will not access the Site through automated or non-human means, whether through a bot, script, or otherwise.</li>
                <li>You will not use the Site for any illegal or unauthorized purpose.</li>
                <li>Your use of the Site will not violate any applicable law or regulation.</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3">Governing Law</h2>
              <p>
                These conditions are governed by and interpreted following the laws of the United States, and the use of the United Nations Convention of Contracts for the International Sale of Goods is expressly excluded. If your habitual residence is in the EU, and you are a consumer, you additionally possess the protection provided to you by obligatory provisions of the law of your country of residence.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3">Dispute Resolution</h2>
              <p>
                The European Commission provides an online dispute resolution platform, which you can access. If you would like to bring this subject to our attention, please contact us.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3">Contact Us</h2>
              <p>
                In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at:
              </p>
              <div className="mt-3">
                <p><strong>Email:</strong> legal@medrcm360.com</p>
                <p><strong>Phone:</strong> (800) 555-1234</p>
                <p><strong>Address:</strong> 123 Innovation Way, San Francisco, CA 94103</p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;

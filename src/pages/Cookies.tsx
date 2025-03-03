
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Cookies = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
          <h1 className="text-3xl font-bold mb-8">Cookie Policy</h1>
          
          <div className="space-y-6 text-rcm-gray-700">
            <section>
              <h2 className="text-xl font-semibold mb-3">What Are Cookies</h2>
              <p>
                As is common practice with almost all professional websites, this site uses cookies, which are tiny files that are downloaded to your computer, to improve your experience. This page describes what information they gather, how we use it and why we sometimes need to store these cookies. We will also share how you can prevent these cookies from being stored however this may downgrade or 'break' certain elements of the site's functionality.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3">How We Use Cookies</h2>
              <p>
                We use cookies for a variety of reasons detailed below. Unfortunately, in most cases there are no industry standard options for disabling cookies without completely disabling the functionality and features they add to this site. It is recommended that you leave on all cookies if you are not sure whether you need them or not in case they are used to provide a service that you use.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3">The Cookies We Set</h2>
              <ul className="list-disc pl-6 space-y-3">
                <li>
                  <p><strong>Account related cookies</strong></p>
                  <p>If you create an account with us then we will use cookies for the management of the signup process and general administration. These cookies will usually be deleted when you log out however in some cases they may remain afterwards to remember your site preferences when logged out.</p>
                </li>
                <li>
                  <p><strong>Login related cookies</strong></p>
                  <p>We use cookies when you are logged in so that we can remember this fact. This prevents you from having to log in every single time you visit a new page. These cookies are typically removed or cleared when you log out to ensure that you can only access restricted features and areas when logged in.</p>
                </li>
                <li>
                  <p><strong>Email newsletters related cookies</strong></p>
                  <p>This site offers newsletter or email subscription services and cookies may be used to remember if you are already registered and whether to show certain notifications which might only be valid to subscribed/unsubscribed users.</p>
                </li>
                <li>
                  <p><strong>Forms related cookies</strong></p>
                  <p>When you submit data to through a form such as those found on contact pages or comment forms cookies may be set to remember your user details for future correspondence.</p>
                </li>
                <li>
                  <p><strong>Site preferences cookies</strong></p>
                  <p>In order to provide you with a great experience on this site we provide the functionality to set your preferences for how this site runs when you use it. In order to remember your preferences we need to set cookies so that this information can be called whenever you interact with a page is affected by your preferences.</p>
                </li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3">Third Party Cookies</h2>
              <p>
                In some special cases we also use cookies provided by trusted third parties. The following section details which third party cookies you might encounter through this site.
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>This site uses Google Analytics which is one of the most widespread and trusted analytics solutions on the web for helping us to understand how you use the site and ways that we can improve your experience. These cookies may track things such as how long you spend on the site and the pages that you visit so we can continue to produce engaging content.</li>
                <li>From time to time we test new features and make subtle changes to the way that the site is delivered. When we are still testing new features these cookies may be used to ensure that you receive a consistent experience whilst on the site whilst ensuring we understand which optimizations our users appreciate the most.</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3">More Information</h2>
              <p>
                Hopefully that has clarified things for you and as was previously mentioned if there is something that you aren't sure whether you need or not it's usually safer to leave cookies enabled in case it does interact with one of the features you use on our site.
              </p>
              <p className="mt-3">
                However if you are still looking for more information then you can contact us through one of our preferred contact methods:
              </p>
              <div className="mt-3">
                <p><strong>Email:</strong> privacy@medrcm360.com</p>
                <p><strong>Phone:</strong> (800) 555-1234</p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cookies;

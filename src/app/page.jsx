'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import Services from '@/components/Services';
import TechStack from '@/components/TechStack';
import TrustedBy from '@/components/TrustedBy';
import WhyChooseUs from '@/components/WhyChooseUs';
import ProcessWorkflow from '@/components/ProcessWorkflow';
import PortfolioProjects from '@/components/PortfolioProjects';
import Testimonials from '@/components/Testimonials';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden flex flex-col bg-bg text-text font-sans selection:bg-primary selection:text-white transition-colors duration-300">
      {/* Section 1: Navbar */}
      <Navbar />

      {/* Section 2: Hero */}
      <Hero />

      {/* Section 3: About */}
      <AboutSection />

      {/* Section 4: Services */}
      <Services />

      {/* Section 5: Technologies */}
      <TechStack />
      <TrustedBy />

      {/* Section 6: Why Choose Us */}
      <WhyChooseUs />

      {/* Section 7: Process / Workflow */}
      <ProcessWorkflow />

      {/* Section 8: Portfolio / Projects */}
      <PortfolioProjects />

      {/* Section 9: Testimonials */}
      <Testimonials />

      {/* Section 10: Contact */}
      <ContactSection />

      {/* Section 11: Footer */}
      <Footer />
    </main>
  );
}
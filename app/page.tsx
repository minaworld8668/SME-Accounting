import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import ServicesSection from '@/components/sections/ServicesSection';
import QuoteBanner from '@/components/sections/QuoteBanner';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import AboutSection from '@/components/sections/AboutSection';
import Testimonials from '@/components/sections/Testimonials';
import HowItWorks from '@/components/sections/HowItWorks';
import Achievements from '@/components/sections/Achievements';
import BlogSection from '@/components/sections/BlogSection';
import CTABanner from '@/components/sections/CTABanner';
import ContactSection from '@/components/sections/ContactSection';
import FloatingCTA from '@/components/ui/FloatingCTA';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <QuoteBanner />
        <WhyChooseUs />
        <AboutSection />
        <Testimonials />
        <HowItWorks />
        <Achievements />
        <BlogSection />
        <CTABanner />
        <ContactSection />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import CompanyLogos from "../components/CompanyLogos";
import Features from "../components/Features";
import Statistics from "../components/Statistics";
import Testimonials from "../components/Testimonials";
import Pricing from "../components/Pricing";
import FAQ from "../components/FAQ";
import CTA from "../components/CTA";
import ContactHero from "../components/ContactHero";
import ContactForm from "../components/ContactForm";
import ContactInfo from "../components/ContactInfo";
import MapSection from "../components/MapSection";
import Footer from "../components/Footer";

function LandingPage() {
  return (
    <>
      <Navbar />

      <Hero />

      <CompanyLogos />

      <Features />

      <Statistics />

      <Testimonials />

      <Pricing />

      <FAQ />

      <CTA />

      {/* Contact Section */}
      <ContactHero />
      <ContactForm />
      <ContactInfo />
      <MapSection />

      <Footer />
    </>
  );
}

export default LandingPage;
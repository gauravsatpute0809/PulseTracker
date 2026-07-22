import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactHero from "../components/ContactHero";
import ContactForm from "../components/ContactForm";
import ContactInfo from "../components/ContactInfo";
import MapSection from "../components/MapSection";

function Contact() {
  return (
    <>
      <Navbar />

      <ContactHero />

      <ContactForm />

      <ContactInfo />

      <MapSection />

      <Footer />
    </>
  );
}

export default Contact;
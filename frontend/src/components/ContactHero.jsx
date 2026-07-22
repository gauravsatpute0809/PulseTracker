import { Link } from "react-router-dom";
import { FaEnvelope, FaArrowRight } from "react-icons/fa";

function ContactHero() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-orange-100 pt-36 pb-24"
    >
      {/* Background Blur */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-orange-300 opacity-20 blur-3xl rounded-full"></div>

      <div className="absolute -bottom-24 -right-20 w-80 h-80 bg-orange-400 opacity-20 blur-3xl rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6 text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-5 py-2 rounded-full font-semibold shadow-sm">
          <FaEnvelope />
          Contact Us
        </div>

        {/* Heading */}
        <h1 className="mt-8 text-5xl lg:text-7xl font-extrabold text-gray-900 leading-tight">
          We'd Love to
          <span className="text-orange-500"> Hear From You</span>
        </h1>

        {/* Description */}
        <p className="mt-8 max-w-3xl mx-auto text-xl leading-8 text-gray-600">
          Have questions, feedback, or want to see PulseMetrics in action?
          Our team is ready to help you make smarter business decisions.
        </p>

        {/* Buttons */}
        <div className="mt-12 flex flex-wrap justify-center gap-5">

          <a
            href="#contact-form"
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-3 transition duration-300 shadow-lg"
          >
            Send Message
            <FaArrowRight />
          </a>

          <Link
            to="/register"
            className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-4 rounded-xl font-semibold transition duration-300"
          >
            Get Started
          </Link>

        </div>

        {/* Breadcrumb */}
        <div className="mt-12 text-gray-500">
          Home
          <span className="mx-2">/</span>
          <span className="font-semibold text-orange-500">
            Contact
          </span>
        </div>

      </div>
    </section>
  );
}

export default ContactHero;
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaClock,
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaTwitter,
} from "react-icons/fa";

const contactDetails = [
  {
    icon: <FaEnvelope />,
    title: "Email",
    value: "support@pulsemetrics.com",
    description: "Send us your queries anytime.",
  },
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    value: "+91 98765 43210",
    description: "Mon - Fri, 9:00 AM - 6:00 PM",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Office",
    value: "Pune, Maharashtra, India",
    description: "Visit our headquarters.",
  },
  {
    icon: <FaClock />,
    title: "Business Hours",
    value: "Monday - Friday",
    description: "9:00 AM - 6:00 PM IST",
  },
];

function ContactInfo() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">

          <span className="text-orange-500 uppercase tracking-[4px] font-semibold">
            Contact Information
          </span>

          <h2 className="text-5xl font-extrabold mt-4 text-gray-900">
            Get in Touch
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            We're always happy to answer your questions and help your
            business succeed with PulseMetrics.
          </p>

        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {contactDetails.map((item) => (

            <div
              key={item.title}
              className="bg-white rounded-3xl shadow-lg border border-gray-200 p-8 text-center hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
            >

              <div className="w-16 h-16 mx-auto rounded-2xl bg-orange-100 text-orange-500 flex items-center justify-center text-3xl">

                {item.icon}

              </div>

              <h3 className="text-2xl font-bold mt-6">
                {item.title}
              </h3>

              <p className="text-orange-500 font-semibold mt-4">
                {item.value}
              </p>

              <p className="text-gray-500 mt-3">
                {item.description}
              </p>

            </div>

          ))}

        </div>

        {/* Social Links */}
        <div className="mt-20 flex justify-center gap-6">

          {[
            <FaFacebookF />,
            <FaTwitter />,
            <FaLinkedinIn />,
            <FaGithub />,
          ].map((icon, index) => (

            <button
              key={index}
              className="w-14 h-14 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center text-orange-500 hover:bg-orange-500 hover:text-white transition duration-300"
            >
              {icon}
            </button>

          ))}

        </div>

      </div>
    </section>
  );
}

export default ContactInfo;
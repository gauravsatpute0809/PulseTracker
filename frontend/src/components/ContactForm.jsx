import {
  FaUser,
  FaEnvelope,
  FaPhoneAlt,
  FaBuilding,
  FaTag,
  FaPaperPlane,
} from "react-icons/fa";

function ContactForm() {
  return (
    <section
      id="contact-form"
      className="py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-14 items-start">

          {/* Left Side */}
          <div>

            <span className="text-orange-500 uppercase tracking-[4px] font-semibold">
              Contact Form
            </span>

            <h2 className="text-5xl font-extrabold mt-4 text-gray-900">
              Let's Start a Conversation
            </h2>

            <p className="mt-6 text-lg text-gray-600 leading-8">
              Whether you're interested in PulseMetrics, have
              questions, or want to collaborate, we're here to
              help. Fill out the form and our team will get back
              to you within 24 hours.
            </p>

            <div className="mt-10 bg-orange-50 rounded-3xl p-8 border border-orange-100">

              <h3 className="text-2xl font-bold">
                Why Contact Us?
              </h3>

              <ul className="mt-6 space-y-4 text-gray-600">

                <li>✅ Product Demonstrations</li>

                <li>✅ Business Partnerships</li>

                <li>✅ Technical Support</li>

                <li>✅ Enterprise Solutions</li>

                <li>✅ General Questions</li>

              </ul>

            </div>

          </div>

          {/* Right Side */}

          <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-8">

            <form className="space-y-6">

              {/* Name */}

              <div>

                <label className="font-semibold mb-2 block">
                  Full Name
                </label>

                <div className="relative">

                  <FaUser className="absolute left-4 top-4 text-orange-500" />

                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-300 focus:border-orange-500 focus:outline-none"
                  />

                </div>

              </div>

              {/* Email */}

              <div>

                <label className="font-semibold mb-2 block">
                  Email Address
                </label>

                <div className="relative">

                  <FaEnvelope className="absolute left-4 top-4 text-orange-500" />

                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-300 focus:border-orange-500 focus:outline-none"
                  />

                </div>

              </div>

              {/* Phone */}

              <div>

                <label className="font-semibold mb-2 block">
                  Phone Number
                </label>

                <div className="relative">

                  <FaPhoneAlt className="absolute left-4 top-4 text-orange-500" />

                  <input
                    type="text"
                    placeholder="+91 9876543210"
                    className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-300 focus:border-orange-500 focus:outline-none"
                  />

                </div>

              </div>

              {/* Company */}

              <div>

                <label className="font-semibold mb-2 block">
                  Company
                </label>

                <div className="relative">

                  <FaBuilding className="absolute left-4 top-4 text-orange-500" />

                  <input
                    type="text"
                    placeholder="Company Name"
                    className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-300 focus:border-orange-500 focus:outline-none"
                  />

                </div>

              </div>

              {/* Subject */}

              <div>

                <label className="font-semibold mb-2 block">
                  Subject
                </label>

                <div className="relative">

                  <FaTag className="absolute left-4 top-4 text-orange-500" />

                  <input
                    type="text"
                    placeholder="Subject"
                    className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-300 focus:border-orange-500 focus:outline-none"
                  />

                </div>

              </div>

              {/* Message */}

              <div>

                <label className="font-semibold mb-2 block">
                  Message
                </label>

                <textarea
                  rows="6"
                  placeholder="Write your message..."
                  className="w-full p-4 rounded-xl border border-gray-300 focus:border-orange-500 focus:outline-none resize-none"
                ></textarea>

              </div>

              {/* Button */}

              <button
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-xl font-bold text-lg transition flex justify-center items-center gap-3"
              >

                <FaPaperPlane />

                Send Message

              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}

export default ContactForm;
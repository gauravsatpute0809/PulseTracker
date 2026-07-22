import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

function Footer() {
  return (
    <footer
      id="contact"
      className="bg-slate-900 text-gray-300 pt-20 pb-10"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Top */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 border-b border-slate-700 pb-12">

          {/* Brand */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold">
              <span className="text-orange-500">Pulse</span>
              <span className="text-white">Metrics</span>
            </h2>

            <p className="mt-6 leading-7 text-gray-400">
              AI-powered Business Intelligence platform that helps
              companies analyze performance, predict growth,
              manage customers, and make smarter decisions.
            </p>

            <div className="flex gap-4 mt-8">

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-slate-800 hover:bg-orange-500 transition flex items-center justify-center"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-slate-800 hover:bg-orange-500 transition flex items-center justify-center"
              >
                <FaTwitter />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-slate-800 hover:bg-orange-500 transition flex items-center justify-center"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-slate-800 hover:bg-orange-500 transition flex items-center justify-center"
              >
                <FaGithub />
              </a>

            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-5">
              Product
            </h3>

            <ul className="space-y-3">

              <li>
                <a
                  href="#features"
                  className="hover:text-orange-500 transition"
                >
                  Features
                </a>
              </li>

              <li>
                <a
                  href="#pricing"
                  className="hover:text-orange-500 transition"
                >
                  Pricing
                </a>
              </li>

              <li>
                <a
                  href="#faq"
                  className="hover:text-orange-500 transition"
                >
                  FAQ
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="hover:text-orange-500 transition"
                >
                  Contact
                </a>
              </li>

            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-5">
              Company
            </h3>

            <ul className="space-y-3">

              <li>
                <a
                  href="#home"
                  className="hover:text-orange-500 transition"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#features"
                  className="hover:text-orange-500 transition"
                >
                  Features
                </a>
              </li>

              <li>
                <a
                  href="#pricing"
                  className="hover:text-orange-500 transition"
                >
                  Pricing
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="hover:text-orange-500 transition"
                >
                  Contact
                </a>
              </li>

            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-5">
              Support
            </h3>

            <ul className="space-y-3">

              <li>
                <a
                  href="#faq"
                  className="hover:text-orange-500 transition"
                >
                  Help Center
                </a>
              </li>

              <li>
                <a
                  href="#features"
                  className="hover:text-orange-500 transition"
                >
                  Documentation
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="hover:text-orange-500 transition"
                >
                  Privacy Policy
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="hover:text-orange-500 transition"
                >
                  Terms of Service
                </a>
              </li>

            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-8 gap-4">

          <p className="text-gray-500 text-center md:text-left">
            © 2026 PulseMetrics. All rights reserved.
          </p>

          <p className="text-gray-500">
            Built with ❤️ using React + Flask
          </p>

        </div>

      </div>
    </footer>
  );
}

export default Footer;
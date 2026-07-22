import { Link } from "react-router-dom";
import { FaArrowRight, FaPlayCircle } from "react-icons/fa";

function Hero() {
  return (
    <section
      id="home"
      className="pt-32 pb-24 bg-gradient-to-br from-orange-50 via-white to-orange-100"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Content */}
        <div>

          <span className="inline-flex items-center bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            🚀 AI-Powered Business Intelligence
          </span>

          <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight text-gray-900">
            Transform Business
            <br />
            Data Into
            <span className="text-orange-500"> Smart Decisions</span>
          </h1>

          <p className="mt-8 text-xl text-gray-600 leading-8">
            Monitor revenue, predict trends, analyze customers,
            and grow faster with AI-powered dashboards built
            for modern businesses.
          </p>

          <div className="mt-10 flex flex-wrap gap-5">

            <Link
              to="/register"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-3 transition"
            >
              Get Started
              <FaArrowRight />
            </Link>

            <button
              className="border border-gray-300 hover:border-orange-500 hover:text-orange-500 px-8 py-4 rounded-xl font-semibold flex items-center gap-3 transition"
            >
              <FaPlayCircle />
              Live Demo
            </button>

          </div>

          <div className="mt-10 flex items-center gap-8">

            <div>
              <h2 className="text-3xl font-bold text-gray-900">
                50K+
              </h2>

              <p className="text-gray-500">
                Active Users
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900">
                99.9%
              </h2>

              <p className="text-gray-500">
                Uptime
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900">
                1M+
              </h2>

              <p className="text-gray-500">
                Reports Generated
              </p>
            </div>

          </div>

        </div>

        {/* Right Dashboard Preview */}
        <div className="relative">

          <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">

            <div className="grid grid-cols-2 gap-4 mb-6">

              <div className="bg-orange-100 rounded-xl p-5">
                <p className="text-gray-500 text-sm">Revenue</p>
                <h3 className="text-3xl font-bold mt-2">$248K</h3>
              </div>

              <div className="bg-green-100 rounded-xl p-5">
                <p className="text-gray-500 text-sm">Orders</p>
                <h3 className="text-3xl font-bold mt-2">3,254</h3>
              </div>

            </div>

            <div className="h-52 bg-gradient-to-r from-orange-400 to-orange-500 rounded-2xl flex items-center justify-center text-white text-2xl font-bold">
              📈 AI Analytics Dashboard
            </div>

          </div>

          {/* Floating Card */}
          <div className="absolute -bottom-8 -left-8 bg-white shadow-xl rounded-2xl p-5">

            <p className="text-gray-500 text-sm">
              Monthly Growth
            </p>

            <h2 className="text-3xl font-bold text-green-600">
              +24.6%
            </h2>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;
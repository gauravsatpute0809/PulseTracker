import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

function CTA() {
  return (
    <section
      className="py-24 bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700"
    >
      <div className="max-w-6xl mx-auto px-6">

        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-12 border border-white/20 text-center">

          <span className="inline-block px-4 py-2 rounded-full bg-white/20 text-white text-sm font-semibold mb-6">
            🚀 Ready to Scale?
          </span>

          <h2 className="text-5xl font-extrabold text-white leading-tight">
            Grow Your Business
            <br />
            With AI-Powered Insights
          </h2>

          <p className="mt-6 text-orange-100 text-xl max-w-3xl mx-auto leading-8">
            Join thousands of businesses using PulseMetrics to monitor
            revenue, track customers, generate intelligent reports,
            and make faster data-driven decisions.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-5">

            <Link
              to="/register"
              className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-bold flex items-center gap-3 transition"
            >
              Start Free Today
              <FaArrowRight />
            </Link>

            <Link
              to="/login"
              className="border border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 rounded-xl font-bold transition"
            >
              Sign In
            </Link>

          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">

            <div>
              <h3 className="text-4xl font-bold text-white">
                50K+
              </h3>

              <p className="text-orange-100 mt-2">
                Active Users
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-white">
                1M+
              </h3>

              <p className="text-orange-100 mt-2">
                Reports Generated
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-white">
                99.9%
              </h3>

              <p className="text-orange-100 mt-2">
                Uptime
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-white">
                24/7
              </h3>

              <p className="text-orange-100 mt-2">
                Support
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default CTA;
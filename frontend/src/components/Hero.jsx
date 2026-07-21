import { FaArrowRight } from "react-icons/fa";

function Hero() {
  return (
    <section className="pt-36 pb-24 bg-orange-50">

      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-16 items-center">

        {/* Left */}

        <div>

          <span className="bg-orange-100 text-orange-600 px-4 py-2 rounded-full font-semibold">
            🚀 AI Business Intelligence
          </span>

          <h1 className="mt-8 text-6xl font-black text-slate-900 leading-tight">
            Predict the Future of Your Business
          </h1>

          <p className="mt-8 text-xl text-slate-600 leading-9">
            PulseMetrics helps companies analyze sales, predict trends,
            monitor KPIs, and make smarter business decisions using AI-powered
            insights.
          </p>

          <div className="mt-10 flex gap-5">

            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl flex items-center gap-3 transition">

              Get Started

              <FaArrowRight />

            </button>

            <button className="border border-orange-500 text-orange-500 px-8 py-4 rounded-xl hover:bg-orange-500 hover:text-white transition">

              Live Demo

            </button>

          </div>

        </div>

        {/* Right */}

        <div className="flex justify-center">

          <div className="w-96 h-96 rounded-3xl bg-gradient-to-br from-orange-400 to-orange-600 shadow-2xl flex justify-center items-center">

            <div className="bg-white rounded-2xl p-10 text-center shadow-xl">

              <h2 className="text-3xl font-bold text-orange-500">
                PulseMetrics
              </h2>

              <p className="mt-4 text-gray-500">
                AI Dashboard Preview
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;
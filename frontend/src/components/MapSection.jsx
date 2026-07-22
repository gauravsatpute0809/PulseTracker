import { FaMapMarkerAlt } from "react-icons/fa";

function MapSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">

          <span className="text-orange-500 uppercase tracking-[4px] font-semibold">
            Our Location
          </span>

          <h2 className="text-5xl font-extrabold mt-4 text-gray-900">
            Visit Our Office
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            We'd love to meet you. Stop by our office or reach out online.
          </p>

        </div>

        <div className="mt-16 grid lg:grid-cols-3 gap-8">

          {/* Google Map */}
          <div className="lg:col-span-2 rounded-3xl overflow-hidden shadow-2xl border border-gray-200">

            <iframe
              title="PulseMetrics Location"
              src="https://www.google.com/maps?q=Pune,Maharashtra&output=embed"
              width="100%"
              height="500"
              loading="lazy"
              className="border-0"
            ></iframe>

          </div>

          {/* Office Card */}
          <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-3xl p-8 shadow-2xl flex flex-col justify-center">

            <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center text-3xl">

              <FaMapMarkerAlt />

            </div>

            <h3 className="text-3xl font-bold mt-8">
              PulseMetrics HQ
            </h3>

            <p className="mt-6 leading-8 text-orange-100">
              Pune,
              <br />
              Maharashtra,
              <br />
              India
            </p>

            <div className="mt-10 space-y-3">

              <p>
                📞 +91 98765 43210
              </p>

              <p>
                ✉ support@pulsemetrics.com
              </p>

              <p>
                🕒 Mon – Fri | 9 AM – 6 PM
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default MapSection;
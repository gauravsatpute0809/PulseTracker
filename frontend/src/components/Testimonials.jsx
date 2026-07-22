import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechNova",
    review:
      "PulseMetrics completely changed how we analyze our business. The dashboards are beautiful and the AI insights save us hours every week.",
  },
  {
    name: "Michael Brown",
    role: "Sales Manager, GrowthX",
    review:
      "The reporting system is fast, intuitive, and extremely reliable. Our entire sales team depends on it every day.",
  },
  {
    name: "Emily Davis",
    role: "Founder, BrightLabs",
    review:
      "The clean interface and predictive analytics helped us make better business decisions. Highly recommended.",
  },
];

function Testimonials() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-orange-500 font-semibold uppercase tracking-wider">
            Testimonials
          </span>

          <h2 className="text-5xl font-bold text-gray-900 mt-4">
            Loved by Businesses Worldwide
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            Thousands of companies trust PulseMetrics to manage
            analytics, reports, and business growth.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {testimonials.map((item) => (
            <div
              key={item.name}
              className="bg-white rounded-3xl p-8 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >

              <div className="flex gap-1 text-orange-500 mb-5">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              <p className="text-gray-600 leading-8">
                "{item.review}"
              </p>

              <div className="mt-8 flex items-center gap-4">

                <div className="w-14 h-14 rounded-full bg-orange-500 text-white flex items-center justify-center text-xl font-bold">
                  {item.name.charAt(0)}
                </div>

                <div>
                  <h3 className="font-bold text-lg">
                    {item.name}
                  </h3>

                  <p className="text-gray-500">
                    {item.role}
                  </p>
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Testimonials;
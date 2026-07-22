import {
  FaChartLine,
  FaRobot,
  FaUsers,
  FaShieldAlt,
  FaCloud,
  FaFileExport,
} from "react-icons/fa";

const features = [
  {
    icon: <FaChartLine />,
    title: "Advanced Analytics",
    description:
      "Visualize your business performance with interactive dashboards and real-time insights.",
  },
  {
    icon: <FaRobot />,
    title: "AI Predictions",
    description:
      "Forecast revenue, customer behavior, and future trends using AI-powered analytics.",
  },
  {
    icon: <FaUsers />,
    title: "Customer Management",
    description:
      "Track customer growth, engagement, and purchasing patterns in one place.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Enterprise Security",
    description:
      "Keep your business data protected with secure authentication and encrypted storage.",
  },
  {
    icon: <FaCloud />,
    title: "Cloud Access",
    description:
      "Access your dashboard anytime, anywhere with a scalable cloud infrastructure.",
  },
  {
    icon: <FaFileExport />,
    title: "Smart Reports",
    description:
      "Export reports in PDF and CSV formats for meetings, audits, and presentations.",
  },
];

function Features() {
  return (
    <section
      id="features"
      className="py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">

          <span className="text-orange-500 font-semibold uppercase tracking-wider">
            Features
          </span>

          <h2 className="text-5xl font-bold text-gray-900 mt-4">
            Everything You Need to Grow Your Business
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            PulseMetrics combines AI, analytics, automation, and reporting
            into one powerful platform designed for modern businesses.
          </p>

        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {features.map((feature) => (
            <div
              key={feature.title}
              className="group bg-white border border-gray-200 rounded-3xl p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-orange-100 text-orange-500 text-3xl flex items-center justify-center group-hover:bg-orange-500 group-hover:text-white transition">
                {feature.icon}
              </div>

              <h3 className="text-2xl font-bold mt-6">
                {feature.title}
              </h3>

              <p className="text-gray-600 mt-4 leading-7">
                {feature.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Features;
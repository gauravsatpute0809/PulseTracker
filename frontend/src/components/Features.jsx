import {
  FaChartLine,
  FaBrain,
  FaDatabase,
  FaShieldAlt,
} from "react-icons/fa";

function Features() {
  const features = [
    {
      icon: <FaChartLine size={35} />,
      title: "Real-Time Analytics",
      description:
        "Monitor revenue, sales and KPIs with interactive dashboards.",
    },
    {
      icon: <FaBrain size={35} />,
      title: "AI Predictions",
      description:
        "Forecast business growth using AI-powered predictive analytics.",
    },
    {
      icon: <FaDatabase size={35} />,
      title: "Centralized Data",
      description:
        "Connect all your business data into one intelligent platform.",
    },
    {
      icon: <FaShieldAlt size={35} />,
      title: "Enterprise Security",
      description:
        "Secure authentication, encrypted data and role-based access.",
    },
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-5xl font-bold text-center text-slate-900">
          Powerful Features
        </h2>

        <p className="text-center text-gray-500 mt-5 text-lg">
          Everything you need to manage and grow your business.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition duration-300 hover:-translate-y-2"
            >
              <div className="w-16 h-16 rounded-xl bg-orange-100 flex items-center justify-center text-orange-500">
                {feature.icon}
              </div>

              <h3 className="text-2xl font-bold mt-8">
                {feature.title}
              </h3>

              <p className="text-gray-500 mt-4 leading-7">
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
import {
  FaUsers,
  FaChartLine,
  FaBuilding,
  FaGlobe,
} from "react-icons/fa";

function Statistics() {
  const stats = [
    {
      icon: <FaUsers size={30} />,
      number: "120K+",
      title: "Active Users",
    },
    {
      icon: <FaChartLine size={30} />,
      number: "₹12M+",
      title: "Revenue Tracked",
    },
    {
      icon: <FaBuilding size={30} />,
      number: "850+",
      title: "Companies",
    },
    {
      icon: <FaGlobe size={30} />,
      number: "45+",
      title: "Countries",
    },
  ];

  return (
    <section className="py-24 bg-orange-500">
      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-5xl font-bold text-white text-center">
          Trusted Around the World
        </h2>

        <p className="text-center text-orange-100 mt-5 text-lg">
          Helping businesses make smarter decisions every day.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 text-center shadow-xl hover:-translate-y-2 transition duration-300"
            >
              <div className="flex justify-center text-orange-500">
                {item.icon}
              </div>

              <h3 className="text-4xl font-bold mt-6 text-slate-900">
                {item.number}
              </h3>

              <p className="mt-3 text-gray-500">
                {item.title}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Statistics;
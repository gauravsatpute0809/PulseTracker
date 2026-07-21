import {
  FaArrowTrendUp,
  FaTriangleExclamation,
  FaLightbulb,
} from "react-icons/fa6";

const insights = [
  {
    icon: <FaArrowTrendUp />,
    title: "Revenue Growth",
    description:
      "Revenue is expected to increase by 18% next month.",
    color: "text-green-500",
  },
  {
    icon: <FaTriangleExclamation />,
    title: "Inventory Alert",
    description:
      "12 products are running low on stock.",
    color: "text-red-500",
  },
  {
    icon: <FaLightbulb />,
    title: "AI Recommendation",
    description:
      "Launch a weekend discount campaign to boost sales.",
    color: "text-orange-500",
  },
];

function AIInsights() {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 h-full">
      <h2 className="text-xl font-bold mb-6">
        AI Insights
      </h2>

      <div className="space-y-5">
        {insights.map((item, index) => (
          <div
            key={index}
            className="flex gap-4 p-4 rounded-xl bg-gray-50 hover:bg-orange-50 transition"
          >
            <div className={`text-2xl ${item.color}`}>
              {item.icon}
            </div>

            <div>
              <h3 className="font-semibold">
                {item.title}
              </h3>

              <p className="text-sm text-gray-500 mt-1">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AIInsights;
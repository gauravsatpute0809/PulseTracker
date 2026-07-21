import {
  FaDollarSign,
  FaShoppingCart,
  FaUsers,
  FaChartLine,
} from "react-icons/fa";

const cards = [
  {
    title: "Revenue",
    value: "$245,890",
    icon: <FaDollarSign />,
    color: "bg-green-500",
  },
  {
    title: "Orders",
    value: "1,248",
    icon: <FaShoppingCart />,
    color: "bg-orange-500",
  },
  {
    title: "Customers",
    value: "8,542",
    icon: <FaUsers />,
    color: "bg-blue-500",
  },
  {
    title: "Profit",
    value: "28%",
    icon: <FaChartLine />,
    color: "bg-purple-500",
  },
];

function DashboardCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-8">
      {cards.map((card) => (
        <div
          key={card.title}
          className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition"
        >
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-500">{card.title}</p>

              <h2 className="text-3xl font-bold mt-3">
                {card.value}
              </h2>
            </div>

            <div
              className={`${card.color} w-16 h-16 rounded-2xl flex items-center justify-center text-white text-2xl`}
            >
              {card.icon}
            </div>
          </div>

          <p className="text-green-600 mt-5 text-sm">
            ↑ 12% from last month
          </p>
        </div>
      ))}
    </div>
  );
}

export default DashboardCards;
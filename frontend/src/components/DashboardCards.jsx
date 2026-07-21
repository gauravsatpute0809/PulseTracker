import {
  FaDollarSign,
  FaShoppingCart,
  FaUsers,
  FaChartLine,
} from "react-icons/fa";

const cards = [
  {
    title: "Revenue",
    value: "$248,560",
    change: "+18.5%",
    icon: <FaDollarSign />,
    color: "bg-green-100 text-green-600",
  },
  {
    title: "Orders",
    value: "3,254",
    change: "+12.1%",
    icon: <FaShoppingCart />,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Customers",
    value: "1,842",
    change: "+8.3%",
    icon: <FaUsers />,
    color: "bg-orange-100 text-orange-600",
  },
  {
    title: "Growth",
    value: "24.6%",
    change: "+4.7%",
    icon: <FaChartLine />,
    color: "bg-purple-100 text-purple-600",
  },
];

function DashboardCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-8">
      {cards.map((card) => (
        <div
          key={card.title}
          className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 p-6"
        >
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-500">{card.title}</p>

              <h2 className="text-3xl font-bold mt-2">
                {card.value}
              </h2>

              <span className="text-green-600 text-sm font-semibold">
                {card.change} this month
              </span>
            </div>

            <div
              className={`w-16 h-16 rounded-2xl flex items-center justify-center text-2xl ${card.color}`}
            >
              {card.icon}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DashboardCards;
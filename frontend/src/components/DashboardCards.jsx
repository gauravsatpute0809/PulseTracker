import {
  FaDollarSign,
  FaShoppingCart,
  FaUsers,
  FaBox,
} from "react-icons/fa";

import useDashboardSummary from "../hooks/useDashboardSummary";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function DashboardCards() {
  const { summary, loading } = useDashboardSummary();

  const cards = [
    {
      title: "Revenue",
      value: `₹${Number(summary.revenue).toLocaleString()}`,
      change: "Live Data",
      icon: <FaDollarSign />,
      color: "bg-green-100 text-green-600",
    },
    {
      title: "Orders",
      value: summary.orders,
      change: "Live Data",
      icon: <FaShoppingCart />,
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Customers",
      value: summary.customers,
      change: "Live Data",
      icon: <FaUsers />,
      color: "bg-orange-100 text-orange-600",
    },
    {
      title: "Products",
      value: summary.products,
      change: "Live Data",
      icon: <FaBox />,
      color: "bg-purple-100 text-purple-600",
    },
  ];

  if (loading) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-8">

      {[1, 2, 3, 4].map((item) => (
        <div
          key={item}
          className="bg-white rounded-2xl shadow-md p-6"
        >
          <Skeleton height={20} width={120} />

          <Skeleton
            height={35}
            width={100}
            className="mt-4"
          />

          <Skeleton
            height={15}
            width={140}
            className="mt-4"
          />
        </div>
      ))}

    </div>
  );
}

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
                {card.change}
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
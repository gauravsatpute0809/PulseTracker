import {
  FaProjectDiagram,
  FaUsers,
  FaShoppingCart,
  FaFileAlt,
} from "react-icons/fa";

const stats = [
  {
    title: "Projects",
    value: "24",
    icon: <FaProjectDiagram />,
  },
  {
    title: "Customers",
    value: "1,842",
    icon: <FaUsers />,
  },
  {
    title: "Orders",
    value: "3,254",
    icon: <FaShoppingCart />,
  },
  {
    title: "Reports",
    value: "126",
    icon: <FaFileAlt />,
  },
];

function AccountStats() {
  return (
    <div className="grid grid-cols-2 xl:grid-cols-4 gap-6">
      {stats.map((item) => (
        <div
          key={item.title}
          className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition"
        >
          <div className="text-orange-500 text-3xl mb-4">
            {item.icon}
          </div>

          <h3 className="text-3xl font-bold">
            {item.value}
          </h3>

          <p className="text-gray-500 mt-2">
            {item.title}
          </p>
        </div>
      ))}
    </div>
  );
}

export default AccountStats;
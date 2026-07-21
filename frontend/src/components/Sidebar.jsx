import {
  FaChartPie,
  FaChartLine,
  FaBox,
  FaUsers,
  FaShoppingCart,
  FaFileAlt,
  FaCog,
  FaUserCircle,
  FaSignOutAlt,
} from "react-icons/fa";

const menus = [
  { icon: <FaChartPie />, title: "Dashboard", active: true },
  { icon: <FaChartLine />, title: "Analytics" },
  { icon: <FaBox />, title: "Products" },
  { icon: <FaUsers />, title: "Customers" },
  { icon: <FaShoppingCart />, title: "Orders" },
  { icon: <FaFileAlt />, title: "Reports" },
  { icon: <FaCog />, title: "Settings" },
  { icon: <FaUserCircle />, title: "Profile" },
];

function Sidebar() {
  return (
    <aside className="w-64 bg-[#0F172A] text-white min-h-screen flex flex-col border-r border-slate-800">

      {/* Logo */}
      <div className="h-20 flex items-center justify-center border-b border-slate-800">
        <h1 className="text-3xl font-extrabold">
          <span className="text-orange-500">Pulse</span>
          <span className="text-white">Metrics</span>
        </h1>
      </div>

      {/* Menu */}
      <nav className="flex-1 px-4 py-6 space-y-2">
        {menus.map((menu) => (
          <button
            key={menu.title}
            className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 ${
              menu.active
                ? "bg-orange-500 shadow-lg"
                : "hover:bg-slate-800"
            }`}
          >
            <span className="text-lg">{menu.icon}</span>
            <span>{menu.title}</span>
          </button>
        ))}
      </nav>

      {/* User */}
      <div className="px-4 py-5 border-t border-slate-800">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-11 h-11 rounded-full bg-orange-500 flex items-center justify-center font-bold">
            G
          </div>

          <div>
            <h3 className="font-semibold">Gaurav</h3>
            <p className="text-xs text-gray-400">
              Administrator
            </p>
          </div>
        </div>

        <button className="w-full bg-red-500 hover:bg-red-600 rounded-xl py-3 flex items-center justify-center gap-3 transition">
          <FaSignOutAlt />
          Logout
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
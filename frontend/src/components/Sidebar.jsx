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
import { NavLink, useNavigate } from "react-router-dom";

const menus = [
  { icon: <FaChartPie />, title: "Dashboard", path: "/dashboard" },
  { icon: <FaChartLine />, title: "Analytics", path: "/analytics" },
  { icon: <FaBox />, title: "Products", path: "/products" },
  { icon: <FaUsers />, title: "Customers", path: "/customers" },
  { icon: <FaShoppingCart />, title: "Orders", path: "/orders" },
  { icon: <FaFileAlt />, title: "Reports", path: "/reports" },
  { icon: <FaCog />, title: "Settings", path: "/settings" },
  { icon: <FaUserCircle />, title: "Profile", path: "/profile" },
];

function Sidebar() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  };

  return (
    <aside className="w-72 bg-slate-900 text-white min-h-screen flex flex-col border-r border-slate-800">

      {/* Logo */}
      <div className="h-20 flex items-center justify-center border-b border-slate-800">
        <h1 className="text-3xl font-extrabold tracking-wide">
          <span className="text-orange-500">Pulse</span>
          <span className="text-white">Metrics</span>
        </h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-5 py-6 space-y-2">
        {menus.map((menu) => (
          <NavLink
            key={menu.title}
            to={menu.path}
            className={({ isActive }) =>
              `flex items-center gap-4 px-5 py-3 rounded-xl transition-all duration-300 ${
                isActive
                  ? "bg-orange-500 text-white shadow-lg"
                  : "text-gray-300 hover:bg-slate-800 hover:text-white"
              }`
            }
          >
            <span className="text-lg">{menu.icon}</span>
            <span className="font-medium">{menu.title}</span>
          </NavLink>
        ))}
      </nav>

      {/* User Section */}
      <div className="border-t border-slate-800 p-5">

        <div className="flex items-center gap-3 bg-slate-800 rounded-2xl p-4 mb-4">

          <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center font-bold text-lg">
            {user?.full_name?.charAt(0)?.toUpperCase() || "U"}
          </div>

          <div>
            <h3 className="font-semibold">
              {user?.full_name || "User"}
            </h3>

            <p className="text-xs text-gray-400">
              {user?.email || "user@example.com"}
            </p>
          </div>

        </div>

        <button
          onClick={handleLogout}
          className="w-full bg-red-500 hover:bg-red-600 rounded-xl py-3 flex items-center justify-center gap-3 font-medium transition-all duration-300"
        >
          <FaSignOutAlt />
          Logout
        </button>

      </div>

    </aside>
  );
}

export default Sidebar;
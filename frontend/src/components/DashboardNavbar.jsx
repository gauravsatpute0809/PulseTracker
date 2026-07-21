import {
  FaBars,
  FaSearch,
  FaBell,
  FaMoon,
  FaChevronDown,
} from "react-icons/fa";

function DashboardNavbar() {
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-xl border-b border-gray-200">
      <div className="h-20 px-8 flex items-center justify-between">

        {/* Left */}
        <div className="flex items-center gap-6">

          <button className="w-11 h-11 rounded-xl border border-gray-200 hover:bg-orange-50 hover:border-orange-300 transition flex items-center justify-center">
            <FaBars className="text-gray-600" />
          </button>

          <div className="relative hidden md:block">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

            <input
              type="text"
              placeholder="Search dashboard..."
              className="w-80 pl-11 pr-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition"
            />
          </div>

        </div>

        {/* Right */}
        <div className="flex items-center gap-4">

          {/* Notification */}
          <button className="relative w-11 h-11 rounded-xl border border-gray-200 hover:bg-orange-50 transition flex items-center justify-center">

            <FaBell className="text-gray-600" />

            <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-orange-500 rounded-full"></span>

          </button>

          {/* Theme */}
          <button className="w-11 h-11 rounded-xl border border-gray-200 hover:bg-orange-50 transition flex items-center justify-center">

            <FaMoon className="text-gray-600" />

          </button>

          {/* Profile */}
          <button className="flex items-center gap-3 px-3 py-2 rounded-xl border border-gray-200 hover:bg-gray-50 transition">

            <div className="w-11 h-11 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold">
              G
            </div>

            <div className="hidden md:block text-left">
              <h4 className="font-semibold text-gray-900">
                Gaurav
              </h4>

              <p className="text-xs text-gray-500">
                Administrator
              </p>
            </div>

            <FaChevronDown className="text-gray-500 hidden md:block" />

          </button>

        </div>

      </div>
    </header>
  );
}

export default DashboardNavbar;
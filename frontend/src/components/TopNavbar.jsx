import {
  FaBell,
  FaMoon,
  FaSearch,
} from "react-icons/fa";

function TopNavbar() {
  return (
    <header className="bg-white h-20 px-8 flex items-center justify-between border-b">

      <div className="relative w-96">

        <FaSearch className="absolute left-4 top-4 text-gray-400" />

        <input
          type="text"
          placeholder="Search dashboard..."
          className="w-full bg-slate-100 rounded-xl py-3 pl-12 pr-4 outline-none focus:ring-2 focus:ring-orange-400"
        />

      </div>

      <div className="flex items-center gap-5">

        <button className="w-11 h-11 rounded-xl bg-slate-100 hover:bg-orange-500 hover:text-white transition">
          <FaMoon className="mx-auto" />
        </button>

        <button className="w-11 h-11 rounded-xl bg-slate-100 hover:bg-orange-500 hover:text-white transition relative">
          <FaBell className="mx-auto" />

          <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-red-500"></span>
        </button>

        <img
          src="https://ui-avatars.com/api/?name=Gaurav&background=F97316&color=fff"
          alt="Profile"
          className="w-11 h-11 rounded-full"
        />

      </div>

    </header>
  );
}

export default TopNavbar;
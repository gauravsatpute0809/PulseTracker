function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-8 h-20 flex justify-between items-center">

        <h1 className="text-3xl font-bold text-orange-500">
          PulseMetrics
        </h1>

        <div className="hidden md:flex gap-8 text-gray-700 font-medium">
          <a href="#" className="hover:text-orange-500 transition">
            Home
          </a>

          <a href="#" className="hover:text-orange-500 transition">
            Features
          </a>

          <a href="#" className="hover:text-orange-500 transition">
            Pricing
          </a>

          <a href="#" className="hover:text-orange-500 transition">
            Contact
          </a>
        </div>

        <button className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-lg transition">
          Login
        </button>

      </div>
    </nav>
  );
}

export default Navbar;
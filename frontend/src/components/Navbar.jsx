import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-8 h-20 flex justify-between items-center">

        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-bold text-orange-500"
        >
          PulseMetrics
        </Link>

        {/* Navigation */}
        <div className="hidden md:flex gap-8 text-gray-700 font-medium">

          <a href="#home" className="hover:text-orange-500 transition">
            Home
          </a>

          <a href="#features" className="hover:text-orange-500 transition">
            Features
          </a>

          <a href="#pricing" className="hover:text-orange-500 transition">
            Pricing
          </a>

          <a href="#contact" className="hover:text-orange-500 transition">
            Contact
          </a>

        </div>

        {/* Buttons */}
        <div className="flex items-center gap-4">

          <Link
            to="/login"
            className="px-5 py-2 rounded-lg border border-orange-500 text-orange-500 hover:bg-orange-50 transition"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-lg transition"
          >
            Get Started
          </Link>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;
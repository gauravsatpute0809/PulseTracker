import { Link } from "react-router-dom";

function RegisterForm() {
  return (
    <form className="space-y-5">
      <input
        type="text"
        placeholder="Full Name"
        className="w-full border rounded-xl p-3 focus:ring-2 focus:ring-orange-400 outline-none"
      />

      <input
        type="email"
        placeholder="Email Address"
        className="w-full border rounded-xl p-3 focus:ring-2 focus:ring-orange-400 outline-none"
      />

      <input
        type="password"
        placeholder="Password"
        className="w-full border rounded-xl p-3 focus:ring-2 focus:ring-orange-400 outline-none"
      />

      <input
        type="password"
        placeholder="Confirm Password"
        className="w-full border rounded-xl p-3 focus:ring-2 focus:ring-orange-400 outline-none"
      />

      <button
        type="submit"
        className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-semibold transition"
      >
        Create Account
      </button>

      <div className="flex items-center gap-4">
        <hr className="flex-1" />
        <span className="text-gray-400 text-sm">OR</span>
        <hr className="flex-1" />
      </div>

      <button
        type="button"
        className="w-full border py-3 rounded-xl hover:bg-gray-50 transition"
      >
        Continue with Google
      </button>

      <button
        type="button"
        className="w-full border py-3 rounded-xl hover:bg-gray-50 transition"
      >
        Continue with GitHub
      </button>

      <p className="text-center text-gray-500">
        Already have an account?{" "}
        <Link
          to="/login"
          className="text-orange-500 font-semibold hover:underline"
        >
          Sign In
        </Link>
      </p>
    </form>
  );
}

export default RegisterForm;
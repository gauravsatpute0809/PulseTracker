import { Link } from "react-router-dom";

function ForgotPasswordForm() {
  return (
    <form className="space-y-6">
      <input
        type="email"
        placeholder="Enter your email address"
        className="w-full border rounded-xl p-3 focus:ring-2 focus:ring-orange-400 outline-none"
      />

      <button
        type="submit"
        className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-semibold transition"
      >
        Send Reset Link
      </button>

      <p className="text-center">
        <Link
          to="/login"
          className="text-orange-500 font-semibold hover:underline"
        >
          ← Back to Login
        </Link>
      </p>
    </form>
  );
}

export default ForgotPasswordForm;
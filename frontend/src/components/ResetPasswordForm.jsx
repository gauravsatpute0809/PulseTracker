import { Link } from "react-router-dom";

function ResetPasswordForm() {
  return (
    <form className="space-y-5">
      <input
        type="password"
        placeholder="New Password"
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
        Reset Password
      </button>

      <p className="text-center">
        <Link
          to="/login"
          className="text-orange-500 font-semibold hover:underline"
        >
          Back to Login
        </Link>
      </p>
    </form>
  );
}

export default ResetPasswordForm;
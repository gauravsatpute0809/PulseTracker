import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../services/api";

function RegisterForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage("");

    if (formData.password !== formData.confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    try {
      setLoading(true);

      const response = await api.post("/register", {
        full_name: formData.full_name,
        email: formData.email,
        password: formData.password,
      });

      setMessage(response.data.message);

      setTimeout(() => {
        navigate("/login");
      }, 1500);

    } catch (error) {
      if (error.response) {
        setMessage(error.response.data.message);
      } else {
        setMessage("Server connection failed.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">

      <input
        type="text"
        name="full_name"
        placeholder="Full Name"
        value={formData.full_name}
        onChange={handleChange}
        className="w-full border rounded-xl p-3 focus:ring-2 focus:ring-orange-400 outline-none"
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Email Address"
        value={formData.email}
        onChange={handleChange}
        className="w-full border rounded-xl p-3 focus:ring-2 focus:ring-orange-400 outline-none"
        required
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        className="w-full border rounded-xl p-3 focus:ring-2 focus:ring-orange-400 outline-none"
        required
      />

      <input
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password"
        value={formData.confirmPassword}
        onChange={handleChange}
        className="w-full border rounded-xl p-3 focus:ring-2 focus:ring-orange-400 outline-none"
        required
      />

      {message && (
        <div className="text-center text-sm text-red-500">
          {message}
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-semibold transition"
      >
        {loading ? "Creating Account..." : "Create Account"}
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
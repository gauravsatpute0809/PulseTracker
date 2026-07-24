import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../services/api";

function LoginForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage("");

    try {
      setLoading(true);

      const response = await api.post("/login", {
        email: formData.email,
        password: formData.password,
      });

      // Save JWT Token
      localStorage.setItem("token", response.data.access_token);

      // Save User Details
      localStorage.setItem(
        "user",
        JSON.stringify(response.data.user)
      );

      setMessage("Login successful!");

      setTimeout(() => {
        navigate("/dashboard");
      }, 1000);

    } catch (error) {

      if (error.response) {
        setMessage(error.response.data.message);
      } else {
        setMessage("Unable to connect to server.");
      }

    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">

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

      <div className="flex justify-between items-center text-sm">

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            name="remember"
            checked={formData.remember}
            onChange={handleChange}
          />
          Remember me
        </label>

        <Link
          to="/forgot-password"
          className="text-orange-500 hover:underline"
        >
          Forgot Password?
        </Link>

      </div>

      {message && (
        <p className="text-center text-red-500 text-sm">
          {message}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-semibold transition"
      >
        {loading ? "Signing In..." : "Sign In"}
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
        Don't have an account?{" "}
        <Link
          to="/register"
          className="text-orange-500 font-semibold hover:underline"
        >
          Register
        </Link>
      </p>

    </form>
  );
}

export default LoginForm;
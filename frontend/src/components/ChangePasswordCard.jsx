import { useState } from "react";
import { FaEye, FaEyeSlash, FaLock } from "react-icons/fa";
import api from "../services/api";

function ChangePasswordCard() {
  const [formData, setFormData] = useState({
    current_password: "",
    new_password: "",
    confirm_password: "",
  });

  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [loading, setLoading] = useState(false);

  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage("");
    setSuccess(false);

    if (formData.new_password.length < 6) {
      setMessage("Password must be at least 6 characters.");
      return;
    }

    if (formData.new_password !== formData.confirm_password) {
      setMessage("Passwords do not match.");
      return;
    }

    try {
      setLoading(true);

      const token = localStorage.getItem("token");

    const response = await api.put(
  "/profile/change-password",
  {
    current_password: formData.current_password,
    new_password: formData.new_password,
  }
);

      setSuccess(true);
      setMessage(response.data.message);

      setFormData({
        current_password: "",
        new_password: "",
        confirm_password: "",
      });

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
    <div className="bg-white rounded-2xl shadow-md p-8 mt-8">

      <div className="flex items-center gap-3 mb-6">
        <FaLock className="text-orange-500 text-2xl" />
        <h2 className="text-2xl font-bold">
          Change Password
        </h2>
      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-5"
      >

        {/* Current Password */}
        <div className="relative">

          <label className="block mb-2 font-medium">
            Current Password
          </label>

          <input
            type={showCurrent ? "text" : "password"}
            name="current_password"
            value={formData.current_password}
            onChange={handleChange}
            className="w-full border rounded-xl p-3 pr-12 focus:ring-2 focus:ring-orange-400 outline-none"
            required
          />

          <button
            type="button"
            onClick={() => setShowCurrent(!showCurrent)}
            className="absolute right-4 top-11 text-gray-500"
          >
            {showCurrent ? <FaEyeSlash /> : <FaEye />}
          </button>

        </div>

        {/* New Password */}
        <div className="relative">

          <label className="block mb-2 font-medium">
            New Password
          </label>

          <input
            type={showNew ? "text" : "password"}
            name="new_password"
            value={formData.new_password}
            onChange={handleChange}
            className="w-full border rounded-xl p-3 pr-12 focus:ring-2 focus:ring-orange-400 outline-none"
            required
          />

          <button
            type="button"
            onClick={() => setShowNew(!showNew)}
            className="absolute right-4 top-11 text-gray-500"
          >
            {showNew ? <FaEyeSlash /> : <FaEye />}
          </button>

        </div>

        {/* Confirm Password */}
        <div className="relative">

          <label className="block mb-2 font-medium">
            Confirm Password
          </label>

          <input
            type={showConfirm ? "text" : "password"}
            name="confirm_password"
            value={formData.confirm_password}
            onChange={handleChange}
            className="w-full border rounded-xl p-3 pr-12 focus:ring-2 focus:ring-orange-400 outline-none"
            required
          />

          <button
            type="button"
            onClick={() => setShowConfirm(!showConfirm)}
            className="absolute right-4 top-11 text-gray-500"
          >
            {showConfirm ? <FaEyeSlash /> : <FaEye />}
          </button>

        </div>

        {message && (
          <div
            className={`p-3 rounded-xl text-sm ${
              success
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {message}
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-semibold transition"
        >
          {loading ? "Updating..." : "Change Password"}
        </button>

      </form>

    </div>
  );
}

export default ChangePasswordCard;
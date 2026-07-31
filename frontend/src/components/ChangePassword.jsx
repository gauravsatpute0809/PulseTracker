import { useState } from "react";
import { FaLock } from "react-icons/fa";

function ChangePassword() {
  const [passwords, setPasswords] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setPasswords({
      ...passwords,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-white rounded-2xl shadow p-6">

      <div className="flex items-center gap-3 mb-6">
        <FaLock className="text-orange-500 text-2xl" />
        <h2 className="text-2xl font-bold text-gray-800">
          Change Password
        </h2>
      </div>

      <div className="grid gap-5">

        <div>
          <label className="block mb-2 text-gray-600 font-medium">
            Current Password
          </label>

          <input
            type="password"
            name="currentPassword"
            value={passwords.currentPassword}
            onChange={handleChange}
            placeholder="Enter current password"
            className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        <div>
          <label className="block mb-2 text-gray-600 font-medium">
            New Password
          </label>

          <input
            type="password"
            name="newPassword"
            value={passwords.newPassword}
            onChange={handleChange}
            placeholder="Enter new password"
            className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        <div>
          <label className="block mb-2 text-gray-600 font-medium">
            Confirm Password
          </label>

          <input
            type="password"
            name="confirmPassword"
            value={passwords.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm new password"
            className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

      </div>

    </div>
  );
}

export default ChangePassword;
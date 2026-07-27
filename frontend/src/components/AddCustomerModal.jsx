import { useState } from "react";
import api from "../services/api";

function AddCustomerModal({
  isOpen,
  onClose,
  onCustomerAdded,
}) {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    city: "",
    status: "Active",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post("/customers", formData);

      alert("Customer added successfully!");

      setFormData({
        full_name: "",
        email: "",
        phone: "",
        city: "",
        status: "Active",
      });

      onCustomerAdded();
      onClose();

    } catch (error) {
      alert(
        error.response?.data?.message ||
        "Failed to add customer."
      );
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

      <div className="bg-white rounded-2xl w-full max-w-xl p-8">

        <h2 className="text-2xl font-bold mb-6">
          Add Customer
        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >

          <input
            type="text"
            name="full_name"
            placeholder="Full Name"
            value={formData.full_name}
            onChange={handleChange}
            required
            className="w-full border rounded-xl px-4 py-3"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border rounded-xl px-4 py-3"
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full border rounded-xl px-4 py-3"
          />

          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            required
            className="w-full border rounded-xl px-4 py-3"
          />

          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full border rounded-xl px-4 py-3"
          >
            <option value="Active">Active</option>
            <option value="Inactive">
              Inactive
            </option>
          </select>

          <div className="flex justify-end gap-3 pt-4">

            <button
              type="button"
              onClick={onClose}
              className="px-6 py-3 rounded-xl border"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl"
            >
              Add Customer
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}

export default AddCustomerModal;
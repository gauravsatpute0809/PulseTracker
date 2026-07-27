import { useEffect, useState } from "react";
import api from "../services/api";

function EditCustomerModal({
  isOpen,
  onClose,
  customer,
  onCustomerUpdated,
}) {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    city: "",
    status: "Active",
  });

  useEffect(() => {
    if (customer) {
      setFormData({
        full_name: customer.full_name || "",
        email: customer.email || "",
        phone: customer.phone || "",
        city: customer.city || "",
        status: customer.status || "Active",
      });
    }
  }, [customer]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      await api.put(`/customers/${customer.id}`, formData);

      alert("Customer updated successfully!");

      onCustomerUpdated();
      onClose();

    } catch (error) {
      alert(
        error.response?.data?.message ||
          "Failed to update customer."
      );
    }
  };

  if (!isOpen || !customer) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">

      <div className="bg-white rounded-2xl w-full max-w-xl p-8">

        <h2 className="text-2xl font-bold mb-6">
          Edit Customer
        </h2>

        <form
          onSubmit={handleUpdate}
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
            <option value="Inactive">Inactive</option>
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
              Update Customer
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}

export default EditCustomerModal;
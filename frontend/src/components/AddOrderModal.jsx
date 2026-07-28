import { useState } from "react";
import api from "../services/api";

function AddOrderModal({
  isOpen,
  onClose,
  onOrderAdded,
}) {
  const [formData, setFormData] = useState({
    customer_name: "",
    product_name: "",
    quantity: "",
    total_price: "",
    status: "Pending",
    order_date: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post("/orders", formData);

      alert("Order added successfully!");

      setFormData({
        customer_name: "",
        product_name: "",
        quantity: "",
        total_price: "",
        status: "Pending",
        order_date: "",
      });

      onOrderAdded();
      onClose();
    } catch (error) {
      alert(
        error.response?.data?.message ||
        "Unable to add order."
      );
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">

      <div className="bg-white rounded-2xl shadow-xl w-full max-w-2xl p-8">

        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">
            Add New Order
          </h2>

          <button
            onClick={onClose}
            className="text-2xl"
          >
            ✕
          </button>
        </div>

        <form
          onSubmit={handleSubmit}
          className="grid md:grid-cols-2 gap-4"
        >

          <input
            type="text"
            name="customer_name"
            placeholder="Customer Name"
            value={formData.customer_name}
            onChange={handleChange}
            className="border rounded-xl p-3"
            required
          />

          <input
            type="text"
            name="product_name"
            placeholder="Product Name"
            value={formData.product_name}
            onChange={handleChange}
            className="border rounded-xl p-3"
            required
          />

          <input
            type="number"
            name="quantity"
            placeholder="Quantity"
            value={formData.quantity}
            onChange={handleChange}
            className="border rounded-xl p-3"
            required
          />

          <input
            type="number"
            name="total_price"
            placeholder="Total Price"
            value={formData.total_price}
            onChange={handleChange}
            className="border rounded-xl p-3"
            required
          />

          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="border rounded-xl p-3"
          >
            <option>Pending</option>
            <option>Completed</option>
          </select>

          <input
            type="date"
            name="order_date"
            value={formData.order_date}
            onChange={handleChange}
            className="border rounded-xl p-3"
            required
          />

          <div className="md:col-span-2 flex justify-end gap-3 mt-4">

            <button
              type="button"
              onClick={onClose}
              className="px-6 py-3 rounded-xl bg-gray-300 hover:bg-gray-400"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-6 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white"
            >
              Add Order
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}

export default AddOrderModal;
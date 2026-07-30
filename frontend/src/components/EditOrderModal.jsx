import { useEffect, useState } from "react";
import api from "../services/api";

function EditOrderModal({
  isOpen,
  onClose,
  order,
  onOrderUpdated,
}) {
  const [formData, setFormData] = useState({
    customer_name: "",
    product_name: "",
    quantity: "",
    total_price: "",
    status: "Pending",
    order_date: "",
  });

  useEffect(() => {
    if (order) {
      setFormData({
        customer_name: order.customer_name || "",
        product_name: order.product_name || "",
        quantity: order.quantity || "",
        total_price: order.total_price || "",
        status: order.status || "Pending",
        order_date: order.order_date || "",
      });
    }
  }, [order]);

  if (!isOpen || !order) return null;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.type === "number"
          ? Number(e.target.value)
          : e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.put(`/orders/${order.id}`, formData);

      alert("Order updated successfully!");

      onOrderUpdated();
      onClose();
    } catch (error) {
      alert(
        error.response?.data?.message ||
          "Unable to update order."
      );
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-2xl p-8">

        <h2 className="text-2xl font-bold mb-6">
          Edit Order
        </h2>

        <form
          onSubmit={handleSubmit}
          className="grid md:grid-cols-2 gap-5"
        >

          <input
            type="text"
            name="customer_name"
            placeholder="Customer Name"
            value={formData.customer_name}
            onChange={handleChange}
            className="border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-orange-400"
            required
          />

          <input
            type="text"
            name="product_name"
            placeholder="Product Name"
            value={formData.product_name}
            onChange={handleChange}
            className="border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-orange-400"
            required
          />

          <input
            type="number"
            name="quantity"
            placeholder="Quantity"
            value={formData.quantity}
            onChange={handleChange}
            className="border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-orange-400"
            required
          />

          <input
            type="number"
            name="total_price"
            placeholder="Total Price"
            value={formData.total_price}
            onChange={handleChange}
            className="border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-orange-400"
            required
          />

          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-orange-400"
          >
            <option value="Pending">
              Pending
            </option>

            <option value="Completed">
              Completed
            </option>

            <option value="Cancelled">
              Cancelled
            </option>
            <option value="Cancelled">
              Cancelled
              </option>
          </select>

          <input
            type="date"
            name="order_date"
            value={formData.order_date}
            onChange={handleChange}
            className="border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-orange-400"
            required
          />

          <div className="md:col-span-2 flex justify-end gap-4 mt-4">

            <button
              type="button"
              onClick={onClose}
              className="px-6 py-3 rounded-xl border hover:bg-gray-100 transition"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-semibold transition"
            >
              Update Order
            </button>

          </div>

        </form>

      </div>
    </div>
  );
}

export default EditOrderModal;
import { useState } from "react";
import api from "../services/api";

function AddProductModal({ isOpen, onClose, onProductAdded }) {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: "",
    stock: "",
    status: "Active",
    description: "",
  });

  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await api.post("/products", {
        name: formData.name,
        category: formData.category,
        price: Number(formData.price),
        stock: Number(formData.stock),
        status: formData.status,
        description: formData.description,
      });

      alert("Product added successfully!");

      setFormData({
        name: "",
        category: "",
        price: "",
        stock: "",
        status: "Active",
        description: "",
      });

      onProductAdded();
      onClose();

    } catch (error) {
      alert(
        error.response?.data?.message ||
          "Unable to add product."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

      <div className="bg-white rounded-2xl w-full max-w-xl p-8">

        <h2 className="text-3xl font-bold mb-6">
          Add Product
        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          <input
            name="name"
            placeholder="Product Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border rounded-xl p-3"
            required
          />

          <input
            name="category"
            placeholder="Category"
            value={formData.category}
            onChange={handleChange}
            className="w-full border rounded-xl p-3"
            required
          />

          <input
            type="number"
            name="price"
            placeholder="Price"
            value={formData.price}
            onChange={handleChange}
            className="w-full border rounded-xl p-3"
            required
          />

          <input
            type="number"
            name="stock"
            placeholder="Stock"
            value={formData.stock}
            onChange={handleChange}
            className="w-full border rounded-xl p-3"
            required
          />

          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full border rounded-xl p-3"
          >
            <option>Active</option>
            <option>Out of Stock</option>
          </select>

          <textarea
            name="description"
            placeholder="Description"
            rows="4"
            value={formData.description}
            onChange={handleChange}
            className="w-full border rounded-xl p-3"
          />

          <div className="flex justify-end gap-3">

            <button
              type="button"
              onClick={onClose}
              className="px-5 py-3 rounded-xl border"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={loading}
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl"
            >
              {loading ? "Saving..." : "Save Product"}
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}

export default AddProductModal;
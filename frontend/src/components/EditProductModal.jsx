import { useEffect, useState } from "react";
import api from "../services/api";

function EditProductModal({
  isOpen,
  onClose,
  product,
  onProductUpdated,
}) {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: "",
    stock: "",
    status: "Active",
    description: "",
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (product) {
      setFormData({
        name: product.name || "",
        category: product.category || "",
        price: product.price || "",
        stock: product.stock || "",
        status: product.status || "Active",
        description: product.description || "",
      });
    }
  }, [product]);

  if (!isOpen || !product) return null;

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

      await api.put(`/products/${product.id}`, {
        ...formData,
        price: Number(formData.price),
        stock: Number(formData.stock),
      });

      alert("Product updated successfully!");

      onProductUpdated();
      onClose();
    } catch (error) {
      alert(
        error.response?.data?.message ||
          "Unable to update product."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl w-full max-w-xl p-8">

        <h2 className="text-3xl font-bold mb-6">
          Edit Product
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">

          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border rounded-xl p-3"
            placeholder="Product Name"
            required
          />

          <input
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full border rounded-xl p-3"
            placeholder="Category"
            required
          />

          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="w-full border rounded-xl p-3"
            placeholder="Price"
            required
          />

          <input
            type="number"
            name="stock"
            value={formData.stock}
            onChange={handleChange}
            className="w-full border rounded-xl p-3"
            placeholder="Stock"
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
            rows="4"
            value={formData.description}
            onChange={handleChange}
            className="w-full border rounded-xl p-3"
            placeholder="Description"
          />

          <div className="flex justify-end gap-3">

            <button
              type="button"
              onClick={onClose}
              className="border px-5 py-3 rounded-xl"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={loading}
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl"
            >
              {loading ? "Updating..." : "Update Product"}
            </button>

          </div>

        </form>

      </div>
    </div>
  );
}

export default EditProductModal;
import { useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import ProductTable from "../components/ProductTable";
import AddProductModal from "../components/AddProductModal";

function Products() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [refresh, setRefresh] = useState(false);

  const refreshProducts = () => {
    setRefresh(!refresh);
  };

  return (
    <DashboardLayout>

      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-4xl font-bold text-gray-900">
            Products
          </h1>

          <p className="text-gray-500 mt-2">
            Manage your products efficiently.
          </p>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-semibold transition"
        >
          + Add Product
        </button>
      </div>

      {/* Search & Filters */}
      <div className="bg-white rounded-2xl shadow p-5 mb-8">
        <div className="grid md:grid-cols-3 gap-4">

          <input
            type="text"
            placeholder="Search products..."
            className="border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-orange-400"
          />

          <select className="border rounded-xl px-4 py-3 outline-none">
            <option>All Categories</option>
          </select>

          <select className="border rounded-xl px-4 py-3 outline-none">
            <option>All Status</option>
            <option>Active</option>
            <option>Out of Stock</option>
          </select>

        </div>
      </div>

      {/* Summary */}
      <div className="grid md:grid-cols-4 gap-6 mb-8">

        <div className="bg-white rounded-2xl shadow p-6">
          <p className="text-gray-500">Total Products</p>
          <h2 className="text-3xl font-bold mt-2">--</h2>
        </div>

        <div className="bg-white rounded-2xl shadow p-6">
          <p className="text-gray-500">Categories</p>
          <h2 className="text-3xl font-bold mt-2">--</h2>
        </div>

        <div className="bg-white rounded-2xl shadow p-6">
          <p className="text-gray-500">In Stock</p>
          <h2 className="text-3xl font-bold mt-2 text-green-600">--</h2>
        </div>

        <div className="bg-white rounded-2xl shadow p-6">
          <p className="text-gray-500">Out of Stock</p>
          <h2 className="text-3xl font-bold mt-2 text-red-500">--</h2>
        </div>

      </div>

      {/* Product Table */}
      <ProductTable refresh={refresh} />

      {/* Modal */}
      <AddProductModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onProductAdded={refreshProducts}
      />

    </DashboardLayout>
  );
}

export default Products;
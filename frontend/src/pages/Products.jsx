import { useEffect, useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import ProductTable from "../components/ProductTable";
import AddProductModal from "../components/AddProductModal";
import api from "../services/api";

function Products() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [refresh, setRefresh] = useState(false);

  // Filters
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("");
  const [sort, setSort] = useState("");

  // Summary
  const [summary, setSummary] = useState({
    total_products: 0,
    categories: 0,
    in_stock: 0,
    out_of_stock: 0,
  });

  // Fetch Summary
  const fetchSummary = async () => {
    try {
      const response = await api.get("/products/summary");
      setSummary(response.data.summary);
    } catch (error) {
      console.error("Error fetching summary:", error);
    }
  };

  useEffect(() => {
    fetchSummary();
  }, []);

  // Refresh Products & Summary
  const refreshProducts = () => {
    setRefresh((prev) => !prev);
    fetchSummary();
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
        <div className="grid md:grid-cols-4 gap-4">

          {/* Search */}
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-orange-400"
          />

          {/* Category */}
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-orange-400"
          >
            <option value="">All Categories</option>
            <option value="Laptop">Laptop</option>
            <option value="Mobile">Mobile</option>
            <option value="Accessory">Accessory</option>
            <option value="Display">Display</option>
          </select>

          {/* Status */}
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-orange-400"
          >
            <option value="">All Status</option>
            <option value="Active">Active</option>
            <option value="Out of Stock">Out of Stock</option>
          </select>

          {/* Sort */}
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-orange-400"
          >
            <option value="">Sort By</option>
            <option value="name_asc">Name (A-Z)</option>
            <option value="name_desc">Name (Z-A)</option>
            <option value="price_asc">Price (Low → High)</option>
            <option value="price_desc">Price (High → Low)</option>
            <option value="stock_asc">Stock (Low → High)</option>
            <option value="stock_desc">Stock (High → Low)</option>
          </select>

        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid md:grid-cols-4 gap-6 mb-8">

        <div className="bg-white rounded-2xl shadow p-6">
          <p className="text-gray-500">Total Products</p>
          <h2 className="text-3xl font-bold mt-2">
            {summary.total_products}
          </h2>
        </div>

        <div className="bg-white rounded-2xl shadow p-6">
          <p className="text-gray-500">Categories</p>
          <h2 className="text-3xl font-bold mt-2">
            {summary.categories}
          </h2>
        </div>

        <div className="bg-white rounded-2xl shadow p-6">
          <p className="text-gray-500">In Stock</p>
          <h2 className="text-3xl font-bold mt-2 text-green-600">
            {summary.in_stock}
          </h2>
        </div>

        <div className="bg-white rounded-2xl shadow p-6">
          <p className="text-gray-500">Out of Stock</p>
          <h2 className="text-3xl font-bold mt-2 text-red-500">
            {summary.out_of_stock}
          </h2>
        </div>

      </div>

      {/* Product Table */}
      <ProductTable
        refresh={refresh}
        search={search}
        category={category}
        status={status}
        sort={sort}
      />

      {/* Add Product Modal */}
      <AddProductModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onProductAdded={refreshProducts}
      />
    </DashboardLayout>
  );
}

export default Products;
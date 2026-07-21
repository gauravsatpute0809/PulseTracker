import DashboardLayout from "../layouts/DashboardLayout";
import ProductTable from "../components/ProductTable";

function Products() {
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

        <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-semibold transition">
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
            <option>Laptop</option>
            <option>Mobile</option>
            <option>Accessory</option>
            <option>Display</option>
          </select>

          <select className="border rounded-xl px-4 py-3 outline-none">
            <option>All Status</option>
            <option>Active</option>
            <option>Out of Stock</option>
          </select>
        </div>
      </div>

      {/* Product Summary */}
      <div className="grid md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-2xl shadow p-6">
          <p className="text-gray-500">Total Products</p>
          <h2 className="text-3xl font-bold mt-2">248</h2>
        </div>

        <div className="bg-white rounded-2xl shadow p-6">
          <p className="text-gray-500">Categories</p>
          <h2 className="text-3xl font-bold mt-2">18</h2>
        </div>

        <div className="bg-white rounded-2xl shadow p-6">
          <p className="text-gray-500">In Stock</p>
          <h2 className="text-3xl font-bold mt-2 text-green-600">215</h2>
        </div>

        <div className="bg-white rounded-2xl shadow p-6">
          <p className="text-gray-500">Out of Stock</p>
          <h2 className="text-3xl font-bold mt-2 text-red-500">33</h2>
        </div>
      </div>

      {/* Product Table */}
      <ProductTable />
    </DashboardLayout>
  );
}

export default Products;
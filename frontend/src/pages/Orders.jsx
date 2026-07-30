import { useEffect, useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import OrderTable from "../components/OrderTable";
import AddOrderModal from "../components/AddOrderModal";
import api from "../services/api";

function Orders() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [refresh, setRefresh] = useState(false);

  // Filters
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");

  // Summary
  const [summary, setSummary] = useState({
  total_orders: 0,
  completed_orders: 0,
  pending_orders: 0,
  cancelled_orders: 0,
  total_sales: 0,
});
  // Fetch Summary
  const fetchSummary = async () => {
    try {
      const response = await api.get("/orders/summary");
      setSummary(response.data.summary);
    } catch (error) {
      console.error("Error fetching order summary:", error);
    }
  };

  useEffect(() => {
    fetchSummary();
  }, [refresh]);

  // Refresh Orders & Summary
  const refreshOrders = () => {
    setRefresh((prev) => !prev);
  };

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-4xl font-bold text-gray-900">
            Orders
          </h1>

          <p className="text-gray-500 mt-2">
            Manage your orders efficiently.
          </p>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-semibold transition"
        >
          + Add Order
        </button>
      </div>

      {/* Search & Filter */}
      <div className="bg-white rounded-2xl shadow p-5 mb-8">
        <div className="grid md:grid-cols-2 gap-4">

          <input
            type="text"
            placeholder="Search customer or product..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-orange-400"
          />

          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-orange-400"
          >
            <option value="">All Status</option>
            <option value="Pending">Pending</option>
            <option value="Completed">Completed</option>
            <option value="Cancelled">Cancelled</option>
          </select>

        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid md:grid-cols-5 gap-6 mb-8">

        <div className="bg-white rounded-2xl shadow p-6">
          <p className="text-gray-500">Total Orders</p>
          <h2 className="text-3xl font-bold mt-2">
            {summary.total_orders}
          </h2>
        </div>

        <div className="bg-white rounded-2xl shadow p-6">
          <p className="text-gray-500">Completed Orders</p>
          <h2 className="text-3xl font-bold mt-2 text-green-600">
            {summary.completed_orders}
          </h2>
        </div>

        <div className="bg-white rounded-2xl shadow p-6">
          <p className="text-gray-500">Pending Orders</p>
          <h2 className="text-3xl font-bold mt-2 text-orange-500">
            {summary.pending_orders}
          </h2>
        </div>

        <div className="bg-white rounded-2xl shadow p-6">
  <p className="text-gray-500">Cancelled</p>
  <h2 className="text-3xl font-bold mt-2 text-red-600">
    {summary.cancelled_orders}
  </h2>
</div>

        <div className="bg-white rounded-2xl shadow p-6">
          <p className="text-gray-500">Total Sales</p>
          <h2 className="text-3xl font-bold mt-2 text-blue-600">
            ₹{summary.total_sales}
          </h2>
        </div>

      </div>

      {/* Orders Table */}
      <OrderTable
        refresh={refresh}
        search={search}
        status={status}
      />

      {/* Add Order Modal */}
      <AddOrderModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onOrderAdded={refreshOrders}
      />

    </DashboardLayout>
  );
}

export default Orders;
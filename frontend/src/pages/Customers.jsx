import { useEffect, useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import CustomerTable from "../components/CustomerTable";
import AddCustomerModal from "../components/AddCustomerModal";
import api from "../services/api";

function Customers() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [refresh, setRefresh] = useState(false);

  // Filters
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");

  // Summary
  const [summary, setSummary] = useState({
    total_customers: 0,
    active_customers: 0,
    inactive_customers: 0,
  });

  const fetchSummary = async () => {
    try {
      const response = await api.get("/customers/summary");
      setSummary(response.data.summary);
    } catch (error) {
      console.error("Error fetching customer summary:", error);
    }
  };

  useEffect(() => {
    fetchSummary();
  }, []);

  const refreshCustomers = () => {
    setRefresh((prev) => !prev);
    fetchSummary();
  };

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-4xl font-bold text-gray-900">
            Customers
          </h1>

          <p className="text-gray-500 mt-2">
            Manage your customers efficiently.
          </p>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-semibold transition"
        >
          + Add Customer
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-2xl shadow p-5 mb-8">
        <div className="grid md:grid-cols-2 gap-4">

          <input
            type="text"
            placeholder="Search customer..."
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
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>

        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">

        <div className="bg-white rounded-2xl shadow p-6">
          <p className="text-gray-500">
            Total Customers
          </p>
          <h2 className="text-3xl font-bold mt-2">
            {summary.total_customers}
          </h2>
        </div>

        <div className="bg-white rounded-2xl shadow p-6">
          <p className="text-gray-500">
            Active Customers
          </p>
          <h2 className="text-3xl font-bold mt-2 text-green-600">
            {summary.active_customers}
          </h2>
        </div>

        <div className="bg-white rounded-2xl shadow p-6">
          <p className="text-gray-500">
            Inactive Customers
          </p>
          <h2 className="text-3xl font-bold mt-2 text-red-500">
            {summary.inactive_customers}
          </h2>
        </div>

      </div>

      {/* Table */}
      <CustomerTable
        refresh={refresh}
        search={search}
        status={status}
      />

      {/* Add Modal */}
      <AddCustomerModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onCustomerAdded={refreshCustomers}
      />
    </DashboardLayout>
  );
}

export default Customers;
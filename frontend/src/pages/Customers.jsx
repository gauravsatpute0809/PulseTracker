import DashboardLayout from "../layouts/DashboardLayout";
import CustomerTable from "../components/CustomerTable";

function Customers() {
  return (
    <DashboardLayout>
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-4xl font-bold text-gray-900">
            Customers
          </h1>

          <p className="text-gray-500 mt-2">
            Manage your customer relationships efficiently.
          </p>
        </div>

        <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-semibold transition">
          + Add Customer
        </button>
      </div>

      {/* Search & Filters */}
      <div className="bg-white rounded-2xl shadow p-5 mb-8">
        <div className="grid md:grid-cols-4 gap-4">
          <input
            type="text"
            placeholder="Search customer..."
            className="border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-orange-400"
          />

          <select className="border rounded-xl px-4 py-3">
            <option>All Status</option>
            <option>Active</option>
            <option>Inactive</option>
          </select>

          <button className="border rounded-xl px-4 py-3 hover:bg-gray-100 transition">
            Export
          </button>

          <button className="bg-orange-500 text-white rounded-xl px-4 py-3 hover:bg-orange-600 transition">
            Refresh
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-2xl shadow p-6">
          <p className="text-gray-500">Total Customers</p>
          <h2 className="text-3xl font-bold mt-2">18,540</h2>
        </div>

        <div className="bg-white rounded-2xl shadow p-6">
          <p className="text-gray-500">Active Customers</p>
          <h2 className="text-3xl font-bold mt-2 text-green-600">
            16,200
          </h2>
        </div>

        <div className="bg-white rounded-2xl shadow p-6">
          <p className="text-gray-500">New This Month</p>
          <h2 className="text-3xl font-bold mt-2 text-blue-600">
            542
          </h2>
        </div>

        <div className="bg-white rounded-2xl shadow p-6">
          <p className="text-gray-500">Retention Rate</p>
          <h2 className="text-3xl font-bold mt-2 text-orange-500">
            92%
          </h2>
        </div>
      </div>

      {/* Customer Table */}
      <CustomerTable />
    </DashboardLayout>
  );
}

export default Customers;
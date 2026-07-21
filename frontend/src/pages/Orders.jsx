import DashboardLayout from "../layouts/DashboardLayout";
import OrdersTable from "../components/OrdersTable";

function Orders() {
  return (
    <DashboardLayout>
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-4xl font-bold text-gray-900">
            Orders
          </h1>

          <p className="text-gray-500 mt-2">
            Manage customer orders efficiently.
          </p>
        </div>

        <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-semibold transition">
          + Create Order
        </button>
      </div>

      {/* Search & Filters */}
      <div className="bg-white rounded-2xl shadow p-5 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <input
            type="text"
            placeholder="Search orders..."
            className="border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-orange-400"
          />

          <select className="border rounded-xl px-4 py-3">
            <option>All Status</option>
            <option>Completed</option>
            <option>Processing</option>
            <option>Shipped</option>
            <option>Cancelled</option>
          </select>

          <select className="border rounded-xl px-4 py-3">
            <option>All Payments</option>
            <option>Paid</option>
            <option>Pending</option>
          </select>

          <button className="border rounded-xl px-4 py-3 hover:bg-gray-100 transition">
            Export Orders
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-2xl shadow p-6">
          <p className="text-gray-500">Total Orders</p>
          <h2 className="text-3xl font-bold mt-2">3,254</h2>
        </div>

        <div className="bg-white rounded-2xl shadow p-6">
          <p className="text-gray-500">Completed</p>
          <h2 className="text-3xl font-bold mt-2 text-green-600">
            2,845
          </h2>
        </div>

        <div className="bg-white rounded-2xl shadow p-6">
          <p className="text-gray-500">Processing</p>
          <h2 className="text-3xl font-bold mt-2 text-yellow-600">
            289
          </h2>
        </div>

        <div className="bg-white rounded-2xl shadow p-6">
          <p className="text-gray-500">Cancelled</p>
          <h2 className="text-3xl font-bold mt-2 text-red-500">
            120
          </h2>
        </div>
      </div>

      {/* Orders Table */}
      <OrdersTable />
    </DashboardLayout>
  );
}

export default Orders;
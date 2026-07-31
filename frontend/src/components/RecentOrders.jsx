import { useEffect, useState } from "react";
import api from "../services/api";

function getStatusColor(status) {
  switch (status) {
    case "Completed":
    case "Delivered":
      return "bg-green-100 text-green-700";

    case "Pending":
      return "bg-yellow-100 text-yellow-700";

    case "Cancelled":
      return "bg-red-100 text-red-700";

    default:
      return "bg-blue-100 text-blue-700";
  }
}

function RecentOrders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRecentOrders();
  }, []);

  const fetchRecentOrders = async () => {
    try {
      const res = await api.get("/reports/recent-orders");

      setOrders(res.data.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="bg-white rounded-2xl shadow-md p-6">
        <h2 className="text-xl font-bold mb-4">
          Recent Orders
        </h2>

        <div className="h-52 flex items-center justify-center text-gray-500">
          Loading Orders...
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">

      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">
          Recent Orders
        </h2>

        <button className="text-orange-500 font-semibold hover:underline">
          View All
        </button>
      </div>

      <table className="w-full">

        <thead>
          <tr className="text-left text-gray-500 border-b">
            <th className="pb-3">Order ID</th>
            <th>Customer</th>
            <th>Product</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>

          {orders.map((order) => (
            <tr
              key={order.id}
              className="border-b hover:bg-gray-50"
            >
              <td className="py-4 font-medium">
                #{order.id}
              </td>

              <td>{order.customer_name}</td>

              <td>{order.product_name}</td>

              <td>
                ₹{Number(order.total_price).toLocaleString()}
              </td>

              <td>
                <span
                  className={`px-3 py-1 rounded-full text-sm ${getStatusColor(
                    order.status
                  )}`}
                >
                  {order.status}
                </span>
              </td>
            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}

export default RecentOrders;
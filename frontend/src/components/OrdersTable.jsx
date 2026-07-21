import { FaEye, FaEdit, FaTrash } from "react-icons/fa";

function OrdersTable() {
  const orders = [
    {
      id: "ORD-1001",
      customer: "Rahul Sharma",
      product: "MacBook Pro",
      amount: "$1,299",
      payment: "Paid",
      status: "Completed",
      date: "20 Jul 2026",
    },
    {
      id: "ORD-1002",
      customer: "Priya Patel",
      product: "iPhone 16",
      amount: "$999",
      payment: "Pending",
      status: "Processing",
      date: "21 Jul 2026",
    },
    {
      id: "ORD-1003",
      customer: "Amit Kumar",
      product: "Mechanical Keyboard",
      amount: "$120",
      payment: "Paid",
      status: "Shipped",
      date: "21 Jul 2026",
    },
    {
      id: "ORD-1004",
      customer: "Sneha Verma",
      product: "Gaming Monitor",
      amount: "$430",
      payment: "Paid",
      status: "Completed",
      date: "22 Jul 2026",
    },
    {
      id: "ORD-1005",
      customer: "Rohan Singh",
      product: "Wireless Mouse",
      amount: "$55",
      payment: "Pending",
      status: "Cancelled",
      date: "22 Jul 2026",
    },
  ];

  const statusStyle = (status) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-700";
      case "Processing":
        return "bg-yellow-100 text-yellow-700";
      case "Shipped":
        return "bg-blue-100 text-blue-700";
      case "Cancelled":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr className="text-left text-gray-600">
              <th className="p-4">Order ID</th>
              <th>Customer</th>
              <th>Product</th>
              <th>Amount</th>
              <th>Payment</th>
              <th>Status</th>
              <th>Date</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order) => (
              <tr
                key={order.id}
                className="border-t hover:bg-gray-50 transition"
              >
                <td className="p-4 font-semibold text-orange-600">
                  {order.id}
                </td>

                <td>{order.customer}</td>

                <td>{order.product}</td>

                <td className="font-semibold">
                  {order.amount}
                </td>

                <td>
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      order.payment === "Paid"
                        ? "bg-green-100 text-green-700"
                        : "bg-orange-100 text-orange-700"
                    }`}
                  >
                    {order.payment}
                  </span>
                </td>

                <td>
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${statusStyle(
                      order.status
                    )}`}
                  >
                    {order.status}
                  </span>
                </td>

                <td>{order.date}</td>

                <td>
                  <div className="flex justify-center gap-4">
                    <button className="text-blue-500 hover:scale-110 transition">
                      <FaEye />
                    </button>

                    <button className="text-orange-500 hover:scale-110 transition">
                      <FaEdit />
                    </button>

                    <button className="text-red-500 hover:scale-110 transition">
                      <FaTrash />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default OrdersTable;
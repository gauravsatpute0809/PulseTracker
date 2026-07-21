const orders = [
  {
    id: "#ORD-1001",
    customer: "Rahul Sharma",
    product: "Laptop",
    amount: "$1,250",
    status: "Completed",
  },
  {
    id: "#ORD-1002",
    customer: "Priya Patel",
    product: "Mobile",
    amount: "$820",
    status: "Pending",
  },
  {
    id: "#ORD-1003",
    customer: "Amit Kumar",
    product: "Headphones",
    amount: "$180",
    status: "Completed",
  },
  {
    id: "#ORD-1004",
    customer: "Sneha Verma",
    product: "Monitor",
    amount: "$420",
    status: "Cancelled",
  },
];

function getStatusColor(status) {
  switch (status) {
    case "Completed":
      return "bg-green-100 text-green-700";

    case "Pending":
      return "bg-yellow-100 text-yellow-700";

    case "Cancelled":
      return "bg-red-100 text-red-700";

    default:
      return "";
  }
}

function RecentOrders() {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6">
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
            <th className="pb-3">Order</th>
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
                {order.id}
              </td>

              <td>{order.customer}</td>

              <td>{order.product}</td>

              <td>{order.amount}</td>

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
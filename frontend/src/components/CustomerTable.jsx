import { FaEye, FaEdit, FaTrash } from "react-icons/fa";

function CustomerTable() {
  const customers = [
    {
      id: 1,
      name: "Rahul Sharma",
      email: "rahul@gmail.com",
      phone: "+91 9876543210",
      orders: 18,
      spent: "$2,450",
      status: "Active",
    },
    {
      id: 2,
      name: "Priya Patel",
      email: "priya@gmail.com",
      phone: "+91 9988776655",
      orders: 12,
      spent: "$1,620",
      status: "Active",
    },
    {
      id: 3,
      name: "Amit Kumar",
      email: "amit@gmail.com",
      phone: "+91 9090909090",
      orders: 5,
      spent: "$620",
      status: "Inactive",
    },
    {
      id: 4,
      name: "Sneha Verma",
      email: "sneha@gmail.com",
      phone: "+91 8888888888",
      orders: 26,
      spent: "$4,120",
      status: "Active",
    },
    {
      id: 5,
      name: "Rohan Singh",
      email: "rohan@gmail.com",
      phone: "+91 7777777777",
      orders: 8,
      spent: "$980",
      status: "Inactive",
    },
  ];

  return (
    <div className="bg-white rounded-2xl shadow overflow-hidden">
      <table className="w-full">
        <thead className="bg-gray-50">
          <tr className="text-left">
            <th className="p-4">Customer</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Orders</th>
            <th>Total Spent</th>
            <th>Status</th>
            <th className="text-center">Actions</th>
          </tr>
        </thead>

        <tbody>
          {customers.map((customer) => (
            <tr
              key={customer.id}
              className="border-t hover:bg-gray-50 transition"
            >
              <td className="p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold">
                    {customer.name.charAt(0)}
                  </div>

                  <span className="font-semibold">
                    {customer.name}
                  </span>
                </div>
              </td>

              <td>{customer.email}</td>

              <td>{customer.phone}</td>

              <td>{customer.orders}</td>

              <td>{customer.spent}</td>

              <td>
                <span
                  className={`px-3 py-1 rounded-full text-sm ${
                    customer.status === "Active"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  {customer.status}
                </span>
              </td>

              <td>
                <div className="flex justify-center gap-4 text-lg">
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
  );
}

export default CustomerTable;
import { useEffect, useState } from "react";
import {
  FaEdit,
  FaTrash,
} from "react-icons/fa";

import api from "../services/api";
import EditOrderModal from "./EditOrderModal";

function OrderTable({
  refresh,
  search,
  status,
}) {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  // Pagination
  const [page, setPage] = useState(1);
  const [perPage] = useState(10);
  const [total, setTotal] = useState(0);
  const [pages, setPages] = useState(1);

  // Edit Modal
  const [selectedOrder, setSelectedOrder] =
    useState(null);

  const [isEditOpen, setIsEditOpen] =
    useState(false);

  // Fetch Orders
  const fetchOrders = async () => {
    try {
      setLoading(true);

      const response = await api.get(
        `/orders?page=${page}&per_page=${perPage}`
      );

      setOrders(response.data.orders);
      setTotal(response.data.total);
      setPages(response.data.pages);
    } catch (error) {
      console.error(
        "Error fetching orders:",
        error
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, [refresh, page]);

  useEffect(() => {
    setPage(1);
  }, [search, status]);

  // Edit
  const handleEdit = (order) => {
    setSelectedOrder(order);
    setIsEditOpen(true);
  };

  // Delete
  const handleDelete = async (id) => {
    const confirmDelete =
      window.confirm(
        "Are you sure you want to delete this order?"
      );

    if (!confirmDelete) return;

    try {
      await api.delete(`/orders/${id}`);

      alert(
        "Order deleted successfully!"
      );

      fetchOrders();
    } catch (error) {
      alert(
        error.response?.data?.message ||
          "Unable to delete order."
      );
    }
  };

  // Search + Filter
  const filteredOrders = orders.filter(
    (order) => {
      const matchesSearch =
        (order.customer_name || "")
          .toLowerCase()
          .includes(
            search.toLowerCase()
          ) ||
        (order.product_name || "")
          .toLowerCase()
          .includes(
            search.toLowerCase()
          );

      const matchesStatus =
        status === "" ||
        order.status === status;

      return (
        matchesSearch &&
        matchesStatus
      );
    }
  );

  const statusStyle = (status) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-700";

      case "Pending":
        return "bg-orange-100 text-orange-700";

      case "Cancelled":
        return "bg-red-100 text-red-700";

      default:
        return "bg-blue-100 text-blue-700";
    }
  };

  if (loading) {
    return (
      <div className="bg-white rounded-2xl shadow p-8 text-center">
        Loading orders...
      </div>
    );
  }

  return (
    <>
      <div className="bg-white rounded-2xl shadow p-6 overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b">
              <th className="py-3">
                Customer
              </th>

              <th>Product</th>

              <th>Qty</th>

              <th>Total</th>

              <th>Status</th>

              <th>Date</th>

              <th className="text-center">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {filteredOrders.length ===
            0 ? (
              <tr>
                <td
                  colSpan="7"
                  className="text-center py-8 text-gray-500"
                >
                  No orders found.
                </td>
              </tr>
            ) : (
              filteredOrders.map(
                (item) => (
                  <tr
                    key={item.id}
                    className="border-b hover:bg-gray-50"
                  >
                    <td className="py-4 font-semibold">
                      {
                        item.customer_name
                      }
                    </td>

                    <td>
                      {
                        item.product_name
                      }
                    </td>

                    <td>
                      {item.quantity}
                    </td>

                    <td>
                      ₹
                      {
                        item.total_price
                      }
                    </td>

                    <td>
                      <span
                        className={`px-3 py-1 rounded-full text-sm ${statusStyle(
                          item.status
                        )}`}
                      >
                        {
                          item.status
                        }
                      </span>
                    </td>

                    <td>
                      {
                        item.order_date
                      }
                    </td>

                    <td className="text-center">
                      <div className="flex justify-center gap-2">
                        <button
                          onClick={() =>
                            handleEdit(
                              item
                            )
                          }
                          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition"
                        >
                          <FaEdit />
                        </button>

                        <button
                          onClick={() =>
                            handleDelete(
                              item.id
                            )
                          }
                          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
                        >
                          <FaTrash />
                                                </button>
                      </div>
                    </td>
                  </tr>
                ))
            )}
          </tbody>
        </table>

        {/* Pagination */}

        <div className="flex items-center justify-between mt-6">
          <p className="text-sm text-gray-600">
            Showing{" "}
            {total === 0
              ? 0
              : (page - 1) * perPage + 1}
            {" - "}
            {Math.min(page * perPage, total)}
            {" of "}
            {total} orders
          </p>

          <div className="flex items-center gap-2">

            <button
              disabled={page === 1}
              onClick={() =>
                setPage((prev) => prev - 1)
              }
              className={`px-4 py-2 rounded-lg ${
                page === 1
                  ? "bg-gray-200 cursor-not-allowed"
                  : "bg-orange-500 hover:bg-orange-600 text-white"
              }`}
            >
              Previous
            </button>

            <div className="px-4 py-2 border rounded-lg font-semibold">
              {page} / {pages}
            </div>

            <button
              disabled={page === pages || pages === 0}
              onClick={() =>
                setPage((prev) => prev + 1)
              }
              className={`px-4 py-2 rounded-lg ${
                page === pages || pages === 0
                  ? "bg-gray-200 cursor-not-allowed"
                  : "bg-orange-500 hover:bg-orange-600 text-white"
              }`}
            >
              Next
            </button>

          </div>
        </div>

      </div>

      {/* Edit Modal */}

      <EditOrderModal
        isOpen={isEditOpen}
        onClose={() => {
          setIsEditOpen(false);
          setSelectedOrder(null);
        }}
        order={selectedOrder}
        onOrderUpdated={fetchOrders}
      />

    </>
  );
}

export default OrderTable;
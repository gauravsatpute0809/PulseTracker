import { useEffect, useState } from "react";
import api from "../services/api";
import EditCustomerModal from "./EditCustomerModal";

function CustomerTable({
  refresh,
  search,
  status,
  sort,
}) {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Pagination
  const [page, setPage] = useState(1);
  const [perPage] = useState(10);
  const [total, setTotal] = useState(0);
  const [pages, setPages] = useState(1);

  // Edit Modal
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [isEditOpen, setIsEditOpen] = useState(false);

  // Fetch Customers
  const fetchCustomers = async () => {
    try {
      setLoading(true);

      const response = await api.get(
        `/customers?page=${page}&per_page=${perPage}&sort=${sort}`
      );

      setCustomers(response.data.customers);
      setTotal(response.data.total);
      setPages(response.data.pages);
    } catch (error) {
      console.error("Error fetching customers:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCustomers();
  }, [refresh, page, sort]);

  // Reset page when filters change
  useEffect(() => {
    setPage(1);
  }, [search, status, sort]);

  // Edit Customer
  const handleEdit = (customer) => {
    setSelectedCustomer(customer);
    setIsEditOpen(true);
  };

  // Delete Customer
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this customer?"
    );

    if (!confirmDelete) return;

    try {
      await api.delete(`/customers/${id}`);

      alert("Customer deleted successfully!");

      fetchCustomers();
    } catch (error) {
      alert(
        error.response?.data?.message ||
          "Unable to delete customer."
      );
    }
  };

  // Frontend Search + Status Filter
  const filteredCustomers = customers.filter((customer) => {
    const matchesSearch =
      (customer.full_name || "")
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      (customer.email || "")
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesStatus =
      status === "" ||
      customer.status === status;

    return matchesSearch && matchesStatus;
  });

  if (loading) {
    return (
      <div className="bg-white rounded-2xl shadow p-8 text-center">
        Loading customers...
      </div>
    );
  }

  return (
    <>
      <div className="bg-white rounded-2xl shadow p-6 overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b">
              <th className="py-3">Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>City</th>
              <th>Status</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredCustomers.length === 0 ? (
              <tr>
                <td
                  colSpan="6"
                  className="text-center py-8 text-gray-500"
                >
                  No customers found.
                </td>
              </tr>
            ) : (
              filteredCustomers.map((item) => (
                <tr
                  key={item.id}
                  className="border-b hover:bg-gray-50"
                >
                  <td className="py-4 font-semibold">
                    {item.full_name}
                  </td>

                  <td>{item.email}</td>

                  <td>{item.phone}</td>

                  <td>{item.city}</td>

                  <td>
                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        item.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-600"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>

                  <td className="text-center">
                    <div className="flex justify-center gap-2">
                      <button
                        onClick={() => handleEdit(item)}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition"
                      >
                        Edit
                      </button>

                      <button
                        onClick={() => handleDelete(item.id)}
                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
                      >
                        Delete
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
            {total === 0 ? 0 : (page - 1) * perPage + 1}
            {" - "}
            {Math.min(page * perPage, total)}
            {" of "}
            {total} customers
          </p>

          <div className="flex items-center gap-2">
            <button
              disabled={page === 1}
              onClick={() => setPage((prev) => prev - 1)}
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
              onClick={() => setPage((prev) => prev + 1)}
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

      <EditCustomerModal
        isOpen={isEditOpen}
        onClose={() => {
          setIsEditOpen(false);
          setSelectedCustomer(null);
        }}
        customer={selectedCustomer}
        onCustomerUpdated={fetchCustomers}
      />
    </>
  );
}

export default CustomerTable;
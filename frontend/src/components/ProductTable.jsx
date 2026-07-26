import { useEffect, useState } from "react";
import api from "../services/api";
import EditProductModal from "./EditProductModal";

function ProductTable({
  refresh,
  search,
  category,
  status,
  sort,
}) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Selected Products
  const [selectedProducts, setSelectedProducts] = useState([]);

  // Pagination
  const [page, setPage] = useState(1);
  const [perPage] = useState(10);
  const [total, setTotal] = useState(0);
  const [pages, setPages] = useState(1);

  // Edit Modal
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isEditOpen, setIsEditOpen] = useState(false);

  // Fetch Products
  const fetchProducts = async () => {
    try {
      setLoading(true);

      const response = await api.get(
        `/products?page=${page}&per_page=${perPage}&sort=${sort}`
      );

      setProducts(response.data.products);
      setTotal(response.data.total);
      setPages(response.data.pages);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [refresh, page, sort]);

  useEffect(() => {
    setPage(1);
  }, [search, category, status, sort]);

  // Edit
  const handleEdit = (product) => {
    setSelectedProduct(product);
    setIsEditOpen(true);
  };

  // Delete Single Product
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?"
    );

    if (!confirmDelete) return;

    try {
      await api.delete(`/products/${id}`);

      alert("Product deleted successfully!");

      fetchProducts();
    } catch (error) {
      alert(
        error.response?.data?.message ||
          "Unable to delete product."
      );
    }
  };

  // Filters
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "" ||
      product.category === category;

    const matchesStatus =
      status === "" ||
      product.status === status;

    return (
      matchesSearch &&
      matchesCategory &&
      matchesStatus
    );
  });

  // Select One
  const handleSelect = (id) => {
    if (selectedProducts.includes(id)) {
      setSelectedProducts(
        selectedProducts.filter(
          (item) => item !== id
        )
      );
    } else {
      setSelectedProducts([
        ...selectedProducts,
        id,
      ]);
    }
  };

  // Select All
  const handleSelectAll = () => {
    if (
      selectedProducts.length ===
      filteredProducts.length
    ) {
      setSelectedProducts([]);
    } else {
      setSelectedProducts(
        filteredProducts.map(
          (item) => item.id
        )
      );
    }
  };

  // Bulk Delete
  const handleBulkDelete = async () => {
    if (selectedProducts.length === 0) {
      alert("Please select products.");
      return;
    }

    const confirmDelete = window.confirm(
      `Delete ${selectedProducts.length} selected products?`
    );

    if (!confirmDelete) return;

    try {
      await api.delete(
        "/products/bulk-delete",
        {
          data: {
            ids: selectedProducts,
          },
        }
      );

      alert(
        "Products deleted successfully!"
      );

      setSelectedProducts([]);

      fetchProducts();
    } catch (error) {
      alert(
        error.response?.data?.message ||
          "Bulk delete failed."
      );
    }
  };

  if (loading) {
    return (
      <div className="bg-white rounded-2xl shadow p-8 text-center">
        Loading products...
      </div>
    );
  }

  return (
    <>
      <div className="bg-white rounded-2xl shadow p-6 overflow-x-auto">

        <div className="flex justify-end mb-4">
          <button
            onClick={handleBulkDelete}
            className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg"
          >
            Delete Selected
          </button>
        </div>

        <table className="w-full text-left">
          <thead>
            <tr className="border-b">
              <th className="py-3">
                <input
                  type="checkbox"
                  checked={
                    filteredProducts.length > 0 &&
                    selectedProducts.length ===
                      filteredProducts.length
                  }
                  onChange={handleSelectAll}
                />
              </th>

              <th>Product</th>
              <th>Category</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Status</th>
              <th className="text-center">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {filteredProducts.length ===
            0 ? (
              <tr>
                <td
                  colSpan="7"
                  className="text-center py-8 text-gray-500"
                >
                  No products found.
                </td>
              </tr>
            ) : (
              filteredProducts.map((item) => (
                <tr
                  key={item.id}
                  className="border-b hover:bg-gray-50"
                >
                  <td className="py-4">
                    <input
                      type="checkbox"
                      checked={selectedProducts.includes(
                        item.id
                      )}
                      onChange={() =>
                        handleSelect(item.id)
                      }
                    />
                  </td>

                  <td className="py-4 font-semibold">
                    {item.name}
                  </td>

                  <td>{item.category}</td>

                  <td>₹{item.price}</td>

                  <td>{item.stock}</td>

                  <td>
                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        item.status ===
                        "Active"
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
                        onClick={() =>
                          handleEdit(item)
                        }
                        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition"
                      >
                        Edit
                      </button>

                      <button
                        onClick={() =>
                          handleDelete(item.id)
                        }
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
            {total === 0
              ? 0
              : (page - 1) * perPage + 1}
            {" - "}
            {Math.min(
              page * perPage,
              total
            )}
            {" of "}
            {total} products
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
              disabled={
                page === pages ||
                pages === 0
              }
              onClick={() =>
                setPage((prev) => prev + 1)
              }
              className={`px-4 py-2 rounded-lg ${
                page === pages ||
                pages === 0
                  ? "bg-gray-200 cursor-not-allowed"
                  : "bg-orange-500 hover:bg-orange-600 text-white"
              }`}
            >
              Next
            </button>

          </div>
        </div>
      </div>

      <EditProductModal
        isOpen={isEditOpen}
        onClose={() => {
          setIsEditOpen(false);
          setSelectedProduct(null);
        }}
        product={selectedProduct}
        onProductUpdated={fetchProducts}
      />
    </>
  );
}

export default ProductTable;
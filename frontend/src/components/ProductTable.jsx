import { useEffect, useState } from "react";
import api from "../services/api";

function ProductTable({ refresh }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    try {
      setLoading(true);

      const response = await api.get("/products");

      setProducts(response.data.products);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [refresh]);

  if (loading) {
    return (
      <div className="bg-white rounded-2xl shadow p-8 text-center">
        Loading products...
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow p-6 overflow-x-auto">
      <table className="w-full text-left">
        <thead>
          <tr className="border-b">
            <th className="py-3">Product</th>
            <th>Category</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {products.length === 0 ? (
            <tr>
              <td
                colSpan="5"
                className="text-center py-8 text-gray-500"
              >
                No products found.
              </td>
            </tr>
          ) : (
            products.map((item) => (
              <tr
                key={item.id}
                className="border-b hover:bg-gray-50"
              >
                <td className="py-4 font-semibold">
                  {item.name}
                </td>

                <td>{item.category}</td>

                <td>₹{item.price}</td>

                <td>{item.stock}</td>

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
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ProductTable;
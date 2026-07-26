import { CSVLink } from "react-csv";
import { useEffect, useState } from "react";
import api from "../services/api";

function ExportCSVButton() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await api.get("/products?page=1&per_page=10000");
      setProducts(response.data.products);
    } catch (error) {
      console.error("Export Error:", error);
    }
  };

  const headers = [
    { label: "ID", key: "id" },
    { label: "Product Name", key: "name" },
    { label: "Category", key: "category" },
    { label: "Price", key: "price" },
    { label: "Stock", key: "stock" },
    { label: "Status", key: "status" },
    { label: "Description", key: "description" },
  ];

  return (
    <CSVLink
      data={products}
      headers={headers}
      filename={"products.csv"}
      className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-semibold transition"
    >
      Export CSV
    </CSVLink>
  );
}

export default ExportCSVButton;
import { useEffect, useState } from "react";
import api from "../services/api";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

function TopProductsChart() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await api.get(
        "/reports/top-products"
      );

      setData(response.data.data);
    } catch (error) {
      console.error(
        "Error fetching top products:",
        error
      );
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="bg-white rounded-2xl shadow p-6">
      <h2 className="text-xl font-bold mb-6">
        Top Selling Products
      </h2>

      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="product" />

          <YAxis />

          <Tooltip />

          <Bar
            dataKey="quantity"
            fill="#f97316"
            radius={[8, 8, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default TopProductsChart;
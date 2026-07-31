import { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

import { Line } from "react-chartjs-2";
import api from "../services/api";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

function MonthlySalesChart() {
  const [labels, setLabels] = useState([]);
  const [sales, setSales] = useState([]);

  useEffect(() => {
    fetchMonthlySales();
  }, []);

  const fetchMonthlySales = async () => {
    try {
      const response = await api.get("/reports/monthly-sales");

      const months = response.data.data.map(
        (item) => item.month
      );

      const values = response.data.data.map(
        (item) => item.revenue
      );

      setLabels(months);
      setSales(values);
    } catch (error) {
      console.error("Error fetching monthly sales:", error);
    }
  };

  const data = {
    labels,
    datasets: [
      {
        label: "Monthly Sales",
        data: sales,
        borderColor: "#f97316",
        backgroundColor: "rgba(249,115,22,0.15)",
        fill: true,
        tension: 0.4,
        pointRadius: 5,
        pointBackgroundColor: "#f97316",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
      },
    },
  };

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 h-[420px]">
      <h2 className="text-2xl font-bold mb-6">
        Monthly Sales
      </h2>

      <Line data={data} options={options} />
    </div>
  );
}

export default MonthlySalesChart;
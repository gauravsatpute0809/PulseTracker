import { useEffect, useState } from "react";
import { FaFileExcel } from "react-icons/fa";

import DashboardLayout from "../layouts/DashboardLayout";
import ReportsCards from "../components/ReportsCards";
import MonthlySalesChart from "../components/MonthlySalesChart";
import TopProductsChart from "../components/TopProductsChart";
import api from "../services/api";

function Reports() {
  const [summary, setSummary] = useState({
    total_orders: 0,
    total_customers: 0,
    total_products: 0,
    total_sales: 0,
  });

  // ==========================
  // Fetch Summary
  // ==========================
  const fetchSummary = async () => {
    try {
      const response = await api.get("/reports/summary");
      setSummary(response.data.summary);
    } catch (error) {
      console.error("Error fetching reports summary:", error);
    }
  };

  // ==========================
  // Export Excel
  // ==========================
  const exportExcel = () => {
    window.open(
      "http://127.0.0.1:5000/api/reports/export/excel",
      "_blank"
    );
  };

  useEffect(() => {
    fetchSummary();
  }, []);

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold text-gray-900">
            Reports
          </h1>

          <p className="text-gray-500 mt-2">
            Business reports and analytics overview.
          </p>
        </div>

        <button
          onClick={exportExcel}
          className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold transition"
        >
          <FaFileExcel />
          Export Excel
        </button>
      </div>

      {/* Summary Cards */}
      <ReportsCards summary={summary} />

      {/* Charts */}
      <div className="grid lg:grid-cols-2 gap-6 mt-8">
        <MonthlySalesChart />
        <TopProductsChart />
      </div>

      
    </DashboardLayout>
  );
}

export default Reports;
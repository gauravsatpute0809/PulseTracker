import { useEffect, useState } from "react";
import { FaFileExcel, FaFilePdf } from "react-icons/fa";

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

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  // ==========================
  // Fetch Dashboard Summary
  // ==========================
  const fetchSummary = async () => {
    try {
      const response = await api.get("/reports/dashboard-summary");

      setSummary({
        total_sales: response.data.data.revenue,
        total_orders: response.data.data.orders,
        total_products: response.data.data.products,
        total_customers: response.data.data.customers,
      });
    } catch (error) {
      console.error(error);
    }
  };

  // ==========================
  // Apply Date Filter
  // ==========================
  const applyFilter = async () => {
    if (!startDate || !endDate) {
      alert("Please select both Start Date and End Date.");
      return;
    }

    try {
      const response = await api.get(
        `/reports/filter-summary?start=${startDate}&end=${endDate}`
      );

      setSummary((prev) => ({
        ...prev,
        total_orders: response.data.data.orders,
        total_sales: response.data.data.sales,
      }));
    } catch (error) {
      console.error("Filter Error:", error);
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

  // ==========================
  // Export PDF
  // ==========================
  const exportPDF = () => {
    window.open(
      "http://127.0.0.1:5000/api/reports/export/pdf",
      "_blank"
    );
  };

  useEffect(() => {
    fetchSummary();
  }, []);

  return (
    <DashboardLayout>

      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-6 mb-8">

        <div>
          <h1 className="text-4xl font-bold text-gray-900">
            Reports
          </h1>

          <p className="text-gray-500 mt-2">
            Business reports and analytics overview.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">

          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="border rounded-xl px-4 py-3"
          />

          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="border rounded-xl px-4 py-3"
          />

          <button
            onClick={applyFilter}
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-semibold transition"
          >
            Apply Filter
          </button>

          <button
            onClick={exportExcel}
            className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold transition"
          >
            <FaFileExcel />
            Export Excel
          </button>

          <button
            onClick={exportPDF}
            className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl font-semibold transition"
          >
            <FaFilePdf />
            Export PDF
          </button>

        </div>

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
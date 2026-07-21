import DashboardLayout from "../layouts/DashboardLayout";
import ReportsHeader from "../components/ReportsHeader";
import ReportSummaryCards from "../components/ReportSummaryCards";
import RevenueBarChart from "../components/RevenueBarChart";
import CategorySalesChart from "../components/CategorySalesChart";
import RecentReports from "../components/RecentReports";

function Reports() {
  return (
    <DashboardLayout>
      <ReportsHeader />

      <ReportSummaryCards />

      <div className="mt-8">
        <RevenueBarChart />
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-8">
        <div>
          <CategorySalesChart />
        </div>

        <div className="xl:col-span-2">
          <RecentReports />
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Reports;
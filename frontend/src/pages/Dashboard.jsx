import DashboardLayout from "../layouts/DashboardLayout";

import DashboardCards from "../components/DashboardCards";
import RevenueChart from "../components/RevenueChart";
import SalesPieChart from "../components/SalesPieChart";
import RecentOrders from "../components/RecentOrders";
import CustomerStatisticsCard from "../components/CustomerStatisticsCard";
import AIInsights from "../components/AIInsights";

function Dashboard() {
  return (
    <DashboardLayout>

      {/* Header */}
      <h1 className="text-4xl font-bold text-gray-900">
        Dashboard
      </h1>

      <p className="text-gray-500 mt-2">
        Welcome back, Admin 👋
      </p>

      {/* KPI Cards */}
      <DashboardCards />

      {/* Charts */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-8">

        <div className="xl:col-span-2">
          <RevenueChart />
        </div>

        <div>
          <SalesPieChart />
        </div>

      </div>

      {/* Recent Orders + Customer Statistics */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-8">

        <div className="xl:col-span-2">
          <RecentOrders />
        </div>

        <div>
          <CustomerStatisticsCard />
        </div>

      </div>

      {/* AI Insights */}
      <div className="mt-8">
        <AIInsights />
      </div>

    </DashboardLayout>
  );
}

export default Dashboard;
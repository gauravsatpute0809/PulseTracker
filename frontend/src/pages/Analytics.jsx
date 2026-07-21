import DashboardLayout from "../layouts/DashboardLayout";
import AnalyticsHeader from "../components/AnalyticsHeader";
import RevenueTrend from "../components/RevenueTrend";
import SalesGrowth from "../components/SalesGrowth";
import CustomerGrowth from "../components/CustomerGrowth";
import ConversionRate from "../components/ConversionRate";
import TrafficSources from "../components/TrafficSources";
import PerformanceTable from "../components/PerformanceTable";

function Analytics() {
  return (
    <DashboardLayout>
      <AnalyticsHeader />

      {/* Revenue Trend */}
      <div className="mt-8">
        <RevenueTrend />
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-8">
        <SalesGrowth />
        <CustomerGrowth />
        <ConversionRate />
      </div>

      {/* Traffic & Performance */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-8">
        <div>
          <TrafficSources />
        </div>

        <div className="xl:col-span-2">
          <PerformanceTable />
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Analytics;
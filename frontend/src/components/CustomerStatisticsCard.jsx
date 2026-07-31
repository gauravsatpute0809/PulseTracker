import useCustomerStatistics from "../hooks/useCustomerStatistics";
import { FaUsers } from "react-icons/fa";

function CustomerStatisticsCard() {
  const { stats, loading } = useCustomerStatistics();

  if (loading) {
    return (
      <div className="bg-white rounded-2xl shadow-md p-6">
        <h2 className="text-xl font-bold">
          Customer Statistics
        </h2>

        <div className="h-52 flex items-center justify-center text-gray-500">
          Loading...
        </div>
      </div>
    );
  }

  const activePercent =
    stats.total > 0
      ? ((stats.active / stats.total) * 100).toFixed(1)
      : 0;

  const inactivePercent =
    stats.total > 0
      ? ((stats.inactive / stats.total) * 100).toFixed(1)
      : 0;

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">

      <div className="flex items-center justify-between">

        <div>
          <h2 className="text-2xl font-bold">
            Customers
          </h2>

          <p className="text-gray-500 mt-1">
            Customer Overview
          </p>
        </div>

        <div className="w-14 h-14 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center text-2xl">
          <FaUsers />
        </div>

      </div>

      <div className="mt-8">

        <div className="flex justify-between mb-2">
          <span>Total Customers</span>
          <span className="font-bold">
            {stats.total}
          </span>
        </div>

        <div className="flex justify-between mt-5 mb-2">
          <span className="text-green-600">
            Active
          </span>

          <span className="font-semibold">
            {stats.active} ({activePercent}%)
          </span>
        </div>

        <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="bg-green-500 h-3 rounded-full"
            style={{
              width: `${activePercent}%`,
            }}
          />
        </div>

        <div className="flex justify-between mt-5 mb-2">
          <span className="text-red-600">
            Inactive
          </span>

          <span className="font-semibold">
            {stats.inactive} ({inactivePercent}%)
          </span>
        </div>

        <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="bg-red-500 h-3 rounded-full"
            style={{
              width: `${inactivePercent}%`,
            }}
          />
        </div>

      </div>

    </div>
  );
}

export default CustomerStatisticsCard;
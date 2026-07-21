import { FaArrowTrendUp } from "react-icons/fa6";

function SalesGrowth() {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-gray-500">Sales Growth</p>

          <h2 className="text-3xl font-bold mt-2">
            +15.4%
          </h2>

          <p className="text-green-600 mt-2">
            ↑ Compared to last month
          </p>
        </div>

        <div className="w-16 h-16 rounded-2xl bg-orange-100 flex items-center justify-center">
          <FaArrowTrendUp
            className="text-orange-500"
            size={28}
          />
        </div>
      </div>
    </div>
  );
}

export default SalesGrowth;
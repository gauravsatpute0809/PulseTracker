import { FaBullseye } from "react-icons/fa";

function ConversionRate() {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-gray-500">
            Conversion Rate
          </p>

          <h2 className="text-3xl font-bold mt-2">
            4.8%
          </h2>

          <p className="text-purple-600 mt-2">
            Visitors → Customers
          </p>
        </div>

        <div className="w-16 h-16 rounded-2xl bg-purple-100 flex items-center justify-center">
          <FaBullseye
            className="text-purple-600"
            size={28}
          />
        </div>
      </div>
    </div>
  );
}

export default ConversionRate;
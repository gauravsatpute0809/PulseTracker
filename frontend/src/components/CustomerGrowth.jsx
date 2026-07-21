import { FaUsers } from "react-icons/fa";

function CustomerGrowth() {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-gray-500">
            Customer Growth
          </p>

          <h2 className="text-3xl font-bold mt-2">
            +8.2%
          </h2>

          <p className="text-blue-600 mt-2">
            1,240 New Customers
          </p>
        </div>

        <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center">
          <FaUsers
            className="text-blue-600"
            size={28}
          />
        </div>
      </div>
    </div>
  );
}

export default CustomerGrowth;
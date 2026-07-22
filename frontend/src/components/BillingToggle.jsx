import { useState } from "react";
import { FaBolt } from "react-icons/fa";

function BillingToggle() {
  const [billing, setBilling] = useState("monthly");

  return (
    <div className="flex justify-center mt-12">
      <div className="bg-white rounded-full shadow-lg p-2 flex items-center gap-2 border">

        <button
          onClick={() => setBilling("monthly")}
          className={`px-8 py-3 rounded-full font-semibold transition ${
            billing === "monthly"
              ? "bg-orange-500 text-white"
              : "text-gray-600 hover:text-orange-500"
          }`}
        >
          Monthly
        </button>

        <button
          onClick={() => setBilling("yearly")}
          className={`px-8 py-3 rounded-full font-semibold transition ${
            billing === "yearly"
              ? "bg-orange-500 text-white"
              : "text-gray-600 hover:text-orange-500"
          }`}
        >
          Yearly
        </button>

        <div className="ml-3 flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
          <FaBolt />
          Save 20%
        </div>

      </div>
    </div>
  );
}

export default BillingToggle;
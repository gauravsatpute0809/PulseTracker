const performance = [
  {
    month: "January",
    revenue: "$12,000",
    orders: 120,
    growth: "+12%",
  },
  {
    month: "February",
    revenue: "$18,000",
    orders: 145,
    growth: "+18%",
  },
  {
    month: "March",
    revenue: "$15,000",
    orders: 132,
    growth: "-4%",
  },
  {
    month: "April",
    revenue: "$26,000",
    orders: 201,
    growth: "+25%",
  },
  {
    month: "May",
    revenue: "$32,000",
    orders: 248,
    growth: "+21%",
  },
  {
    month: "June",
    revenue: "$41,000",
    orders: 310,
    growth: "+28%",
  },
];

function PerformanceTable() {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 h-full">
      <h2 className="text-2xl font-bold mb-6">
        Monthly Performance
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="border-b">
            <tr className="text-left text-gray-500">
              <th className="py-3">Month</th>
              <th>Revenue</th>
              <th>Orders</th>
              <th>Growth</th>
            </tr>
          </thead>

          <tbody>
            {performance.map((item, index) => (
              <tr
                key={index}
                className="border-b hover:bg-gray-50 transition"
              >
                <td className="py-4 font-medium">
                  {item.month}
                </td>

                <td>{item.revenue}</td>

                <td>{item.orders}</td>

                <td
                  className={
                    item.growth.startsWith("+")
                      ? "text-green-600 font-semibold"
                      : "text-red-500 font-semibold"
                  }
                >
                  {item.growth}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PerformanceTable;
const reports = [
  {
    name: "Monthly Sales Report",
    type: "PDF",
    date: "20 Jul 2026",
  },
  {
    name: "Revenue Analysis",
    type: "CSV",
    date: "18 Jul 2026",
  },
  {
    name: "Customer Insights",
    type: "PDF",
    date: "15 Jul 2026",
  },
  {
    name: "Product Performance",
    type: "CSV",
    date: "12 Jul 2026",
  },
];

function RecentReports() {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6">
      <h2 className="text-2xl font-bold mb-6">
        Recent Reports
      </h2>

      <div className="space-y-4">
        {reports.map((report, index) => (
          <div
            key={index}
            className="flex justify-between items-center border-b pb-3 last:border-0"
          >
            <div>
              <h3 className="font-semibold">
                {report.name}
              </h3>

              <p className="text-sm text-gray-500">
                {report.date}
              </p>
            </div>

            <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm">
              {report.type}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentReports;
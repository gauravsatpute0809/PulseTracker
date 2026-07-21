function ReportsHeader() {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
      <div>
        <h1 className="text-4xl font-bold text-gray-900">
          Reports
        </h1>

        <p className="text-gray-500 mt-2">
          Analyze business performance and export detailed reports.
        </p>
      </div>

      <div className="flex flex-wrap gap-3">
        <select className="border rounded-xl px-4 py-3">
          <option>This Month</option>
          <option>Last Month</option>
          <option>Last 3 Months</option>
          <option>This Year</option>
        </select>

        <button className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-3 rounded-xl font-semibold transition">
          Export PDF
        </button>

        <button className="border hover:bg-gray-100 px-5 py-3 rounded-xl transition">
          Export CSV
        </button>
      </div>
    </div>
  );
}

export default ReportsHeader;
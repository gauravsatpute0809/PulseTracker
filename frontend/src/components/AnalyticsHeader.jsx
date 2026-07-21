function AnalyticsHeader() {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
      <div>
        <h1 className="text-4xl font-bold text-gray-900">
          Analytics
        </h1>

        <p className="text-gray-500 mt-2">
          Monitor your business performance with detailed insights.
        </p>
      </div>

      <div className="flex gap-4 mt-5 md:mt-0">
        <select className="px-4 py-2 rounded-xl border bg-white shadow-sm">
          <option>Last 7 Days</option>
          <option>Last 30 Days</option>
          <option>Last 90 Days</option>
          <option>This Year</option>
        </select>

        <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-xl font-semibold">
          Export
        </button>
      </div>
    </div>
  );
}

export default AnalyticsHeader;
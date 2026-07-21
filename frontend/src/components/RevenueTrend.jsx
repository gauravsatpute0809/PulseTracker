import {
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const data = [
  { month: "Jan", revenue: 12000 },
  { month: "Feb", revenue: 18000 },
  { month: "Mar", revenue: 15000 },
  { month: "Apr", revenue: 26000 },
  { month: "May", revenue: 32000 },
  { month: "Jun", revenue: 41000 },
];

function RevenueTrend() {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold">Revenue Trend</h2>
          <p className="text-gray-500 text-sm">
            Monthly revenue performance
          </p>
        </div>

        <span className="text-green-600 font-semibold">
          +18.2%
        </span>
      </div>

      <ResponsiveContainer width="100%" height={350}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="orangeFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#f97316" stopOpacity={0.4} />
              <stop offset="95%" stopColor="#f97316" stopOpacity={0.05} />
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="month" />

          <YAxis />

          <Tooltip />

          <Area
            type="monotone"
            dataKey="revenue"
            stroke="#f97316"
            strokeWidth={3}
            fill="url(#orangeFill)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default RevenueTrend;
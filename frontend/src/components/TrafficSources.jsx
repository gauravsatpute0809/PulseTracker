import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  { name: "Organic", value: 45 },
  { name: "Paid Ads", value: 25 },
  { name: "Social", value: 20 },
  { name: "Direct", value: 10 },
];

const COLORS = [
  "#f97316",
  "#3b82f6",
  "#10b981",
  "#a855f7",
];

function TrafficSources() {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 h-full">
      <h2 className="text-2xl font-bold mb-6">
        Traffic Sources
      </h2>

      <ResponsiveContainer width="100%" height={320}>
        <PieChart>
          <Pie
            data={data}
            innerRadius={70}
            outerRadius={110}
            dataKey="value"
            paddingAngle={3}
          >
            {data.map((entry, index) => (
              <Cell
                key={index}
                fill={COLORS[index]}
              />
            ))}
          </Pie>

          <Tooltip />
          <Legend verticalAlign="bottom" />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default TrafficSources;
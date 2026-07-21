import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Electronics", value: 35 },
  { name: "Fashion", value: 25 },
  { name: "Furniture", value: 20 },
  { name: "Others", value: 20 },
];

const COLORS = [
  "#F97316",
  "#3B82F6",
  "#10B981",
  "#A855F7",
];

function SalesPieChart() {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 h-full">
      <h2 className="text-xl font-bold mb-6">
        Sales Distribution
      </h2>

      <ResponsiveContainer width="100%" height={320}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            outerRadius={110}
            label
          >
            {data.map((entry, index) => (
              <Cell
                key={index}
                fill={COLORS[index]}
              />
            ))}
          </Pie>

          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default SalesPieChart;
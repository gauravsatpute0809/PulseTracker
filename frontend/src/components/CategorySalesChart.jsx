import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  { name: "Electronics", value: 45 },
  { name: "Fashion", value: 25 },
  { name: "Accessories", value: 20 },
  { name: "Others", value: 10 },
];

const COLORS = [
  "#f97316",
  "#3b82f6",
  "#10b981",
  "#a855f7",
];

function CategorySalesChart() {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 h-full">
      <h2 className="text-2xl font-bold mb-6">
        Sales by Category
      </h2>

      <ResponsiveContainer width="100%" height={320}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            innerRadius={65}
            outerRadius={100}
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

export default CategorySalesChart;
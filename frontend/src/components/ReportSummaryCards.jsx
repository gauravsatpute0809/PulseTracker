import {
  FaDollarSign,
  FaChartLine,
  FaArrowTrendUp,
  FaChartPie,
} from "react-icons/fa6";

const reports = [
  {
    title: "Revenue",
    value: "$248K",
    icon: <FaDollarSign />,
    color: "bg-green-100 text-green-600",
  },
  {
    title: "Sales",
    value: "1,245",
    icon: <FaChartLine />,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Growth",
    value: "+18.4%",
    icon: <FaArrowTrendUp />,
    color: "bg-orange-100 text-orange-600",
  },
  {
    title: "Profit",
    value: "$84K",
    icon: <FaChartPie />,
    color: "bg-purple-100 text-purple-600",
  },
];

function ReportSummaryCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      {reports.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
        >
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-500">{item.title}</p>

              <h2 className="text-3xl font-bold mt-2">
                {item.value}
              </h2>
            </div>

            <div
              className={`w-14 h-14 rounded-xl flex items-center justify-center ${item.color}`}
            >
              <span className="text-2xl">
                {item.icon}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ReportSummaryCards;
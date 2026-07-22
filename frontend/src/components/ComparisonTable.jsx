import { FaCheck, FaTimes } from "react-icons/fa";

const features = [
  {
    feature: "Dashboard Access",
    starter: true,
    pro: true,
    enterprise: true,
  },
  {
    feature: "AI Insights",
    starter: false,
    pro: true,
    enterprise: true,
  },
  {
    feature: "Reports",
    starter: "5 / Month",
    pro: "Unlimited",
    enterprise: "Unlimited",
  },
  {
    feature: "Team Members",
    starter: "1",
    pro: "10",
    enterprise: "Unlimited",
  },
  {
    feature: "CSV Export",
    starter: true,
    pro: true,
    enterprise: true,
  },
  {
    feature: "PDF Export",
    starter: false,
    pro: true,
    enterprise: true,
  },
  {
    feature: "API Access",
    starter: false,
    pro: true,
    enterprise: true,
  },
  {
    feature: "SSO Authentication",
    starter: false,
    pro: false,
    enterprise: true,
  },
];

const renderValue = (value) => {
  if (value === true)
    return <FaCheck className="text-green-500 mx-auto text-lg" />;

  if (value === false)
    return <FaTimes className="text-red-500 mx-auto text-lg" />;

  return value;
};

function ComparisonTable() {
  return (
    <section className="mt-24">

      <div className="text-center mb-12">

        <span className="text-orange-500 font-semibold uppercase tracking-widest">
          Compare Plans
        </span>

        <h2 className="text-4xl font-bold mt-3">
          Feature Comparison
        </h2>

        <p className="text-gray-500 mt-4">
          Compare all plans side by side.
        </p>

      </div>

      <div className="overflow-x-auto bg-white rounded-3xl shadow-xl">

        <table className="min-w-full">

          <thead className="bg-orange-500 text-white">

            <tr>

              <th className="px-6 py-5 text-left">
                Features
              </th>

              <th className="px-6 py-5">
                Starter
              </th>

              <th className="px-6 py-5">
                Professional
              </th>

              <th className="px-6 py-5">
                Enterprise
              </th>

            </tr>

          </thead>

          <tbody>

            {features.map((row, index) => (

              <tr
                key={index}
                className="border-b hover:bg-orange-50 transition"
              >

                <td className="px-6 py-5 font-semibold">
                  {row.feature}
                </td>

                <td className="text-center">
                  {renderValue(row.starter)}
                </td>

                <td className="text-center">
                  {renderValue(row.pro)}
                </td>

                <td className="text-center">
                  {renderValue(row.enterprise)}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </section>
  );
}

export default ComparisonTable;
function ReportsCards({ summary }) {
  const cards = [
    {
      title: "Total Orders",
      value: summary.total_orders,
      color: "text-orange-500",
    },
    {
      title: "Total Customers",
      value: summary.total_customers,
      color: "text-blue-500",
    },
    {
      title: "Total Products",
      value: summary.total_products,
      color: "text-green-500",
    },
    {
      title: "Total Sales",
      value: `₹${summary.total_sales}`,
      color: "text-purple-500",
    },
  ];

  return (
    <div className="grid md:grid-cols-4 gap-6">
      {cards.map((card, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl shadow p-6"
        >
          <p className="text-gray-500">{card.title}</p>

          <h2 className={`text-3xl font-bold mt-2 ${card.color}`}>
            {card.value}
          </h2>
        </div>
      ))}
    </div>
  );
}

export default ReportsCards;
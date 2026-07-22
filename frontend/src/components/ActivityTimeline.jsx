const activities = [
  "Updated profile information",
  "Generated monthly sales report",
  "Added a new customer",
  "Processed a new order",
  "Logged into the dashboard",
];

function ActivityTimeline() {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6">

      <h2 className="text-2xl font-bold mb-6">
        Recent Activity
      </h2>

      <div className="space-y-5">

        {activities.map((activity, index) => (
          <div
            key={index}
            className="flex items-center gap-4"
          >
            <div className="w-4 h-4 rounded-full bg-orange-500"></div>

            <p className="text-gray-700">
              {activity}
            </p>
          </div>
        ))}

      </div>

    </div>
  );
}

export default ActivityTimeline;
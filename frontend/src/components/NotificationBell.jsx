import { FaBell } from "react-icons/fa";

const notifications = [
  {
    id: 1,
    title: "New Order Received",
    message: "Rahul Sharma placed a new order.",
    time: "2 min ago",
  },
  {
    id: 2,
    title: "Low Stock Alert",
    message: "Laptop stock is running low.",
    time: "10 min ago",
  },
  {
    id: 3,
    title: "New Customer",
    message: "Priya Patel registered successfully.",
    time: "30 min ago",
  },
];

function NotificationBell() {
  return (
    <div className="relative group">

      <button className="relative p-3 rounded-full hover:bg-gray-100 transition">
        <FaBell className="text-xl text-gray-700" />

        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
          {notifications.length}
        </span>
      </button>

      <div className="absolute right-0 mt-3 w-96 bg-white rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">

        <div className="p-5 border-b">
          <h2 className="font-bold text-lg">
            Notifications
          </h2>
        </div>

        <div className="max-h-96 overflow-y-auto">

          {notifications.map((item) => (
            <div
              key={item.id}
              className="p-4 border-b hover:bg-gray-50"
            >
              <h3 className="font-semibold">
                {item.title}
              </h3>

              <p className="text-gray-500 text-sm mt-1">
                {item.message}
              </p>

              <span className="text-xs text-gray-400 mt-2 block">
                {item.time}
              </span>
            </div>
          ))}

        </div>

      </div>

    </div>
  );
}

export default NotificationBell;
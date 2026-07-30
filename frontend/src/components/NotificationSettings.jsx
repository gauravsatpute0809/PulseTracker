function NotificationSettings({
  settings,
  setSettings,
}) {
  const handleToggle = (name) => {
    setSettings({
      ...settings,
      [name]: !settings[name],
    });
  };

  const options = [
    {
      key: "email_notifications",
      title: "Email Notifications",
      description: "Receive order updates and system alerts via email.",
    },
    {
      key: "push_notifications",
      title: "Push Notifications",
      description: "Receive instant notifications inside the application.",
    },
    {
      key: "sms_notifications",
      title: "SMS Notifications",
      description: "Receive important alerts through SMS.",
    },
    {
      key: "marketing_notifications",
      title: "Marketing Emails",
      description: "Receive newsletters and product updates.",
    },
  ];

  return (
    <div className="bg-white rounded-2xl shadow p-6">

      <h2 className="text-2xl font-bold text-gray-800 mb-2">
        Notification Settings
      </h2>

      <p className="text-gray-500 mb-6">
        Manage how you receive notifications.
      </p>

      <div className="space-y-5">

        {options.map((item) => (

          <div
            key={item.key}
            className="flex items-center justify-between border rounded-xl p-4 hover:border-orange-300 transition"
          >

            <div>
              <h3 className="font-semibold text-gray-800">
                {item.title}
              </h3>

              <p className="text-sm text-gray-500 mt-1">
                {item.description}
              </p>
            </div>

            <button
              onClick={() => handleToggle(item.key)}
              className={`relative w-14 h-8 rounded-full transition ${
                settings[item.key]
                  ? "bg-orange-500"
                  : "bg-gray-300"
              }`}
            >
              <span
                className={`absolute top-1 left-1 w-6 h-6 rounded-full bg-white transition ${
                  settings[item.key]
                    ? "translate-x-6"
                    : ""
                }`}
              ></span>
            </button>

          </div>

        ))}

      </div>

    </div>
  );
}

export default NotificationSettings;
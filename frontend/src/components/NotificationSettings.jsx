function NotificationSettings() {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6">
      <h2 className="text-2xl font-bold mb-6">
        Notifications
      </h2>

      <div className="space-y-4">
        <label className="flex justify-between items-center">
          <span>Email Notifications</span>
          <input type="checkbox" defaultChecked />
        </label>

        <label className="flex justify-between items-center">
          <span>SMS Notifications</span>
          <input type="checkbox" />
        </label>

        <label className="flex justify-between items-center">
          <span>Push Notifications</span>
          <input type="checkbox" defaultChecked />
        </label>

        <label className="flex justify-between items-center">
          <span>Weekly Reports</span>
          <input type="checkbox" defaultChecked />
        </label>
      </div>
    </div>
  );
}

export default NotificationSettings;
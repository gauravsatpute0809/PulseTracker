function SecuritySettings() {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6">
      <h2 className="text-2xl font-bold mb-6">
        Security
      </h2>

      <div className="space-y-5">
        <input
          type="password"
          placeholder="Current Password"
          className="border rounded-xl p-3 w-full"
        />

        <input
          type="password"
          placeholder="New Password"
          className="border rounded-xl p-3 w-full"
        />

        <input
          type="password"
          placeholder="Confirm Password"
          className="border rounded-xl p-3 w-full"
        />

        <label className="flex items-center gap-3">
          <input type="checkbox" />
          Enable Two-Factor Authentication
        </label>
      </div>
    </div>
  );
}

export default SecuritySettings;
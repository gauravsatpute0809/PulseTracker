function SettingsHeader() {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
      <div>
        <h1 className="text-4xl font-bold text-gray-900">
          Settings
        </h1>

        <p className="text-gray-500 mt-2">
          Manage your account and application preferences.
        </p>
      </div>

      <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-semibold transition">
        Save All Changes
      </button>
    </div>
  );
}

export default SettingsHeader;
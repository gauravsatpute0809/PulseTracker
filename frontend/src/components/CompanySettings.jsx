function CompanySettings({
  settings,
  setSettings,
}) {
  const handleChange = (e) => {
    setSettings({
      ...settings,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-white rounded-2xl shadow p-6">

      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Company Information
      </h2>

      <div className="grid md:grid-cols-2 gap-5">

        <div>
          <label className="block mb-2 text-gray-600 font-medium">
            Company Name
          </label>

          <input
            type="text"
            name="company_name"
            value={settings.company_name}
            onChange={handleChange}
            placeholder="PulseMetrics Pvt Ltd"
            className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        <div>
          <label className="block mb-2 text-gray-600 font-medium">
            Email
          </label>

          <input
            type="email"
            name="email"
            value={settings.email}
            onChange={handleChange}
            placeholder="company@example.com"
            className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        <div>
          <label className="block mb-2 text-gray-600 font-medium">
            Phone Number
          </label>

          <input
            type="text"
            name="phone"
            value={settings.phone}
            onChange={handleChange}
            placeholder="+91 9876543210"
            className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        <div>
          <label className="block mb-2 text-gray-600 font-medium">
            Website
          </label>

          <input
            type="text"
            name="website"
            value={settings.website}
            onChange={handleChange}
            placeholder="https://company.com"
            className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block mb-2 text-gray-600 font-medium">
            Address
          </label>

          <textarea
            rows="4"
            name="address"
            value={settings.address}
            onChange={handleChange}
            placeholder="Enter company address..."
            className="w-full border rounded-xl px-4 py-3 outline-none resize-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

      </div>

    </div>
  );
}

export default CompanySettings;
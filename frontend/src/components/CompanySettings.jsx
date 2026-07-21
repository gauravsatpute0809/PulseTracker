function CompanySettings() {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6">
      <h2 className="text-2xl font-bold mb-6">
        Company Settings
      </h2>

      <div className="grid md:grid-cols-2 gap-5">
        <input
          type="text"
          placeholder="Company Name"
          className="border rounded-xl p-3"
        />

        <input
          type="text"
          placeholder="Website"
          className="border rounded-xl p-3"
        />

        <input
          type="text"
          placeholder="Industry"
          className="border rounded-xl p-3"
        />

        <select className="border rounded-xl p-3">
          <option>Timezone</option>
          <option>UTC</option>
          <option>Asia/Kolkata</option>
          <option>Europe/London</option>
        </select>
      </div>
    </div>
  );
}

export default CompanySettings;
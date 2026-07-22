function ProfessionalInfo() {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6">

      <h2 className="text-2xl font-bold mb-6">
        Professional Information
      </h2>

      <div className="grid md:grid-cols-2 gap-5">

        <input
          value="PulseMetrics"
          readOnly
          className="border rounded-xl p-3"
        />

        <input
          value="Software Development"
          readOnly
          className="border rounded-xl p-3"
        />

        <input
          value="Administrator"
          readOnly
          className="border rounded-xl p-3"
        />

        <input
          value="3 Years"
          readOnly
          className="border rounded-xl p-3"
        />

      </div>

    </div>
  );
}

export default ProfessionalInfo;
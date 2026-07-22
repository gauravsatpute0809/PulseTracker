function PersonalInfo() {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6">

      <h2 className="text-2xl font-bold mb-6">
        Personal Information
      </h2>

      <div className="grid md:grid-cols-2 gap-5">

        <input
          type="text"
          value="Gaurav"
          readOnly
          className="border rounded-xl p-3"
        />

        <input
          type="email"
          value="gaurav@example.com"
          readOnly
          className="border rounded-xl p-3"
        />

        <input
          type="text"
          value="+91 9876543210"
          readOnly
          className="border rounded-xl p-3"
        />

        <input
          type="text"
          value="Maharashtra, India"
          readOnly
          className="border rounded-xl p-3"
        />

      </div>

    </div>
  );
}

export default PersonalInfo;
function ProfileSettings() {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6">
      <h2 className="text-2xl font-bold mb-6">
        Profile Information
      </h2>

      <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
        <div className="w-24 h-24 rounded-full bg-orange-500 flex items-center justify-center text-white text-3xl font-bold">
          A
        </div>

        <button className="border px-5 py-2 rounded-xl hover:bg-gray-100 transition">
          Change Photo
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <input
          type="text"
          placeholder="Full Name"
          className="border rounded-xl p-3"
        />

        <input
          type="email"
          placeholder="Email"
          className="border rounded-xl p-3"
        />

        <input
          type="text"
          placeholder="Phone Number"
          className="border rounded-xl p-3"
        />

        <input
          type="text"
          placeholder="Job Title"
          className="border rounded-xl p-3"
        />
      </div>
    </div>
  );
}

export default ProfileSettings;
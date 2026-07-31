function AccountInfo({
  profile,
  setProfile,
}) {
  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-white rounded-2xl shadow p-6">

      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Account Information
      </h2>

      <div className="grid md:grid-cols-2 gap-5">

        <div>
          <label className="block mb-2 text-gray-600 font-medium">
            Username
          </label>

          <input
            type="text"
            name="username"
            value={profile.username}
            onChange={handleChange}
            placeholder="Username"
            className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        <div>
          <label className="block mb-2 text-gray-600 font-medium">
            Role
          </label>

          <input
            type="text"
            name="role"
            value={profile.role}
            onChange={handleChange}
            placeholder="Admin"
            className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-orange-400"
            disabled
          />
        </div>

        <div>
          <label className="block mb-2 text-gray-600 font-medium">
            Phone Number
          </label>

          <input
            type="text"
            name="phone"
            value={profile.phone}
            onChange={handleChange}
            placeholder="+91 9876543210"
            className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        <div>
          <label className="block mb-2 text-gray-600 font-medium">
            Country
          </label>

          <input
            type="text"
            name="country"
            value={profile.country}
            onChange={handleChange}
            placeholder="India"
            className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

      </div>

    </div>
  );
}

export default AccountInfo;
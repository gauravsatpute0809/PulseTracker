function ProfileHeader() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
      <div>
        <h1 className="text-4xl font-bold text-gray-900">
          My Profile
        </h1>

        <p className="text-gray-500 mt-2">
          Manage your personal and professional information.
        </p>
      </div>

      <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-semibold transition">
        Edit Profile
      </button>
    </div>
  );
}

export default ProfileHeader;
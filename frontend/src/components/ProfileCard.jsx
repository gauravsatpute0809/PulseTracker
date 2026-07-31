import { FaUserCircle } from "react-icons/fa";

function ProfileCard({
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

      <div className="flex items-center gap-5">

        <FaUserCircle
          size={90}
          className="text-orange-500"
        />

        <div>

          <h2 className="text-2xl font-bold">
            My Profile
          </h2>

          <p className="text-gray-500">
            Update your personal information.
          </p>

        </div>

      </div>

      <div className="grid md:grid-cols-2 gap-5 mt-8">

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={profile.name}
          onChange={handleChange}
          className="border rounded-xl px-4 py-3"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={profile.email}
          onChange={handleChange}
          className="border rounded-xl px-4 py-3"
        />

      </div>

    </div>
  );
}

export default ProfileCard;
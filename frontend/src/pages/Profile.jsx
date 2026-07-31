import DashboardLayout from "../layouts/DashboardLayout";
import ChangePasswordCard from "../components/ChangePasswordCard";
import ProfileImageUpload from "../components/ProfileImageUpload";

function Profile() {
  return (
    <DashboardLayout>

      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900">
          My Profile
        </h1>

        <p className="text-gray-500 mt-2">
          Manage your account information and security.
        </p>
      </div>

      {/* Top Section */}
      <div className="grid lg:grid-cols-3 gap-8">

        {/* Left Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8 text-center">

          <ProfileImageUpload />

          <h2 className="text-2xl font-bold mt-5">
            Gaurav Satpute
          </h2>

          <p className="text-gray-500">
            gauravsatpute.cse23@sbjit.edu.in
          </p>

          <span className="inline-block mt-5 bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm">
            Software Engineer
          </span>

        </div>

        {/* Profile Information */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg p-8">

          <h2 className="text-2xl font-bold mb-6">
            Profile Information
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <div>
              <label className="block mb-2 font-medium">
                Full Name
              </label>

              <input
                className="w-full border rounded-xl px-4 py-3"
                value="Gaurav Satpute"
                readOnly
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Email
              </label>

              <input
                className="w-full border rounded-xl px-4 py-3"
                value="gauravsatpute.cse23@sbjit.edu.in"
                readOnly
              />
            </div>

          </div>

          <button
            className="mt-8 bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-xl transition"
          >
            Edit Profile
          </button>

        </div>

      </div>

      {/* Change Password Section */}
      <ChangePasswordCard />

    </DashboardLayout>
  );
}

export default Profile;
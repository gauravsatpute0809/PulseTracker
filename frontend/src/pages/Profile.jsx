import { useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";

import ProfileCard from "../components/ProfileCard";
import AccountInfo from "../components/AccountInfo";
import ChangePassword from "../components/ChangePassword";
import SaveProfileButton from "../components/SaveProfileButton";

function Profile() {
  const [profile, setProfile] = useState({
    name: "Admin User",
    email: "admin@pulsemetrics.com",
    username: "admin",
    role: "Administrator",
    phone: "+91 9876543210",
    country: "India",
  });

  const handleSave = () => {
    alert("Profile updated successfully!");
  };

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900">
          My Profile
        </h1>

        <p className="text-gray-500 mt-2">
          Manage your personal profile and account settings.
        </p>
      </div>

      {/* Profile Card */}
      <div className="mb-8">
        <ProfileCard
          profile={profile}
          setProfile={setProfile}
        />
      </div>

      {/* Account Information */}
      <div className="mb-8">
        <AccountInfo
          profile={profile}
          setProfile={setProfile}
        />
      </div>

      {/* Change Password */}
      <div className="mb-8">
        <ChangePassword />
      </div>

      {/* Save Button */}
      <SaveProfileButton
        onSave={handleSave}
      />
    </DashboardLayout>
  );
}

export default Profile;
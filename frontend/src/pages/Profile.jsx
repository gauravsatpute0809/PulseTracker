import DashboardLayout from "../layouts/DashboardLayout";
import ProfileHeader from "../components/ProfileHeader";
import ProfileCard from "../components/ProfileCard";
import PersonalInfo from "../components/PersonalInfo";
import ProfessionalInfo from "../components/ProfessionalInfo";
import AccountStats from "../components/AccountStats";
import ActivityTimeline from "../components/ActivityTimeline";

function Profile() {
  return (
    <DashboardLayout>
      <ProfileHeader />

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">

        <div>
          <ProfileCard />
        </div>

        <div className="xl:col-span-2 space-y-8">
          <PersonalInfo />
          <ProfessionalInfo />
        </div>

      </div>

      <div className="mt-8">
        <AccountStats />
      </div>

      <div className="mt-8">
        <ActivityTimeline />
      </div>
    </DashboardLayout>
  );
}

export default Profile;
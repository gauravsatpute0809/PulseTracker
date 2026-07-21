import DashboardLayout from "../layouts/DashboardLayout";
import SettingsHeader from "../components/SettingsHeader";
import ProfileSettings from "../components/ProfileSettings";
import CompanySettings from "../components/CompanySettings";
import SecuritySettings from "../components/SecuritySettings";
import NotificationSettings from "../components/NotificationSettings";

function Settings() {
  return (
    <DashboardLayout>
      <SettingsHeader />

      <div className="space-y-8">
        <ProfileSettings />

        <CompanySettings />

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          <SecuritySettings />
          <NotificationSettings />
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Settings;
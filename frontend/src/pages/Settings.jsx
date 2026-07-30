import { useEffect, useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import CompanySettings from "../components/CompanySettings";
import ThemeSettings from "../components/ThemeSettings";
import NotificationSettings from "../components/NotificationSettings";
import SaveSettingsButton from "../components/SaveSettingsButton";
import api from "../services/api";

function Settings() {
  const [settings, setSettings] = useState({
    company_name: "",
    email: "",
    phone: "",
    website: "",
    address: "",
    theme: "Light",
    email_notifications: true,
    push_notifications: true,
    sms_notifications: false,
    marketing_notifications: false,
  });

  const [loading, setLoading] = useState(true);

  // ============================
  // Fetch Settings
  // ============================
  const fetchSettings = async () => {
    try {
      const response = await api.get("/settings");
      setSettings(response.data.settings);
    } catch (error) {
      console.error("Error loading settings:", error);
      alert("Unable to load settings.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSettings();
  }, []);

  // ============================
  // Save Settings
  // ============================
  const handleSave = async () => {
    try {
      await api.put("/settings", settings);

      alert("Settings saved successfully!");
    } catch (error) {
      console.error(error);

      alert(
        error.response?.data?.message ||
          "Unable to save settings."
      );
    }
  };

  if (loading) {
    return (
      <DashboardLayout>
        <div className="text-center py-20 text-xl">
          Loading Settings...
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900">
          Settings
        </h1>

        <p className="text-gray-500 mt-2">
          Manage your application preferences and company information.
        </p>
      </div>

      {/* Company Settings */}
      <div className="mb-8">
        <CompanySettings
          settings={settings}
          setSettings={setSettings}
        />
      </div>

      {/* Theme Settings */}
      <div className="mb-8">
        <ThemeSettings
          settings={settings}
          setSettings={setSettings}
        />
      </div>

      {/* Notification Settings */}
      <div className="mb-8">
        <NotificationSettings
          settings={settings}
          setSettings={setSettings}
        />
      </div>

      {/* Save Button */}
      <SaveSettingsButton
        onSave={handleSave}
      />
    </DashboardLayout>
  );
}

export default Settings;
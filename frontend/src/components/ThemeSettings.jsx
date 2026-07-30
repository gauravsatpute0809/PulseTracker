import {
  FaSun,
  FaMoon,
  FaDesktop,
} from "react-icons/fa";

function ThemeSettings({
  settings,
  setSettings,
}) {
  const themes = [
    {
      name: "Light",
      icon: <FaSun size={28} />,
      color: "text-yellow-500",
    },
    {
      name: "Dark",
      icon: <FaMoon size={28} />,
      color: "text-gray-700",
    },
    {
      name: "System",
      icon: <FaDesktop size={28} />,
      color: "text-blue-500",
    },
  ];

  const handleTheme = (theme) => {
    setSettings({
      ...settings,
      theme,
    });
  };

  return (
    <div className="bg-white rounded-2xl shadow p-6">

      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Theme Settings
      </h2>

      <p className="text-gray-500 mb-6">
        Choose your preferred application theme.
      </p>

      <div className="grid md:grid-cols-3 gap-5">

        {themes.map((item) => (

          <div
            key={item.name}
            onClick={() => handleTheme(item.name)}
            className={`cursor-pointer rounded-2xl border-2 p-6 transition duration-300 hover:shadow-lg
              ${
                settings.theme === item.name
                  ? "border-orange-500 bg-orange-50"
                  : "border-gray-200 hover:border-orange-300"
              }`}
          >

            <div
              className={`flex justify-center ${item.color}`}
            >
              {item.icon}
            </div>

            <h3 className="text-center font-semibold mt-4">
              {item.name}
            </h3>

            {settings.theme === item.name && (
              <p className="text-center text-orange-500 text-sm mt-2 font-medium">
                Selected
              </p>
            )}

          </div>

        ))}

      </div>

      <div className="mt-8 p-4 rounded-xl bg-orange-50 border border-orange-200">
        <p className="text-gray-700">
          Current Theme:
          <span className="ml-2 font-bold text-orange-600">
            {settings.theme}
          </span>
        </p>
      </div>

    </div>
  );
}

export default ThemeSettings;
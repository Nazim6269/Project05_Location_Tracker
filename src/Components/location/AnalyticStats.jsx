import { useTheme } from "../../hooks/useTheme";

const AnalyticStats = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const stats = [
    { label: "Active Zones", value: 4 },
    { label: "Devices", value: 18 },
    { label: "Warnings", value: 7 },
    { label: "Critical", value: 2 },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((item, i) => (
        <div
          key={i}
          className={`rounded-2xl p-4 text-center transition-colors duration-300
            ${
              isDark
                ? "bg-gray-800 text-white shadow-xl shadow-black/40"
                : "bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 text-gray-800 shadow-xl shadow-gray-300"
            }
          `}
        >
          <p
            className={`text-sm mb-1 ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}
          >
            {item.label}
          </p>
          <h2
            className={`text-2xl font-bold ${
              isDark ? "text-darkTextColor" : "text-lightTextColor"
            }`}
          >
            {item.value}
          </h2>
        </div>
      ))}
    </div>
  );
};

export default AnalyticStats;

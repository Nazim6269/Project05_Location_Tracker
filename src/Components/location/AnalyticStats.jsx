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
          className={`rounded-2xl p-4 text-center border transition-colors duration-300
            ${
              isDark
                ? "bg-gray-900 border-gray-700/30 text-teal-400 shadow-2xl shadow-black/70"
                : "bg-white border-gray-200 text-blue-600 shadow-lg shadow-gray-300/40"
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
              isDark ? "text-white" : "text-gray-900"
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

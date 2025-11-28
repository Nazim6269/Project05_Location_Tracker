import PropTypes from "prop-types";
import { useTheme } from "../../hooks/useTheme";

const Alerts = ({ alerts }) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const color = (level) => {
    if (isDark) {
      return level === "Critical"
        ? "bg-red-500/20 text-red-400"
        : level === "Warning"
        ? "bg-yellow-400/20 text-yellow-300"
        : "bg-blue-500/20 text-blue-300";
    } else {
      return level === "Critical"
        ? "bg-red-100 text-red-600"
        : level === "Warning"
        ? "bg-yellow-100 text-yellow-700"
        : "bg-blue-100 text-blue-700";
    }
  };

  return (
    <div
      className={`rounded-3xl p-5 border transition-colors duration-300
        ${
          isDark
            ? "bg-gray-900 shadow-2xl shadow-black/70 border-gray-700/30 text-white"
            : "bg-white shadow-lg shadow-gray-300/40 border-gray-200 text-gray-900"
        }
      `}
    >
      <h2
        className={`text-lg font-semibold mb-4 ${
          isDark ? "text-white" : "text-gray-900"
        }`}
      >
        System Alerts
      </h2>

      <div className="space-y-3 max-h-60 overflow-y-auto">
        {alerts.map((a, i) => (
          <div
            key={i}
            className={`flex justify-between items-center px-4 py-3 rounded-xl ${color(
              a.level
            )}`}
          >
            <span>{a.text}</span>
            <span className="text-xs opacity-70">{a.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

Alerts.propTypes = {
  alerts: PropTypes.array.isRequired,
};

export default Alerts;

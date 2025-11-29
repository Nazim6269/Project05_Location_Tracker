import PropTypes from "prop-types";
import { useTheme } from "../../hooks/useTheme";
import Stat from "./Stat";

const Zone = ({ zoneName, status, location, speed, signal, progress }) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // Status gradients ()
  const statusColors = {
    Safe: "from-teal-600 to-green-800",
    Monitoring: "from-yellow-500 to-orange-600",
    Alert: "from-red-600 to-rose-700",
  };

  // Mode-based backgrounds
  const gradient = statusColors[status] || "from-gray-700 to-gray-900";

  return (
    <div
      className={`relative rounded-3xl p-6 overflow-hidden hover:scale-105 transition-transform duration-300 border bg-gradient-to-br ${gradient} text-white shadow-2xl border-white/10`}
    >
      {/* DARK MODE GLOW */}
      {isDark && (
        <div className="absolute inset-0 bg-black/20 backdrop-blur-2xl"></div>
      )}

      {/* HEADER */}
      <div className="relative flex justify-between items-center">
        <h2 className="text-lg font-bold tracking-wide">{zoneName}</h2>

        <span
          className={`px-3 py-1 text-xs rounded-full font-medium
            ${isDark ? "bg-black/30 text-white" : "bg-gray-100 text-gray-700"}
          `}
        >
          {status}
        </span>
      </div>

      {/* LOCATION */}
      <p
        className={`relative mt-2 text-sm
          ${isDark ? "text-gray-200" : "text-gray-600"}
        `}
      >
        📍 {location}
      </p>

      {/* STATS */}
      <div className="relative grid grid-cols-3 gap-4 mt-5">
        <Stat label="Speed" value={`${speed} km/h`} dark={isDark} />
        <Stat label="Signal" value={`${signal}%`} dark={isDark} />
        <Stat label="Zone" value={status} dark={isDark} />
      </div>

      {/* PROGRESS */}
      <div className="relative mt-6">
        <p
          className={`text-xs mb-1
            ${isDark ? "text-gray-200" : "text-gray-600"}
          `}
        >
          Zone Progress
        </p>

        <div
          className={`
            w-full h-2 rounded-full overflow-hidden
            ${isDark ? "bg-black/30" : "bg-gray-200"}
          `}
        >
          <div
            className={`h-full transition-all
              ${isDark ? "bg-white/70" : "bg-blue-600"}
            `}
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* RADAR RINGS (DARK ONLY) */}
      {isDark && (
        <>
          <div className="absolute -bottom-10 -right-10 w-36 h-36 rounded-full border border-white/20 animate-pulse"></div>
          <div className="absolute -bottom-16 -right-16 w-52 h-52 rounded-full border border-white/10 animate-pulse"></div>
        </>
      )}
    </div>
  );
};

Zone.propTypes = {
  zoneName: PropTypes.string.isRequired,
  status: PropTypes.oneOf(["Safe", "Monitoring", "Alert"]).isRequired,
  location: PropTypes.string.isRequired,
  speed: PropTypes.number.isRequired,
  signal: PropTypes.number.isRequired,
  progress: PropTypes.number.isRequired,
};

export default Zone;

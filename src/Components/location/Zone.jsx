import PropTypes from "prop-types";
import Stat from "./Stat";

const Zone = ({
  zoneName,
  status,
  location,
  speed,
  signal,
  progress,
}) => {
  // Professional Dashboard Colors
  const statusColors = {
    Safe: "from-teal-600 to-green-800",
    Monitoring: "from-yellow-500 to-orange-600",
    Alert: "from-red-600 to-rose-700",
  };

  const gradient = statusColors[status] || "from-gray-700 to-gray-900";

  return (
    <div
      className={`relative rounded-3xl p-6 bg-gradient-to-br ${gradient} shadow-2xl text-white overflow-hidden hover:scale-105 transition-transform`}
    >
      {/* Top Glow */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-2xl"></div>

      {/* Header */}
      <div className="relative flex justify-between items-center">
        <h2 className="text-lg font-bold tracking-wide">{zoneName}</h2>
        <span className="px-3 py-1 text-xs rounded-full bg-black/30 backdrop-blur-xl">
          {status}
        </span>
      </div>

      {/* Location */}
      <p className="relative mt-2 text-sm opacity-80">📍 {location}</p>

      {/* Stats */}
      <div className="relative grid grid-cols-3 gap-4 mt-5">
        <Stat label="Speed" value={`${speed} km/h`} dark />
        <Stat label="Signal" value={`${signal}%`} dark />
        <Stat label="Zone" value={status} dark />
      </div>

      {/* Progress Bar */}
      <div className="relative mt-6">
        <p className="text-xs opacity-70 mb-1">Zone Progress</p>
        <div className="w-full h-2 bg-black/30 rounded-full overflow-hidden">
          <div
            className="h-full bg-white/70 transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Decorative Radar Ring */}
      <div className="absolute -bottom-10 -right-10 w-36 h-36 rounded-full border border-white/20 animate-pulse"></div>
      <div className="absolute -bottom-16 -right-16 w-52 h-52 rounded-full border border-white/10 animate-pulse"></div>
    </div>
  );
};

// PropTypes
Zone.propTypes = {
  zoneName: PropTypes.string.isRequired,
  status: PropTypes.oneOf(["Safe", "Monitoring", "Alert"]).isRequired,
  location: PropTypes.string.isRequired,
  speed: PropTypes.number.isRequired,
  signal: PropTypes.number.isRequired,
  progress: PropTypes.number.isRequired,
};

export default Zone;

import renderObject from "../hooks/renderObject";
import useDetailsInfo from "../hooks/useDetailsInfo";
import useGeoLocation from "../hooks/useGeoLocation";
import { useTheme } from "../hooks/useTheme";

export default function LiveTracker() {
  const { position, error } = useGeoLocation();
  const { info } = useDetailsInfo();
  const { theme } = useTheme();

  const isDark = theme === "dark";

  /* ---------- ERROR STATE ---------- */
  if (error)
    return (
      <div
        className={`rounded-xl p-5 shadow-md border
        ${
          isDark
            ? "bg-red-500/10 text-red-400 border-red-500/20"
            : "bg-red-50 text-red-600 border-red-200"
        }`}
      >
        ⚠️ {error}
      </div>
    );

  /* ---------- LOADING STATE ---------- */
  if (!position)
    return (
      <div
        className={`rounded-xl p-5 shadow-md border animate-pulse tracking-widest uppercase
        ${
          isDark
            ? "bg-gradient-to-br from-gray-900 via-gray-950 to-black text-gray-300 border-gray-700"
            : "bg-white text-gray-600 border-gray-200"
        }`}
      >
        📡 Fetching live location...
      </div>
    );

  /* ---------- MAIN UI ---------- */
  return (
    <div
      className={`relative overflow-hidden rounded-3xl p-6 w-auto md:w-[380px] border backdrop-blur-xl transition-colors duration-500
        ${
          isDark
            ? "bg-gray-900 text-white border-gray-700 shadow-2xl shadow-black/70"
            : "bg-white text-gray-900 border-gray-200 shadow-lg shadow-gray-300/40"
        }
      `}
    >
      {/* Glow Effect */}
      <div
        className={`absolute -top-20 -right-20 w-48 h-48 blur-3xl rounded-full
          ${isDark ? "bg-gray-700/30" : "bg-blue-300/30"}
        `}
      ></div>

      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <div
          className={`w-3 h-3 rounded-full animate-pulse ${
            isDark ? "bg-teal-500" : "bg-blue-500"
          }`}
        ></div>
        <h3
          className={`font-semibold tracking-widest text-sm uppercase
            ${isDark ? "text-teal-400" : "text-blue-600"}
          `}
        >
          Live Tracking
        </h3>
      </div>

      {/* Location Info */}
      <div className="space-y-2 text-sm">{renderObject(info, isDark)}</div>
    </div>
  );
}

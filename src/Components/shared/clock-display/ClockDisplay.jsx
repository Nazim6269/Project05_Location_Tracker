import { format } from "date-fns";
import PropTypes from "prop-types";
import { useTheme } from "../../../hooks/useTheme";

const ClockDisplay = ({ date, timezone, offset, title }) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const offsetHr = offset / 60;

  return (
    <div
      className={`
    rounded-2xl
    p-5 md:p-6
    max-w-full mx-auto
    backdrop-blur-xl backdrop-saturate-150
    transition-all duration-300
    shadow-lg
    ${
      isDark
        ? "bg-white/10 border border-white/15"
        : "bg-white/70 border border-white/40"
    }
  `}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <h1
          className={`text-xl md:text-2xl font-semibold tracking-wide
      ${isDark ? "text-white" : "text-lightPrimaryTextColor"}`}
        >
          {title}
        </h1>

        <span
          className={`text-xs px-3 py-1 rounded-full uppercase tracking-widest
      ${isDark ? "bg-white/10 text-gray-300" : "bg-white/60 text-gray-700"}`}
        >
          {timezone}
        </span>
      </div>

      {/* Time */}
      <div className="mb-3">
        <h4
          className={`text-xl md:text-3xl font-bold tracking-tight
      ${isDark ? "text-darkTextColor" : "text-lightTextColor"}`}
        >
          {format(date, "hh:mm:ss a")}
        </h4>

        <p
          className={`text-sm mt-1 tracking-wide
      ${isDark ? "text-gray-400" : "text-gray-600"}`}
        >
          {format(date, "yyyy-MM-dd")}
        </p>
      </div>

      {/* Bottom Row */}
      <div className="flex items-center justify-between">
        <span
          className={`text-xs tracking-wider
      ${isDark ? "text-gray-400" : "text-gray-600"}`}
        >
          GMT OFFSET
        </span>

        <span
          className={`text-sm font-semibold px-3 py-1 rounded-lg
      ${isDark ? "bg-white/10 text-white" : "bg-white/50 text-gray-800"}`}
        >
          {offsetHr >= 0
            ? `GMT+${Math.abs(offsetHr)}`
            : `GMT-${Math.abs(offsetHr)}`}
        </span>
      </div>
    </div>
  );
};

ClockDisplay.propTypes = {
  date: PropTypes.object,
  timezone: PropTypes.string,
  offset: PropTypes.number,
  title: PropTypes.string,
};

export default ClockDisplay;

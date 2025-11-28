import { formatDistance } from "date-fns";
import PropTypes from "prop-types";
import useClock from "../../hooks/useClock";
import { useTheme } from "../../hooks/useTheme";
import useTimer from "../../hooks/useTimer";
import ClockActions from "../shared/clock-actions/ClockActions";
import ClockDisplay from "../shared/clock-display/ClockDisplay";

/**
 * ClockListItem renders a single clock card.
 * @param {Object} props
 * @param {Object} props.clock - Clock object.
 * @param {Function} props.updateClock - Update clock function.
 * @param {Function} props.deleteClock - Delete clock function.
 * @param {Object} props.localClock - Local clock object.
 * @returns {JSX.Element}
 */
const ClockListItem = ({ clock, updateClock, deleteClock, localClock }) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const { date } = useClock(clock.timezone, clock.offset);
  const timer = useTimer(date);

  if (!date || !timer) return null;

  const bgLight = "bg-gray-50/60 border border-gray-200";
  const bgDark = "bg-gray-900 border border-gray-700";

  return (
    <div
      className={`
        ${isDark ? bgDark : bgLight} 
        rounded-xl 
        shadow-lg shadow-gray-300/50  
        p-5 
        mx-auto 
        space-y-4 
        transition-all duration-300 
        hover:shadow-2xl hover:scale-[1.02]
      `}
    >
      <ClockDisplay
        date={timer}
        timezone={clock.timezone}
        offset={clock.offset}
        title={clock.title}
        titleClass="text-xl font-bold mb-1 text-gray-800 dark:text-white"
        timeClass="text-lg font-mono "
        dateClass="text-sm text-gray-600 dark:text-gray-400"
      />

      {/* Distance Display */}
      <h3
        className={`text-lg font-semibold capitalize pt-3 border-t ${
          isDark
            ? "border-gray-800 text-gray-300"
            : "border-gray-100 text-gray-700"
        }`}
      >
        {formatDistance(localClock, timer)}
      </h3>

      {/* Clock Actions */}
      <ClockActions
        clock={clock}
        updateClock={updateClock}
        deleteClock={deleteClock}
        size="small"
      />
    </div>
  );
};

// PropTypes
ClockListItem.propTypes = {
  clock: PropTypes.shape({
    title: PropTypes.string,
    timezone: PropTypes.string,
    offset: PropTypes.number,
    id: PropTypes.string,
  }),
  updateClock: PropTypes.func,
  deleteClock: PropTypes.func,
  localClock: PropTypes.object,
};

export default ClockListItem;

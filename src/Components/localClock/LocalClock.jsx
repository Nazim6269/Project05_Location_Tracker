import PropTypes from "prop-types";
import { useEffect } from "react";
import useClock from "../../hooks/useClock";
import { useTheme } from "../../hooks/useTheme";
import useTimer from "../../hooks/useTimer";
import ClockActions from "../shared/clock-actions/ClockActions";
import ClockDisplay from "../shared/clock-display/ClockDisplay";

/**
 * LocalClock component
 * @param {Object} props
 * @param {Object} props.clock
 * @param {Function} props.updateLocalClock
 * @param {Function} props.createNewClock
 * @returns JSX.Element
 */
const LocalClock = ({ clock, updateLocalClock, createNewClock }) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const { date, timezone, offset } = useClock(clock.timezone, clock.offset);
  const timer = useTimer(date);

  useEffect(() => {
    updateLocalClock({ date, timezone, offset });
  }, [date]);

  return (
    <div
      className={`
        flex-1 
        rounded-2xl 
        p-7 
        border transition-colors duration-300
        shadow-xl hover:shadow-2xl
        ${
          isDark
            ? "bg-gray-800 border-gray-700 shadow-2xl shadow-black/60 hover:shadow-3xl"
            : "bg-gray-50 border-gray-200 shadow-lg hover:shadow-xl"
        }
      `}
    >
      {timer && (
        <ClockDisplay
          date={timer}
          timezone={timezone}
          offset={offset}
          title={clock.title}
        />
      )}
      <div
        className={`mt-6 border-t pt-4 ${
          isDark ? "border-gray-700" : "border-gray-200"
        }`}
      >
        <ClockActions
          local={true}
          clock={clock}
          updateClock={updateLocalClock}
          createNewClock={createNewClock}
        />
      </div>
    </div>
  );
};

// PropTypes
LocalClock.propTypes = {
  clock: PropTypes.shape({
    date: PropTypes.objectOf(PropTypes.object),
    title: PropTypes.string,
    offset: PropTypes.number,
    timezone: PropTypes.string,
    type: PropTypes.string,
  }),
  updateLocalClock: PropTypes.func,
  createNewClock: PropTypes.func,
};

export default LocalClock;

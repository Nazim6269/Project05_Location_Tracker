import PropTypes from "prop-types";
import { useTheme } from "../../hooks/useTheme";
import ClockListItem from "./ClockListItem";

/**
 * ClockList component renders the list of created clocks
 * @param {Object} props - The component props.
 * @param {Array} props.clocks - Array of clock objects.
 * @param {Function} props.updateClock - Function to update a clock.
 * @param {Function} props.deleteClock - Function to delete a clock.
 * @param {Object} props.localClock - Local clock object.
 * @returns {JSX.Element} - JSX element representing Clock list.
 */
const ClockList = ({ clocks, updateClock, deleteClock, localClock }) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const bgLight = "bg-gray-50/60 border border-gray-200";
  const bgDark = "bg-gray-900 border border-gray-700";

  return (
    <div
      className={`
        ${isDark ? bgDark : bgLight} 
        shadow-2xl 
        rounded-2xl 
        p-7 
        w-full md:w-5/6 lg:w-3/4 xl:w-2/3 mx-auto
        transition-colors duration-500
      `}
    >
      <h3
        className={`${
          isDark ? "" : "text-lightPrimaryTextColor"
        } text-3xl font-bold mb-4 bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400`}
      >
        Other Clocks
      </h3>
      <hr
        className={`border-t ${
          isDark ? "border-gray-700" : "border-gray-300"
        } mb-6`}
      />

      {clocks.length === 0 ? (
        <p
          className={`
            p-4 rounded-lg italic
            ${
              isDark
                ? "bg-gray-800 text-gray-400"
                : "bg-gray-50/60 text-gray-500"
            }
          `}
        >
          There are no other clocks added. Please use the Add New Clock button
          to track a new timezone.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-4 ">
          {clocks.map((clock) => (
            <ClockListItem
              key={clock.id}
              clock={clock}
              updateClock={updateClock}
              deleteClock={deleteClock}
              localClock={localClock.date}
            />
          ))}
        </div>
      )}
    </div>
  );
};

// PropTypes
ClockList.propTypes = {
  clocks: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      id: PropTypes.string,
      timezone: PropTypes.string,
      offset: PropTypes.number,
    })
  ),
  updateClock: PropTypes.func,
  deleteClock: PropTypes.func,
  localClock: PropTypes.shape({
    title: PropTypes.string,
    offset: PropTypes.number,
    timezone: PropTypes.string,
    type: PropTypes.string,
    date: PropTypes.string,
  }),
};

export default ClockList;

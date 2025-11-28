import PropTypes from "prop-types";
import { useState } from "react";
import { useTheme } from "../../../hooks/useTheme";
import ClockForm from "../clock-form/ClockForm";

const ClockActions = ({
  local = false,
  clock,
  updateClock,
  createNewClock,
  deleteClock,
}) => {
  const [isEdit, setIsEdit] = useState(false);
  const [isCreate, setIsCreate] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const handleClock = (value) => {
    createNewClock(value);
  };

  const bgLight = "bg-gray-50/60 border border-gray-200";
  const bgDark = "bg-gray-900 border border-gray-800";

  return (
    <div
      className={`
    ${isDark ? bgDark : bgLight}
    backdrop-blur-md backdrop-saturate-150
    shadow-lg dark:shadow-black/50
    rounded-xl px-3 py-3
    max-w-full mx-auto
    transition-all duration-300
  `}
    >
      {/* Action Buttons */}
      <div className="flex gap-2">
        {/* Update */}
        <button
          onClick={() => setIsEdit(!isEdit)}
          className={`
    flex-1 text-sm font-semibold py-2 rounded-md
    transition-all duration-300 select-none
    text-white
    bg-gradient-to-r
    ${
      isDark
        ? "from-blue-600 via-cyan-600 to-teal-600 hover:from-blue-500 hover:via-cyan-500 hover:to-teal-500"
        : "from-blue-500 via-indigo-500 to-purple-500 hover:from-blue-600 hover:via-indigo-600 hover:to-purple-600"
    }
    hover:scale-[1.03] hover:shadow-lg
    active:scale-95
  `}
        >
          {isEdit ? "Close" : "Update"}
        </button>

        {/* Add or Delete */}
        {local ? (
          <button
            onClick={() => setIsCreate(!isCreate)}
            className={`
    flex-1 text-sm font-semibold py-2 rounded-md
    transition-all duration-300 select-none
    text-white
    bg-gradient-to-r
    ${
      isDark
        ? "from-blue-600 via-cyan-600 to-teal-600 hover:from-blue-500 hover:via-cyan-500 hover:to-teal-500"
        : "from-blue-500 via-indigo-500 to-purple-500 hover:from-blue-600 hover:via-indigo-600 hover:to-purple-600"
    }
    hover:scale-[1.03] hover:shadow-lg
    active:scale-95
  `}
          >
            {isCreate ? "Close" : "Add"}
          </button>
        ) : (
          <button
            onClick={() => deleteClock(clock.id)}
            className={`
    flex-1 text-sm font-semibold py-2 rounded-md
    transition-all duration-300 select-none
    text-white
    bg-gradient-to-r
    ${
      isDark
        ? "from-red-600 via-rose-600 to-orange-600 hover:from-red-500 hover:via-rose-500 hover:to-orange-500"
        : "from-red-500 via-rose-500 to-orange-500 hover:from-red-600 hover:via-rose-600 hover:to-orange-600"
    }
    hover:scale-[1.03] hover:shadow-lg
    active:scale-95
  `}
          >
            Delete
          </button>
        )}
      </div>

      {/* Edit Clock Form */}
      {isEdit && (
        <div
          className={`
        mt-3 p-3 rounded-lg backdrop-blur-sm
        ${
          isDark
            ? "bg-gray-800/70 border border-blue-700/40"
            : "bg-white/70 border border-blue-400/50"
        }
      `}
        >
          <h3
            className={`text-sm font-semibold mb-2 ${
              isDark ? "text-blue-400" : "text-blue-600"
            }`}
          >
            Edit
          </h3>

          <ClockForm
            handleClock={updateClock}
            title={!local}
            values={clock}
            edit
          />
        </div>
      )}

      {/* Create Clock Form */}
      {isCreate && (
        <div
          className={`
        mt-3 p-3 rounded-lg backdrop-blur-sm
        ${
          isDark
            ? "bg-gray-800/70 border border-teal-500"
            : "bg-white/70 border border-indigo-400"
        }
      `}
        >
          <h3
            className={`text-sm font-semibold mb-2 ${
              isDark ? "text-teal-400" : "text-indigo-600"
            }`}
          >
            Create
          </h3>

          <ClockForm handleClock={handleClock} />
        </div>
      )}
    </div>
  );
};

ClockActions.propTypes = {
  updateClock: PropTypes.func,
  createNewClock: PropTypes.func,
  deleteClock: PropTypes.func,
  clock: PropTypes.shape({
    date: PropTypes.objectOf(PropTypes.object),
    title: PropTypes.string,
    offset: PropTypes.number,
    type: PropTypes.string,
    id: PropTypes.string,
  }),
  local: PropTypes.bool,
};

export default ClockActions;

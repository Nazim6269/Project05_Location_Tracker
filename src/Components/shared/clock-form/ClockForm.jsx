import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { TIMEZONE_OFFSET } from "../../../constants/timezone";
import { useTheme } from "../../../hooks/useTheme";
import { getOffset } from "../../../utils/timezone";

const ClockForm = ({
  values = { title: "", timezone: "GMT", offset: 0 },
  handleClock,
  title = true,
  edit = false,
}) => {
  const [formValues, setFormValues] = useState({ ...values });
  const { theme } = useTheme();
  const isDark = theme === "dark";

  //handleChange function
  const handleChange = (e) => {
    let { name, value } = e.target;
    if (name === "offset") {
      value = Number(value) * 60;
    }
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  //handleSubmit function
  const handleSubmit = (e) => {
    e.preventDefault();
    handleClock(formValues);
  };

  useEffect(() => {
    if (TIMEZONE_OFFSET[formValues.timezone]) {
      setFormValues((prev) => ({
        ...prev,
        offset: TIMEZONE_OFFSET[formValues.timezone],
      }));
    }
  }, [formValues.timezone]);

  const bgLight = "bg-gray-50/60 border border-indigo-200";
  const bgDark = "bg-gray-800 border border-teal-700";

  return (
    <form
      onSubmit={handleSubmit}
      className={`
        ${isDark ? bgDark : bgLight}
        shadow-2xl 
        rounded-xl 
        p-6 md:p-8 
        max-w-lg mx-auto 
        space-y-6 
        transition-colors duration-300
      `}
    >
      {/* Title Input */}
      <div>
        <label
          htmlFor="title"
          className={`block text-sm font-semibold mb-2 ${
            isDark ? "text-gray-300" : "text-gray-700"
          }`}
        >
          Enter Your Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          disabled={!title}
          value={formValues.title}
          onChange={handleChange}
          className={`
            w-full p-3 
            rounded-lg 
            text-gray-900 border
            ${
              isDark
                ? "bg-gray-700 border-gray-700 text-white focus:ring-teal-400"
                : "bg-gray-50/60 border-gray-200 focus:ring-indigo-400"
            }
            focus:outline-none focus:ring-2 
            transition-colors duration-200
            disabled:bg-gray-200 
          `}
        />
      </div>

      {/* Timezone Select */}
      <div>
        <label
          htmlFor="timezone"
          className={`block text-sm font-semibold mb-2 ${
            isDark ? "text-gray-300" : "text-gray-700"
          }`}
        >
          Enter Your Timezone
        </label>
        <select
          id="timezone"
          name="timezone"
          value={formValues.timezone}
          onChange={handleChange}
          className={`
            w-full p-3 rounded-lg 
            text-gray-900 border
            ${
              isDark
                ? "bg-gray-700 focus:ring-teal-400 text-white"
                : "bg-gray-50/60 border-gray-200 focus:ring-indigo-400"
            }
            focus:outline-none focus:ring-2 
            transition-colors duration-200
          `}
        >
          {["UTC", "GMT", "PST", "EDT", "BST", "MST"].map((tz) => (
            <option key={tz} value={tz}>
              {tz}
            </option>
          ))}
        </select>
      </div>

      {/* Offset Select (Conditional) */}
      {(formValues.timezone === "GMT" || formValues.timezone === "UTC") && (
        <div>
          <label
            htmlFor="offset"
            className={`block text-sm font-semibold mb-2 ${
              isDark ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Enter Your Offset (Hours)
          </label>
          <select
            name="offset"
            value={formValues.offset / 60}
            onChange={handleChange}
            className={`
              w-full p-3 rounded-lg
              text-gray-900 border
              ${
                isDark
                  ? "bg-gray-700 border-gray-700 text-white focus:ring-teal-400"
                  : "bg-gray-50/60 border-gray-200 focus:ring-indigo-400"
              }
              focus:outline-none focus:ring-2 
              transition-colors duration-200
            `}
          >
            {getOffset().map((item) => (
              <option key={item} value={item}>
                {item >= 0 ? `GMT+${item}` : `GMT${item}`}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Submit Button*/}
      <button
        type="submit"
        className={` w-full
    flex-1 text-sm font-semibold py-2 rounded-md
    transition-all duration-300 select-none
    text-white
    bg-gradient-to-r
    ${
      isDark
        ? "from-blue-600 via-cyan-600 to-teal-600 hover:from-blue-500 hover:via-cyan-500 hover:to-teal-500"
        : "from-blue-500 via-indigo-500 to-purple-500 hover:from-blue-600 hover:via-indigo-600 hover:to-purple-600"
    }
     hover:shadow-lg
  `}
      >
        {edit ? "Update Clock" : "Create Clock"}
      </button>
    </form>
  );
};

ClockForm.propTypes = {
  values: PropTypes.shape({
    title: PropTypes.string,
    timezone: PropTypes.string,
    offset: PropTypes.number,
  }),
  handleClock: PropTypes.func,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  edit: PropTypes.bool,
};

export default ClockForm;

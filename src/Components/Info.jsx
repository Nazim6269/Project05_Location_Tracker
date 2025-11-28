import PropTypes from "prop-types";
import { useTheme } from "../hooks/useTheme";

export const Info = ({ label, value }) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div
      className={`
    rounded-lg p-2 text-center
    ${
      isDark
        ? "bg-white/10 text-white"
        : "bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 text-gray-900 shadow-md"
    }
    transition-colors duration-300
  `}
    >
      <p className="text-xs opacity-70">{label}</p>
      <p className="font-semibold">{value}</p>
    </div>
  );
};

Info.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
};

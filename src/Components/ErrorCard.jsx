import PropTypes from "prop-types";
import { useTheme } from "../hooks/useTheme";

const ErrorCard = ({ message }) => {
  const { theme } = useTheme();

  return (
    <div
      className={`
        w-full max-w-sm rounded-3xl p-5 text-center
        ${
          theme === "dark"
            ? "bg-red-800 text-red-200 shadow-lg shadow-black/50"
            : "bg-red-100 text-red-800 shadow-md shadow-red-300"
        }
        transition-colors duration-300
      `}
    >
      <h3 className="font-semibold mb-2">⚠️ Error</h3>
      <p className="text-sm">{message}</p>
    </div>
  );
};

// defining prop types
ErrorCard.propTypes = {
  message: PropTypes.string,
};

export default ErrorCard;

import { useTheme } from "../hooks/useTheme";

const LoadingCard = () => {
  const { theme } = useTheme();

  return (
    <div
      className={`
        w-full max-w-sm h-80 rounded-3xl animate-pulse
        ${theme === "dark" ? "bg-gray-800" : "bg-gray-100"}
        shadow-xl ${theme === "dark" ? "shadow-black/40" : "shadow-gray-300"}
      `}
    ></div>
  );
};

export default LoadingCard;

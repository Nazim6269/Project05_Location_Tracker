import TrackingComponents from "../Components/location/TrackingComponents";
import { useTheme } from "../hooks/useTheme";

const Home = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div
      className={`
        ${
          isDark
            ? "bg-gradient-to-br from-gray-900 via-gray-950 to-black text-white"
            : "bg-lightPrimaryBg text-gray-900"
        }
        min-h-screen transition-colors duration-500
      `}
    >
      <div className="max-w-7xl mx-auto px-6 py-10">
        <TrackingComponents />
      </div>
    </div>
  );
};

export default Home;

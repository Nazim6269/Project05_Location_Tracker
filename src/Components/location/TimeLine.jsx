import { useTheme } from "../../hooks/useTheme";

const Timeline = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const items = [
    { time: "10:30", event: "Entered Zone Alpha" },
    { time: "10:45", event: "Speed exceeded limit" },
    { time: "11:00", event: "Signal lost (5s)" },
    { time: "11:10", event: "Reconnected" },
  ];

  return (
    <div
      className={`rounded-lg p-6 border duration-300 shadow transition-shadow
        ${
          isDark
            ? "bg-gray-900 border-gray-700/30 shadow-2xl shadow-black/70 text-white"
            : "bg-white border-gray-200 shadow-lg shadow-gray-300/40 text-gray-900"
        }
      `}
    >
      <h2
        className={`text-lg font-semibold mb-4 ${
          isDark ? "text-white" : "text-gray-900"
        }`}
      >
        Zone Activity Timeline
      </h2>

      <div className="space-y-4">
        {items.map((i, index) => (
          <div key={index} className="flex gap-4 items-start">
            <div
              className={`w-3 h-3 mt-1 rounded-full animate-pulse ${
                isDark ? "bg-indigo-500" : "bg-blue-500"
              }`}
            ></div>
            <div>
              <p
                className={`text-sm font-medium ${
                  isDark ? "text-gray-200" : "text-gray-800"
                }`}
              >
                {i.event}
              </p>
              <span
                className={`text-xs opacity-60 ${
                  isDark ? "text-gray-400" : "text-gray-500"
                }`}
              >
                {i.time}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;

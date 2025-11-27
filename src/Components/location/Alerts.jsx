

 const Alerts =({ alerts })=> {
  const color = (l) =>
    l === "Critical"
      ? "bg-red-500/20 text-red-400"
      : l === "Warning"
      ? "bg-yellow-400/20 text-yellow-300"
      : "bg-blue-500/20 text-blue-300";

  return (
    <div className="rounded-3xl dark:bg-gray-900  shadow-2xl shadow-gray-300/50 dark:shadow-black/70
    border border-gray-700/30 p-5 ">
      <h2 className="text-lg font-semibold mb-4">System Alerts</h2>

      <div className="space-y-3 max-h-60 overflow-y-auto">
        {alerts.map((a, i) => (
          <div
            key={i}
            className={`flex justify-between items-center ${color(
              a.level
            )} px-4 py-3 rounded-xl`}
          >
            <span>{a.text}</span>
            <span className="text-xs opacity-70">{a.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Alerts
 const Timeline=() =>{
  const items = [
    { time: "10:30", event: "Entered Zone Alpha" },
    { time: "10:45", event: "Speed exceeded limit" },
    { time: "11:00", event: "Signal lost (5s)" },
    { time: "11:10", event: "Reconnected" },
  ];

  return (
    <div className="dark:bg-gray-900  shadow-2xl shadow-gray-300/50 dark:shadow-black/70 border border-gray-700/30 p-6 rounded-lg">
      <h2 className="text-lg font-semibold mb-4">Zone Activity Timeline</h2>

      <div className="space-y-4">
        {items.map((i, index) => (
          <div key={index} className="flex gap-4 items-start">
            <div className="w-3 h-3 mt-1 bg-indigo-500 rounded-full animate-pulse"></div>
            <div>
              <p className="text-sm font-medium">{i.event}</p>
              <span className="text-xs opacity-60">{i.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Timeline
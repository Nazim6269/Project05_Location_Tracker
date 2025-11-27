const AnalyticStats=() =>{
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {[
        { label: "Active Zones", value: 4 },
        { label: "Devices", value: 18 },
        { label: "Warnings", value: 7 },
        { label: "Critical", value: 2 },
      ].map((item, i) => (
        <div
          key={i}
          className="bg-gradient-to-br dark:bg-gray-900 dark:border-gray-700  shadow-2xl shadow-gray-300/50 dark:shadow-black/70
    rounded-2xl p-4  text-teal-400 text-center border border-gray-700/30"
        >
          <p className="text-sm opacity-80">{item.label}</p>
          <h2 className="text-2xl font-bold">{item.value}</h2>
        </div>
      ))}
    </div>
  );
}

export default AnalyticStats
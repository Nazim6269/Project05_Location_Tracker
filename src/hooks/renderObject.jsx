const renderObject = (obj, isDark) => {
  return Object.entries(obj || {}).map(([key, value]) => {
    if (value === null || value === undefined || value === "") return null;

    // NESTED OBJECT
    if (typeof value === "object" && !Array.isArray(value)) {
      return (
        <div key={key} className="mt-4">
          <h4
            className={`text-xs uppercase tracking-widest mb-2
              ${isDark ? "text-gray-400" : "text-gray-500"}
            `}
          >
            {key}
          </h4>

          <div className="space-y-2 pl-2">{renderObject(value, isDark)}</div>
        </div>
      );
    }

    // NORMAL FIELD
    return (
      <div key={key} className="flex justify-between">
        <span
          className={`capitalize ${isDark ? "text-gray-300" : "text-gray-700"}`}
        >
          {key.replace(/_/g, " ")}
        </span>

        <span
          className={`font-mono font-semibold
            ${isDark ? "text-darkTextColor" : "text-lightTextColor"}
          `}
        >
          {String(value)}
        </span>
      </div>
    );
  });
};

export default renderObject;

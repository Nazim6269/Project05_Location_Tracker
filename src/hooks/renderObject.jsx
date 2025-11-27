
const renderObject = (obj) => {
  return Object.entries(obj).map(([key, value]) => {
    if (value === null || value === undefined || value === "") return null;

    // If nested object → render heading + children
    if (typeof value === "object" && !Array.isArray(value)) {
      return (
        <div key={key} className="mt-4">
          <h4 className="text-xs uppercase tracking-widest text-gray-500 mb-2">
            {key}
          </h4>

          <div className="space-y-2 pl-2">{renderObject(value)}</div>
        </div>
      );
    }

    // Render normal field
   return <div key={key} className="flex justify-between">
      <span className="capitalize opacity-70">{key.replace(/_/g, " ")}</span>
      <span className="font-mono text-teal-400 font-semibold">{String(value)}</span>
    </div>
     
  });
};

export default renderObject

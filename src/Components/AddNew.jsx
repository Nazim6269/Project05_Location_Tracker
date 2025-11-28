import { useState } from "react";
import { initialClocks } from "../../data";
import { useTheme } from "../hooks/useTheme";

const AddNew = () => {
  const [clocks, setClocks] = useState(initialClocks);
  const [newCity, setNewCity] = useState("");
  const { theme } = useTheme();

  const addCity = () => {
    if (newCity.trim()) {
      const id = clocks.length + 1;
      setClocks([...clocks, { id, city: newCity, timezone: newCity }]);
      setNewCity("");
    }
  };

  return (
    <div className="mb-8 flex gap-4">
      <input
        value={newCity}
        onChange={(e) => setNewCity(e.target.value)}
        placeholder="Enter city / timezone"
        className={`
          px-5 py-3 
          rounded-xl 
          border ${theme === "dark" ? "border-gray-700" : "border-gray-300"}
          ${
            theme === "dark"
              ? "bg-gray-800 text-white"
              : "bg-gray-50/70 text-gray-700"
          } 
          shadow-inner 
          focus:outline-none focus:ring-2 focus:ring-teal-400
          w-full md:w-80 
          transition-colors duration-300
        `}
      />
      <button
        onClick={addCity}
        className={`
    px-6 py-3
    rounded-xl
    text-white font-semibold
    shadow-md hover:shadow-lg
    hover:brightness-110
    transition-all duration-300
    ${
      theme === "dark"
        ? "bg-gradient-to-r from-blue-500  to-teal-500"
        : "bg-gradient-to-r from-indigo-500 to-purple-500 "
    }
  `}
      >
        Add City
      </button>
    </div>
  );
};

export default AddNew;

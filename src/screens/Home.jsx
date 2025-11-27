import { useState } from "react";
import TrackingComponents from "../Components/location/TrackingComponents";

const Home = () => {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div
      className={`${
        darkMode
          ? "bg-gradient-to-br from-gray-900 via-gray-950 to-black text-white"
          : "bg-gray-100 text-gray-900"
      } 
    min-h-screen p-8 transition-colors duration-500`}
    >
      {/* --- START--- */}
      <div className="max-w-7xl mx-auto">
        <header className="flex flex-col md:flex-row justify-between items-center mb-4">
          <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
            Your Location
          </h1>
        </header>

        
       <TrackingComponents />
      </div>
    </div>
  );
};

export default Home;

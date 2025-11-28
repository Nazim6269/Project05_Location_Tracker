import { useState } from "react";
import { generate } from "shortid";
import ClockList from "../Components/clockList/ClockList";
import LocalClock from "../Components/localClock/LocalClock";
import { useTheme } from "../hooks/useTheme";

const LOCAL_CLOCK_INIT = {
  title: "My clock",
  timezone: "",
  type: "",
  offset: 0,
  date: null,
};

const CustomeClock = () => {
  const [localClock, setLocalClock] = useState({ ...LOCAL_CLOCK_INIT });
  const [clocks, setClocks] = useState([]);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const updateLocalClock = (data) => {
    setLocalClock({
      ...localClock,
      ...data,
    });
  };

  const createNewClock = (clock) => {
    clock.id = generate();
    setClocks([...clocks, clock]);
  };

  const updateClock = (updatedClock) => {
    const mappedClocks = clocks.map((clock) =>
      clock.id === updatedClock.id ? updatedClock : clock
    );
    setClocks(mappedClocks);
  };

  const deleteClock = (id) => {
    const filteredClocks = clocks.filter((clock) => clock.id !== id);
    setClocks(filteredClocks);
  };

  return (
    <div
      className={`
    flex flex-col md:flex-row flex-grow justify-center gap-8 
    p-6 md:p-10 lg:p-12 xl:p-16
    transition-colors duration-500
    ${
      isDark
        ? "bg-gradient-to-br from-gray-900 via-gray-950 to-black"
        : "bg-lightPrimaryBg"
    }
  `}
    >
      <div className="flex flex-col lg:flex-row max-w-7xl w-full gap-8">
        {/* Left Panel: Local Clock */}
        <LocalClock
          clock={localClock}
          updateLocalClock={updateLocalClock}
          createNewClock={createNewClock}
        />

        {/* Right Panel: Clock List */}
        <ClockList
          clocks={clocks}
          updateClock={updateClock}
          deleteClock={deleteClock}
          localClock={localClock}
        />
      </div>
    </div>
  );
};

export default CustomeClock;

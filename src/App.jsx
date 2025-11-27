import "leaflet/dist/leaflet.css";
import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Footer from "./Components/navbar/Footer";
import Navbar from "./Components/navbar/Navbar";
import CustomeClock from "./screens/CustomClock";
import Home from "./screens/Home";
import WorldClocks from "./screens/WroldClocks";


function App() {
  const darkMode = true

  return (
    <BrowserRouter >
   <div 
  className="flex flex-col min-h-screen text-gray-900 dark:text-white transition-colors duration-500"
>
      {/* Navbar */}
      <Navbar darkMode={darkMode} />
         <Routes>
  <Route index element={<Home />} />
<Route path="/my-clock" element={ <CustomeClock />} />
<Route path="/world-clocks" element={ <WorldClocks />} />
     
</Routes>
      
      {/* Footer */}
    </div>
      <Footer />
      </BrowserRouter>
  );
}

export default App;

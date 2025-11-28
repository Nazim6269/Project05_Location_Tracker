import PropTypes from "prop-types";
import { createContext, useState } from "react";

// This function retrieve theme from local sotorage
const getThemeFromLocalStorage = () => {
  const theme = localStorage.getItem("theme");
  if (!theme) {
    localStorage.setItem("theme", "dark");
    return "dark";
  }

  return theme;
};

//cration of context
export const ThemeContext = createContext({
  theme: "dark",
  toggleTheme: () => {},
});

//provider
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(getThemeFromLocalStorage());

  const toggleTheme = () => {
    setTheme((prev) => {
      const newTheme = prev === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);

      return newTheme;
    });
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

//prop types defining
ThemeProvider.propTypes = {
  children: PropTypes.node,
};

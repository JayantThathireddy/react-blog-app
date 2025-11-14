import { createContext, useState, useEffect } from "react";


export const ThemeContext = createContext();


export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");


  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };


  useEffect(() => {
    document.body.style.backgroundColor = theme === "dark" ? "#121212" : "#f0f0f0";
    document.body.style.color = theme === "dark" ? "#ffffff" : "#000000";
  }, [theme]);


  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

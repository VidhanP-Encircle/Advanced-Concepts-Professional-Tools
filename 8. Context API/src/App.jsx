import React from "react";
import { useTheme } from "./Context/ThemeContext";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div>Curent: {theme}</div>

      <button
        onClick={toggleTheme}
        className="border rounded-lg px-4 py-2 mt-4"
      >
        Click to change Theme
      </button>
    </div>
  );
};

export default App;

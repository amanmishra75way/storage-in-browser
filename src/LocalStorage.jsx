import React, { useEffect, useState } from "react";

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "light";
    setTheme(storedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div className="flex flex-col items-center gap-4 mt-6">
      <div
        className={`h-52 w-52 flex items-center justify-center rounded-lg transition-all duration-300 ${
          theme === "light" ? "bg-slate-300 text-black" : "bg-black text-white"
        }`}
      >
        Theme is {theme}
      </div>
      <button onClick={toggleTheme} className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700">
        Switch Theme
      </button>
    </div>
  );
};

export default ThemeSwitcher;

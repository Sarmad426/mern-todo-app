import { Moon, Sun } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className="p-2 bg-gray-500 rounded-md my-5">
      {theme === "dark" ? <Sun /> : <Moon />}
    </button>
  );
};

export default ThemeSwitcher;

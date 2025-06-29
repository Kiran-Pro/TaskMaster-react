import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="text-theme-text hover:text-theme-primary transition"
      title="Toggle Theme"
    >
      {isDark ? <FaSun size={22} /> : <FaMoon size={22} />}
    </button>
  );
};

export default ThemeToggle;

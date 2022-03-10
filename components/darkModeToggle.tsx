import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const getThemeString = (isDakr: boolean): string => (isDakr ? "dark" : "light");

const DarkmodeToggle = () => {
  const [isDarkmode, setIsDarkmode] = useState<boolean | null>(null);

  const handleToggleDarkMode = () => {
    setIsDarkmode(!isDarkmode);
    localStorage.theme = getThemeString(!isDarkmode);
    if (localStorage.theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setIsDarkmode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDarkmode(false);
    }
  }, []);

  return (
    <AnimatePresence exitBeforeEnter>
      <motion.button onClick={handleToggleDarkMode}>{isDarkmode ? "light" : "dark"}</motion.button>
    </AnimatePresence>
  );
};

export default DarkmodeToggle;

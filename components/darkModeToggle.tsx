import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MoonIcon from "./icons/moonIcon";
import SunIcon from "./icons/sunIcon";
import useBreakPoints from "../utils/usebreakpoints";

const getThemeString = (isDakr: boolean): string => (isDakr ? "dark" : "light");

const variants = {
  hidden: {
    y: 20,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
  exit: {
    y: -45,
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
};

const DarkmodeToggle = () => {
  const [isDarkmode, setIsDarkmode] = useState<boolean | null>(null);
  const breakpoint = useBreakPoints();

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
    <AnimatePresence initial={false} exitBeforeEnter>
      <motion.button
        aria-label="toggle light/dark mode"
        initial="hidden"
        animate="show"
        exit="exit"
        variants={variants}
        key={`theme-toggle-${isDarkmode ? "light" : "dark"}`}
        onClick={handleToggleDarkMode}
        className="pl-4 md:pl-6"
      >
        {isDarkmode ? (
          <SunIcon height={breakpoint === "sm" ? 24 : 30} width={breakpoint === "sm" ? 24 : 30} />
        ) : (
          <MoonIcon height={breakpoint === "sm" ? 24 : 30} width={breakpoint === "sm" ? 24 : 30} />
        )}
      </motion.button>
    </AnimatePresence>
  );
};

export default DarkmodeToggle;

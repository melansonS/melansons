import React, { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import NavMenu from "./navMenu";
import { useRouter } from "next/router";
import DarkmodeToggle from "./darkModeToggle";

interface INavbarProps {
  bareBones: boolean;
}

export default function Navbar({ bareBones }: INavbarProps) {
  const [showMenu, setShowMenu] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setShowMenu(false);
  }, [router.asPath]);

  const toggleShowMenu = (value: boolean) => {
    setShowMenu(value);
  };

  return (
    <header className="flex justify-between  mx-4 px-8 top-0 pt-8 pb-8 sm:pt-12 sm:px-12">
      <div className={`flex  ${showMenu ? "fixed z-30" : ""}`}>
        {!bareBones && (
          <button
            aria-label="toggle navigation menu"
            className="relative h-10 w-10 z-20"
            onClick={() => setShowMenu(!showMenu)}
            data-testid="navmenu-toggle-button"
          >
            <div className={`hamburger ${showMenu ? "activeHamburger" : ""}`}></div>
          </button>
        )}
      </div>
      <h4 className="text-3xl md:text-5xl py-1 grow text-right">melanson[s]</h4>
      <DarkmodeToggle />
      <AnimatePresence mode="wait">
        {showMenu && <NavMenu toggleShowMenu={toggleShowMenu} />}
      </AnimatePresence>
    </header>
  );
}

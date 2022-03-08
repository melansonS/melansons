import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import NavMenu from "./navMenu";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleShowMenu = (value: boolean) => {
    setShowMenu(value);
  };

  return (
    <header className="bg-zinc-900 border-stone-300 border-b-2 sticky flex justify-between align-middle mx-4 px-4 top-0 pt-8 pb-8 sm:pt-12 sm:px-12 sm:relative sm:border-b-0">
      <div className="flex align-middle">
        <button className="relative h-10 w-10 z-20" onClick={() => setShowMenu(!showMenu)}>
          <div className={`hamburger ${showMenu ? "activeHamburger" : ""}`}></div>
        </button>
      </div>
      <h4 className="text-2xl md:text-5xl">melansons</h4>
      <AnimatePresence exitBeforeEnter>
        {showMenu && <NavMenu toggleShowMenu={toggleShowMenu} />}
      </AnimatePresence>
    </header>
  );
}

import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import NavMenu from "./navMenu";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="flex justify-between align-middle px-16 my-12">
      <div className="flex align-middle">
        <button className="relative h-10 w-10 z-10" onClick={() => setShowMenu(!showMenu)}>
          <div className={`hamburger ${showMenu ? "activeHamburger" : ""}`}></div>
        </button>
      </div>
      <h4 className="text-2xl md:text-5xl">melansons</h4>
      <AnimatePresence exitBeforeEnter>
        {showMenu && <NavMenu setShowMenu={setShowMenu} />}
      </AnimatePresence>
    </header>
  );
}

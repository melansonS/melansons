import React, { useState } from "react";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";
import { links } from "../utils/navConsts";
import NavMenu from "./navMenu";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="flex justify-between align-middle px-8 my-6">
      <div className="flex align-middle">
        <button className="relative h-10 w-10 z-10" onClick={() => setShowMenu(!showMenu)}>
          <div className={`hamburger ${showMenu ? "activeHamburger" : ""}`}></div>
        </button>
      </div>
      <div>
        {links.map((link) => {
          return (
            <Link key={`nav-link-${link.name}`} href={link.href}>
              {link.name}
            </Link>
          );
        })}
      </div>
      <h4 className="text-5xl">melansons</h4>
      <AnimatePresence exitBeforeEnter>
        {showMenu && <NavMenu setShowMenu={setShowMenu} />}
      </AnimatePresence>
    </header>
  );
}

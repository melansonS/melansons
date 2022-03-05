import Link from "next/link";
import React, { useState } from "react";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="flex justify-between align-middle px-8 my-6">
      <div className="flex align-middle">
        <button className="relative h-10 w-10 " onClick={() => setShowMenu(!showMenu)}>
          <div className={`hamburger ${showMenu ? "activeHamburger" : ""}`}></div>
        </button>
      </div>
      <div>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
      </div>
      <h4 className="text-5xl">melansons</h4>
    </header>
  );
}

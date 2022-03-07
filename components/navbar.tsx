import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

const menuVariants = {
  hidden: { x: `-100%` },
  enter: {
    x: 0,
  },
  exit: { x: "-100%" },
};

const menuItemsContainerVariants = {
  hidden: { y: 50 },
  enter: {
    y: 0,
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
};

const menuItemVariants = {
  hidden: { y: 20, opacity: 0 },
  enter: { y: 0, opacity: 1, transition: { duration: 0.3 } },
};

const links: { name: string; href: string }[] = [
  {
    name: "home",
    href: "/",
  },
  {
    name: "about",
    href: "/about",
  },
];

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const router = useRouter();

  const handleNavigate = (href: string) => {
    setShowMenu(false);
    router.push(href);
  };

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
        {showMenu && (
          <motion.div
            initial="hidden"
            animate="enter"
            exit="exit"
            variants={menuVariants}
            transition={{ duration: 0.3 }}
            className="fixed bg-zinc-800 w-full h-full top-0 left-0"
            key={`menu-${showMenu ? "visible" : "hidden"}`}
          >
            <motion.div className="w-52 my-52 mx-auto" variants={menuItemsContainerVariants}>
              {links.map((link) => {
                return (
                  <motion.div key={`motion-nav-link-${link.name}`} variants={menuItemVariants}>
                    <button
                      onClick={() => {
                        handleNavigate(link.href);
                      }}
                    >
                      {link.name}
                    </button>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

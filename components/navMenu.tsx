import React from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { links, MENU_TRANSITION_DURATION } from "../utils/navConsts";

type NavMenuProps = {
  setShowMenu: (value: boolean) => void;
};

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

export default function NavMenu({ setShowMenu }: NavMenuProps) {
  const router = useRouter();

  const handleNavigate = (href: string) => {
    setShowMenu(false);
    router.push(href);
  };

  return (
    <motion.div
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={menuVariants}
      transition={{ duration: MENU_TRANSITION_DURATION }}
      className="fixed bg-zinc-800 w-full h-full top-0 left-0 "
    >
      <div className="w-fit my-52 mx-auto flex flex-col sm:flex-row xs:flex-row">
        <motion.div className="p-10" variants={menuItemsContainerVariants}>
          {links.map((link) => {
            return (
              <motion.div
                className=""
                key={`motion-nav-link-${link.name}`}
                variants={menuItemVariants}
              >
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
        <div className="p-10">---------</div>
        <div className="p-10">melansons</div>
      </div>
    </motion.div>
  );
}

import React from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { links, MENU_TRANSITION_DURATION } from "../utils/navConsts";
import useBreakPoints from "../utils/usebreakpoints";
import Socials from "./socials";

type NavMenuProps = {
  setShowMenu: (value: boolean) => void;
};

const menuVariants = {
  hidden: { x: `-100%` },
  enter: {
    x: 0,
    transition: { duration: 0.5 },
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

const contactMeVariants = {
  hidden: { x: "20vw", opacity: 0 },
  enter: { x: 0, opacity: 1, transition: { duration: 0.5, delay: MENU_TRANSITION_DURATION * 3 } },
};

export default function NavMenu({ setShowMenu }: NavMenuProps) {
  const router = useRouter();
  const breakpoint = useBreakPoints();

  console.log(breakpoint);

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
      <div className="w-2/3 h-full text-center mx-auto pt-16 pb-16 flex justify-between flex-col md:flex-row">
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
        <div className="w-full h-1 border-stone-300 border-t-2 md:border-r-2 md:h-full md:w-1 md:border-t-0" />
        <div className="flex flex-row justify-end md:flex-col">
          <motion.div
            initial="hidden"
            animate="enter"
            variants={contactMeVariants}
            className="h-fit pb-6 text-left w-1/2"
          >
            <h4 className="text-2xl pb-4">Get in Touch</h4>
            <Socials />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

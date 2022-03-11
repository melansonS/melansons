import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { links, projectLinks, MENU_TRANSITION_DURATION } from "../utils/navConsts";
import Socials from "./socials";
import Link from "next/link";

interface INavMenuProps {
  toggleShowMenu: (value: boolean) => void;
}

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
  hidden: { x: 40, opacity: 0 },
  enter: { x: 0, opacity: 1, transition: { duration: 0.5, delay: MENU_TRANSITION_DURATION * 3 } },
};

const menuItemHover = {
  x: 10,
};

export default function NavMenu({ toggleShowMenu }: INavMenuProps) {
  const router = useRouter();

  const escapeNavMenu = (e: KeyboardEvent) => {
    if (e.key === "Escape") toggleShowMenu(false);
  };

  useEffect(() => {
    window.addEventListener("keyup", escapeNavMenu);
    return () => window.removeEventListener("keyup", escapeNavMenu);
  });

  return (
    <motion.div
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={menuVariants}
      transition={{ duration: MENU_TRANSITION_DURATION }}
      className="fixed bg-stone-200 dark:bg-zinc-800 w-full fillAvailable top-0 left-0 z-10 overflow-auto"
    >
      <div className="w-2/3 h-full mx-auto pt-16 pb-16 flex justify-between flex-col md:flex-row">
        <motion.div className="p-10 pt-2 w-full md:p-10" variants={menuItemsContainerVariants}>
          {links.map((link) => {
            const isCurrent = router.route === link.href;
            return (
              <motion.div
                key={`motion-nav-link-${link.name}`}
                variants={menuItemVariants}
                whileHover={menuItemHover}
                className="py-3 text-3xl md:py-6 md:text-4xl"
              >
                <Link href={link.href}>
                  <span className="hover:underline hover:cursor-pointer">
                    {isCurrent ? "◦ " : ""}
                    {link.name}
                  </span>
                </Link>
              </motion.div>
            );
          })}
          {projectLinks.map((projectLink) => {
            const isCurrent = router.asPath === `/portfolio${projectLink.href}`;
            return (
              <motion.div
                key={`motion-nav-project-${projectLink.name}`}
                variants={menuItemVariants}
                whileHover={menuItemHover}
                className="pb-2 text-lg md:pb-4 md:text-xl"
              >
                <Link href={`/portfolio${projectLink.href}`}>
                  <span className="hover:underline hover:cursor-pointer">
                    {isCurrent ? "◦ " : ""}
                    {projectLink.name}
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
        <div className="w-full h-1 border-zinc-900 dark:border-stone-300 border-t-2 md:border-r-2 md:h-full md:w-1 md:border-t-0" />
        <div className="flex flex-row w-full md:flex-col md:justify-end ">
          <motion.div
            initial="hidden"
            animate="enter"
            variants={contactMeVariants}
            className="h-fit pb-6 pl-6 text-left md:pl-16"
          >
            <h4 className="text-2xl pb-4">Get in touch</h4>
            <Socials />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

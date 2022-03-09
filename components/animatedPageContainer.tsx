import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { MENU_TRANSITION_DURATION } from "../utils/navConsts";

type AnimatedPageContainerProps = {
  children: ReactNode;
};

const variants = {
  hidden: { opacity: 0, y: 20 },
  enter: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 30 },
};

const AnimatedPageContainer = ({ children }: AnimatedPageContainerProps): JSX.Element => (
  <div className="flex grow">
    <motion.main
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ type: { ease: "easeInOut" }, delay: MENU_TRANSITION_DURATION }}
      className="flex flex-col items-start w-full px-20 py-10"
    >
      {children}
    </motion.main>
  </div>
);

export default AnimatedPageContainer;

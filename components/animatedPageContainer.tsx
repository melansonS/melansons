import React, { ReactNode } from "react";
import { motion } from "framer-motion";

type AnimatedPageContainerProps = {
  children: ReactNode;
};

const variants = {
  hidden: { opacity: 0, y: 20 },
  enter: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 30 },
};

const AnimatedPageContainer = ({ children }: AnimatedPageContainerProps): JSX.Element => (
  <div className="min-h-screen">
    <motion.main
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ type: { ease: "easeInOut" } }}
      className="flex flex-col items-start w-full p-20"
    >
      {children}
    </motion.main>
  </div>
);

export default AnimatedPageContainer;

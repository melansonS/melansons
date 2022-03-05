import React from "react";
import { motion } from "framer-motion";

const AnimatedPageContainer = ({
  children,
}: {
  children: React.ReactChildren | React.ReactChild;
}) => {
  const container = {
    hidden: { opacity: 0, y: "15px" },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 1,
        duration: 1,
      },
    },
  };
  return (
    <motion.div variants={container} initial="hidden" animate="show">
      {children}
    </motion.div>
  );
};

export default AnimatedPageContainer;

import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

interface IAnimateOnScrollIntoViewProps {
  animateOut?: boolean;
  variants: {};
  children: React.ReactNode;
}

const AnimateOnScrollIntoView = ({
  animateOut,
  variants,
  children,
}: IAnimateOnScrollIntoViewProps) => {
  const { ref, inView } = useInView();
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("show");
    }
    if (!inView && animateOut) {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className="w-full h-full"
    >
      {children}
    </motion.div>
  );
};

export default AnimateOnScrollIntoView;

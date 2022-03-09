import { motion } from "framer-motion";
import type { NextPage } from "next";
import AnimaterPageContainer from "../components/animatedPageContainer";

const variants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 0.5,
    transition: {
      delay: 0.5,
      duration: 1.5,
    },
  },
};

const pyramidsHover = {
  scale: 1.1,
  opacity: 1,
  transition: { duration: 0.8 },
};

const Home: NextPage = () => {
  return (
    <AnimaterPageContainer>
      <div className="pt-32">
        <div className="w-full flex justify-center text-3xl pt-4 transition-colors">
          <h1 className="text-3xl pb-6 font-bold"> Hi, I'm Samuel Melanson</h1>
        </div>
        <p>
          I am a full stack web developer. I spend my days working with HTML CSS, and Javascript
          (except it's really <code>Typescript</code>). Most of the things I build these days use
          some flavour of React and Node as well a whichever database (<code>SQL</code> or{" "}
          <code>NoSQl</code>) is fitting.
        </p>
        <div className="flex justify-center w-full  pt-16 pb-8">
          <motion.img
            initial="hidden"
            animate="show"
            variants={variants}
            whileHover={pyramidsHover}
            whileTap={pyramidsHover}
            className="hover:cursor-pointer"
            src="/pyramids.gif"
            alt="rotating prism"
            style={{ width: "190px", height: "190px" }}
          />
        </div>
      </div>
    </AnimaterPageContainer>
  );
};

export default Home;

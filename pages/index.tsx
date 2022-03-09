import { motion } from "framer-motion";
import type { NextPage } from "next";
import AnimaterPageContainer from "../components/animatedPageContainer";
import PageTitle from "../components/pageTitle";

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
};

const Home: NextPage = () => {
  return (
    <AnimaterPageContainer>
      <div className="pt-2">
        <div className="w-full flex justify-center text-3xl pt-4 transition-colors">
          <PageTitle content="Hi, I'm Samuel Melanson" />
        </div>
        <p>
          I am a full stack web developer. I spend my days working with HTML CSS, and Javascript
          (except it's really <code>Typescript</code>). Most of the things I build these days use
          some flavour of React and Node as well a whichever database (<code>SQL</code> -{" "}
          <code>NoSQl</code>) fits the project
        </p>
        <div className="flex justify-center w-full pt-12 pb-8 z-0">
          <motion.div
            initial="hidden"
            animate="show"
            variants={variants}
            whileHover={pyramidsHover}
            transition={{ duration: 0.8 }}
            className="select-none z-0 hover:cursor-pointer"
          >
            <img
              src="/pyramids.gif"
              alt="rotating prism"
              style={{ width: "190px", height: "190px" }}
              className="pointer-events-none"
            ></img>
          </motion.div>
        </div>
      </div>
    </AnimaterPageContainer>
  );
};

export default Home;

import type { NextPage } from "next";
import { motion } from "framer-motion";
import Link from "next/link";

const About: NextPage = () => {
  return (
    <div>
      <div className="text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              scale: 0.8,
            },
            visible: {
              scale: 1,
              transition: {
                delay: 0.4,
              },
            },
          }}
        >
          <h1 className="text-3xl font-bold underline ce">About</h1>
        </motion.div>
      </div>
      <Link href="/">Home</Link>
      <div>
        <p>LOREM IPSUM</p>
        <p>LOREM IPSUM</p>
        <p>LOREM IPSUM</p>
        <p>LOREM IPSUM</p>
        <p>LOREM IPSUM</p>
        <p>LOREM IPSUM</p>
        <p>LOREM IPSUM</p>
        <p>LOREM IPSUM</p>
        <p>LOREM IPSUM</p>
        <p>LOREM IPSUM</p>
        <p>LOREM IPSUM</p>
        <p>LOREM IPSUM</p>
        <p>LOREM IPSUM</p>
        <p>LOREM IPSUM</p>
        <p>LOREM IPSUM</p>
        <p>LOREM IPSUM</p>
        <p>LOREM IPSUM</p>
        <p>LOREM IPSUM</p>
        <p>LOREM IPSUM</p>
        <p>LOREM IPSUM</p>
        <p>LOREM IPSUM</p>
        <p>LOREM IPSUM</p>
        <p>LOREM IPSUM</p>
        <p>LOREM IPSUM</p>
        <p>LOREM IPSUM</p>
        <p>LOREM IPSUM</p>
        <p>LOREM IPSUM</p>
        <p>LOREM IPSUM</p>
        <p>LOREM IPSUM</p>
        <p>LOREM IPSUM</p>
        <p>LOREM IPSUM</p>
        <p>LOREM IPSUM</p>
        <p>LOREM IPSUM</p>
        <p>LOREM IPSUM</p>
        <p>LOREM IPSUM</p>
        <p>LOREM IPSUM</p>
        <p>LOREM IPSUM</p>
        <p>LOREM IPSUM</p>
        <p>LOREM IPSUM</p>
        <p>LOREM IPSUM</p>
        <p>LOREM IPSUM</p>
        <p>LOREM IPSUM</p>
        <p>LOREM IPSUM</p>
        <p>LOREM IPSUM</p>
        <p>LOREM IPSUM</p>
        <p>LOREM IPSUM</p>
        <p>LOREM IPSUM</p>
      </div>
    </div>
  );
};

export default About;

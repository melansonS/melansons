import type { NextPage } from "next";
import { motion } from "framer-motion";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div>
      <main className="grow">
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
          <h1 className="text-3xl font-bold text-center">Tailwind css!</h1>
        </motion.div>
        <Link href="/about">About</Link>

        <h1>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
      </main>
    </div>
  );
};

export default Home;

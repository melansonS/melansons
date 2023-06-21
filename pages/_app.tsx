import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import Navbar from "../components/navbar";
import LayoutFooter from "../components/layout/layoutFooter";
import LayoutHead from "../components/layout/layoutHead";

function MyApp({ Component, pageProps, router }: AppProps) {
  const bareBonesPages = ["/adn-portfolio"];
  const url = `http://localhost:3000${router.route}`;

  return (
    <div>
      <LayoutHead />
      <div className="flex flex-col justify-between mx-auto h-full min-h-screen max-w-screen-lg">
        <Navbar bareBones={bareBonesPages.includes(router.route)} />
        <AnimatePresence mode="wait">
          <Component {...pageProps} key={url} />
        </AnimatePresence>
        <LayoutFooter bareBones={bareBonesPages.includes(router.route)} />
      </div>
    </div>
  );
}

export default MyApp;

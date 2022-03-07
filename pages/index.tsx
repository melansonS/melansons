import type { NextPage } from "next";
import Link from "next/link";
import AnimaterPageContainer from "../components/animatedPageContainer";

const Home: NextPage = () => {
  return (
    <AnimaterPageContainer>
      <Link href="/about">About</Link>
      <h1>
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>
    </AnimaterPageContainer>
  );
};

export default Home;

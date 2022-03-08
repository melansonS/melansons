import type { NextPage } from "next";
import AnimaterPageContainer from "../components/animatedPageContainer";

const Home: NextPage = () => {
  return (
    <AnimaterPageContainer>
      <h1 className="text-3xl pb-6 font-bold"> Hi, I'm Samuel Melanson</h1>
      <p>
        I am a full stack web developer. I spend my days working with HTML CSS and Javascript
        (except it's really <code>Typescript</code>). Most of the things I build these days use some
        flavour of React and Node as well a whichever database (<code>SQL</code> or{" "}
        <code>NoSQl</code>) is fitting.
      </p>
    </AnimaterPageContainer>
  );
};

export default Home;

import type { NextPage } from "next";
import AnimatedPageContainer from "../components/animatedPageContainer";
import PageTitle from "../components/pageTitle";

const About: NextPage = () => {
  return (
    <AnimatedPageContainer>
      <div>
        <PageTitle content="About" />
        <p>
          I am a Montreal based software developer. Beyond that, I am also a Music loving, Music
          playing, Book reading, Sunshine seeking, Game playing, Bike riding kind of guy. I am
          Creative and Curious, Confident and Caring, and much more still.
        </p>
        <br></br>
        <p>
          If anything, working in tech has reminded me time and again that "The more you know, the
          more you realize you don't know." Understanding this has helped me grow the confidence to
          focus on the things that I am interested in instead of carrying the weight of feeling like
          I <i>have</i> to know <i>everything</i>.
        </p>
        <br></br>
        <p>
          Always happy to hear about new and exciting opportunities. Feel free to reach out if
          you've got any questions or if you'd just like to chat.
        </p>
      </div>
    </AnimatedPageContainer>
  );
};

export default About;

import type { NextPage } from "next";
import AnimatedPageContainer from "../components/animatedPageContainer";

const About: NextPage = () => {
  return (
    <AnimatedPageContainer>
      <div>
        <h1 className="text-3xl pb-6 font-bold">About</h1>
        <p>
          I am a Montreal based software developer. But beyond that, I am also a Music loving, Music
          playing, Book reading, Sunshine seeking, Game playing, Netflix binging kind of guy. I am
          Creative and Curious, Confident and Caring, and much more still.
        </p>
        <br></br>
        <p>
          If anything, working in tech has reminded me time and again that "The more you know, the
          more you realize you don't know." Undestanding this has helped me grow the confidence to
          choose to focus on the things that I am actually interested in as opposed to carrying the
          weight of feeling like I <i>have</i> to know <i>everything</i>.
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

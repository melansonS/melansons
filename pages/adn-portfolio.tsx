import type { NextPage } from "next";
import React from "react";
import AnimatedPageContainer from "../components/animatedPageContainer";
import ModalButton from "../components/modal/ModalContent";
import PageTitle from "../components/pageTitle";

const AdnPortfolio = () => {
  return (
    <AnimatedPageContainer>
      <div>
        <div></div>
        <PageTitle content="ADN!!!!" />
        <p>
          I am a Montreal based software developer. But beyond that, I am also a Music loving, Music
          playing, Book reading, Sunshine seeking, Game playing, Netflix binging kind of guy. I am
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

      <div className="flex flex-wrap">
        <ModalButton src="/full render v1.png">
          <img src="/full render v1.png" className="halfSizeImage" />
        </ModalButton>
        <ModalButton src="/full render v3_clay.png">
          <img src="/full render v3_clay.png" className="quarterSizeImage" />
        </ModalButton>
      </div>

      <div className="flex flex-wrap">
        <ModalButton src="/lamp v2.png">
          <img src="/lamp v2.png" className="quarterSizeImage" />
        </ModalButton>
        <ModalButton src="/lamp v2_clay.png">
          <img src="/lamp v2_clay.png" className="quarterSizeImage" />
        </ModalButton>
      </div>

      <div className="flex flex-wrap">
        <ModalButton src="/radio v1.png">
          <img src="/radio v1.png" className="quarterSizeImage" />
        </ModalButton>
        <ModalButton src="/radio v1_clay.png">
          <img src="/radio v1_clay.png" className="quarterSizeImage" />
        </ModalButton>
      </div>

      <div className="flex flex-wrap">
        <ModalButton src="/books v1.png">
          <img src="/books v1.png" className="quarterSizeImage" />
        </ModalButton>
        <ModalButton src="/books v1_clay.png">
          <img src="/books v1_clay.png" className="quarterSizeImage" />
        </ModalButton>
      </div>
    </AnimatedPageContainer>
  );
};

export default AdnPortfolio;

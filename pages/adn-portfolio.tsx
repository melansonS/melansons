import type { NextPage } from "next";
import React, { LegacyRef, useEffect, useState } from "react";
import AnimatedPageContainer from "../components/animatedPageContainer";
import CloseIcon from "../components/icons/closeIcon";
import PageTitle from "../components/pageTitle";

interface IModalContentProps {
  title: string;
  src: string;
  closeModal: () => void;
}

const ModalContent = ({ closeModal, title, src }: IModalContentProps) => {
  const escapeNavMenu = (e: KeyboardEvent) => {
    if (e.key === "Escape") closeModal();
  };

  useEffect(() => {
    window.addEventListener("keyup", escapeNavMenu);
    return () => window.removeEventListener("keyup", escapeNavMenu);
  });

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as Element;
    if (target.id === "modal") {
      closeModal();
    }
  };
  return (
    <div
      className="modal fade fixed top-0 left-0 w-full h-full flex justify-center items-center outline-none overflow-x-hidden overflow-y-auto bg-zinc-800 bg-opacity-90"
      id="modal"
      aria-labelledby="exampleModalCenterTitle"
      aria-modal="true"
      role="dialog"
      onClick={(e) => handleClick(e)}
    >
      <button
        type="button"
        className="btn-close box-content w-4 h-4 p-4 stroke-stone-300 opacity-90 focus:opacity-100  hover:opacity-100 absolute top-0 right-0"
        data-bs-dismiss="modal"
        aria-label="Close"
        onClick={closeModal}
      >
        <CloseIcon height={24} width={24} />
      </button>
      <div className="h-fit">
        <img src={src} className="max-h-screen max-w-screen  p-4" />
      </div>
    </div>
  );
};

interface IModalButtonProps {
  title: string;
  src: string;
  children: React.ReactNode;
}

const ModalButton = ({ children, title, src }: IModalButtonProps) => {
  const [showModal, setShowModal] = useState(false);
  const closeModal = () => setShowModal(false);
  return (
    <>
      <div className="">
        <button
          type="button"
          className="inline-block rounded"
          onClick={() => setShowModal(!showModal)}
        >
          {children}
        </button>
      </div>
      {showModal && <ModalContent title={title} src={src} closeModal={closeModal} />}
    </>
  );
};

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
      <ModalButton title="first" src="https://placekitten.com/500/500">
        <div>
          <img src="https://placekitten.com/500/500" className="halfSizeImage" />
        </div>
      </ModalButton>
      <ModalButton title="second" src="https://placekitten.com/1000/1000">
        <div>
          <img src="https://placekitten.com/1000/1000" className="halfSizeImage" />
        </div>
      </ModalButton>
      <ModalButton title="third" src="https://placekitten.com/1600/900">
        <div>
          <img src="https://placekitten.com/1600/900" className="quarterSizeImage" />
        </div>
      </ModalButton>
      <ModalButton title="third" src="https://placekitten.com/900/1600">
        <div>
          <img src="https://placekitten.com/900/1600" className="eighthSizeImage" />
        </div>
      </ModalButton>
    </AnimatedPageContainer>
  );
};

export default AdnPortfolio;

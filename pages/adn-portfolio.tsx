import type { NextPage } from "next";
import React from "react";
import AnimatedPageContainer from "../components/animatedPageContainer";
import ModalButton from "../components/modal/modalButton";
import PageTitle from "../components/pageTitle";

const AdnPortfolio = () => {
  return (
    <AnimatedPageContainer>
      <div className="mb-12">
        <PageTitle content="Campus ADN" />
        <p className="font-bold">Portfolio conçu pour le programme de Modélisation 3D</p>
      </div>

      <div className="my-6">
        <h1 className="text-2xl font-bold pt-2 pb-4 md:pb-6">Firewatch</h1>

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
          <ModalButton src="/radio v2_clay.png">
            <img src="/radio v2_clay.png" className="quarterSizeImage" />
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
      </div>

      <div className="my-6">
        <h1 className="text-2xl font-bold pt-2 pb-4 md:pb-6">Toy Fishy</h1>

        <div className="flex flex-wrap">
          <video controls className="halfSizeImage md:ml-1.5 mb-8">
            <source src="Toy Fishy Video.mp4" type="video/webm"></source>
          </video>
        </div>

        <div className="flex flex-wrap">
          <ModalButton src="/Toy Fishy v2.png">
            <img src="/Toy Fishy v2.png" className="quarterSizeImage" />
          </ModalButton>
          <ModalButton src="/Toy Fishy v3_clay.png">
            <img src="/Toy Fishy v3_clay.png" className="quarterSizeImage" />
          </ModalButton>
        </div>
      </div>
    </AnimatedPageContainer>
  );
};

export default AdnPortfolio;

import React, { useState } from "react";
import ModalContent from "./modalButton";

interface IModalButtonProps {
  src: string;
  children: React.ReactNode;
}

const ModalButton = ({ children, src }: IModalButtonProps) => {
  const [showModal, setShowModal] = useState(false);
  const closeModal = () => setShowModal(false);
  return (
    <>
      <div className="mr-1.5">
        <button
          type="button"
          className="inline-block rounded"
          onClick={() => setShowModal(!showModal)}
        >
          {children}
        </button>
      </div>
      {showModal && <ModalContent src={src} closeModal={closeModal} />}
    </>
  );
};

export default ModalButton;

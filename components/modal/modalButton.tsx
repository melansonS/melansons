import React, { useState } from "react";
import ModalContent from "./modalContent";

interface IModalButtonProps {
  src?: string;
  content?: string;
  children: React.ReactNode;
}

const ModalButton = ({ children, src, content }: IModalButtonProps) => {
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
      {showModal && (
        <ModalContent closeModal={closeModal}>
          {src && <img src={src} className="max-h-screen max-w-screen p-4" />}
          {content && <div>{content}</div>}
        </ModalContent>
      )}
    </>
  );
};

export default ModalButton;

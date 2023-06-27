import React, { ReactNode, useEffect } from "react";
import CloseIcon from "../icons/closeIcon";

interface IModalContentProps {
  closeModal: () => void;
  children: ReactNode;
}

const ModalContent = ({ closeModal, children }: IModalContentProps) => {
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
        className="btn-close box-content p-4 stroke-stone-300 opacity-90 focus:opacity-100  hover:opacity-100 absolute top-0 right-0"
        data-bs-dismiss="modal"
        aria-label="Close"
        onClick={closeModal}
      >
        <CloseIcon height={24} width={24} />
      </button>
      <div className="h-fit">{children}</div>
    </div>
  );
};

export default ModalContent;

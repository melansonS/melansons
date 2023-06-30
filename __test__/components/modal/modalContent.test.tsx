import { screen, fireEvent, render } from "@testing-library/react";
import ModalContent from "@components/modal/modalContent";
import "@testing-library/jest-dom";

const closeModalMock = jest.fn();

beforeEach(() => {
  closeModalMock.mockClear();
});

describe("Modal Content", () => {
  it("renders the Modal Content", () => {
    render(
      <ModalContent closeModal={closeModalMock}>
        <div data-testid="modal-div-content">MOCK</div>
      </ModalContent>
    );

    const element = screen.getByTestId("modal-div-content");
    expect(element).toBeInTheDocument();
  });

  it("calls closeModal when clicked", () => {
    render(
      <ModalContent closeModal={closeModalMock}>
        <div data-testid="modal-div-content">MOCK</div>
      </ModalContent>
    );

    const modal = screen.getByRole("dialog");
    fireEvent.click(modal);
    expect(closeModalMock).toBeCalled();
  });

  it("calls closeModal on `ESC` keyUp", () => {
    render(
      <ModalContent closeModal={closeModalMock}>
        <div data-testid="modal-div-content">MOCK</div>
      </ModalContent>
    );

    const modal = screen.getByRole("dialog");
    fireEvent.keyUp(modal, { key: "Escape" });
    expect(closeModalMock).toBeCalled();
  });
});

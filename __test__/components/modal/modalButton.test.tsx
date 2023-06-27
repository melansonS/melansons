import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import ModalButton from "@components/modal/modalButton";
import "@testing-library/jest-dom";

describe("Modal Button", () => {
  it("renders a Modal Button with it's children", () => {
    render(
      <ModalButton>
        <h1>Modal Button</h1>
      </ModalButton>
    );

    const button = screen.getByRole("button");
    const heading = screen.getByRole("heading");

    expect(button).toBeInTheDocument();
    expect(heading).toHaveTextContent(/Modal Button/i);
  });

  it("renders Modal Content when button is pressed", async () => {
    const src = "/full render v1.png";
    render(
      <ModalButton src={src}>
        <h1>Modal Button</h1>
      </ModalButton>
    );

    const button = screen.getByRole("button");
    fireEvent.click(button);

    await waitFor(() => {
      expect(screen.getByRole("img")).toHaveAttribute("src", src);
    });
  });
});

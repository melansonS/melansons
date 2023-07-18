import { screen, render } from "@testing-library/react";
import Home from "@pages/index";
import "@testing-library/jest-dom";

describe("Home", () => {
  it("renders the home page", () => {
    render(<Home />);
    const headingElement = screen.getByRole("heading");
    expect(headingElement).toHaveTextContent(/Hi, I'm Samuel Melanson/i);

    const contentParagraphElement = screen.getByTestId("content-paragraph");
    expect(contentParagraphElement).toBeInTheDocument();

    const pyramidsGifElement = screen.getByTestId("pyramids-gif");
    expect(pyramidsGifElement).toBeInTheDocument();
  });
});

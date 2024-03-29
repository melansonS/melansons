import { render, screen } from "@testing-library/react";
import About from "@pages/about";
import "@testing-library/jest-dom";

describe("About", () => {
  it("renders a heading", () => {
    render(<About />);

    const heading = screen.getByRole("heading", {
      name: /About/i,
    });

    expect(heading).toBeInTheDocument();
  });
});

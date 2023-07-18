import { render, screen } from "@testing-library/react";
import AdnPortfolio from "@pages/adn-portfolio";
import "@testing-library/jest-dom";

describe("AdnPortfolio", () => {
  it("renders a heading", () => {
    render(<AdnPortfolio />);

    const heading = screen.getByRole("heading", {
      name: /Campus ADN/i,
    });

    expect(heading).toBeInTheDocument();
  });
});

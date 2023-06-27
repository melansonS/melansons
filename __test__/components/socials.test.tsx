import { render, screen } from "@testing-library/react";
import Socials from "@components/socials";
import "@testing-library/jest-dom";

describe("Socials", () => {
  it("renders two links", () => {
    render(<Socials />);

    const links = screen.getAllByRole("link");

    expect(links[0]).toBeInTheDocument();
    expect(links[1]).toBeInTheDocument();
  });
});

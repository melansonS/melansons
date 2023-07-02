import { screen, render, fireEvent } from "@testing-library/react";
import NavMenu from "@components/navMenu";
import "@testing-library/jest-dom";
import { useRouter } from "next/router";
import { links, projectLinks } from "@utils/navConsts";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

describe("Nav Menu", () => {
  const toggleShowMenuMock = jest.fn();

  it("Renders a Nav Menu", () => {
    (useRouter as jest.Mock).mockImplementation(() => ({ route: links[0].href, asPath: "string" }));
    render(<NavMenu toggleShowMenu={toggleShowMenuMock} />);

    const menuElement = screen.getByTestId("nav-menu");
    expect(menuElement).toBeInTheDocument();
  });

  it("Calls the toggle function when the `ESC` key is pressed", () => {
    (useRouter as jest.Mock).mockImplementation(() => ({ route: links[0].href, asPath: "string" }));
    render(<NavMenu toggleShowMenu={toggleShowMenuMock} />);

    const menuElement = screen.getByTestId("nav-menu");
    fireEvent.keyUp(menuElement, { key: "Escape" });
    expect(toggleShowMenuMock).toBeCalled();
  });

  it("add `◦` to denote the 'current' Link page", () => {
    (useRouter as jest.Mock).mockImplementation(() => ({
      route: links[0].href,
      asPath: "string",
    }));
    render(<NavMenu toggleShowMenu={toggleShowMenuMock} />);

    const currentElement = screen.getByTestId("current-element");
    expect(currentElement).toBeInTheDocument();
  });

  it("add `◦` to denote the 'current' project Link page", () => {
    (useRouter as jest.Mock).mockImplementation(() => ({
      route: "string",
      asPath: `/portfolio${projectLinks[0].href}`,
    }));
    render(<NavMenu toggleShowMenu={toggleShowMenuMock} />);

    const currentElement = screen.getByTestId("current-element");
    expect(currentElement).toBeInTheDocument();
  });
});

import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Navbar from "@components/navbar";
import "@testing-library/jest-dom";

import { useRouter } from "next/router";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));
(useRouter as jest.Mock).mockReturnValue({
  query: {},
  push: () => {},
});

describe("Navbar", () => {
  beforeAll(() => {
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // Deprecated
        removeListener: jest.fn(), // Deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
  });

  it("renders a navbar", () => {
    render(<Navbar bareBones={false} />);

    const heading = screen.getByRole("heading");
    const moonIconSvg = screen.getByTitle(/moon icon/i);
    const button = screen.getByTestId("navmenu-toggle-button");
    const navMenu = screen.queryByTestId("nav-menu");

    expect(heading).toHaveTextContent(/melanson\[s\]/i);
    expect(moonIconSvg).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(navMenu).not.toBeInTheDocument();
  });

  it("to not render nav menu toggle when passed barebones prop", () => {
    render(<Navbar bareBones={true} />);
    const button = screen.queryByTestId("navmenu-toggle-button");
    expect(button).not.toBeInTheDocument();
  });

  it("renders nav menu when toggled", () => {
    render(<Navbar />);
    const button = screen.getByTestId("navmenu-toggle-button");
    fireEvent.click(button);

    const navMenu = screen.getByTestId("nav-menu");
    expect(navMenu).toBeInTheDocument();
    const hamburgerElement = screen.getByTestId("menu-hamburger");
    expect(hamburgerElement.classList.contains("activeHamburger")).toBe(true);
  });

  it("toggles the menu when `toggleShowMenu` is called from <NavMenu/>", async () => {
    render(<Navbar />);
    const button = screen.getByTestId("navmenu-toggle-button");
    fireEvent.click(button);

    const navMenu = screen.getByTestId("nav-menu");
    fireEvent.keyUp(navMenu, { key: "Escape" });
    await waitFor(() => {
      expect(screen.queryByTestId("nav-menu")).not.toBeInTheDocument();
    });
  });
});

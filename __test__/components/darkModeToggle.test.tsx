import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import DarkmodeToggle from "@components/darkModeToggle";
import "@testing-library/jest-dom";

describe("Dark mode Toggle", () => {
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
  it("renders a button", () => {
    render(<DarkmodeToggle />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
  it("renders a moon icon Svg", () => {
    render(<DarkmodeToggle />);
    const moonIconSvg = screen.getByTitle(/moon icon/i);
    expect(moonIconSvg).toBeInTheDocument();
  });

  it("renders a sun icon when toggled", async () => {
    render(<DarkmodeToggle />);
    const toggleButton = screen.getByRole("button");
    fireEvent.click(toggleButton);
    await waitFor(() => {
      expect(screen.getByTitle(/sun icon/i)).toBeInTheDocument();
    });
  });
});

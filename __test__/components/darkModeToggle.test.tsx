import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import DarkmodeToggle from "@components/darkModeToggle";
import "@testing-library/jest-dom";
import { useBreakPoints } from "@utils/usebreakpoints";

jest.mock("../../utils/usebreakpoints", () => ({
  useBreakPoints: jest.fn().mockImplementation(() => "sm"),
}));

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
  afterEach(() => {
    document.body.innerHTML = "";
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

  it("documentElement.classList does not contain 'dark' by default", () => {
    render(<DarkmodeToggle />);
    expect(document.documentElement.classList.contains("dark")).toBe(false);
  });

  it("adds 'dark' to the documentelement.classList", async () => {
    render(<DarkmodeToggle />);
    const toggleButton = screen.getByRole("button");
    fireEvent.click(toggleButton);
    await waitFor(() => {
      expect(document.documentElement.classList.contains("dark")).toBe(true);
    });
  });

  it("removes 'dark' from documentElement.classList when toggled back off", async () => {
    render(<DarkmodeToggle />);
    const toggleButton = screen.getByRole("button");
    fireEvent.click(toggleButton); // toggle on -> adds 'dark'

    await waitFor(() => {
      expect(screen.getByTitle(/sun icon/i)).toBeInTheDocument();
      expect(document.documentElement.classList.contains("dark")).toBe(true);
    });

    const toggleButton2 = screen.getByRole("button");
    fireEvent.click(toggleButton2); //toggled back off -> removes 'dark'
    await waitFor(() => {
      expect(screen.getByTitle(/moon icon/i)).toBeInTheDocument();
      expect(document.documentElement.classList.contains("dark")).toBe(false);
    });
  });

  it("renders icons sith appropriate height at different breakpoints", () => {
    (useBreakPoints as jest.Mock).mockImplementation(() => "sm");
    const { rerender } = render(<DarkmodeToggle />);

    const smMoonIconElement = screen.getByTestId(/moon-icon/i);
    expect(smMoonIconElement).toHaveAttribute("height", "24");

    (useBreakPoints as jest.Mock).mockImplementation(() => "lg");
    rerender(<DarkmodeToggle />);

    const lgMoonIconElement = screen.getByTestId(/moon-icon/i);
    expect(lgMoonIconElement).toHaveAttribute("height", "30");
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

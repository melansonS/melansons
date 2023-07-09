import { screen, render } from "@testing-library/react";
import MoonIcon from "@components/icons/moonIcon";
import "@testing-library/jest-dom";

describe("Moon Icon", () => {
  const height = 30;
  const width = 30;
  it("renders a Sun Icon", () => {
    render(<MoonIcon height={height} width={width} />);

    const element = screen.getByTitle(/moon icon/i);
    expect(element).toBeInTheDocument();

    const svg = screen.getByTestId(/moon-icon/i);
    expect(svg).toHaveAttribute("height", height.toString());
    expect(svg).toHaveAttribute("width", width.toString());
  });
});

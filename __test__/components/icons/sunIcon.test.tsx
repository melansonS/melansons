import { screen, render } from "@testing-library/react";
import SunIcon from "@components/icons/sunIcon";
import "@testing-library/jest-dom";

describe("Sun Icon", () => {
  const height = 30;
  const width = 30;
  it("renders a Sun Icon", () => {
    render(<SunIcon height={height} width={width} />);

    const element = screen.getByTitle(/sun icon/i);
    expect(element).toBeInTheDocument();

    const svg = screen.getByTestId(/sun-icon/i);
    expect(svg).toHaveAttribute("height", height.toString());
    expect(svg).toHaveAttribute("width", width.toString());
  });
});

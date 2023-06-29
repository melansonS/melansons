import { screen, render } from "@testing-library/react";
import CloseIcon from "@components/icons/closeIcon";
import "@testing-library/jest-dom";

describe("Close Icon", () => {
  const height = 30;
  const width = 30;
  it("renders a Sun Icon", () => {
    render(<CloseIcon height={height} width={width} />);

    const element = screen.getByTitle(/close icon/i);
    expect(element).toBeInTheDocument();

    const svg = screen.getByTestId(/closeIcon/i);
    expect(svg).toHaveAttribute("height", height.toString());
    expect(svg).toHaveAttribute("width", width.toString());
  });
});

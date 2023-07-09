import { render, screen } from "@testing-library/react";
import Custom404 from "@pages/404";
import "@testing-library/jest-dom";
import { useRouter } from "next/router";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

(useRouter as jest.Mock).mockReturnValue({
  query: {},
  push: jest.fn(),
});

describe("Custom 404", () => {
  it("calls router.push to redirect the user back to the homepage", () => {
    render(<Custom404 />);
    expect(useRouter().push).toBeCalled();
  });
});

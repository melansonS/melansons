import { screen, render } from "@testing-library/react";
import AnimatedPageContainer from "@components/animatedPageContainer";
import "@testing-library/jest-dom";

describe("Animated Page Container", () => {
  it("renders the animated page container", () => {
    render(
      <AnimatedPageContainer>
        <div data-testid="test-child">MOCK</div>
      </AnimatedPageContainer>
    );
    const mainElement = screen.getByRole("main");
    expect(mainElement).toBeInTheDocument();

    const childElement = screen.getByTestId("test-child");
    expect(childElement).toBeInTheDocument();
    expect(childElement).toHaveTextContent(/mock/i);
  });
});

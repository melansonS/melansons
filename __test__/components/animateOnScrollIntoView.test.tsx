import { screen, render, waitFor } from "@testing-library/react";
import AnimateOnScrollIntoView from "@components/animateOnScrollIntoView";
import "@testing-library/jest-dom";
import { useInView } from "react-intersection-observer";

async function sleep(seconds: number) {
  return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
}

jest.mock("react-intersection-observer", () => ({
  useInView: jest.fn(),
}));

describe("Animated Page Container", () => {
  const scrollVariants = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        delay: 0.3,
        duration: 0.8,
      },
    },
  };
  beforeAll(() => {
    const intersectionObserverMock = () => ({
      observe: () => null,
      unobserve: () => null,
      disconnect: () => null,
    });
    window.IntersectionObserver = jest.fn().mockImplementation(intersectionObserverMock);
  });

  it("renders the animate on Scroll into  View wrapper and it's children", () => {
    (useInView as jest.Mock).mockImplementation(() => ({ ref: undefined, inView: false }));
    render(
      <AnimateOnScrollIntoView variants={scrollVariants}>
        <div data-testid="test-child">MOCK</div>
      </AnimateOnScrollIntoView>
    );
    const wrapperElement = screen.getByTestId("animate-on-scroll-into-view");
    expect(wrapperElement).toBeInTheDocument();

    const childElement = screen.getByTestId("test-child");
    expect(childElement).toBeInTheDocument();
    expect(childElement).toHaveTextContent(/mock/i);
  });

  it("animates into view when `inView`", async () => {
    (useInView as jest.Mock).mockImplementation(() => ({ ref: undefined, inView: true }));
    render(
      <AnimateOnScrollIntoView animateOut={true} variants={scrollVariants}>
        <div data-testid="test-child">MOCK</div>
      </AnimateOnScrollIntoView>
    );
    const wrapperElement = screen.getByTestId("animate-on-scroll-into-view");
    expect(wrapperElement).toBeInTheDocument();

    const childElement = screen.getByTestId("test-child");
    expect(childElement).toBeInTheDocument();
    expect(childElement).toHaveTextContent(/mock/i);

    await sleep(scrollVariants.show.transition.duration);
    await waitFor(async () => {
      expect(wrapperElement).toHaveAttribute("style", "opacity: 1;");
    });
  });

  it("is hidden when passed `animateOut` prop", () => {
    (useInView as jest.Mock).mockImplementation(() => ({ ref: undefined, inView: false }));
    render(
      <AnimateOnScrollIntoView animateOut={true} variants={scrollVariants}>
        <div data-testid="test-child">MOCK</div>
      </AnimateOnScrollIntoView>
    );
    const wrapperElement = screen.getByTestId("animate-on-scroll-into-view");
    expect(wrapperElement).toHaveAttribute("style", "opacity: 0;");

    const childElement = screen.getByTestId("test-child");
    expect(childElement).toBeInTheDocument();
    expect(childElement).toHaveTextContent(/mock/i);
  });
});

import { render, screen } from "@testing-library/react";
import ProjectCard from "@components/projectCard";
import "react-intersection-observer";
import "@testing-library/jest-dom";
import { PLACEHOLDER_IMG_SRC } from "@utils/navConsts";

describe("ProjectCard", () => {
  const props = { name: "test-card", description: "this is a test description", reverse: false };
  beforeAll(() => {
    const intersectionObserverMock = () => ({
      observe: () => null,
      unobserve: () => null,
      disconnect: () => null,
    });
    window.IntersectionObserver = jest.fn().mockImplementation(intersectionObserverMock);
  });

  it("renders a project card", () => {
    render(<ProjectCard {...props} />);

    const heading = screen.getByRole("heading");
    const link = screen.getByRole("link");
    const descriptionParagraph = screen.getByText(props.description);

    expect(heading).toHaveTextContent(props.name);
    expect(link).toHaveAttribute("href", `/portfolio/${props.name}`);
    expect(descriptionParagraph).toBeInTheDocument();
  });

  it("renders tags", () => {
    const propTags = ["one", "two", "three"];
    render(<ProjectCard {...props} tags={propTags} />);

    const tags = screen.getAllByTestId("tag");
    expect(tags.length).toBe(propTags.length);
    expect(tags[0]).toHaveTextContent(propTags[0]);
  });

  it("renders non-reversed card content when not passed `reverse` prop", () => {
    render(<ProjectCard {...props} />);
    const reversableContentElements = screen.getAllByTestId("reversable-content");
    expect(reversableContentElements[0].classList.contains("md:flex-row-reverse")).toBe(false);
    expect(reversableContentElements[1].classList.contains("pr-6")).toBe(false);
  });

  it("renders reversed card content when passed `reverse` prop", () => {
    render(<ProjectCard {...props} reverse />);
    const reversableContentElements = screen.getAllByTestId("reversable-content");
    expect(reversableContentElements[0].classList.contains("md:flex-row-reverse")).toBe(true);
    expect(reversableContentElements[1].classList.contains("pr-6")).toBe(true);
  });

  it("renders '/portfolio' link when not passed `isWork` prop", () => {
    render(<ProjectCard {...props} />);
    const linkElement = screen.getByRole("link");
    expect(linkElement).toHaveAttribute("href", `/portfolio/${props.name}`);
  });

  it("renders '/work' link when passed `isWork` prop", () => {
    render(<ProjectCard {...props} isWork />);
    const linkElement = screen.getByRole("link");
    expect(linkElement).toHaveAttribute("href", `/work/${props.name}`);
  });

  it("renders placeholder image when not passed `image` prop", () => {
    render(<ProjectCard {...props} />);
    const imgElement = screen.getByRole("img");
    expect(imgElement).toHaveAttribute("src", PLACEHOLDER_IMG_SRC);
  });

  it("renders 'image src' when passed `image` prop", () => {
    const testImageSrc = "/test/image";
    render(<ProjectCard {...props} imageSrc={testImageSrc} />);
    const imgElement = screen.getByRole("img");
    expect(imgElement).toHaveAttribute("src", testImageSrc);
  });
});

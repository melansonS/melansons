import { render, screen } from "@testing-library/react";
import ProjectCard from "@components/projectCard";
import "react-intersection-observer";
import "@testing-library/jest-dom";

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
});

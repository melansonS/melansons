import AnimatedPageContainer from "../../components/animatedPageContainer";
import PageTitle from "../../components/pageTitle";
import ProjectCard from "../../components/projectCard";

import fs from "fs";
import matter from "gray-matter";

import { IStaticProjectProps } from "./[slug]";

const Projects = ({ projects }: { projects: IStaticProjectProps[] }) => {
  return (
    <AnimatedPageContainer>
      <PageTitle content="Projects" />
      {projects.map((project, index) => {
        return (
          <ProjectCard
            key={project.frontmatter.title}
            name={project.frontmatter.title}
            description={project.frontmatter.description}
            reverse={index % 2 === 0}
          />
        );
      })}
    </AnimatedPageContainer>
  );
};

export async function getStaticProps() {
  const files = fs.readdirSync("projects_markdown");

  const projects = files.map((fileName) => {
    const slug = fileName.replace(".md", "");
    const readFile = fs.readFileSync(`projects_markdown/${fileName}`, "utf-8");
    const { data: frontmatter } = matter(readFile);
    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      projects,
    },
  };
}

export default Projects;

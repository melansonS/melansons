import AnimatedPageContainer from "../../components/animatedPageContainer";
import PageTitle from "../../components/pageTitle";
import ProjectCard from "../../components/projectCard";

import fs from "fs";
import matter from "gray-matter";

import { IStaticProjectProps } from "./[slug]";
import AnimateOnScrollIntoView from "../../components/animateOnScrollIntoView";

const ellipsesScrollVariants = {
  hidden: {
    opacity: 0,
    y: 15,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
};
const moreScrollVariants = {
  hidden: {
    opacity: 0,
    y: 15,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.4,
      duration: 0.8,
    },
  },
};

const Projects = ({ projects }: { projects: IStaticProjectProps[] }) => {
  const orderedProjects = projects.sort(
    (a, b) => a.frontmatter.orderIndex - b.frontmatter.orderIndex
  );

  return (
    <AnimatedPageContainer>
      <PageTitle content="Projects" />
      {orderedProjects.map((project, index) => {
        return (
          <ProjectCard
            key={project.frontmatter.title}
            name={project.frontmatter.title}
            description={project.frontmatter.description}
            tags={project.frontmatter.tags}
            reverse={index % 2 === 0}
            image={project.frontmatter.image}
          />
        );
      })}
      <AnimateOnScrollIntoView variants={moreScrollVariants} animateOut>
        <div className="text-center mt-4 mb-12 font-bold text-xl">
          <p>
            more on{" "}
            <code>
              <a href="https://github.com/melansonS" target="_blank" className="hover:underline">
                Github
              </a>
            </code>
          </p>
        </div>
      </AnimateOnScrollIntoView>
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

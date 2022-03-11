import type { NextPage } from "next";
import { projectPageNames, projectPages } from "../../projects/projectPages";
import AnimatedPageContainer from "../../components/animatedPageContainer";
import PageTitle from "../../components/pageTitle";
import ProjectCard from "../../components/projectCard";

const Work: NextPage = () => {
  return (
    <AnimatedPageContainer>
      <PageTitle content="Projects" />
      {projectPageNames.map((name, index) => {
        const project = projectPages[name];
        return (
          <ProjectCard
            key={project.name}
            name={project.name}
            description={project.description}
            reverse={index % 2 === 0}
            index={index}
          />
        );
      })}
    </AnimatedPageContainer>
  );
};

export default Work;

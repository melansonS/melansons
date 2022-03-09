import type { NextPage } from "next";
import Link from "next/link";
import { projectPageNames, projectPages } from "../../projects/projectPages";
import AnimatedPageContainer from "../../components/animatedPageContainer";
import PageTitle from "../../components/pageTitle";

const Work: NextPage = () => {
  return (
    <AnimatedPageContainer>
      <div>
        <PageTitle content="work" />
        {projectPageNames.map((name) => {
          const project = projectPages[name];
          return (
            <div key={project.name}>
              {project.name}
              {project.description}
              <Link href={`/work/${project.name}`}> howdy</Link>
            </div>
          );
        })}
      </div>
    </AnimatedPageContainer>
  );
};

export default Work;

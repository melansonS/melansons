import { IProjectProps, PageName } from "../../projects/projectTypes";
import { projectPageNames, projectPages } from "../../projects/projectPages";
import AnimatedPageContainer from "../../components/animatedPageContainer";
import PageTitle from "../../components/pageTitle";

const Project = ({ project }: IProjectProps) => {
  return (
    <AnimatedPageContainer>
      <div>
        <PageTitle content={project.name} />
        <h1>{project.name}</h1>
        <p>{project.description}</p>
      </div>
    </AnimatedPageContainer>
  );
};

export async function getStaticPaths() {
  const paths = projectPageNames.map((projectName) => ({
    params: { projectSlug: projectName },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }: { params: { projectSlug: PageName } }) {
  const project = projectPages[params.projectSlug];
  return { props: { project } };
}

export default Project;

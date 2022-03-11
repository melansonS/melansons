import fs from "fs";
import matter from "gray-matter";
import md from "markdown-it";
import PageTitle from "../../components/pageTitle";

interface StaticSlugParams {
  params: {
    slug: string;
  };
}

interface PojectFrontMatter {
  title: string;
  description: string;
  tags: string[];
  images: string[];
}

export interface IStaticProjectProps {
  frontmatter: PojectFrontMatter;
  content: string;
}

const Projects = ({ frontmatter, content }: IStaticProjectProps) => {
  return (
    <div className=" mx-auto">
      <PageTitle content={frontmatter.title} />
      <div
        className="prose dark:prose-invert"
        dangerouslySetInnerHTML={{ __html: md().render(content) }}
      />
    </div>
  );
};

export async function getStaticPaths() {
  const files = fs.readdirSync("projects_markdown");
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace(".md", ""),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }: StaticSlugParams) {
  const fileName = fs.readFileSync(`projects_markdown/${slug}.md`, "utf-8");
  const { data: frontmatter, content } = matter(fileName);
  return {
    props: {
      frontmatter,
      content,
    },
  };
}

export default Projects;

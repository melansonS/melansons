import { projectLinks } from "../utils/navConsts";
import Link from "next/link";

// TODO: not using this anymore...
const ProjectLinks = () => {
  return (
    <div>
      {projectLinks.map((link) => {
        return (
          <div className="hover:underline w-fit">
            <Link href={`/portfolio${link.href}`}>{link.name}</Link>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectLinks;

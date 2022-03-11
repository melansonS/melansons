import { projectLinks } from "../utils/navConsts";
import Link from "next/link";
const ProjectLinks = () => {
  return (
    <ul>
      {projectLinks.map((link) => {
        return (
          <li>
            <Link href={`/projects${link.href}`}>{link.name}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default ProjectLinks;

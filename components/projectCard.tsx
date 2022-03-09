import Link from "next/link";
import AnimateOnScrollIntoView from "./AnimateOnScrollIntoView";

interface IProjectCardProps {
  name: string;
  description: string;
  reverse: boolean;
}

const variants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      delay: 0.3,
      duration: 0.8,
    },
  },
};

const ProjectCard = ({ name, description, reverse }: IProjectCardProps) => {
  return (
    <AnimateOnScrollIntoView variants={variants} animateOut>
      <div className="py-12 w-ful">
        <Link href={`/work/${name}`}>
          <div
            className={`flex flex-col p-6 
          ${reverse ? "md:flex-row-reverse" : "md:flex-row"}
          hover:cursor-pointer`}
          >
            <img src="https://placeimg.com/300/400/any"></img>

            <div>
              <h1 className="text-2xl font-bold pb-8">{name}</h1>
              <p>{description}</p>
            </div>
          </div>
        </Link>
      </div>
    </AnimateOnScrollIntoView>
  );
};

export default ProjectCard;

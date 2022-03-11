import Link from "next/link";
import AnimateOnScrollIntoView from "./animateOnScrollIntoView";
import { motion } from "framer-motion";
import useBreakPoints from "../utils/usebreakpoints";
interface IProjectCardProps {
  name: string;
  description: string;
  reverse: boolean;
  isWork?: boolean;
  index: number;
}

const scrollVariants = {
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

const imgVariants = {
  rest: {
    scale: 1,
    transition: { duration: 0.4 },
  },
  hover: {
    scale: 1.1,
    transition: { duration: 0.5 },
  },
};

const ProjectCard = ({ name, index, description, reverse, isWork = false }: IProjectCardProps) => {
  const breakpoint = useBreakPoints();
  return (
    <AnimateOnScrollIntoView variants={scrollVariants} animateOut>
      <motion.div
        initial="rest"
        animate="rest"
        whileHover="hover"
        whileTap="hover"
        whileFocus="hover"
        className="outline-zinc-900 my-20 md:my-12 md:mx-8"
        tabIndex={0}
      >
        <Link href={`/${isWork ? "work" : "portfolio"}/${name}`}>
          <div
            className={`flex flex-col my-6 justify-between relative content-center
                      ${reverse ? "md:flex-row-reverse" : "md:flex-row"}
                      hover:cursor-pointer
                      `}
          >
            <div
              style={{ height: 300, width: 200, minWidth: 200 }}
              className="overflow-hidden m-1 mx-auto"
            >
              <motion.img
                variants={imgVariants}
                className="h-full w-full"
                src="https://placeimg.com/200/300/any"
              />
            </div>
            <div className={`grow relative ${reverse ? "pr-6" : "md:pl-12"}`}>
              <h1 className="text-2xl font-bold pt-2 pb-4 md:pb-6">{name}</h1>
              <p className="w-fit">{description}</p>
              {breakpoint !== "sm" && (
                <div className="projectCardIndex h-fit opacity-5 absolute left-1/4 top-4">
                  {index + 1}
                </div>
              )}
            </div>
          </div>
        </Link>
      </motion.div>
    </AnimateOnScrollIntoView>
  );
};

export default ProjectCard;

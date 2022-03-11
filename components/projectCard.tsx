import Link from "next/link";
import AnimateOnScrollIntoView from "./animateOnScrollIntoView";
import { motion } from "framer-motion";
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
    scale: 1.05,
    transition: { duration: 0.5 },
  },
};

const ProjectCard = ({ name, index, description, reverse, isWork = false }: IProjectCardProps) => {
  return (
    <AnimateOnScrollIntoView variants={scrollVariants} animateOut>
      <motion.div
        initial="rest"
        animate="rest"
        whileHover="hover"
        whileTap="hover"
        className="my-20 md:my-12 md:mx-20"
      >
        <Link href={`/${isWork ? "work" : "portfolio"}/${name}`}>
          <div
            className={`flex flex-col m-6 justify-between relative
                      ${reverse ? "md:flex-row-reverse" : "md:flex-row"}
                      hover:cursor-pointer
                      `}
          >
            <div style={{ height: 300, width: 200, overflow: "hidden" }}>
              <motion.img
                variants={imgVariants}
                className="h-full w-full"
                src="https://placeimg.com/200/300/any"
              />
            </div>
            <div className={`grow relative ${reverse ? "" : "md:pl-12"}`}>
              <div className="projectCardIndex opacity-5 absolute -top-14 left-10 md:-top-10 md:left-40">
                {index + 1}
              </div>
              <h1 className="text-2xl font-bold pb-8">{name}</h1>
              <p>{description}</p>
            </div>
          </div>
        </Link>
      </motion.div>
    </AnimateOnScrollIntoView>
  );
};

export default ProjectCard;

import Link from "next/link";
import AnimateOnScrollIntoView from "./animateOnScrollIntoView";
import { motion } from "framer-motion";
import { PLACEHOLDER_IMG_SRC } from "@utils/navConsts";
interface IProjectCardProps {
  name: string;
  description: string;
  reverse: boolean;
  isWork?: boolean;
  tags?: string[];
  imageSrc?: string;
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
    rotateZ: 0,
    transition: { duration: 0.4 },
  },
  hover: {
    scale: 1.01,
    rotateZ: 1,
    transition: { duration: 0.5 },
  },
};

const titleVariants = {
  rest: {
    textDecoration: "none",
  },
  hover: {
    textDecoration: "underline",
  },
};

const ProjectCard = ({
  name,
  description,
  reverse,
  tags = [],
  isWork = false,
  imageSrc,
}: IProjectCardProps) => {
  return (
    <AnimateOnScrollIntoView variants={scrollVariants}>
      <motion.div
        initial="rest"
        animate="rest"
        whileHover="hover"
        whileTap="hover"
        whileFocus="hover"
        className="outline-zinc-900 my-8 md:my-12 md:mx-8"
        tabIndex={0}
      >
        <Link href={`/${isWork ? "work" : "portfolio"}/${name}`}>
          <div
            data-testid="reversable-content"
            className={`flex flex-col my-6 justify-between relative content-center
                      ${reverse ? "md:flex-row-reverse" : "md:flex-row"}
                      hover:cursor-pointer
                      `}
          >
            <div
              style={{ height: 200, width: 200, minWidth: 200 }}
              className="overflow-hidden m-1 mx-auto flex flex-col justify-center"
            >
              <motion.img
                variants={imgVariants}
                style={{ height: 200, width: 200, minWidth: 200 }}
                src={`${imageSrc ? imageSrc : PLACEHOLDER_IMG_SRC}`}
                className="dark:opacity-80"
                alt={imageSrc?.replace(".png", "") || "default-icon"}
              />
            </div>
            <div
              data-testid="reversable-content"
              className={`grow relative flex flex-col justify-between
             ${reverse ? "pr-6" : "md:pl-12"}`}
            >
              <div>
                <motion.h1
                  variants={titleVariants}
                  className="text-2xl font-bold pt-2 pb-4 md:pb-6"
                >
                  {name}
                </motion.h1>
                <p className="w-fit">{description}</p>
              </div>
              <div className="py-2 w-fit">
                {tags.map((tag, index) => {
                  return (
                    <code className="font-bold " key={`tag-${tag}`} data-testid="tag">
                      {tag}&nbsp;{index < tags.length - 1 && "| "}
                    </code>
                  );
                })}
              </div>
            </div>
          </div>
        </Link>
      </motion.div>
      <hr className="py-2 opacity-30 border-zinc-900 dark:border-stone-300"></hr>
    </AnimateOnScrollIntoView>
  );
};

export default ProjectCard;

import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github, link } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  demo_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="w-full rounded-2xl bg-tertiary p-5 sm:w-[360px]"
      >
        <div className="relative h-[230px] w-full">
          <img
            src={image}
            alt={name}
            className="object-cover w-full h-full rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end gap-2 m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="flex items-center justify-center w-10 h-10 rounded-full cursor-pointer black-gradient"
            >
              <img
                src={github}
                alt="github"
                className="object-contain w-5 h-5"
              />
            </div>
            <div
              onClick={() => window.open(demo_link, "_blank")}
              className="flex items-center justify-center w-10 h-10 rounded-full cursor-pointer green-pink-gradient"
            >
              <img
                src={link}
                alt="demo link"
                className="object-contain w-5 h-5"
              />
            </div>
          </div>
        </div>
        {/* <div>// create another div for the live demo</div> */}
        <div className="mt-5">
          <h3 className="text-[24px] font-bold text-white">{name}</h3>
          <p className="mt-2 text-[14px] text-secondary">{description}</p>
        </div>
        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>My work</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Projects.</h2>
      </motion.div>
      <div className="flex w-full">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 max-w-5xl text-[17px] leading-[30px] text-secondary"
        >
          Following projects showcase my skills and experience through
          real-world examples of my work.
          <br className="hidden sm:block" /> Each project is briefly described
          with links to code repositories and live demos in it.
          <br className="hidden sm:block" /> It reflects my ability to solve
          complex problems, work with different technologies, and manage
          projects effectively.
        </motion.p>
      </div>
      <div className="flex flex-wrap mt-20 gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");

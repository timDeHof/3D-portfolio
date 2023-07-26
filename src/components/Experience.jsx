import React from "react"
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"
import { motion } from "framer-motion"
import "react-vertical-timeline-component/style.min.css"
import { styles } from "../styles"
import { experiences } from "../constants"
import { SectionWrapper } from "../hoc"
import { textVariant } from "../utils/motion"

const ExperienceCard = ({
  title,
  icon,
  iconBg,
  date,
  points,
  company_name,
}) => (
  <VerticalTimelineElement
    contentStyle={{
      background: "#1d1836",
      color: "#fff",
    }}
    contentArrowStyle={{ borderRight: "7px solid #232631" }}
    date={date}
    iconStyle={{ background: iconBg }}
    icon={
      <div className='flex items-center justify-center w-full h-full'>
        <img
          src={icon}
          alt={company_name}
          className='w-[60%] h-[60%] object-contain'
        />
      </div>
    }>
    <div>
      <h3 className='text-white text-[24px] font-bold'>{title}</h3>
      <p
        className='text-secondary text-[16px] font-semibold'
        style={{ margin: 0 }}>
        {company_name}
      </p>
    </div>
    <ul className='mt-5 ml-5 space-y-2 list-disc'>
      {points.map((point, index) => (
        <li
          key={`experience-point-${index}`}
          className='text-white-100 text-[14px] pl-1 trackingwider'>
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
)

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience.
        </h2>
      </motion.div>
      <div className='flex flex-col mt-20'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={`experience-${index}`} {...experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}
export default SectionWrapper(Experience, "Work")

"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { GiDuration } from "react-icons/gi";
import { FaMediumM, FaUsers } from "react-icons/fa";
import { HiExternalLink } from "react-icons/hi";
import { AllSkills } from "./data/skillsData";

const EnhancedProjectCard = ({ project, index }) => {
  const projectSkills = AllSkills.flatMap((skill) =>
    skill.techList
      .filter((tech) => project.techUsed.includes(tech.skillsId))
      .map((tech) => tech)
  );

  // Check if this is a high-impact project
  const highImpactProjects = [1, 2, 8, 9, 10]; // FMT, Aircraft, IoT, Kerry, Marketing Platform
  const isHighImpact = highImpactProjects.includes(project.projectId);

  return (
    <motion.div
      className="md:w-1/2 p-2"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.05,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <motion.div
        className={`bg-[#212121] border-2 border-solid rounded-2xl h-full flex flex-col overflow-hidden ${
          isHighImpact ? "border-[#f5f543]" : "border-[#292929]"
        }`}
        whileHover={{
          scale: 1.02,
          y: -8,
          transition: { duration: 0.3 },
        }}
      >
        <Link href={project.url} target="_blank">
          {/* Image Section with Zoom Effect */}
          <div className="relative overflow-hidden">
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.4 }}
            >
              <Image
                className="object-cover w-full rounded-t-2xl"
                src={project.projImage}
                alt={project.projectFullName}
                style={{ maxWidth: "100%", height: "auto", minHeight: "250px" }}
              />
            </motion.div>

            {/* Animated Overlay */}
            <motion.div
              className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col rounded-t-2xl h-full"
              initial={false}
            >
              {/* Project Name */}
              <motion.div
                className="text-[#f5f543] flex justify-center h-full items-center text-3xl font-semibold px-4 text-center"
                initial={{ y: 20, opacity: 0 }}
                whileHover={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {project.projectName}
              </motion.div>

              {/* Meta Info */}
              <motion.div
                className="flex w-full justify-between items-end px-5 py-4"
                initial={{ y: 20, opacity: 0 }}
                whileHover={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                {project.teamSize === 1 ? (
                  <div className="flex justify-center items-center gap-2 text-lg">
                    <FaMediumM className="text-2xl" />
                    Solo
                  </div>
                ) : (
                  <div className="flex justify-center items-center gap-2 text-lg">
                    <FaUsers className="text-2xl" />
                    {project.teamSize} experts
                  </div>
                )}

                <div className="flex justify-center items-center gap-2 text-lg">
                  <GiDuration className="text-2xl" />
                  {Math.round(project.duration * 30)} days
                </div>
              </motion.div>
            </motion.div>

            {/* High Impact Badge */}
            {isHighImpact && (
              <motion.div
                className="absolute top-4 right-4 px-3 py-1 bg-[#f5f543] text-black text-xs font-bold rounded-full"
                initial={{ opacity: 0, scale: 0.8, x: 20 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                Featured
              </motion.div>
            )}

            {/* External Link Icon */}
            <motion.div
              className="absolute top-4 left-4 p-2 bg-black bg-opacity-50 backdrop-blur-sm rounded-full opacity-0 hover:opacity-100 transition-opacity"
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <HiExternalLink className="w-5 h-5 text-[#f5f543]" />
            </motion.div>
          </div>

          {/* Content Section */}
          <div className="p-5 flex flex-col justify-between">
            <motion.h4
              className="text-3xl lg:text-2xl xl:text-3xl capitalize text-[#f5f543] font-semibold mb-3"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              {project.projectFullName}
            </motion.h4>

            <motion.p
              className="font-normal text-gray-300 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              {project.description}
            </motion.p>
          </div>
        </Link>

        {/* Tech Tags Section */}
        <div className="mt-auto pb-5 p-3">
          <div className="relative pb-7">
            <hr className="h-px mx-4 border-[#292929]" />
            <span className="absolute -top-3 -translate-x-1/2 left-1/2 bg-[#212121] px-3 text-gray-400 text-sm">
              TECH STACK
            </span>
          </div>

          <motion.div
            className="flex flex-wrap gap-2 justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.03,
                },
              },
            }}
          >
            {projectSkills.map((skill, skillIndex) => (
              <motion.div
                key={skill.name + skillIndex}
                className="flex gap-2 text-xs items-center leading-sm px-3 py-1.5 bg-[#f5f543] text-black rounded-full font-semibold hover:scale-110 hover:shadow-lg transition-all duration-200 cursor-default"
                variants={{
                  hidden: { opacity: 0, scale: 0.8, y: 10 },
                  visible: {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    transition: {
                      duration: 0.3,
                      ease: [0.22, 1, 0.36, 1],
                    },
                  },
                }}
                whileHover={{
                  scale: 1.15,
                  backgroundColor: "#ffffff",
                  transition: { duration: 0.2 },
                }}
              >
                <div className="h-4 w-4">{skill.icon}</div>
                <p>{skill.name}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default EnhancedProjectCard;

"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { AiOutlineProject } from "react-icons/ai";
import {
  FaMapMarkerAlt,
  FaRocket,
  FaChartLine,
  FaLightbulb,
  FaBolt,
} from "react-icons/fa";

const ExperienceCard = (props) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px" });

  const options = {
    year: "numeric",
    month: "short",
  };

  const exp = props.ExpData;

  // Achievement icons rotation
  const achievementIcons = [
    <FaRocket className="text-[#f5f543]" />,
    <FaChartLine className="text-[#f5f543]" />,
    <FaLightbulb className="text-[#f5f543]" />,
    <FaBolt className="text-[#f5f543]" />,
  ];

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const achievementVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        delay: i * 0.1,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  return (
    <motion.section
      ref={cardRef}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="p-6 md:p-10"
    >
      {exp.Achievements ? (
        <motion.div
          whileHover={{
            y: -5,
            boxShadow: "0 20px 40px rgba(245, 245, 67, 0.15)",
          }}
          transition={{ duration: 0.3 }}
          className="md:flex flex-none gap-2 bg-[#212121] border-2 border-[#292929] border-solid rounded-xl shadow-lg p-6 hover:border-[#f5f543] transition-colors duration-300 relative overflow-hidden"
        >
          {/* Gradient background on hover */}
          <div className="absolute inset-0 bg-linear-to-br from-[#f5f543]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          <div className="relative z-10 flex gap-3 md:flex-col-reverse items-center md:justify-center justify-between">
            <div className="md:text-center text-left p-3 align-top">
              {exp.Company.Website === "#" ? (
                <h3 className="md:text-5xl text-2xl font-bold md:whitespace-nowrap">
                  {exp.Company.Name}
                </h3>
              ) : (
                <Link href={exp.Company.Website} target="_blank">
                  <motion.h3
                    whileHover={{ color: "#f5f543" }}
                    className="md:text-5xl text-2xl font-bold md:whitespace-nowrap transition-colors"
                  >
                    {exp.Company.Name}
                  </motion.h3>
                </Link>
              )}
              <motion.h4
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-lime-400 uppercase font-semibold mt-2"
              >
                {exp.Role}
              </motion.h4>
              <div className="text-base flex items-center md:justify-center justify-start gap-1 mt-2 text-gray-400">
                <FaMapMarkerAlt />
                {exp.Company.Location}
              </div>
              <div className="text-base font-mono text-gray-200 mt-2">
                {new Date(exp.startDate).toLocaleDateString("en-us", options) +
                  " - " +
                  (exp.endDate === "Present"
                    ? "Present"
                    : new Date(exp.endDate).toLocaleDateString(
                        "en-us",
                        options
                      ))}
              </div>
              <div className="py-5 justify-center md:flex hidden">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/projects"
                    className="flex gap-1 justify-center px-6 items-center hover:bg-lime-400 hover:text-[#121212] capitalize p-3 rounded-lg text-base font-semibold bg-white text-black border border-solid border-transparent hover:border-lime-400 transition-all duration-300"
                  >
                    View Projects
                    <AiOutlineProject />
                  </Link>
                </motion.div>
              </div>
            </div>

            {/* Company Logo */}
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              {exp.Company.LogoIcon}
              {/* Glow effect */}
              <motion.div
                className="absolute inset-0 bg-[#f5f543] rounded-full blur-xl opacity-0 group-hover:opacity-20"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              ></motion.div>
            </motion.div>
          </div>

          {/* Achievements List */}
          <ul className="list-none p-4 space-y-4 relative z-10">
            {exp.Achievements?.map((desc, i) => (
              <motion.li
                key={i}
                custom={i}
                variants={achievementVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="py-2 flex items-start gap-3 group/item"
              >
                <motion.span
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="mt-1 shrink-0"
                >
                  {achievementIcons[i % achievementIcons.length]}
                </motion.span>
                <span className="text-gray-300 group-hover/item:text-white transition-colors">
                  {desc}
                </span>
              </motion.li>
            ))}
          </ul>

          <div className="py-5 px-3 md:hidden flex relative z-10">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/projects"
                className="flex gap-1 justify-center px-6 items-center hover:bg-lime-400 hover:text-[#121212] capitalize p-3 rounded-lg text-base font-semibold bg-white text-black border border-solid border-transparent hover:border-lime-400 transition-all duration-300"
              >
                View Projects
                <AiOutlineProject />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      ) : (
        // Multi-position card (Accenture style with Positions array)
        <motion.div
          whileHover={{
            y: -5,
            boxShadow: "0 20px 40px rgba(245, 245, 67, 0.15)",
          }}
          transition={{ duration: 0.3 }}
          className="bg-[#212121] border-2 border-[#292929] rounded-xl shadow-lg overflow-hidden hover:border-[#f5f543] transition-colors duration-300"
        >
          <div className="flex justify-center gap-3 items-center p-6 bg-linear-to-r from-[#1a1a1a] to-[#212121]">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              {exp.Company.LogoIcon}
            </motion.div>
            <div>
              {exp.Company.Website === "#" ? (
                <h3 className="md:text-5xl text-3xl font-bold">
                  {exp.Company.Name}
                </h3>
              ) : (
                <Link href={exp.Company.Website} target="_blank">
                  <motion.h3
                    whileHover={{ color: "#f5f543" }}
                    className="md:text-5xl text-3xl font-bold transition-colors"
                  >
                    {exp.Company.Name}
                  </motion.h3>
                </Link>
              )}
              <div className="text-base flex items-center gap-1 text-gray-400">
                <FaMapMarkerAlt />
                {exp.Company.Location}
              </div>
              <div className="text-base font-mono text-gray-200">
                {new Date(exp.startDate).toLocaleDateString("en-us", options) +
                  " - " +
                  (exp.endDate === "Present"
                    ? "Present"
                    : new Date(exp.endDate).toLocaleDateString(
                        "en-us",
                        options
                      ))}
              </div>
            </div>
          </div>

          {/* Positions Grid */}
          <div className="flex flex-wrap justify-center items-center py-7 px-4">
            {exp.Positions.map((expAcc, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="xl:w-1/3 md:w-1/2 w-full p-2"
              >
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 10px 30px rgba(245, 245, 67, 0.2)",
                  }}
                  className="bg-[#1a1a1a] border-2 border-[#292929] border-solid rounded-lg shadow p-4 hover:border-[#f5f543] transition-all duration-300 h-full"
                >
                  <div className="flex justify-between items-start p-3">
                    <div className="flex-1">
                      <Link href={expAcc.ClientCompany.Website} target="_blank">
                        <motion.h3
                          whileHover={{ color: "#f5f543" }}
                          className="text-2xl font-bold items-center font-inter mb-2 transition-colors"
                        >
                          {expAcc.ClientCompany.Name}
                        </motion.h3>
                      </Link>
                      <h4 className="text-xl text-lime-400 font-semibold mb-2">
                        {expAcc.Role}
                      </h4>
                      <div className="text-base flex items-center gap-1 text-gray-400 mb-2">
                        <FaMapMarkerAlt />
                        {expAcc.ClientCompany.Location}
                      </div>
                      <div className="text-base font-mono text-gray-200">
                        {new Date(expAcc.startDate).toLocaleDateString(
                          "en-us",
                          options
                        ) +
                          " - " +
                          (expAcc.endDate === "Present"
                            ? "Present"
                            : new Date(expAcc.endDate).toLocaleDateString(
                                "en-us",
                                options
                              ))}
                      </div>
                    </div>
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                      className="shrink-0"
                    >
                      {expAcc.ClientCompany.LogoIcon}
                    </motion.div>
                  </div>

                  <ul className="list-none p-3 space-y-3">
                    {expAcc.Achievements?.map((desc, i) => (
                      <motion.li
                        key={i}
                        custom={i}
                        variants={achievementVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        className="py-1 flex items-start gap-2"
                      >
                        <motion.span
                          whileHover={{ scale: 1.2, rotate: 360 }}
                          transition={{ duration: 0.5 }}
                          className="mt-1 shrink-0"
                        >
                          {achievementIcons[i % achievementIcons.length]}
                        </motion.span>
                        <span className="text-sm text-gray-300">{desc}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <div className="flex px-3 mt-4">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link
                        href="/projects"
                        className="flex gap-1 justify-center px-6 items-center hover:bg-lime-400 hover:text-[#121212] capitalize p-2 rounded-lg text-base font-semibold bg-white text-black border border-solid border-transparent hover:border-lime-400 transition-all duration-300"
                      >
                        Projects
                        <AiOutlineProject />
                      </Link>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </motion.section>
  );
};

export default ExperienceCard;

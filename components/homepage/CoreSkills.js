"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiChevronDown } from "react-icons/hi";
import { AllSkills } from "../data/skillsData";

export default function CoreSkills() {
  const [showAll, setShowAll] = useState(false);

  // Container animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  // Card animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  // Header animation variants
  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  // Define your core expert skills (top 5 with years and progress)
  const expertSkillIds = [4, 5, 21, 39, 64]; // NextJS, React, NodeJS, Kubernetes, MySQL
  const expertYears = {
    4: 4, // NextJS
    5: 8, // React
    21: 10, // NodeJS
    39: 4, // Kubernetes
    64: 15, // MySQL
  };

  // Define proficient skills (12 skills)
  const proficientSkillIds = [55, 23, 38, 39, 68, 69, 24, 46, 3, 1, 2, 10];
  // TypeScript, GraphQL, Docker, Kubernetes, MongoDB, PostgreSQL, NestJS, Git, Tailwind, Bootstrap, Ant Design, Redux

  // Get expert skills with years
  const coreSkills = AllSkills.flatMap((category) =>
    category.techList
      .filter((tech) => expertSkillIds.includes(tech.skillsId))
      .map((tech) => ({
        ...tech,
        years: expertYears[tech.skillsId],
        level: 95 + (expertYears[tech.skillsId] >= 10 ? 5 : 0),
      }))
  ).sort(
    (a, b) =>
      expertSkillIds.indexOf(a.skillsId) - expertSkillIds.indexOf(b.skillsId)
  );

  // Get proficient skills
  const proficientSkills = AllSkills.flatMap((category) =>
    category.techList.filter((tech) =>
      proficientSkillIds.includes(tech.skillsId)
    )
  ).sort(
    (a, b) =>
      proficientSkillIds.indexOf(a.skillsId) -
      proficientSkillIds.indexOf(b.skillsId)
  );

  // Get categories for additional skills (exclude those already in expert/proficient)
  const usedSkillIds = new Set([...expertSkillIds, ...proficientSkillIds]);
  const additionalCategories = AllSkills.map((category) => ({
    ...category,
    techList: category.techList.filter(
      (tech) => !usedSkillIds.has(tech.skillsId)
    ),
  })).filter((category) => category.techList.length > 0);

  // Count total additional skills
  const totalAdditionalSkills = additionalCategories.reduce(
    (sum, cat) => sum + cat.techList.length,
    0
  );

  return (
    <section className="py-20 px-4 bg-[#1a1a1a]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={headerVariants}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Core Tech Stack
          </h2>
          <p className="text-xl text-gray-400">
            Technologies I use to build production systems
          </p>
        </motion.div>

        {/* Tier 1: Expert Level */}
        <div className="mb-16">
          <motion.h3
            className="text-2xl font-bold text-white mb-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Expert Level
          </motion.h3>
          <motion.div
            className="grid md:grid-cols-5 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {coreSkills.map((skill, index) => (
              <motion.div
                key={skill.skillsId}
                variants={cardVariants}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
                }}
                className="bg-[#121212] border border-[#292929] rounded-xl p-6 text-center hover:border-[#f5f543] transition-colors duration-300"
              >
                <motion.div
                  className="text-[#f5f543] flex justify-center mb-4 text-5xl"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  {skill.icon}
                </motion.div>
                <h4 className="text-white font-semibold mb-2">{skill.name}</h4>
                <div className="text-sm text-gray-400 mb-3">
                  {skill.years} years
                </div>
                {/* Progress Bar */}
                <div className="w-full bg-[#292929] rounded-full h-2 overflow-hidden">
                  <motion.div
                    className="bg-[#f5f543] h-2 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1,
                      delay: index * 0.1,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Tier 2: Proficient */}
        <div className="mb-12">
          <motion.h3
            className="text-2xl font-bold text-white mb-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Proficient
          </motion.h3>
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {proficientSkills.map((skill) => (
              <motion.div
                key={skill.skillsId}
                variants={cardVariants}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
                className="bg-[#121212] border border-[#292929] rounded-lg p-4 text-center hover:border-[#f5f543] transition-colors duration-200"
              >
                <motion.div
                  className="text-[#f5f543] flex justify-center mb-2 text-3xl"
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 0.2 }}
                >
                  {skill.icon}
                </motion.div>
                <div className="text-white text-sm font-medium">
                  {skill.name}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Tier 3: Additional Technologies (Collapsible) */}
        <div>
          <motion.button
            onClick={() => setShowAll(!showAll)}
            className="w-full flex items-center justify-center gap-2 text-gray-400 hover:text-[#f5f543] transition-colors mb-4 text-lg font-semibold"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {showAll ? (
              <>
                Hide Additional Technologies
                <motion.div
                  animate={{ rotate: showAll ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <HiChevronDown className="text-2xl" />
                </motion.div>
              </>
            ) : (
              <>
                View All Technologies ({totalAdditionalSkills}+)
                <motion.div
                  animate={{ rotate: showAll ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <HiChevronDown className="text-2xl" />
                </motion.div>
              </>
            )}
          </motion.button>

          <AnimatePresence>
            {showAll && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <div className="bg-[#121212] border border-[#292929] rounded-xl p-6">
                  {additionalCategories.map((category, catIndex) => (
                    <motion.div
                      key={category.techName}
                      className="mb-8 last:mb-0"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: catIndex * 0.1 }}
                    >
                      <h4 className="text-xl font-bold text-[#f5f543] mb-4">
                        {category.techName}
                      </h4>
                      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
                        {category.techList.map((skill, index) => (
                          <motion.div
                            key={skill.skillsId}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.05 }}
                            whileHover={{ scale: 1.05 }}
                            className="flex items-center gap-2 px-3 py-2 bg-[#1a1a1a] border border-[#292929] text-gray-300 text-sm rounded-lg hover:border-[#f5f543] transition-colors"
                          >
                            {skill.icon && (
                              <span className="text-[#f5f543] text-xl">
                                {skill.icon}
                              </span>
                            )}
                            <span>{skill.name}</span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

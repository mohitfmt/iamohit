"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { HiArrowRight, HiUsers, HiClock, HiTrendingUp } from "react-icons/hi";
import { ProjectData } from "@/components/data/projects";
import { AllSkills } from "@/components/data/skillsData";

export default function FeaturedProjects() {
  // Top 5 featured projects by impact
  const featuredProjectIds = [1, 2, 8, 9, 10]; // FMT, Aircraft 360, IoT Middleware, Kerry WMS, Marketing Platform
  const featuredProjects = ProjectData.filter((project) =>
    featuredProjectIds.includes(project.projectId)
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -30, scale: 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section className="py-20 px-4 bg-linear-to-b from-[#121212] to-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-block mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="px-4 py-2 bg-[#f5f543] bg-opacity-10 text-black rounded-full text-sm font-semibold border border-[#f5f543] border-opacity-30">
              Featured Work
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Projects That Made an Impact
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            From startups to platforms serving millions of users
          </p>
        </motion.div>

        {/* Featured Projects Grid */}
        <motion.div
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {featuredProjects.map((project, index) => (
            <FeaturedProjectCard
              key={project.projectId}
              project={project}
              variants={cardVariants}
              isFirst={index === 0}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function FeaturedProjectCard({ project, variants, isFirst }) {
  const projectSkills = AllSkills.flatMap((skill) =>
    skill.techList
      .filter((tech) => project.techUsed.includes(tech.skillsId))
      .map((tech) => tech)
  );

  // Get impact metrics for specific projects
  const getImpactMetric = (projectId) => {
    const metrics = {
      1: {
        label: "184% Growth + 75% Cost Cut",
        icon: <HiTrendingUp className="w-5 h-5" />,
      },
      2: {
        label: "Changi Airport",
        icon: <HiTrendingUp className="w-5 h-5" />,
      },
      8: { label: "1350 Days", icon: <HiClock className="w-5 h-5" /> },
      9: { label: "Fortune 500", icon: <HiUsers className="w-5 h-5" /> },
      10: {
        label: "Self-Service Platform",
        icon: <HiTrendingUp className="w-5 h-5" />,
      },
    };
    return metrics[projectId] || null;
  };

  const impactMetric = getImpactMetric(project.projectId);

  return (
    <motion.div
      variants={variants}
      whileHover={{
        scale: 1.01,
        transition: { duration: 0.3 },
      }}
      className={`bg-[#1a1a1a] border-2 rounded-2xl overflow-hidden hover:border-[#f5f543] transition-all duration-300 group ${
        isFirst ? "border-[#f5f543]" : "border-[#292929]"
      }`}
    >
      <div className="grid md:grid-cols-5 gap-6">
        {/* Image Section */}
        <div className="md:col-span-2 relative overflow-hidden">
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.4 }}
            className="h-full"
          >
            <Image
              src={project.projImage}
              alt={project.projectFullName}
              className="w-full h-full object-cover"
              style={{ minHeight: "300px" }}
            />
          </motion.div>

          {/* Featured Badge */}
          {isFirst && (
            <motion.div
              className="absolute top-4 left-4 px-3 py-1 bg-[#f5f543] text-black text-sm font-bold rounded-full"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Crisis Turnaround
            </motion.div>
          )}

          {/* Impact Badge */}
          {impactMetric && (
            <motion.div
              className="absolute bottom-4 left-4 px-3 py-2 bg-black bg-opacity-80 backdrop-blur-sm text-white text-sm font-semibold rounded-lg flex items-center gap-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              {impactMetric.icon}
              {impactMetric.label}
            </motion.div>
          )}
        </div>

        {/* Content Section */}
        <div className="md:col-span-3 p-6 flex flex-col justify-between">
          {/* Header */}
          <div>
            <motion.h3
              className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-[#f5f543] transition-colors"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              {project.projectFullName}
            </motion.h3>

            {/* Meta Info */}
            <motion.div
              className="flex flex-wrap gap-4 text-gray-400 text-sm mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex items-center gap-1">
                <HiUsers className="w-4 h-4" />
                {project.teamSize === 1
                  ? "Solo"
                  : `${project.teamSize} experts`}
              </div>
              <div className="flex items-center gap-1">
                <HiClock className="w-4 h-4" />
                {Math.round(project.duration * 30)} days
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              className="text-gray-300 mb-6 line-clamp-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              {project.description}
            </motion.p>
          </div>

          {/* Tech Stack */}
          <div>
            <motion.div
              className="flex flex-wrap gap-2 mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              {projectSkills.slice(0, 8).map((skill, index) => (
                <motion.span
                  key={skill.skillsId}
                  className="px-3 py-1 bg-[#292929] text-gray-300 text-xs rounded-full hover:bg-[#f5f543] hover:text-black transition-colors cursor-default"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.6 + index * 0.05,
                    duration: 0.3,
                  }}
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.2 },
                  }}
                >
                  {skill.name}
                </motion.span>
              ))}
              {projectSkills.length > 8 && (
                <span className="px-3 py-1 bg-[#292929] text-gray-400 text-xs rounded-full">
                  +{projectSkills.length - 8} more
                </span>
              )}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
            >
              <Link
                href={project.url}
                target="_blank"
                className="inline-flex items-center gap-2 text-[#f5f543] font-semibold hover:gap-3 transition-all duration-300 group/link"
              >
                <span>View Project</span>
                <HiArrowRight className="w-5 h-5 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

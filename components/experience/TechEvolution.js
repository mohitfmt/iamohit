"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaArrowDown, FaAws } from "react-icons/fa";
import {
  SiNextdotjs,
  SiReact,
  SiAngular,
  SiNodedotjs,
  SiTypescript,
  SiTailwindcss,
  SiKubernetes,
  SiGooglecloud,
  SiPostgresql,
  SiMysql,
  SiDotnet,
  SiPhp,
  SiJavascript,
  SiDocker,
  SiGraphql,
} from "react-icons/si";
import { TbBrandCSharp, TbBrandThreejs, TbSql } from "react-icons/tb";

export default function TechEvolution() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const evolutionData = [
    {
      id: 1,
      period: "2006-2010",
      phase: "Foundation Years",
      description: "Building desktop applications and learning fundamentals",
      technologies: [
        {
          name: "Visual Basic",
          icon: <TbBrandCSharp className="w-8 h-8" />,
          color: "text-blue-400",
        },
        {
          name: "PHP",
          icon: <SiPhp className="w-8 h-8" />,
          color: "text-indigo-400",
        },
        {
          name: "MySQL",
          icon: <SiMysql className="w-8 h-8" />,
          color: "text-blue-500",
        },
        {
          name: "JavaScript",
          icon: <SiJavascript className="w-8 h-8" />,
          color: "text-yellow-400",
        },
      ],
      keyProjects: "RTO Automation, School Management, GIS Systems",
    },
    {
      id: 2,
      period: "2010-2018",
      phase: "Enterprise Era",
      description: "Leading teams for Fortune 100 clients at Accenture",
      technologies: [
        {
          name: "C#",
          icon: <TbBrandCSharp className="w-8 h-8" />,
          color: "text-purple-400",
        },
        {
          name: ".NET",
          icon: <SiDotnet className="w-8 h-8" />,
          color: "text-purple-500",
        },
        {
          name: "Angular",
          icon: <SiAngular className="w-8 h-8" />,
          color: "text-red-500",
        },
        {
          name: "SQL Server",
          icon: <TbSql className="w-8 h-8" />,
          color: "text-red-400",
        },
      ],
      keyProjects: "Enterprise Systems, Banking Apps, Insurance Platforms",
    },
    {
      id: 3,
      period: "2018-2021",
      phase: "Innovation Lab",
      description: "Experimentation with cutting-edge technologies",
      technologies: [
        {
          name: "React",
          icon: <SiReact className="w-8 h-8" />,
          color: "text-cyan-400",
        },
        {
          name: "Node.js",
          icon: <SiNodedotjs className="w-8 h-8" />,
          color: "text-green-500",
        },
        {
          name: "Three.js",
          icon: <TbBrandThreejs className="w-8 h-8" />,
          color: "text-white",
        },
        {
          name: "AWS",
          icon: <FaAws className="w-8 h-8" />,
          color: "text-orange-400",
        },
      ],
      keyProjects: "3D Virtual Worlds, WebAR, NFTs, Virtual Career Fair",
    },
    {
      id: 4,
      period: "2021-2025",
      phase: "Scale & Performance",
      description: "Building systems that serve millions at FMT",
      technologies: [
        {
          name: "Next.js",
          icon: <SiNextdotjs className="w-8 h-8" />,
          color: "text-white",
        },
        {
          name: "TypeScript",
          icon: <SiTypescript className="w-8 h-8" />,
          color: "text-blue-500",
        },
        {
          name: "GCP",
          icon: <SiGooglecloud className="w-8 h-8" />,
          color: "text-blue-400",
        },
        {
          name: "Kubernetes",
          icon: <SiKubernetes className="w-8 h-8" />,
          color: "text-blue-600",
        },
        {
          name: "PostgreSQL",
          icon: <SiPostgresql className="w-8 h-8" />,
          color: "text-blue-400",
        },
        {
          name: "Docker",
          icon: <SiDocker className="w-8 h-8" />,
          color: "text-blue-500",
        },
        {
          name: "GraphQL",
          icon: <SiGraphql className="w-8 h-8" />,
          color: "text-pink-500",
        },
        {
          name: "Tailwind",
          icon: <SiTailwindcss className="w-8 h-8" />,
          color: "text-cyan-400",
        },
      ],
      keyProjects:
        "FMT News Platform (8.5M users), Changi Airport, Banking Apps",
      isCurrent: true,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const phaseVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const techVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="py-20 px-6 bg-[#121212] relative overflow-hidden"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(245,245,67,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(245,245,67,0.05)_1px,transparent_1px)] bg-size-[50px_50px]"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technology <span className="text-[#f5f543]">Evolution</span>
          </h2>
          <p className="text-xl text-gray-400">
            18 years of continuous learning and adaptation
          </p>
        </motion.div>

        {/* Evolution Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-12"
        >
          {evolutionData.map((phase, index) => (
            <motion.div
              key={phase.id}
              variants={phaseVariants}
              className="relative"
            >
              {/* Phase Card */}
              <div
                className={`bg-linear-to-r ${
                  phase.isCurrent
                    ? "from-[#212121] to-[#2a2a2a] border-[#f5f543]"
                    : "from-[#1a1a1a] to-[#212121] border-[#292929]"
                } border-2 rounded-2xl p-8 relative overflow-hidden group hover:border-[#f5f543] transition-all duration-300`}
              >
                {/* Current badge */}
                {phase.isCurrent && (
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    className="absolute top-4 right-4 bg-[#f5f543] text-[#121212] text-xs font-bold px-3 py-1 rounded-full"
                  >
                    CURRENT
                  </motion.div>
                )}

                {/* Period & Phase */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-[#f5f543] text-[#121212] text-lg font-bold px-4 py-2 rounded-lg">
                    {phase.period}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    {phase.phase}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-lg mb-6">
                  {phase.description}
                </p>

                {/* Technologies Grid */}
                <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-4 mb-6">
                  {phase.technologies.map((tech, techIndex) => (
                    <motion.div
                      key={tech.name}
                      variants={techVariants}
                      custom={techIndex}
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      className="bg-[#121212] border-2 border-[#292929] rounded-xl p-4 flex flex-col items-center justify-center hover:border-[#f5f543] transition-colors duration-300 group/tech"
                    >
                      <div
                        className={`${tech.color} mb-2 group-hover/tech:scale-110 transition-transform`}
                      >
                        {tech.icon}
                      </div>
                      <div className="text-xs text-gray-400 text-center font-medium">
                        {tech.name}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Key Projects */}
                <div className="bg-[#1a1a1a] border border-[#292929] rounded-lg p-4">
                  <div className="text-xs text-[#f5f543] font-bold mb-1">
                    KEY PROJECTS
                  </div>
                  <div className="text-sm text-gray-300">
                    {phase.keyProjects}
                  </div>
                </div>

                {/* Side accent */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-linear-to-b from-transparent via-[#f5f543] to-transparent"></div>
              </div>

              {/* Arrow between phases */}
              {index < evolutionData.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="flex justify-center my-6"
                >
                  <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-[#f5f543]"
                  >
                    <FaArrowDown className="text-3xl" />
                  </motion.div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Current Focus */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center bg-linear-to-r from-[#212121] to-[#1a1a1a] border-2 border-[#f5f543] rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            🎯 Current Focus (2025)
          </h3>
          <p className="text-lg text-gray-300 mb-4">
            Specializing in{" "}
            <span className="text-[#f5f543] font-bold">
              Performance Optimization
            </span>
            ,<span className="text-[#f5f543] font-bold"> Scalability</span>, and
            <span className="text-[#f5f543] font-bold">
              {" "}
              News Platform Architecture
            </span>
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="bg-[#121212] border border-[#f5f543] text-[#f5f543] px-4 py-2 rounded-full text-sm font-semibold">
              Next.js 14+
            </span>
            <span className="bg-[#121212] border border-[#f5f543] text-[#f5f543] px-4 py-2 rounded-full text-sm font-semibold">
              GCP Cloud Run
            </span>
            <span className="bg-[#121212] border border-[#f5f543] text-[#f5f543] px-4 py-2 rounded-full text-sm font-semibold">
              Kubernetes
            </span>
            <span className="bg-[#121212] border border-[#f5f543] text-[#f5f543] px-4 py-2 rounded-full text-sm font-semibold">
              High-Traffic Systems
            </span>
            <span className="bg-[#121212] border border-[#f5f543] text-[#f5f543] px-4 py-2 rounded-full text-sm font-semibold">
              SEO Performance
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

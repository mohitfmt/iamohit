"use client";

import Link from "next/link";
import Image from "next/image";
import { HiArrowRight } from "react-icons/hi";
import { motion } from "framer-motion";
import fmtFeaturedImage from "../../public/projImages/fmt-featured.webp";

export default function FeaturedWork() {
  // Animation variants
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

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1], // Custom easing for smooth motion
      },
    },
  };

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const scaleInVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const metricsVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.1,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  return (
    <section className="py-20 px-4 bg-[#121212]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            variants={fadeInUpVariants}
          >
            Featured Work
          </motion.h2>
          <motion.p
            className="text-xl text-gray-400"
            variants={fadeInUpVariants}
          >
            Projects that made a real impact
          </motion.p>
        </motion.div>

        {/* Hero Project: FMT */}
        <motion.div
          className="bg-[#1a1a1a] rounded-2xl overflow-hidden border border-[#292929] mb-12 group"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={scaleInVariants}
          whileHover={{
            borderColor: "#f5f543",
            transition: { duration: 0.3 },
          }}
        >
          <div className="grid md:grid-cols-2 gap-8">
            {/* Image with hover effect */}
            <motion.div
              className="relative overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <Image
                src={fmtFeaturedImage}
                alt="Free Malaysia Today"
                height={400}
                width={600}
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Project Details */}
            <motion.div
              className="p-8 flex flex-col justify-center"
              variants={containerVariants}
            >
              <motion.div
                className="inline-block px-3 py-1 bg-[#f5f543] text-black text-sm font-semibold rounded-full mb-4 w-fit"
                variants={fadeInVariants}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                Featured Project
              </motion.div>

              <motion.h3
                className="text-3xl font-bold text-white mb-4"
                variants={fadeInUpVariants}
              >
                Free Malaysia Today
              </motion.h3>

              <motion.p
                className="text-gray-300 text-lg mb-6 leading-relaxed"
                variants={fadeInUpVariants}
              >
                Transformed a struggling WordPress site into a Next.js
                powerhouse serving 8.5M monthly readers. Achieved 184% traffic
                growth while reducing load times by 60%. Zero downtime migration
                of 500K+ articles.
              </motion.p>

              {/* Key Metrics with stagger animation */}
              <motion.div
                className="grid grid-cols-2 gap-4 mb-6"
                variants={containerVariants}
              >
                {[
                  { value: "3M → 8.5M", label: "Monthly Users", delay: 0 },
                  { value: "5.2s → 1.3s", label: "Load Time", delay: 1 },
                  { value: "+184%", label: "Pageviews", delay: 2 },
                  { value: "Zero", label: "Downtime", delay: 3 },
                ].map((metric, index) => (
                  <motion.div
                    key={metric.label}
                    className="bg-[#0a0a0a] p-4 rounded-lg border border-[#292929]"
                    custom={metric.delay}
                    variants={metricsVariants}
                    whileHover={{
                      scale: 1.05,
                      borderColor: "#f5f543",
                      transition: { duration: 0.2 },
                    }}
                  >
                    <div className="text-2xl font-bold text-[#f5f543]">
                      {metric.value}
                    </div>
                    <div className="text-sm text-gray-400">{metric.label}</div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Tech Stack with cascade animation */}
              <motion.div className="mb-6" variants={fadeInUpVariants}>
                <div className="text-sm text-gray-400 mb-2">Tech Stack</div>
                <motion.div
                  className="flex flex-wrap gap-2"
                  variants={containerVariants}
                >
                  {[
                    "Next.js",
                    "Google Cloud Platform",
                    "CloudSQL",
                    "LRU Cache",
                    "Cloudflare",
                    "WordPress",
                    "GraphQL",
                  ].map((tech, index) => (
                    <motion.span
                      key={tech}
                      className="px-3 py-1 bg-[#292929] text-gray-300 text-sm rounded-full"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: index * 0.05,
                        duration: 0.3,
                        ease: "easeOut",
                      }}
                      whileHover={{
                        scale: 1.1,
                        backgroundColor: "#f5f543",
                        color: "#000000",
                        transition: { duration: 0.2 },
                      }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>

              {/* CTA with hover animation */}
              <motion.div variants={fadeInUpVariants}>
                <Link
                  href="/projects"
                  className="inline-flex items-center text-[#f5f543] font-semibold group/link"
                >
                  <motion.span
                    className="relative"
                    whileHover={{ x: -3 }}
                    transition={{ duration: 0.2 }}
                  >
                    Read Full Case Study
                  </motion.span>
                  <motion.span
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <HiArrowRight className="ml-2" />
                  </motion.span>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Other Featured Projects Grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          {/* Project 2: Accenture */}
          <motion.div
            className="bg-[#1a1a1a] rounded-xl p-6 border border-[#292929] group"
            variants={fadeInUpVariants}
            whileHover={{
              y: -8,
              borderColor: "#f5f543",
              transition: { duration: 0.3, ease: "easeOut" },
            }}
          >
            <motion.div
              className="relative h-48 bg-[#0a0a0a] rounded-lg mb-4 flex items-center justify-center overflow-hidden"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="text-4xl"
                animate={{
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                🌍
              </motion.div>
            </motion.div>
            <h3 className="text-2xl font-bold text-white mb-3">
              3D Virtual World Platform
            </h3>
            <p className="text-gray-300 mb-4">
              Enterprise Three.js platform for Fortune 100 clients. Supported
              50K+ concurrent users with interactive 3D environments.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {["Three.js", "React", "WebGL", "MongoDB"].map((tech, index) => (
                <motion.span
                  key={tech}
                  className="px-2 py-1 bg-[#292929] text-gray-400 text-xs rounded"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                  whileHover={{
                    backgroundColor: "#f5f543",
                    color: "#000000",
                    scale: 1.05,
                    transition: { duration: 0.2 },
                  }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
            <Link
              href="/projects"
              className="text-[#f5f543] font-semibold inline-flex items-center group/link"
            >
              <motion.span
                whileHover={{ x: -3 }}
                transition={{ duration: 0.2 }}
              >
                Learn More
              </motion.span>
              <motion.span whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                {" "}
                →
              </motion.span>
            </Link>
          </motion.div>

          {/* Project 3: Changi Airport */}
          <motion.div
            className="bg-[#1a1a1a] rounded-xl p-6 border border-[#292929] group"
            variants={fadeInUpVariants}
            whileHover={{
              y: -8,
              borderColor: "#f5f543",
              transition: { duration: 0.3, ease: "easeOut" },
            }}
          >
            <motion.div
              className="relative h-48 bg-[#0a0a0a] rounded-lg mb-4 flex items-center justify-center overflow-hidden"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="text-4xl"
                animate={{
                  x: [-5, 5, -5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                ✈️
              </motion.div>
            </motion.div>
            <h3 className="text-2xl font-bold text-white mb-3">
              Aircraft Flow 360
            </h3>
            <p className="text-gray-300 mb-4">
              Real-time flight delay visualization system for Changi Airport.
              Proactively identified bottlenecks in aircraft turnaround.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {["React", "AWS Amplify", "Real-time Data"].map((tech, index) => (
                <motion.span
                  key={tech}
                  className="px-2 py-1 bg-[#292929] text-gray-400 text-xs rounded"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                  whileHover={{
                    backgroundColor: "#f5f543",
                    color: "#000000",
                    scale: 1.05,
                    transition: { duration: 0.2 },
                  }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
            <Link
              href="/projects"
              className="text-[#f5f543] font-semibold inline-flex items-center group/link"
            >
              <motion.span
                whileHover={{ x: -3 }}
                transition={{ duration: 0.2 }}
              >
                Learn More
              </motion.span>
              <motion.span whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                {" "}
                →
              </motion.span>
            </Link>
          </motion.div>
        </motion.div>

        {/* View All Projects CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="/projects"
              className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-[#f5f543] text-[#f5f543] font-semibold rounded-lg hover:bg-[#f5f543] hover:text-black transition-all duration-200"
            >
              View All 29 Projects
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <HiArrowRight className="ml-2" />
              </motion.span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

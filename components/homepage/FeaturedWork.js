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
        ease: [0.22, 1, 0.36, 1],
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
            Crisis recovery to industry-leading platform
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
                alt="Free Malaysia Today - News Platform Transformation"
                className="w-full h-full object-cover"
                priority
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
            </motion.div>

            {/* Content with stagger animations */}
            <motion.div
              className="p-8 flex flex-col justify-center"
              variants={containerVariants}
            >
              {/* Title */}
              <motion.div className="mb-2" variants={fadeInUpVariants}>
                <span className="text-sm text-[#f5f543] font-semibold tracking-wide uppercase">
                  Platform Transformation
                </span>
              </motion.div>

              <motion.h3
                className="text-3xl md:text-4xl font-bold text-white mb-4"
                variants={fadeInUpVariants}
              >
                Free Malaysia Today
              </motion.h3>

              <motion.p
                className="text-gray-300 mb-6 leading-relaxed"
                variants={fadeInUpVariants}
              >
                Solo development of V3 platform in 4 months. Inherited a failing
                WordPress site with 31% traffic decline, database at 100% load,
                and sections disappearing during spikes. Rebuilt from ground up
                with Next.js, achieving stability and unprecedented growth.
              </motion.p>

              {/* DIFFERENT Metrics - Focus on technical and business achievements */}
              <motion.div
                className="grid grid-cols-2 gap-4 mb-6"
                variants={containerVariants}
              >
                {[
                  {
                    value: "5.2s → 1.3s",
                    label: "Load Time (75% faster)",
                    delay: 0,
                  },
                  {
                    value: "0 → 6K",
                    label: "Google News Subscribers",
                    delay: 1,
                  },
                  {
                    value: "RM 60K → 15K",
                    label: "Monthly Infrastructure Cost",
                    delay: 2,
                  },
                  {
                    value: "All Green",
                    label: "Core Web Vitals",
                    delay: 3,
                  },
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
                    <div className="text-xl md:text-2xl font-bold text-[#f5f543] mb-1">
                      {metric.value}
                    </div>
                    <div className="text-xs text-gray-400 leading-tight">
                      {metric.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Achievement Highlights */}
              <motion.div
                className="bg-[#0a0a0a] p-4 rounded-lg border border-[#292929] mb-6"
                variants={fadeInUpVariants}
              >
                <div className="text-sm text-gray-400 mb-2">
                  Key Achievements
                </div>
                <ul className="space-y-2 text-sm text-gray-300">
                  <motion.li
                    className="flex items-start"
                    whileHover={{ x: 5, color: "#f5f543" }}
                  >
                    <span className="text-[#f5f543] mr-2">✓</span>
                    Became Google News Publisher with 6K subscribers from zero
                  </motion.li>
                  <motion.li
                    className="flex items-start"
                    whileHover={{ x: 5, color: "#f5f543" }}
                  >
                    <span className="text-[#f5f543] mr-2">✓</span>
                    Reduced infrastructure costs by 75% (RM 540K annual savings)
                  </motion.li>
                  <motion.li
                    className="flex items-start"
                    whileHover={{ x: 5, color: "#f5f543" }}
                  >
                    <span className="text-[#f5f543] mr-2">✓</span>
                    Database efficiency improved 70% (100% load → 30%)
                  </motion.li>
                  <motion.li
                    className="flex items-start"
                    whileHover={{ x: 5, color: "#f5f543" }}
                  >
                    <span className="text-[#f5f543] mr-2">✓</span>
                    100% uptime maintained during zero-downtime migrations
                  </motion.li>
                </ul>
              </motion.div>

              {/* Tech Stack with cascade animation */}
              <motion.div className="mb-6" variants={fadeInUpVariants}>
                <div className="text-sm text-gray-400 mb-2">Tech Stack</div>
                <motion.div
                  className="flex flex-wrap gap-2"
                  variants={containerVariants}
                >
                  {[
                    "Next.js 14",
                    "React 18",
                    "GCP Cloud Run",
                    "Kubernetes",
                    "CloudSQL",
                    "Redis Cache",
                    "Cloudflare CDN",
                    "WordPress API",
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
                  href="/blog/how-i-scaled-fmt"
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

        {/* Additional Projects Preview */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <p className="text-gray-400 mb-4">
            Curious about my other work? 150+ projects delivered over 18 years
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/projects"
              className="inline-flex items-center px-6 py-3 bg-[#1a1a1a] border border-[#292929] text-white rounded-lg hover:border-[#f5f543] hover:text-[#f5f543] transition-all group"
            >
              View All Projects
              <HiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

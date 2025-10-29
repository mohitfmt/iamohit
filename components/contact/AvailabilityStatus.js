"use client";

import { motion } from "framer-motion";
import { HiCheckCircle, HiXCircle } from "react-icons/hi";
import { FiTrendingUp, FiUsers, FiAward, FiZap } from "react-icons/fi";
import Image from "next/image";

const AvailabilityStatus = () => {
  const lookingFor = [
    "Senior Full-Stack Engineer roles",
    "News/Media technology companies in Malaysia",
    "Next.js/React-focused positions",
    "Team environment with growth potential",
  ];

  const notLookingFor = [
    "Native mobile app development",
    "Pure consulting roles",
    "Non-tech industries",
  ];

  const achievements = [
    { icon: <FiTrendingUp />, text: "184% traffic growth at FMT" },
    { icon: <FiUsers />, text: "8.5M monthly users served" },
    { icon: <FiAward />, text: "Top 3% StackOverflow contributor" },
    { icon: <FiZap />, text: "18+ years experience" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-20 px-4 bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/available.webp"
                alt="Mohit's Availability"
                width={600}
                height={600}
                className="w-full h-auto"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-lime-400/20 to-transparent" />
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-8"
          >
            {/* Status Badge */}
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-3 bg-lime-400 text-black px-6 py-3 rounded-full font-bold text-lg shadow-lg">
                <span className="relative flex h-4 w-4">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-black"></span>
                </span>
                Available for new opportunities
              </div>
            </motion.div>

            {/* Looking For Section */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                What I'm Looking For
              </h2>
              <ul className="space-y-3">
                {lookingFor.map((item, index) => (
                  <motion.li
                    key={index}
                    variants={itemVariants}
                    className="flex items-start gap-3 text-gray-300"
                  >
                    <HiCheckCircle className="text-lime-400 text-2xl flex-shrink-0 mt-0.5" />
                    <span className="text-lg">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Not Looking For Section */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-2xl font-bold text-white">
                Not Looking For
              </h3>
              <ul className="space-y-3">
                {notLookingFor.map((item, index) => (
                  <motion.li
                    key={index}
                    variants={itemVariants}
                    className="flex items-start gap-3 text-gray-400"
                  >
                    <HiXCircle className="text-gray-600 text-2xl flex-shrink-0 mt-0.5" />
                    <span className="text-base">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Why Work With Me */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-2xl font-bold text-white">
                Why Work With Me
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-3 bg-[#1a1a1a] border border-[#292929] rounded-lg p-4 hover:border-lime-400 transition-colors duration-300"
                  >
                    <div className="text-lime-400 text-2xl">
                      {achievement.icon}
                    </div>
                    <span className="text-gray-300 text-sm font-medium">
                      {achievement.text}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AvailabilityStatus;

"use client";

import { motion } from "framer-motion";
import { FiShield, FiLock, FiEye } from "react-icons/fi";

const PrivacyHero = () => {
  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: (i) => ({
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: i * 0.1,
      },
    }),
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const underlineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
        delay: 0.5,
      },
    },
  };

  return (
    <section className="relative pt-32 pb-20 px-4 overflow-hidden">
      {/* Animated background gradient */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-gradient-to-br from-lime-500/10 via-transparent to-purple-500/10"
      />

      <div className="max-w-5xl mx-auto relative">
        {/* Icon Group */}
        <div className="flex justify-center items-center gap-8 mb-8">
          <motion.div
            custom={0}
            variants={iconVariants}
            initial="hidden"
            animate="visible"
            className="text-5xl text-lime-400"
          >
            <FiShield />
          </motion.div>
          <motion.div
            custom={1}
            variants={iconVariants}
            initial="hidden"
            animate="visible"
            className="text-6xl text-[#f5f543]"
          >
            <FiLock />
          </motion.div>
          <motion.div
            custom={2}
            variants={iconVariants}
            initial="hidden"
            animate="visible"
            className="text-5xl text-purple-400"
          >
            <FiEye />
          </motion.div>
        </div>

        {/* Main Title */}
        <motion.div
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="text-center space-y-4"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white">
            Privacy{" "}
            <span className="relative inline-block">
              <span className="text-[#f5f543]">Policy</span>
              <motion.span
                variants={underlineVariants}
                initial="hidden"
                animate="visible"
                className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-lime-400 to-[#f5f543] origin-left"
              />
            </span>
          </h1>

          <motion.p
            variants={textVariants}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Your privacy matters. Here's how I handle your data with transparency
            and respect.
          </motion.p>

          <motion.div
            variants={textVariants}
            className="flex items-center justify-center gap-2 text-gray-400 text-sm"
          >
            <span className="w-2 h-2 bg-lime-400 rounded-full animate-pulse" />
            <span>Last updated: October 31, 2025</span>
          </motion.div>
        </motion.div>

        {/* Decorative Elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.05, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="absolute -top-20 -right-20 w-96 h-96 bg-[#f5f543] rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.05, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute -bottom-20 -left-20 w-96 h-96 bg-purple-500 rounded-full blur-3xl"
        />
      </div>
    </section>
  );
};

export default PrivacyHero;

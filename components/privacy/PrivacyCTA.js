"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiMail, FiMessageCircle, FiArrowRight } from "react-icons/fi";

const PrivacyCTA = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const buttonVariants = {
    rest: { scale: 1 },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    tap: { scale: 0.95 },
  };

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-lime-500/5 via-transparent to-transparent" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-4xl mx-auto relative"
      >
        {/* Main CTA Card */}
        <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-12 border border-white/10 shadow-2xl overflow-hidden">
          {/* Decorative elements */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -top-20 -right-20 w-64 h-64 bg-lime-400/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
            className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#f5f543]/20 rounded-full blur-3xl"
          />

          <div className="relative z-10 text-center space-y-8">
            {/* Icon */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center"
            >
              <div className="relative">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-lime-400 to-[#f5f543] rounded-full blur-2xl opacity-50"
                />
                <div className="relative w-20 h-20 bg-gradient-to-br from-lime-400 to-[#f5f543] rounded-2xl flex items-center justify-center">
                  <FiMessageCircle className="text-4xl text-black" />
                </div>
              </div>
            </motion.div>

            {/* Text Content */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                Questions About{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-[#f5f543]">
                  Your Privacy?
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                I'm committed to transparency. If you have any concerns or
                questions about how I handle your data, don't hesitate to reach
                out.
              </p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              {/* Email Button */}
              <motion.div
                variants={buttonVariants}
                initial="rest"
                whileHover="hover"
                whileTap="tap"
              >
                <Link
                  href="mailto:mohit5783@gmail.com"
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-lime-400 to-[#f5f543] text-black font-semibold rounded-xl shadow-lg hover:shadow-lime-400/50 transition-shadow duration-300"
                >
                  <FiMail className="text-xl" />
                  <span>Email Me</span>
                  <FiArrowRight className="text-xl group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </motion.div>

              {/* Contact Page Button */}
              <motion.div
                variants={buttonVariants}
                initial="rest"
                whileHover="hover"
                whileTap="tap"
              >
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-xl border border-white/20 hover:border-lime-400/50 transition-all duration-300"
                >
                  <span>Contact Page</span>
                  <FiArrowRight className="text-xl group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </motion.div>
            </motion.div>

            {/* Response Time */}
            <motion.div
              variants={itemVariants}
              className="flex items-center justify-center gap-2 text-gray-400 text-sm"
            >
              <motion.span
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-2 h-2 bg-lime-400 rounded-full"
              />
              <span>I typically respond within 24 hours</span>
            </motion.div>
          </div>
        </div>

        {/* Additional Info */}
        <motion.div
          variants={itemVariants}
          className="mt-12 text-center space-y-4"
        >
          <p className="text-gray-400 text-sm">
            This privacy policy was last updated on{" "}
            <span className="text-lime-400 font-semibold">
              October 31, 2025
            </span>
          </p>
          <p className="text-gray-500 text-xs max-w-2xl mx-auto">
            By using this website, you agree to the collection and use of
            information in accordance with this policy. If you do not agree,
            please discontinue use of this site.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default PrivacyCTA;

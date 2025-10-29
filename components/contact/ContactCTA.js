"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { HiMail, HiArrowRight } from "react-icons/hi";
import { FiCode, FiTrendingUp } from "react-icons/fi";

const ContactCTA = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-[#0f0f0f] to-[#0a0a0a] relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-lime-400/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Main Content */}
        <motion.div
          className="text-center space-y-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          {/* Icon Badge */}
          <motion.div
            className="flex justify-center gap-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-lime-400/10 border border-lime-400/30 rounded-full p-4">
              <FiCode className="text-4xl text-lime-400" />
            </div>
            <div className="bg-blue-500/10 border border-blue-500/30 rounded-full p-4">
              <FiTrendingUp className="text-4xl text-blue-500" />
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Ready to Start?
          </motion.h2>

          {/* Description */}
          <motion.p
            className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Let's discuss how I can help scale your platform to millions of
            users with proven Next.js expertise and battle-tested
            performance optimization.
          </motion.p>

          {/* Urgency Message */}
          <motion.div
            className="inline-block bg-[#1a1a1a] border border-lime-400/30 rounded-full px-6 py-3"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            animate={{
              borderColor: ["rgba(163, 230, 53, 0.3)", "rgba(163, 230, 53, 0.6)", "rgba(163, 230, 53, 0.3)"],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <p className="text-lime-400 font-semibold flex items-center gap-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-lime-400"></span>
              </span>
              Hiring for Q1 2026? Let's connect now.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 pt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="https://wa.me/60183553290"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 bg-lime-400 text-black px-8 py-4 rounded-lg text-lg font-bold hover:bg-white transition-all duration-300 shadow-lg hover:shadow-lime-400/50"
              >
                <FaWhatsapp className="text-2xl" />
                Schedule a Call
                <motion.span
                  className="group-hover:translate-x-1 transition-transform duration-300"
                >
                  <HiArrowRight className="text-xl" />
                </motion.span>
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/projects"
                className="group flex items-center gap-3 bg-transparent text-white border-2 border-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-white hover:text-black transition-all duration-300 shadow-lg hover:shadow-white/50"
              >
                View My Work
                <motion.span
                  className="group-hover:translate-x-1 transition-transform duration-300"
                >
                  <HiArrowRight className="text-xl" />
                </motion.span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Secondary Contact Options */}
          <motion.div
            className="pt-8 border-t border-[#292929] mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <p className="text-gray-500 mb-4">Or reach out directly:</p>
            <div className="flex flex-wrap justify-center gap-6 text-gray-400">
              <Link
                href="mailto:mohit5783@gmail.com"
                className="flex items-center gap-2 hover:text-lime-400 transition-colors duration-300"
              >
                <HiMail className="text-xl" />
                <span>mohit5783@gmail.com</span>
              </Link>
              <span className="text-gray-600">|</span>
              <Link
                href="tel:+60183553290"
                className="flex items-center gap-2 hover:text-lime-400 transition-colors duration-300"
              >
                <FaWhatsapp className="text-xl" />
                <span>+60 18-355 3290</span>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCTA;

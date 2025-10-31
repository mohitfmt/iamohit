"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { HiViewBoards, HiDownload, HiPhone, HiMail } from "react-icons/hi";
import { FaWhatsapp, FaLinkedin } from "react-icons/fa";

export default function FinalCTA() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section className="py-20 px-6 bg-linear-to-b from-[#121212] via-[#1a1a1a] to-[#121212] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-[#f5f543] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-5xl mx-auto relative z-10"
      >
        {/* Main CTA Card */}
        <motion.div
          variants={itemVariants}
          className="bg-linear-to-br from-[#212121] to-[#1a1a1a] border-2 border-[#f5f543] rounded-3xl p-12 text-center relative overflow-hidden"
        >
          {/* Animated background pattern */}
          <motion.div
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%"],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 50%, #f5f543 1px, transparent 1px), radial-gradient(circle at 80% 80%, #f5f543 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          ></motion.div>

          <div className="relative z-10">
            {/* Emoji */}
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-6xl mb-6"
            >
              🚀
            </motion.div>

            {/* Headline */}
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold text-white mb-4"
            >
              Ready to Discuss Your{" "}
              <span className="text-[#f5f543]">Next Project?</span>
            </motion.h2>

            {/* Subheadline */}
            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
            >
              I'm open to senior engineering and technical leadership
              opportunities. Let's build something amazing together.
            </motion.p>

            {/* Primary CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 justify-center mb-8"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/projects"
                  className="flex items-center gap-2 bg-[#f5f543] text-[#121212] px-8 py-4 rounded-xl text-lg font-bold hover:bg-[#f5f543]/90 transition-all duration-300 shadow-lg shadow-[#f5f543]/20"
                >
                  <HiViewBoards className="text-xl" />
                  View All Projects
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/contact"
                  className="flex items-center gap-2 bg-white text-[#121212] px-8 py-4 rounded-xl text-lg font-bold hover:bg-gray-200 transition-all duration-300 shadow-lg"
                >
                  <HiMail className="text-xl" />
                  Get In Touch
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href="/Mohit_Shrivastava_CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-transparent text-white border-2 border-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-white hover:text-[#121212] transition-all duration-300"
                >
                  <HiDownload className="text-xl" />
                  Download CV
                </a>
              </motion.div>
            </motion.div>

            {/* Divider */}
            <motion.div
              variants={itemVariants}
              className="w-24 h-1 bg-linear-to-r from-transparent via-[#f5f543] to-transparent mx-auto my-8"
            ></motion.div>

            {/* Quick Contact Options */}
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-semibold text-white mb-4">
                Or reach out directly:
              </h3>
              <div className="flex flex-wrap gap-4 justify-center">
                {/* WhatsApp */}
                <motion.a
                  href="https://wa.me/60183553290"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#20BA5A] transition-colors duration-300"
                >
                  <FaWhatsapp className="text-xl" />
                  WhatsApp
                </motion.a>

                {/* LinkedIn */}
                <motion.a
                  href="https://www.linkedin.com/in/mohit5783/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 bg-[#0A66C2] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#084F93] transition-colors duration-300"
                >
                  <FaLinkedin className="text-xl" />
                  LinkedIn
                </motion.a>

                {/* Email */}
                <motion.a
                  href="mailto:mohit5783@gmail.com"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 bg-[#EA4335] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#D33426] transition-colors duration-300"
                >
                  <HiMail className="text-xl" />
                  Email
                </motion.a>

                {/* Phone */}
                <motion.a
                  href="tel:+60183553290"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 bg-[#6B7280] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#4B5563] transition-colors duration-300"
                >
                  <HiPhone className="text-xl" />
                  Call
                </motion.a>
              </div>
            </motion.div>

            {/* Response time */}
            <motion.p
              variants={itemVariants}
              className="text-sm text-gray-400 mt-8"
            >
              ⚡ I typically respond within 24 hours
            </motion.p>
          </div>
        </motion.div>

        {/* Availability Status */}
        <motion.div variants={itemVariants} className="mt-8 text-center">
          <div className="inline-flex items-center gap-2 bg-[#212121] border-2 border-[#292929] px-6 py-3 rounded-full">
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-3 h-3 bg-green-500 rounded-full"
            ></motion.div>
            <span className="text-white font-semibold">
              Available for new opportunities
            </span>
          </div>
        </motion.div>

        {/* Bottom tagline */}
        <motion.div variants={itemVariants} className="text-center mt-8">
          <p className="text-gray-500 text-lg">
            Based in{" "}
            <span className="text-[#f5f543]">Kuala Lumpur, Malaysia</span> 🇲🇾
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Open to remote, hybrid, or on-site opportunities
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}

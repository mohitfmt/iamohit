"use client";
import { HiCode, HiUsers, HiTrendingUp, HiAcademicCap } from "react-icons/hi";
import { HiDocumentText } from "react-icons/hi2";
import { motion } from "framer-motion";
import {
  AccentureLogo,
  FMTLogo,
  ChangiAirportIcon,
  Kln,
  CustommediaLogo,
  IRISLogo,
} from "../Logos";

export default function SocialProof() {
  const proofPoints = [
    {
      icon: <HiCode className="w-8 h-8" />,
      title: "StackOverflow",
      value: "Top 3%",
      description: "Globally ranked developer",
    },
    {
      icon: <HiUsers className="w-8 h-8" />,
      title: "Impact",
      value: "8.5M Users",
      description: "Served monthly at scale",
    },
    {
      icon: <HiTrendingUp className="w-8 h-8" />,
      title: "Experience",
      value: "18 Years",
      description: "Production code shipped",
    },
    {
      icon: <HiAcademicCap className="w-8 h-8" />,
      title: "Industries",
      value: "7 Sectors",
      description: "Enterprise to startups",
    },
  ];

  const companies = [
    { name: "Free Malaysia Today", logo: FMTLogo },
    { name: "Accenture", logo: AccentureLogo },
    { name: "Changi Airport", logo: ChangiAirportIcon },
    { name: "Kerry Logistics", logo: Kln },
    { name: "Custommedia", logo: CustommediaLogo },
    { name: "IRIS", logo: IRISLogo },
  ];

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

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const logoVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const ctaVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
        delay: 0.8,
      },
    },
  };

  return (
    <section className="py-20 px-4 bg-[#121212]">
      <div className="max-w-6xl mx-auto">
        {/* Proof Points Grid */}
        <motion.div
          className="grid md:grid-cols-4 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {proofPoints.map((point, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
              className="bg-[#1a1a1a] border border-[#292929] rounded-xl p-6 text-center hover:border-[#f5f543] transition-colors duration-300"
            >
              <motion.div
                className="text-[#f5f543] flex justify-center mb-4"
                whileHover={{
                  rotate: [0, -5, 5, 0],
                  transition: { duration: 0.5 },
                }}
              >
                {point.icon}
              </motion.div>
              <div className="text-3xl font-bold text-white mb-2">
                {point.value}
              </div>
              <div className="text-lg font-semibold text-gray-300 mb-1">
                {point.title}
              </div>
              <div className="text-sm text-gray-400">{point.description}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Companies Worked With */}
        <div className="text-center mb-16">
          <motion.h3
            className="text-xl text-gray-400 mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Trusted by
          </motion.h3>
          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 gap-10 items-center max-w-5xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {companies.map((company, index) => (
              <motion.div
                key={company.name}
                variants={logoVariants}
                whileHover={{
                  y: -5,
                  transition: { duration: 0.2 },
                }}
                className="flex flex-col items-center justify-center gap-3 group"
              >
                {/* Logo */}
                <div className="h-16 w-full flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-300 opacity-60 group-hover:opacity-100">
                  <company.logo className="h-full w-auto object-contain max-w-[140px]" />
                </div>
                {/* Company Name */}
                <div className="text-sm font-medium text-gray-500 group-hover:text-gray-300 transition-colors duration-300">
                  {company.name}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Final CTA - Clean and Classy */}
        <motion.div
          className="mt-16 text-center bg-linear-to-br from-[#1a1a1a] via-[#151515] to-[#0a0a0a] border border-[#292929] rounded-2xl p-12"
          variants={ctaVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Ready to Build Something Great?
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Looking for my next challenge in Malaysia's news and media
            technology space. Let's talk about how I can help your platform
            scale.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {/* Primary CTA */}
            <motion.a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#f5f543] text-black font-semibold rounded-lg shadow-lg hover:shadow-xl hover:bg-[#e5e533] transition-all duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>

            {/* Secondary CTA */}
            <motion.a
              href="/projects"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transition-all duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Portfolio
            </motion.a>

            {/* Download CV Button */}
            <motion.a
              href="/resume.pdf"
              download
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-[#f5f543] text-[#f5f543] font-semibold rounded-lg hover:bg-[#f5f543] hover:text-black transition-all duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <HiDocumentText className="w-5 h-5" />
              Download CV
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

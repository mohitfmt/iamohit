"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { HiArrowDown, HiDownload, HiViewBoards } from "react-icons/hi";
import { useEffect, useState } from "react";

const ExpHero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleScrollToTimeline = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  // Calculate years of experience
  const startYear = 2006;
  const currentYear = new Date().getFullYear();
  const yearsOfExp = currentYear - startYear;

  // Typewriter effect variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        delayChildren: 0.3,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.1,
      },
    },
  };

  const statsVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: i * 0.1 + 1,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  const stats = [
    { value: "8.5M+", label: "Monthly Users at FMT" },
    { value: "184%", label: "Traffic Growth" },
    { value: "75%", label: "Faster (5.2s→1.3s)" },
    { value: "Top 3%", label: "StackOverflow" },
  ];

  const techBadges = [
    "Visual Basic (2006)",
    ".NET (2010)",
    "React (2018)",
    "Next.js (2023)",
  ];

  if (!mounted) {
    return (
      <section className="w-full my-5 flex items-center justify-center bg-[url('/expHero.webp')] bg-no-repeat bg-cover bg-top h-[900px] 2xl:h-[1400px]">
        <div className="w-full"></div>
      </section>
    );
  }

  return (
    <section className="w-full relative flex items-center justify-center bg-[url('/expHero.webp')] bg-no-repeat bg-cover bg-center h-screen min-h-[700px] overflow-hidden">
      {/* Parallax Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-linear-to-b from-[#121212]/80 via-[#121212]/60 to-[#121212]/90"
      ></motion.div>

      <div className="w-full max-w-6xl mx-auto px-6 relative z-10">
        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block mb-6"
          >
            <div className="bg-[#f5f543]/20 border border-[#f5f543] text-[#f5f543] px-6 py-2 rounded-full text-sm font-bold backdrop-blur-sm">
              {yearsOfExp}+ YEARS OF EXCELLENCE
            </div>
          </motion.div>

          {/* Main Headline with Typewriter Effect */}
          <motion.h1
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-white font-bold uppercase text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-6 leading-tight"
          >
            {mounted && (
              <>
                {"Building Systems That".split("").map((char, index) => (
                  <motion.span key={`line1-${index}`} variants={childVariants}>
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
                <br />
                <motion.span className="text-[#f5f543]">
                  {"Serve Millions".split("").map((char, index) => (
                    <motion.span
                      key={`line2-${index}`}
                      variants={childVariants}
                    >
                      {char === " " ? "\u00A0" : char}
                    </motion.span>
                  ))}
                </motion.span>
              </>
            )}
          </motion.h1>

          {/* Tech Evolution Subheadline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-4"
          >
            <p className="mb-3">
              From{" "}
              <span className="text-white font-semibold">Visual Basic</span>{" "}
              (2006) → <span className="text-white font-semibold">.NET</span>{" "}
              (2010) → <span className="text-white font-semibold">React</span>{" "}
              (2018) → <span className="text-[#f5f543] font-bold">Next.js</span>{" "}
              (2023)
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.5 }}
            className="text-lg md:text-xl text-gray-400 mb-8"
          >
            Led 150+ projects across 7 industries • Enterprise to startups •
            Serving millions of users
          </motion.p>

          {/* Quick Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={statsVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-[#212121]/80 backdrop-blur-sm border-2 border-[#292929] rounded-xl p-4 hover:border-[#f5f543] transition-colors duration-300"
              >
                <div className="text-3xl md:text-4xl font-bold text-[#f5f543] mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.2 }}
            className="flex flex-wrap gap-4 justify-center items-center"
          >
            <motion.button
              onClick={handleScrollToTimeline}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px rgba(245,245,67,0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-[#f5f543] text-[#121212] px-8 py-4 rounded-lg text-lg font-bold hover:bg-[#f5f543]/90 transition-colors duration-300"
            >
              <HiArrowDown className="text-xl" />
              View Career Timeline
            </motion.button>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/projects"
                className="flex items-center gap-2 bg-white text-[#121212] px-8 py-4 rounded-lg text-lg font-bold hover:bg-gray-200 transition-colors duration-300"
              >
                <HiViewBoards className="text-xl" />
                View Projects
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/Mohit_Shrivastava_CV.pdf"
                className="flex items-center gap-2 bg-transparent text-white border-2 border-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-white hover:text-[#121212] transition-all duration-300"
              >
                <HiDownload className="text-xl" />
                Download CV
              </Link>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 2.8 }}
            className="mt-16"
          >
            <motion.button
              onClick={handleScrollToTimeline}
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-[#f5f543] text-sm font-semibold flex flex-col items-center mx-auto cursor-pointer hover:text-[#f5f543]/80 transition-colors"
            >
              <span className="mb-2">Scroll to explore</span>
              <HiArrowDown className="text-2xl" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExpHero;

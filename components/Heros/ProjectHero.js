"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { HiArrowRight, HiChevronDown } from "react-icons/hi";
import { useRef } from "react";

const ProjectHero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax effect for background
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  // Typewriter effect text
  const mainTitle = "INNOVATIVE PROJECTS";

  const handleScrollClick = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section
      ref={ref}
      className="relative w-full my-5 flex items-center justify-center bg-[url('/ProjectHero.webp')] bg-no-repeat bg-cover bg-top h-[900px] 2xl:h-[1400px] overflow-hidden"
    >
      {/* Parallax Background Overlay */}
      <motion.div
        className="absolute inset-0 bg-black bg-opacity-50"
        style={{ opacity }}
      />

      {/* Animated Content */}
      <motion.div
        className="w-full z-10 px-4"
        style={{ y }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Main Title with Typewriter Effect */}
        <motion.h1
          className="text-white flex font-bold uppercase text-center text-3xl md:text-4xl lg:text-6xl xl:text-8xl items-center justify-center mt-0 mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {mainTitle.split("").map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.05,
                delay: 0.5 + index * 0.05,
              }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h1>

        {/* Tagline */}
        <motion.div
          className="text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center leading-relaxed max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <h2 className="font-bold text-[#f5f543] mb-4">
            150+ Projects. 34 Public Showcases. 18 Years of Excellence.
          </h2>
          <motion.p
            className="text-base md:text-lg lg:text-xl xl:text-2xl py-5 text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            From enterprise systems to platforms serving millions. Banking to
            news media. 116 projects under NDA.
          </motion.p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="w-full gap-4 justify-center flex flex-wrap py-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/experience"
              className="inline-flex items-center gap-2 bg-[#f5f543] text-black p-3 px-8 rounded-lg text-lg font-semibold hover:bg-[#e5e533] border border-solid border-transparent shadow-lg hover:shadow-xl transition-all duration-200 group"
            >
              <span>View Experience</span>
              <HiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-transparent text-white p-3 px-8 rounded-lg text-lg font-semibold hover:bg-white hover:text-black border-2 border-solid border-white transition-all duration-200"
            >
              Let's Collaborate
            </Link>
          </motion.div>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          className="flex flex-wrap justify-center gap-8 mt-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.0 }}
        >
          {[
            { value: "150+", label: "Total Projects" },
            { value: "34", label: "Public Showcases" },
            { value: "8.5M", label: "Users Served" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="px-6 py-3 bg-black bg-opacity-50 backdrop-blur-sm rounded-lg border border-[#292929] hover:border-[#f5f543] transition-colors"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: 2.2 + index * 0.1,
              }}
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(245, 245, 67, 0.1)",
              }}
            >
              <div className="text-2xl md:text-3xl font-bold text-[#f5f543]">
                {stat.value}
              </div>
              <div className="text-sm text-gray-300">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={handleScrollClick}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 2.5, duration: 0.5 },
          y: {
            repeat: Infinity,
            duration: 1.5,
            ease: "easeInOut",
          },
        }}
      >
        <div className="flex flex-col items-center gap-2 text-gray-300 hover:text-[#f5f543] transition-colors">
          <span className="text-xs uppercase tracking-wider font-semibold">
            Explore
          </span>
          <HiChevronDown className="text-3xl" />
        </div>
      </motion.div>
    </section>
  );
};

export default ProjectHero;

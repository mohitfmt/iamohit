"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

const ContactHero = () => {
  return (
    <section className="w-full my-5 flex items-center justify-center bg-[url('/contactMeHero.webp')] bg-no-repeat bg-cover bg-center min-h-screen relative">
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40" />
      
      <div className="w-full relative z-10 px-4">
        {/* Main Heading */}
        <motion.h1 
          className="text-white flex font-bold uppercase text-center text-4xl md:text-5xl lg:text-6xl xl:text-8xl items-center justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Let's Build Something Great
        </motion.h1>

        {/* Subheading */}
        <motion.div 
          className="text-xl md:text-2xl lg:text-3xl xl:text-4xl text-[#f5f543] py-8 px-2 text-center leading-relaxed max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          <h2 className="font-semibold text-stroke-black mb-4">
            Looking for a Senior Full-Stack Engineer who can scale platforms to millions?
          </h2>
          <p className="text-base md:text-lg lg:text-xl xl:text-2xl text-white text-stroke-black">
            I've done it at FMT (8.5M users, 184% growth). Let's talk about your next project.
          </p>
        </motion.div>

        {/* Availability Badge */}
        <motion.div
          className="flex justify-center mb-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="bg-lime-400/90 backdrop-blur-sm text-black px-6 py-3 rounded-full font-semibold text-sm md:text-base flex items-center gap-2 shadow-lg">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-black"></span>
            </span>
            Available for new opportunities
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div 
          className="w-full gap-4 justify-center flex flex-wrap py-10 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="https://wa.me/60183553290"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-lime-400 text-black p-3 px-8 rounded-lg text-lg font-semibold hover:bg-black hover:text-lime-400 border-2 border-lime-400 transition-all duration-300 shadow-lg hover:shadow-lime-400/50"
            >
              <FaWhatsapp className="text-2xl" />
              Chat on WhatsApp
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="mailto:mohit5783@gmail.com"
              className="flex items-center gap-2 bg-white text-black p-3 px-8 rounded-lg text-lg font-semibold hover:bg-black hover:text-white border-2 border-white transition-all duration-300 shadow-lg hover:shadow-white/50"
            >
              <HiMail className="text-2xl" />
              Send Email
            </Link>
          </motion.div>
        </motion.div>

        {/* Secondary Navigation */}
        <motion.div
          className="flex justify-center gap-4 text-white text-sm md:text-base"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Link 
            href="/projects" 
            className="hover:text-lime-400 transition-colors duration-300 underline underline-offset-4"
          >
            View My Work
          </Link>
          <span className="text-gray-400">|</span>
          <Link 
            href="/experience" 
            className="hover:text-lime-400 transition-colors duration-300 underline underline-offset-4"
          >
            See My Experience
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactHero;

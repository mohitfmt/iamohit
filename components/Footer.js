"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaStackOverflow,
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaFacebookF,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa";
import { FiPhoneOutgoing, FiMail, FiMapPin } from "react-icons/fi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const socialIconVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
    hover: {
      scale: 1.15,
      y: -5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  const dividerVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };

  const socialLinks = [
    {
      name: "Phone",
      icon: FiPhoneOutgoing,
      href: "tel:+60183553290",
      color: "#00a98f",
      label: "Call me",
    },
    {
      name: "WhatsApp",
      icon: FaWhatsapp,
      href: "https://wa.link/yx7qep",
      color: "#25d366",
      label: "Chat on WhatsApp",
    },
    {
      name: "StackOverflow",
      icon: FaStackOverflow,
      href: "https://stackoverflow.com/users/3796048/mohit-shrivastava",
      color: "#f48024",
      label: "Top 3% globally",
    },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/mohit5783",
      color: "#0a66c2",
      label: "Professional profile",
    },
    {
      name: "GitHub",
      icon: FaGithub,
      href: "https://github.com/mohit5783/",
      color: "#f5f5f5",
      label: "Code repositories",
    },
    {
      name: "Twitter",
      icon: FaTwitter,
      href: "https://twitter.com/mohit5783",
      color: "#1da1f2",
      label: "Follow on Twitter",
    },
    {
      name: "Facebook",
      icon: FaFacebookF,
      href: "https://www.facebook.com/iamohits/",
      color: "#1877f2",
      label: "Facebook profile",
    },
    {
      name: "Instagram",
      icon: FaInstagram,
      href: "https://www.instagram.com/mohit5783/",
      color: "#833ab4",
      label: "Instagram",
    },
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Experience", href: "/experience" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="w-full bg-gradient-to-b from-transparent to-black/30 mt-20">
      {/* Animated divider */}
      <motion.div
        variants={dividerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="h-[1px] bg-gradient-to-r from-transparent via-[#f5f543] to-transparent origin-center"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="container mx-auto px-6 py-16"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About Section */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-2xl font-bold text-[#f5f543] mb-4">
              Mohit Shrivastava
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Full-stack developer with 20+ years of experience building
              scalable applications. Specialized in Next.js, performance
              optimization, and high-traffic systems.
            </p>
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <FiMapPin className="text-[#f5f543]" />
              <span>Kuala Lumpur, Malaysia</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-xl font-semibold text-white mb-4">
              Quick Links
            </h3>
            <nav className="flex flex-col space-y-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-[#f5f543] transition-colors duration-300 text-sm group"
                >
                  <span className="inline-block group-hover:translate-x-1 transition-transform duration-300">
                    {link.name}
                  </span>
                </Link>
              ))}
            </nav>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-xl font-semibold text-white mb-4">
              Get In Touch
            </h3>
            <div className="space-y-3">
              <a
                href="tel:+60183553290"
                className="flex items-center space-x-3 text-gray-300 hover:text-[#f5f543] transition-colors duration-300 text-sm group"
              >
                <FiPhoneOutgoing className="text-lg group-hover:rotate-12 transition-transform duration-300" />
                <span>+60 18-355 3290</span>
              </a>
              <a
                href="mailto:mohit5783@gmail.com"
                className="flex items-center space-x-3 text-gray-300 hover:text-[#f5f543] transition-colors duration-300 text-sm group"
              >
                <FiMail className="text-lg group-hover:scale-110 transition-transform duration-300" />
                <span>mohit5783@gmail.com</span>
              </a>
              <a
                href="https://wa.link/yx7qep"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-300 hover:text-[#25d366] transition-colors duration-300 text-sm group"
              >
                <FaWhatsapp className="text-lg group-hover:scale-110 transition-transform duration-300" />
                <span>WhatsApp Me</span>
              </a>
            </div>
          </motion.div>

          {/* Notable Achievement */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-xl font-semibold text-white mb-4">
              Notable Work
            </h3>
            <div className="bg-gradient-to-br from-[#f5f543]/10 to-transparent border border-[#f5f543]/20 rounded-lg p-4 space-y-2">
              <div className="text-3xl font-bold text-[#f5f543]">8.5M+</div>
              <div className="text-sm text-gray-300">
                Monthly users served at Free Malaysia Today
              </div>
              <div className="text-xs text-gray-400">
                184% traffic growth • 60% faster load times
              </div>
            </div>
          </motion.div>
        </div>

        {/* Social Links Section */}
        <motion.div variants={itemVariants} className="mb-12">
          <div className="flex justify-center items-center">
            <div className="flex flex-wrap justify-center items-center gap-6">
              {socialLinks.map((social, index) => (
                <motion.div
                  key={social.name}
                  variants={socialIconVariants}
                  whileHover="hover"
                  custom={index}
                >
                  <Link
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative"
                    aria-label={social.label}
                  >
                    <social.icon
                      className="text-3xl transition-colors duration-300"
                      style={{ color: social.color }}
                      title={social.label}
                    />
                    {/* Tooltip */}
                    <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-black/90 text-white text-xs py-1 px-3 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                      {social.label}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          variants={itemVariants}
          className="border-t border-gray-800 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Mohit K Srivastava. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <Link
                href="/privacy"
                className="hover:text-[#f5f543] transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <span>•</span>
              <div className="flex items-center space-x-2">
                <span>Built with</span>
                <motion.span
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                  className="text-red-500"
                >
                  ♥
                </motion.span>
                <span>and Next.js</span>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;

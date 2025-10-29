"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaWhatsapp, FaLinkedin } from "react-icons/fa";
import { HiMail, HiPhone } from "react-icons/hi";

const QuickContactCards = () => {
  const contactMethods = [
    {
      icon: <FaWhatsapp className="text-5xl" />,
      title: "WhatsApp",
      description: "Quick Response",
      link: "https://wa.me/60183553290",
      linkText: "Chat on WhatsApp",
      subtext: "Typically respond within 1 hour",
      bgGradient: "from-green-500/10 to-green-600/10",
      hoverBorder: "hover:border-green-500",
      iconColor: "text-green-500",
    },
    {
      icon: <HiMail className="text-5xl" />,
      title: "Email",
      description: "mohit5783@gmail.com",
      link: "mailto:mohit5783@gmail.com",
      linkText: "Send Email",
      subtext: "For detailed inquiries",
      bgGradient: "from-blue-500/10 to-blue-600/10",
      hoverBorder: "hover:border-blue-500",
      iconColor: "text-blue-500",
    },
    {
      icon: <HiPhone className="text-5xl" />,
      title: "Phone",
      description: "+60 18-355 3290",
      link: "tel:+60183553290",
      linkText: "Call Now",
      subtext: "Available 9 AM - 6 PM MYT",
      bgGradient: "from-purple-500/10 to-purple-600/10",
      hoverBorder: "hover:border-purple-500",
      iconColor: "text-purple-500",
    },
    {
      icon: <FaLinkedin className="text-5xl" />,
      title: "LinkedIn",
      description: "Professional Profile",
      link: "https://www.linkedin.com/in/mohit-k-srivastava/",
      linkText: "View LinkedIn",
      subtext: "Full career history",
      bgGradient: "from-cyan-500/10 to-cyan-600/10",
      hoverBorder: "hover:border-cyan-500",
      iconColor: "text-cyan-500",
      external: true,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-20 px-4 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-400">
            Choose your preferred way to connect
          </p>
        </motion.div>

        {/* Contact Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {contactMethods.map((method, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="group"
            >
              <Link
                href={method.link}
                target={method.external ? "_blank" : undefined}
                rel={method.external ? "noopener noreferrer" : undefined}
                className="block h-full"
              >
                <div
                  className={`
                    bg-gradient-to-br ${method.bgGradient}
                    border-2 border-[#292929] ${method.hoverBorder}
                    rounded-2xl p-8 h-full
                    transition-all duration-300
                    hover:shadow-xl hover:shadow-lime-400/10
                    flex flex-col items-center text-center
                  `}
                >
                  {/* Icon */}
                  <motion.div
                    className={`${method.iconColor} mb-4`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {method.icon}
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {method.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 mb-4 text-sm">
                    {method.description}
                  </p>

                  {/* CTA Button */}
                  <div className="mt-auto pt-4">
                    <span className="inline-flex items-center gap-2 bg-lime-400 text-black px-6 py-2 rounded-lg font-semibold text-sm group-hover:bg-white transition-colors duration-300">
                      {method.linkText}
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        →
                      </motion.span>
                    </span>
                  </div>

                  {/* Subtext */}
                  <p className="text-gray-500 text-xs mt-4">{method.subtext}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default QuickContactCards;

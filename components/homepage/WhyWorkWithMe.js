"use client";
import { motion } from "framer-motion";
import { useRef } from "react";
import { FiTarget } from "react-icons/fi";
import {
  HiAcademicCap,
  HiChatBubbleLeftRight,
  HiCodeBracket,
  HiLightBulb,
  HiBolt,
  HiArrowTrendingUp,
  HiUserGroup,
} from "react-icons/hi2";

export default function WhyWorkWithMe() {
  const sectionRef = useRef(null);

  const highlights = [
    {
      icon: <HiAcademicCap className="w-10 h-10" />,
      title: "18+ Years Experience",
      description:
        "From Visual Basic in 2000 to modern Next.js. Proven track record scaling systems that serve millions across 7 industries.",
      metric: "Almost two decades",
    },
    {
      icon: <HiChatBubbleLeftRight className="w-10 h-10" />,
      title: "Clear Communication",
      description:
        "Led teams at Accenture for Fortune 100 clients. Can translate technical complexity to business impact for stakeholders.",
      metric: "Team leadership",
    },
    {
      icon: <HiCodeBracket className="w-10 h-10" />,
      title: "Clean, Maintainable Code",
      description:
        "Top 3% on StackOverflow with 14,111 reputation. I write code that teams can understand, maintain, and scale.",
      metric: "Production-ready",
    },
    {
      icon: <HiLightBulb className="w-10 h-10" />,
      title: "Diverse Industry Experience",
      description:
        "Worked across news media, enterprise, airports, IoT, and blockchain. I bring cross-industry insights to every project.",
      metric: "Fresh perspectives",
    },
    {
      icon: <FiTarget className="w-10 h-10" />,
      title: "Problem-Solver Mindset",
      description:
        "When FMT needed 184% growth, I architected the solution. When load times were 5.2s, I reduced them to 2.1s.",
      metric: "Results-driven",
    },
    {
      icon: <HiBolt className="w-10 h-10" />,
      title: "Performance Obsessed",
      description:
        "Optimized SQL queries, enhanced SEO, improved accessibility. I leave no stone unturned when it comes to making things faster.",
      metric: "Speed matters",
    },
    {
      icon: <HiArrowTrendingUp className="w-10 h-10" />,
      title: "Fast Learner",
      description:
        "Mastered Next.js 14 features within weeks. Stay current with tech trends to deliver modern, efficient solutions.",
      metric: "Always evolving",
    },
    {
      icon: <HiUserGroup className="w-10 h-10" />,
      title: "Reliable Delivery",
      description:
        "Managed 360-day FMT project with zero downtime migrations. I plan meticulously, estimate accurately, and deliver on time.",
      metric: "Dependable",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
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

  const iconVariants = {
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10,
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="py-20 px-4 bg-linear-to-b from-[#1a1a1a] to-[#121212]"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Why Work With Me
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Beyond technical skills, here's what makes me effective as a senior
            engineer and team member
          </p>
        </motion.div>

        {/* Highlights Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                scale: 1.03,
                transition: { duration: 0.2 },
              }}
              className="bg-[#1f1f1f] border border-[#292929] rounded-xl p-6 h-full hover:border-[#f5f543] transition-colors duration-300"
            >
              {/* Icon */}
              <motion.div
                className="text-[#f5f543] mb-4"
                variants={iconVariants}
                whileHover="hover"
              >
                {highlight.icon}
              </motion.div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-white mb-3">
                {highlight.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                {highlight.description}
              </p>

              {/* Metric Badge */}
              <div className="inline-block px-3 py-1 bg-[#f5f543]/10 border border-[#f5f543]/30 rounded-full">
                <span className="text-[#f5f543] text-xs font-semibold">
                  {highlight.metric}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 text-sm">
            Currently available for new positions – let&apos;s connect!
          </p>
        </motion.div>
      </div>
    </section>
  );
}

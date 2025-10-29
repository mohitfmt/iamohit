"use client";

import { motion, useMotionValue, useSpring, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import {
  HiUsers,
  HiTrendingUp,
  HiLightningBolt,
  HiCheckCircle,
} from "react-icons/hi";
import {
  FaProjectDiagram,
  FaHandshake,
  FaClock,
  FaTrophy,
  FaBolt,
} from "react-icons/fa";

// Animated Counter Component
function AnimatedCounter({ value, suffix = "", duration = 2 }) {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 50,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(parseFloat(value));
    }
  }, [motionValue, isInView, value]);

  useEffect(
    () =>
      springValue.on("change", (latest) => {
        if (ref.current) {
          const formatted = latest.toFixed(0);
          ref.current.textContent = formatted + suffix;
        }
      }),
    [springValue, suffix]
  );

  return <span ref={ref}></span>;
}

export default function ImpactMetrics() {
  const metricsRef = useRef(null);

  const metrics = [
    {
      icon: <HiUsers className="w-12 h-12" />,
      value: "8.5",
      suffix: "M+",
      label: "Monthly Users",
      sublabel: "Served at FMT",
      color: "from-[#f5f543] to-yellow-300",
    },
    {
      icon: <HiTrendingUp className="w-12 h-12" />,
      value: "184",
      suffix: "%",
      label: "Traffic Growth",
      sublabel: "In 4 years at FMT",
      color: "from-green-400 to-emerald-500",
    },
    {
      icon: <HiLightningBolt className="w-12 h-12" />,
      value: "75",
      suffix: "%",
      label: "Faster Load Times",
      sublabel: "5.2s → 1.3s",
      color: "from-blue-400 to-cyan-500",
    },
    {
      icon: <HiCheckCircle className="w-12 h-12" />,
      value: "100",
      suffix: "%",
      label: "Uptime",
      sublabel: "Even during migrations",
      color: "from-purple-400 to-pink-500",
    },
    // {
    //   icon: <FaBolt className="w-12 h-12" />,
    //   value: "22",
    //   suffix: "K",
    //   label: "Concurrent Users",
    //   sublabel: "Handled without hitch",
    //   color: "from-red-400 to-pink-500",
    // },
    {
      icon: <FaProjectDiagram className="w-12 h-12" />,
      value: "150",
      suffix: "+",
      label: "Projects",
      sublabel: "Delivered",
      color: "from-orange-400 to-red-500",
    },
    {
      icon: <FaHandshake className="w-12 h-12" />,
      value: "35",
      suffix: "+",
      label: "Satisfied Clients",
      sublabel: "Across 7 industries",
      color: "from-teal-400 to-green-500",
    },
    {
      icon: <FaClock className="w-12 h-12" />,
      value: "18",
      suffix: "+",
      label: "Years Experience",
      sublabel: "Production code",
      color: "from-indigo-400 to-blue-500",
    },
    {
      icon: <FaTrophy className="w-12 h-12" />,
      value: "3",
      suffix: "%",
      label: "Top StackOverflow",
      sublabel: "14K+ reputation",
      color: "from-[#f5f543] to-orange-400",
    },
  ];

  // Container animation
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

  // Card animation
  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section
      ref={metricsRef}
      className="py-20 px-6 bg-linear-to-b from-[#121212] via-[#1a1a1a] to-[#121212] relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-72 h-72 bg-[#f5f543] rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My Professional <span className="text-[#f5f543]">Impact</span> in
            Numbers
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Proven track record of delivering measurable results across 150+
            projects, serving millions of users, and driving business growth
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -8,
                scale: 1.05,
                transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
              }}
              className="bg-[#212121] border-2 border-[#292929] rounded-2xl p-6 relative overflow-hidden group"
            >
              {/* Gradient background on hover */}
              <div
                className={`absolute inset-0 bg-linear-to-br ${metric.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              ></div>

              {/* Icon */}
              <motion.div
                className={`text-transparent bg-clip-text bg-linear-to-br ${metric.color} mb-4`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                {metric.icon}
              </motion.div>

              {/* Value */}
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                <AnimatedCounter value={metric.value} suffix={metric.suffix} />
              </div>

              {/* Label */}
              <h3 className="text-lg font-semibold text-gray-200 mb-1">
                {metric.label}
              </h3>

              {/* Sublabel */}
              <p className="text-sm text-gray-400">{metric.sublabel}</p>

              {/* Bottom accent line */}
              <motion.div
                className={`absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r ${metric.color}`}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              ></motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 text-lg">
            💪 Building systems that serve millions, one line of code at a time
          </p>
        </motion.div>
      </div>
    </section>
  );
}

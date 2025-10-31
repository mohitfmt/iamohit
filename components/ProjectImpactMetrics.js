"use client";

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import {
  HiCode,
  HiUsers,
  HiClock,
  HiLightningBolt,
  HiUserGroup,
  HiSparkles,
} from "react-icons/hi";

// Animated counter hook
function useAnimatedCounter(target, duration = 2) {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    stiffness: 50,
    damping: 30,
  });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(target);
    }
  }, [isInView, motionValue, target]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Intl.NumberFormat("en-US").format(
          Math.floor(latest)
        );
      }
    });
    return unsubscribe;
  }, [springValue]);

  return ref;
}

export default function ProjectImpactMetrics() {
  const metrics = [
    {
      icon: <HiCode className="w-10 h-10" />,
      value: 150,
      label: "Total Projects",
      suffix: "+",
      color: "#f5f543",
    },
    {
      icon: <HiUsers className="w-10 h-10" />,
      value: 34,
      label: "Public Showcases",
      suffix: "",
      color: "#10b981",
    },
    {
      icon: <HiClock className="w-10 h-10" />,
      value: 116,
      label: "Under NDA",
      suffix: "",
      color: "#3b82f6",
    },
    {
      icon: <HiLightningBolt className="w-10 h-10" />,
      value: 75,
      label: "Cost Reduction",
      suffix: "%",
      color: "#f59e0b",
    },
    {
      icon: <HiUserGroup className="w-10 h-10" />,
      value: 8.5,
      label: "Users Served",
      suffix: "M",
      color: "#8b5cf6",
    },
    {
      icon: <HiSparkles className="w-10 h-10" />,
      value: 70,
      label: "Technologies",
      suffix: "+",
      color: "#ec4899",
    },
  ];

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
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section className="py-20 px-4 bg-[#121212]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Impact By Numbers
          </h2>
          <p className="text-gray-400 text-lg">
            Real projects. Real impact. Proven results.
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {metrics.map((metric, index) => (
            <MetricCard key={index} metric={metric} variants={cardVariants} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function MetricCard({ metric, variants }) {
  const counterRef = useAnimatedCounter(metric.value);

  return (
    <motion.div
      variants={variants}
      whileHover={{
        scale: 1.05,
        y: -5,
        transition: { duration: 0.2 },
      }}
      className="bg-[#1a1a1a] border-2 border-[#292929] rounded-xl p-6 text-center hover:border-[#f5f543] transition-colors duration-300 group"
    >
      {/* Icon */}
      <motion.div
        className="flex justify-center mb-4 text-[#f5f543]"
        whileHover={{
          scale: 1.1,
          rotate: 5,
          transition: { type: "spring", stiffness: 300 },
        }}
      >
        {metric.icon}
      </motion.div>

      {/* Value */}
      <div className="text-3xl md:text-4xl font-bold text-white mb-2">
        <span ref={counterRef}>0</span>
        <span className="text-[#f5f543]">{metric.suffix}</span>
      </div>

      {/* Label */}
      <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
        {metric.label}
      </div>
    </motion.div>
  );
}

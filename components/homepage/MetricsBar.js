"use client";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";

// Custom animated counter component
function AnimatedCounter({
  value,
  suffix = "",
  prefix = "",
  decimals = 0,
  duration = 2,
}) {
  const nodeRef = useRef(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-50px" });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  });
  const [displayValue, setDisplayValue] = useState(prefix + "0" + suffix);

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, motionValue, value]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      setDisplayValue(prefix + latest.toFixed(decimals) + suffix);
    });
    return unsubscribe;
  }, [springValue, decimals, prefix, suffix]);

  return <span ref={nodeRef}>{displayValue}</span>;
}

export default function MetricsBar() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  // COMPLETELY DIVERSIFIED METRICS - No repetition!
  const metrics = [
    {
      icon: "📰",
      value: "Google News",
      subvalue: "Publisher",
      description: "Official publisher status",
      tooltip: "Achieved Google News Publisher certification",
      isText: true,
    },
    {
      icon: "💬",
      value: "288x",
      description: "WhatsApp Growth",
      subvalue: "15 → 4,332 subscribers",
      tooltip: "WhatsApp subscriber explosion",
      prefix: "",
      suffix: "x",
      countTo: 289,
      decimals: 0,
    },
    {
      icon: "⚡",
      value: "70%",
      description: "Database Efficiency",
      subvalue: "100% load → 30%",
      tooltip: "Reduced database load from 100% to 30%",
      suffix: "%",
      countTo: 70,
      decimals: 0,
    },
    {
      icon: "💰",
      value: "RM 540K",
      description: "Annual Savings",
      subvalue: "75% cost reduction",
      tooltip: "Reduced infrastructure from RM 60K to RM 15K/month",
      isText: true,
    },
    {
      icon: "📊",
      value: "40%",
      description: "Google Discover",
      subvalue: "Traffic growth",
      tooltip: "40% increase in Google Discover traffic",
      suffix: "%",
      countTo: 40,
      decimals: 0,
    },
    {
      icon: "✅",
      value: "100%",
      description: "Uptime",
      subvalue: "Zero downtime",
      tooltip: "100% uptime during migrations",
      suffix: "%",
      countTo: 100,
      decimals: 0,
    },
    {
      icon: "👥",
      value: "22K",
      description: "Concurrent Users",
      subvalue: "Peak capacity",
      tooltip: "Handles 22,000 concurrent users seamlessly",
      suffix: "K",
      countTo: 22,
      decimals: 0,
    },
    {
      icon: "🎯",
      value: "All Green",
      description: "Core Web Vitals",
      subvalue: "Perfect scores",
      tooltip: "All Core Web Vitals metrics passing",
      isText: true,
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

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
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
    <section
      ref={sectionRef}
      className="bg-[#0a0a0a] border-y border-[#292929] py-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Section header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            The Complete Turnaround Story
          </h2>
          <p className="text-gray-400 text-lg">
            From crisis recovery to industry-leading performance
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                borderColor: "#f5f543",
                transition: { duration: 0.2 },
              }}
              className="bg-[#121212] p-5 rounded-xl border border-[#292929] hover:shadow-lg hover:shadow-[#f5f543]/10 transition-all group"
              title={metric.tooltip}
            >
              {/* Icon */}
              <motion.div
                className="text-3xl mb-3"
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {metric.icon}
              </motion.div>

              {/* Value */}
              <div className="text-2xl md:text-3xl font-bold text-[#f5f543] mb-1 leading-tight">
                {metric.isText ? (
                  metric.value
                ) : (
                  <AnimatedCounter
                    value={metric.countTo}
                    prefix={metric.prefix || ""}
                    suffix={metric.suffix || ""}
                    decimals={metric.decimals || 0}
                  />
                )}
              </div>

              {/* Description */}
              <div className="text-sm text-gray-300 font-medium mb-1">
                {metric.description}
              </div>

              {/* Sub-value */}
              <div className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors">
                {metric.subvalue}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <p className="text-gray-400 text-sm mb-4">
            Want to see the detailed breakdown of this transformation?
          </p>
          <motion.a
            href="/projects"
            className="inline-flex items-center text-[#f5f543] font-semibold hover:underline"
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Read the full FMT case study →
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

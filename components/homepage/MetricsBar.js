"use client";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function MetricsBar() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const metrics = [
    {
      value: "8.5M",
      label: "Users/Month",
      subtext: "FMT News Platform",
      suffix: "M",
      countTo: 8.5,
      decimals: 1,
    },
    {
      value: "+184%",
      label: "Traffic Growth",
      subtext: "Pageview increase",
      suffix: "%",
      countTo: 184,
      decimals: 0,
      prefix: "+",
    },
    {
      value: "60%",
      label: "Faster",
      subtext: "Load time reduction",
      suffix: "%",
      countTo: 60,
      decimals: 0,
    },
    {
      value: "Top 3%",
      label: "StackOverflow",
      subtext: "14K+ reputation",
      displayValue: "Top 3%",
      isText: true,
    },
    {
      value: "$100B+",
      label: "Client Worth",
      subtext: "Fortune 100 clients",
      displayValue: "$100B+",
      isText: true,
    },
    {
      value: "100%",
      label: "Uptime",
      subtext: "Zero downtime migrations",
      suffix: "%",
      countTo: 100,
      decimals: 0,
    },
    {
      value: "29+",
      label: "Projects",
      subtext: "Delivered at scale",
      suffix: "+",
      countTo: 29,
      decimals: 0,
    },
    {
      value: "18",
      label: "Years",
      subtext: "Production experience",
      countTo: 18,
      decimals: 0,
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="bg-[#0a0a0a] border-y border-[#292929] py-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Impact at Scale
          </h2>
          <p className="text-gray-400 text-lg">Numbers that tell the story</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {metrics.map((metric, index) => (
            <MetricCard
              key={index}
              metric={metric}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function MetricCard({ metric, index, isInView }) {
  const [displayValue, setDisplayValue] = useState(0);
  const count = useMotionValue(0);
  const rounded = useSpring(count, {
    damping: 50,
    stiffness: 100,
  });

  useEffect(() => {
    if (isInView && !metric.isText) {
      count.set(metric.countTo);
    }
  }, [isInView, metric, count]);

  useEffect(() => {
    if (!metric.isText) {
      const unsubscribe = rounded.on("change", (latest) => {
        setDisplayValue(latest);
      });
      return unsubscribe;
    }
  }, [rounded, metric]);

  const formatNumber = (num) => {
    if (metric.decimals === 1) {
      return num.toFixed(1);
    }
    return Math.round(num);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      className="text-center"
    >
      <motion.div
        className="text-4xl md:text-5xl font-bold text-[#f5f543] mb-2"
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {metric.isText ? (
          metric.displayValue
        ) : (
          <>
            {metric.prefix || ""}
            {formatNumber(displayValue)}
            {metric.suffix || ""}
          </>
        )}
      </motion.div>
      <div className="text-lg font-semibold text-white mb-1">
        {metric.label}
      </div>
      <div className="text-sm text-gray-400">{metric.subtext}</div>
    </motion.div>
  );
}

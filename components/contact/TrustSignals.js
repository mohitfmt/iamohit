"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  FiClock,
  FiBriefcase,
  FiMapPin,
  FiAward,
  FiShield,
} from "react-icons/fi";
import { SiStackoverflow } from "react-icons/si";

const TrustSignals = () => {
  const trustMetrics = [
    {
      icon: <FiClock />,
      label: "Response Time",
      value: "Within 24 hours",
      color: "text-blue-400",
    },
    {
      icon: <FiBriefcase />,
      label: "Current Role",
      value: "Technology Lead at FMT",
      color: "text-lime-400",
    },
    {
      icon: <FiMapPin />,
      label: "Location",
      value: "Kuala Lumpur, Malaysia",
      color: "text-purple-400",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-20 px-4 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Privacy Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/privacy.webp"
                alt="Privacy and Trust"
                width={600}
                height={600}
                className="w-full h-auto"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-linear-to-bl from-lime-400/20 to-transparent" />
            </div>
          </motion.div>

          {/* Right Side - Trust Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-8 order-1 lg:order-2"
          >
            {/* Privacy Section */}
            <motion.div variants={itemVariants} className="space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <FiShield className="text-4xl text-lime-400" />
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  Your Privacy Matters
                </h2>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                Your privacy matters. I use your contact information solely for
                communication purposes and won't share it without consent.{" "}
                <Link
                  href="/privacy"
                  className="text-lime-400 hover:text-lime-300 underline underline-offset-4 transition-colors"
                >
                  View full privacy policy →
                </Link>
              </p>
            </motion.div>

            {/* Trust Metrics Grid */}
            <motion.div variants={itemVariants} className="space-y-4">
              <div className="grid gap-4">
                {trustMetrics.map((metric, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 bg-[#1a1a1a] border border-[#292929] rounded-lg p-4 hover:border-lime-400/50 transition-all duration-300"
                  >
                    <div className={`text-3xl ${metric.color}`}>
                      {metric.icon}
                    </div>
                    <div>
                      <div className="text-gray-400 text-sm">
                        {metric.label}
                      </div>
                      <div className="text-white font-semibold text-lg">
                        {metric.value}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* StackOverflow Badge */}
            <motion.div variants={itemVariants}>
              <Link
                href="https://stackoverflow.com/users/5783683/mohit"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="bg-linear-to-r from-orange-500/10 to-orange-600/10 border-2 border-orange-500/50 rounded-xl p-6 hover:border-orange-500 transition-all duration-300 shadow-lg hover:shadow-orange-500/20"
                >
                  <div className="flex items-center gap-4">
                    <SiStackoverflow className="text-5xl text-orange-500" />
                    <div>
                      <div className="text-orange-400 text-sm font-semibold mb-1">
                        StackOverflow Profile
                      </div>
                      <div className="text-white text-2xl font-bold mb-1">
                        14,111 Reputation
                      </div>
                      <div className="flex items-center gap-2">
                        <FiAward className="text-lime-400" />
                        <span className="text-lime-400 font-semibold">
                          Top 3% globally
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-orange-500/30">
                    <p className="text-gray-400 text-sm">
                      Helping developers solve problems in JavaScript, React,
                      Next.js, and TypeScript
                    </p>
                  </div>
                </motion.div>
              </Link>
            </motion.div>

            {/* Additional Note */}
            <motion.div
              variants={itemVariants}
              className="bg-[#1a1a1a] border border-[#292929] rounded-lg p-6"
            >
              <p className="text-gray-400 text-sm leading-relaxed">
                <span className="text-white font-semibold">
                  Looking for references?
                </span>{" "}
                Check my StackOverflow answers, GitHub contributions, or reach
                out directly. I'm happy to connect you with previous clients and
                colleagues.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TrustSignals;

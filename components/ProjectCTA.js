"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { HiArrowRight, HiMail } from "react-icons/hi";

export default function ProjectCTA() {
  return (
    <section className="py-20 px-4 bg-linear-to-br from-[#1a1a1a] via-[#151515] to-[#0a0a0a]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="bg-[#1a1a1a] border-2 border-[#292929] rounded-2xl p-12 text-center hover:border-[#f5f543] transition-all duration-500"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          whileHover={{
            boxShadow: "0 0 40px rgba(245, 245, 67, 0.1)",
            transition: { duration: 0.3 },
          }}
        >
          {/* Badge */}
          <motion.div
            className="inline-block mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="px-4 py-2 bg-[#f5f543] bg-opacity-10 text-black rounded-full text-sm font-semibold border border-[#f5f543] border-opacity-30">
              Let's Build Together
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            className="text-3xl md:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Ready to Scale Your Platform?
          </motion.h2>

          {/* Description */}
          <motion.p
            className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            From news platforms to enterprise systems, I've delivered 150+
            solutions. Specialized in crisis turnarounds, performance
            optimization, and cost-efficient scaling. Let's discuss your next
            challenge.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {/* Primary CTA */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-[#f5f543] text-black font-semibold rounded-lg hover:bg-[#e5e533] transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <HiMail className="w-5 h-5" />
                <span>Let's Collaborate</span>
                <HiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            {/* Secondary CTA */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/experience"
                className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transition-all duration-200"
              >
                <span>View Experience</span>
                <HiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Additional Context */}
          <motion.div
            className="mt-10 pt-8 border-t border-[#292929]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-[#f5f543] mb-1">
                  150+ Projects
                </div>
                <div className="text-sm text-gray-400">Over 18 Years</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-[#f5f543] mb-1">
                  75% Cost Cut
                </div>
                <div className="text-sm text-gray-400">
                  RM 540K Saved Annually
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold text-[#f5f543] mb-1">
                  184% Growth
                </div>
                <div className="text-sm text-gray-400">
                  Crisis to 8.5M Users
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

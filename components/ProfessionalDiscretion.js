"use client";

import { motion } from "framer-motion";
import { HiLockClosed, HiCheckCircle } from "react-icons/hi";

export default function ProfessionalDiscretion() {
  const privateCategories = [
    { name: "Banking & Finance", count: 18 },
    { name: "Government Systems", count: 12 },
    { name: "Healthcare Platforms", count: 9 },
    { name: "Enterprise SaaS", count: 22 },
    { name: "Internal Tools", count: 38 },
    { name: "Consulting Projects", count: 17 },
  ];

  const publicCategories = [
    "News & Media",
    "Blockchain & Web3",
    "Open Source",
    "Startups & SMEs",
  ];

  return (
    <section className="py-20 px-4 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-[#f5f543] bg-opacity-10 text-black rounded-full text-sm font-semibold border border-[#f5f543] border-opacity-30"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <HiLockClosed className="w-4 h-4" />
            Professional Discretion
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 ">
            Privacy Over Self-Promotion
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Throughout my 18-year career, I've been trusted with sensitive
            projects across banking, government, healthcare, and enterprise
            systems. While I'm proud of this work, I respect NDAs and client
            confidentiality above self-promotion.
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Private Work Column */}
          <motion.div
            className="bg-[#1a1a1a] border-2 border-[#292929] rounded-2xl p-8 hover:border-[#f5f543] transition-colors duration-300"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-[#f5f543] bg-opacity-10 rounded-lg">
                <HiLockClosed className="w-8 h-8 text-[#f5f543]" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Private Work</h3>
                <p className="text-[#f5f543] font-semibold">
                  116 Projects Under NDA
                </p>
              </div>
            </div>

            <p className="text-gray-300 mb-6 leading-relaxed">
              Confidential projects I cannot publicly share due to client
              privacy, NDAs, and proprietary nature.
            </p>

            <div className="space-y-3">
              {privateCategories.map((category, index) => (
                <motion.div
                  key={category.name}
                  className="flex justify-between items-center p-3 bg-[#292929] rounded-lg hover:bg-[#333333] transition-colors"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index, duration: 0.3 }}
                >
                  <span className="text-gray-300">{category.name}</span>
                  <span className="text-[#f5f543] font-semibold">
                    {category.count} projects
                  </span>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-[#292929]">
              <p className="text-sm text-gray-400 italic">
                "I'm happy to discuss my role and contributions in these
                projects during conversations—just not on the internet."
              </p>
            </div>
          </motion.div>

          {/* Public Work Column */}
          <motion.div
            className="bg-[#1a1a1a] border-2 border-[#f5f543] rounded-2xl p-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-[#f5f543] rounded-lg">
                <HiCheckCircle className="w-8 h-8 text-black" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Public Work</h3>
                <p className="text-[#f5f543] font-semibold">
                  34 Projects Open to Share
                </p>
              </div>
            </div>

            <p className="text-gray-300 mb-6 leading-relaxed">
              Projects I can openly discuss with code, demos, and documentation.
            </p>

            <div className="space-y-3 mb-6">
              {publicCategories.map((category, index) => (
                <motion.div
                  key={category}
                  className="flex items-center gap-3 p-3 bg-[#f5f543] bg-opacity-10 rounded-lg"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index, duration: 0.3 }}
                >
                  <HiCheckCircle className="w-5 h-5 text-black shrink-0" />
                  <span className="text-black">{category}</span>
                </motion.div>
              ))}
            </div>

            <div className="p-4 bg-[#292929] rounded-lg">
              <p className="text-gray-300 text-sm mb-2">
                <strong className="text-white">Scale Examples:</strong>
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Platforms serving 8.5M+ monthly users</li>
                <li>• Enterprise systems for Fortune 500 companies</li>
                <li>• Real-time applications with 22K+ concurrent users</li>
                <li>• IoT deployments with 10K+ connected devices</li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Trust Message */}
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="p-8 bg-[#1a1a1a] border-2 border-[#292929] rounded-2xl">
            <h3 className="text-2xl font-bold text-white mb-4">
              Why This Makes Me More Trustworthy
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Companies in banking, government, and healthcare trusted me with
              their most sensitive systems. I protected their confidentiality
              then, and I'll protect yours too. The 34 projects below represent
              work I'm authorized to share publicly.
            </p>
            <p className="text-[#f5f543] font-semibold">
              Privacy isn't hiding—it's professionalism.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

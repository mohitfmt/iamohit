"use client";

import { motion, useMotionValue, useSpring, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import {
  HiTrendingDown,
  HiTrendingUp,
  HiLightningBolt,
  HiCheckCircle,
  HiCurrencyDollar,
  HiUserGroup,
  HiChartBar,
  HiStar,
} from "react-icons/hi";
import { FaWhatsapp, FaNewspaper, FaDatabase, FaRocket } from "react-icons/fa";

// Animated Counter Component
function AnimatedCounter({ value, suffix = "", decimals = 0, duration = 2 }) {
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
          const formatted = latest.toFixed(decimals);
          ref.current.textContent = formatted + suffix;
        }
      }),
    [springValue, suffix, decimals]
  );

  return <span ref={ref}></span>;
}

export default function CompleteFMTStory() {
  const sectionRef = useRef(null);

  return (
    <section
      ref={sectionRef}
      className="py-20 px-6 bg-linear-to-b from-[#121212] via-[#1a1a1a] to-[#121212] relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-red-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#f5f543] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-green-500 rounded-full blur-3xl"></div>
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
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-[#f5f543]/10 border border-[#f5f543]/30 rounded-full px-6 py-3 mb-6"
          >
            <FaRocket className="text-[#f5f543] text-xl" />
            <span className="text-[#f5f543] font-semibold">
              Featured Achievement
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            The FMT <span className="text-[#f5f543]">Turnaround</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto">
            From 31% traffic collapse to 184% recovery. From Senior Developer to
            Head of IT in 12 months.
            <br />
            <span className="text-white font-semibold">
              This is the complete story of how one person fixed a failing news
              platform.
            </span>
          </p>
        </motion.div>

        {/* The Crisis */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-red-400 mb-8 flex items-center justify-center gap-3">
            <HiTrendingDown className="text-4xl" />
            The Crisis (2023)
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            <CrisisCard
              icon={<HiTrendingDown className="w-12 h-12" />}
              title="Traffic Collapse"
              metric="31%"
              description="UV: 3.89M → 2.68M"
              color="from-red-500 to-orange-500"
            />
            <CrisisCard
              icon={<HiChartBar className="w-12 h-12" />}
              title="Pageview Decline"
              metric="39%"
              description="PV: 28M → 17M"
              color="from-orange-500 to-red-600"
            />
            <CrisisCard
              icon={<FaDatabase className="w-12 h-12" />}
              title="Database Overload"
              metric="100%"
              description="Constant throttling & crashes"
              color="from-red-600 to-red-800"
            />
            <CrisisCard
              icon={<HiLightningBolt className="w-12 h-12" />}
              title="V2 Migration Failed"
              metric="0"
              description="SEO considerations missing"
              color="from-red-800 to-black"
            />
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 text-center"
          >
            <p className="text-gray-400 text-lg">
              <span className="text-red-400 font-bold">
                Over 1.2M monthly visitors lost.
              </span>{" "}
              Sections disappearing during traffic spikes. Incomplete pages
              loading. The platform was failing.
            </p>
          </motion.div>
        </motion.div>

        {/* The Sprint */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-[#f5f543] mb-8 text-center flex items-center justify-center gap-3">
            <FaRocket className="text-4xl" />
            The Sprint (Nov 2023 - Mar 2024)
          </h3>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#212121] border-2 border-[#f5f543] rounded-2xl p-8 max-w-4xl mx-auto"
          >
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-[#f5f543] text-5xl font-bold mb-2">4</div>
                <div className="text-white font-semibold mb-1">Months</div>
                <div className="text-gray-400 text-sm">Solo development</div>
              </div>
              <div>
                <div className="text-[#f5f543] text-5xl font-bold mb-2">1</div>
                <div className="text-white font-semibold mb-1">Developer</div>
                <div className="text-gray-400 text-sm">Complete rebuild</div>
              </div>
              <div>
                <div className="text-[#f5f543] text-5xl font-bold mb-2">V3</div>
                <div className="text-white font-semibold mb-1">Launched</div>
                <div className="text-gray-400 text-sm">March 6, 2024</div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-[#292929]">
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <HiCheckCircle className="text-[#f5f543] text-xl mt-0.5 shrink-0" />
                  <span>
                    Complete SEO overhaul (metadata, structured data, URLs)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <HiCheckCircle className="text-[#f5f543] text-xl mt-0.5 shrink-0" />
                  <span>
                    Database optimization (query refactoring, re-indexing)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <HiCheckCircle className="text-[#f5f543] text-xl mt-0.5 shrink-0" />
                  <span>Custom caching solution (Next.js + Cloudflare)</span>
                </li>
                <li className="flex items-start gap-3">
                  <HiCheckCircle className="text-[#f5f543] text-xl mt-0.5 shrink-0" />
                  <span>Security hardening (Cloudflare Bot Management)</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </motion.div>

        {/* The Recovery */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-green-400 mb-8 text-center flex items-center justify-center gap-3">
            <HiTrendingUp className="text-4xl" />
            The Recovery (2024)
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <RecoveryCard
              icon={<HiUserGroup className="w-10 h-10" />}
              value="8.5"
              suffix="M"
              decimals={1}
              label="Monthly Users"
              description="184% growth from crisis"
              color="from-green-400 to-emerald-500"
            />
            <RecoveryCard
              icon={<HiLightningBolt className="w-10 h-10" />}
              value="75"
              suffix="%"
              label="Faster Load"
              description="5.2s → 1.3s"
              color="from-blue-400 to-cyan-500"
            />
            <RecoveryCard
              icon={<FaDatabase className="w-10 h-10" />}
              value="70"
              suffix="%"
              label="DB Efficient"
              description="100% load → 30%"
              color="from-purple-400 to-pink-500"
            />
            <RecoveryCard
              icon={<HiCheckCircle className="w-10 h-10" />}
              value="100"
              suffix="%"
              label="Uptime"
              description="Zero downtime"
              color="from-[#f5f543] to-yellow-300"
            />
          </div>
        </motion.div>

        {/* Business Impact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-[#f5f543] mb-8 text-center flex items-center justify-center gap-3">
            <HiCurrencyDollar className="text-4xl" />
            Business Impact
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            <BusinessCard
              icon={<HiCurrencyDollar className="w-10 h-10" />}
              title="Cost Reduction"
              metric="75%"
              description="RM 60K → RM 15K/month"
              color="from-green-400 to-emerald-600"
            />
            <BusinessCard
              icon={<HiTrendingUp className="w-10 h-10" />}
              title="Annual Savings"
              metric="RM 540K"
              description="Infrastructure optimization"
              color="from-[#f5f543] to-yellow-600"
            />
            <BusinessCard
              icon={<HiChartBar className="w-10 h-10" />}
              title="Ad Revenue"
              metric="64% ↑"
              description="Significantly increased"
              color="from-blue-400 to-indigo-600"
            />
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 text-center"
          >
            <div className="inline-block bg-linear-to-r from-green-500/20 to-[#f5f543]/20 border border-green-500/30 rounded-xl p-6">
              <p className="text-2xl text-white font-bold mb-2">The Paradox</p>
              <p className="text-gray-300 text-lg">
                <span className="text-green-400 font-bold">
                  184% more users
                </span>{" "}
                +{" "}
                <span className="text-[#f5f543] font-bold">75% less cost</span>{" "}
                = Smart architecture
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Growth Channels */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-white mb-8 text-center flex items-center justify-center gap-3">
            <HiStar className="text-4xl text-[#f5f543]" />
            Growth Channels
          </h3>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <GrowthCard
              icon={<FaNewspaper className="w-10 h-10" />}
              platform="Google News"
              before="0"
              after="6K"
              growth="NEW!"
              description="Publisher status achieved"
              color="from-red-400 to-orange-500"
            />
            <GrowthCard
              icon={<FaWhatsapp className="w-10 h-10" />}
              platform="WhatsApp"
              before="15"
              after="4.5K"
              growth="300x"
              description="Subscribers growth"
              color="from-green-400 to-emerald-500"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-linear-to-r from-[#f5f543]/10 to-green-500/10 border-2 border-[#f5f543] rounded-2xl p-8 text-center max-w-2xl mx-auto"
          >
            <div className="text-6xl font-bold text-[#f5f543] mb-3">
              <AnimatedCounter value="700" suffix="x" />
            </div>
            <div className="text-2xl text-white font-bold mb-2">
              Combined Subscriber Growth
            </div>
            <div className="text-gray-400">
              15 → 10,500 subscribers across channels
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-[#212121] border-2 border-[#292929] rounded-xl p-6 hover:border-[#f5f543] transition-colors"
            >
              <div className="text-[#f5f543] text-4xl font-bold mb-2">40%</div>
              <div className="text-white font-semibold mb-1">
                Google Discover
              </div>
              <div className="text-gray-400 text-sm">Traffic increase</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-[#212121] border-2 border-[#292929] rounded-xl p-6 hover:border-[#f5f543] transition-colors"
            >
              <div className="text-green-400 text-4xl font-bold mb-2">ALL</div>
              <div className="text-white font-semibold mb-1">
                Core Web Vitals
              </div>
              <div className="text-gray-400 text-sm">Passing (green)</div>
            </motion.div>
          </div>
        </motion.div>

        {/* Career Impact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-white mb-8 text-center flex items-center justify-center gap-3">
            <FaRocket className="text-4xl text-[#f5f543]" />
            Career Impact
          </h3>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
            className="bg-linear-to-br from-[#f5f543]/20 to-purple-500/20 border-2 border-[#f5f543] rounded-2xl p-8 max-w-4xl mx-auto"
          >
            <div className="text-center mb-6">
              <div className="text-5xl font-bold text-white mb-4">
                Senior Developer →{" "}
                <span className="text-[#f5f543]">Head of IT</span>
              </div>
              <div className="text-2xl text-gray-300 mb-2">
                In just 12 months
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// Crisis Card Component
function CrisisCard({ icon, title, metric, description, color }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="bg-[#212121] border-2 border-red-500/30 rounded-xl p-6 hover:border-red-500 transition-all"
    >
      <div
        className={`text-transparent bg-clip-text bg-linear-to-r ${color} mb-3`}
      >
        {icon}
      </div>
      <div className="text-3xl font-bold text-red-400 mb-2">{metric}</div>
      <div className="text-lg font-semibold text-white mb-1">{title}</div>
      <div className="text-sm text-gray-400">{description}</div>
    </motion.div>
  );
}

// Recovery Card Component
function RecoveryCard({
  icon,
  value,
  suffix,
  decimals = 0,
  label,
  description,
  color,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="bg-[#212121] border-2 border-[#292929] rounded-xl p-6 hover:border-green-400 transition-all relative overflow-hidden"
    >
      <div
        className={`absolute inset-0 bg-linear-to-br ${color} opacity-0 group-hover:opacity-10 transition-opacity`}
      ></div>
      <div
        className={`text-transparent bg-clip-text bg-linear-to-r ${color} mb-3 relative z-10`}
      >
        {icon}
      </div>
      <div className="text-4xl font-bold text-white mb-2 relative z-10">
        <AnimatedCounter value={value} suffix={suffix} decimals={decimals} />
      </div>
      <div className="text-lg font-semibold text-gray-200 mb-1 relative z-10">
        {label}
      </div>
      <div className="text-sm text-gray-400 relative z-10">{description}</div>
    </motion.div>
  );
}

// Business Card Component
function BusinessCard({ icon, title, metric, description, color }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.05 }}
      className="bg-[#212121] border-2 border-[#292929] rounded-xl p-6 hover:border-[#f5f543] transition-all"
    >
      <div
        className={`text-transparent bg-clip-text bg-linear-to-r ${color} mb-3`}
      >
        {icon}
      </div>
      <div className="text-lg font-semibold text-white mb-2">{title}</div>
      <div className="text-4xl font-bold text-[#f5f543] mb-2">{metric}</div>
      <div className="text-sm text-gray-400">{description}</div>
    </motion.div>
  );
}

// Growth Card Component
function GrowthCard({
  icon,
  platform,
  before,
  after,
  growth,
  description,
  color,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.05 }}
      className="bg-[#212121] border-2 border-[#292929] rounded-xl p-6 hover:border-[#f5f543] transition-all"
    >
      <div
        className={`text-transparent bg-clip-text bg-linear-to-r ${color} mb-4`}
      >
        {icon}
      </div>
      <div className="text-2xl font-bold text-white mb-3">{platform}</div>
      <div className="flex items-center justify-between mb-3">
        <div className="text-center">
          <div className="text-gray-500 text-sm mb-1">Before</div>
          <div className="text-3xl font-bold text-gray-400">{before}</div>
        </div>
        <div className="text-[#f5f543] text-2xl">→</div>
        <div className="text-center">
          <div className="text-gray-500 text-sm mb-1">After</div>
          <div className="text-3xl font-bold text-[#f5f543]">{after}</div>
        </div>
      </div>
      <div className="text-center pt-3 border-t border-[#292929]">
        <div className="text-green-400 text-xl font-bold mb-1">
          {growth} Growth
        </div>
        <div className="text-gray-400 text-sm">{description}</div>
      </div>
    </motion.div>
  );
}

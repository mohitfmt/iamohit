"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";
import { TbIconsOff } from "react-icons/tb";
import {
  ChangiAirportIcon,
  AccentureLogo,
  IRISLogo,
  Kln,
  CustommediaLogo,
  FMTLogo,
} from "@/components/Logos";

export default function CareerTimeline() {
  const timelineRef = useRef(null);
  const isInView = useInView(timelineRef, { once: true, margin: "-100px" });

  // Timeline data - CORRECTED based on actual ExperienceData
  const timelineData = [
    {
      id: 1,
      period: "2006-2008",
      company: "Apark Softwares",
      role: "Software Engineer",
      location: "Gwalior, India",
      logo: <TbIconsOff className="w-12 h-12" />,
      keyAchievement: "RTO Automation & School Management Systems",
      techHighlight: "Visual Basic • MS Access",
      color: "from-gray-400 to-gray-600",
    },
    {
      id: 2,
      period: "2008-2010",
      company: "GeoMapTech",
      role: "Software Engineer",
      location: "Gwalior, India",
      logo: <TbIconsOff className="w-12 h-12" />,
      keyAchievement: "GIS-based Land Records for Kerala & Karnataka",
      techHighlight: "VB6 • ArcGIS • MapObjects",
      color: "from-blue-400 to-blue-600",
    },
    {
      id: 3,
      period: "2011-2012",
      company: "VNS Pvt. Ltd.",
      role: "Web Developer",
      location: "New Delhi, India",
      logo: <TbIconsOff className="w-12 h-12" />,
      keyAchievement:
        "Payment Gateway Integration & SEO (200% traffic increase)",
      techHighlight: "PHP • Payment APIs • SalesForce",
      color: "from-green-400 to-green-600",
    },
    {
      id: 4,
      period: "2012-2019",
      company: "Custommedia",
      role: "System Technologist",
      location: "Kuala Lumpur, Malaysia",
      logo: <CustommediaLogo className="w-12 h-12" />,
      keyAchievement: "IoT Middleware Platform (7 years of innovation)",
      techHighlight: ".NET • WPF • Angular • IoT",
      color: "from-blue-400 to-blue-600",
    },
    {
      id: 5,
      period: "2019-2020",
      company: "Kerry Logistics",
      role: "Senior Software Engineer",
      location: "Penang, Malaysia",
      logo: <Kln className="w-12 h-12" />,
      keyAchievement: "20x performance improvement on legacy WPF apps",
      techHighlight: "C# • WPF • WCF • Architecture",
      color: "from-stone-800 to-gray-600",
    },
    {
      id: 6,
      period: "2020-2021",
      company: "IRIS Corporation",
      role: "Senior Engineer",
      location: "Kuala Lumpur, Malaysia",
      logo: <IRISLogo className="w-12 h-12" />,
      keyAchievement: "80% faster Web APIs for $284B insurance client",
      techHighlight: "ASP.NET Core • Angular • React",
      color: "from-purple-400 to-purple-600",
    },
    {
      id: 7,
      period: "2021-2023",
      company: "Accenture",
      role: "Multiple Roles",
      location: "Kuala Lumpur, Malaysia",
      logo: <AccentureLogo className="w-12 h-12" />,
      keyAchievement: "Changi Airport, 3D Virtual Worlds, Banking Apps",
      techHighlight: "React • Three.js • Angular • AWS",
      color: "from-teal-400 to-teal-600",
    },
    {
      id: 8,
      period: "2023-Present",
      company: "Free Malaysia Today",
      role: "Technology Lead",
      location: "Kuala Lumpur, Malaysia",
      logo: <FMTLogo className="w-12 h-12" />,
      keyAchievement: "Scaled to 8.5M users • 184% growth • 75% faster",
      techHighlight: "Next.js • GCP • Kubernetes",
      color: "from-[#f5f543] to-yellow-600",
      isCurrent: true,
    },
  ];

  // Animation variants
  const lineVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 2,
        ease: "easeInOut",
      },
    },
  };

  const nodeVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: i * 0.15,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.12,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  return (
    <section
      ref={timelineRef}
      className="py-20 px-6 bg-linear-to-b from-[#1a1a1a] to-[#121212] relative"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Career <span className="text-[#f5f543]">Journey</span>
          </h2>
          <p className="text-xl text-gray-400">
            From Visual Basic to scaling platforms serving millions
          </p>
        </motion.div>

        {/* Desktop: Horizontal Timeline */}
        <div className="hidden lg:block relative">
          {/* Timeline Line */}
          <svg
            className="absolute top-32 left-0 w-full h-2"
            style={{ zIndex: 0 }}
          >
            <motion.line
              x1="3%"
              y1="1"
              x2="97%"
              y2="1"
              stroke="url(#gradient)"
              strokeWidth="3"
              variants={lineVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#6b7280" />
                <stop offset="50%" stopColor="#f5f543" />
                <stop offset="100%" stopColor="#10b981" />
              </linearGradient>
            </defs>
          </svg>

          {/* Timeline Nodes - 8 companies */}
          <div
            className="grid grid-cols-8 gap-2 relative"
            style={{ zIndex: 1 }}
          >
            {timelineData.map((item, index) => (
              <motion.div
                key={item.id}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="flex flex-col items-center"
              >
                {/* Node */}
                <motion.div
                  custom={index}
                  variants={nodeVariants}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className={`w-16 h-16 rounded-full bg-linear-to-br ${item.color} flex items-center justify-center border-4 border-[#121212] shadow-xl mb-4 relative`}
                >
                  <div className="text-white scale-75">{item.logo}</div>
                  {item.isCurrent && (
                    <motion.div
                      className="absolute -top-2 -right-2 w-5 h-5 bg-green-500 rounded-full border-2 border-[#121212]"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  )}
                </motion.div>

                {/* Card */}
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(245, 245, 67, 0.2)",
                  }}
                  transition={{ duration: 0.3 }}
                  className="bg-[#212121] border-2 border-[#292929] rounded-xl p-3 hover:border-[#f5f543] transition-colors duration-300 w-full"
                >
                  <div className="text-xs text-[#f5f543] font-bold mb-1">
                    {item.period}
                  </div>
                  <h3 className="text-xs font-bold text-white mb-1 line-clamp-2">
                    {item.company}
                  </h3>
                  <p className="text-xs text-gray-400 mb-1">{item.role}</p>
                  <div className="flex items-center text-xs text-gray-500 mb-2">
                    <FaMapMarkerAlt className="mr-1 shrink-0" />
                    <span className="truncate">{item.location}</span>
                  </div>
                  <p className="text-xs text-gray-300 mb-2 line-clamp-3">
                    {item.keyAchievement}
                  </p>
                  <div className="text-xs text-gray-500 font-mono line-clamp-2">
                    {item.techHighlight}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile/Tablet: Vertical Timeline */}
        <div className="lg:hidden relative">
          {/* Vertical Line */}
          <motion.div
            className="absolute left-8 top-0 bottom-0 w-1 bg-linear-to-b from-gray-600 via-[#f5f543] to-green-500"
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />

          <div className="space-y-8">
            {timelineData.map((item, index) => (
              <motion.div
                key={item.id}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="relative flex items-start ml-16"
              >
                {/* Node */}
                <motion.div
                  custom={index}
                  variants={nodeVariants}
                  className={`absolute -left-20 w-16 h-16 rounded-full bg-linear-to-br ${item.color} flex items-center justify-center border-4 border-[#121212] shadow-xl`}
                >
                  <div className="text-white scale-75">{item.logo}</div>
                  {item.isCurrent && (
                    <motion.div
                      className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-[#121212]"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  )}
                </motion.div>

                {/* Card */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-[#212121] border-2 border-[#292929] rounded-xl p-6 hover:border-[#f5f543] transition-colors duration-300 w-full"
                >
                  <div className="text-sm text-[#f5f543] font-bold mb-2">
                    {item.period}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {item.company}
                  </h3>
                  <p className="text-base text-gray-400 mb-2">{item.role}</p>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <FaMapMarkerAlt className="mr-2" />
                    {item.location}
                  </div>
                  <p className="text-base text-gray-300 mb-4">
                    ✨ {item.keyAchievement}
                  </p>
                  <div className="text-sm text-gray-500 font-mono bg-[#1a1a1a] p-3 rounded-lg">
                    {item.techHighlight}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Arrow & CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center mt-16"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-[#f5f543] mb-4"
          >
            <FaArrowRight className="inline-block transform rotate-90 text-3xl" />
          </motion.div>
          <p className="text-gray-400 text-lg">
            Scroll down to see detailed experience at each company
          </p>
        </motion.div>
      </div>
    </section>
  );
}

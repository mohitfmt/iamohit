"use client";

import { motion } from "framer-motion";
import { FaCookie } from "react-icons/fa";
import {
  FiDatabase,
  FiEye,
  FiUsers,
  FiShield,
  FiRefreshCw,
  FiAlertCircle,
} from "react-icons/fi";

const PrivacyContent = () => {
  const sections = [
    {
      icon: <FiDatabase />,
      title: "Information I Collect",
      color: "text-blue-400",
      content: [
        {
          subtitle: "Contact Information",
          text: "When you reach out through the contact form, email, or WhatsApp, I collect your name, email address, phone number (if provided), and the content of your message.",
        },
        {
          subtitle: "Analytics Data",
          text: "I use Google Analytics to understand how visitors interact with this portfolio. This includes anonymized data such as pages visited, time spent on site, device type, and approximate location (city/country level).",
        },
        {
          subtitle: "Technical Information",
          text: "Standard web server logs collect IP addresses, browser type, operating system, and referring websites to help maintain site security and performance.",
        },
      ],
    },
    {
      icon: <FiEye />,
      title: "How I Use Your Information",
      color: "text-lime-400",
      content: [
        {
          subtitle: "Communication",
          text: "Your contact information is used solely to respond to your inquiries, discuss potential projects, or maintain professional correspondence.",
        },
        {
          subtitle: "Site Improvement",
          text: "Analytics data helps me understand which projects and content resonate most with visitors, allowing me to improve the portfolio experience.",
        },
        {
          subtitle: "Security",
          text: "Technical logs help identify and prevent security threats, spam, and abuse.",
        },
      ],
    },
    {
      icon: <FaCookie />,
      title: "Cookies & Tracking",
      color: "text-[#f5f543]",
      content: [
        {
          subtitle: "Essential Cookies",
          text: "This site uses minimal essential cookies required for basic functionality.",
        },
        {
          subtitle: "Analytics Cookies",
          text: "Google Analytics uses cookies to track visitor behavior. These cookies are anonymized and help me understand portfolio performance. You can opt-out using browser extensions like uBlock Origin or Privacy Badger.",
        },
        {
          subtitle: "No Third-Party Marketing",
          text: "I do not use cookies for advertising, remarketing, or selling data to third parties.",
        },
      ],
    },
    {
      icon: <FiUsers />,
      title: "Data Sharing",
      color: "text-purple-400",
      content: [
        {
          subtitle: "No Selling",
          text: "I never sell, rent, or trade your personal information to third parties. Period.",
        },
        {
          subtitle: "Service Providers",
          text: "I use reputable services like Google Analytics, Vercel (hosting), and email providers. These services have their own privacy policies and data protection measures.",
        },
        {
          subtitle: "Legal Requirements",
          text: "I may disclose information if required by law, court order, or to protect legal rights.",
        },
      ],
    },
    {
      icon: <FiShield />,
      title: "Data Security",
      color: "text-pink-400",
      content: [
        {
          subtitle: "Protection Measures",
          text: "All data transmitted through this site is encrypted using HTTPS/TLS. Contact form submissions are processed securely and stored with industry-standard encryption.",
        },
        {
          subtitle: "Data Retention",
          text: "I retain contact information only as long as necessary to respond to inquiries or maintain professional relationships. Analytics data is retained according to Google Analytics' policies (typically 26 months).",
        },
        {
          subtitle: "No Guarantees",
          text: "While I implement reasonable security measures, no internet transmission is 100% secure. I cannot guarantee absolute security.",
        },
      ],
    },
    {
      icon: <FiRefreshCw />,
      title: "Your Rights",
      color: "text-lime-400",
      content: [
        {
          subtitle: "Access & Correction",
          text: "You have the right to request access to any personal information I hold about you and to request corrections if it's inaccurate.",
        },
        {
          subtitle: "Deletion",
          text: "You can request deletion of your personal information at any time. Contact me and I'll remove your data from my systems within 30 days.",
        },
        {
          subtitle: "Opt-Out",
          text: "You can opt-out of analytics tracking using browser settings, private browsing, or ad-blocking extensions.",
        },
        {
          subtitle: "Data Portability",
          text: "You can request a copy of your data in a machine-readable format.",
        },
      ],
    },
    {
      icon: <FiAlertCircle />,
      title: "Third-Party Links",
      color: "text-yellow-400",
      content: [
        {
          subtitle: "External Links",
          text: "This portfolio contains links to external sites (GitHub, LinkedIn, StackOverflow, etc.). I am not responsible for the privacy practices of these sites. Please review their privacy policies.",
        },
        {
          subtitle: "Social Media",
          text: "Social media icons link to my public profiles. Interactions on those platforms are governed by their respective privacy policies.",
        },
      ],
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

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-16"
        >
          {sections.map((section, index) => (
            <motion.div
              key={index}
              variants={sectionVariants}
              className="relative"
            >
              {/* Section Header */}
              <div className="flex items-center gap-4 mb-8">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`text-4xl ${section.color}`}
                >
                  {section.icon}
                </motion.div>
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  {section.title}
                </h2>
              </div>

              {/* Content Cards */}
              <div className="space-y-6">
                {section.content.map((item, idx) => (
                  <motion.div
                    key={idx}
                    variants={cardVariants}
                    className="group relative"
                  >
                    <div className="relative bg-linear-to-br from-white/5 to-white/2 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300">
                      {/* Hover glow effect */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        className={`absolute inset-0 rounded-xl bg-linear-to-br ${
                          section.color === "text-blue-400"
                            ? "from-blue-400/5"
                            : section.color === "text-lime-400"
                            ? "from-lime-400/5"
                            : section.color === "text-[#f5f543]"
                            ? "from-yellow-400/5"
                            : section.color === "text-purple-400"
                            ? "from-purple-400/5"
                            : section.color === "text-pink-400"
                            ? "from-pink-400/5"
                            : "from-yellow-400/5"
                        } to-transparent blur-xl`}
                        transition={{ duration: 0.3 }}
                      />

                      <div className="relative z-10">
                        <h3
                          className={`text-xl font-semibold mb-3 ${section.color}`}
                        >
                          {item.subtitle}
                        </h3>
                        <p className="text-gray-300 leading-relaxed">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}

          {/* Children's Privacy Section */}
          <motion.div
            variants={sectionVariants}
            className="bg-linear-to-br from-red-500/10 to-red-500/5 rounded-2xl p-8 border border-red-500/20"
          >
            <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
              <FiAlertCircle className="text-red-400" />
              Children's Privacy
            </h2>
            <p className="text-gray-300 leading-relaxed">
              This portfolio is not directed to individuals under 18. I do not
              knowingly collect personal information from children. If you
              believe a child has provided me with personal information, please
              contact me immediately and I'll delete it.
            </p>
          </motion.div>

          {/* GDPR & International Users */}
          <motion.div
            variants={sectionVariants}
            className="bg-linear-to-br from-blue-500/10 to-blue-500/5 rounded-2xl p-8 border border-blue-500/20"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              GDPR & International Users
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              If you're accessing this site from the European Union or other
              regions with data protection laws, you have additional rights
              under GDPR, including:
            </p>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-lime-400 mt-1">•</span>
                <span>Right to be informed about data collection</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-lime-400 mt-1">•</span>
                <span>Right to access your personal data</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-lime-400 mt-1">•</span>
                <span>Right to rectification of inaccurate data</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-lime-400 mt-1">•</span>
                <span>Right to erasure ("right to be forgotten")</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-lime-400 mt-1">•</span>
                <span>Right to data portability</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-lime-400 mt-1">•</span>
                <span>Right to object to data processing</span>
              </li>
            </ul>
          </motion.div>

          {/* Changes to Privacy Policy */}
          <motion.div
            variants={sectionVariants}
            className="bg-linear-to-br from-purple-500/10 to-purple-500/5 rounded-2xl p-8 border border-purple-500/20"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Changes to This Policy
            </h2>
            <p className="text-gray-300 leading-relaxed">
              I may update this privacy policy periodically to reflect changes
              in practices or legal requirements. Significant changes will be
              highlighted on this page with the "Last updated" date. Continued
              use of this site after changes constitutes acceptance of the
              updated policy.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PrivacyContent;

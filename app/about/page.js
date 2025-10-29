"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  FcGraduationCap,
  FcHome,
  FcLightAtTheEndOfTunnel,
  FcIdea,
  FcGlobe,
  FcBriefcase,
  FcLike,
  FcManager,
  FcApproval,
} from "react-icons/fc";
import {
  FaMapMarkerAlt,
  FaHeart,
  FaRocket,
  FaStar,
  FaTrophy,
} from "react-icons/fa";
import pp from "../../public/NewProfilePic.webp";
import passionValues from "../../public/AnotherProfilePic.webp";

// export const metadata = {
//   keywords: [
//     "About Mohit Shrivastava",
//     "Senior Full-Stack Engineer",
//     "Life Journey",
//     "Gwalior to Malaysia",
//     "Developer Story",
//     "From 64% to 8.5M Users",
//     "Tech Leader Malaysia",
//     "Personal Growth Story",
//     "Inspiring Developer Journey",
//   ],
//   title:
//     "About Mohit Shrivastava | From 64% to Leading Platforms Serving 8.5M Users",
//   description:
//     "From a below-average student in Gwalior who scored 64% to leading technology for 8.5M users in Malaysia. A personal journey of transformation, courage, and living king size.",
// };

const About = () => {
  const YrsOfExp = new Date().getFullYear() - 2006;

  // Life phases data with personal stories
  const lifePhases = [
    {
      id: 1,
      phase: "Roots",
      years: "1984-1998",
      location: "Ujjain → Shujalpur",
      icon: <FcHome size="50" />,
      tagline: "Where it all began",
      story:
        "Born in Ujjain, early schooling at Deepti Convent School in Shujalpur. A beautiful coincidence - my mother's name was also Deepti Shrivastava. Festivals, especially Holi, were magical in those days.",
      highlights: [
        "Born in Ujjain, Madhya Pradesh",
        "Deepti Convent School (mother's name: Deepti!)",
        "Unforgettable Holi festivals in Shujalpur",
      ],
      color: "from-blue-500/20 to-purple-500/20",
    },
    {
      id: 2,
      phase: "The Gwalior Years",
      years: "1998-2000",
      location: "Gwalior, MP",
      icon: <FcGraduationCap size="50" />,
      tagline: "Commerce student, not so good",
      story:
        "Dad got transferred to Gwalior. National Convent School, Palpur house. Chose commerce stream. I was a below-average student. Nobody really cared about me in class. I wasn't known for studies. But everything was about to change.",
      highlights: [
        "Dad's transfer brought us to Gwalior",
        "11th-12th at National Convent School",
        "Commerce stream - below average student",
        "Nobody knew my name for academics",
      ],
      color: "from-gray-500/20 to-slate-500/20",
    },
    {
      id: 3,
      phase: "Summer 2000",
      years: "The Turning Point",
      location: "Gwalior",
      icon: <FcLightAtTheEndOfTunnel size="50" />,
      tagline: "64% changed everything",
      story:
        "Parents wanted me to do BBA at Jiwaji University. They asked me to fill the form. I thought I wouldn't get selected with my marks. Somehow, 64% was good enough - I got the seat. That's when I collected the courage: 'I don't want theoretical studies. I'm not good at that. Give me computers, or I'll work at the convenience store.' After a few rounds of discussion, they agreed.",
      highlights: [
        "Got BBA seat with 64% (unexpectedly!)",
        "Had the courage conversation with parents",
        '"Give me computers or I\'ll run the mart"',
        "They agreed - life changed forever",
      ],
      color: "from-yellow-500/20 to-orange-500/20",
      isHighlight: true,
    },
    {
      id: 4,
      phase: "The Transformation",
      years: "2000-2003",
      location: "Gwalior",
      icon: <FcIdea size="50" />,
      tagline: "From nobody to THE guy",
      story:
        "Aptech HDSE and Manipal Academy BIT. My life transformed. My personality changed. I was no longer that 'stupid fellow' nobody cared about. For the first time, I was KNOWN for studies. People came to ME to clear their doubts. Even teachers asked MY advice. The biggest win? Teachers worked 2 weeks on a number-to-words algorithm. I solved it in 3 hours. This success felt bigger than getting an offer from Google.",
      highlights: [
        "Aptech HDSE + Manipal Academy BIT",
        "Mentor: Mr. Vishal Kaul",
        "First time known for STUDIES!",
        "Teachers asking MY advice",
        "**3 hours vs their 2 weeks** - legendary!",
      ],
      color: "from-green-500/20 to-emerald-500/20",
      isHighlight: true,
      quote: "This success is even bigger than getting an offer from Google.",
    },
    {
      id: 5,
      phase: "Kerala Breakthrough",
      years: "2003-2006",
      location: "Kerala beaches",
      icon: <FaTrophy size="50" />,
      tagline: "13 days on the beach",
      story:
        "MCA from Sikkim Manipal. Then came the Kerala Land Records project. A team of Visual C++ experts from Chennai and Kerala had worked MONTHS on it - still couldn't solve it. I flew to Kerala (my first beach visit!), got the requirements, sat on the beaches for 13 days and nights, and finished it with a great solution. At the success party, a drunk consultant announced: 'Shame on you guys... we have to call a north Indian to fix what south guys couldn't!'",
      highlights: [
        "MCA from Sikkim Manipal University",
        "Visual C++ experts: Months ❌",
        "Me on Kerala beaches: 13 days ✅",
        "First beach visit = First major breakthrough",
        '"North Indian fixed what south couldn\'t!"',
      ],
      color: "from-cyan-500/20 to-blue-500/20",
      isHighlight: true,
      quote:
        "Sat on beaches for 13 days and nights. Solved what experts couldn't in months.",
    },
    {
      id: 6,
      phase: "Building Reputation",
      years: "2006-2012",
      location: "Gwalior, India",
      icon: <FcBriefcase size="50" />,
      tagline: "Visual Basic to GIS",
      story:
        "Apark Softwares, then VNS Microsystems. Building projects, building reputation. Got married in December 2009 - arranged marriage, she's from Gwalior too. Life was settling into a rhythm. Little did I know, an international adventure was just around the corner.",
      highlights: [
        "Apark Softwares (2006-2008)",
        "VNS Microsystems (2008-2010)",
        "Married in Dec 2009 (Gwalior girl!)",
        "Building expertise in Visual Basic & GIS",
        "Getting ready for the next big leap",
      ],
      color: "from-purple-500/20 to-pink-500/20",
    },
    {
      id: 7,
      phase: "The Malaysian Adventure",
      years: "April 2012",
      location: "Kuala Lumpur",
      icon: <FcGlobe size="50" />,
      tagline: "First flight ever - international!",
      story:
        "Got a job offer in Malaysia. First flight EVER - and it was international! And sponsored! Moved to Kuala Lumpur in April 2012. The best part? When my mother came to visit - it was HER first international flight too. She passed away in 2017, but I'm grateful I fulfilled that dream for her. I don't miss India much, but I do miss friends and samosas. Discovered gepuk though - amazing Malaysian food!",
      highlights: [
        "April 2012: First job offer abroad",
        "First flight ever = International & sponsored!",
        "Mother's first international flight (visiting ME)",
        "She passed in 2017 - dream fulfilled 💙",
        "Missing samosas, loving gepuk!",
      ],
      color: "from-red-500/20 to-rose-500/20",
      isHighlight: true,
      quote:
        "Mother's first international flight was to visit me. I fulfilled her dream.",
    },
    {
      id: 8,
      phase: "Scaling & Learning",
      years: "2012-2023",
      location: "Kuala Lumpur",
      icon: <FcManager size="50" />,
      tagline: "From thousands to millions",
      story:
        "Custommedia, Accenture, Kerry Logistics, IRIS Corporation, back to Accenture. Each role taught me something new. Started learning Vedic astrology seriously in 2021 - I wanted to know why different astrologers say different things looking at the same charts! Developer brain, I guess. Weekend or weekday? Doesn't matter - I love updating FMT even on weekends. Snooker cue stick always in the car. One sweet daughter, now a teen. Life is good.",
      highlights: [
        "Custommedia → Accenture → Kerry → IRIS",
        "Started Vedic astrology (2021) - developer's curiosity!",
        "One sweet daughter (now teen)",
        "Snooker cue always in car 🎱",
        "Weekend = Weekday (loves coding!)",
      ],
      color: "from-indigo-500/20 to-violet-500/20",
    },
    {
      id: 9,
      phase: "Living King Size",
      years: "2023-Present",
      location: "Kuala Lumpur",
      icon: <FcApproval size="50" />,
      tagline: "Below average → 8.5M users",
      story:
        "Leading technology for Free Malaysia Today. 8.5M monthly users. 184% growth. 60% faster load times. Learning Vedic astrology on weekends. Biryani lover (will do ANYTHING for good biryani!). Whiskey enthusiast. Still singing. The 18-year-old me in Gwalior thought I'd just somehow live my life. Today? I'm living king size, man! From below-average student to tech leader serving millions. Proud of myself.",
      highlights: [
        "FMT: 8.5M users, 184% growth, 60% faster",
        "Will do ANYTHING for good biryani!",
        "Whiskey, snooker, singing, astrology",
        "Still friends with Gwalior gang (WhatsApp!)",
        "From 'below average' to 'king size' 👑",
      ],
      color: "from-yellow-500/20 to-amber-500/20",
      isHighlight: true,
      quote:
        "18-year-old me thought I'd just survive. Today, I'm living KING SIZE!",
    },
  ];

  return (
    <section className="relative bg-[#121212]">
      {/* Hero Section */}
      <HeroSection />

      {/* Life Journey Timeline */}
      <LifeJourneyTimeline phases={lifePhases} />

      {/* What Drives Me Section */}
      <WhatDrivesMe />

      {/* Stats Grid */}
      <StatsGrid YrsOfExp={YrsOfExp} />

      {/* What I'm Looking For */}
      <WhatImLookingFor />

      {/* Personal Life */}
      <PersonalLife />
    </section>
  );
};

// Hero Section Component
const HeroSection = () => {
  return (
    <motion.div
      className="relative w-full flex items-center justify-center bg-linear-to-br from-[#121212] via-[#1a1a1a] to-[#212121] min-h-screen overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Client-side particles */}
      <ClientOnlyParticles />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <Image
            src={pp}
            alt="Mohit Shrivastava"
            className="w-40 h-40 rounded-full mx-auto border-4 border-[#f5f543] shadow-2xl"
            priority
          />
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          From <span className="text-[#f5f543]">64%</span> to{" "}
          <span className="text-[#f5f543]">8.5M</span> Users
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <p className="text-2xl md:text-3xl text-gray-300 mb-6 leading-relaxed">
            A journey from being a{" "}
            <span className="text-gray-500 line-through">
              below-average student
            </span>{" "}
            in Gwalior
          </p>
          <p className="text-2xl md:text-3xl text-white font-bold">
            to leading technology for millions in Malaysia
          </p>
          <p className="text-xl md:text-2xl text-gray-400 mt-6">
            This is my story. Not just career milestones, but life phases that
            shaped who I am.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

// Client-only particles component
const ClientOnlyParticles = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const generatedParticles = [...Array(20)].map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 2,
    }));
    setParticles(generatedParticles);
  }, []);

  return (
    <div className="absolute inset-0 opacity-20">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 bg-[#f5f543] rounded-full"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: particle.delay,
          }}
        />
      ))}
    </div>
  );
};

// Life Journey Timeline Component
const LifeJourneyTimeline = ({ phases }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="py-20 px-6 bg-linear-to-b from-[#121212] to-[#1a1a1a]"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            My <span className="text-[#f5f543]">Life Journey</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Not just jobs and titles. Real moments that transformed a
            below-average student into someone proud of where he is today.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <motion.div
            className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-linear-to-b from-[#f5f543] via-[#f5f543] to-transparent"
            initial={{ height: 0 }}
            animate={isInView ? { height: "100%" } : {}}
            transition={{ duration: 2, ease: "easeOut" }}
          />

          {/* Phase cards */}
          <div className="space-y-16">
            {phases.map((phase, index) => (
              <PhaseCard
                key={phase.id}
                phase={phase}
                index={index}
                isInView={isInView}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Individual Phase Card
const PhaseCard = ({ phase, index, isInView }) => {
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      className={`relative flex items-start ${
        isLeft ? "md:flex-row" : "md:flex-row-reverse"
      } flex-col`}
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      {/* Timeline dot */}
      <motion.div
        className="absolute left-8 md:left-1/2 w-6 h-6 bg-[#f5f543] rounded-full transform -translate-x-1/2 border-4 border-[#121212] z-10 flex items-center justify-center"
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 0.3, delay: index * 0.15 + 0.3 }}
      >
        {phase.isHighlight && (
          <motion.div
            className="absolute w-12 h-12 bg-[#f5f543] rounded-full opacity-20"
            animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0, 0.2] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        )}
      </motion.div>

      {/* Content card */}
      <motion.div
        className={`w-full md:w-5/12 ml-16 md:ml-0 ${
          isLeft ? "md:mr-auto md:pr-16" : "md:ml-auto md:pl-16"
        }`}
        whileHover={{
          scale: 1.02,
          boxShadow: phase.isHighlight
            ? "0 20px 60px rgba(245, 245, 67, 0.25)"
            : "0 10px 40px rgba(245, 245, 67, 0.15)",
        }}
        transition={{ duration: 0.3 }}
      >
        <div
          className={`
          bg-linear-to-br ${phase.color}
          backdrop-blur-sm
          border-2 ${
            phase.isHighlight ? "border-[#f5f543]" : "border-[#292929]"
          }
          rounded-2xl p-8 
          hover:border-[#f5f543] 
          transition-all duration-300
          ${phase.isHighlight ? "shadow-2xl" : ""}
        `}
        >
          {/* Icon & Years */}
          <div className="flex items-center gap-4 mb-4">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={isInView ? { scale: 1, rotate: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: index * 0.15 + 0.4,
                type: "spring",
              }}
            >
              {phase.icon}
            </motion.div>
            <div>
              <div className="inline-block bg-[#f5f543] text-[#121212] px-4 py-1 rounded-full text-sm font-bold mb-2">
                {phase.years}
              </div>
              <h3 className="text-3xl font-bold text-white">{phase.phase}</h3>
              <p className="text-[#f5f543] font-semibold text-lg">
                {phase.tagline}
              </p>
              <div className="flex items-center text-gray-400 text-sm mt-1">
                <FaMapMarkerAlt className="mr-1" />
                {phase.location}
              </div>
            </div>
          </div>

          {/* Story */}
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            {phase.story}
          </p>

          {/* Quote */}
          {phase.quote && (
            <motion.div
              className="bg-[#1a1a1a] border-l-4 border-[#f5f543] p-4 rounded-r-lg mb-4"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.15 + 0.6 }}
            >
              <p className="text-white italic text-lg">"{phase.quote}"</p>
            </motion.div>
          )}

          {/* Highlights */}
          <div className="space-y-2">
            <h4 className="text-sm font-semibold text-gray-400 uppercase mb-2">
              Highlights
            </h4>
            <ul className="space-y-2">
              {phase.highlights.map((highlight, i) => (
                <motion.li
                  key={i}
                  className="text-gray-300 flex items-start"
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.15 + 0.5 + i * 0.1 }}
                >
                  <span className="text-[#f5f543] mr-2 mt-1">▸</span>
                  <span dangerouslySetInnerHTML={{ __html: highlight }} />
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Highlight badge */}
          {phase.isHighlight && (
            <motion.div
              className="absolute -top-3 -right-3"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="bg-[#f5f543] text-[#121212] px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                <FaStar size={12} />
                KEY MOMENT
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

// What Drives Me Component
const WhatDrivesMe = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const drives = [
    {
      icon: <FaTrophy className="text-5xl text-[#f5f543]" />,
      title: "Proving Everyone Wrong",
      description:
        "From 'below average student' to solving problems experts couldn't. That feeling never gets old.",
    },
    {
      icon: <FaRocket className="text-5xl text-[#f5f543]" />,
      title: "Building at Scale",
      description:
        "8.5M users depending on my code? That's responsibility that excites me, not scares me.",
    },
    {
      icon: <FaHeart className="text-5xl text-[#f5f543]" />,
      title: "Making Mother Proud",
      description:
        "Her first international flight was to visit me. She passed in 2017, but I know she was proud.",
    },
    {
      icon: <FaStar className="text-5xl text-[#f5f543]" />,
      title: "Living King Size",
      description:
        "18-year-old me just wanted to survive. Today? I'm living the dream. That's what drives me.",
    },
  ];

  return (
    <section ref={ref} className="py-20 px-6 bg-[#1a1a1a]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What <span className="text-[#f5f543]">Drives</span> Me
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Not buzzwords or corporate speak. Real reasons I wake up excited to
            code.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-6"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 },
            },
          }}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {drives.map((drive, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 10px 40px rgba(245, 245, 67, 0.2)",
              }}
              className="bg-[#212121] border-2 border-[#292929] rounded-xl p-8 hover:border-[#f5f543] transition-all duration-300"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1 + 0.3,
                  type: "spring",
                }}
                className="mb-4"
              >
                {drive.icon}
              </motion.div>
              <h3 className="text-2xl font-bold text-white mb-3">
                {drive.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {drive.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Stats Grid
const StatsGrid = ({ YrsOfExp }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { value: YrsOfExp, label: "Years Coding", suffix: "+" },
    { value: 64, label: "That Famous Percentage", suffix: "%" },
    { value: 3, label: "Hours vs Their 2 Weeks", suffix: "" },
    { value: 13, label: "Days on Kerala Beach", suffix: "" },
    { value: 8.5, label: "Million Users at FMT", suffix: "M" },
    { value: 100, label: "Living King Size", suffix: "%" },
  ];

  return (
    <section
      ref={ref}
      className="py-20 px-6 bg-linear-to-b from-[#121212] to-[#1a1a1a]"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            By The <span className="text-[#f5f543]">Numbers</span>
          </h2>
          <p className="text-xl text-gray-400">The story in stats</p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 },
            },
          }}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              stat={stat}
              index={index}
              isInView={isInView}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Individual Stat Card
const StatCard = ({ stat, index, isInView }) => {
  const count = useCounter(stat.value, 2000, isInView);

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
      }}
      whileHover={{
        scale: 1.05,
        boxShadow: "0 10px 30px rgba(245, 245, 67, 0.2)",
      }}
      className="bg-[#212121] border-2 border-[#292929] rounded-2xl p-6 text-center hover:border-[#f5f543] transition-all duration-300"
    >
      <motion.div
        className="text-4xl md:text-5xl font-bold text-white mb-2 flex items-center justify-center"
        initial={{ scale: 0.5 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      >
        {stat.value < 100 ? count.toFixed(stat.suffix === "M" ? 1 : 0) : count}
        {stat.suffix && (
          <span className="text-2xl text-[#f5f543]">{stat.suffix}</span>
        )}
      </motion.div>
      <div className="text-sm text-gray-400">{stat.label}</div>
    </motion.div>
  );
};

// useCounter hook
const useCounter = (end, duration = 2000, inView) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let startTime;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);

      setCount(end * percentage);

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, inView]);

  return count;
};

// What I'm Looking For
const WhatImLookingFor = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 px-6 bg-[#1a1a1a]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What's <span className="text-[#f5f543]">Next</span>
          </h2>
          <p className="text-xl text-gray-400">
            After 4 years leading FMT solo, ready for my next challenge
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-linear-to-br from-[#212121] to-[#1a1a1a] border-2 border-[#f5f543] rounded-2xl p-8 md:p-12 shadow-2xl"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-[#f5f543] mb-4 flex items-center">
                <span className="text-3xl mr-2">✓</span> Dream Role
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start text-gray-300">
                  <span className="text-[#f5f543] mr-2 mt-1">▸</span>
                  <span>News/media tech company in Malaysia</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <span className="text-[#f5f543] mr-2 mt-1">▸</span>
                  <span>Senior Engineer or Tech Lead</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <span className="text-[#f5f543] mr-2 mt-1">▸</span>
                  <span>Team environment (done being solo!)</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <span className="text-[#f5f543] mr-2 mt-1">▸</span>
                  <span>Next.js/React stack</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <span className="text-[#f5f543] mr-2 mt-1">▸</span>
                  <span>Scale to millions of users</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-400 mb-4 flex items-center">
                <span className="text-3xl mr-2">○</span> Better Fit Elsewhere
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start text-gray-400">
                  <span className="mr-2 mt-1">▸</span>
                  <span>
                    Native mobile apps (iOS/Android) - my expertise is
                    responsive web
                  </span>
                </li>
                <li className="flex items-start text-gray-400">
                  <span className="mr-2 mt-1">▸</span>
                  <span>
                    Short-term consulting - prefer long-term product impact
                  </span>
                </li>
                <li className="flex items-start text-gray-400">
                  <span className="mr-2 mt-1">▸</span>
                  <span>
                    Non-tech industries - passionate about digital content
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <motion.div
            className="mt-10 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link href="/contact">
              <motion.button
                className="bg-[#f5f543] text-[#121212] font-bold text-lg px-8 py-4 rounded-lg shadow-lg"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 40px rgba(245, 245, 67, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                Let's Talk About Opportunities
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Personal Life Component
const PersonalLife = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="py-20 px-6 bg-linear-to-b from-[#121212] to-[#1a1a1a]"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Beyond <span className="text-[#f5f543]">Code</span>
          </h2>
          <p className="text-xl text-gray-400">The full picture</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-[#212121] border-2 border-[#292929] rounded-2xl p-8 md:p-12"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Image
                src={passionValues}
                alt="Mohit Shrivastava - Personal Life"
                className="rounded-xl shadow-2xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p className="text-lg text-gray-300 mb-4 leading-relaxed">
                When I'm not optimizing Next.js builds, I'm{" "}
                <span className="text-[#f5f543] font-semibold">
                  learning Vedic astrology
                </span>
                . Started in 2021 because I wanted to know why different
                astrologers say different things looking at the same charts.
                Developer brain, I guess!
              </p>
              <p className="text-lg text-gray-300 mb-4 leading-relaxed">
                Will do{" "}
                <span className="text-[#f5f543] font-semibold">ANYTHING</span>{" "}
                for good biryani. Whiskey enthusiast. Snooker cue stick always
                in my car (not great at it, but I try!). Still singing when no
                one's listening.
              </p>
              <div className="mt-6 pt-6 border-t border-[#292929]">
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <span className="text-[#f5f543]">•</span> 40 years old,
                    based in Kuala Lumpur
                  </li>
                  <li>
                    <span className="text-[#f5f543]">•</span> Originally from
                    Gwalior, India (miss samosas!)
                  </li>
                  <li>
                    <span className="text-[#f5f543]">•</span> Married since
                    2009, one teen daughter
                  </li>
                  <li>
                    <span className="text-[#f5f543]">•</span> Weekend = Weekday
                    (love updating FMT!)
                  </li>
                  <li>
                    <span className="text-[#f5f543]">•</span> Still friends with
                    Gwalior gang on WhatsApp 📱
                  </li>
                  <li>
                    <span className="text-[#f5f543]">•</span> Living king size!
                    👑
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

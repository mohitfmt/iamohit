"use client";

import Link from "next/link";
import { HiArrowRight, HiMail, HiChevronDown } from "react-icons/hi";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function HeroSection() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let particles = [];

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();

    // Particle class
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.opacity = Math.random() * 0.5 + 0.4;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Wrap around edges
        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        ctx.fillStyle = `rgba(245, 245, 67, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Initialize particles
    const particleCount = Math.min(
      Math.floor((canvas.width * canvas.height) / 15000),
      100
    );
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw connections between nearby particles
      particles.forEach((particle, i) => {
        particle.update();
        particle.draw();

        particles.slice(i + 1).forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.strokeStyle = `rgba(245, 245, 67, ${
              0.15 * (1 - distance / 150)
            })`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
          }
        });
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      setCanvasSize();
      particles = [];
      const newParticleCount = Math.min(
        Math.floor((canvas.width * canvas.height) / 15000),
        100
      );
      for (let i = 0; i < newParticleCount; i++) {
        particles.push(new Particle());
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleScrollClick = () => {
    window.scrollBy({
      top: window.innerHeight * 0.85,
      behavior: "smooth",
    });
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const metricsVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (custom) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: custom * 0.1 + 0.5,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  return (
    <section className="relative min-h-[85vh] md:min-h-[90vh] flex items-center justify-center bg-linear-to-b from-[#121212] to-[#1a1a1a] px-4 pt-20 md:pt-4 overflow-hidden">
      {/* Animated Background Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ opacity: 0.4 }}
      />

      <motion.div
        className="max-w-5xl mx-auto text-center relative z-10"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Main Headline */}
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight"
          variants={fadeInUpVariants}
        >
          I Build News Platforms
          <br />
          <span className="text-[#f5f543]">That Serve Millions</span>
        </motion.h1>

        {/* Subheadline - KEEP headline metrics here */}
        <motion.p
          className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed"
          variants={fadeInUpVariants}
        >
          Head of IT at Free Malaysia Today. Turned around a failing platform:
          recovered from{" "}
          <span className="text-white font-semibold">31% traffic decline</span>{" "}
          to{" "}
          <span className="text-white font-semibold">8.5M monthly users</span>{" "}
          with <span className="text-white font-semibold">184% growth</span>.
        </motion.p>

        {/* Key Metrics - ONLY show primary headline numbers */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 md:gap-8 mb-6 md:mb-8"
          variants={containerVariants}
        >
          {[
            { value: "8.5M", label: "monthly users", delay: 0 },
            { value: "184%", label: "growth achieved", delay: 1 },
            { value: "75%", label: "faster load time", delay: 2 },
          ].map((metric, index) => (
            <motion.div
              key={metric.label}
              className="flex items-center gap-2 text-gray-300"
              custom={metric.delay}
              variants={metricsVariants}
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.2 },
              }}
            >
              <span className="text-2xl md:text-3xl font-bold text-[#f5f543]">
                {metric.value}
              </span>
              <span className="text-sm md:text-base">{metric.label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Secondary info */}
        <motion.p
          className="text-sm md:text-lg text-gray-400 mb-8 md:mb-10"
          variants={fadeInUpVariants}
        >
          18 years building systems across 7 industries • Top 3% on
          StackOverflow • Based in Kuala Lumpur
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
          variants={fadeInUpVariants}
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Link
              href="/projects"
              className="group inline-flex items-center px-8 py-4 bg-[#f5f543] text-black font-semibold rounded-lg hover:bg-[#e5e533] transition-colors duration-200 shadow-lg"
            >
              View My Work
              <HiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transition-all duration-200"
            >
              <HiMail className="mr-2" />
              Let's Talk
            </Link>
          </motion.div>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm text-gray-400"
          variants={fadeInUpVariants}
        >
          <motion.a
            href="https://github.com/mohit5783"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#f5f543] transition-colors"
            whileHover={{ y: -2 }}
          >
            GitHub
          </motion.a>
          <span className="hidden md:inline">•</span>
          <motion.a
            href="https://linkedin.com/in/mohit5783"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#f5f543] transition-colors"
            whileHover={{ y: -2 }}
          >
            LinkedIn
          </motion.a>
          <span className="hidden md:inline">•</span>
          <motion.a
            href="https://stackoverflow.com/users/3796048/mohit-shrivastava"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#f5f543] transition-colors"
            whileHover={{ y: -2 }}
          >
            StackOverflow
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator - Animated */}
      <motion.div
        onClick={handleScrollClick}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 cursor-pointer"
        initial={{ opacity: 0, y: -20 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            delay: 1.2,
            duration: 0.6,
          },
        }}
        whileHover={{ scale: 1.1 }}
      >
        <motion.div
          className="flex flex-col items-center gap-2 text-gray-400 hover:text-[#f5f543] transition-colors"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <HiChevronDown className="text-2xl" />
        </motion.div>
      </motion.div>
    </section>
  );
}

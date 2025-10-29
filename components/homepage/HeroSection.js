"use client";

import Link from "next/link";
import { HiArrowRight, HiMail, HiChevronDown } from "react-icons/hi";
import { useEffect, useRef } from "react";

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

  return (
    <section className="relative min-h-[85vh] md:min-h-[90vh] flex items-center justify-center bg-gradient-to-b from-[#121212] to-[#1a1a1a] px-4 pt-20 md:pt-4 overflow-hidden">
      {/* Animated Background Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ opacity: 0.4 }}
      />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Main Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight animate-fadeInUp">
          I Build News Platforms
          <br />
          <span className="text-[#f5f543]">That Serve Millions</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed animate-fadeInUp animation-delay-200">
          Senior Full-Stack Engineer specializing in Next.js and performance
          optimization. Scaled FMT to{" "}
          <span className="text-white font-semibold">8.5M monthly users</span>{" "}
          with <span className="text-white font-semibold">184% growth</span> and{" "}
          <span className="text-white font-semibold">60% faster</span> load
          times.
        </p>

        {/* Key Metrics - Prominent Display */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-6 md:mb-8 animate-fadeInUp animation-delay-400">
          <div className="flex items-center gap-2 text-gray-300">
            <span className="text-2xl md:text-3xl font-bold text-[#f5f543]">
              8.5M
            </span>
            <span className="text-sm md:text-base">monthly users</span>
          </div>
          <div className="flex items-center gap-2 text-gray-300">
            <span className="text-2xl md:text-3xl font-bold text-[#f5f543]">
              184%
            </span>
            <span className="text-sm md:text-base">growth</span>
          </div>
          <div className="flex items-center gap-2 text-gray-300">
            <span className="text-2xl md:text-3xl font-bold text-[#f5f543]">
              60%
            </span>
            <span className="text-sm md:text-base">faster</span>
          </div>
        </div>

        {/* Secondary info */}
        <p className="text-sm md:text-lg text-gray-400 mb-8 md:mb-10 animate-fadeInUp animation-delay-600">
          18 years building systems across 7 industries • Top 3% on
          StackOverflow • Based in Kuala Lumpur
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 animate-fadeInUp animation-delay-800">
          <Link
            href="/projects"
            className="group inline-flex items-center px-8 py-4 bg-[#f5f543] text-black font-semibold rounded-lg hover:bg-[#e5e533] transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            View My Work
            <HiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transition-all duration-200"
          >
            <HiMail className="mr-2" />
            Let's Talk
          </Link>
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm text-gray-400 animate-fadeInUp animation-delay-1000">
          <a
            href="https://github.com/mohit5783"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#f5f543] transition-colors"
          >
            GitHub
          </a>
          <span className="hidden md:inline">•</span>
          <a
            href="https://linkedin.com/in/mohit-shrivastava"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#f5f543] transition-colors"
          >
            LinkedIn
          </a>
          <span className="hidden md:inline">•</span>
          <a
            href="https://stackoverflow.com/users/your-id"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#f5f543] transition-colors"
          >
            StackOverflow
          </a>
        </div>
      </div>

      {/* Scroll Indicator - Now Clickable */}
      <div
        onClick={handleScrollClick}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10"
      >
        <div className="flex flex-col items-center gap-2 text-gray-400 cursor-pointer hover:text-[#f5f543] transition-colors">
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <HiChevronDown className="text-2xl" />
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
        }

        .animation-delay-600 {
          animation-delay: 0.6s;
        }

        .animation-delay-800 {
          animation-delay: 0.8s;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
}

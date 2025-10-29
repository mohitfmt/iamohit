"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { AiOutlineProject } from "react-icons/ai";
import {
  FaHome,
  FaInfoCircle,
  FaRegCalendarAlt,
  FaBars,
  FaTimes,
  FaStackOverflow,
  FaLinkedin,
  FaGithub,
  FaBlog,
} from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import fullLogo from "../public/full-logo.svg";
import logo from "../public/logo.svg";

const NavLinks = [
  {
    label: "Home",
    href: "/",
    key: "home",
    icon: <FaHome />,
  },
  {
    label: "About",
    href: "/about",
    key: "about",
    icon: <FaInfoCircle />,
  },
  {
    label: "Experience",
    href: "/experience",
    key: "experience",
    icon: <FaRegCalendarAlt />,
  },
  {
    label: "Projects",
    href: "/projects",
    key: "projects",
    icon: <AiOutlineProject />,
  },
  {
    label: "Blog",
    href: "/blog",
    key: "blog",
    icon: <FaBlog />,
  },
  {
    label: "Contact",
    href: "/contact",
    key: "contact",
    icon: <MdAlternateEmail />,
  },
];

const SocialLinks = [
  {
    href: "https://github.com/mohit5783/",
    icon: FaGithub,
    label: "GitHub",
    color: "#ffffff",
  },
  {
    href: "https://www.linkedin.com/in/mohit5783/",
    icon: FaLinkedin,
    label: "LinkedIn",
    color: "#0077b5",
  },
  {
    href: "https://stackoverflow.com/users/3796048/mohit-s",
    icon: FaStackOverflow,
    label: "StackOverflow",
    color: "#f48024",
  },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const pathname = usePathname();

  // Hide navbar on scroll down, show on scroll up
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();

    if (latest > previous && latest > 100) {
      setHidden(true);
    } else {
      setHidden(false);
    }

    // Add glassmorphism effect after scrolling
    setScrolled(latest > 50);
  });

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      {/* Main Navigation */}
      <motion.header
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-black/80 backdrop-blur-md shadow-lg shadow-black/20"
            : "bg-transparent"
        }`}
      >
        <nav className="flex justify-between items-center py-4 px-4 md:px-8">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="block">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Image
                  className="hidden md:block"
                  src={fullLogo}
                  style={{ maxWidth: 160, height: "auto" }}
                  alt="iAMohit"
                  priority
                />
                <Image
                  className="md:hidden"
                  src={logo}
                  style={{ maxWidth: 40, height: "auto" }}
                  alt="iAMohit"
                  priority
                />
              </motion.div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {NavLinks.map((link, index) => {
              const isActive = pathname === link.href;
              return (
                <motion.div
                  key={link.key}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="relative px-4 lg:px-6"
                >
                  {/* Active indicator - behind the link */}
                  {isActive && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute inset-0 -mx-2 bg-white/10 rounded-lg border border-white/20"
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.6,
                      }}
                    />
                  )}

                  <Link
                    href={link.href}
                    className={`relative px-4 py-2 rounded-lg text-base font-medium transition-colors ${
                      isActive ? "text-white" : "text-white/70 hover:text-white"
                    }`}
                  >
                    <motion.div
                      className="flex items-center gap-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="text-lg">{link.icon}</span>
                      <span>{link.label}</span>
                    </motion.div>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            <motion.div
              animate={{ rotate: mobileMenuOpen ? 90 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </motion.div>
          </motion.button>
        </nav>

        {/* Animated border */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: scrolled ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"
        />
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="absolute inset-0 bg-black/90 backdrop-blur-sm"
            />

            {/* Menu Content */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-[80%] max-w-sm bg-gradient-to-br from-gray-900 to-black border-l border-white/10 p-8 overflow-y-auto"
            >
              {/* Logo in mobile menu */}
              <div className="mb-12 mt-2">
                <Image
                  src={fullLogo}
                  style={{ maxWidth: 140, height: "auto" }}
                  alt="iAMohit"
                />
              </div>

              {/* Mobile Nav Links */}
              <div className="space-y-2">
                {NavLinks.map((link, index) => {
                  const isActive = pathname === link.href;
                  return (
                    <motion.div
                      key={link.key}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={link.href}
                        className={`flex items-center gap-4 px-4 py-4 rounded-xl text-lg font-medium transition-all ${
                          isActive
                            ? "bg-white/10 text-white border border-white/20"
                            : "text-white/70 hover:text-white hover:bg-white/5"
                        }`}
                      >
                        <span className="text-2xl">{link.icon}</span>
                        <span>{link.label}</span>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              {/* Social Links in Mobile Menu */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-12 pt-8 border-t border-white/10"
              >
                <div className="flex items-center justify-center gap-6">
                  {SocialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <Link
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                      >
                        <Icon size={24} style={{ color: social.color }} />
                      </Link>
                    );
                  })}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Social Dock - Desktop Only */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="hidden lg:flex fixed right-6 top-1/2 -translate-y-1/2 z-40 flex-col gap-3"
      >
        {SocialLinks.map((social, index) => {
          const Icon = social.icon;
          return (
            <motion.div
              key={social.label}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 1.2 + index * 0.1 }}
              whileHover={{ scale: 1.1, x: -8 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all"
                title={social.label}
              >
                <Icon size={20} style={{ color: social.color }} />

                {/* Tooltip */}
                <motion.span
                  initial={{ opacity: 0, x: 10 }}
                  whileHover={{ opacity: 1, x: 0 }}
                  className="absolute right-full mr-3 px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-sm text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                >
                  {social.label}
                </motion.span>

                {/* Glow effect */}
                <motion.div
                  className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-30 transition-opacity blur-md"
                  style={{ backgroundColor: social.color }}
                />
              </Link>
            </motion.div>
          );
        })}
      </motion.div>
    </>
  );
};

export default Navbar;

"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import {
  FiCalendar,
  FiClock,
  FiArrowLeft,
  FiTwitter,
  FiLinkedin,
  FiCheck,
  FiX,
} from "react-icons/fi";

// Custom components for ReactMarkdown with framer-motion animations
const MarkdownComponents = {
  h1: ({ node, ...props }) => (
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-4xl md:text-5xl font-bold text-white mb-6 mt-12"
      {...props}
    />
  ),
  h2: ({ node, ...props }) => (
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-3xl md:text-4xl font-bold text-white mb-4 mt-10"
      {...props}
    />
  ),
  h3: ({ node, ...props }) => (
    <motion.h3
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-2xl md:text-3xl font-semibold text-white mb-3 mt-8"
      {...props}
    />
  ),
  p: ({ node, ...props }) => (
    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="text-gray-300 leading-relaxed mb-6 text-lg"
      {...props}
    />
  ),
  ul: ({ node, ...props }) => (
    <motion.ul
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="space-y-3 mb-6 ml-6"
      {...props}
    />
  ),
  ol: ({ node, ...props }) => (
    <motion.ol
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="space-y-4 mb-8 ml-2"
      {...props}
    />
  ),
  li: ({ node, children, ordered, ...props }) => {
    // Check if this is part of an ordered list
    if (ordered || node?.position) {
      return (
        <li className="text-gray-300 leading-relaxed pl-2" {...props}>
          {children}
        </li>
      );
    }

    return (
      <li className="flex items-start gap-3 text-gray-300" {...props}>
        <span className="text-[#f5f543] mt-1.5 shrink-0">•</span>
        <span className="flex-1 leading-relaxed">{children}</span>
      </li>
    );
  },
  // Table components with professional styling
  table: ({ node, ...props }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="overflow-x-auto my-8"
    >
      <table
        className="min-w-full border-collapse bg-gray-900/50 rounded-lg overflow-hidden border border-gray-800"
        {...props}
      />
    </motion.div>
  ),
  thead: ({ node, ...props }) => (
    <thead className="bg-gray-900 border-b border-gray-700" {...props} />
  ),
  tbody: ({ node, ...props }) => <tbody {...props} />,
  tr: ({ node, ...props }) => (
    <tr
      className="border-b border-gray-800 hover:bg-gray-800/30 transition-colors"
      {...props}
    />
  ),
  th: ({ node, children, ...props }) => (
    <th
      className="px-6 py-4 text-left text-sm font-semibold text-white border-r border-gray-800 last:border-r-0"
      {...props}
    >
      {children}
    </th>
  ),
  td: ({ node, children, ...props }) => {
    // Check if content contains checkmark or X symbols for special rendering
    const childText =
      typeof children === "string"
        ? children
        : Array.isArray(children)
        ? children.join("")
        : "";

    // Handle ✓ or Yes
    if (childText === "✓" || childText.toLowerCase().trim() === "yes") {
      return (
        <td
          className="px-6 py-4 text-sm border-r border-gray-800 last:border-r-0"
          {...props}
        >
          <span className="flex items-center gap-2 text-green-400 font-medium">
            <FiCheck className="text-lg" />
            <span>Yes</span>
          </span>
        </td>
      );
    }

    // Handle ✗ or No
    if (
      childText === "✗" ||
      childText === "❌" ||
      childText.toLowerCase().trim() === "no"
    ) {
      return (
        <td
          className="px-6 py-4 text-sm border-r border-gray-800 last:border-r-0"
          {...props}
        >
          <span className="flex items-center gap-2 text-red-400 font-medium">
            <FiX className="text-lg" />
            <span>No</span>
          </span>
        </td>
      );
    }

    // Regular cell
    return (
      <td
        className="px-6 py-4 text-sm text-gray-300 border-r border-gray-800 last:border-r-0"
        {...props}
      >
        {children}
      </td>
    );
  },
  code: ({ node, inline, className, children, ...props }) => {
    if (inline) {
      return (
        <code
          className="bg-gray-900 px-2 py-1 rounded text-[#f5f543] font-mono text-sm"
          {...props}
        >
          {children}
        </code>
      );
    }
    return (
      <code className={className} {...props}>
        {children}
      </code>
    );
  },
  pre: ({ node, ...props }) => (
    <motion.pre
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-gray-900 p-4 rounded-xl overflow-x-auto mb-6 border border-gray-800"
      {...props}
    />
  ),
  blockquote: ({ node, ...props }) => (
    <motion.blockquote
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="border-l-4 border-[#f5f543] pl-6 py-2 my-6 italic text-gray-400"
      {...props}
    />
  ),
  a: ({ node, ...props }) => (
    <a
      className="text-[#f5f543] hover:underline transition-all hover:text-[#f5f543]/80"
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    />
  ),
  img: ({ node, ...props }) => (
    <motion.img
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="rounded-lg my-6"
      {...props}
    />
  ),
  hr: ({ node, ...props }) => (
    <motion.hr
      initial={{ opacity: 0, scaleX: 0 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="my-12 border-gray-800"
      {...props}
    />
  ),
  strong: ({ node, ...props }) => (
    <strong className="font-bold text-white" {...props} />
  ),
  em: ({ node, ...props }) => (
    <em className="italic text-gray-300" {...props} />
  ),
};

export default function BlogPostClient({ post }) {
  // Fix hydration error by using state + useEffect
  const [shareUrl, setShareUrl] = useState("");
  const shareText = post.title;

  useEffect(() => {
    // Set share URL only on client side after mount
    setShareUrl(window.location.href);
  }, []);

  const heroVariants = {
    hidden: { opacity: 0, scale: 0.98 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-[#f5f543] transition-colors group"
          >
            <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to Blog</span>
          </Link>
        </motion.div>

        {/* Article Header */}
        <motion.div
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          className="mb-12 space-y-6"
        >
          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="flex flex-wrap gap-2"
            >
              {post.tags.map((tag, index) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                  className="text-xs px-3 py-1 bg-[#f5f543]/10 text-[#f5f543] rounded-full border border-[#f5f543]/20"
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>
          )}

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold text-white leading-tight"
          >
            {post.title}
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-xl text-gray-400 leading-relaxed"
          >
            {post.description}
          </motion.p>

          {/* Meta Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center gap-6 text-sm text-gray-500"
          >
            <div className="flex items-center gap-2">
              <FiCalendar className="text-[#f5f543]" />
              <time>
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </div>
            <div className="flex items-center gap-2">
              <FiClock className="text-[#f5f543]" />
              <span>{post.readTime}</span>
            </div>
            <div className="ml-auto flex items-center gap-3">
              <span className="text-gray-600">Share:</span>
              {shareUrl && (
                <>
                  <Link
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                      shareText
                    )}&url=${encodeURIComponent(shareUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#1DA1F2] transition-colors"
                  >
                    <FiTwitter size={20} />
                  </Link>
                  <Link
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                      shareUrl
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#0077b5] transition-colors"
                  >
                    <FiLinkedin size={20} />
                  </Link>
                </>
              )}
            </div>
          </motion.div>

          {/* Featured Image */}
          {post.image && (
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="relative h-96 xl:h-[768] rounded-2xl overflow-hidden border border-gray-800"
            >
              <Image src={post.image} alt={post.title} fill priority />
            </motion.div>
          )}
        </motion.div>

        {/* Article Content - Using ReactMarkdown instead of MDXRemote */}
        <motion.article
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="prose prose-invert prose-lg max-w-none"
        >
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeHighlight]}
            components={MarkdownComponents}
          >
            {post.content}
          </ReactMarkdown>
        </motion.article>

        {/* Author Bio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 p-8 bg-linear-to-br from-gray-900 to-black border border-gray-800 rounded-2xl"
        >
          <div className="flex items-center gap-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="w-20 h-20 rounded-full bg-linear-to-br from-[#f5f543] to-yellow-600 flex items-center justify-center text-3xl font-bold text-black shrink-0"
            >
              M
            </motion.div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-white mb-2">
                {post.author || "Mohit Shrivastava"}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Senior Full-Stack Engineer with 18+ years of experience. Scaled
                FMT to 8.5M monthly users. Top 3% on StackOverflow. Specialized
                in Next.js, performance optimization, and high-traffic systems.
              </p>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 text-center p-8 bg-linear-to-r from-[#f5f543]/10 to-transparent border border-[#f5f543]/20 rounded-2xl"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Need help scaling your platform?
          </h3>
          <p className="text-gray-400 mb-6">
            Let's discuss how I can help you achieve similar results.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-[#f5f543] text-black font-semibold rounded-lg hover:bg-[#f5f543]/90 transition-all hover:scale-105"
          >
            Get In Touch
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

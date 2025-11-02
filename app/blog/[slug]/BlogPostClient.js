"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote";
import {
  FiCalendar,
  FiClock,
  FiArrowLeft,
  FiShare2,
  FiTwitter,
  FiLinkedin,
} from "react-icons/fi";

const MDXComponents = {
  h1: (props) => (
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-4xl md:text-5xl font-bold text-white mb-6 mt-12"
      {...props}
    />
  ),
  h2: (props) => (
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-3xl md:text-4xl font-bold text-white mb-4 mt-10"
      {...props}
    />
  ),
  h3: (props) => (
    <motion.h3
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-2xl md:text-3xl font-semibold text-white mb-3 mt-8"
      {...props}
    />
  ),
  p: (props) => (
    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="text-gray-300 leading-relaxed mb-6 text-lg"
      {...props}
    />
  ),
  ul: (props) => (
    <motion.ul
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="list-disc list-inside space-y-2 mb-6 text-gray-300"
      {...props}
    />
  ),
  ol: (props) => (
    <motion.ol
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="list-decimal list-inside space-y-2 mb-6 text-gray-300"
      {...props}
    />
  ),
  code: (props) => (
    <code
      className="bg-gray-900 px-2 py-1 rounded text-[#f5f543] font-mono text-sm"
      {...props}
    />
  ),
  pre: (props) => (
    <motion.pre
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="bg-gray-900 p-4 rounded-xl overflow-x-auto mb-6 border border-gray-800"
      {...props}
    />
  ),
  blockquote: (props) => (
    <motion.blockquote
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="border-l-4 border-[#f5f543] pl-6 py-2 my-6 italic text-gray-400"
      {...props}
    />
  ),
  a: (props) => (
    <motion.a
      className="text-[#f5f543] hover:underline transition-all"
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    />
  ),
};

export default function BlogPostClient({ post, mdxSource }) {
  const shareUrl = typeof window !== "undefined" ? window.location.href : "";
  const shareText = post.title;

  const heroVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: 0.2 },
    },
  };

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto max-w-4xl px-6">
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
        <div
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          className="mb-12 space-y-6"
        >
          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1 bg-[#f5f543]/10 text-[#f5f543] rounded-full border border-[#f5f543]/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            {post.title}
          </h1>

          {/* Description */}
          <p className="text-xl text-gray-400 leading-relaxed">
            {post.description}
          </p>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
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
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                  shareText
                )}&url=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#1DA1F2] transition-colors"
              >
                <FiTwitter size={20} />
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                  shareUrl
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#0077b5] transition-colors"
              >
                <FiLinkedin size={20} />
              </a>
            </div>
          </div>

          {/* Featured Image */}
          {post.image && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative h-96 rounded-2xl overflow-hidden border border-gray-800"
            >
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          )}
        </div>

        {/* Article Content */}
        <motion.article
          variants={contentVariants}
          initial="hidden"
          animate="visible"
          className="prose prose-invert prose-lg max-w-none"
        >
          <MDXRemote {...mdxSource} components={MDXComponents} />
        </motion.article>

        {/* Author Bio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-8 bg-linear-to-br from-gray-900 to-black border border-gray-800 rounded-2xl"
        >
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 rounded-full bg-linear-to-br from-[#f5f543] to-yellow-600 flex items-center justify-center text-3xl font-bold text-black">
              M
            </div>
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
            className="inline-block px-8 py-4 bg-[#f5f543] text-black font-semibold rounded-xl hover:bg-[#f5f543]/90 transition-colors"
          >
            Get In Touch
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

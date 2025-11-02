"use client";

import { motion } from "framer-motion";
import BlogCard from "@/components/blog/BlogCard";
import { FiSearch } from "react-icons/fi";
import { useState } from "react";
import { FaBlog } from "react-icons/fa";

export default function BlogListingClient({ posts }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState("all");

  // Get all unique tags
  const allTags = ["all", ...new Set(posts.flatMap((post) => post.tags || []))];

  // Filter posts
  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTag =
      selectedTag === "all" || (post.tags && post.tags.includes(selectedTag));
    return matchesSearch && matchesTag;
  });

  const heroVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const statsVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay: 0.2 },
    },
  };

  const filterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, delay: 0.3 },
    },
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Hero Section */}
        <motion.div
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          className="text-center mb-16 space-y-6"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
            className="inline-block p-4 bg-[#f5f543]/10 rounded-2xl border border-[#f5f543]/20"
          >
            <FaBlog className="text-5xl text-[#f5f543]" />
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold">
            <span className="bg-clip-text text-transparent bg-linear-to-r from-white via-gray-200 to-gray-400">
              Technical
            </span>
            <span className="text-[#f5f543]"> Insights</span>
          </h1>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Deep dives into Next.js, performance optimization, and scaling
            platforms that serve millions. Real problems, real solutions, real
            impact.
          </p>

          {/* Stats */}
          <motion.div
            variants={statsVariants}
            className="flex flex-wrap justify-center gap-8 pt-8"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-[#f5f543]">
                {posts.length}
              </div>
              <div className="text-sm text-gray-500">Articles</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#f5f543]">
                {allTags.length - 1}
              </div>
              <div className="text-sm text-gray-500">Topics</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#f5f543]">8.5M</div>
              <div className="text-sm text-gray-500">Users Scaled</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Search & Filter */}
        <motion.div
          variants={filterVariants}
          initial="hidden"
          animate="visible"
          className="mb-12 space-y-6"
        >
          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-xl" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-gray-900/50 border border-gray-800 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#f5f543]/50 transition-colors"
            />
          </div>

          {/* Tag Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {allTags.map((tag) => (
              <motion.button
                key={tag}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedTag(tag)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  selectedTag === tag
                    ? "bg-[#f5f543] text-black"
                    : "bg-gray-900/50 text-gray-400 border border-gray-800 hover:border-[#f5f543]/30"
                }`}
              >
                {tag === "all" ? "All Articles" : tag}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Blog Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <BlogCard key={post.slug} {...post} index={index} />
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-gray-500 text-lg">
              No articles found matching your criteria.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}

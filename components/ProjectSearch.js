"use client";

import { motion } from "framer-motion";
import { HiSearch, HiAdjustments } from "react-icons/hi";

export default function ProjectSearch({
  searchQuery,
  setSearchQuery,
  sortBy,
  setSortBy,
  resultCount,
  totalCount,
}) {
  const sortOptions = [
    { value: "recent", label: "Most Recent" },
    { value: "oldest", label: "Oldest First" },
    { value: "duration-desc", label: "Longest Duration" },
    { value: "duration-asc", label: "Shortest Duration" },
    { value: "team-desc", label: "Largest Team" },
    { value: "team-asc", label: "Solo Projects" },
  ];

  return (
    <motion.div
      className="mb-8 space-y-4"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        {/* Search Bar */}
        <motion.div
          className="relative w-full md:w-2/3"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <HiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
          <input
            type="text"
            placeholder="Search projects by name, tech stack, or description..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-[#1a1a1a] border-2 border-[#292929] rounded-lg text-white placeholder-gray-500 focus:border-[#f5f543] focus:outline-none transition-colors"
          />
        </motion.div>

        {/* Sort Dropdown */}
        <motion.div
          className="relative w-full md:w-1/3"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <HiAdjustments className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl pointer-events-none" />
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-[#1a1a1a] border-2 border-[#292929] rounded-lg text-white focus:border-[#f5f543] focus:outline-none transition-colors appearance-none cursor-pointer"
          >
            {sortOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {/* Custom dropdown arrow */}
          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </motion.div>
      </div>

      {/* Results Counter */}
      <motion.div
        className="text-center text-gray-400 text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {searchQuery || resultCount !== totalCount ? (
          <span>
            Showing{" "}
            <span className="text-[#f5f543] font-semibold">{resultCount}</span>{" "}
            of <span className="text-white font-semibold">{totalCount}</span>{" "}
            public projects
          </span>
        ) : (
          <span>
            Showing all{" "}
            <span className="text-[#f5f543] font-semibold">{totalCount}</span>{" "}
            public projects (116 additional under NDA)
          </span>
        )}
      </motion.div>
    </motion.div>
  );
}

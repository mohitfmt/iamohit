"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ProjectData } from "@/components/data/projects";
import EnhancedProjectCard from "./EnhancedProjectCard";
import ProjectAsideMenu from "./ProjectAsideMenu";
import ProjectSearch from "./ProjectSearch";

const EnhancedProjectCards = () => {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("recent");

  // Filter projects based on selected tech filters
  let filteredProjects = ProjectData;

  if (selectedFilters.length > 0) {
    filteredProjects = ProjectData.filter((project) => {
      return selectedFilters.every((filter) =>
        project.techUsed.includes(filter)
      );
    });
  }

  // Search functionality
  const searchedProjects = useMemo(() => {
    if (!searchQuery.trim()) return filteredProjects;

    const query = searchQuery.toLowerCase();
    return filteredProjects.filter((project) => {
      return (
        project.projectName.toLowerCase().includes(query) ||
        project.projectFullName.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query)
      );
    });
  }, [filteredProjects, searchQuery]);

  // Sort functionality
  const sortedProjects = useMemo(() => {
    const sorted = [...searchedProjects];

    switch (sortBy) {
      case "recent":
        return sorted.sort((a, b) => b.projectId - a.projectId);
      case "oldest":
        return sorted.sort((a, b) => a.projectId - b.projectId);
      case "duration-desc":
        return sorted.sort((a, b) => b.duration - a.duration);
      case "duration-asc":
        return sorted.sort((a, b) => a.duration - b.duration);
      case "team-desc":
        return sorted.sort((a, b) => b.teamSize - a.teamSize);
      case "team-asc":
        return sorted.sort((a, b) => a.teamSize - b.teamSize);
      default:
        return sorted;
    }
  }, [searchedProjects, sortBy]);

  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-4">
        {/* Search and Sort Section */}
        <ProjectSearch
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          sortBy={sortBy}
          setSortBy={setSortBy}
          resultCount={sortedProjects.length}
          totalCount={ProjectData.length}
        />

        {/* Main Content Area */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Filter Sidebar */}
          <motion.aside
            className="lg:w-64 shrink-0"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <ProjectAsideMenu
              selectedFilters={selectedFilters}
              setSelectedFilters={setSelectedFilters}
            />
          </motion.aside>

          {/* Projects Grid */}
          <div className="flex-1">
            <AnimatePresence mode="wait">
              {sortedProjects.length > 0 ? (
                <motion.div
                  key="projects-grid"
                  className="flex flex-wrap -m-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {sortedProjects.map((project, index) => (
                    <EnhancedProjectCard
                      key={project.projectId}
                      project={project}
                      index={index}
                    />
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  key="no-results"
                  className="text-center py-20"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="max-w-md mx-auto">
                    <motion.div
                      className="text-6xl mb-4"
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{
                        duration: 0.5,
                        repeat: Infinity,
                        repeatDelay: 2,
                      }}
                    >
                      🔍
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      No Projects Found
                    </h3>
                    <p className="text-gray-400 mb-6">
                      Try adjusting your filters or search query
                    </p>
                    <motion.button
                      onClick={() => {
                        setSearchQuery("");
                        setSelectedFilters([]);
                      }}
                      className="px-6 py-3 bg-[#f5f543] text-black font-semibold rounded-lg hover:bg-[#e5e533] transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Clear All Filters
                    </motion.button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedProjectCards;

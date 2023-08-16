"use client";

import { ProjectData } from "@/components/data/projects";
import ProjectCard from "./ProjectCard";
import ProjectAsideMenu from "./ProjectAsideMenu";
import { useState } from "react";

const ProjectCards = () => {
  const [selectedFilters, setSelectedFilters] = useState([]);
  let projData = ProjectData;
  if (selectedFilters.length > 0) {
    projData = ProjectData.filter((project) => {
      return selectedFilters.every((filter) =>
        project.techUsed.includes(filter)
      );
    });
  }
  return (
    <section className="flex gap-3">
      <aside
        className="flex h-auto min-h-max ml-5 py-5"
        aria-label="filter menu"
      >
        <ProjectAsideMenu
          selectedFilters={selectedFilters}
          setSelectedFilters={setSelectedFilters}
        />
      </aside>
      <section className="flex flex-wrap p-3 h-full">
        {projData.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            selectedFilters={selectedFilters}
          />
        ))}
      </section>
    </section>
  );
};

export default ProjectCards;

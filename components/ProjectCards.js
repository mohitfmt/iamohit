import { ProjectData } from "@/components/data/projects";
import ProjectCard from "./ProjectCard";
import ProjectAsideMenu from "./ProjectAsideMenu";
const ProjectCards = () => {
  return (
    <section className="flex gap-3">
      <aside
        className="flex h-screen min-h-max ml-5 py-5"
        aria-label="filter menu"
      >
        <ProjectAsideMenu />
      </aside>
      <section className="flex flex-wrap p-3">
        {ProjectData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </section>
    </section>
  );
};

export default ProjectCards;

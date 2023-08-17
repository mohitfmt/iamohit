import ProjectCards from "@/components/ProjectCards";
import dynamic from "next/dynamic";

const ProjectHero = dynamic(() => import("@/components/Heros/ProjectHero"), {
  loading: () => (
    <p className="h-[900px] justify-center items-center flex">Loading...</p>
  ),
});
export const metadata = {
  keywords: [],
  title: "",
  description: "",
};
const Projects = () => {
  return (
    <section>
      <ProjectHero />
      <h1 className="text-4xl lg:text-3xl xl:text-4xl text-center capitalize text-[#f5f543] py-8 font-semibold">
        Projects Showcase
      </h1>
      <ProjectCards />
    </section>
  );
};

export default Projects;

import Image from "next/image";
import { AllSkills } from "./data/skillsData";
import Link from "next/link";
import { GiDuration } from "react-icons/gi";
import { FaMediumM, FaUsers } from "react-icons/fa";

const ProjectCard = (props, selectedFilters) => {
  const project = props.project;
  const projectSkills = AllSkills.flatMap((skill) =>
    skill.techList
      .filter((tech) => project.techUsed.includes(tech.skillsId))
      .map((tech) => tech)
  );
  return (
    <div className="md:w-1/2 p-2">
      <div className="bg-[#212121] bg- border-2 border-[#292929] border-solid rounded-2xl h-full flex flex-col">
        <Link href={project.url} target="_blank">
          <div className="relative">
            <Image
              className="object-cover w-full rounded-t-2xl"
              src={project.projImage}
              alt={project.projectFullName}
              style={{ maxWidth: "100%", height: "auto" }}
            />
            <div className="absolute inset-0 bg-black hover:opacity-80 opacity-0 transition-opacity ease-in-out duration-300 flex flex-col rounded-t-2xl h-full">
              <div className="text-[#f5f543] flex justify-center h-full items-center text-3xl font-semibold">
                {project.projectName}
              </div>
              <div className="flex w-full justify-between items-end px-5 py-2">
                {project.teamSize === 1 ? (
                  <div className="flex justify-center items-center gap-2 text-xl">
                    <FaMediumM className="text-3xl" />
                    Solo
                  </div>
                ) : (
                  <div className="flex justify-center items-center gap-2 text-xl">
                    <FaUsers className="text-3xl" />
                    {project.teamSize} experts
                  </div>
                )}

                <div className="flex justify-center items-center gap-2 text-xl">
                  <GiDuration className="text-3xl" /> {project.duration} months
                </div>
              </div>
            </div>
          </div>
          <div className="p-5 flex flex-col justify-between">
            <h3 className="text-3xl lg:text-2xl xl:text-3xl capitalize text-[#f5f543] font-semibold">
              {project.projectFullName}
            </h3>
            <p className="font-normal py-5">{project.description}</p>
          </div>
        </Link>
        <div className="mt-auto pb-5 p-3">
          <div className="relative pb-7">
            <hr className="h-px mx-4" />
            <span className="absolute -top-5 -translate-x-1/2 left-1/2 bg-[#212121] p-2">
              TAGs
            </span>
          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            {projectSkills.map((skill, index) => {
              return (
                <div
                  key={skill.name + index}
                  className={`flex gap-3 text-xs items-center leading-sm pr-2 py-1 bg-[#f5f543] text-black rounded-full`}
                >
                  <div className="h-4 w-4">{skill.icon}</div>
                  <p className="font-semibold">{skill.name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

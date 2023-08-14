import Image from "next/image";

const ProjectCard = (props) => {
  const project = props.project;
  return (
    <div className="md:w-1/2 p-2">
      <div class="bg-[#212121] border-2 border-[#292929] border-solid rounded-2xl">
        <Image
          className="object-cover w-full rounded-t-2xl"
          src={project.projImage}
          alt={project.projectFullName}
          style={{ maxWidth: "100%", height: "auto" }}
        />
        <div className="p-5">
          <h3 className="text-3xl lg:text-2xl xl:text-3xl capitalize text-[#f5f543] font-semibold">
            {project.projectFullName}
          </h3>
          <p className="font-normal">{project.description}</p>
          
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

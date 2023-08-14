import Link from "next/link";
import { AllSkills } from "./data/skillsData";

const SkillsCards = () => {
  const skills = AllSkills.sort(
    (a, b) => a.techList.length - b.techList.length
  );
  return (
    <section className="p-10">
      <h1 className="text-4xl lg:text-3xl xl:text-4xl text-center capitalize text-[#f5f543] py-8 font-semibold">
        Versatile Skillset Showcase
      </h1>
      <div className="flex-none flex-wrap sm:flex justify-center">
        {skills.map((skill, index) => (
          <div
            key={skill.techName + index}
            className="justify-center mt-5 sm:mt-0 w-full sm:w-1/2 lg:w-1/3 p-5 hover:shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
          >
            <div className="flex flex-col p-8 bg-[#212121] border-2 border-[#292929] border-solid rounded-lg shadow h-full">
              <h3 className="text-3xl lg:text-2xl xl:text-3xl text-center capitalize text-white font-semibold">
                {skill.techName}
              </h3>
              <ul role="list" className="py-7">
                {skill.techList.map((tech, i) => (
                  <li
                    key={tech.name + i}
                    className="flex py-2 gap-3 items-center"
                  >
                    {tech.icon}
                    <span className="text-2xl sm:text-xl font-normal leading-tight text-gray-100 font-handlee">
                      {tech.name}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto pb-5 justify-center flex">
                <Link
                  href={skill.url}
                  className="flex items-center bg-white text-black p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-black hover:text-white border border-solid hover:border-white"
                >
                  {skill.displayName}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsCards;

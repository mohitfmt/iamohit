import Link from "next/link";
import { GiArmoredBoomerang } from "react-icons/gi";
import { AllSkills } from "./data/skillsData";

const SkillsCards = () => {
  return (
    <section className="p-10">
      <div className="flex-none flex-wrap sm:flex justify-center">
        {AllSkills.sort((a, b) => a.techList.length - b.techList.length)
          .slice(0, 6)
          .map((skill, index) => (
            <div
              key={skill.techName + index}
              className="justify-center mt-5 sm:mt-0 w-full sm:w-1/2 lg:w-1/3 p-5 hover:shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            >
              <div className="flex flex-col p-8 bg-[#212121] border-2 border-[#292929] border-solid rounded-lg shadow h-full">
                <h3 className="text-3xl lg:text-2xl xl:text-3xl text-center capitalize text-[#f5f543] font-semibold">
                  {skill.techName}
                </h3>
                <ul role="list" className="py-7">
                  {skill.techList.slice(0, 8).map((tech, i) => (
                    <li
                      key={tech.name + i}
                      className="flex py-2 gap-3 items-center"
                    >
                      {tech.icon}
                      <span className="text-xl sm:text-lg font-normal leading-tight text-gray-500 dark:text-gray-400">
                        {tech.name}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pb-5 justify-center flex">
                  <Link
                    target="_blank"
                    href="/"
                    className="flex justify-center items-center bg-lime-400 text-black p-2.5 px-6 rounded-lg text-lg 
                    font-semibold hover:bg-black hover:text-white border border-solid border-transparent hover:border-lime-400"
                  >
                    Read More
                    <GiArmoredBoomerang className="ml-2" />
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

"use client";

import { useEffect, useState } from "react";
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";
import { AllSkills } from "./data/skillsData";
import { ExperienceData } from "./data/experience";
import { ProjectData } from "./data/projects";

const ProjectAsideMenu = () => {
  const AllSkillList = AllSkills.map((skill) => ({
    ...skill,
    techList: [
      ...skill.techList.map((tech) => ({
        ...tech,
        checkedStatus: false,
        selectable: true,
      })),
    ],
  }));
  const allProjects = ProjectData;
  const usedTechSet = new Set();
  allProjects.forEach((project) => {
    project.techUsed.forEach((techId) => {
      usedTechSet.add(techId);
    });
  });
  const skillList = AllSkillList.map((skill) => ({
    ...skill,
    techList: skill.techList.filter((tech) => usedTechSet.has(tech.skillsId)),
  }));
  const exp = ExperienceData.map((exp) => ({
    ...exp,
    checkedStatus: false,
  }));

  const [collapsed, setCollapsed] = useState(false);
  const [selected, setSelected] = useState([]);
  const [skills, setSkills] = useState(skillList);

  const toggleMenu = () => {
    setCollapsed(!collapsed);
  };

  const techChecked = (id) => {
    const updatedSkills = skills.map((skill) => ({
      ...skill,
      techList: skill.techList.map((tech) => {
        if (tech.skillsId === id) {
          return {
            ...tech,
            checkedStatus: !tech.checkedStatus,
          };
        }
        return tech;
      }),
    }));

    const selectedTech = updatedSkills.flatMap((skill) =>
      skill.techList
        .filter((tech) => tech.checkedStatus)
        .map((tech) => tech.skillsId)
    );

    setSelected(selectedTech);
    updateSkillsWithSelectable(updatedSkills, selectedTech);
  };

  const updateSkillsWithSelectable = (updatedSkills, selectedTech) => {
    let relevantTechSet = new Set();
    if (selectedTech.length === 0) {
      allProjects.forEach((project) => {
        project.techUsed.forEach((ptu) => relevantTechSet.add(ptu));
      });
    } else {
      allProjects.forEach((project) => {
        if (project.techUsed.some((ptu) => selectedTech.includes(ptu))) {
          project.techUsed.forEach((ptu) => relevantTechSet.add(ptu));
        }
      });
    }
    const relevantTech = Array.from(relevantTechSet);

    const allTech = updatedSkills.flatMap((skill) =>
      skill.techList.map((tech) => tech.skillsId)
    );

    const irrelevantTech = allTech.filter(
      (tech) => !relevantTech.includes(tech)
    );

    const finalSkills = updatedSkills.map((skill) => ({
      ...skill,
      techList: skill.techList.map((tech) => ({
        ...tech,
        selectable: !irrelevantTech.includes(tech.skillsId),
      })),
    }));

    setSkills(finalSkills);
  };

  useEffect(() => {
    console.log("selected", selected);
  }, [selected]);

  useEffect(() => {
    console.log("skills", skills);
  }, [skills]);

  return (
    <div
      className={`h-max bg-[#212121] border-2 border-[#292929] border-solid rounded-lg shadow text-white transition-all duration-300 ${
        collapsed ? "w-20" : "w-64"
      }`}
    >
      <div className="flex justify-center p-2">
        <button className="text-white" onClick={toggleMenu}>
          {collapsed ? (
            <AiOutlineMenuUnfold className="text-2xl" />
          ) : (
            <AiOutlineMenuFold className="text-2xl" />
          )}
        </button>
      </div>
      <div className={`${collapsed ? "p-1" : "p-3"}`}>
        {skills.map((skill, index) => (
          <div key={index}>
            <p
              className={`${
                collapsed ? "hidden" : ""
              } py-2 text-xl font-semibold`}
            >
              {skill.techName}
            </p>
            {skill.techList.map((tech, i) => (
              <ul
                key={i}
                role="list"
                className="px-4 py-2 cursor-pointer hover:bg-[#121212] transition-all duration-700"
              >
                <li
                  className={`flex items-center gap-3 ${
                    tech.selectable ? "" : "hidden"
                  }`}
                  onClick={() => techChecked(tech.skillsId)}
                >
                  <div
                    className={`${
                      tech.checkedStatus ? "text-lime-400" : "text-white"
                    }`}
                  >
                    {tech?.icon}
                  </div>
                  <span
                    className={`w-full ${
                      tech.checkedStatus
                        ? "text-lime-400 font-bold"
                        : "text-white"
                    } text-base ${collapsed ? "hidden" : ""}`}
                  >
                    {tech?.name}
                  </span>
                </li>
              </ul>
            ))}
          </div>
        ))}
        <div>
          <p
            className={`${
              collapsed ? "hidden" : ""
            } py-2 text-xl font-semibold`}
          >
            Companies
          </p>
          {exp.map((ex, index) => (
            <ul key={index} role="list" className="px-4">
              <li className="flex items-center py-1">
                <input
                  id={`${ex?.expId}-checkbox`}
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label
                  className={`w-full ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 ${
                    collapsed ? "hidden" : ""
                  }`}
                >
                  {ex?.Company.Name}
                </label>
              </li>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectAsideMenu;

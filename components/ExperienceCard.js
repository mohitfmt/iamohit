import Image from "next/image";
import Link from "next/link";
import { AiOutlineProject } from "react-icons/ai";
import { FaMapMarkerAlt } from "react-icons/fa";

const ExperienceCard = (props) => {
  const options = {
    year: "numeric",
    month: "short",
  };
  const exp = props.ExpData;
  return (
    <section className="p-10">
      {exp.Achievements ? (
        <div className="md:flex flex-none gap-2 bg-[#212121] border-2 border-[#292929] border-solid rounded-lg shadow p-3">
          <div className="flex gap-3 md:flex-col-reverse items-center md:justify-center justify-between">
            <div className="md:text-center text-left p-3 align-top">
              {exp.Company.Website === "#" ? (
                <h3 className="md:text-5xl text-2xl font-bold md:whitespace-nowrap">
                  {exp.Company.Name}
                </h3>
              ) : (
                <Link href={exp.Company.Website} target="_blank">
                  <h3 className="md:text-5xl text-2xl font-bold md:whitespace-nowrap">
                    {exp.Company.Name}
                  </h3>
                </Link>
              )}
              <h4 className="text-xl text-lime-400 uppercase">{exp.Role}</h4>
              <div className="text-base flex items-center md:justify-center justify-start gap-1">
                <FaMapMarkerAlt />
                {exp.Company.Location}
              </div>
              <div className="text-base font-mono text-gray-200">
                {new Date(exp.startDate).toLocaleDateString("en-us", options) +
                  " - " +
                  (exp.endDate === "Present"
                    ? "Till Date"
                    : new Date(exp.endDate).toLocaleDateString(
                        "en-us",
                        options
                      ))}
              </div>
              <div className="py-5 justify-center md:flex hidden">
                <Link
                  href="/projects"
                  className="flex gap-1 justify-center px-6 items-center hover:bg-lime-400 hover:text-[#121212] capitalize p-1 rounded-lg text-base font-semibold bg-white text-black border border-solid border-transparent hover:border-lime-400"
                >
                  Projects
                  <AiOutlineProject />
                </Link>
              </div>
            </div>
            <div>{exp.Company.LogoIcon}</div>
          </div>
          <ul className="list-disc p-3">
            {exp.Achievements?.map((desc, i) => (
              <li key={i} className="py-2">
                {desc}
              </li>
            ))}
          </ul>
          <div className="py-5 px-3 md:hidden flex">
            <Link
              href="/projects"
              className="flex gap-1 justify-center px-6 items-center hover:bg-lime-400 hover:text-[#121212] capitalize p-1 rounded-lg text-base font-semibold bg-white text-black border border-solid border-transparent hover:border-lime-400"
            >
              Projects
              <AiOutlineProject />
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <div className="flex justify-center gap-3 items-center">
            <div>{exp.Company.LogoIcon}</div>
            <div>
              {exp.Company.Website === "#" ? (
                <h3 className="md:text-5xl text-3xl font-bold">
                  {exp.Company.Name}
                </h3>
              ) : (
                <Link href={exp.Company.Website} target="_blank">
                  <h3 className="md:text-5xl text-3xl font-bold">
                    {exp.Company.Name}
                  </h3>
                </Link>
              )}

              <div className="text-base flex items-center gap-1">
                <FaMapMarkerAlt />
                {exp.Company.Location}
              </div>
              <div className="text-base font-mono text-gray-200">
                {new Date(exp.startDate).toLocaleDateString("en-us", options) +
                  " - " +
                  (exp.endDate === "Present"
                    ? "Till Date"
                    : new Date(exp.endDate).toLocaleDateString(
                        "en-us",
                        options
                      ))}
              </div>
            </div>
          </div>
          <div className="flex flex-wrap justify-center items-center py-7">
            {exp.Positions.map((expAcc, index) => (
              <div key={index} className="xl:w-1/3 md:w-1/2 w-full p-2">
                <div className="bg-[#212121] border-2 border-[#292929] border-solid rounded-lg shadow p-3">
                  <div className="flex justify-between items-center p-3">
                    <div className="">
                      <Link href={expAcc.ClientCompany.Website} target="_blank">
                        <h3 className="text-2xl font-bold items-center font-inter">
                          {expAcc.ClientCompany.Name}
                        </h3>
                      </Link>
                      <h4 className="text-xl text-lime-400">{expAcc.Role}</h4>
                      <div className="text-base flex items-center gap-1">
                        <FaMapMarkerAlt />
                        {expAcc.ClientCompany.Location}
                      </div>
                      <div className="text-base font-mono text-gray-200">
                        {new Date(exp.startDate).toLocaleDateString(
                          "en-us",
                          options
                        ) +
                          " - " +
                          (exp.endDate === "Present"
                            ? "Till Date"
                            : new Date(exp.endDate).toLocaleDateString(
                                "en-us",
                                options
                              ))}
                      </div>
                    </div>
                    <div>{expAcc.ClientCompany.LogoIcon}</div>
                  </div>
                  <ul className="list-disc p-3">
                    {expAcc.Achievements?.map((desc, i) => (
                      <li key={i} className="py-2">
                        {desc}
                      </li>
                    ))}
                  </ul>
                  <div className="flex px-3">
                    <Link
                      href="/projects"
                      className="flex gap-1 justify-center px-6 items-center hover:bg-lime-400 hover:text-[#121212] capitalize p-1 rounded-lg text-base font-semibold bg-white text-black border border-solid border-transparent hover:border-lime-400"
                    >
                      Projects
                      <AiOutlineProject />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default ExperienceCard;

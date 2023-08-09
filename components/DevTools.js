import Image from "next/image";
import Link from "next/link";
import { GiGearHammer } from "react-icons/gi";

const DevTools = () => {
  return (
    <section className="p-10">
      <div className="flex flex-wrap">
        <div className="lg:w-1/2 md:w-full flex justify-center items-center self-center">
          <Image
            src="/dev-tools.webp"
            alt="Empowering Digital Excellence through Tools & DevOps Mastery"
            width={618}
            height={571}
            placeholder="empty"
            loading="lazy"
          />
        </div>
        <div className="lg:w-1/2 md:pl-5 sm:pl-0 self-center leading-relaxed">
          <h1 className="text-4xl lg:text-3xl xl:text-4xl text-center capitalize text-[#f5f543] py-8 font-semibold">
            Mastering Tools & DevOps
          </h1>
          <p className="py-4">
            Unlock a world of digital prowess with my profound expertise in
            Tools & DevOps. Seamlessly integrate Continuous
            Integration/Continuous Deployment (CI/CD) pipelines, harnessing
            Jenkins for swift and robust software delivery.
          </p>
          <p className="py-4">
            Experience the cloud's boundless potential through AWS and Azure,
            while Agile Methodologies and Waterfall ensure agile precision in
            project execution. Navigate collaborative coding with Git,
            Bitbucket, and TFS.
          </p>
          <p className="py-4">
            Empower scalability with Kubernetes and Docker, as Confluence, JIRA,
            and Trello orchestrate projects with finesse. Alfresco and ArcGIS
            sculpt seamless document and data management, while SonarQube and
            Fortify stand sentinel for code quality and security.
          </p>
          <div className="flex justify-end px-6">
            <Link
              target="_blank"
              href="/projects"
              className="flex justify-center items-center bg-lime-400 text-black p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-black hover:text-white border border-solid border-transparent hover:border-lime-400"
            >
              Discover DevOps & Tools
              <GiGearHammer className="ml-2 text-2xl" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevTools;

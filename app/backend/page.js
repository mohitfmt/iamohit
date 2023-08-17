import dynamic from "next/dynamic";
import Image from "next/image";

import bePillar from "../../public/be-pillar.webp";
import prog from "../../public/prog.webp";
import ExNest from "../../public/ExNest.webp";
import ms from "../../public/ms.webp";
import efCore from "../../public/efCore.webp";
import graphqlAppSync from "../../public/graphqlAppSync.webp";
import integration from "../../public/integration.webp";
import BusinessGrowth from "../../public/BusinessGrowth.webp";

const BackendHero = dynamic(() => import("@/components/BackendHero"), {
  loading: () => (
    <p className="h-[900px] justify-center items-center flex">Loading...</p>
  ),
});
//update the alt tags
const Backend = () => {
  return (
    <section>
      <BackendHero />
      <section className="p-10">
        <h1 className="text-5xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-center capitalize text-[#f5f543] py-4 font-semibold">
          Discover My Backend Skills
        </h1>
        <p className="text-2xl font-handlee">
          Let's delve into the realm of backend skills and explore how they form
          the rock-solid foundation for businesses in the digital landscape. As
          a backend virtuoso, I'm here to shed light on the pivotal role that a
          robust backend plays in creating seamless user experiences and driving
          business growth.
        </p>
        <div className="flex flex-wrap py-4">
          <div className="md:w-1/2 w-full flex justify-center items-center self-center">
            <Image
              src={bePillar}
              alt="Backend Development: The Pillar Of Digital Success"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
          <div className="md:w-1/2 w-full md:pl-5 pl-0 self-center leading-relaxed">
            <h1 className="text-4xl lg:text-3xl xl:text-4xl text-center capitalize text-[#f5f543] py-4">
              <span className="font-bold">Backend Development:</span> The Pillar
              of Digital Success
            </h1>
            <p className="py-2">
              Behind every exceptional user interface lies a powerful backend
              that orchestrates data, processes, and business logic. The backend
              isn't just about databases and servers; it's the unseen force that
              empowers frontend magic and transforms user interactions into
              tangible results. Let's journey through my backend expertise and
              understand how it lays the groundwork for a successful digital
              venture.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap py-4">
          <div className="md:w-1/2 w-full md:pr-5 pl-0 self-center leading-relaxed">
            <h1 className="text-4xl lg:text-3xl xl:text-4xl text-center capitalize text-[#f5f543] py-4">
              <span className="font-bold">Programming Languages:</span> C# /
              C-Sharp, Node.js, PHP
            </h1>
            <p className="py-2">
              Programming languages are the languages of backend development.
              Whether it's the versatility of C# / C-Sharp, the asynchronous
              power of Node.js, or the web-focused capabilities of PHP, each
              language brings a unique set of strengths to the table. These
              languages enable me to architect backend solutions that seamlessly
              handle data, business processes, and interactions with other
              services.
            </p>
          </div>
          <div className="md:w-1/2 w-full flex justify-center items-center self-center">
            <Image
              src={prog}
              alt="Web Technologies: HTML, CSS, JavaScript, TypeScript"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
        </div>
        <div className="flex flex-wrap py-4">
          <div className="md:w-1/2 w-full flex justify-center items-center self-center">
            <Image
              src={ExNest}
              alt="Frontend: Elevating Digital Experiences"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
          <div className="md:w-1/2 w-full md:pl-5 pl-0 self-center leading-relaxed">
            <h1 className="text-4xl lg:text-3xl xl:text-4xl text-center capitalize text-[#f5f543] py-4">
              <span className="font-bold">Web Frameworks:</span> Express.js,
              Nest.js, ASP.Net Core
            </h1>
            <p className="py-2">
              Web frameworks are the tools that streamline backend development.
              Express.js offers minimalistic, robust capabilities for Node.js
              applications, while Nest.js provides a structured and scalable
              approach to building APIs with TypeScript. ASP.Net Core brings the
              power of .NET to web applications, offering high-performance and
              cross-platform capabilities. These frameworks empower me to craft
              backend systems that are efficient, maintainable, and adaptable.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap py-4">
          <div className="md:w-1/2 w-full md:pr-5 pl-0 self-center leading-relaxed">
            <h1 className="text-4xl lg:text-3xl xl:text-4xl text-center capitalize text-[#f5f543] py-4">
              <span className="font-bold">Microservices</span> Architecture
            </h1>
            <p className="py-2">
              Microservices architecture revolutionizes backend design by
              breaking down applications into smaller, manageable services. This
              approach enhances scalability, maintainability, and deployment
              flexibility. Each microservice can be developed, tested, and
              deployed independently, allowing for rapid iteration and
              continuous improvement.
            </p>
          </div>
          <div className="md:w-1/2 w-full flex justify-center items-center self-center">
            <Image
              src={ms}
              alt="Web Technologies: HTML, CSS, JavaScript, TypeScript"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
        </div>
        <div className="flex flex-wrap py-4">
          <div className="md:w-1/2 w-full flex justify-center items-center self-center">
            <Image
              src={efCore}
              alt="Frontend: Elevating Digital Experiences"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
          <div className="md:w-1/2 w-full md:pl-5 pl-0 self-center leading-relaxed">
            <h1 className="text-4xl lg:text-3xl xl:text-4xl text-center capitalize text-[#f5f543] py-4">
              <span className="font-bold">Entity</span> Framework Core (EF Core)
            </h1>
            <p className="py-2">
              Entity Framework Core simplifies data access by providing an
              object-relational mapping (ORM) framework. It allows me to work
              with databases using object-oriented concepts, reducing the
              complexity of data operations and enhancing developer
              productivity.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap py-4">
          <div className="md:w-1/2 w-full md:pr-5 pl-0 self-center leading-relaxed">
            <h1 className="text-4xl lg:text-3xl xl:text-4xl text-center capitalize text-[#f5f543] py-4">
              <span className="font-bold">GraphQL</span> with AppSync
            </h1>
            <p className="py-2">
              GraphQL enables efficient data fetching by allowing clients to
              request exactly what they need. With AppSync, I build scalable
              GraphQL APIs that seamlessly integrate with various data sources,
              providing tailored data access and minimizing over-fetching.
            </p>
          </div>
          <div className="md:w-1/2 w-full flex justify-center items-center self-center">
            <Image
              src={graphqlAppSync}
              alt="Web Technologies: HTML, CSS, JavaScript, TypeScript"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
        </div>
        <div className="flex flex-wrap py-4">
          <div className="md:w-1/2 w-full flex justify-center items-center self-center">
            <Image
              src={integration}
              alt="Frontend: Elevating Digital Experiences"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
          <div className="md:w-1/2 w-full md:pl-5 pl-0 self-center leading-relaxed">
            <h1 className="text-4xl lg:text-3xl xl:text-4xl text-center capitalize text-[#f5f543] py-4">
              The Backbone of <span className="font-bold">Integration:</span>{" "}
              Connecting Frontend and Mobile
            </h1>
            <p className="py-2">
              A robust backend serves as the bridge that connects frontend
              interfaces and mobile applications. Its data orchestration
              capabilities ensure that both frontend and mobile devices access
              consistent, accurate, and up-to-date information. Whether it's iOS
              or Android, a well-designed backend ensures seamless data
              synchronization and a consistent user experience across platforms.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap py-4">
          <div className="md:w-1/2 w-full md:pr-5 pl-0 self-center leading-relaxed">
            <h1 className="text-4xl lg:text-3xl xl:text-4xl text-center capitalize text-[#f5f543] py-4">
              Catalyst for <span className="font-bold">Business</span> Growth
            </h1>
            <p className="py-2">
              A powerful backend is the cornerstone of a successful digital
              presence. It enables seamless interactions, robust data
              management, and supports innovation. A well-architected backend
              sets the stage for smooth frontend experiences, efficient data
              flow, and rapid development cycles.
            </p>
          </div>
          <div className="md:w-1/2 w-full flex justify-center items-center self-center">
            <Image
              src={BusinessGrowth}
              alt="Web Technologies: HTML, CSS, JavaScript, TypeScript"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
        </div>
        <p className="text-2xl font-handlee py-7">
          Backend development isn't just about handling data; it's about
          crafting the backbone that fuels digital interactions and drives
          business success. Through my expertise in programming languages, web
          frameworks, microservices, and data management, I'm committed to
          building the foundation for exceptional user experiences and business
          growth. Let's collaborate to construct a backend that supports your
          digital aspirations and integrates seamlessly with frontend and mobile
          technologies.
        </p>
      </section>
    </section>
  );
};

export default Backend;

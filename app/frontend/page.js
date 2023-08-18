import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import feElevateDE from "../../public/feElevateDE.webp";
import webTech from "../../public/webTech.webp";
import jsRANG from "../../public/jsRANG.webp";
import uiLibs from "../../public/uiLibs.webp";
import empowerBusiness from "../../public/empowerBusiness.webp";

const FrontendHero = dynamic(() => import("@/components/Heros/FrontendHero"), {
  loading: () => (
    <p className="h-[900px] justify-center items-center flex">Loading...</p>
  ),
});
export const metadata = {
  keywords: [
    "Frontend",
    "Frontend Development",
    "Web Technologies",
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "JavaScript Frameworks",
    "React",
    "Angular",
    "NextJS",
    "Gatsby",
    "UI Libraries",
    "jQuery",
    "Bootstrap",
    "Tailwind",
    "Ant-Design",
    "User-Centric Design",
    "Immersive Web Experiences",
    "Business Growth",
    "Digital Presence",
    "User Engagement",
  ],
  title: "Mastering Frontend | Crafting Immersive Web Experiences",
  description:
    "Immerse Yourself In The World Of Modern Web Technologies And User-Centric Design. Unlock The Potential Of Seamless User Experiences And Engaging Interfaces Crafted By A Skilled Frontend Developer.",
};

const Frontend = () => {
  return (
    <section>
      <FrontendHero />
      <section className="p-10">
        <h3 className="text-5xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-center capitalize text-[#f5f543] py-4 font-semibold">
          Frontend Artistry
        </h3>
        <p className="text-2xl font-handlee">
          I'd be thrilled to dive into the world of frontend skills and how they
          can invigorate businesses! As a seasoned frontend developer, I'm here
          to shed light on how these skills can breathe life into the digital
          landscape and transform user experiences.
        </p>
        <div className="flex flex-wrap py-4">
          <div className="md:w-1/2 w-full flex justify-center items-center self-center">
            <Image
              src={feElevateDE}
              alt="Frontend: Elevating Digital Experiences"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
          <div className="md:w-1/2 w-full md:pl-5 pl-0 self-center leading-relaxed">
            <h4 className="text-4xl lg:text-3xl xl:text-4xl text-center capitalize text-[#f5f543] py-4">
              <span className="font-bold">Frontend:</span> Elevating Digital
              Experiences
            </h4>
            <p className="py-2">
              In today's fast-paced digital world, the frontend is more than
              just a visual layer – it's the gateway to captivating user
              interactions and enhanced business success. Let's embark on a
              journey through the core elements of my frontend expertise and
              explore how they can rejuvenate your overall business strategy.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap py-4">
          <div className="md:w-1/2 w-full md:pr-5 pl-0 self-center leading-relaxed">
            <h4 className="text-4xl lg:text-3xl xl:text-4xl text-center capitalize text-[#f5f543] py-4">
              <span className="font-bold">Web Technologies:</span> HTML, CSS,
              JavaScript, TypeScript
            </h4>
            <p className="py-2">
              HTML, CSS, and JavaScript are the building blocks of the digital
              realm. HTML structures your content, CSS paints the canvas, and
              JavaScript adds the interactivity that engages users. But it
              doesn't end there; TypeScript takes JavaScript to the next level,
              providing stronger type checking and enhanced developer
              experience. By harnessing these technologies, I craft seamless
              interfaces that not only look stunning but also function
              flawlessly.
            </p>
          </div>
          <div className="md:w-1/2 w-full flex justify-center items-center self-center">
            <Image
              src={webTech}
              alt="Web Technologies: HTML, CSS, JavaScript, TypeScript"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
        </div>
        <div className="flex flex-wrap py-4">
          <div className="md:w-1/2 w-full flex justify-center items-center self-center">
            <Image
              src={jsRANG}
              alt="Frontend: Elevating Digital Experiences"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
          <div className="md:w-1/2 w-full md:pl-5 pl-0 self-center leading-relaxed">
            <h4 className="text-4xl lg:text-3xl xl:text-4xl text-center capitalize text-[#f5f543] py-4">
              <span className="font-bold">JavaScript Frameworks:</span> React,
              Angular, NextJS, Gatsby
            </h4>
            <p className="py-2">
              JavaScript frameworks are the engines that power modern web
              applications. React, Angular, NextJS, and Gatsby offer dynamic
              components, reusability, and efficient rendering. React's
              component-based architecture allows for scalable UI development,
              while Angular brings robustness and structure to complex
              applications. NextJS and Gatsby offer server-side rendering and
              static site generation, respectively, delivering lightning-fast
              experiences. Leveraging these frameworks, I create responsive and
              performance-oriented applications that leave a lasting impact.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap py-4">
          <div className="md:w-1/2 w-full md:pr-5 pl-0 self-center leading-relaxed">
            <h4 className="text-4xl lg:text-3xl xl:text-4xl text-center capitalize text-[#f5f543] py-4">
              <span className="font-bold">UI Libraries:</span> jQuery,
              Bootstrap, Tailwind, Ant-Design
            </h4>
            <p className="py-2">
              UI libraries streamline development and ensure consistent designs.
              jQuery's simplicity aids in DOM manipulation, Bootstrap offers
              responsive grid systems and pre-designed components, and Tailwind
              and Ant-Design provide utility-first classes and elegant UI
              components. These libraries expedite development while maintaining
              high-quality visuals, resulting in efficient and visually
              appealing user interfaces.
            </p>
          </div>
          <div className="md:w-1/2 w-full flex justify-center items-center self-center">
            <Image
              src={uiLibs}
              alt="Web Technologies: HTML, CSS, JavaScript, TypeScript"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
        </div>
        <div className="flex flex-wrap py-4">
          <div className="md:w-1/2 w-full flex justify-center items-center self-center">
            <Image
              src={empowerBusiness}
              alt="Frontend: Elevating Digital Experiences"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
          <div className="md:w-1/2 w-full md:pl-5 pl-0 self-center leading-relaxed">
            <h4 className="text-4xl lg:text-3xl xl:text-4xl text-center capitalize text-[#f5f543] py-4">
              Empowering Your Business
            </h4>
            <p className="py-2">
              In the digital age, a strong online presence is paramount. A
              well-crafted frontend not only engages users but also drives
              business growth. A responsive, intuitive, and aesthetically
              pleasing user interface fosters positive interactions, encouraging
              visitors to explore further and convert into customers. By
              leveraging the power of frontend technologies, we can create
              immersive user experiences that reflect the essence of your brand
              and contribute to your business's success.
            </p>
          </div>
        </div>
        <p className="text-2xl font-handlee py-7">
          Frontend development is more than coding – it's about breathing life
          into designs, fostering user engagement, and propelling your business
          forward. Through my expertise in web technologies, JavaScript
          frameworks, and UI libraries, I'm committed to revamping user
          experiences and invigorating your digital presence. Let's collaborate
          to transform your visions into vibrant, user-centric realities that
          captivate and elevate your business.
        </p>
      </section>
    </section>
  );
};

export default Frontend;

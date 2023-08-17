import Link from "next/link";

const ProjectHero = () => {
  return (
    <section className="w-full my-5 flex items-center justify-center bg-[url('/ProjectHero.webp')] bg-no-repeat bg-cover bg-top h-[900px] 2xl:h-[1400px]">
      <div className="w-full">
        <h1 className="text-white flex font-bold uppercase text-center text-3xl md:text-4xl lg:text-6xl xl:text-8xl items-center justify-center mt-0">
          INNOVATIVE PROJECTS
        </h1>
        <div className="text-xl md:text-2xl lg:text-3xl xl:text-4xl capitalize text-[#f5f543] py-8 px-2 text-center leading-loose">
          <h2 className="font-semibold text-stroke-black">
            Crafting Future Through Digital Innovations and Tech Evolution
          </h2>
          <p className="text-base md:text-lg lg:text-xl xl:text-2xl py-5 text-white text-stroke-black">
            Unveiling a Gallery of Cutting-Edge Endeavors That Define Tomorrow's
            Possibilities.
          </p>
        </div>
        <div className="w-full gap-3 justify-center flex flex-wrap py-10 text-center">
          <Link
            href="/experience"
            className="flex items-center bg-lime-400 text-black p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-black hover:text-white border border-solid border-transparent hover:border-lime-400"
          >
            View Experiences
          </Link>
          <Link
            href="/contact"
            className="flex items-center bg-white text-black p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-black hover:text-white border border-solid hover:border-white"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectHero;

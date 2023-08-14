import Link from "next/link";

const ExpHero = () => {
  return (
    <section className="w-full my-5 flex items-center justify-center bg-[url('/expHero.webp')] bg-no-repeat bg-cover bg-top h-[700px]">
      <div className="w-full">
        <h1 className="text-dark flex font-bold uppercase text-center text-3xl md:text-4xl lg:text-6xl xl:text-8xl items-center justify-center mt-0">
          Extensive Experience
        </h1>
        <div className="text-xl md:text-2xl lg:text-3xl xl:text-4xl capitalize text-[#f5f543] py-8 px-2 text-center leading-loose">
          <h2 className="font-semibold">
            Digital Journey of an IT Innovator with Depth
          </h2>
          <p className="text-base md:text-lg lg:text-xl xl:text-2xl py-5 text-white">
            Driving Technological Progress for Nearly Two Decades with a
            Crafting Excellence of Tech Evolution
          </p>
        </div>
        <div className="w-full gap-3 justify-center flex flex-wrap py-10 text-center">
          <Link
            href="/projects"
            className="flex items-center bg-lime-400 text-black p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-black hover:text-white border border-solid border-transparent hover:border-lime-400"
          >
            View Projects
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

export default ExpHero;

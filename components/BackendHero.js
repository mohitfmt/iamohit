import Link from "next/link";
import { TbBrandGit } from "react-icons/tb";

const BackendHero = () => {
  return (
    <section className="w-full my-5 flex items-center justify-center bg-[url('/FEHero.webp')] bg-no-repeat bg-cover bg-top h-[900px] 2xl:h-[1400px]">
      <div className="w-full">
        <h1 className="text-white flex font-bold uppercase text-center text-3xl md:text-4xl lg:text-6xl xl:text-8xl items-center justify-center mt-0">
          MASTERING Backend
        </h1>
        <div className="text-xl md:text-2xl lg:text-3xl xl:text-4xl capitalize text-[#f5f543] py-8 px-2 text-center leading-loose">
          <h2 className="font-semibold text-stroke-black">
            Crafting Immersive Web Experiences with Cutting-Edge Technologies
          </h2>
          <p className="text-base md:text-lg lg:text-xl xl:text-2xl py-5 text-white text-stroke-black">
            Immerse Yourself in the World of Modern Web Technologies and
            User-Centric Design. Unlock the Potential of Seamless User
            Experiences and Engaging Interfaces Crafted by a Skilled Backend
            Developer.
          </p>
        </div>
        <div className="w-full gap-3 justify-center flex flex-wrap py-10 text-center">
          <Link
            href="/projects"
            className="flex items-center bg-lime-400 text-black p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-black hover:text-white border border-solid border-transparent hover:border-lime-400"
          >
            View Projects
            <TbBrandGit className="text-2xl ml-2" />
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

export default BackendHero;

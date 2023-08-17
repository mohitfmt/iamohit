import Link from "next/link";
import { TbBrandGit } from "react-icons/tb";

const ContactHero = () => {
  return (
    <section className="w-full my-5 flex items-center justify-center bg-[url('/contactMeHero.webp')] bg-no-repeat bg-cover bg-top h-[900px] 2xl:h-[1400px]">
      <div className="w-full">
        <h1 className="text-white flex font-bold uppercase text-center text-3xl md:text-4xl lg:text-6xl xl:text-8xl items-center justify-center mt-0">
          Get in Touch
        </h1>
        <div className="text-xl md:text-2xl lg:text-3xl xl:text-4xl capitalize text-[#f5f543] py-8 px-2 text-center leading-loose">
          <h2 className="font-semibold text-stroke-black">
            Connect, Collaborate, Create
          </h2>
          <p className="text-base md:text-lg lg:text-xl xl:text-2xl py-5 text-white text-stroke-black">
            Reach out and let's start a conversation. Let's work together to
            craft exceptional digital experiences that make a lasting impact.
            Looking forward to hearing from you!
          </p>
        </div>
        <div className="w-full gap-3 justify-center flex flex-wrap py-10 text-center">
          <Link
            href="/experience"
            className="flex items-center bg-white text-black p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-black hover:text-white border border-solid hover:border-white"
          >
            Experiences
          </Link>
          <Link
            href="/projects"
            className="flex items-center bg-lime-400 text-black p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-black hover:text-white border border-solid border-transparent hover:border-lime-400"
          >
            Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;

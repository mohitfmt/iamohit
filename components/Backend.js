import Image from "next/image";
import Link from "next/link";
import { PiCodeBold } from "react-icons/pi";
import beImg from "../public/be.webp";

const Backend = () => {
  return (
    <section className="p-10">
      <div className="flex flex-wrap">
        <div className="lg:w-1/2 md:w-full flex justify-center items-center self-center">
          <Image
            src={beImg}
            alt="Architecting Digital Foundations: Backends that Power Possibilities"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
        <div className="lg:w-1/2 md:pl-5 sm:pl-0 self-center leading-relaxed">
          <h1 className="text-4xl lg:text-3xl xl:text-4xl text-center capitalize text-[#f5f543] py-8 font-semibold">
            Backends that Power Possibilities
          </h1>
          <p className="py-4">
            Unlock the engine room of digital innovation with my mastery in
            Backend Development. Delve into a realm where Programming Languages
            like C# / C-Sharp, Node.js, and PHP converge to create seamless
            digital experiences.
          </p>
          <p className="py-4">
            Harness the capabilities of cutting-edge Web Frameworks –
            Express.js, Nest.js, and ASP.Net Core – to sculpt robust and
            responsive backends that fuel digital aspirations. I am the
            conductor orchestrating the symphony of Microservices Architecture,
            ensuring scalability, flexibility, and efficiency in every note.
          </p>
          <p className="py-4">
            Witness the marvel of GraphQL with AppSync, where queries become
            pathways to user satisfaction. Every line of code I craft weaves
            intricate threads that bind data and functionality into a tapestry
            of digital brilliance.
          </p>
          <div className="flex justify-end px-6">
            <Link
              target="_blank"
              href="/backend"
              className="flex justify-center items-center bg-lime-400 text-black p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-black hover:text-white border border-solid border-transparent hover:border-lime-400"
            >
              Backend Delights Await
              <PiCodeBold className="ml-2 text-2xl" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Backend;

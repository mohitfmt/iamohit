import Image from "next/image";
import Link from "next/link";
import { FaDatabase } from "react-icons/fa";
import dbImage from "../public/db.webp";

const Databases = () => {
  return (
    <section className="p-10">
      <div className="flex flex-wrap">
        <div className="lg:w-1/2 md:pl-5 sm:pl-0 self-center leading-relaxed">
          <h1 className="text-4xl lg:text-3xl xl:text-4xl text-center capitalize text-[#f5f543] py-8 font-semibold">
            Crafting Data Ecosystems
          </h1>
          <p className="py-4">
            Dive into the heart of digital intelligence with my prowess in
            Databases. Unveil a world where structured and unstructured data
            converge, transforming into valuable insights that drive strategic
            decisions and innovation. Immerse yourself in the realm of SQL,
            where SQL Server, MySQL, and PostgreSQL form the bedrock of data
            manipulation and management. I orchestrate these powerful tools to
            sculpt data landscapes that optimize operations and fuel growth.
          </p>
          <p className="py-4">
            Venture further into the cosmos of NoSQL, where MongoDB and DynamoDB
            flourish. Witness how these dynamic databases amplify flexibility,
            enabling the creation of agile and responsive applications that
            evolve with the needs of the digital era.
          </p>
          <p className="py-4">
            I speak the language of Data Formats – XML, JSON, and GraphQL –
            weaving them into harmonious symphonies that enable seamless
            communication between systems and users. These formats are the
            conduits through which data finds its voice, guiding interactions
            and fueling experiences.
          </p>
          <div className="flex justify-end px-6">
            <Link
              target="_blank"
              href="/experience"
              className="flex justify-center items-center bg-lime-400 text-black p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-black hover:text-white border border-solid border-transparent hover:border-lime-400"
            >
              Data Symphony Unraveled
              <FaDatabase className="ml-2" />
            </Link>
          </div>
        </div>
        <div className="lg:w-1/2 md:w-full flex justify-center items-center self-center">
          <Image
            src={dbImage}
            alt="Next, React, Angular"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Databases;

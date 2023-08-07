import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GiArmoredBoomerang } from "react-icons/gi";

const Frontend = () => {
  return (
    <section className="p-10">
      <div className="flex flex-wrap">
        <div className="lg:w-1/2 md:pl-5 sm:pl-0 self-center leading-relaxed">
          <h1 className="text-4xl lg:text-3xl xl:text-4xl text-center capitalize text-[#f5f543] py-8 font-semibold">
            Mastering the Art of Frontend
          </h1>
          <p className="py-4">
            Step into the captivating realm of frontend excellence, where
            innovation meets user-centric design. With a toolkit encompassing
            Web Technologies like HTML, CSS, JavaScript, and TypeScript, I weave
            digital wonders that captivate and engage.
          </p>
          <p className="py-4">
            Embrace the power of JavaScript Frameworks – React, Angular, NextJS,
            and Gatsby – as I breathe life into dynamic web experiences. Elevate
            aesthetics and interactivity with UI Libraries such as jQuery,
            Bootstrap, Tailwind, and Ant-Design, transforming pixels into
            captivating visual stories.
          </p>
          <p className="py-4">
            Every line of code I craft is a brushstroke of innovation, painted
            on the canvas of user delight. Unveil a world where pixels come
            alive, interfaces leave lasting impressions, and user journeys are
            sculpted with precision. Hire me for this voyage of frontend
            artistry, where technology and creativity merge seamlessly.
          </p>
          <div className="flex justify-end px-6">
            <Link
              target="_blank"
              href="/"
              className="flex justify-center items-center bg-lime-400 text-black p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-black hover:text-white border border-solid border-transparent hover:border-lime-400"
            >
              Read More
              <GiArmoredBoomerang className="ml-2" />
            </Link>
          </div>
        </div>
        <div className="lg:w-1/2 md:w-full flex justify-center items-center self-center">
          <Image
            src="/fe.webp"
            alt="Next, React, Angular"
            width={1024}
            height={622}
            placeholder="empty"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default Frontend;

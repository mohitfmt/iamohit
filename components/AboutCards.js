import Link from "next/link";
import { aboutMohit } from "./data/aboutData";
const AboutCards = () => {
  return (
    <section className="p-10">
      <h1 className="text-4xl lg:text-3xl xl:text-4xl text-center capitalize text-[#f5f543] py-8 font-semibold">
        Key Highlights and Skills
      </h1>
      <div className="flex-none flex-wrap lg:flex">
        {aboutMohit.highlightsData.map((item, index) => (
          <div key={item.RibbonText + index} className="w-full lg:w-1/2 p-3">
            <div className="min-h-full bg-[#212121] border-2 border-[#292929] border-solid rounded-lg shadow flex-none sm:flex items-center">
              <div className="p-2 justify-center flex">
                {item.AvatarIcon}
              </div>
              <div className="p-5">
                <h2 className="text-2xl lg:text-xl xl:text-2xl capitalize text-white font-bold font-inter">
                  {item.CardTitle}
                </h2>
                <p className="py-4 text-white">{item.HighlightText}</p>
                <div className="flex justify-end">
                  <Link
                    href="/about"
                    className="flex justify-center items-center hover:bg-lime-400 hover:text-[#121212] capitalize p-1 px-3 rounded-lg text-base font-semibold bg-white text-black border border-solid border-transparent hover:border-lime-400"
                  >
                    {item.MetaTitle}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <svg width="0" height="0">
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop stopColor="#indigo" offset="0%" />
          <stop stopColor="#purple" offset="50%" />
          <stop stopColor="#pink" offset="100%" />
        </linearGradient>
      </svg>
    </section>
  );
};

export default AboutCards;

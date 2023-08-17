import dynamic from "next/dynamic";
import Image from "next/image";
import contactMe from "../../public/contactMe.webp";
import available from "../../public/available.webp";
import privacy from "../../public/privacy.webp";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { FiPhoneOutgoing } from "react-icons/fi";

const ContactHero = dynamic(() => import("@/components/Heros/ContactHero"), {
  loading: () => (
    <p className="h-[900px] justify-center items-center flex">Loading...</p>
  ),
});
export const metadata = {
  keywords: [
    "Contact",
    "Collaboration",
    "Digital Experiences",
    "Frontend",
    "Backend",
    "Full Stack",
    "User Interfaces",
    "Responsive Layouts",
    "Freelance",
    "Collaborations",
    "Consultations",
    "Privacy",
    "Communication",
    "Data Handling",
    "Privacy Policy",
    "Email",
    "Phone",
    "LinkedIn",
    "GitHub",
    "Social Media",
    "Web Development",
    "Projects",
    "Magic of Code",
    "Tech Spells",
  ],
  title: "Get In Touch | Connect, Collaborate, Create",
  description:
    "Reach Out And Let's Start A Conversation. Let's Work Together To Craft Exceptional Digital Experiences That Make A Lasting Impact. Looking Forward To Hearing From You!",
};

const Contact = () => {
  return (
    <section>
      <ContactHero />
      <section className="p-10">
        <div className="flex flex-wrap">
          <div className="md:w-1/2 w-full flex justify-center items-center self-center">
            <Image
              src={contactMe}
              alt="Contact Mohit"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
          <div className="md:w-1/2 w-full md:pl-5 pl-0 self-center leading-relaxed">
            <h1 className="text-4xl lg:text-3xl xl:text-4xl text-center capitalize text-[#f5f543] py-4 font-semibold">
              Let's Chat
            </h1>
            <p className="py-2">
              Hey there, I'm Mohit, a full stack wizard who adores creating
              magic through code with a passion for turning lines of code into
              captivating user experiences. I weave the art of design seamlessly
              with the science of coding to create websites that leave a lasting
              impression.
            </p>
            <p className="py-2">
              Drop me a line on <span className="font-bold">WhatsApp</span> for
              a quick chat or send me an email or ring me up – let's dive into
              the world of frontend / backend possibilities and shape digital
              dreams into reality! Nothing fuels my engine more than crafting
              pixel-perfect designs and dancing with responsive layouts until
              they sing!
            </p>
            <div className="flex justify-end px-6">
              <Link
                rel="noopener noreferrer"
                target="_blank"
                href="https://wa.link/yx7qep"
                className="flex justify-center items-center bg-lime-400 text-black p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-black hover:text-white border border-solid border-transparent hover:border-lime-400"
              >
                Send message
                <FaWhatsapp className="ml-2 text-2xl" />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap py-5">
          <div className="md:w-1/2 w-full md:pr-5 pr-0 self-center leading-relaxed">
            <h1 className="text-4xl lg:text-3xl xl:text-4xl text-center capitalize text-[#f5f543] py-4 font-semibold">
              Open to New Opportunities
            </h1>
            <p className="py-2">
              Beyond the digital fundamentals, I thrive on sculpting user
              interfaces that adapt seamlessly to various devices. From shaping
              user interfaces to ensuring cross-device compatibility. I'm not
              just about lines of code; I'm about orchestrating visual
              symphonies and making layouts dance gracefully on screens of all
              sizes.
            </p>
            <p className="py-2">
              Are you looking for a full stack engineer to bring your digital
              vision to life? Whether it's freelance work, collaborations, or
              consultations, I'm here to help you turn ideas into reality. With
              a passion for creating engaging user experiences, I'm excited to
              explore new projects and contribute my skills to your endeavors.
              Let's connect and discuss how we can work together to make your
              digital dreams a reality. Feel free to reach out to me through
              email or phone – I'm ready to embark on the next exciting journey
              with you!
            </p>
            <div className="flex justify-end px-6">
              <Link
                rel="noopener noreferrer"
                target={"_blank"}
                href="tel:+60183553290"
                className="flex justify-center items-center bg-lime-400 text-black p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-black hover:text-white border border-solid border-transparent hover:border-lime-400"
              >
                Call me
                <FiPhoneOutgoing className="ml-2 text-2xl" />
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 w-full flex justify-center items-center self-center">
            <Image
              src={available}
              alt="Mohit's Availability"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
        </div>
        <div className="flex flex-wrap py-5">
          <div className="md:w-1/2 w-full flex justify-center items-center self-center">
            <Image
              src={privacy}
              alt="Privacy on Point"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
          <div className="md:w-1/2 w-full md:pl-5 pl-0 self-center leading-relaxed">
            <h1 className="text-4xl lg:text-3xl xl:text-4xl text-center capitalize text-[#f5f543] py-4 font-semibold">
              Rest Assured, Your Information is Safe
            </h1>
            <p className="py-2">
              Your privacy matters, and I'm committed to safeguarding your
              information. I promise to use your data solely for communication
              purposes, ensuring that your personal details are treated with the
              utmost care and respect. Your trust is essential to me, and I
              assure you that I won't share your information without your
              consent.
            </p>
            <p className="py-2">
              Oh, and in case you're wondering – I might use a sprinkle of your
              insights to add flavor to my recipe book. After all, creativity
              can strike from unexpected sources!
            </p>
            <p className="py-2">
              For all the details about how I handle your data, you're welcome
              to take a peek at my privacy policy. Transparency is key, and I'm
              here to answer any questions you may have about your privacy and
              the way I handle your information. Your peace of mind is a
              priority, and I want you to feel comfortable and confident when
              connecting with me.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap py-5">
          <h1 className="w-full text-4xl lg:text-3xl xl:text-4xl text-center capitalize text-[#f5f543] py-4 font-semibold">
            Ready to connect?
          </h1>
          <div className="md:w-1/2 w-full flex justify-center items-center self-center">
            <p className="md:text-right text-left text-xl">
              Reach out to me directly at{" "}
              <a
                href="ma&#105;&#108;to&#58;m&#37;6Fh&#105;&#116;&#53;%3783&#64;gma%69&#37;6C&#46;&#99;&#111;m"
                className="text-lime-400"
              >
                m&#111;hi&#116;&#53;783&#64;gma&#105;l&#46;c&#111;m
              </a>
              . Or you're up for an exciting rendezvous via a call, you can give
              me a{" "}
              <a href="tel:60183553290" className="text-lime-400">
                ring at (601) 8355-3290!
              </a>{" "}
              I'm here and eager to connect with fellow wizards of the digital
              realm. Let's weave some tech spells together!
            </p>
          </div>
          <div className="md:w-1/2 w-full md:pl-5 pl-0 self-center leading-relaxed p-3 ">
            <p className="py-2 text-xl">
              Connect with me on LinkedIn, check out my GitHub. For a quick dive
              into the world of my social media, head to the footer section
              below! Whether it's sharing ideas, cracking jokes, or swapping
              your favorite cat gifs, I'm all ears and ready to engage.
            </p>
          </div>
        </div>
        <div className="flex text-center justify-center items-center text-2xl py-20 font-semibold flex-col font-handlee">
          Feel the magic of turning lines of code into captivating digital
          experiences. Love the thrill of coding? Dive deeper into my enchanting
          world of web development! Ready to see what I've crafted? Check out my
          experience and explore my projects.
          <div className="flex gap-3 font-inter">
            <Link
              href="/experience"
              className="flex items-center bg-lime-400 text-black p-2.5 mt-5 px-6 rounded-lg text-lg font-semibold hover:bg-black hover:text-white border border-solid hover:border-lime-400"
            >
              Experience
            </Link>
            <Link
              href="/projects"
              className="flex items-center bg-white text-black p-2.5 mt-5 px-6 rounded-lg text-lg font-semibold hover:bg-black hover:text-white border border-solid hover:border-white"
            >
              Projects
            </Link>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Contact;

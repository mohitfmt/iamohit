import Image from "next/image";
import Link from "next/link";
import { AiOutlineProject } from "react-icons/ai";
import {
  FaHome,
  FaInfoCircle,
  FaRegCalendarAlt,
  FaStackOverflow,
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import fullLogo from "../public/full-logo.svg";
import logo from "../public/logo.svg";

const NavLinks = [
  {
    label: "Home",
    href: "/",
    key: "home",
    icon: <FaHome className="md:text-xl text-3xl" />,
  },
  {
    label: "About",
    href: "/about",
    key: "about",
    icon: <FaInfoCircle className="md:text-xl text-3xl" />,
  },
  {
    label: "Experience",
    href: "/experience",
    key: "experience",
    icon: <FaRegCalendarAlt className="md:text-xl text-3xl" />,
  },
  {
    label: "Projects",
    href: "/projects",
    key: "projects",
    icon: <AiOutlineProject className="md:text-xl text-4xl" />,
  },
  {
    label: "Contact",
    href: "/contact",
    key: "contact",
    icon: <MdAlternateEmail className="md:text-xl text-4xl" />,
  },
];

const Navbar = () => {
  return (
    <header className="w-full">
      <nav className="flex justify-between items-center py-5 px-8 gap-4">
        <Link href="/">
          <Image
            className="md:flex hidden"
            src={fullLogo}
            style={{ maxWidth: 192, height: "auto" }}
            alt="iAMohit Full Logo"
          />
          <Image
            className="md:hidden"
            src={logo}
            style={{ maxWidth: 48, height: "auto" }}
            alt="iAMohit Logo"
          />
        </Link>
        <div className="flex w-full gap-2 md:gap-4 justify-end">
          {NavLinks.map((link) => (
            <Link
              className="flex items-center gap-2"
              href={link.href}
              key={link.key}
            >
              {link.icon}
              <span className="relative group">
                <span className="md:flex hidden text-lg">{link.label}</span>
                <span className="h-[1px] inline-block w-0 bg-white absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease-linear duration-300">
                  &nbsp;
                </span>
              </span>
            </Link>
          ))}
        </div>
      </nav>
      <nav className="flex-wrap flex w-full items-center justify-end px-8 gap-4">
        <Link
          rel="noopener noreferrer"
          target={"_blank"}
          href="https://stackoverflow.com/users/3796048/mohit-shrivastava"
        >
          <FaStackOverflow
            className="text-2xl md:text-3xl text-[#f48024]"
            title="Problem solving attitude can be viewed here."
          />
        </Link>
        <Link
          rel="noopener noreferrer"
          target={"_blank"}
          href="https://www.linkedin.com/in/mohit5783"
        >
          <FaLinkedin
            className="text-2xl md:text-3xl text-[#0a66c2]"
            title="Mohit's LinkedIn profile, to showcase my professional career and education."
          />
        </Link>
        <Link
          rel="noopener noreferrer"
          target={"_blank"}
          href="https://github.com/mohit5783/"
        >
          <FaGithub
            className="text-2xl md:text-3xl text-[#f5f5f5]"
            title="Not all my repository are public, please get in touch to know more about Mohit"
          />
        </Link>
        <Link
          rel="noopener noreferrer"
          target={"_blank"}
          href="https://twitter.com/mohit5783"
        >
          <FaTwitter
            className="text-2xl md:text-3xl text-[#1da1f2]"
            title="This is not where I could be found, Its just an account."
          />
        </Link>
        <Link
          rel="noopener noreferrer"
          target={"_blank"}
          href="https://www.facebook.com/mohit.shrivastava.technocrat"
        >
          <FaFacebookF
            className="text-2xl md:text-3xl text-[#1877f2]"
            title="Socially active, lazy with commenting and posting. Just view what friend does"
          />
        </Link>
        <Link
          rel="noopener noreferrer"
          target={"_blank"}
          href="https://www.instagram.com/mohit5783/"
        >
          <FaInstagram
            className="text-2xl md:text-3xl text-[#833ab4]"
            title="Mohit K Srivastava's Insta account"
          />
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;

import Link from "next/link";
import {
  FaStackOverflow,
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaFacebookF,
  FaWhatsapp,
  FaInstagram,
  FaYoutube,
  FaPinterestP,
} from "react-icons/fa";
import { FiPhoneOutgoing } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="w-full">
      <hr className="py-5" />
      <div className="flex-wrap flex w-full items-center justify-center gap-6">
        <Link
          rel="noopener noreferrer"
          target={"_blank"}
          href="tel:+60183553290"
        >
          <FiPhoneOutgoing
            className="text-4xl text-[#00a98f]"
            title="Call Mohit K Srivastava, reponse 99%"
          />
        </Link>
        <Link
          rel="noopener noreferrer"
          target={"_blank"}
          href="https://wa.link/yx7qep"
        >
          <FaWhatsapp
            className="text-4xl text-[#25d366]"
            title="Best form to get in touch with me. Just say hello"
          />
        </Link>
        <Link
          rel="noopener noreferrer"
          target={"_blank"}
          href="https://stackoverflow.com/users/3796048/mohit-shrivastava"
        >
          <FaStackOverflow
            className="text-4xl text-[#f48024]"
            title="Problem solving attitude can be viewed here."
          />
        </Link>
        <Link
          rel="noopener noreferrer"
          target={"_blank"}
          href="https://www.linkedin.com/in/mohit5783"
        >
          <FaLinkedin
            className="text-4xl text-[#0a66c2]"
            title="Mohit's LinkedIn profile, to showcase my professional career and education."
          />
        </Link>
        <Link
          rel="noopener noreferrer"
          target={"_blank"}
          href="https://github.com/mohit5783/"
        >
          <FaGithub
            className="text-4xl text-[#f5f5f5]"
            title="Not all my repository are public, please get in touch to know more about Mohit"
          />
        </Link>
        <Link
          rel="noopener noreferrer"
          target={"_blank"}
          href="https://twitter.com/mohit5783"
        >
          <FaTwitter
            className="text-4xl text-[#1da1f2]"
            title="This is not where I could be found, Its just an account."
          />
        </Link>
        <Link
          rel="noopener noreferrer"
          target={"_blank"}
          href="https://www.facebook.com/iamohits/"
        >
          <FaFacebookF
            className="text-4xl text-[#1877f2]"
            title="Socially active, lazy with commenting and posting. Just view what friend does"
          />
        </Link>
        <Link
          rel="noopener noreferrer"
          target={"_blank"}
          href="https://www.instagram.com/mohit5783/"
        >
          <FaInstagram
            className="text-4xl text-[#833ab4]"
            title="Mohit K Srivastava's Insta account"
          />
        </Link>
        <Link
          rel="noopener noreferrer"
          target={"_blank"}
          href="https://www.youtube.com/@iAMohitBytes"
        >
          <FaYoutube
            className="text-4xl"
            title="Youtube account for Mohit. Sooner you will watch videos from me."
          />
        </Link>
        <Link
          rel="noopener noreferrer"
          target={"_blank"}
          href="https://www.pinterest.com/mohit5783"
        >
          <FaPinterestP className="text-4xl" title="Mohit's Pin" />
        </Link>
      </div>
      <div className="flex justify-between px-4 py-4 text-gray-400 font-medium text-lg">
        <span>{new Date().getFullYear()} &copy; All Right Reserved</span>
        <div className="text-end">Developed by iAMohit</div>
      </div>
    </footer>
  );
};

export default Footer;

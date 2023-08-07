import Image from "next/image";
import Link from "next/link";
import { GiArmoredBoomerang } from "react-icons/gi";

const Web3Block = () => {
  return (
    <section className="p-10">
      <div className="flex flex-wrap">
        <div className="lg:w-1/2 md:w-full flex justify-center items-center self-center">
          <Image
            src="/web3.webp"
            alt="Web3.0 Blockchain"
            width={2392}
            height={1342}
            placeholder="empty"
            loading="lazy"
          />
        </div>
        <div className="lg:w-1/2 md:pl-5 sm:pl-0 self-center leading-relaxed">
          <h1 className="text-4xl lg:text-3xl xl:text-4xl text-center capitalize text-[#f5f543] py-8 font-semibold">
            Unleashing the Power of Web 3.0 & Blockchain
          </h1>
          <p className="py-4">
            Dive into the cutting-edge realm of Web 3.0 and blockchain with a
            seasoned technologist. From crafting Solidity-powered Smart
            Contracts to seamlessly maneuvering through the Ethereum ecosystem ,
            I bring the power of Metamask, remix, web3js, ethers.js, and
            OpenZeppelin to shape the digital landscape.
          </p>
          <p className="py-4">
            Embark on a journey through Three.js for captivating 3D Web
            Applications that push the boundaries of user experience. Explore
            the revolutionary potential of Blockchain, particularly Ethereum
            [ETH] Hardhat, to redefine secure and transparent data handling. I'm
            ready to lead your digital transformation towards a decentralized
            and innovative future. Let's build the next generation of
            technology, together!
          </p>
          <div className="flex justify-end px-6">
            <Link
              href="/web3"
              className="flex justify-center items-center bg-lime-400 text-black p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-black hover:text-white border border-solid border-transparent hover:border-lime-400"
            >
              Read More
              <GiArmoredBoomerang className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Web3Block;

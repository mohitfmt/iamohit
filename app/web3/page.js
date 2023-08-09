import Web3Hero from "@/components/Web3Hero";
import Image from "next/image";
import Link from "next/link";
import blockchainImg from "../../public/blockchain.webp";
import smartContractImg from "../../public/smart-contract.webp";
import ethereumImg from "../../public/ethereum.webp";
import rpcImg from "../../public/rpc.webp";
import ThreeDImg from "../../public/3d.webp";
const Web3Blockchain = () => {
  return (
    <section>
      <Web3Hero />
      <section className="p-10">
        <div className="flex flex-wrap">
          <div className="md:w-1/2 w-full flex justify-center items-center self-center">
            <Image
              src={blockchainImg}
              alt="Web3.0 Blockchain"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
          <div className="md:w-1/2 w-full md:pl-5 pl-0 self-center leading-relaxed">
            <p className="py-4 text-2xl lg:text-2xl md:text-xl ">
              Welcome to my cutting-edge portfolio showcasing my expertise in
              Web 3.0 and Blockchain technologies. As a skilled website
              developer, I've harnessed the power of these innovative
              technologies to create an immersive and interactive experience.
              Explore the future with me as we dive into the technical stacks
              that make this portfolio possible.
            </p>
            <p className="py-4 text-2xl lg:text-2xl md:text-xl ">
              Experience the future of finance and technology through Ethereum,
              the leading blockchain platform. Witness the transparency and
              security that only blockchain can provide.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap mt-10">
          <div className="md:w-1/2 p-2">
            <div class="bg-[#212121] border-2 border-[#292929] border-solid rounded-2xl">
              <Image
                className="object-cover w-full rounded-t-2xl"
                src={smartContractImg}
                alt="Web3.0 Blockchain"
                style={{ maxWidth: "100%", height: "auto" }}
              />

              <div className="p-5">
                <h3 className="text-3xl lg:text-2xl xl:text-3xl capitalize text-[#f5f543] font-semibold">
                  Solidity for Smart Contracts
                </h3>
                <p className="font-normal">
                  Crafting secure and efficient smart contracts is at the core
                  of my skillset. I leverage Solidity to build trustless and
                  decentralized applications that reshape industries.
                </p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 p-2">
            <div class="bg-[#212121] border-2 border-[#292929] border-solid rounded-2xl">
              <Image
                className="object-cover w-full rounded-t-2xl"
                src={ThreeDImg}
                alt="3D web applications"
                style={{ maxWidth: "100%", height: "auto" }}
              />

              <div className="p-5">
                <h3 className="text-3xl lg:text-2xl xl:text-3xl text-[#f5f543] font-semibold">
                  Three.js for 3D Web Applications
                </h3>
                <p className="font-normal">
                  Immerse yourself in stunning 3D visuals powered by Three.js.
                  Witness the fusion of art and technology as I bring dynamic
                  and interactive graphics to the web.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap mt-10">
          <div className="md:w-1/2 p-2">
            <div class="bg-[#212121] border-2 border-[#292929] border-solid rounded-2xl">
              <Image
                className="object-cover w-full rounded-t-2xl"
                src={ethereumImg}
                style={{ maxWidth: "100%", height: "auto" }}
                alt="Ethereum"
              />

              <div className="p-5">
                <h3 className="text-3xl lg:text-2xl xl:text-3xl capitalize text-[#f5f543] font-semibold">
                  Ethereum Ecosystem
                </h3>
                <ul className="font-normal list-disc pl-3">
                  <li className="py-2">
                    <span className="font-semibold">Metamask:</span> Seamlessly
                    interact with the Ethereum blockchain and manage your
                    digital assets.
                  </li>
                  <li className="py-2">
                    <span className="font-semibold">Remix:</span> Develop, test,
                    and debug smart contracts in a user-friendly environment.
                  </li>
                  <li className="py-2">
                    <span className="font-semibold">web3.js:</span> Empowering
                    web applications with the ability to communicate with
                    Ethereum nodes.
                  </li>
                  <li className="py-2">
                    <span className="font-semibold">ethers.js:</span> Building
                    decentralized apps with concise and readable code.
                  </li>
                  <li className="py-2">
                    <span className="font-semibold">OpenZeppelin:</span>{" "}
                    Utilizing battle-tested contracts to ensure security and
                    reliability.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 p-2">
            <div class="bg-[#212121] border-2 border-[#292929] border-solid rounded-2xl">
              <Image
                className="object-cover w-full rounded-t-2xl"
                src={rpcImg}
                style={{ maxWidth: "100%", height: "auto" }}
                alt="RPCs: Infura, Alchemy, Moralis"
              />

              <div className="p-5">
                <h3 className="text-3xl lg:text-2xl xl:text-3xl capitalize text-[#f5f543] font-semibold">
                  RPCs: Remote Procedure Call
                </h3>
                <p className="py-2">
                  RPCs enables communication and interaction between different
                  software applications or processes running on a network, as if
                  they were local to each other. This concept is often used in
                  various networked systems, including blockchain networks like
                  Ethereum.
                </p>
                <ul className="font-normal list-disc pl-3">
                  <li className="py-2">
                    <span className="font-semibold">Infura:</span> Seamlessly
                    connect to the Ethereum network without the hassle of
                    running your own node.
                  </li>
                  <li className="py-2">
                    <span className="font-semibold">Alchemy:</span> Unlock the
                    full potential of Ethereum with high-performance
                    infrastructure.
                  </li>
                  <li className="py-2">
                    <span className="font-semibold">Moralis:</span> Simplifying
                    decentralized app development by providing essential backend
                    services.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap mt-10">
          <div className="sm:w-1/2 md:w-1/3 2xl:w-1/6 w-full p-2">
            <div className="bg-[#212121] border-2 border-[#292929] border-solid rounded-2xl justify-center text-center items-center flex flex-col aspect-square">
              <span className="text-5xl py-4 font-bold flex">
                5<span className="text-xl items-center flex">+</span>
              </span>
              Projects
            </div>
          </div>
          <div className="sm:w-1/2 md:w-1/3 2xl:w-1/6 w-full p-2">
            <div className="bg-[#212121] border-2 border-[#292929] border-solid rounded-2xl justify-center text-center items-center flex flex-col aspect-square">
              <span className="text-5xl py-4 font-bold flex">
                17<span className="text-xl items-center flex">+</span>
              </span>
              Smart Contracts Developed
            </div>
          </div>
          <div className="sm:w-1/2 md:w-1/3 2xl:w-1/6 w-full p-2">
            <div className="bg-[#212121] border-2 border-[#292929] border-solid rounded-2xl justify-center text-center items-center flex flex-col aspect-square">
              <span className="text-5xl py-4 font-bold flex">
                8,000<span className="text-xl items-center flex">+</span>
              </span>
              Ethereum Transactions Processed
            </div>
          </div>
          <div className="sm:w-1/2 md:w-1/3 2xl:w-1/6 w-full p-2">
            <div className="bg-[#212121] border-2 border-[#292929] border-solid rounded-2xl justify-center text-center items-center flex flex-col aspect-square">
              <span className="text-5xl py-4 font-bold flex">
                1,700<span className="text-xl items-center flex">+</span>
              </span>
              Active Users
            </div>
          </div>
          <div className="sm:w-1/2 md:w-1/3 2xl:w-1/6 w-full p-2">
            <div className="bg-[#212121] border-2 border-[#292929] border-solid rounded-2xl justify-center text-center items-center flex flex-col aspect-square">
              <span className="text-5xl py-4 font-bold flex">
                260<span className="text-xl items-center flex">+</span>
              </span>
              Amount of ETH
            </div>
          </div>
          <div className="sm:w-1/2 md:w-1/3 2xl:w-1/6 w-full p-2">
            <div className="bg-[#212121] border-2 border-[#292929] border-solid rounded-2xl justify-center text-center items-center flex flex-col aspect-square">
              <span className="text-5xl py-4 font-bold flex">
                4<span className="text-xl items-center flex">+</span>
              </span>
              Number of DApps Deployed
            </div>
          </div>
        </div>
        <div className="flex text-center justify-center items-center text-2xl py-20 font-semibold flex-col font-handlee">
          Ready to make an impact in the Web3 world? Let's connect and
          collaborate on the next groundbreaking project.
          <Link
            href="/contact"
            className="flex items-center bg-lime-400 text-black p-2.5 mt-5 px-6 rounded-lg text-lg font-semibold hover:bg-black hover:text-white border border-solid border-transparent hover:border-lime-400 font-inter"
          >
            Contact Me
          </Link>
        </div>
      </section>
    </section>
  );
};

export default Web3Blockchain;

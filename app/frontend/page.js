import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";

const FrontendHero = dynamic(() => import("@/components/FrontendHero"), {
  loading: () => (
    <p className="h-[900px] justify-center items-center flex">Loading...</p>
  ),
});

const Frontend = () => {
  return (
    <section>
      <FrontendHero />
    </section>
  );
};

export default Frontend;

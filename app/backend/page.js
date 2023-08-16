import dynamic from "next/dynamic";

const BackendHero = dynamic(() => import("@/components/BackendHero"), {
  loading: () => (
    <p className="h-[900px] justify-center items-center flex">Loading...</p>
  ),
});

const Backend = () => {
  return (
    <section>
      <BackendHero />
    </section>
  );
};

export default Backend;

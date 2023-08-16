import dynamic from "next/dynamic";

const ContactHero = dynamic(() => import("@/components/ContactHero"), {
  loading: () => (
    <p className="h-[900px] justify-center items-center flex">Loading...</p>
  ),
});

const Contact = () => {
  return (
    <section>
      <ContactHero />
    </section>
  );
};

export default Contact;

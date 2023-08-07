import AboutCards from "@/components/AboutCards";
import Backend from "@/components/Backend";
import Databases from "@/components/Databases";
import DevTools from "@/components/DevTools";
import Frontend from "@/components/Frontend";
import Hero from "@/components/Hero";
import SkillsCards from "@/components/SkillsCards";
import Web3Block from "@/components/Web3Block";

export default function Home() {
  return (
    <section className="items-center">
      <Hero />
      <Web3Block />
      <Frontend />
      <Backend />
      <Databases />
      <DevTools />
      <AboutCards />
      <SkillsCards />
    </section>
  );
}

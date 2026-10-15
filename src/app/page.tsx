import { Hero } from "@/components/hero";
import { About, AiNote, Experience, OtherWork, Stack, Work } from "@/components/sections";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Work />
      <OtherWork />
      <AiNote />
      <Experience />
      <Stack />
      <About />
      <Contact />
    </>
  );
}

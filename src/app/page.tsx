import { Hero } from "@/components/hero";
import { About, Experience, Services, Stack, Work } from "@/components/sections";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Work />
      <Services />
      <Experience />
      <Stack />
      <About />
      <Contact />
    </>
  );
}

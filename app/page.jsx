import About from "@/components/About";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import { HeroHighlight } from "@/components/ui/hero-highlight";

export default function Home() {
  return (
    <main className="relative">
      <HeroHighlight>
          <Hero />
          <Services />
          <About />
      </HeroHighlight>
    </main>
  );
}

import About from "@/components/About";
import Faq from "@/components/Faq";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import { HeroHighlight } from "@/components/ui/hero-highlight";
import { social } from "@/constants/Social";

export default function Home() {
  return (
    <main className="relative">
      <HeroHighlight>
        <div className="glassmorphism p-2 flex flex-col gap-4 fixed top-56 right-0 mt">
          {social.map((item, index) => (
            <a key={item.name} href={item.link}>
              <img className="lg:w-10 w-5" src={item.icon} alt="" />
            </a>
          ))}
        </div>
        <Hero />
        <Services />
        <About />
        <Faq />
      </HeroHighlight>
    </main>
  );
}

import { Button, IconWrapper } from "./ui/button";
import { Container } from "./ui/container";
import { Hero, HeroSubtile, HeroTitle } from "./ui/hero";
import Image from "next/image";
import { ChevronIcon } from "./ui/icons/chevron";
import { HeroImage } from "./ui/hero-image";
export default function Home() {
  return (
    <main className=" min-h-screen overflow-hidden bg-page-gradient pt-[var(--header-height)] ">
      <Container className="py-[64px] ">
        <Hero>
          <Button
            variant="secondary"
            size="sm"
            className="translate-y-[-1rem] animate-fade-in opacity-0"
            href="#"
          >
            Linear Mobile v0.1
            <IconWrapper>
              <ChevronIcon />
            </IconWrapper>
          </Button>
          <HeroTitle className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
            Linear is a better way <br className="hidden md:block" />
            to build products
          </HeroTitle>
          <HeroSubtile className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
            Meet the new standard for modern software development.
            <br className="hidden md:block" />
            Streamline issues, sprints, and product roadmaps.
          </HeroSubtile>
          <Button
            variant="primary"
            size="lg"
            href="#"
            className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]"
          >
            Get started
            <IconWrapper>
              <ChevronIcon />
            </IconWrapper>
          </Button>
          <HeroImage />
        </Hero>
      </Container>
    </main>
  );
}

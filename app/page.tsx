import { Button, IconWrapper } from "./ui/button";
import { Container } from "./ui/container";
import { Hero, HeroSubtile, HeroTitle } from "./ui/hero";
import Image from "next/image";
import { ChevronIcon } from "./ui/icons/chevron";
export default function Home() {
  return (
    <main className="min-h-screen bg-page-gradient pt-[var(--header-height)]">
      <Container className="py-[64px]">
        <Hero>
          <Button variant="secondary" size="sm">
            Linear Mobile v0.
            <IconWrapper>
              <ChevronIcon />
            </IconWrapper>
          </Button>
          <HeroTitle>
            Linear is a better way <br className="hidden md:block" />
            to build products
          </HeroTitle>
          <HeroSubtile>
            Meet the new standard for modern software development.
            <br className="hidden md:block" />
            Streamline issues, sprints, and product roadmaps.
          </HeroSubtile>
          <Button variant="primary" size="lg">
            Get started
            <IconWrapper>
              <ChevronIcon />
            </IconWrapper>
          </Button>
          <section className="mt-[72px]">
            {" "}
            <Image
              src="/hero.webp"
              alt="Hero image"
              width={1200}
              height={600}
            />
          </section>
        </Hero>
      </Container>
    </main>
  );
}

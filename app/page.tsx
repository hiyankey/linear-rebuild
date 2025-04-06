import Container from '@/ui/container';
import Header from '@/ui/header';
import { Hero, HeroSubtitle, HeroTitle } from '@/ui/hero';

export default function Home() {
  return (
    <div>
      <Header />
      <main className="pt-[var(--header-height)]">
        <Container>
          <Hero>
            <HeroTitle>
              Linear is a better way
              <br />
              to build products
            </HeroTitle>
            <HeroSubtitle>
              Meet the new standard for modern software development.
              <br />
              Streamline issues, sprints, and product roadmaps.
            </HeroSubtitle>
          </Hero>
        </Container>
      </main>
      <footer>
        <Container>footer</Container>
      </footer>
    </div>
  );
}

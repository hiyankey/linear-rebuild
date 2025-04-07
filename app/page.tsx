import Container from '@/ui/container';
import Header from '@/ui/header';
import { Hero, HeroSubtitle, HeroTitle } from '@/ui/hero';
import Image from 'next/image';
import { Button } from './ui/button';
import Footer from './ui/footer';

export default function Home() {
  return (
    <div className="grid min-h-dvh w-screen grid-rows-[auto_1fr_auto]">
      <Header />
      <main className=" pt-[var(--header-height)]">
        <Container className="flex flex-col items-center justify-between pt-[96px]">
          <Hero className="flex flex-col items-center">
            <HeroTitle className="mb-6">
              Linear is a better way
              <br />
              to build products
            </HeroTitle>
            <HeroSubtitle className="mb-8 text-white/70">
              Meet the new standard for modern software development.
              <br />
              Streamline issues, sprints, and product roadmaps.
            </HeroSubtitle>

            <Button href="#" size={'lg'} className="mb-[64px]">
              Get started
            </Button>

            <div>
              <Image
                src={'/hero.png'}
                width={1000}
                height={700}
                alt="Hero image"
              />
            </div>
          </Hero>
        </Container>
      </main>
      <Footer />
    </div>
  );
}

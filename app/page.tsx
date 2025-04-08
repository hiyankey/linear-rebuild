import { Header } from '@/ui/header';
import Image from 'next/image';
import { Button } from './ui/button';
import Container from './ui/container';
import Footer from './ui/footer';
import { Hero, HeroSubtitle, HeroTitle } from './ui/hero';

export default function Home() {
  return (
    <div className="grid min-h-dvh grid-rows-[auto_1fr-auto]">
      <Header />
      <Hero className="mt-[var(--header-height)]">
        <Container className="flex flex-col items-center pt-[96px]">
          <HeroTitle className="mb-[24px]">
            Linear is a better way{' '}
            <br className="hidden text-balance md:block" /> to build products
          </HeroTitle>
          <HeroSubtitle className="mb-[32px] text-white/70">
            Meet the new standard for modern software development.
            <br className="hidden text-balance md:block" /> Streamline issues,
            sprints, and product roadmaps.
          </HeroSubtitle>
          <Button href="#" className="mb-[64px]">
            Get started
          </Button>
          <Image src={'/hero.png'} width={1000} height={700} alt="Hero image" />
        </Container>
      </Hero>
      <Footer />
    </div>
  );
}

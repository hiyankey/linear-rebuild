import Image from 'next/image'
import Container from './components/container'
import { Button } from './components/button'
import Chevron from './components/icons/chevron'

const HeroTitle = ({ children }: { children: React.ReactNode }) => (
  <h1 className='text-xl md:text-5xl text-center text-balance my-6'>
    {children}
  </h1>
)

const HeroSubTitle = ({ children }: { children: React.ReactNode }) => (
  <p className='md:text-lg text-md text-center text-balance mb-12'>
    {children}
  </p>
)

export default function Home() {
  return (
    <main className=' pt-header-height '>
      <Container className=' pt-[64px] items-center flex flex-col'>
        <Button className='w-fit' href='#' variant='secondary' size='sm'>
          Linear Mobile v0.1 <Chevron className='ml-[4px] -mr-[6px]' />
        </Button>
        <HeroTitle>Linear is a better way to build products</HeroTitle>
        <HeroSubTitle>
          Meet the new standard for modern software development.
          <br />
          Streamline issues, sprints, and product roadmaps.
        </HeroSubTitle>
        <Button className='w-fit' href='#' variant='primary' size='lg'>
          Get started
        </Button>
        <Image
          src='/hero.webp'
          alt='Hero image'
          width={1370}
          height={776}
          className='w-full h-auto'
        />
      </Container>
    </main>
  )
}

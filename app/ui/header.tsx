import Container from '@/ui/container';
import { Logo } from '@/ui/icons/logo';
import Link from 'next/link';
import { Button } from './button';
import { Hamburger } from './icons/hamburger';

const navLinks = [
  { title: 'Features', href: '#' },
  { title: 'Method', href: '#' },
  { title: 'Customer', href: '#' },
  { title: 'Changelog', href: '#' },
  { title: 'Integrations', href: '#' },
  { title: 'Pricing', href: '#' },
  { title: 'Company', href: '#' },
];

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full border-white/8 border-b">
      <Container className="flex h-[var(--header-height)] items-center">
        <Link className="flex items-center" href={'/'}>
          <Logo className="mr-4 size-[18px]" /> Linear
        </Link>
        <nav className="hidden h-full md:block">
          <ul className="flex h-full items-center [&_a]:ml-6 [&_a]:text-sm md:[&_li]:nth-[3]:hidden md:[&_li]:nth-[4]:hidden md:[&_li]:nth-[5]:hidden lg:[&_li]:nth-[3]:block lg:[&_li]:nth-[4]:block lg:[&_li]:nth-[5]:block">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link href={link.href}>{link.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="ml-auto flex h-full items-center">
          <Button href={'#'} className="ml-3 text-sm">
            Log in
          </Button>
          <Button href={'#'} className="ml-3 text-sm" variant={'secondary'}>
            Sign up
          </Button>
        </div>
        <div className="ml-6">
          <span className="sr-only">Menu </span>
          <Hamburger />
        </div>
      </Container>
    </header>
  );
}

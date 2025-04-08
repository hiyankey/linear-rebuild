import { cx } from '@/lib/utils';
import Link from 'next/link';
import { Button } from './button';
import Container from './container';
import { Hamburger } from './icons/hamburger';
import { Logo } from './icons/logo';

const navLinks = [
  { title: 'Features', href: '#' },
  { title: 'Method', href: '#' },
  { title: 'Customer', href: '#' },
  { title: 'Changelog', href: '#' },
  { title: 'Integrations', href: '#' },
  { title: 'Pricing', href: '#' },
  { title: 'Company', href: '#' },
];
export function Header() {
  return (
    <header className="fixed top-0 left-0 h-[var(--header-height)] w-full border-white/8 border-b bg-transparent backdrop-blur-sm">
      <Container className="flex h-full items-center">
        <Link href={'/'} className="flex items-center">
          <Logo className="mr-3 size-4" /> Linear
        </Link>
        <nav className="hidden h-full md:block ">
          <ul
            className={cx(
              'flex h-full items-center',
              'md:[&_li]:nth-[3]:hidden md:[&_li]:nth-[4]:hidden md:[&_li]:nth-[5]:hidden lg:[&_li]:nth-[3]:block lg:[&_li]:nth-[4]:block lg:[&_li]:nth-[5]:block',
              '[&_a:hover]:text-white/70 [&_a]:ml-6 [&_a]:text-sm [&_a]:transition-colors'
            )}
          >
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link href={link.href}>{link.title}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="ml-auto space-x-3">
          <Button href="#" size={'sm'} variant={'secondary'}>
            Log in
          </Button>
          <Button href="#" size={'sm'}>
            sign up
          </Button>
        </div>
        <div className="ml-6 md:hidden">
          <Hamburger />
        </div>
      </Container>
    </header>
  );
}

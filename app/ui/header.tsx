import { cx } from '@/lib/utils';
import Link from 'next/link';
import { Button } from './button';
import Container from './container';
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
        <nav className="h-full">
          <ul className={cx('flex h-full items-center')}>
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
      </Container>
    </header>
  );
}

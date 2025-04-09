'use client';
import { cx } from '@/lib/utils';
import Link from 'next/link';
import { useState } from 'react';
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
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 h-[var(--header-height)] w-full border-white/8 border-b bg-transparent backdrop-blur-sm">
      <Container className="flex h-full md:items-center">
        <Link href={'/'} className="flex items-center">
          <Logo className="mr-3 size-4" /> Linear
        </Link>
        <div
          className={cx(
            'transition-[visibility] md:visible',
            menuIsOpen ? 'visible' : 'invisible delay-500'
          )}
        >
          <nav
            className={cx(
              'fixed top-[var(--header-height)] left-0 h-[calc(100vh-var(--header-height))] w-full bg-background transition-opacity duration-500 ease-in md:relative md:top-0 md:block md:h-full md:w-auto md:bg-transparent md:opacity-100',
              menuIsOpen ? 'opacity-100' : 'opacity-0'
            )}
          >
            <ul
              className={cx(
                'flex h-full flex-col md:flex-row md:items-center',
                '[&_li]:h-auto md:[&_li]:nth-[3]:hidden md:[&_li]:nth-[4]:hidden md:[&_li]:nth-[5]:hidden lg:[&_li]:nth-[3]:block lg:[&_li]:nth-[4]:block lg:[&_li]:nth-[5]:block',
                'px-3.5 text-lg [&_a:hover]:text-white/70 [&_a]:flex [&_a]:h-[var(--header-height)] [&_a]:items-center [&_a]:transition-colors md:[&_a]:ml-6 md:[&_a]:inline md:[&_a]:h-auto md:[&_a]:px-0 md:[&_a]:text-sm'
              )}
            >
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href}>{link.title}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="ml-auto flex items-center space-x-3">
          <Button href="#" size={'sm'} variant={'secondary'}>
            Log in
          </Button>
          <Button href="#" size={'sm'}>
            sign up
          </Button>
        </div>
        <button
          type="button"
          className="ml-6 md:hidden"
          onClick={() => setMenuIsOpen((prev) => !prev)}
        >
          <Hamburger />
        </button>
      </Container>
    </header>
  );
}

'use client';
import Container from '@/ui/container';
import { Logo } from '@/ui/icons/logo';
import { cx } from 'class-variance-authority';
import Link from 'next/link';
import { useState } from 'react';
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
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 w-full border-white/8 border-b bg-transparent backdrop-blur-md">
      <Container className="flex h-[var(--header-height)] items-center">
        <Link className="flex items-center" href={'/'}>
          <Logo className="mr-4 size-[18px]" /> Linear
        </Link>
        <div
          className={cx(
            'transition-[visibility] md:visible',
            menuIsOpen ? 'visible' : 'invisible delay-500'
          )}
        >
          <nav
            className={cx(
              'fixed top-[var(--header-height)] left-0 h-[calc(100vh-var(--header-height))] w-full overflow-auto bg-background transition-opacity duration-500 ease-in md:relative md:top-0 md:block md:h-full md:w-auto md:bg-transparent md:opacity-100 md:transition-none',
              menuIsOpen ? 'opacity-100' : 'opacity-0'
            )}
          >
            <ul
              className={cx(
                'flex h-full flex-col md:flex-row md:items-center',
                ' md:[&_li]:ml-6 md:[&_li]:nth-[3]:hidden md:[&_li]:nth-[4]:hidden md:[&_li]:nth-[5]:hidden lg:[&_li]:nth-[3]:block lg:[&_li]:nth-[4]:block lg:[&_li]:nth-[5]:block',
                'ease-in [&_a:hover]:text-white/60 [&_a]:flex [&_a]:h-[var(--header-height)] [&_a]:w-full [&_a]:translate-y-8 [&_a]:items-center [&_a]:pl-3 [&_a]:text-md [&_a]:transition-[color,transform] [&_a]:duration-300 md:[&_a]:h-auto md:[&_a]:w-auto md:[&_a]:translate-y-0 md:[&_a]:pl-0 md:[&_a]:text-sm md:[&_a]:transition-colors',
                menuIsOpen && '[&_a]:translate-y-0'
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

        <div className="ml-auto flex h-full items-center">
          <Button href={'#'} className="ml-3 text-sm" variant={'secondary'}>
            Log in
          </Button>
          <Button href={'#'} className="ml-3 text-sm">
            Sign up
          </Button>
        </div>
        <button
          className="ml-6 md:hidden"
          type="button"
          onClick={() => setMenuIsOpen((prev) => !prev)}
        >
          <span className="sr-only">Toggle menu </span>
          <Hamburger />
        </button>
      </Container>
    </header>
  );
}

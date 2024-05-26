'use client'
import Link from 'next/link'
import Container from '../components/container'
import Logo from './icons/logo'
import { Button } from './button'
import Hamburger from './icons/hamburger'
import { useState } from 'react'
import { cx } from '../lib/cx'

export default function Header() {
  const [hamburgerIsOpen, setHamburgerIsOpen] = useState(false)
  return (
    <header className='border-b border-white/8 bg-transparent backdrop-blur-sm fixed top-0 left-0 w-full text-md font-medium'>
      <Container className=' h-header-height flex  items-center '>
        <Link href='/' className='flex items-center mr-4'>
          <Logo className='mr-2' /> <span>Linear</span>
        </Link>
        <div
          className={cx(
            'transition-[visibility] md:visible',
            hamburgerIsOpen ? 'visible' : 'invisible delay-500'
          )}
        >
          <nav
            className={cx(
              'h-[calc(100vh-var(--header-height))] md:block fixed md:relative top-header-height md:top-0 left-0 w-full overflow-auto bg-main md:bg-transparent md:overflow-hidden transition-opacity duration-500 md:opacity-100',
              hamburgerIsOpen ? 'opacity-100' : 'opacity-0'
            )}
          >
            <ul
              className={cx(
                'flex flex-col md:flex-row md:items-center h-full [&_a]:text-lg  md:[&_a]:text-sm mx-5  md:[&_li]:ml-8 hover:[&_a]:text-white/[49%] [&_a]:transition-[colors,transform] [&_li]:h-header-height md:[&_li]:h-full [&_li]:flex   [&_li]:items-center [&_li]:border-b [&_li]:border-white/8 md:[&_li]:border-none  [&_a]:translate-y-8  md:[&_a]:translate-y-0 [&_a]:duration-300 ease-in',
                hamburgerIsOpen && ' [&_a]:translate-y-0'
              )}
            >
              <li>
                <Link href='#'>Features</Link>
              </li>
              <li>
                <Link href='#'>Method</Link>
              </li>
              <li>
                <Link href='#'>Customers</Link>
              </li>
              <li className='md:hidden lg:block'>
                <Link href='#'>Changelog</Link>
              </li>
              <li className='md:hidden lg:block'>
                <Link href='#'>Pricing</Link>
              </li>
              <li className='md:hidden lg:block'>
                <Link href='#'>Company</Link>
              </li>
              <li>
                <Link href='#'>Contact</Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className='ml-auto flex items-center h-full'>
          <Link className='text-sm mr-6 text-nowrap' href='#'>
            Log in
          </Link>
          <Button href='#' variant='primary' size='md'>
            Sign up
          </Button>
        </div>
        <button
          className='ml-6 block md:hidden'
          onClick={() => setHamburgerIsOpen((open) => !open)}
        >
          <span className='sr-only'>Toggle Menu</span>
          <Hamburger />
        </button>
      </Container>
    </header>
  )
}

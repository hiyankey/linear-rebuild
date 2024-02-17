"use client";
import Link from "next/link";
import { Container } from "./container";
import { Logo } from "./icons/logo";
import { Button } from "./button";
import { HamburgerIcon } from "./icons/hamburger";
import { useEffect, useState } from "react";
import classNames from "classnames";

export const Header = () => {
  const [hamburgerMenuIsOpen, setHamburgerMenuIsOpen] = useState(false);

  useEffect(() => {
    document
      .querySelector("html")
      ?.classList.toggle("overflow-hidden", hamburgerMenuIsOpen);
  }, [hamburgerMenuIsOpen]);

  useEffect(() => {
    const closeHambugerMenu = () => setHamburgerMenuIsOpen(false);

    window.addEventListener("orientationchange", closeHambugerMenu);
    window.addEventListener("resize", closeHambugerMenu);

    return () => {
      window.removeEventListener("orientationchange", closeHambugerMenu);
      window.removeEventListener("resize", closeHambugerMenu);
    };
  }, []);
  return (
    <header className="fixed left-0 top-0 h-header-height w-full border-b border-transparent-white bg-transparent backdrop-blur-[12px]">
      <Container className="relative flex h-full items-center text-sm">
        <Link href="/" className="flex items-center">
          <Logo className="mr-3 h-4 w-4" />
          <span className="font-regular text-lg">Linear</span>
        </Link>
        <nav
          className={classNames(
            " fixed left-0 top-header-height h-[calc(100vh_-_var(--header-height))] w-full overflow-auto bg-background pt-[16px] md:relative md:top-0 md:block md:h-full md:w-auto md:bg-transparent md:pt-0",
            hamburgerMenuIsOpen ? "" : "hidden",
          )}
        >
          <ul
            className={classNames(
              "flex h-full flex-col px-[20px]  transition-colors md:flex-row md:items-center ",
              "[&_li]:h-header-height  md:[&_li]:ml-6  md:[&_li]:h-full ",
              "[&_a:hover]:text-grey [&_a]:flex [&_a]:h-full [&_a]:w-full [&_a]:items-center [&_a]:text-xl  md:[&_a]:w-auto md:[&_a]:text-sm",
            )}
          >
            <li>
              <Link href="#">Features</Link>
            </li>
            <li>
              <Link href="#">Method</Link>
            </li>
            <li className="md:hidden lg:block">
              <Link href="#">Features</Link>
            </li>
            <li className="md:hidden lg:block">
              <Link href="#">Customers</Link>
            </li>
            <li className="md:hidden lg:block">
              <Link href="#">Changelog</Link>
            </li>
            <li>
              <Link href="#">Pricing</Link>
            </li>
            <li>
              <Link href="#">Contact</Link>
            </li>
          </ul>
        </nav>
        <div className="hidden h-full items-center md:ml-auto  md:flex">
          <Link href="#" className="mr-6">
            Log in
          </Link>
          <Button>Sign up</Button>
        </div>
        <button
          className="ml-auto md:hidden"
          onClick={() => setHamburgerMenuIsOpen((prev) => !prev)}
        >
          <span className="sr-only">Toggle Menu</span>
          <HamburgerIcon />
        </button>
      </Container>
    </header>
  );
};

"use client";
import Link from "next/link";
import { Container } from "./container";
import { Logo } from "./icons/logo";
import { Button } from "./button";
import { HamburgerIcon } from "./icons/hamburger";
import { useState } from "react";

export function Header() {
	const [menuIsOpen, setMenuIsOpen] = useState(false);
	return (
		<header className="h-header-height fixed top-0 left-0 w-full border-white-a08 border-b backdrop-blur-[12px]">
			<Container className="flex h-full items-center">
				<Link href={"/"} className="flex items-center">
					<Logo className="mr-2 inline-flex" /> Linear
				</Link>
				<div
					className={` transition-[visibility] md:visible ${menuIsOpen ? "visible" : "delay-300 invisible"}`}
				>
					<nav
						className={`h-[calc(100vh_-_var(--header-height))] md:h-auto md:block fixed md:relative top-header-height md:top-0 left-0 w-full md:w-auto bg-page-main md:bg-transparent overflow-auto md:opacity-100 transition-opacity duration-500 ${menuIsOpen ? "opacity-100" : "opacity-0"}`}
					>
						<ul
							className={`flex flex-col md:flex-row h-full ease-in md:items-center [&_a]:text-md md:[&_a]:text-sm  [&_li]:border-b  [&_li]:border-grey-dark md:[&_li]:border-none md:[&_li]:ml-6 px-6 md:px-0 [&_a:hover]:text-grey  [&_a]:transition-[colors,transform] [&_a]:translate-y-8 md:[&_a]:translate-y-0 [&_a]:h-header-height [&_a]:w-full [&_a]:flex [&_a]:items-center [&_a]:duration-300 ${menuIsOpen && "[&_a]:translate-y-0"}`}
						>
							<li>
								<Link href={"#"}>Features</Link>
							</li>
							<li>
								<Link href={"#"}>Method</Link>
							</li>
							<li className="md:hidden lg:block">
								<Link href={"#"}>Cstomers</Link>
							</li>
							<li className="md:hidden lg:block">
								<Link href={"#"}>Changelog</Link>
							</li>
							<li className="md:hidden lg:block">
								<Link href={"#"}>Integrations</Link>
							</li>
							<li>
								<Link href={"#"}>Pricing</Link>
							</li>
							<li>
								<Link href={"#"}>Company</Link>
							</li>
						</ul>
					</nav>
				</div>

				<div className="ml-auto flex h-full items-center">
					<Button className="text-sm mr-6" href={"#"} variant={"secondary"}>
						Log in
					</Button>
					<Button className="text-sm" href={"#"}>
						Sign up
					</Button>
				</div>
				<button
					type="button"
					onClick={() => setMenuIsOpen((prev) => !prev)}
					className="ml-6 md:hidden"
				>
					<span className="sr-only">Toggle menu</span>
					<HamburgerIcon />
				</button>
			</Container>
		</header>
	);
}

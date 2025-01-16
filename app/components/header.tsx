import Link from "next/link";
import { Container } from "./container";
import { Logo } from "./icons/logo";
import { Button } from "./button";

export function Header() {
	return (
		<header className="h-[var(--header-height)] fixed top-0 left-0 w-full border-white-a08 border-b backdrop-blur-[12px]">
			<Container className="flex h-full items-center">
				<Link href={"/"} className="flex items-center">
					<Logo className="mr-2 inline-flex" /> Linear
				</Link>
				<nav className="h-full">
					<ul className="flex h-full items-center [&_a]:text-sm [&_li]:ml-6 [&_a:hover]:text-grey">
						<li>
							<Link href={"#"}>Features</Link>
						</li>
						<li>
							<Link href={"#"}>Method</Link>
						</li>
						<li>
							<Link href={"#"}>Cstomers</Link>
						</li>
						<li>
							<Link href={"#"}>Changelog</Link>
						</li>
						<li>
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
				<div className="ml-auto flex h-full items-center">
					<Button className="text-sm mr-6" href={"#"} variant={"secondary"}>
						Log in
					</Button>
					<Button className="text-sm" href={"#"}>
						Sign up
					</Button>
				</div>
			</Container>
		</header>
	);
}

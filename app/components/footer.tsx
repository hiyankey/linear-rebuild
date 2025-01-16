import Link from "next/link";
import { Container } from "./container";
import { Logo } from "./icons/logo";
import { XIcon } from "./icons/x";
import { SlackIcon } from "./icons/slack";
import { GithubIcon } from "./icons/github";

const footerLinks = [
	{
		title: "Product",
		links: [
			{ title: "Features", href: "#" },
			{ title: "Integrations", href: "#" },
			{ title: "Pricing", href: "#" },
			{ title: "Changelog", href: "#" },
			{ title: "Docs", href: "#" },
			{ title: "Linear Method", href: "#" },
			{ title: "Download", href: "#" },
		],
	},
	{
		title: "Company",
		links: [
			{ title: "About us", href: "#" },
			{ title: "Blog", href: "#" },
			{ title: "Careers", href: "#" },
			{ title: "Customers", href: "#" },
			{ title: "Brand", href: "#" },
		],
	},
	{
		title: "Resources",
		links: [
			{ title: "Community", href: "#" },
			{ title: "Contact", href: "#" },
			{ title: "DPA", href: "#" },
			{ title: "Terms of service", href: "#" },
		],
	},
	{
		title: "Developers",
		links: [
			{ title: "API", href: "#" },
			{ title: "Status", href: "#" },
			{ title: "GitHub", href: "#" },
		],
	},
];

export function Footer() {
	return (
		<footer className="mt-12 border-t border-white-a08 py-[5.6rem] text-sm">
			<Container className="flex justify-between  flex-col lg:flex-row">
				<div>
					<div className="flex flex-row lg:flex-col justify-between  h-full">
						<div className="flex items-center">
							<Logo className="w-4 h-4 mr-4" /> Linear
						</div>
						<div className="flex space-x-3 mt-auto text-grey">
							<XIcon />
							<GithubIcon />
							<SlackIcon />
						</div>
					</div>
				</div>

				<div className="flex flex-wrap">
					{footerLinks.map((columnn) => (
						<div
							key={columnn.title}
							className="min-w-[50%] mt-10  lg:mt-0 lg:min-w-[18rem]"
						>
							<h3 className="font-medium mb-3">{columnn.title}</h3>
							<ul>
								{columnn.links.map((link) => (
									<li key={link.title} className="text-grey [&_a]:last:mb-0">
										<Link
											href={link.href}
											className="mb-3 block text-grey transition-colors hover:text-white-a08"
										>
											{link.title}
										</Link>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</Container>
		</footer>
	);
}

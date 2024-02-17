import Link from "next/link";
import { Container } from "./container";
import { Logo } from "./icons/logo";
import { TwitterIcon } from "./icons/twitter";
import { GitHubIcon } from "./icons/github";
import { SlackIcon } from "./icons/slack";
import { YoutubeIcon } from "./icons/youtube";

const footerLinks = [
  {
    title: "Product",
    links: [
      {
        title: "Features",
        href: "#",
      },
      {
        title: "Integration",
        href: "#",
      },
      {
        title: "Pricing",
        href: "#",
      },
      {
        title: "Changelog",
        href: "#",
      },
      {
        title: "Docs",
        href: "#",
      },
      {
        title: "Linear Method",
        href: "#",
      },
      {
        title: "Download",
        href: "#",
      },
    ],
  },
  {
    title: "Company",
    links: [
      {
        title: "About us",
        href: "#",
      },
      {
        title: "Blog",
        href: "#",
      },
      {
        title: "Careers",
        href: "#",
      },
      {
        title: "Customers",
        href: "#",
      },
      {
        title: "Brand",
        href: "#",
      },
    ],
  },
  {
    title: "Resources",
    links: [
      {
        title: "Startup Program",
        href: "#",
      },
      {
        title: "Community",
        href: "#",
      },
      {
        title: "Contact",
        href: "#",
      },
      {
        title: "DPA",
        href: "#",
      },
      {
        title: "Privacy Policy",
        href: "#",
      },
      {
        title: "Terms of service",
        href: "#",
      },
      {
        title: "Report a vulnerability",
        href: "#",
      },
    ],
  },
  {
    title: "Developers",
    links: [
      {
        title: "API",
        href: "#",
      },
      {
        title: "Status",
        href: "#",
      },
      {
        title: "GitHub",
        href: "#",
      },
      {
        title: "README",
        href: "#",
      },
    ],
  },
];

export const Footer = () => {
  return (
    <footer className="border-t border-transparent-white py-[5.6rem]">
      <Container className="flex flex-col justify-between gap-[40px] text-sm lg:flex-row">
        <div className="flex flex-row lg:flex-col lg:justify-between">
          <div className="flex items-center">
            <Logo className="mr-4 h-4 w-4" />
            <span className=" text-grey">Linear - Designed Worldwide</span>
          </div>
          <div className=" ml-auto flex space-x-2 text-grey lg:ml-0 lg:space-x-4">
            <TwitterIcon />
            <GitHubIcon />
            <SlackIcon />
            <YoutubeIcon />
          </div>
        </div>
        <div className="grid grid-cols-2 lg:flex ">
          {footerLinks.map((column) => (
            <div key={column.title} className="min-w-[18rem]">
              <h3 className="mb-3 ">{column.title}</h3>
              <ul>
                {column.links.map((link) => (
                  <li key={link.title}>
                    <Link
                      className="mb-3 block text-grey transition-colors hover:text-white"
                      href={link.href}
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
};

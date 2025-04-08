import Link from 'next/link';
import Container from './container';
import { Logo } from './icons/logo';

const footerLinks = [
  {
    title: 'Product',
    links: [
      { title: 'Features', href: '#' },
      { title: 'Integrations', href: '#' },
      { title: 'Pricing', href: '#' },
      { title: 'Changelog', href: '#' },
      { title: 'Docs', href: '#' },
      { title: 'Linear Method', href: '#' },
      { title: 'Download', href: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { title: 'About us', href: '#' },
      { title: 'Blog', href: '#' },
      { title: 'Careers', href: '#' },
      { title: 'Customers', href: '#' },
      { title: 'Brand', href: '#' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { title: 'Community', href: '#' },
      { title: 'Contact', href: '#' },
      { title: 'DPA', href: '#' },
      { title: 'Terms of service', href: '#' },
    ],
  },
  {
    title: 'Developers',
    links: [
      { title: 'API', href: '#' },
      { title: 'Status', href: '#' },
      { title: 'GitHub', href: '#' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="mt-12 border-white/8 border-t">
      <Container className="flex flex-col justify-between py-12 md:flex-row">
        <div className="flex h-full items-center text-sm text-white/70">
          <Logo className="mr-3 size-4" /> Linear - Designed worldwide
        </div>
        <div className="mt-6 flex flex-wrap text-sm md:mt-0">
          {footerLinks.map((column, index) => (
            <div
              key={index}
              className="mb-6 min-w-[50%] md:mb-0 md:min-w-[160px]"
            >
              <h3 className="mb-3 font-medium">{column.title}</h3>
              <ul className="text-white/70">
                {column.links.map((link, index) => (
                  <li key={index} className="mb-3 last:mb-0">
                    <Link href={link.href} className="">
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

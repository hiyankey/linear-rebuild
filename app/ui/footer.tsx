import Container from '@/ui/container';
import { Logo } from '@/ui/icons/logo';
import Link from 'next/link';

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
    <footer className="border-white/8 border-t py-[56px] text-sm">
      <Container>
        <div>
          <Logo />
        </div>
        <div className="flex">
          {footerLinks.map((column, index) => (
            <div key={index}>
              <h3>{column.title}</h3>
              <div>
                {column.links.map((link, index) => (
                  <Link key={index} href={link.href}>
                    {link.title}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </footer>
  );
}

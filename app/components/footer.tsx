import Link from 'next/link'
import Container from '../components/container'
import Logo from './icons/logo'
import TwitterIcon from './icons/twitter'
import GithubIcon from './icons/github'
import SlackIcon from './icons/slack'

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
]
export default function Footer() {
  return (
    <footer className='mt-auto border-t border-white/8 py-[5.6rem]'>
      <Container className='flex justify-between flex-col lg:flex-row'>
        <div>
          <div className='flex flex-row lg:flex-col h-full w-full justify-between'>
            <div className='flex'>
              <Logo className=' fill-accent mr-4' /> <span>Linear</span>
            </div>

            <div className='mt-auto space-x-2 text-white/40 flex'>
              <TwitterIcon />
              <GithubIcon />
              <SlackIcon />
            </div>
          </div>
        </div>
        <div className='flex flex-wrap'>
          {footerLinks.map((column) => {
            return (
              <div
                key={column.title}
                className='min-w-[50%] lg:min-w-[18rem] mt-10 lg:mt-0'
              >
                <h3 className='font-medium mb-3'>{column.title}</h3>
                <ul className='last:[&_li]:mb-0'>
                  {column.links.map((link) => (
                    <li key={link.title} className=' mb-3 '>
                      <Link href={link.href} className='block'>
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </Container>
    </footer>
  )
}

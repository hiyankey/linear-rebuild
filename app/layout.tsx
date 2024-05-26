import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import Header from './components/header'
import Footer from './components/footer'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
})

export const metadata: Metadata = {
  title: 'Linear Rebuild',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' className={`${geistSans.variable}`}>
      <body className='min-h-screen text-regular flex flex-col'>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}

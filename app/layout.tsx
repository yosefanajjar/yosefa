import type { Metadata } from 'next'
import { Inter, Outfit } from 'next/font/google'
import './globals.css'
import { Header } from './components/Header'
import { Footer } from './components/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit', })

export const metadata: Metadata = {
  metadataBase: new URL('https://yosefa.dev'),
  title: 'Yosef Alnajjar | Full Stack Engineer',
  description: 'Personal website and blog where I share content and life updates. Join me in my journey as a curious software engineer as I share knowledge while keeping it fun',
  openGraph: {
    images: '/yosefa.webp'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${outfit.variable} bg-white-light`}>
        <Header />
        {children}
        <div className="mt-24">
          <Footer />
        </div>
      </body>
    </html>
  )
}

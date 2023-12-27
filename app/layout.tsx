import type { Metadata } from 'next'
import { Inter, Outfit } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"
import './globals.css'
import { Header } from '@/app/components/Header'
import { Footer } from '@/app/components/Footer'
import { ThemeProvider } from '@/app/components/ThemeProvider'


const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit', })

export const metadata: Metadata = {
  metadataBase: new URL('https://yosefa.dev'),
  title: 'Yosef Alnajjar | Full Stack Engineer',
  description: 'Personal website and blog where I share content and life updates. Join me in my journey as a curious software engineer as I share knowledge while keeping things fun',
  openGraph: {
    images: '/meta-image.webp'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${outfit.variable} bg-white-light dark:bg-black-dark`}>
        <ThemeProvider attribute="class">
          <Header />
          {children}
          <div className="mt-24">
            <Footer />
          </div>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}

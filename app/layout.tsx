import Footer from '@/components/Footer'
import Header from '@/components/header/Header'
import { cn } from '@/lib/ultis'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'

const mont = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DriveOn',
  description: 'Teste front end para agencia tupiniquim',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br" className="!scroll-smooth">
      <body className={cn(mont.className, 'font-sans antialiased')}>
        <main className="relative flex flex-col min-h-dvh overflow-hidden">
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  )
}

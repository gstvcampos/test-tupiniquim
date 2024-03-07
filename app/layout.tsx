import Header from '@/components/Header'
import { cn } from '@/lib/ultis'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Teste Tupiniquim',
  description: 'Teste front end para agencia tupiniquim',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br" className="!scroll-smooth">
      <body className={cn(inter.className, 'font-sans antialiased')}>
        <main className="relative flex flex-col min-h-dvh overflow-hidden">
          <Header />
          {children}
        </main>
      </body>
    </html>
  )
}

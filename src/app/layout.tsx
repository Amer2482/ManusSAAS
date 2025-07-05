import { Inter } from 'next/font/google'
import { Providers } from '@/components/Providers'
import './globals.css'
import { getSEOTags } from '@/lib/seo/config'

const inter = Inter({ subsets: ['latin'] })

export const metadata = getSEOTags()

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
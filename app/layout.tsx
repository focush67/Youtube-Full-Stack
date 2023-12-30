import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/shared/Navigation/Navigation'

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['100','300','400','500','700','900'], 
})

export const metadata: Metadata = {
  title: 'Youtube',
  description: 'Showify',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <div className='pt-16'>
          {children}
        </div>
      </body>
    </html>
  )
}

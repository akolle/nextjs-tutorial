import Navbar from '@/components/Navbar'
import './globals.css'
import { Inter, Inconsolata, Roboto } from 'next/font/google'

const inter = Inter({ subsets: ['cyrillic'] })
const incon = Inconsolata({ subsets: ['latin'] })
const roboto = Roboto({ subsets: ['latin'], weight: ['400'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar />
        <main className="max-w-3xl mx-auto py-4">{children}</main>
      </body>
    </html>
  )
}

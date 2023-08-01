import { Header } from '@/components/global/header'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Go Team Streamers',
  description: 'A melhor comunidade para pequenos streamers!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <Header/>
        {children}
      </body>
    </html>
  )
}

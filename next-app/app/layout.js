import './globals.css'
import { Rubik } from 'next/font/google'

const inter = Rubik({ subsets: ['latin'] })

export const metadata = {
  title: 'ONESTÀ',
  description: 'Ethics and Compliance',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

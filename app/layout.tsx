import Navbar from '@/components/Navbar/navbar'
import './globals.css'
import NavbarMobile from '@/components/Navbar Mobile/navbarMobile'

export const metadata = {
  title: 'maximetschopp',
  description: 'Maxime Tschopp - Student in Zurich, Switzerland',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <NavbarMobile />
        {children}
      </body>
    </html>
  )
}

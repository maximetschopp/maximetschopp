import './globals.css'

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
      <body>{children}</body>
    </html>
  )
}

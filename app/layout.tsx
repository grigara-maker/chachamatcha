import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Cha Cha Matcha',
  description: 'Prémiová ceremoniální matcha servírovaná na pop-up lokacích po celém městě.',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="cs" className="scroll-smooth">
      <head>
        <link rel="icon" href="/fav-1771333788.ico" sizes="32x32" />
        <link rel="shortcut icon" href="/fav-1771333788.ico" />
        <link rel="icon" href="/icon.png?v=2" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-icon.png?v=2" sizes="180x180" />
      </head>
      <body className="font-sans antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}

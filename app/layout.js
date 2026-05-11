import './globals.css'

export const metadata = {
  title: 'Techo Labs — Architecting the Digital Future',
  description: 'Techo Labs delivers world-class Web Development, Digital Marketing, and Market Research. The digital arm of the Techo Traders ecosystem.',
  keywords: 'web development, digital marketing, market research, Sri Lanka, Batticaloa',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

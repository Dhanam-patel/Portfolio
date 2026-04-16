import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
})

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair'
})

export const metadata: Metadata = {
  title: 'Dhanam Patel | AI & ML Engineer',
  description: 'Building LLM-powered AI systems focused on retrieval-augmented generation, scalable ML APIs, and real-world deployment.',
  generator: 'v0.app',
  keywords: ['AI Engineer', 'Machine Learning', 'LLM', 'RAG', 'Python', 'PyTorch', 'FastAPI'],
  authors: [{ name: 'Dhanam Patel' }],
  icons: {
    icon: '/images/profile.png',
    apple: '/images/profile.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased min-h-screen bg-background">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}

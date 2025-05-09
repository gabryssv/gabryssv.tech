import type React from "react"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Inter, Almendra } from "next/font/google"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"


const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

// Initialize Almendra font
const almendra = Almendra({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-almendra',
  weight: ['400'],
})

export const metadata: Metadata = {
  title: "Gabryś - Automatyzacje i Grafika Komputerowa",
  description: "Profesjonalne automatyzacje i usługi graficzne w przystępnej cenie",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html lang="pl" suppressHydrationWarning className={`${inter.variable} ${almendra.variable}`}>
      <head>
          <link rel="icon" href="./favicon.ico"/>
      </head>
      <body className="font-sans antialiased">
      <ThemeProvider defaultTheme="dark" storageKey="gabrys-theme">
          {children}
      </ThemeProvider>
      <SpeedInsights/>
      <Analytics/>
      </body>
      </html>
  )
}
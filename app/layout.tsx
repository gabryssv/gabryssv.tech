import type React from "react"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

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
      <html lang="pl" suppressHydrationWarning>
      <head>
          <link rel="icon" href="./favicon.ico"/>
      </head>
      <body className={`${GeistSans.variable} ${GeistMono.variable} font-sans antialiased`}>
      <ThemeProvider defaultTheme="dark" storageKey="gabrys-theme">
          {children}
      </ThemeProvider>
      <SpeedInsights/>
      <Analytics/>
      </body>
      </html>
  )
}

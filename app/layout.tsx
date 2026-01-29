import type React from "react"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { LoadingScreen } from "@/components/loading-screen"
import { Inter, Almendra } from "next/font/google"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import Script from "next/script"
import { cookies } from "next/headers"


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
  metadataBase: new URL("https://gabryssv.tech"),
  alternates: {
    canonical: "/",
    languages: {
      pl: "/",
      en: "/en",
    },
  },
  openGraph: {
    title: "Gabryś - Automatyzacje i Grafika Komputerowa",
    description: "Profesjonalne automatyzacje i usługi graficzne w przystępnej cenie",
    url: "https://gabryssv.tech",
    siteName: "gabryssv.tech",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Gabryś — Automatyzacje i Grafika",
      },
    ],
    locale: "pl_PL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@gabryssv",
    title: "Gabryś - Automatyzacje i Grafika Komputerowa",
    description: "Profesjonalne automatyzacje i usługi graficzne w przystępnej cenie",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const cookieStore = await cookies()
  const themeCookie = cookieStore.get("gabrys-theme")?.value as "dark" | "light" | "system" | undefined
  const htmlClass = `${inter.variable} ${almendra.variable} ${themeCookie === "dark" || themeCookie === "light" ? themeCookie : ""}`.trim()
  return (
      <html lang="pl" suppressHydrationWarning className={htmlClass}>
      <head>
          <link rel="icon" href="./favicon.ico"/>
          <Script id="theme-init" strategy="beforeInteractive">
            {`(function(){
              try {
                var storageKey = 'gabrys-theme';
                var root = document.documentElement;
                var saved = localStorage.getItem(storageKey);
                var theme = saved || 'dark';
                if (theme === 'system') {
                  theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                }
                root.classList.remove('light','dark');
                root.classList.add(theme);
              } catch (e) {}
            })();`}
          </Script>
      </head>
      <body className="font-sans antialiased">
      <ThemeProvider defaultTheme="dark" storageKey="gabrys-theme">
          <LoadingScreen />
          {children}
      </ThemeProvider>
      <SpeedInsights/>
      <Analytics/>
      </body>
      </html>
  )
}
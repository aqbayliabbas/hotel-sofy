import type React from "react"
import type { Metadata } from "next"
import { Geist, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "@/styles/globals.css"

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
})

export const metadata: Metadata = {
  title: "Hôtel Sofy | Hébergement Confortable à Bouira",
  description: "Un établissement 3 étoiles à Bouira offrant confort moderne et hospitalité exceptionnelle.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/assets/branding/SVG/favicon-white.svg",
        type: "image/svg+xml",
      }
    ],
    apple: "/assets/branding/SVG/favicon-white.svg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${geistSans.variable} ${playfair.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        <Analytics />
      </body>
    </html>
  )
}

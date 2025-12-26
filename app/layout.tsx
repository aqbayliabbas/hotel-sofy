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
  title: "Hôtel Sofy | Hôtel à Bouira - Hébergement & Hospitalité en Algérie",
  description: "Découvrez l'Hôtel Sofy, votre hôtel de référence à Bouira. Hébergement local de qualité, chambres confortables, proche de Tikjda. Le meilleur de l'hôtellerie en Algérie.",
  keywords: "hotel, hotels, hotel bouira, bouira, tikedjda hotel, algerie hotel, hotel alger, hotelerie, hébergement bouira, hébérgement local",
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

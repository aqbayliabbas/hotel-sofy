"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { RoomsSection } from "@/components/rooms-section"
import { RevealTitle, RevealText } from "@/components/ui/reveal-text"

export default function RoomsPage() {
    return (
        <main className="min-h-screen bg-background">
            <Navbar whiteInitially />

            <div className="pt-24 md:pt-32">
                {/* Hero Section */}
                <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden">
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                            backgroundImage: "url('/assets/reception 02.webp')",
                            filter: "brightness(0.6)"
                        }}
                    />
                    <div className="relative z-10 text-center px-6 text-white">
                        <RevealText className="text-xs uppercase tracking-[0.4em] mb-4 opacity-80">
                            Nos Hébergements
                        </RevealText>
                        <RevealTitle className="text-4xl md:text-7xl font-serif mb-6 leading-tight">
                            Chambres & Suites
                        </RevealTitle>
                        <RevealText className="max-w-2xl mx-auto opacity-70 text-lg font-light" delay={0.4}>
                            Découvrez nos espaces conçus pour votre repos, alliant design moderne et atmosphère chaleureuse.
                        </RevealText>
                    </div>
                </section>

                {/* Reuse the RoomsSection component for consistency */}
                <div className="py-12">
                    <RoomsSection />
                </div>

                {/* Additional Info Section */}
                <section className="py-24 px-6 md:px-12 bg-secondary/10 border-t border-border/50">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                        <div>
                            <RevealTitle className="text-xl font-serif mb-4 italic">Check-in</RevealTitle>
                            <RevealText className="opacity-70">À partir de 14:00</RevealText>
                        </div>
                        <div>
                            <RevealTitle className="text-xl font-serif mb-4 italic">Check-out</RevealTitle>
                            <RevealText className="opacity-70">Jusqu'à 12:00</RevealText>
                        </div>
                        <div>
                            <RevealTitle className="text-xl font-serif mb-4 italic">Besoin d'aide ?</RevealTitle>
                            <RevealText className="opacity-70">026 73 51 28 / 0558 54 43 63</RevealText>
                        </div>
                    </div>
                </section>
            </div>

            <Footer />
        </main>
    )
}

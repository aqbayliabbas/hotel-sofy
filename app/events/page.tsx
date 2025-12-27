"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { EventsSection } from "@/components/events-section"
import { RevealTitle, RevealText } from "@/components/ui/reveal-text"

export default function EventsPage() {
    return (
        <main className="min-h-screen bg-background">
            <Navbar whiteInitially />

            <div className="pt-24 md:pt-32">
                {/* Hero Section */}
                <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden">
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                            backgroundImage: "url('/assets/wide_shot_façade.webp')",
                            filter: "brightness(0.6)"
                        }}
                    />
                    <div className="relative z-10 text-center px-6 text-white">
                        <RevealText className="text-xs uppercase tracking-[0.4em] mb-4 opacity-80">
                            Vos Moments Précieux
                        </RevealText>
                        <RevealTitle className="text-4xl md:text-7xl font-serif mb-6 leading-tight">
                            Événements & Célébrations
                        </RevealTitle>
                        <RevealText className="max-w-2xl mx-auto opacity-70 text-lg font-light" delay={0.4}>
                            Un cadre d'exception pour vos mariages, conférences et moments de partage.
                        </RevealText>
                    </div>
                </section>

                {/* Main Events Display */}
                <div className="py-12">
                    <EventsSection />
                </div>

                {/* Booking Call to Action */}
                <section className="py-24 px-6 md:px-12 bg-primary text-white text-center">
                    <div className="max-w-3xl mx-auto">
                        <RevealTitle className="text-4xl md:text-5xl font-serif mb-8 italic text-white">Organisons ensemble votre prochain succès</RevealTitle>
                        <RevealText className="text-xl opacity-80 mb-10 font-light text-white">
                            Notre équipe dédiée à l'événementiel vous accompagne de la conception à la réalisation de votre projet.
                        </RevealText>
                        <a
                            href="/contact"
                            className="inline-block border border-white px-12 py-5 text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-primary transition-all duration-500"
                        >
                            Demandez un Devis Personnalisé
                        </a>
                    </div>
                </section>
            </div>

            <Footer />
        </main>
    )
}

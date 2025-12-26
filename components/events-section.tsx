"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { RevealTitle, RevealText } from "@/components/ui/reveal-text"

const events = [
    {
        title: "Mariages Élégants",
        subtitle: "Le début de votre histoire",
        description: "Célébrez votre union dans un cadre raffiné avec un service traiteur exceptionnel et une attention aux moindres détails pour une journée inoubliable.",
        image: "/assets/wide_shot_façade.png",
        inset: "/assets/reception.png",
        note: "Organisation complète"
    },
    {
        title: "Conférences & Séminaires",
        subtitle: "Efficience et Confort",
        description: "Des salles de réunion modernes et lumineuses, équipées pour garantir la productivité et le confort de vos collaborateurs.",
        image: "/assets/reception 02.png",
        inset: "/assets/chambres/chambre (1).png",
        note: "Équipements Audio/Vidéo"
    },
    {
        title: "Dîners de Gala",
        subtitle: "L'Art de Recevoir",
        description: "Impressionnez vos invités avec des menus gastronomiques personnalisés, créés par nos chefs pour ravir les palais les plus exigeants.",
        image: "/assets/reception.png",
        inset: "/assets/reception 02.png",
        note: "Service Traiteur Premium"
    },
    {
        title: "Fêtes & Anniversaires",
        subtitle: "Des Moments de Joie",
        description: "Que ce soit pour un anniversaire intime ou une grande célébration familiale, nous créons l'ambiance parfaite pour vos festivités.",
        image: "/assets/reception 02.png",
        inset: "/assets/chambres/chambre (2).png",
        note: "Espaces Modulables"
    }
]

export function EventsSection() {
    return (
        <section className="bg-background">
            <div className="text-center py-16 md:py-24 px-6 md:px-12 max-w-7xl mx-auto">
                <RevealText className="text-xs uppercase tracking-[0.3em] text-primary mb-4 block">
                    Espaces Événementiels
                </RevealText>
                <RevealTitle className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight mb-6">
                    Vos Événements à l'Hôtel Sofy
                </RevealTitle>
                <RevealText className="text-base opacity-80 leading-relaxed max-w-2xl mx-auto mb-10" delay={0.3}>
                    Salles modulables pour mariages, séminaires, conférences et célébrations. Service traiteur sur mesure et équipements audiovisuels modernes.
                </RevealText>
                <Link href="/contact">
                    <Button
                        variant="outline"
                        className="rounded-none border-primary px-10 py-6 text-xs uppercase tracking-widest bg-transparent hover:bg-primary hover:text-white transition-colors"
                    >
                        Contacter notre Équipe
                    </Button>
                </Link>
            </div>

            <div className="flex flex-col">
                {events.map((event, i) => (
                    <EventCard key={i} event={event} index={i} />
                ))}
            </div>
        </section>
    )
}

function EventCard({ event, index }: { event: typeof events[0], index: number }) {
    // Use styling to create the stacking effect
    // Each card is sticky 
    // We alternate background slightly or keep it consistent? 
    // User asked for "archive paper" effect which usually implies simple stacking.

    return (
        <div className="sticky top-0 h-screen w-full bg-background flex items-center justify-center border-t border-border/10 overflow-hidden">
            <div className="w-full h-full grid grid-cols-1 lg:grid-cols-2">
                {/* Left Image */}
                <div className="relative h-[50vh] lg:h-full w-full overflow-hidden">
                    <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
                </div>
                {/* Right Content */}
                <div className="bg-[#f8f9fa] flex items-center justify-center p-8 md:p-12 lg:p-24 h-[50vh] lg:h-full">
                    <div className="max-w-md text-center flex flex-col items-center">
                        <RevealText className="text-xs uppercase tracking-[0.2em] text-primary/60 mb-4 font-sans">{event.subtitle}</RevealText>
                        <RevealTitle className="text-3xl md:text-5xl font-serif mb-12 text-primary leading-tight">{event.title}</RevealTitle>

                        <div className="aspect-square w-64 mb-12 overflow-hidden shadow-xl -rotate-2 hover:rotate-0 transition-transform duration-700 ease-out border-4 border-white">
                            <img
                                src={event.inset}
                                alt={event.subtitle}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <RevealText className="text-sm md:text-base leading-relaxed text-primary/80 mb-8 max-w-sm">
                            {event.description}
                        </RevealText>

                        <span className="text-[10px] uppercase tracking-widest text-[#a88a70] font-bold border-b border-[#a88a70] pb-1">
                            {event.note}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

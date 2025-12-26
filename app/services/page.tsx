"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ServicesSection } from "@/components/services-section"
import { RevealTitle, RevealText } from "@/components/ui/reveal-text"
import { Coffee, Car, WifiHigh, Bell, Thermometer, Desktop } from "@phosphor-icons/react"
import { motion } from "framer-motion"

export default function ServicesPage() {
    const additionalServices = [
        { icon: <Thermometer size={32} weight="thin" />, title: "Climatisation", desc: "Contrôle individuel de la température pour votre confort optimal." },
        { icon: <Desktop size={32} weight="thin" />, title: "Espace Travail", desc: "Des bureaux ergonomiques dans chaque chambre pour vos besoins professionnels." },
        { icon: <Coffee size={32} weight="thin" />, title: "Petit-Déjeuner", desc: "Un buffet varié servi chaque matin avec des produits frais locaux." },
        { icon: <Car size={32} weight="thin" />, title: "Parking", desc: "Stationnement privé et sécurisé disponible gratuitement sur place." },
    ]

    return (
        <main className="min-h-screen bg-background">
            <Navbar whiteInitially />

            <div className="pt-24 md:pt-32">
                {/* Hero Section */}
                <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                            backgroundImage: "url('/assets/reception.png')",
                            filter: "brightness(0.6)"
                        }}
                    />
                    <div className="relative z-10 text-center px-6 text-white">
                        <RevealText className="text-xs uppercase tracking-[0.4em] mb-4 opacity-80">
                            Notre Engagement
                        </RevealText>
                        <RevealTitle className="text-4xl md:text-7xl font-serif mb-6 leading-tight">
                            Services & Équipements
                        </RevealTitle>
                        <RevealText className="max-w-2xl mx-auto opacity-70 text-lg font-light" delay={0.4}>
                            Une attention particulière à chaque détail pour garantir la perfection de votre séjour.
                        </RevealText>
                    </div>
                </section>

                {/* Reuse core ServicesSection */}
                <div className="py-12">
                    <ServicesSection />
                </div>

                {/* Grid of All Services */}
                <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <RevealTitle className="text-4xl font-serif mb-4 italic">Tout ce dont vous avez besoin</RevealTitle>
                        <RevealText className="opacity-60">Découvrez l'ensemble de nos prestations incluses.</RevealText>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {additionalServices.map((service, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1, duration: 0.5 }}
                                className="group p-8 border border-border/50 hover:border-primary/30 transition-colors duration-500 bg-secondary/10"
                            >
                                <div className="text-primary mb-6 transition-transform duration-500 group-hover:scale-110">
                                    {service.icon}
                                </div>
                                <RevealTitle className="text-xl font-serif mb-3 italic">{service.title}</RevealTitle>
                                <RevealText className="text-sm opacity-60 leading-relaxed">{service.desc}</RevealText>
                            </motion.div>
                        ))}
                    </div>
                </section>
            </div>

            <Footer />
        </main>
    )
}

"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { CaretLeft, CaretRight, Car, WifiHigh, Coffee, Bell } from "@phosphor-icons/react"
import { motion, AnimatePresence } from "framer-motion"
import { RevealTitle, RevealText } from "@/components/ui/reveal-text"

export function ServicesSection() {
    const [activeIndex, setActiveIndex] = useState(0)

    const services = [
        {
            title: "Restaurant & Terrasse",
            description: "Savourez des plats délicieux et détendez-vous dans notre atmosphère accueillante.",
            icon: <Coffee size={24} />,
            image: "/assets/reception.png"
        },
        {
            title: "Parking Privé Gratuit",
            description: "Un stationnement sécurisé et gratuit pour votre tranquillité d'esprit durant tout votre séjour.",
            icon: <Car size={24} />,
            image: "/assets/wide_shot_façade.png"
        },
        {
            title: "Wi-Fi Haut Débit",
            description: "Restez connecté avec notre connexion internet rapide et gratuite disponible dans tout l'établissement.",
            icon: <WifiHigh size={24} />,
            image: "/assets/chambres/chambre (4).png"
        },
        {
            title: "Service 24h/24",
            description: "Une équipe dévouée à votre disposition jour et nuit pour répondre à tous vos besoins.",
            icon: <Bell size={24} />,
            image: "/assets/reception 02.png"
        }
    ]

    const nextService = () => {
        setActiveIndex((prev) => (prev + 1) % services.length)
    }

    const prevService = () => {
        setActiveIndex((prev) => (prev - 1 + services.length) % services.length)
    }

    return (
        <section className="py-16 md:py-24 px-6 md:px-12 bg-secondary/30">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div className="max-w-xl">
                        <RevealText className="text-xs uppercase tracking-[0.3em] text-primary mb-4 block">
                            Services et Équipements
                        </RevealText>
                        <RevealTitle className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight">
                            Vivez le Paradis
                        </RevealTitle>
                        <RevealText className="mt-6 text-base opacity-80 leading-relaxed" delay={0.3}>
                            Profitez d'un hébergement de qualité avec nos installations modernes, incluant restaurant et terrasse, conçues pour rendre votre séjour aussi agréable que pratique.
                        </RevealText>
                    </div>
                    <Button
                        variant="outline"
                        className="rounded-none border-primary px-8 py-6 text-xs uppercase tracking-widest bg-transparent"
                    >
                        Explorer Tous les Services
                    </Button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="relative aspect-video overflow-hidden">
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={activeIndex}
                                initial={{ opacity: 0, scale: 1.05 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                src={services[activeIndex].image}
                                alt={services[activeIndex].title}
                                className="w-full h-full object-cover"
                            />
                        </AnimatePresence>
                    </div>

                    <div className="space-y-8 relative overflow-hidden h-[300px] flex flex-col justify-center">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeIndex}
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -20, opacity: 0 }}
                                transition={{ duration: 0.4 }}
                                className="absolute w-full"
                            >
                                <div className="w-10 h-10 border border-primary/20 flex items-center justify-center rounded-full opacity-60 mb-8">
                                    {services[activeIndex].icon}
                                </div>
                                <RevealTitle key={`title-${activeIndex}`} className="text-3xl md:text-4xl font-serif mb-4">{services[activeIndex].title}</RevealTitle>
                                <RevealText key={`text-${activeIndex}`} className="text-base opacity-70 leading-relaxed max-w-md">
                                    {services[activeIndex].description}
                                </RevealText>
                            </motion.div>
                        </AnimatePresence>

                        <div className="flex gap-4 pt-40 z-10 mt-auto">
                            <Button
                                size="icon"
                                variant="outline"
                                onClick={prevService}
                                className="rounded-full h-12 w-12 border-primary/20 opacity-50 bg-transparent hover:opacity-100 transition-opacity"
                            >
                                <CaretLeft size={20} weight="thin" />
                            </Button>
                            <Button
                                size="icon"
                                variant="outline"
                                onClick={nextService}
                                className="rounded-full h-12 w-12 border-primary bg-transparent hover:bg-primary/10 transition-colors"
                            >
                                <CaretRight size={20} weight="thin" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

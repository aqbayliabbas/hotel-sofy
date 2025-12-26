"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { CaretLeft, CaretRight, Star } from "@phosphor-icons/react"
import { motion, AnimatePresence } from "framer-motion"
import { RevealTitle, RevealText } from "@/components/ui/reveal-text"

const testimonials = [
    {
        quote: "Un séjour exceptionnel ! La propreté impeccable et le personnel attentionné ont rendu notre visite inoubliable. Le parking gratuit était très pratique.",
        author: "Sophie Martin",
        location: "Paris, France"
    },
    {
        quote: "L'emplacement est parfait pour découvrir Bouira. Les chambres sont spacieuses et confortables. Le restaurant propose des plats délicieux.",
        author: "Ahmed Benali",
        location: "Alger, Algérie"
    },
    {
        quote: "Excellent rapport qualité-prix. Le Wi-Fi fonctionne parfaitement, idéal pour mon séjour d'affaires. Je recommande vivement !",
        author: "Marc Dubois",
        location: "Lyon, France"
    },
    {
        quote: "Un accueil chaleureux et un service 24h/24 très réactif. Nous nous sommes sentis comme à la maison dès notre arrivée.",
        author: "Fatima Zahra",
        location: "Bouira, Algérie"
    },
    {
        quote: "La terrasse est magnifique ! Parfait pour se détendre après une journée de travail. Le personnel est aux petits soins.",
        author: "Jean-Pierre Rousseau",
        location: "Marseille, France"
    },
    {
        quote: "Hôtel moderne et bien entretenu. Les équipements sont de qualité et le petit-déjeuner est copieux. Une adresse à retenir !",
        author: "Karim Messaoudi",
        location: "Constantine, Algérie"
    },
    {
        quote: "Séjour parfait en famille. Les chambres familiales sont spacieuses et le personnel est très accueillant avec les enfants.",
        author: "Nadia et Rachid",
        location: "Tizi Ouzou, Algérie"
    },
    {
        quote: "Un excellent choix pour un séjour à Bouira. Propreté irréprochable, confort optimal et emplacement stratégique.",
        author: "Pierre Lefebvre",
        location: "Toulouse, France"
    },
    {
        quote: "Le meilleur hôtel de Bouira ! Service impeccable, chambres confortables et restaurant de qualité. Je reviendrai sans hésiter.",
        author: "Yasmine Kaci",
        location: "Béjaïa, Algérie"
    },
    {
        quote: "Parfait pour les voyageurs d'affaires. Salles de réunion bien équipées, Wi-Fi rapide et service professionnel. Hautement recommandé !",
        author: "Laurent Bernard",
        location: "Bordeaux, France"
    }
]

export function TestimonialsSection() {
    const [activeIndex, setActiveIndex] = useState(0)

    const nextTestimonial = () => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }

    const prevTestimonial = () => {
        setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    }

    return (
        <section className="py-16 md:py-24 px-6 md:px-12 bg-secondary/10 flex flex-col items-center text-center">
            <RevealTitle className="text-4xl md:text-5xl lg:text-6xl font-serif mb-10 max-w-3xl leading-tight">
                Ce Que Nos Clients Disent
            </RevealTitle>

            <div className="flex gap-1 mb-8">
                {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} weight="fill" className="text-amber-400" />
                ))}
            </div>

            <div className="relative w-full max-w-3xl min-h-[280px] flex items-center justify-center mb-12">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeIndex}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.5 }}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={0.2}
                        onDragEnd={(_, info) => {
                            const swipeThreshold = 50
                            if (info.offset.x > swipeThreshold) {
                                prevTestimonial()
                            } else if (info.offset.x < -swipeThreshold) {
                                nextTestimonial()
                            }
                        }}
                        className="absolute w-full cursor-grab active:cursor-grabbing"
                    >
                        <RevealText key={`quote-${activeIndex}`} className="max-w-2xl mx-auto text-base md:text-lg leading-relaxed opacity-80 mb-8 italic select-none">
                            {`"${testimonials[activeIndex].quote}"`}
                        </RevealText>
                        <RevealText key={`author-${activeIndex}`} className="text-xs uppercase tracking-[0.3em] font-medium select-none">
                            {`${testimonials[activeIndex].author}, ${testimonials[activeIndex].location}`}
                        </RevealText>
                    </motion.div>
                </AnimatePresence>
            </div>

            <div className="flex gap-4">
                <Button
                    size="icon"
                    variant="outline"
                    onClick={prevTestimonial}
                    className="rounded-full h-12 w-12 border-primary/20 hover:border-primary bg-transparent hover:bg-primary/10 transition-all"
                >
                    <CaretLeft size={20} weight="thin" />
                </Button>
                <Button
                    size="icon"
                    variant="outline"
                    onClick={nextTestimonial}
                    className="rounded-full h-12 w-12 border-primary hover:bg-primary/10 bg-transparent transition-all"
                >
                    <CaretRight size={20} weight="thin" />
                </Button>
            </div>

            <div className="mt-20 opacity-20">
                <div className="w-4 h-4 border border-foreground rotate-45" />
            </div>
        </section>
    )
}

"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { RevealTitle, RevealText } from "@/components/ui/reveal-text"
import { motion } from "framer-motion"
import { Users, ShieldCheck, Heart, Leaf } from "@phosphor-icons/react"

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-background">
            <Navbar whiteInitially />

            <div className="pt-24 md:pt-32">
                {/* Hero Section */}
                <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                            backgroundImage: "url('/assets/wide_shot_façade.png')",
                            filter: "brightness(0.7)"
                        }}
                    />
                    <div className="relative z-10 text-center px-6 text-white">
                        <RevealText className="text-xs uppercase tracking-[0.4em] mb-4 opacity-80">
                            Notre Histoire
                        </RevealText>
                        <RevealTitle className="text-5xl md:text-7xl font-serif mb-6">
                            L'Élégance & La Tradition
                        </RevealTitle>
                    </div>
                </section>

                {/* Content Section */}
                <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <RevealText className="text-xs uppercase tracking-[0.3em] text-primary block">
                                À Propos de Nous
                            </RevealText>
                            <div className="text-4xl md:text-5xl font-serif leading-tight">
                                <RevealTitle className="inline-block mr-4">
                                    Plus qu'un Hôtel,
                                </RevealTitle>
                                <br />
                                <RevealTitle className="inline-block italic text-primary/80" delay={0.2}>
                                    Une Destination
                                </RevealTitle>
                            </div>
                            <div className="space-y-6 text-lg opacity-80 leading-relaxed font-light">
                                <RevealText delay={0.2}>
                                    Situé au cœur de Bouira, l'Hôtel Sofy incarne l'alliance parfaite entre l'hospitalité traditionnelle algérienne et le confort moderne d'un établissement 3 étoiles.
                                </RevealText>
                                <RevealText delay={0.4}>
                                    Depuis notre ouverture, nous nous efforçons d'offrir à nos voyageurs d'affaires et de loisirs un havre de paix où chaque détail est soigneusement pensé pour leur satisfaction.
                                </RevealText>
                                <RevealText delay={0.6}>
                                    Notre équipe dévouée travaille sans relâche pour maintenir les plus hauts standards de propreté et de service, faisant de chaque séjour une expérience mémorable.
                                </RevealText>
                            </div>
                        </div>
                        <div className="relative">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8 }}
                                className="aspect-[4/5] overflow-hidden rounded-sm shadow-2xl"
                            >
                                <img
                                    src="/assets/reception.png"
                                    alt="Hotel Sofy Interior"
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>
                            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-primary/10 -z-10" />
                        </div>
                    </div>
                </section>

                {/* Values Section */}
                <section className="py-24 bg-secondary/20 px-6 md:px-12">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center max-w-2xl mx-auto mb-20">
                            <RevealTitle className="text-4xl font-serif mb-6">Nos Valeurs Fondamentales</RevealTitle>
                            <RevealText className="opacity-70">Ce qui nous guide au quotidien pour vous offrir le meilleur service possible.</RevealText>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                            {[
                                { icon: <ShieldCheck size={32} weight="thin" />, title: "Qualité", desc: "Un engagement sans faille vers l'excellence dans tous nos services." },
                                { icon: <Heart size={32} weight="thin" />, title: "Hospitalité", desc: "L'art de recevoir avec chaleur et authenticité algérienne." },
                                { icon: <Users size={32} weight="thin" />, title: "Service", desc: "Une équipe attentive à vos moindres besoins, 24h sur 24." },
                                { icon: <Leaf size={32} weight="thin" />, title: "Confort", desc: "Des espaces pensés pour votre repos et votre sérénité." }
                            ].map((value, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                                    className="flex flex-col items-center text-center p-6"
                                >
                                    <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-6 shadow-sm text-primary">
                                        {value.icon}
                                    </div>
                                    <RevealTitle className="text-xl font-serif mb-3 italic">{value.title}</RevealTitle>
                                    <RevealText className="text-sm opacity-60 leading-relaxed">{value.desc}</RevealText>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>

            <Footer />
        </main>
    )
}

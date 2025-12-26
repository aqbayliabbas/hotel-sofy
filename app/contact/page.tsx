"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { RevealTitle, RevealText } from "@/components/ui/reveal-text"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Phone, Envelope, MapPin } from "@phosphor-icons/react"

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle form submission
        console.log("Form submitted:", formData)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <main className="min-h-screen">
            <Navbar whiteInitially />
            <div className="pt-24 md:pt-32">

                {/* Hero Section */}
                <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden">
                    <div
                        className="absolute inset-0 bg-cover bg-center opacity-30"
                        style={{
                            backgroundImage: "url('/contact-img.jpg')"
                        }}
                    />
                    <div className="relative z-10 text-center px-6">
                        <RevealTitle className="text-4xl md:text-6xl lg:text-7xl font-serif mb-4 leading-tight">Contactez-nous</RevealTitle>
                        <RevealText className="text-sm md:text-base uppercase tracking-[0.3em] opacity-80" delay={0.4}>
                            Nous sommes à votre écoute
                        </RevealText>
                    </div>
                </section>

                {/* Contact Section */}
                <section className="py-16 md:py-24 px-6 md:px-12">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Contact Information */}
                        <div className="space-y-12">
                            <div>
                                <RevealTitle className="text-3xl md:text-4xl font-serif mb-6">Informations de Contact</RevealTitle>
                                <RevealText className="text-base opacity-70 leading-relaxed mb-8">
                                    Notre équipe dévouée est disponible pour répondre à toutes vos questions et vous aider à planifier votre séjour parfait à l'Hôtel Sofy.
                                </RevealText>
                            </div>

                            <div className="space-y-8">
                                {/* Address */}
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0">
                                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                                            <MapPin size={24} weight="thin" className="text-primary" />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold mb-2">Adresse</h3>
                                        <p className="text-sm opacity-70 leading-relaxed">
                                            Rue Frères Boussendalah<br />
                                            Face au Centre Universitaire<br />
                                            10101 Bouira, Algérie
                                        </p>
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0">
                                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                                            <Phone size={24} weight="thin" className="text-primary" />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold mb-2">Téléphone</h3>
                                        <p className="text-sm opacity-70">026 73 51 28 / 026 73 51 29</p>
                                        <p className="text-sm opacity-70">0558 54 43 63 (Mobile)</p>
                                        <p className="text-xs opacity-50 mt-1">Réception disponible 24h/24</p>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0">
                                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                                            <Envelope size={24} weight="thin" className="text-primary" />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold mb-2">Email</h3>
                                        <p className="text-sm opacity-70">contact@hotelsofy.com</p>
                                    </div>
                                </div>
                            </div>

                            {/* Hours */}
                            <div className="border-t border-border pt-8">
                                <h3 className="text-lg font-semibold mb-4">Horaires de Réception</h3>
                                <div className="space-y-2 text-sm">
                                    <div className="flex justify-between">
                                        <span className="opacity-70">Lundi - Dimanche</span>
                                        <span className="font-medium">24h/24</span>
                                    </div>
                                    <p className="text-xs opacity-50 mt-4">
                                        Notre réception est ouverte en permanence pour vous accueillir à tout moment.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-secondary/30 p-8 md:p-12 rounded-sm">
                            <h2 className="text-2xl md:text-3xl font-serif mb-6">Envoyez-nous un Message</h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium mb-2 uppercase tracking-wider">
                                        Nom Complet *
                                    </label>
                                    <Input
                                        id="name"
                                        name="name"
                                        type="text"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full rounded-none"
                                        placeholder="Votre nom"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium mb-2 uppercase tracking-wider">
                                        Email *
                                    </label>
                                    <Input
                                        id="email"
                                        name="email"
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full rounded-none"
                                        placeholder="votre@email.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium mb-2 uppercase tracking-wider">
                                        Téléphone
                                    </label>
                                    <Input
                                        id="phone"
                                        name="phone"
                                        type="tel"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full rounded-none"
                                        placeholder="+213 XX XX XX XX"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium mb-2 uppercase tracking-wider">
                                        Sujet *
                                    </label>
                                    <Input
                                        id="subject"
                                        name="subject"
                                        type="text"
                                        required
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="w-full rounded-none"
                                        placeholder="Objet de votre message"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium mb-2 uppercase tracking-wider">
                                        Message *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={6}
                                        className="w-full px-3 py-2 border border-input bg-background text-foreground rounded-none focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                                        placeholder="Votre message..."
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    className="w-full rounded-none px-8 py-6 text-sm uppercase tracking-widest"
                                >
                                    Envoyer le Message
                                </Button>

                                <p className="text-xs opacity-50 text-center">
                                    * Champs obligatoires
                                </p>
                            </form>
                        </div>
                    </div>
                </section>

            </div>
            <Footer />
        </main>
    )
}

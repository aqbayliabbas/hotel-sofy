"use client"

import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { WelcomeSection } from "@/components/welcome-section"
import { RoomsSection } from "@/components/rooms-section"
import { ServicesSection } from "@/components/services-section"
import { EventsSection } from "@/components/events-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { RevealTitle, RevealText } from "@/components/ui/reveal-text"
import { Loader } from "@/components/loader"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Loader />
      <Navbar />
      <Hero />
      <WelcomeSection />

      {/* Rooms & Suites */}
      <RoomsSection />

      <ServicesSection />

      <EventsSection />

      {/* Gallery Section */}
      <section className="py-16 md:py-24 bg-background overflow-hidden">
        <div className="text-center mb-16 px-6">
          <RevealText className="text-xs uppercase tracking-[0.3em] text-primary mb-4 block">Découvrez</RevealText>
          <RevealTitle className="text-4xl md:text-5xl font-serif leading-tight">
            L'Hôtel Sofy
          </RevealTitle>
          <RevealTitle className="text-4xl md:text-5xl font-serif leading-tight" delay={0.2}>
            En Images
          </RevealTitle>
        </div>
        <div className="relative flex">
          <motion.div
            className="flex gap-4 px-4"
            animate={{
              x: [0, -3744], // 9 images * (400px + 16px gap)
            }}
            transition={{
              duration: 30,
              ease: "linear",
              repeat: Number.POSITIVE_INFINITY,
            }}
          >
            {[
              "/assets/wide_shot_façade.png",
              "/assets/reception.png",
              "/assets/reception 02.png",
              "/assets/chambres/chambre (1).png",
              "/assets/chambres/chambre (2).png",
              "/assets/chambres/chambre (3).png",
              "/assets/chambres/chambre (4).png",
              "/assets/chambres/chambre (5).png",
              "/assets/hero.jpg",
              // Repeat for infinite loop
              "/assets/wide_shot_façade.png",
              "/assets/reception.png",
              "/assets/reception 02.png",
              "/assets/chambres/chambre (1).png",
              "/assets/chambres/chambre (2).png",
              "/assets/chambres/chambre (3).png",
              "/assets/chambres/chambre (4).png",
              "/assets/chambres/chambre (5).png",
              "/assets/hero.jpg",
            ].map((src, i) => (
              <div key={i} className="min-w-[80vw] md:min-w-[400px] aspect-square overflow-hidden group border border-border/10">
                <img
                  src={src || "/placeholder.svg"}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out group-hover:scale-110"
                  alt={`Image de galerie ${i + 1}`}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <TestimonialsSection />

      <Footer />
    </main >
  )
}

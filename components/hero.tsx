"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { RevealTitle, RevealText } from "@/components/ui/reveal-text"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  return (
    <section ref={ref} className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <motion.div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/assets/hero.jpg')",
          y,
        }}
      />
      <div className="absolute inset-0 z-0 bg-black/30" />


      <div className="relative z-10 text-center text-white px-6 md:px-12">
        <RevealTitle
          className="text-5xl md:text-6xl lg:text-8xl font-serif mb-6 leading-tight max-w-4xl mx-auto"
          delay={4.5}
        >
          Votre Escale de Confort à Bouira
        </RevealTitle>
        <RevealText
          className="text-base md:text-lg tracking-widest uppercase mb-10 opacity-90"
          delay={4.8}
        >
          Hôtel 3 étoiles — Rue Frères Boussendalah, face au Centre Universitaire
        </RevealText>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 5.2, duration: 1, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <Link href="/rooms">
            <Button
              variant="outline"
              className="rounded-none border-white text-white hover:bg-white hover:text-black px-10 py-6 text-xs uppercase tracking-widest bg-transparent"
            >
              Explorer Les Chambres
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

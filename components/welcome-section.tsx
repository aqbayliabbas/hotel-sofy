"use client"

import { FlowerLotus } from "@phosphor-icons/react"
import { RevealTitle, RevealText } from "@/components/ui/reveal-text"
import { motion, useScroll, useTransform, MotionValue, useMotionTemplate } from "framer-motion"
import { useRef } from "react"

const ParallaxImage = ({
  src,
  alt,
  className,
  progress,
  range,
}: {
  src: string
  alt: string
  className: string
  progress: MotionValue<number>
  range: [number, number]
}) => {
  // Enhanced reveal effect: clip-path, opacity, translation, and blur
  const insetTop = useTransform(progress, [range[0], range[1]], [100, 0])
  const clipPath = useMotionTemplate`inset(${insetTop}% 0% 0% 0%)`

  const opacity = useTransform(progress, [range[0], range[0] + 0.05], [0, 1])
  const y = useTransform(progress, [range[0], range[1]], [60, 0])
  const x = useTransform(progress, [range[0], range[1]], [20, 0]) // Subtle horizontal entry
  const scale = useTransform(progress, [range[0], range[1]], [1.3, 1])

  // Use a softer blur reveal
  const blurValue = useTransform(progress, [range[0], range[1]], [15, 0])
  const filter = useMotionTemplate`blur(${blurValue}px)`

  return (
    <motion.div
      style={{
        clipPath,
        opacity,
        y,
        x,
        filter
      }}
      className={`absolute hidden lg:block shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden rounded-sm z-0 ${className}`}
    >
      <motion.img
        style={{ scale }}
        src={src || "/placeholder.svg"}
        alt={alt}
        className="w-full h-full object-cover"
        loading="lazy"
      />
    </motion.div>
  )
}

export function WelcomeSection() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  return (
    <section ref={containerRef} className="relative h-auto lg:h-[600vh] bg-background">
      <div className="relative lg:sticky lg:top-0 h-auto lg:h-screen w-full overflow-hidden flex items-center justify-center py-20 lg:py-0">
        {/* Decorative Background Elements */}

        <div className="max-w-6xl mx-auto flex flex-col items-center text-center relative z-20 px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6 md:mb-8"
          >
            <img
              src="/assets/branding/SVG/favicon.svg"
              alt="Hotel Sofy Icon"
              className="h-10 w-10 md:h-12 md:w-12 mx-auto"
              loading="lazy"
            />
          </motion.div>

          <RevealText className="text-[10px] md:text-xs uppercase tracking-[0.4em] mb-6 opacity-60">
            Bienvenue à l'Hôtel Sofy
          </RevealText>

          <div className="text-3xl md:text-5xl lg:text-7xl font-serif mb-8 md:mb-12 leading-[1.2] lg:leading-tight max-w-4xl tracking-tight">
            <RevealTitle className="inline-block" delay={0.1}>
              L'Hospitalité
            </RevealTitle>
            <br className="md:hidden" />
            <RevealTitle className="inline-block italic text-primary/80 mr-4" delay={0.2}>
              Algérienne
            </RevealTitle>
            <RevealTitle className="inline-block" delay={0.3}>
              au Service du Confort
            </RevealTitle>
          </div>

          <div className="max-w-2xl space-y-6 md:space-y-8 text-sm md:text-xl leading-relaxed font-light opacity-90">
            <RevealText delay={0.4}>
              Idéalement situé Rue Frères Boussendalah, face au Centre Universitaire de Bouira,
              l'Hôtel Sofy est votre destination privilégiée pour des séjours d'affaires productifs
              ou des escapades de détente en toute sérénité.
            </RevealText>

            <RevealText delay={0.6}>
              Notre établissement 3 étoiles allie le charme de l'accueil traditionnel algérien
              aux standards modernes de confort : Wi-Fi haut débit gratuit, parking privé sécurisé,
              restaurant ouvert en continu et service de réception disponible 24h/24.
            </RevealText>
          </div>

          <div className="pt-12">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="flex flex-col items-center"
            >
              <div className="w-12 h-px bg-primary/30 mb-6" />
              <RevealTitle className="font-serif text-4xl opacity-90 mb-2 font-light tracking-widest italic" delay={0.2}>
                Tair Amar
              </RevealTitle>
              <RevealText className="text-[10px] uppercase tracking-[0.3em] text-primary/70" delay={0.4}>Directeur Général</RevealText>
            </motion.div>
          </div>
        </div>

        {/* Parallax Floating Images - Sequential Reveal */}
        <ParallaxImage
          src="/assets/wide_shot_façade.png"
          alt="Luxe Hotel Interior"
          className="top-[5%] left-[2%] w-64 h-80 rotate-[-4deg]"
          progress={scrollYProgress}
          range={[0.05, 0.2]}
        />
        <ParallaxImage
          src="/assets/reception.png"
          alt="Hotel Reception"
          className="top-[15%] right-[2%] w-72 h-96 rotate-[3deg]"
          progress={scrollYProgress}
          range={[0.2, 0.35]}
        />
        <ParallaxImage
          src="/assets/chambres/chambre (1).png"
          alt="Cozy Room"
          className="bottom-[10%] left-[4%] w-80 h-64 rotate-[2deg]"
          progress={scrollYProgress}
          range={[0.35, 0.5]}
        />
        <ParallaxImage
          src="/assets/chambres/chambre (2).png"
          alt="Elegant Suite"
          className="bottom-[5%] right-[5%] w-72 h-96 rotate-[-2deg]"
          progress={scrollYProgress}
          range={[0.5, 0.65]}
        />
        <ParallaxImage
          src="/assets/reception 02.png"
          alt="Modern Lobby"
          className="top-[45%] left-[8%] w-56 h-72 rotate-[-6deg]"
          progress={scrollYProgress}
          range={[0.65, 0.8]}
        />
        <ParallaxImage
          src="/assets/chambres/chambre (3).png"
          alt="Luxurious Bed"
          className="top-[40%] right-[10%] w-64 h-80 rotate-[5deg]"
          progress={scrollYProgress}
          range={[0.8, 0.95]}
        />
      </div>

    </section>
  )
}

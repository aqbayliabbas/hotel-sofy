"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { RevealTitle, RevealText } from "@/components/ui/reveal-text"
import { ArrowsOutSimple, Bed, Users, CaretDown, CaretLeft, CaretRight } from "@phosphor-icons/react"
import { motion, AnimatePresence } from "framer-motion"
import { AuthModal } from "./auth-modal"

export function RoomsSection() {
  const [activeRoomIdx, setActiveRoomIdx] = useState<number | null>(0)

  const rooms = [
    {
      name: "Suite Jardin Côtier",
      sqft: "60 m²",
      beds: "1 Grand Lit (King)",
      guests: "2 Personnes",
      price: "15 000 DZD",
      image: "/assets/chambres/chambre (1).png",
      description: "Un havre de paix confortable pour votre séjour.",
    },
    {
      name: "Suite King Confort",
      sqft: "75 m²",
      beds: "1 Grand Lit (King)",
      guests: "2-3 Personnes",
      price: "22 000 DZD",
      image: "/assets/chambres/chambre (2).png",
      description: "Un espace spacieux et lumineux pour une détente absolue.",
    },
    {
      name: "Loft Coucher de Soleil",
      sqft: "50 m²",
      beds: "1 Lit Queen",
      guests: "2 Personnes",
      price: "12 000 DZD",
      image: "/assets/chambres/chambre (3).png",
      description: "Un loft moderne conçu pour capturer l'heure dorée.",
    },
    {
      name: "Suite Familiale",
      sqft: "90 m²",
      beds: "2 Lits Queen",
      guests: "4-6 Personnes",
      price: "28 000 DZD",
      image: "/assets/chambres/chambre (4).png",
      description: "Luxe spacieux pour toute la famille.",
    },
    {
      name: "Suite Penthouse",
      sqft: "110 m²",
      beds: "2 Lits King",
      guests: "4-5 Personnes",
      price: "45 000 DZD",
      image: "/assets/chambres/chambre (5).png",
      description: "Profitez d'une élégance élevée et d'un confort exceptionnel.",
    },
  ]

  const nextRoom = () => {
    setActiveRoomIdx((prev) => ((prev ?? 0) + 1) % rooms.length)
  }

  const prevRoom = () => {
    setActiveRoomIdx((prev) => ((prev ?? 0) - 1 + rooms.length) % rooms.length)
  }

  return (
    <section className="py-16 md:py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div className="max-w-xl">
          <RevealText className="text-xs uppercase tracking-[0.3em] text-primary mb-4 block">
            Nos Hébergements
          </RevealText>
          <RevealTitle className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight">
            Chambres Climatisées & Équipées
          </RevealTitle>
          <RevealText className="mt-6 text-base opacity-80 leading-relaxed" delay={0.3}>
            Profitez de chambres modernes avec TV, salle de bain privée, balcon vue ville et ménage quotidien. Chambres non-fumeurs disponibles sur demande.
          </RevealText>
        </div>
        <Link href="/rooms">
          <Button
            variant="outline"
            className="hidden md:flex rounded-none border-primary px-8 py-6 text-xs uppercase tracking-widest bg-transparent"
          >
            Explorer Toutes les Chambres
          </Button>
        </Link>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:grid grid-cols-2 gap-16 items-start">
        <div className="space-y-4">
          {rooms.map((room, idx) => (
            <div key={room.name} className="border-b border-border/50 pb-4 overflow-hidden">
              <button
                onClick={() => setActiveRoomIdx(activeRoomIdx === idx ? null : idx)}
                className={`w-full text-left flex justify-between items-center text-2xl md:text-3xl font-serif transition-val duration-300 py-4 ${activeRoomIdx === idx ? "text-primary" : "text-primary/30 hover:text-primary/60"
                  }`}
              >
                {room.name}
                <CaretDown
                  size={20}
                  weight="thin"
                  className={`transition-transform duration-300 ${activeRoomIdx === idx ? "rotate-180" : ""}`}
                />
              </button>

              <AnimatePresence>
                {activeRoomIdx === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="py-6 space-y-8">
                      <div className="flex flex-wrap gap-6 text-[10px] uppercase tracking-widest opacity-70">
                        <div className="flex items-center gap-2">
                          <ArrowsOutSimple size={14} weight="thin" /> <span>{room.sqft}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Bed size={14} weight="thin" /> <span>{room.beds}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users size={14} weight="thin" /> <span>{room.guests}</span>
                        </div>
                      </div>

                      <div className="flex items-end justify-between">
                        <div>
                          <span className="text-[10px] uppercase tracking-widest block mb-1 opacity-60">
                            À partir de
                          </span>
                          <p className="text-3xl font-serif">
                            {room.price} <span className="text-sm font-sans italic opacity-70">/ nuit</span>
                          </p>
                        </div>
                        <AuthModal>
                          <Button
                            variant="outline"
                            className="rounded-none px-10 py-6 text-xs uppercase tracking-widest bg-transparent"
                          >
                            Réserver
                          </Button>
                        </AuthModal>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="relative aspect-[4/5] overflow-hidden group">
          <AnimatePresence mode="wait">
            {activeRoomIdx !== null && (
              <motion.img
                key={activeRoomIdx}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6 }}
                src={rooms[activeRoomIdx].image}
                alt={rooms[activeRoomIdx].name}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            )}
          </AnimatePresence>
          {activeRoomIdx !== null && (
            <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/60 to-transparent text-white">
              <motion.p
                key={activeRoomIdx}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                className="text-sm italic max-w-md"
              >
                {rooms[activeRoomIdx].description}
              </motion.p>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Slider Layout */}
      <div className="lg:hidden relative h-[70vh] min-h-[500px] w-full overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeRoomIdx ?? 0}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={(_, info) => {
              const swipeThreshold = 50
              if (info.offset.x > swipeThreshold) {
                prevRoom()
              } else if (info.offset.x < -swipeThreshold) {
                nextRoom()
              }
            }}
            className="absolute inset-0 cursor-grab active:cursor-grabbing"
          >
            <img
              src={rooms[activeRoomIdx ?? 0].image}
              alt={rooms[activeRoomIdx ?? 0].name}
              className="w-full h-full object-cover pointer-events-none"
              loading="lazy"
            />
            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />
          </motion.div>
        </AnimatePresence>

        {/* Content Overlay */}
        <div className="absolute bottom-0 left-0 w-full p-6 text-white">
          <motion.div
            key={activeRoomIdx ?? 0}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.4 }}
          >
            <h3 className="text-3xl font-serif mb-4">{rooms[activeRoomIdx ?? 0].name}</h3>

            <div className="flex flex-wrap gap-4 text-xs uppercase tracking-widest mb-6 opacity-90">
              <div className="flex items-center gap-2">
                <ArrowsOutSimple size={16} weight="thin" /> <span>{rooms[activeRoomIdx ?? 0].sqft}</span>
              </div>
              <div className="flex items-center gap-2">
                <Bed size={16} weight="thin" /> <span>{rooms[activeRoomIdx ?? 0].beds}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users size={16} weight="thin" /> <span>{rooms[activeRoomIdx ?? 0].guests}</span>
              </div>
            </div>

            <div className="flex items-end justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-widest block mb-1 opacity-70">
                  À partir de
                </span>
                <p className="text-2xl font-serif">
                  {rooms[activeRoomIdx ?? 0].price} <span className="text-sm font-sans italic opacity-70">/ nuit</span>
                </p>
              </div>

              {/* Navigation Arrows */}
              <div className="flex gap-3">
                <Button
                  onClick={prevRoom}
                  size="icon"
                  className="rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border-0 text-white w-10 h-10"
                >
                  <CaretLeft size={18} weight="thin" />
                </Button>
                <Button
                  onClick={nextRoom}
                  size="icon"
                  className="rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border-0 text-white w-10 h-10"
                >
                  <CaretRight size={18} weight="thin" />
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="lg:hidden mt-8 flex justify-center">
        <Link href="/rooms">
          <Button
            variant="outline"
            className="rounded-none border-primary px-8 py-6 text-xs uppercase tracking-widest bg-transparent"
          >
            Explorer Toutes les Chambres
          </Button>
        </Link>
      </div>

    </section>
  )
}

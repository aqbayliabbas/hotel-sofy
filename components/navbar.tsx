"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { MapPin, Phone, List, User } from "@phosphor-icons/react"
import { AuthModal } from "./auth-modal"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { FlipText } from "@/components/ui/flip-text"

export function Navbar({
  alwaysSticky = false,
  whiteInitially = false
}: {
  alwaysSticky?: boolean,
  whiteInitially?: boolean
}) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const links = [
    { href: "/about", label: "À propos" },
    { href: "/rooms", label: "Chambres" },
    { href: "/services", label: "Services" },
    { href: "/events", label: "Événements" },
  ]

  const showWhiteBg = isScrolled || whiteInitially
  const isNavbarCompressed = isScrolled || (alwaysSticky && isScrolled)

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 md:px-12 uppercase text-base tracking-widest font-medium transition-all duration-300 ${showWhiteBg
        ? 'bg-white shadow-md py-6'
        : 'bg-transparent py-8 lg:py-16'
        } ${showWhiteBg
          ? 'text-primary'
          : 'text-white'
        }`}
    >
      {/* Desktop Left Links */}
      <div className="hidden lg:flex gap-6 items-center flex-1">
        {links.slice(0, 3).map((link) => (
          <Link key={link.href} href={link.href}>
            <FlipText>{link.label}</FlipText>
          </Link>
        ))}
      </div>

      {/* Mobile Menu Trigger */}
      <div className="lg:hidden flex-1 flex items-center">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className={`h-12 w-12 ${showWhiteBg
                ? 'text-primary hover:bg-primary/5'
                : 'text-white hover:bg-white/10'
                }`}
            >
              <List size={40} weight="thin" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="bg-background w-full sm:w-[400px] border-r-0">
            <nav className="flex flex-col gap-8 mt-16 px-6">
              <div className="mb-12">
                <img
                  src="/assets/branding/SVG/hotel sofy logo main.svg"
                  alt="Hotel Sofy"
                  className="h-16 w-auto object-contain"
                />
              </div>
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-2xl text-foreground hover:text-primary transition-colors uppercase tracking-[0.2em] font-serif block w-fit"
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-8 pt-8 border-t border-border/50 space-y-4">
                <div className="flex items-center gap-3 text-sm opacity-60">
                  <Phone size={18} weight="thin" />
                  <span>026 73 51 28</span>
                </div>
                <div className="flex items-center gap-3 text-sm opacity-60">
                  <MapPin size={18} weight="thin" />
                  <span>Bouira, Algérie</span>
                </div>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>

      {/* Logo */}
      <div className="flex flex-col items-center justify-center flex-1 text-center">
        <Link href="/" className="transition-transform duration-300 hover:scale-105 active:scale-95">
          <img
            src="/assets/branding/SVG/hotel sofy logo main.svg"
            alt="Hotel Sofy"
            className={`w-auto object-contain transition-all duration-300 ${isScrolled
              ? 'h-10 md:h-14'
              : 'h-14 md:h-20'
              } ${showWhiteBg
                ? ''
                : 'brightness-0 invert'
              }`}
          />
        </Link>
      </div>

      {/* Desktop Right Links & Info */}
      <div className="hidden lg:flex gap-8 items-center justify-end flex-1">
        <Link href="/events">
          <FlipText>Événements</FlipText>
        </Link>
        <div className="flex items-center gap-1.5">
          <MapPin size={16} weight="thin" />
          <span>Bouira, DZ</span>
        </div>
        <div className="flex items-center gap-1.5 mr-4">
          <Phone size={16} weight="thin" />
          <span>026 73 51 28</span>
        </div>
        <AuthModal>
          <button className="text-[10px] border border-current px-4 py-2 hover:bg-current hover:text-background transition-colors">
            Connexion
          </button>
        </AuthModal>
      </div>

      {/* Mobile Right */}
      <div className="lg:hidden flex-1 flex justify-end items-center gap-4">
        <AuthModal>
          <button className="hover:opacity-70 p-2">
            <User size={26} weight="thin" />
          </button>
        </AuthModal>
        <Link href="/contact" className="hover:opacity-70 p-2">
          <Phone size={26} weight="thin" />
        </Link>
      </div>
    </nav>
  )
}

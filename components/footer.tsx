import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { InstagramLogo, FacebookLogo, YoutubeLogo, TwitterLogo } from "@phosphor-icons/react"
import { FlipText } from "@/components/ui/flip-text"
import { RevealTitle, RevealText } from "@/components/ui/reveal-text"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-background pt-16 md:pt-24 pb-8 md:pb-12 px-6 md:px-12 border-t border-border">
      {/* Contact CTA */}
      <div className="mb-24 relative h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden -mx-6 md:-mx-12">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40 grayscale"
          style={{
            backgroundImage:
              "url('/contact-img.jpg')",
          }}
        />
        <div className="relative z-10 text-center px-6 md:px-12">
          <RevealTitle className="text-4xl md:text-5xl lg:text-7xl font-serif mb-6">Réservez Votre Séjour</RevealTitle>
          <RevealText className="text-xs md:text-sm uppercase tracking-[0.2em] mb-8 max-w-2xl mx-auto leading-relaxed">
            Appelez-nous au 026 73 51 28 ou 0558 54 43 63 — Notre équipe est disponible 24h/24 pour vous accueillir.
          </RevealText>
          <Link href="/contact">
            <Button
              variant="outline"
              className="bg-white hover:bg-white/90 text-primary border-none px-10 py-6 rounded-none uppercase text-xs tracking-[0.3em]"
            >
              Nous Contacter
            </Button>
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
        <div className="flex flex-col items-center lg:items-start">
          <div className="flex flex-col items-center lg:items-start mb-8">
            <img
              src="/assets/branding/SVG/footer logo.svg"
              alt="Hotel Sofy"
              className="h-16 w-auto object-contain"
            />
          </div>
          <div className="flex gap-4 opacity-70">
            <FacebookLogo size={18} weight="thin" />
            <InstagramLogo size={18} weight="thin" />
            <YoutubeLogo size={18} weight="thin" />
            <TwitterLogo size={18} weight="thin" />
          </div>
        </div>

        <div>
          <h4 className="text-[10px] uppercase tracking-widest mb-6 font-semibold opacity-50">Navigation</h4>
          <ul className="space-y-3 text-sm tracking-wide">
            <li>
              <a href="#" className="block w-fit">
                <FlipText>Accueil</FlipText>
              </a>
            </li>
            <li>
              <a href="#" className="block w-fit">
                <FlipText>Chambres</FlipText>
              </a>
            </li>
            <li>
              <a href="#" className="block w-fit">
                <FlipText>Services</FlipText>
              </a>
            </li>
            <li>
              <a href="#" className="block w-fit">
                <FlipText>Contact</FlipText>
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-[10px] uppercase tracking-widest mb-6 font-semibold opacity-50">Pages</h4>
          <ul className="space-y-3 text-sm tracking-wide">
            <li>
              <a href="#" className="block w-fit">
                <FlipText>À propos</FlipText>
              </a>
            </li>
            <li>
              <a href="#" className="block w-fit">
                <FlipText>Événements</FlipText>
              </a>
            </li>
            <li>
              <a href="#" className="block w-fit">
                <FlipText>Blog / Actualités</FlipText>
              </a>
            </li>
            <li>
              <a href="#" className="block w-fit">
                <FlipText>Politique de Confidentialité</FlipText>
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-[10px] uppercase tracking-widest mb-6 font-semibold opacity-50">
            S&apos;inscrire à la Newsletter
          </h4>
          <div className="flex">
            <Input
              placeholder="Entrez votre email"
              className="rounded-none border-primary/20 focus-visible:ring-primary/20 bg-transparent text-sm h-12"
            />
            <Button className="rounded-none bg-primary text-white h-12 px-6 uppercase text-[10px] tracking-widest">
              S&apos;abonner
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest opacity-40 border-t border-border pt-12">
        <p>Réalisé en collaboration avec Wingo et Auren ai</p>
        <p>2026 © Tous droits réservés</p>
      </div>
    </footer>
  )
}

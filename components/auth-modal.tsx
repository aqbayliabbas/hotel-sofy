"use client"

import { useState } from "react"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { motion, AnimatePresence } from "framer-motion"

export function AuthModal({ children }: { children: React.ReactNode }) {
    const [open, setOpen] = useState(false)

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>{children}</DialogTrigger>
            <DialogContent className="sm:max-w-[400px] bg-background border-none shadow-2xl p-0 overflow-hidden">
                <div className="relative pt-12 pb-8 px-8">
                    <div className="absolute top-0 left-0 w-full h-1 bg-primary" />

                    <DialogHeader className="mb-8 flex flex-col items-center">
                        <div className="mb-4">
                            <img
                                src="/assets/branding/SVG/hotel sofy logo main.svg"
                                alt="Hotel Sofy"
                                className="h-16 w-auto object-contain"
                            />
                        </div>
                        <DialogTitle className="text-2xl font-serif text-center italic hidden">Hotel Sofy</DialogTitle>
                        <DialogDescription className="text-center uppercase tracking-widest text-[10px] opacity-60">
                            Votre expérience commence ici
                        </DialogDescription>
                    </DialogHeader>

                    <Tabs defaultValue="login" className="w-full">
                        <TabsList className="grid w-full grid-cols-2 mb-8 bg-secondary/30 rounded-none h-12">
                            <TabsTrigger value="login" className="rounded-none data-[state=active]:bg-primary data-[state=active]:text-white uppercase text-[10px] tracking-widest">Connexion</TabsTrigger>
                            <TabsTrigger value="signup" className="rounded-none data-[state=active]:bg-primary data-[state=active]:text-white uppercase text-[10px] tracking-widest">Inscription</TabsTrigger>
                        </TabsList>

                        <AnimatePresence mode="wait">
                            <TabsContent value="login">
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.3 }}
                                    className="space-y-4"
                                >
                                    <div className="space-y-2">
                                        <Label htmlFor="email" className="uppercase text-[10px] tracking-widest opacity-70">Email</Label>
                                        <Input id="email" type="email" placeholder="votre@email.com" className="rounded-none border-primary/20 focus-visible:ring-primary/20 h-12" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="pass" className="uppercase text-[10px] tracking-widest opacity-70">Mot de passe</Label>
                                        <Input id="pass" type="password" placeholder="••••••••" className="rounded-none border-primary/20 focus-visible:ring-primary/20 h-12" />
                                    </div>
                                    <Button className="w-full rounded-none h-12 uppercase tracking-widest text-[10px] mt-4">
                                        Se Connecter
                                    </Button>
                                </motion.div>
                            </TabsContent>

                            <TabsContent value="signup">
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.3 }}
                                    className="space-y-4"
                                >
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="firstname" className="uppercase text-[10px] tracking-widest opacity-70">Prénom</Label>
                                            <Input id="firstname" placeholder="Jean" className="rounded-none border-primary/20 focus-visible:ring-primary/20 h-12" />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="lastname" className="uppercase text-[10px] tracking-widest opacity-70">Nom</Label>
                                            <Input id="lastname" placeholder="Dupont" className="rounded-none border-primary/20 focus-visible:ring-primary/20 h-12" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="signup-email" className="uppercase text-[10px] tracking-widest opacity-70">Email</Label>
                                        <Input id="signup-email" type="email" placeholder="votre@email.com" className="rounded-none border-primary/20 focus-visible:ring-primary/20 h-12" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="signup-pass" className="uppercase text-[10px] tracking-widest opacity-70">Mot de passe</Label>
                                        <Input id="signup-pass" type="password" placeholder="••••••••" className="rounded-none border-primary/20 focus-visible:ring-primary/20 h-12" />
                                    </div>
                                    <Button className="w-full rounded-none h-12 uppercase tracking-widest text-[10px] mt-4">
                                        Créer un compte
                                    </Button>
                                </motion.div>
                            </TabsContent>
                        </AnimatePresence>
                    </Tabs>

                    <p className="text-center text-[10px] uppercase tracking-widest opacity-40 mt-8 leading-relaxed px-4">
                        En continuant, vous acceptez nos conditions d'utilisation et notre politique de confidentialité.
                    </p>
                </div>
            </DialogContent>
        </Dialog>
    )
}

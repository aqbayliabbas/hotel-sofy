"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function Loader() {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        // Increased duration slightly to allow the sequenced animation to play out
        const timer = setTimeout(() => {
            setIsLoading(false)
        }, 3800)

        return () => clearTimeout(timer)
    }, [])

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    key="loader-container"
                    initial={{ y: 0 }}
                    exit={{
                        y: "-100%",
                        transition: {
                            duration: 1.2,
                            ease: [0.85, 0, 0.15, 1], // Very smooth premium easing
                            delay: 0.2
                        }
                    }}
                    className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-[#fcfcf9]"
                >
                    <div className="flex flex-col items-center gap-12">
                        {/* Logo Image with Top-to-Bottom Reveal */}
                        <motion.div
                            initial={{
                                clipPath: "inset(0% 0% 100% 0%)",
                                opacity: 0,
                                y: -30
                            }}
                            animate={{
                                clipPath: "inset(0% 0% 0% 0%)",
                                opacity: 1,
                                y: 0
                            }}
                            transition={{
                                duration: 1.4,
                                ease: [0.76, 0, 0.24, 1],
                                delay: 0.4
                            }}
                            className="relative"
                        >
                            <img
                                src="/assets/branding/SVG/hotel sofy logo main.svg"
                                alt="Hotel Sofy"
                                className="h-20 md:h-28 w-auto object-contain"
                            />
                        </motion.div>

                        {/* Sequence: Point -> Bar -> Fill */}
                        <div className="relative flex items-center justify-center h-4 w-64">
                            <motion.div
                                initial={{
                                    width: 6,
                                    height: 6,
                                    borderRadius: "100%",
                                    opacity: 0,
                                    scale: 0.5
                                }}
                                animate={{
                                    width: [6, 6, 200], // Stays a point, then stretches
                                    height: [6, 6, 1],   // Stays a point, then thins
                                    borderRadius: ["100%", "100%", "0%"],
                                    opacity: 1,
                                    scale: 1
                                }}
                                transition={{
                                    duration: 1.2,
                                    times: [0, 0.4, 1],
                                    ease: [0.87, 0, 0.13, 1],
                                    delay: 0.8
                                }}
                                className="bg-primary/10 relative overflow-hidden"
                            >
                                {/* Fill Animation */}
                                <motion.div
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: 1 }}
                                    transition={{
                                        duration: 1.6,
                                        ease: [0.65, 0, 0.35, 1],
                                        delay: 2.0
                                    }}
                                    style={{ originX: 0 }}
                                    className="absolute inset-0 bg-primary"
                                />
                            </motion.div>
                        </div>
                    </div>

                    {/* Bottom text reveal */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 0.4, y: 0 }}
                        transition={{ delay: 2.5, duration: 1 }}
                        className="absolute bottom-12 text-[10px] uppercase tracking-[0.5em] font-medium"
                    >
                        Bouira • Algerie
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

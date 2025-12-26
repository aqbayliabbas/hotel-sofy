"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function Loader() {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        // Hide loader after 2.5 seconds
        const timer = setTimeout(() => {
            setIsLoading(false)
        }, 2500)

        return () => clearTimeout(timer)
    }, [])

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="fixed inset-0 z-[999] flex items-center justify-center bg-[#f5f5f0]"
                >
                    <div className="flex flex-col items-center gap-8">
                        {/* Logo Image */}
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="relative"
                        >
                            <img
                                src="/assets/branding/SVG/hotel sofy logo main.svg"
                                alt="Hotel Sofy"
                                className="h-24 md:h-32 w-auto object-contain"
                            />
                        </motion.div>

                        {/* Loading Bar */}
                        <div className="w-32 h-[1px] bg-[#1a3a3a]/20 relative overflow-hidden">
                            <motion.div
                                initial={{ x: "-100%" }}
                                animate={{ x: "100%" }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="absolute inset-0 bg-[#1a3a3a]"
                            />
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

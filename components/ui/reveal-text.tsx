"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

interface RevealTextProps {
    children: string
    className?: string
    delay?: number
}

export function RevealTitle({ children, className = "", delay = 0 }: RevealTextProps) {
    const [isVisible, setIsVisible] = useState(false)
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                }
            },
            { threshold: 0.1 }
        )

        if (ref.current) {
            observer.observe(ref.current)
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current)
            }
        }
    }, [])

    const words = children.split(" ")

    return (
        <div ref={ref} className={className}>
            {words.map((word, index) => (
                <motion.span
                    key={index}
                    initial={{ opacity: 0, filter: "blur(15px)", y: 10, scale: 0.95 }}
                    animate={
                        isVisible
                            ? { opacity: 1, filter: "blur(0px)", y: 0, scale: 1 }
                            : { opacity: 0, filter: "blur(15px)", y: 10, scale: 0.95 }
                    }
                    transition={{
                        duration: 0.8,
                        delay: delay + index * 0.1,
                        ease: [0.21, 0.47, 0.32, 0.98]
                    }}
                    className="inline-block mr-[0.25em]"
                >
                    {word}
                </motion.span>
            ))}
        </div>
    )
}

export function RevealText({ children, className = "", delay = 0 }: RevealTextProps) {
    const [isVisible, setIsVisible] = useState(false)
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                }
            },
            { threshold: 0.1 }
        )

        if (ref.current) {
            observer.observe(ref.current)
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current)
            }
        }
    }, [])

    // Split by line breaks or sentences for paragraph animation
    const lines = children.split('\n').filter(line => line.trim())

    return (
        <div ref={ref} className={className}>
            {lines.map((line, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, filter: "blur(15px)", y: 10 }}
                    animate={
                        isVisible
                            ? { opacity: 1, filter: "blur(0px)", y: 0 }
                            : { opacity: 0, filter: "blur(15px)", y: 10 }
                    }
                    transition={{
                        duration: 0.9,
                        delay: delay + index * 0.15,
                        ease: [0.21, 0.47, 0.32, 0.98]
                    }}
                >
                    {line}
                </motion.div>
            ))}
        </div>
    )
}

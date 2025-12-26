
import React from "react"
import { cn } from "@/lib/utils"

interface FlipTextProps extends React.HTMLAttributes<HTMLSpanElement> {
    children: React.ReactNode
    className?: string
}

export function FlipText({ children, className, ...props }: FlipTextProps) {
    return (
        <span
            className={cn("relative inline-block overflow-hidden group", className)}
            {...props}
        >
            <span className="block transition-all duration-700 ease-in-out group-hover:-translate-y-full group-hover:opacity-0 delay-75">
                {children}
            </span>
            <span className="absolute top-0 left-0 block w-full h-full transition-all duration-700 ease-in-out translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 delay-75">
                {children}
            </span>
        </span>
    )
}

import { cn } from "@/lib/utils"
import { ButtonHTMLAttributes } from "react"

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({children, className, ...props}: ButtonProps) => {
    return (
        <button
            className={cn(
                'bg-[#5865F2] py-3 px-4 rounded-lg text-gray-50 flex items-center justify-center gap-2 hover:bg-[#444ebd] transition-all disabled:opacity-50 disabled:pointer-events-none',
                className
            )}
            {...props}
        >
            {children}
        </button>
    )
}
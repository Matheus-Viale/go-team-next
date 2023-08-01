'use client'

import { cn } from "@/lib/utils";
import Link from "next/link"
import { usePathname } from 'next/navigation';

type NavItemProps = {
    label: string,
    href: string
}

export const NavItem = ({label, href}: NavItemProps) => {
    const pathname = usePathname();

    const isActive = pathname === href;

    return (
        <Link href={href} className={cn(
            "text-gray-400 flex items-center gap-2 font-medium font-sans hover:text-gray-50 transition-colors",
            isActive && 'text-gray-50'
        )}>
            <span className="text-purple-500">#</span>
            {label}
        </Link>
    )
}
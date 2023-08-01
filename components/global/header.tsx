import Image from "next/image"
import Link from "next/link"
import { NavItem } from "./nav-item"

const NAV_ITEMS = [
    {
        label: 'Home',
        href: '/'
    },
    {
        label: 'Venha fazer parte!',
        href: 'https://discord.gg/go-team-streamers-818562930181275740'
    }
]

export const Header = () => {
    return (
        <header className="w-full h-24 flex items-center justify-center">
            <div className="container flex items-center justify-between">
                <Link href="/">
                    <Image
                        src="/images/goteamlogotransparentwhite.png"
                        width={70}
                        height={70}
                        alt="Logo Go Team"
                    />
                </Link>
                <nav className="flex items-center gap-4 sm:gap-10">
                    {NAV_ITEMS.map(item => (
                      <NavItem {...item} key={item.label}/>
                    ))}
                </nav>
                <Link className="flex" href='/live'>
                    <div className="animate-pulse flex space-x-4">
                        Live
                    </div>
                    <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                    </span>
                </Link>
            </div>
        </header>
    )
}
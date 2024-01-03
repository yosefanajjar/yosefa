'use client'

import Link from "next/link"
import Image from 'next/image'
import { useTheme } from 'next-themes'
import { Switch } from "@/app/components/Switch"
import { useState } from "react"
import { Menu } from "@/app/components/Menu"
import { GithubIcon } from "../Icons/GithubIcon"
import { MenuIcon } from "../Icons/MenuIcon"

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-white dark:bg-black dark:text-white">
            <div className="px-6 lg:px-20 py-10 flex justify-between">
                <Link className="text-5xl font-primary font-semibold" href="/">YosefA</Link>
                <div className="hidden xl:flex space-x-8 items-center font-primary font-medium">
                    <Link href="/blog">Blog</Link>
                    <Link href="/about">About</Link>
                    <a href="https://yosefa.substack.com/" target="_blank">Newsletter</a>
                    <Link href="/files/resume.pdf" target="_blank">Resume</Link>
                    <a href="https://github.com/yosefanajjar" target="_blank">
                        <GithubIcon />
                    </a>
                    <Switch />
                </div>

                <button className="xl:hidden" onClick={() => setIsOpen(true)}>
                    <MenuIcon />
                </button>
                {isOpen ? <Menu onClose={() => setIsOpen(false)} /> : null}

            </div>
            <div className="w-full border-t border-4 border-gray-300" />
        </div>
    )
}
'use client'

import Link from "next/link"
import Image from 'next/image'
import { Switch } from "@/app/components/Switch"
import { useState } from "react"
import { Menu } from "../Menu"

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-white">
            <div className="px-6 lg:px-20 py-10 flex justify-between">
                <Link className="text-5xl font-primary font-semibold" href="/">YosefA</Link>
                <div className="hidden xl:flex space-x-8 items-center font-primary font-medium">
                    <Link href="/blog">Blog</Link>
                    {/* <Link href="/about">About</Link>
                    <Link href="/newsletter">Newsletter</Link> */}
                    <Link href="/files/resume.pdf" target="_blank">Resume</Link>
                    <a href="https://github.com/yosefanajjar" target="_blank">
                        <Image
                            src="/github.svg"
                            width={30}
                            height={30}
                            alt="Github Logo"
                        />
                    </a>
                    {/* TODO: Add dark mode */}
                    {/* <Switch /> */}
                </div>

                <button className="xl:hidden" onClick={() => setIsOpen(true)}>
                    <Image
                        src="/menu.svg"
                        alt="menu"
                        width="50"
                        height="50"
                    />
                </button>
                {isOpen ? <Menu onClose={() => setIsOpen(false)} /> : null}

            </div>
            <div className="w-full border-t border-4 border-gray-300" />
        </div>
    )
}
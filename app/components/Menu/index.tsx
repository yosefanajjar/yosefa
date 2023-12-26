import Link from "next/link"
import Image from 'next/image'
import { CloseIcon } from "@/app/components/Icons/Close"

interface MenuProps {
    onClose: () => void;
}

export const Menu = ({ onClose }: MenuProps) => (
    <div className="bg-white fixed w-[100%] h-full top-0 left-0 z-40 flex justify-center items-center">
        <div className="flex flex-col justify-center text-center text-4xl items-center font-primary font-medium space-y-12">
            <Link href="/blog" onClick={onClose}>Blog</Link>
            {/* <Link href="/about">About</Link>
                    <Link href="/newsletter">Newsletter</Link> */}
            <Link href="/files/resume.pdf" target="_blank" onClick={onClose}>Resume</Link>
            <a href="https://github.com/yosefanajjar" target="_blank">
                <Image
                    src="/github.svg"
                    width={60}
                    height={60}
                    alt="Github Logo"
                />
            </a>
            <button className="absolute bottom-12" onClick={onClose}>
                <CloseIcon fill="black" />
            </button>
            {/* TODO: Add dark mode */}
            {/* <Switch /> */}
        </div>
    </div>
)
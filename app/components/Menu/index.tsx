import Link from "next/link"
import { CloseIcon } from "@/app/components/Icons/CloseIcon"
import { GithubIcon } from "@/app/components/Icons/GithubIcon";
import { Switch } from "@/app/components/Switch";

interface MenuProps {
    onClose: () => void;
}

export const Menu = ({ onClose }: MenuProps) => {
    return (
        <div className="bg-white dark:bg-black fixed w-[100%] h-full top-0 left-0 z-40 flex justify-center items-center">
            <div className="flex flex-col justify-center text-center text-4xl items-center font-primary font-medium space-y-12 dark:text-white">
                <Link href="/blog" onClick={onClose}>Blog</Link>
                <Link href="/about" onClick={onClose}>About</Link>
                <a href="https://yosefa.substack.com/" target="_blank">Newsletter</a>
                <Link href="/files/resume.pdf" target="_blank" onClick={onClose}>Resume</Link>
                <a href="https://github.com/yosefanajjar" target="_blank">
                    <GithubIcon />
                </a>
                <Switch />
                <button className="absolute bottom-12" onClick={onClose}>
                    <CloseIcon />
                </button>
            </div>
        </div>
    )
}
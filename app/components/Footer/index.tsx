import Link from "next/link";

export const Footer = () => (
    <>
        <div className="w-full border-t border-4 border-black dark:border-white" />
        <div className="bg-white dark:bg-black py-12 px-20">
            <div className="flex flex-col text-center md:text-left md:flex-row space-y-5 md:space-y-0 md:space-x-8 items-center font-primary font-medium justify-center dark:text-white">
                <p>© 2024</p>
                <a href="https://twitter.com/YosefAnajjar" target="_blank">Twitter</a>
                <a href="https://www.linkedin.com/in/yosefanajjar/" target="_blank">Linkedin</a>
                <a href="https://github.com/yosefanajjar">GitHub</a>
                <a href="mailto:yosefanajjar@gmail.com">Email</a>
                <Link href="/blog">Blog</Link>
                <a href="https://yosefa.substack.com/" target="_blank">Newsletter</a>
            </div>
        </div>
    </>
)
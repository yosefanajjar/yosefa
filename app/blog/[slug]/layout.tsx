import { NewsLetter } from "@/app/components/NewsLetter"
import "@/styles/highlight-js/night-owl.css"

export default function PostLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            {children}
            <div className="px-9 md:px-20 mt-20">
                <NewsLetter />
            </div>
        </div>
    )
}

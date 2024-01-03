import { Button } from "@/app/components/Button";

export const NewsLetter = () => (
    <div>
        <h2 className="heading-1">Newsletter</h2>
        <div className="bg-green-light border-4 border-black dark:border-white py-9 px-6 xl:px-28 mt-12">
            <p className="text-black-light text-2xl font-medium font-primary leading-[30px]">
                Leave your email to subscribe to my monthly newsletter where I share updates on events and blog posts I write 🚀 where I keep your in the loop of what goes in my life and the tech world from my window 🪟
            </p>
            <div className="flex justify-end mt-6">
                <Button variant="primary-dark" href="https://yosefa.substack.com/" target="_blank">
                    Subscribe
                </Button>
            </div>
        </div>
    </div>
)

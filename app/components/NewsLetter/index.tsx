"use client"

import { Button } from "@/app/components/Button";
import { Input } from "@/app/components/Input";

export const NewsLetter = () => (
    <div>
        <h2 className="heading-1">News Letter</h2>

        <div className="bg-green-light border-4 border-black py-16 px-6 xl:px-28 mt-12">
            <div className="flex flex-col xl:flex-row justify-between items-end">
                <Input />
                <div className="mt-6 xl:mt-0 w-1/4 ml-4">
                    <Button variant="primary" className="mb-2" fullWidth onClick={() => { }}>
                        Subscribe
                    </Button>
                </div>
            </div>

            <p className="mt-12 text-black-light text-opacity-70 text-2xl font-medium font-primary leading-[30px]">
                Leave your email above to subscribe to my monthly news letter where I share updates on events and blog posts I write 🚀 where I keep your in the loop of what goes in my life and the tech world from my window 🪟
            </p>
        </div>
    </div>
)
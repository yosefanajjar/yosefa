import Image from 'next/image'
import { ImageFrame } from "../components/ImageFrame";
import { Metadata } from 'next';

export const metadata: Metadata = {
    metadataBase: new URL('https://yosefa.dev'),
    title: 'About | Yosef Alnajjar',
    description: 'Learn about me, and how I started in my career progress',
    openGraph: {
        images: '/meta-image.webp'
    }
}

export default function About() {
    const contentClasses = 'prose prose-sm md:prose-lg lg:prose-xl prose-neutral prose-headings:font-primary font-secondary dark:prose-invert';
    return (
        <div className="py-12 px-9 md:px-10">
            <div className='flex flex-col md:flex-row justify-between'>
                <div className="w-full md:w-1/4 flex flex-col space-y-24">
                    <ImageFrame variant='portrait'>
                        <Image
                            src="/images/about/me.webp"
                            alt="me setting in a coffee shop"
                            fill
                            sizes="100vw"
                            className='object-cover'
                        />
                    </ImageFrame>
                    <ImageFrame variant='portrait'>
                        <Image
                            src="/images/about/gsg-talk.webp"
                            alt="me giving a talk at GSG"
                            fill
                            sizes="100vw"
                            className='object-cover'
                        />
                    </ImageFrame>
                </div>
                <div className="w-full md:w-1/2 m-auto mt-9 md:mt-16">
                    <h1 className="heading-1">
                        <span className='block'>Hi,</span>
                        <span className='block mt-3'>{"I'm Yosef"}</span>
                    </h1>
                    <div className={`mt-6 ${contentClasses}`}>
                        <p>
                            I grew up in Gaza, Palestine. From a young age I had a passion for tech and wanted to learn more about computers and the internet so I started my journey into web development when I was 14 (2015) because I was curious about how websites like YouTube work and in the summer vacation of 9th grade I learned my first programming language PHP and built my first basic full stack web app.
                        </p>
                        <p>
                            After high school I wanted to pursuit that passion and went to university to study computer science, things were different at uni I found myself studying lots of other subjects that didn’t have to do anything about programming so I eventually dropped out after a year and luckily for me there was a code academy in my city where mentors from big tech companies would come to mentor people who are learning how to code for a period of 6 months for them to become professional full stack developers so I got too excited and got accepted into the Code Academy at Gaza Sky Geeks in 2019
                        </p>
                        <Image
                            src="/images/about/gsg-graduation.webp"
                            alt="Graduating from GSG Code Academy"
                            width="700"
                            height="350"
                            className="block object-cover border-4 border-black dark:border-white"
                            sizes='100vw'
                        />
                        <p>
                            Upon graduation from the program I landed my first internship at Google For Startups in London working remotely to help a startup build their MVP of a product idea they had I worked on that project along with one other developer and with the help of our team lead from Google we managed to over deliver and afterwards my team lead referred me to a startup in London called Captur to help them build their product and I ended up working remotely for Captur for around a year and a half
                        </p>

                    </div>
                </div>
            </div>
            <div className='flex flex-col md:flex-row justify-between my-9'>
                <div className="w-full md:w-1/4 flex flex-col space-y-24">
                    <ImageFrame variant='portrait'>
                        <Image
                            src="/images/about/home-office-istanbul.webp"
                            alt="my home office in Istanbul"
                            fill
                            sizes="100vw"
                            className='object-cover'
                        />
                    </ImageFrame>
                    <ImageFrame variant='portrait'>
                        <Image
                            src="/images/about/cvibe-office.webp"
                            alt="me with my friend at the cvibe office"
                            fill
                            sizes="100vw"
                            className='object-cover'
                        />
                    </ImageFrame>
                </div>
                <div className={`w-full md:w-1/2 mt-9 md:m-auto ${contentClasses}`}>
                    <p>
                        Within that period of working for Captur I moved to Istanbul, Turkey and lived there for 2 years. I had a dream of living abroad, experience other cultures and see the world and I picked Istanbul because I already had friends living there and because it’s a beautiful historical city.
                    </p>
                    <p>
                        I wanted to work on a new challenge and work in an office to meet people and socialize and thus I found my next opportunity at a local Turkish startup owned by a VC called CVIBE I ended up working there for about a year and a half as well. I had an amazing time in Istanbul, I made lots of friends, and learned the Turkish language within 6 months, I lived in an area called Kadikoy that remains as my favorite place in Istanbul
                    </p>
                    <Image
                        src="/images/about/friends-cvibe.webp"
                        alt="Graduating from GSG Code Academy"
                        width="700"
                        height="350"
                        className="block object-cover border-4 border-black dark:border-white"
                        sizes='100vw'
                    />
                </div>
            </div>
            <div className='flex flex-col md:flex-row justify-between my-12'>
                <div className="w-full md:w-1/4 flex flex-col space-y-24">
                    <ImageFrame variant='portrait'>
                        <Image
                            src="/images/about/theodo-talk.webp"
                            alt="me giving a talk at Theodo"
                            fill
                            sizes="100vw"
                            className='object-cover'
                        />
                    </ImageFrame>
                    <ImageFrame variant='portrait'>
                        <Image
                            src="/images/about/playing-tennis.webp"
                            alt="me playing tennis in London"
                            fill
                            sizes="100vw"
                            className='object-cover'
                        />
                    </ImageFrame>
                </div>
                <div className={`w-full md:w-1/2 mt-9 md:m-auto ${contentClasses}`}>
                    <p>
                        By the end of 2022, Theodo from London reached out to me for a new job opportunity and I got excited about this opportunity because I aligned with their values and loved the culture they have around self improvement and growth mindsets. After a long round of interviews I landed an offer at Theodo and I moved to London. Discovering another beautiful and historical city was just awesome I fell in love with London the same way I fell in love with Istanbul. I made new friends and developed new habits and skills like playing tennis under the rain.
                    </p>
                    <p>
                        I had a great experience working at Theodo within their diverse team throughout 2023 and I learned a ton of stuff about leadership, code quality, etc and managed to deliver large scale projects for enterprise clients which was a great experience.
                    </p>
                    <Image
                        src="/images/about/friends-theodo.webp"
                        alt="Graduating from GSG Code Academy"
                        width="700"
                        height="350"
                        className="block object-cover border-4 border-black dark:border-white"
                        sizes='100vw'
                    />
                    <p>
                        I’m still living in London now, will continue to work on cool projects that improve people’s lives and looking forward for what’s ahead!
                    </p>
                    <p>
                        Thank you for reading! Feel free to drop me a message if you want to chat or ask a question. Subscribe to my newsletter to get notified when I add new blog posts
                    </p>
                </div>
            </div>
        </div>
    )
}

import { PostCard } from '@/app/components/PostCard';
import { getBlog } from '@/app/lib/getBlog';
import { Metadata } from 'next/types';

export const metadata: Metadata = {
    metadataBase: new URL('https://yosefa.dev'),
    title: 'Blog',
    description: 'My blog where I share updates and posts I write where I keep your in the loop of what goes in my life and the tech world from my window',
    openGraph: {
        images: '/meta-image.webp'
    }
}


export default function Blog() {
    const blog = getBlog();

    return (
        <main className="flex flex-col px-9 lg:p-20">
            <h1 className="heading-1 mt-16 lg:mt-0">
                The Blog
            </h1>
            <section className='mt-10 flex flex-col space-y-10'>
                {blog.map(blog => (
                    <div key={blog.meta.title} className="py-14 px-6 lg:px-10 xl:px-20 border-4 border-black dark:border-white bg-white dark:bg-black">
                        <PostCard
                            key={blog.meta.title}
                            title={blog.meta.title}
                            imagePath={blog.meta.imagePath}
                            tagsList={blog.meta.tags}
                            description={blog.meta.description}
                            variant='horizontal'
                            imageFrameClassName='w-[368px] h-[293.50px]'
                            slug={blog.slug}
                        />
                    </div>
                ))}
            </section>
        </main>
    )
}
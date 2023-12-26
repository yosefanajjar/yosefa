import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import remarkGfm from 'remark-gfm';
import { format } from 'date-fns';

import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote/rsc';
import rehypeHighlight from 'rehype-highlight';
import Image from 'next/image';
import { Tag } from '@/app/components/Tag';

const options: MDXRemoteProps['options'] = {
    mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [rehypeHighlight as any],
    }
}

export const generateStaticParams = async () => {
    const files = fs.readdirSync(path.join('blog'))

    const paths = files.map(filename => ({
        slug: filename.replace('.mdx', '')
    }))

    return paths
}

export async function generateMetadata({ params }: any) {
    const post = getPost(params);

    return {
        metadataBase: new URL('https://yosefa.dev'),
        title: post.frontMatter.title,
        description: post.frontMatter.description,
        openGraph: {
            images: post.frontMatter.imagePath
        }
    }
}

const getPost = ({ slug }: { slug: string }) => {
    const markdownFile = fs.readFileSync(path.join('blog', slug + '.mdx'), 'utf-8')

    const { data: frontMatter, content } = matter(markdownFile)

    return {
        frontMatter,
        slug,
        content
    }
}

export default function Post({ params }: any) {
    const props = getPost(params);

    return (
        <div className="py-9">
            <div className="px-6 md:px-20 lg:px-32 flex flex-col">
                <p className="text-black text-lg lg:text-2xl font-normal font-primary mt-6">{format(props.frontMatter.date, 'do MMMM YYY')}</p>
                <h1 className="text-black text-3xl lg:text-6xl xl:text-8xl font-semibold font-primary mt-6">{props.frontMatter.title}</h1>
                <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mt-6 lg:mt-12 xl:mt-20">
                    <p>
                        <span className="text-black text-base lg:text-2xl font-medium font-primary ">Yosef Alnajjar</span>
                        <span className="text-black text-base lg:text-2xl font-normal font-primary "> Full Stack Engineer</span>
                    </p>
                    <div className="flex space-x-3">
                        {props.frontMatter.tags.split(', ').map((tag: string) => (
                            <Tag key={tag} variant="filled" className="first:ml-0">{tag}</Tag>
                        ))}
                    </div>
                </div>
            </div>
            <div className="block w-full h-[300px] lg:h-[679px] relative mt-6">
                <Image
                    src={props.frontMatter.imagePath}
                    alt="Post Cover"
                    fill={true}
                    className="block object-cover"
                />
            </div>
            <div className="w-full h-4 bg-black"></div>
            <p className="mt-2 text-center text-base text-black-light opacity-70">{props.frontMatter.imageAuthor}</p>
            <article className='px-6 text-center md:text-left lg:max-w-10/12 prose prose-sm md:prose-lg lg:prose-xl prose-neutral mx-auto mt-14 prose-headings:font-primary font-secondary'>
                <MDXRemote source={props.content} options={options} />
            </article>
        </div>
    )
}

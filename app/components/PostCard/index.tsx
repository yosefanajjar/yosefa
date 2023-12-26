import Image from "next/image";
import { ImageFrame } from "@/app/components/ImageFrame";
import { Tag } from "@/app/components/Tag";
import { Button } from "@/app/components/Button";

interface PostCardProps {
    title: string;
    imagePath: string;
    tagsList: string[];
    description: string;
    variant?: 'vertical' | 'horizontal';
    imageFrameClassName?: string;
    slug: string;
};

export const PostCard = ({ title, imagePath, tagsList, description, variant = 'vertical', imageFrameClassName, slug }: PostCardProps) => {
    const variantClasses = variant === 'vertical' ? 'flex-col first:lg:my-10 first:lg:mr-12 lg:w-5/12' : 'flex-col md:flex-row md:space-x-4 lg:space-x-12';

    return (
        <div className={`flex ${variantClasses} w-full xl:w-full first:xl:mr-0`}>
            <div className={`${variant === 'vertical' ? 'w-full' : 'w-full md:w-1/2 xl:w-1/3'}`}>
                <ImageFrame variant="landscape" className={imageFrameClassName}>
                    <Image
                        src={imagePath}
                        alt={title}
                        fill={true}
                        className="object-cover"
                    />
                </ImageFrame>
            </div>
            <div className="flex flex-col w-full text-center lg:text-left">
                <p className="heading-3 mt-8">{title}</p>
                <div className="mt-2 flex justify-center lg:self-start">
                    {tagsList.slice(0, 3).map(tag => <Tag key={tag} variant="outlined" className="first:md:ml-0">{tag}</Tag>)}
                </div>
                <p className="description-1 mt-3 pl-3 md:pl-0 ">{description}</p>
                <div className={`${variant === 'vertical' ? 'w-full self-center' : 'w-full md:w-auto md:self-end'} `}>
                    <Button variant={variant === 'vertical' ? 'secondary' : 'primary'} className="mt-6" fullWidth={variant === 'vertical'} href={`/blog/${slug}`}>
                        {'Read Post ->'}
                    </Button>
                </div>
            </div>
        </div >
    )
}
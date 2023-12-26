import { PostCard } from "@/app/components/PostCard";
import { getBlog } from "@/app/lib/getBlog";

export const RecentPosts = () => {
    const blog = getBlog().slice(0, 3);

    return (
        <div className=" bg-pink-primary border-4 border-black px-6 py-10 xl:py-16 xl:px-14">
            <h2 className="heading-1">Recent Posts</h2>
            <div className="mt-4 flex flex-col lg:flex-row lg:flex-wrap xl:flex-nowrap justify-around xl:justify-between w-full space-y-10 lg:space-y-10 lg:space-x-12">
                {blog.map(blog => (
                    <PostCard
                        key={blog.meta.title}
                        title={blog.meta.title}
                        imagePath={blog.meta.imagePath}
                        tagsList={blog.meta.tags}
                        description={blog.meta.description}
                        slug={blog.slug}
                    />
                ))}
            </div>
        </div>
    )
}
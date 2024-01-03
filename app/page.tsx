import Image from "next/image"
import { ImageFrame } from "@/app/components/ImageFrame"
import { Button } from "@/app/components/Button"
import { tagsList } from "@/app/constants/tagsList"
import { Tag } from "@/app/components/Tag"
import { RecentPosts } from "@/app/RecentPosts"
import { MyJourney } from "@/app/MyJourney"

export default function Home() {
  return (
    <>
      <div className="flex flex-col lg:flex-row justify-between items-center p-9 md:p-20">
        <div className="flex flex-col xl:flex-row justify-between items-center w-full md:w-auto">
          <div className="w-full md:w-[380px] xl:w-[325px]">
            <ImageFrame variant="portrait">
              <Image
                src="/yosefa.webp"
                alt="yosefa"
                fill={true}
                className="object-cover"
              />
            </ImageFrame>
          </div>
          <div className="mt-8 text-center xl:text-left xl:ml-10">
            <h1 className="heading-1">Yosef Alnajjar</h1>
            <div className="mt-5">
              <p className="sub-heading-1">Full Stack Engineer</p>
              <p className="sub-heading-1">Cloud Developer</p>
            </div>
            <p className="sub-heading-1 mt-4">📍London, UK 🇬🇧</p>
            <div className="mt-10 flex xl:justify-start justify-center">
              <Button variant="primary" href='/about'>
                {'About Me ->'}
              </Button>
            </div>
          </div>
        </div>
        <div className="w-full mt-10 xl:mt-0 lg:w-3/6 xl:w-5/12 bg-purple-light rounded-[5px] border-4 border-black dark:border-white py-6 px-3 xl:p-10">
          <h2 className="heading-2">🛠️ What am I doing?</h2>
          <div className="flex flex-wrap items-center">
            {tagsList.map(tag => (<Tag variant="filled" key={tag}>{tag}</Tag>))}
          </div>
        </div>
      </div>
      <div className="px-9 md:px-20">
        <RecentPosts />
      </div>

      <div className="px-9 md:px-20">
        <MyJourney />
      </div>
    </>
  )
};

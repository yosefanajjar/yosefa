import Image from "next/image";
import { Button } from "@/app/components/Button";
import { Tag } from "@/app/components/Tag";
import { experiencesList } from "@/app/constants/experiencesList";

export const MyJourney = () => (
    <div className="mt-20">
        <h2 className="heading-1">My Journey</h2>

        <div className="bg-blue-light border-4 border-black mt-6 pb-24 relative z-20">
            <div className="flex justify-end mt-6 mr-6">
                <Button variant="primary" href="/files/resume.pdf" target="_blank">
                    Resume 📄
                </Button>
            </div>
            <div className="px-6 xl:px-40 mt-10">
                {experiencesList.map((experience, index, array) => (
                    <div className="flex flex-col xl:grid xl:grid-cols-3 xl:justify-stretch xl:items-center w-full mt-12 text-center xl:text-left" key={experience.companyName}>
                        <div className={`order-2 mt-10 xl:mt-0 ${index % 2 === 0 ? 'xl:order-1' : 'xl:order-3  justify-self-end'}`}>
                            <p className="text-black-light text-2xl xl:text-3xl font-medium font-secondary capitalize leading-[23px]">{experience.jobTitle}</p>
                            <p className="text-black-light text-opacity-70 text-xl uppercase font-medium font-secondary leading-[23px] mt-3">{experience.dates}</p>
                        </div>

                        <div className="flex flex-col items-center order-1 xl:order-2 w-full">
                            <Tag variant="filled" size="large">
                                {experience.companyName}
                            </Tag>
                            {/* TODO: Add Arrows Linking Experiences */}
                            {/* {index !== array.length - 1 ? (
                                <Image
                                    src="/arrow.svg"
                                    alt="arrow up"
                                    width={48}
                                    height={30}
                                    className="mt-2"
                                />
                            ) : null} */}
                        </div>

                        <div className={`hidden xl:block w-full ${index % 2 === 0 ? 'order-3' : 'order-1'}`} />
                    </div>
                ))}
            </div>
        </div>
    </div>
)
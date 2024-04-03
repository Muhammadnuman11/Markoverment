import Image from "next/image";
import Clouds from "../../../public/header/Clouds.png";
import HomeImg from "../../../public/header/home.png";

export default function SocialMedia() {
    return (
        <>
            <div className="pattern relative flex flex-col">
                {/* Clouds */}
                <div className="absolute right-5 top-3  md:top-9 lg:top-14 w-2/5">
                    <Image src={Clouds} priority={true} alt="Clouds" />
                </div>

                {/* Products Paragraph */}
                <div className="z-50 w-full flex justify-center items-center flex-col md:flex-row mt-36 md:mt-[224px]">
                    <div className="h-full w-full md:w-1/2 flex justify-center items-center flex-col mb-5  md:mb-0">
                        {/* Company Detail */}
                        <div className="z-9 h-4/5 w-4/5 md:w-full flex justify-end items-center flex-col text-white">
                            <h1 className="text-xl sm:text-4xl font-bold text-center w-full lg:w-[90%]">Social Media Marketing</h1>
                            <p className="mt-2 md:mt-3 text-justify w-full lg:w-[90%]">Social media marketing has revolutionized the way businesses connect with their audience. At Markoverment, we understand the power of social platforms in shaping brand identity and driving engagement. Our team specializes in crafting compelling social media strategies that resonate with your target audience, boost brand awareness, and foster meaningful interactions that drive results.</p>
                            <p className="mt-2 md:mt-3 text-justify w-full lg:w-[90%]">In today's digital landscape, social media is a key driver of brand visibility and customer engagement. Markoverment offers tailored social media marketing solutions designed to help businesses harness the full potential of platforms like Facebook, Instagram, Twitter, and LinkedIn. From content creation to community management and analytics, we provide the expertise and insights needed to elevate your brand's presence and drive impactful results.</p>
                        </div>
                    </div>
                    <div className="h-full w-full md:w-1/2 flex justify-end items-center flex-col">
                        {/* Home Image */}
                        <div className="h-4/5 w-[90%] flex items-center justify-center md:justify-end flex-col">
                            <Image src={HomeImg} width={550} priority={true} alt="Company Name" />
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}


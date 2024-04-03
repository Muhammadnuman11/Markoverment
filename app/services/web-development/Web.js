import Image from "next/image";
import Clouds from "../../../public/header/Clouds.png";
import HomeImg from "../../../public/header/home.png";

export default function Web() {
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
                            <h1 className="text-xl sm:text-4xl font-bold text-center w-full lg:w-[90%]">Web Development</h1>
                            <p className="mt-2 md:mt-3 text-justify w-full lg:w-[90%]">Web development is the backbone of a successful online presence. At Markoverment, we specialize in crafting custom websites that reflect your brand and drive results. Our team combines creativity with technical expertise to deliver user-friendly, visually stunning websites that engage your audience and boost conversions.</p>
                            <p className="mt-2 md:mt-3 text-justify w-full lg:w-[90%]">Take your online presence to new heights with Markoverment&apos;s web development services. From responsive design to seamless functionality, we build websites that captivate visitors and elevate your brand. Whether you&apos;re launching a new site or need to revamp your existing one, trust us to deliver a website that stands out in today&apos;s digital landscape.</p>
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


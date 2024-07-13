import Image from "next/image";
import Clouds from "../../../public/header/Clouds.png";
import HomeImg from "../../../public/header/home.png";

export default function Graphic() {
    return (
        <>
            <div className="pattern relative flex flex-col">
                {/* Clouds */}
                <div className="absolute right-5 top-3  md:top-9 lg:top-14 w-2/5">
                    <Image src={Clouds} priority={true} alt="Clouds" />
                </div>

                {/* Products Paragraph */}
                <div className="z-10 w-full flex justify-center items-center flex-col md:flex-row mt-36 md:mt-[224px]">
                    <div className="h-full w-full md:w-1/2 flex justify-center items-center flex-col mb-5  md:mb-0">
                        {/* Company Detail */}
                        <div className="z-9 h-4/5 w-4/5 md:w-full flex justify-end items-center flex-col text-white">
                            <h1 className="text-xl sm:text-4xl font-bold text-center w-full lg:w-[90%]">Graphic Designing</h1>
                            <p className="mt-2 md:mt-3 text-justify w-full lg:w-[90%]">Graphic design is the cornerstone of brand storytelling and visual communication. At Markoverment, our team of designers is dedicated to creating impactful visuals that resonate with your audience. From logos to marketing materials, we craft designs that capture attention and convey your brand message effectively.</p>
                            <p className="mt-2 md:mt-3 text-justify w-full lg:w-[90%]">Elevate your brand with Markoverment&apos;s graphic design expertise. Our talented designers blend creativity with strategy to produce stunning visuals that set your brand apart. Whether you need a new logo or compelling social media graphics, we&apos;re here to bring your vision to life and help your brand shine.</p>
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


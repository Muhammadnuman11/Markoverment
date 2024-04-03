import Image from "next/image";
import Clouds from "../../../public/header/Clouds.png";
import HomeImg from "../../../public/header/home.png";

export default function DigitalMarketing() {
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
                            <h1 className="text-xl sm:text-4xl font-bold text-center w-full lg:w-[90%]">Digital Marketing</h1>
                            <p className="mt-2 md:mt-3 text-justify w-full lg:w-[90%]">In the digital realm, effective digital marketing can make or break a business. At Markoverment, we specialize in crafting dynamic digital marketing strategies to help your brand shine. From engaging social media campaigns to strategic email marketing, we&apos;re here to boost your online presence and drive meaningful connections with your audience.</p>
                            <p className="mt-2 md:mt-3 text-justify w-full lg:w-[90%]">Markoverment is your go-to partner for digital marketing success. With our tailored approach and expert insights, we help businesses like yours thrive in the digital age. Let us elevate your brand&apos;s visibility, increase your online reach, and drive measurable results that propel your business forward.</p>
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


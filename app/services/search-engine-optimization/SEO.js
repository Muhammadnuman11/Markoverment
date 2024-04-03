import Image from "next/image";
import Clouds from "../../../public/header/Clouds.png";
import HomeImg from "../../../public/header/home.png";

export default function SEO() {
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
                            <h1 className="text-xl sm:text-4xl font-bold text-center w-full lg:w-[90%]">Search Engine Optimization</h1>
                            <p className="mt-2 md:mt-3 text-justify w-full lg:w-[90%]">Markoverment offers top-notch SEO services tailored to suit your business needs. With expert keyword optimization and strategic link building, we boost your website&apos;s search engine rankings, ensuring maximum visibility and engagement with your target audience.</p>
                            <p className="mt-2 md:mt-3 text-justify w-full lg:w-[90%]">At Markoverment, our dedicated team of SEO specialists works tirelessly to enhance your online presence. Through meticulous research and innovative strategies, we drive organic traffic to your website, helping you achieve long-term success in the digital realm.</p>
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


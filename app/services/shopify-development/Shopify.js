import Image from "next/image";
import Clouds from "../../../public/header/Clouds.png";
import HomeImg from "../../../public/header/home.png";

export default function Shopify() {
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
                            <h1 className="text-xl sm:text-4xl font-bold text-center w-full lg:w-[90%]">Shopify Development</h1>
                            <p className="mt-2 md:mt-3 text-justify w-full lg:w-[90%]">Shopify development is the cornerstone of a successful online store. At Markoverment, we specialize in creating bespoke Shopify solutions that elevate your brand and drive sales. From intuitive designs to seamless functionality, we ensure your Shopify store exceeds expectations and delivers a superior shopping experience.</p>
                            <p className="mt-2 md:mt-3 text-justify w-full lg:w-[90%]">Elevate your e-commerce game with Markoverment&apos;s Shopify development expertise. Our team of experts crafts custom Shopify solutions tailored to your business needs, ensuring your online store stands out in a competitive market. Trust us to handle everything from design to deployment, so you can focus on growing your business.</p>
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


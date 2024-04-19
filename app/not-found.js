import Image from "next/image";
import Clouds from "../public/header/Clouds.png";
import Page404 from "../public/404.png";
import Link from "next/link";

export default function NotFound() {
    return (
        <div className="pattern relative flex flex-col">
            {/* Clouds */}
            <div className="absolute right-5 top-3  md:top-9 lg:top-14 w-2/5">
                <Image src={Clouds} priority={true} alt="Clouds" />
            </div>

            <div className="w-full flex flex-col items-center md:flex-row pt-36 md:pt-48">
                <div className="h-full w-full md:w-1/2 flex justify-center items-center flex-col md:mt-0">

                    {/* Company Detail */}
                    <div className="w-4/5 flex justify-center items-center flex-col text-white">
                        <h1 className="text-7xl font-semibold text-[#fbbb37] md:font-bold md:text-9xl">
                            Oops!
                        </h1>
                        <p className="text-lg my-8 text-gray-300 text-center">We can&apos;t seem to find a page you are looking for.</p>
                        <Link href='/' className="w-48 mx-auto rounded border border-[#fbbb37] bg-[#fbbb37] py-2 px-8 text-lg text-black hover:border hover:text-white hover:bg-transparent focus:outline-none">Back To Home</Link>
                    </div>
                </div>
                <div className="h-full w-full md:w-1/2 flex justify-end items-center flex-col">
                    {/* Home Image */}
                    <div className="h-4/5 w-[90%] flex items-center justify-center md:justify-end flex-col">
                        <Image src={Page404} priority={true} alt="Page Not Found" className="invert" />
                    </div>
                </div>
            </div>
        </div>
    )
}

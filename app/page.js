'use client'
import Image from "next/image";
import { ReactTyped } from "react-typed";
import Clouds from "../public/header/Clouds.png";
import Logo from "../public/header/Logo.png";
import Name from "../public/header/Name.png";
import HomeImg from "../public/header/home.png";

export default function Home() {
  return (
    <>
      <div className="pattern relative h-[1000px] md:h-screen flex">
        {/* Clouds */}
        <div className="absolute right-5 top-3  md:top-9 lg:top-14 w-2/5">
          <Image src={Clouds} priority={true} alt="Clouds" />
        </div>

        <div className="z-50 w-full flex flex-col md:flex-row">
          <div className="h-full w-full md:w-1/2 flex justify-center items-center flex-col md:mt-0">
            {/* Company Logo And Name */}
            <div className="z-9 h-3/5  w-full flex items-center justify-end flex-col">
              <Image src={Logo} width={110} priority={true} alt="Company Logo" className="mb-5" />
              <Image src={Name} width={300} priority={true} alt="Company Name" />
            </div>

            {/* Company Detail */}
            <div className="z-9 h-2/5 w-4/5 flex justify-center items-center flex-col text-white mt-5 md:mt-0">
              <h1 className="text-xl sm:text-4xl font-bold">
                <ReactTyped
                  strings={['Social Media Marketing', 'Digital Marketing', 'Search Engine Optimization', 'Shopify Development', 'Web Development']}
                  typeSpeed={40}
                  loop
                />
              </h1>
              <p className="mt-2 md:mt-3 text-justify w-full lg:w-9/10">
                Markoverment offers top-notch digital services, including Social Media Marketing, Digital Marketing, SEO, Shopify Development, and Web Development. With a commitment to excellence and innovation, we help businesses thrive online.
              </p>
              {/* <p className="mt-2 md:mt-3 text-center w-full lg:w-9/10">Additionally, our proficiency in Shopify Development and Web Development ensures that businesses have seamless, user-friendly online experiences tailored to their specific requirements. At Markoverment, we are committed to delivering innovative solutions that empower our clients to succeed in today's digital landscape.
              </p> */}
              {/* <button className="w-40 py-2 mt-3 md:mt-6 font-bold border-2 border-[#fbc245] rounded-full cursor-pointer hover:bg-[#fbc245]">Start</button> */}
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

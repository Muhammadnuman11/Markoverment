import Image from "next/image";
import Clouds from "../public/header/Clouds.png";
import Logo from "../public/header/Logo.png";
import Name from "../public/header/Name.png";

export default function Home() {
  return (
    <>
      <div className="pattern relative h-screen flex">
        {/* Clouds */}
        <div className="absolute right-0 top-3  md:top-9 lg:top-14 w-1/2">
          <Image src={Clouds} width={600} priority={true} alt="Clouds" />
        </div>

        <div className="md:flex w-full">
          {/* Company Logo And Name */}
          <div className="z-9 h-1/2 md:h-[90%] w-full md:w-1/2 flex items-center justify-end flex-col">
            <Image src={Logo} width={200} priority={true} alt="Company Logo" className="mb-5" />
            <Image src={Name} width={300} priority={true} alt="Company Name" />
          </div>

          {/* Company Detail */}
          <div className="z-9 h-1/2 md:h-[90%] w-full md:w-1/2 flex justify-center md:justify-end items-center md:items-start flex-col text-black">
            <h1 className="text-3xl font-bold mb-2 md:mb-4">Digital Marketing</h1>
            <p className="w-3/5 md:w-1/2 mt-3 md:mt-6">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit porro at official dolor rerum? Dicta est vero.
            </p>
            <p className="w-3/5 md:w-1/2 mt-3 md:mt-6">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit porro at official dolor rerum? Dicta est vero.
            </p>
            {/* <button className="w-40 py-2 mt-3 md:mt-6 font-bold border-2 border-[#fbc245] rounded-full cursor-pointer hover:bg-[#fbc245]">Start</button> */}
          </div>
        </div>

      </div>

    </>
  );
}
